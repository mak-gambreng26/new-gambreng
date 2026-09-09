"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import { AppCard } from "@/components/ui/AppCard";
import { useAppStore } from "@/store/useAppStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAppStore((s) => s.login);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (code.length < 4) {
      setError("Kode akses minimal 4 digit");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setError(result.message ?? "Gagal masuk. Coba lagi.");
        return;
      }

      login();
      router.push("/dashboard");
    } catch {
      setError("Server tidak dapat dihubungi. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-safe">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="h-20 w-20 rounded-3xl bg-primary flex items-center justify-center mb-4 shadow-soft">
          <span className="text-white text-4xl">🍵</span>
        </div>
        <h1 className="text-page-title text-body">Mak-Gambreng</h1>
        <p className="text-caption text-muted mt-1">Owner Command Center</p>
      </motion.div>

      <AppCard>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AppInput
            id="code"
            label="Kode Akses Owner"
            type="password"
            inputMode="numeric"
            placeholder="••••"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            error={error}
            autoFocus
          />
          <AppButton type="submit" size="lg" disabled={isLoading}>
            {isLoading ? "Memeriksa..." : "Masuk"}
          </AppButton>
        </form>
      </AppCard>

      <p className="text-caption text-muted text-center mt-6">
        Lupa kode akses? Hubungi administrator sistem.
      </p>
    </div>
  );
}
