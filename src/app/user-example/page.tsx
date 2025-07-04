"use client";

import { useAuth } from "@/contexts/authcontext";

export default function DashboardHome() {
  const { user, setUser } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        📋 User Panel
      </h2>

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
