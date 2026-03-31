"use client";

import { useEffect } from "react";
import { ModalProvider } from "@/components/OrderModal";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <ModalProvider>
      <div className="antialiased">{children}</div>
    </ModalProvider>
  );
}
