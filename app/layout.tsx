import React from "react";
import "@/styles/globals.css";
import { cn } from "@/utils/tailwind";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const runtime = "edge";

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen overflow-hidden bg-bg-one font-inter text-tx-one antialiased")}>
        <div>layout</div>
        {children}
      </body>
    </html>
  );
}
