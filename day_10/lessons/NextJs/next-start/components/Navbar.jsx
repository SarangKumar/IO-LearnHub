import Link from "next/link";
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
      }
  ];
  return (
    <nav className="flex gap-x-3 my-4 text-sm ">
      {links.map((link) => (
        <Link className="hover:underline capitalize" href={link.links}>{link.name}</Link>
      ))}
  
    </nav>
  );
};

export default Navbar;
