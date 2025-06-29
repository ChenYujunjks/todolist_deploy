"use client";

import { useAuth } from "@/contexts/authcontext";

export default function UserBadge() {
  const { user } = useAuth();

  return (
    <span className="text-sm text-gray-600">
      👤 Current user: <strong>{user ?? "Guest"}</strong>
    </span>
  );
}
