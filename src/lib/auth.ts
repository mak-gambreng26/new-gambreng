const textEncoder = new TextEncoder();

function encodeBase64Url(value: Uint8Array) {
  let binary = "";
  for (const byte of value) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createAuthToken(secret: string, expiresAt: number) {
  const payload = encodeBase64Url(
    textEncoder.encode(JSON.stringify({ role: "owner", expiresAt }))
  );
  const key = await getSigningKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(payload));

  return `${payload}.${encodeBase64Url(new Uint8Array(signature))}`;
}

export async function verifyAuthToken(token: string | undefined, secret: string) {
  if (!token) return false;

  const [payload, encodedSignature] = token.split(".");
  if (!payload || !encodedSignature) return false;

  try {
    const key = await getSigningKey(secret);
    const validSignature = await crypto.subtle.verify(
      "HMAC",
      key,
      decodeBase64Url(encodedSignature),
      textEncoder.encode(payload)
    );
    if (!validSignature) return false;

    const parsed = JSON.parse(
      new TextDecoder().decode(decodeBase64Url(payload))
    ) as { role?: string; expiresAt?: number };

    return parsed.role === "owner" && typeof parsed.expiresAt === "number" &&
      parsed.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (secret) return secret;

  // Keep local setup friction low, but never allow this fallback in production.
  return process.env.NODE_ENV === "production"
    ? null
    : "local-development-only-change-me";
}

export function getOwnerAccessCode() {
  const code = process.env.OWNER_ACCESS_CODE;
  if (code) return code;

  // Demo fallback for local development. Production must configure the secret.
  return process.env.NODE_ENV === "production" ? null : "1234";
}