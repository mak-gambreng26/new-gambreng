"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface AppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
}

export function AppModal({ open, onOpenChange, title, description, children }: AppModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-mobile bg-white rounded-t-card p-safe pb-bottom-safe pt-5 px-5"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-1">
                  <Dialog.Title className="text-card-title text-body">{title}</Dialog.Title>
                  <Dialog.Close className="min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2 -mt-2">
                    <X size={20} className="text-muted" />
                  </Dialog.Close>
                </div>
                {description && (
                  <Dialog.Description className="text-caption text-muted mb-4">
                    {description}
                  </Dialog.Description>
                )}
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
