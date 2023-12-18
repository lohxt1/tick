import React from "react";
import "@/styles/globals.css";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import NavLink from "@/components/navBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const runtime = "edge";

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{process.env.NODE_ENV !== "production" && <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />}</head>
      <body className={cn("min-h-screen overflow-hidden bg-bg-one font-inter text-tx-one antialiased")}>
        <nav className="absolute left-0 top-0 z-10 flex w-full flex-row gap-x-4 border-b border-sh-one/20 bg-bg-one p-8 py-4">
          <NavLink href={`/dashboard`}>Dashboard</NavLink>
          <NavLink href={`/reservations`}>Reservations</NavLink>
        </nav>
        {children}
      </body>
    </html>
  );
}
