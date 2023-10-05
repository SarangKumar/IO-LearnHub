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
  console.log(pathname); // /about

  // / -> /about
  // /about -> /about
  // /posts -> /about

  return (
    <nav className="flex gap-x-3 my-4 text-sm ">
      {links.map((link) => (
        <Link
          key={link.links}
          className={`${link.links==pathname && 'underline'} hover:bg-slate-200 capitalize`}
          href={link.links}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
