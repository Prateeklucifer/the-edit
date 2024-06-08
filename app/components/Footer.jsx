import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "FAQs",
      href: "/faq",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="container m-auto">
        <div className="px-4 flex flex-col items-center gap-8 lg:flex-row py-6 justify-between">
          <div className="left flex flex-col items-center justify-center lg:flex-row gap-8">
            <div className="heading">
              <Link
                href={"/"}
                className="logo font-semibold text-xl md:text-2xl text-zinc-700"
              >
                the<span className="text-indigo-500">Edit.</span>
              </Link>
            </div>
            <div className="copy"> &copy; 2024 theEdit </div>
          </div>
          <ul className="text-sm lg:text-base flex flex-wrap  items-center justify-center gap-4">
            {links.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className="text-zinc-600 hover:text-zinc-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
