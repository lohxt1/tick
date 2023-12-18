"use client";

import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn("cursor-pointer text-bl-one", pathname == href ? "underline underline-offset-4" : "")}>
      {children}
    </Link>
  );
};

export default NavLink;
