"use client";

import { SessionProvider } from "next-auth/react";
import NavBar from "./NavBar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NavBar />   {/* client NavBar uses hooks */}
      {children}
    </SessionProvider>
  );
}