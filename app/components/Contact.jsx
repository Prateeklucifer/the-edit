import React from 'react'

export default function ContactCmp() {
    return (
        <div className=" container m-auto flex flex-col lg:px-28 xl:px-72 ">
            <div className="heading text-3xl font-bold text-gray-800 text-center mt-6">Contact Us</div>
            <div className="right px-4 py-8 flex flex-col gap-6 lg:py-16 lg:px-12 xl:px-28">
                <div className="name flex flex-col gap-4 md:flex-row">
                    <div className="firstname md:w-1/2">
                        <label htmlFor="last" className="block mb-2">First Name</label>
                        <input type="text" name="" id="last" className="w-full px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300" />
                    </div>
                    <div className="lastname md:w-1/2">
                        <label htmlFor="name" className="block mb-2">Last Name</label>
                        <input type="text" name="" id="name" className="w-full px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300" />
                    </div>
                </div>

                <div className="company">
                    <label htmlFor="company" className="block mb-2">Company Name</label>
                    <input type="text" name="" id="company" className="w-full px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300" />
                </div>
                <div className="email">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="text" name="" id="email" className="w-full px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300" />
                </div>
                <div className="phone">
                    <label htmlFor="phone" className="block mb-2">Phone number</label>
                    <input type="text" name="" id="phone" className="w-full px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300" />
                </div>
                <div className="messege">
                    <label htmlFor="msg" className="block mb-2">Message</label>
                    <textarea name="" id="msg" className="w-full h-52 px-2 py-1 outline-indigo-500 outline-1 ring-1 rounded-sm ring-gray-300"></textarea>
                </div>

                <button className="text-white px-4 py-2 rounded-md bg-indigo-500 w-full">Lets Talk</button>

            </div>
        </div>
    )
}