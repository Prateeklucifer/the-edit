"use client";

import { useState, useEffect } from "react";

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
      {services?.map((item) => (
        <div className="box p-4 md:px-12 xl:px-16 min-h-72 bg-zinc-100 flex flex-col justify-center items-center rounded-md">
          <div className="heading text-2xl font-bold mb-3">{item.title}</div>
          <div className="text-zinc-600">{item.paragraph}</div>
        </div>
      ))}
    </div>
  );
}
