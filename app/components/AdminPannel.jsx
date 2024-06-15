"use client";

import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPannel() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  const links = [
    {
      name: "Blogs",
      href: "/admin/blogs",
    },
    {
      name: "Services",
      href: "/admin/services",
    },
    {
      name: "About Us",
      href: "/admin/about",
    },
    {
      name: "FAQs",
      href: "/admin/faq",
    },
    {
      name: "Enquiry",
      href: "/admin/contact",
    },
  ];

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  async function removeToken() {
    let res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      setTimeout(() => {
        router.push("/login");
      });
    } else {
      // will throw error
    }
  }

  return (
    <nav className="py-3 md:py-4 px-4">
      <div className="container m-auto flex items-center justify-start md:justify-between gap-6">
        <button
          className="forMobi md:hidden"
          onClick={() => {
            handleHamburger();
          }}
        >
          <HiBars3 size={30} />
        </button>
        <Link
          href={"/"}
          className="logo font-semibold text-xl md:text-2xl text-zinc-700"
        >
          the<span className="text-indigo-500">Edit.</span>
        </Link>
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
            isOpen ? "flex left-0" : "-left-[100%]"
          } flex-col sidebar fixed top-0 h-screen bg-white w-60 text-neutral-900 py-3 px-4 z-[40] transition-all duration-300 ease-in-out`}
        >
          <div className="header flex justify-start items-center">
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
                <Link href={link.href} className="block">
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="bg-zinc-900 text-white py-1 rounded-sm" onClick={()=>{removeToken()}}>logout</button>
          </ul>
        </div>
        <ul className="hidden md:flex gap-7 items-center md:text-sm lg:text-base">
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
          <button
            className="text-white bg-zinc-900 rounded-sm ring-1 ring-white/40 hover:bg-zinc-800 px-4 py-1 "
            onClick={() => {
              removeToken();
            }}
          >
            logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
