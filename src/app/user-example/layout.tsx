// app/dashboard/layout.tsx
"use client";

import { AuthProvider } from "@/contexts/authcontext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="p-4">{children}</div>
    </AuthProvider>
  );
}
