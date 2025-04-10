"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/Login" })}
      className="text-sm bg-blue-400 px-2 text-white rounded-3xl"
    >
      Logout
    </button>
  );
}