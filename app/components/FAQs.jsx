import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";


export default function FAQs() {
  return (
    <div className="md:px-4 md:text-lg">
      <div className="faqs container px-4 md:px-0 m-auto flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer">
          <summary className="text-neutral-900 flex items-center justify-between gap-2">
            <div className="left font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, iusto?</div>
            <div className="right group-open:rotate-180"><HiOutlineChevronDown size={26} /></div>
          </summary>
          <div className="mt-4 text-neutral-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis laudantium dignissimos totam illo dolore neque magnam hic qui cumque accusamus culpa nobis ex veritatis nesciunt illum quae minus aspernatur, explicabo minima!
          </div>
        </details>
        <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer">
          <summary className="text-neutral-900 flex items-center justify-between gap-2">
            <div className="left font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, iusto?</div>
            <div className="right group-open:rotate-180"><HiOutlineChevronDown size={26} /></div>
          </summary>
          <div className="mt-4 text-neutral-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis laudantium dignissimos totam illo dolore neque magnam hic qui cumque accusamus culpa nobis ex veritatis nesciunt illum quae minus aspernatur, explicabo minima!
          </div>
        </details>
        <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer">
          <summary className="text-neutral-900 flex items-center justify-between gap-2">
            <div className="left font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, iusto?</div>
            <div className="right group-open:rotate-180"><HiOutlineChevronDown size={26} /></div>
          </summary>
          <div className="mt-4 text-neutral-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis laudantium dignissimos totam illo dolore neque magnam hic qui cumque accusamus culpa nobis ex veritatis nesciunt illum quae minus aspernatur, explicabo minima!
          </div>
        </details>
        <details className="group border-b-[1px] py-4 border-neutral-300 w-full cursor-pointer">
          <summary className="text-neutral-900 flex items-center justify-between gap-2">
            <div className="left font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, iusto?</div>
            <div className="right group-open:rotate-180"><HiOutlineChevronDown size={26} /></div>
          </summary>
          <div className="mt-4 text-neutral-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis laudantium dignissimos totam illo dolore neque magnam hic qui cumque accusamus culpa nobis ex veritatis nesciunt illum quae minus aspernatur, explicabo minima!
          </div>
        </details>
      </div>
    </div>
  )
}