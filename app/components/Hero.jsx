import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="md:px-4">

        <div className="container m-auto md:flex md:px-0 mt-8">
            <div className="left flex flex-col gap-3 px-4 md:pl-0 md:pr-5 lg:pr-8 md:w-1/2 md:justify-center">
                <div className="heading font-bold text-2xl text-zinc-700 md:text-3xl lg:text-4xl">Design that Works. Brands that Shine.</div>
                <div className="para text-zinc-600 md:text-lg lg:text-xl">theEdit is your one-stop design shop for building a brand that stands out. We create impactful logos, user-friendly websites, and strategic design solutions that not only look amazing but deliver real results. Whether you need to attract new customers, boost brand awareness, or simply streamline your online presence, theEdit has the expertise to turn your vision into a reality.</div>

                <div className="button gap-4 flex items-center md:mt-3 md:text-lg lg:text-xl">
                    <Link href="/about" className="bg-indigo-500 text-white py-2 px-4 rounded-md" >Learn More</Link>
                </div>
            </div>
            <div className="right mt-8 md:w-1/2 md:mt-0">
                <Image src="/hero.png" height={500} width={500} alt="" className="w-full h-full md:rounded-2xl object-cover" />
            </div>
        </div>
        </div>
    )
}