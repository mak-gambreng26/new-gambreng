import { NextResponse } from "next/server";
import {
  createAuthToken,
  getAuthSecret,
  getOwnerAccessCode,
} from "@/lib/auth";

const SESSION_COOKIE = "mak_gambreng_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

export async function POST(request: Request) {
  let code: unknown;

  try {
    ({ code } = await request.json());
  } catch {
    return NextResponse.json({ message: "Format permintaan tidak valid." }, { status: 400 });
  }

  const expectedCode = getOwnerAccessCode();
  const authSecret = getAuthSecret();

  if (!expectedCode || !authSecret) {
    return NextResponse.json(
      { message: "Auth belum dikonfigurasi. Isi OWNER_ACCESS_CODE dan AUTH_SECRET." },
      { status: 500 }
    );
  }

  if (typeof code !== "string" || code.trim() !== expectedCode) {
    return NextResponse.json({ message: "Kode akses salah." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  const expiresAt = Date.now() + SESSION_DURATION_SECONDS * 1000;
  const token = await createAuthToken(authSecret, expiresAt);

  response.cookies.set({
    name: SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  return response;
}