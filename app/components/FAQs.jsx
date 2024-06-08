"use client";

import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function FAQs() {
  const [AllFAQs, setAllFAQs] = useState(undefined);

  const getAllFAQs = async () => {
    let res = await fetch("http://localhost:3000/api/faq");
    let data = await res.json();
    setAllFAQs(data.data);
  };

  useEffect(() => {
    getAllFAQs();
  }, []);
  return (
    <div className="md:px-4 md:text-lg">
      <div className="faqs container px-4 md:px-0 m-auto flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        {AllFAQs?.map((item) => (
          <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer">
            <summary className="text-neutral-900 flex items-center justify-between gap-2">
              <div className="left font-semibold">
                {item.title}
              </div>
              <div className="right group-open:rotate-180">
                <HiOutlineChevronDown size={26} />
              </div>
            </summary>
            <div className="mt-4 text-neutral-700">
              {item.paragraph}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
