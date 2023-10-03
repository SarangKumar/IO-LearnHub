"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const links = [
    {
      links: "/",
      name: "home",
    },
    {
      links: "/posts",
      name: "posts",
    },
    {
      links: "/about",
      name: "about",
    },
  ];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-x-3 my-4 text-sm ">
      {links.map((link) => (
        <Link
          key={link.links}
          className={`${
            pathname === link.links && "underline"
          } hover:underline capitalize`}
          href={link.links}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
