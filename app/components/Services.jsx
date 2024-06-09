"use client";

import { useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa6";

export default function ServicesCmp() {
  const [services, setServices] = useState(undefined);

  const getAllServices = async () => {
    let res = await fetch("http://localhost:3000/api/services");
    let data = await res.json();
    setServices(data.data);
  };

  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {services ? (
        services?.map((item) => (
          <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md">
            <div className="heading text-2xl font-bold mb-3">{item.title}</div>
            <div className="text-zinc-600">{item.paragraph}</div>
          </div>
        ))
      ) : (
        <>
        <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md animate-pulse">
          <div className="heading text-2xl font-bold w-[30%] h-6 bg-gray-300 mb-4"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
        </div>
        <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md animate-pulse">
          <div className="heading text-2xl font-bold w-[30%] h-6 bg-gray-300 mb-4"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
        </div>
        <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md animate-pulse">
          <div className="heading text-2xl font-bold w-[30%] h-6 bg-gray-300 mb-4"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
        </div>
        <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md animate-pulse">
          <div className="heading text-2xl font-bold w-[30%] h-6 bg-gray-300 mb-4"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
          <div className="text-zinc-600 w-full h-4 bg-gray-300 mb-3"></div>
        </div>
        </>
      )}
    </div>
  );
}
