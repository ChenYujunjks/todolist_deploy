"use client";
// app/page.tsx
import UserBadge from "@/contexts/components/userbadge";
import { useAuth } from "@/contexts/authcontext";
export default function Home() {
  const { user, setUser } = useAuth();
  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
      <UserBadge />
      {user ? (
        <div className="space-y-4">
          <p className="text-green-600 font-medium">
            ✅ Logged in as: <strong>{user}</strong>
          </p>
          <button
            onClick={() => setUser(null)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Log out
          </button>
        </div>
      ) : (
        <button
          onClick={() => setUser("Bruce")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Log in
        </button>
      )}
    </div>
  );
}
