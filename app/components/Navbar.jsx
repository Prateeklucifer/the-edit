"use client";

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="py-3 md:py-4 px-4">
      <div className="container m-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="logo font-semibold text-xl md:text-2xl text-zinc-700"
        >
          the<span className="text-indigo-500">Edit.</span>
        </Link>
        <button
          className="forMobi md:hidden"
          onClick={() => {
            handleHamburger();
          }}
        >
          <HiBars3 size={30} />
        </button>
        <div
          onClick={() => {
            handleHamburger();
          }}
          className={`${
            isOpen ? "flex" : "hidden"
          } overlay top-0 left-0 h-screen w-screen bg-black/40 z-[30] fixed`}
        ></div>
        <div
          className={`${
            isOpen ? "flex right-0" : "-right-[100%]"
          } flex-col sidebar fixed top-0 h-screen bg-white w-60 text-neutral-900 py-3 px-4 z-[40] transition-all duration-300 ease-in-out`}
        >
          <div className="header flex justify-end items-center">
            <button
              onClick={() => {
                handleHamburger();
              }}
            >
              {" "}
              <HiOutlineX size={30} />{" "}
            </button>
          </div>
          <ul className="flex flex-col space-y-4 font-medium px-2 mt-4">
            {links.map((link, key) => (
              <li
                key={key}
                onClick={() => {
                  handleHamburger();
                }}
              >
                <Link href={link.href} className="">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="hidden md:flex gap-7">
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
    </nav>
  );
}
