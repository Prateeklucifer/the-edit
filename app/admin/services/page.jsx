"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminServices() {

  const [Services, setServices] = useState([])

  const getAllServices = async () => {
    let res = await fetch('http://localhost:3000/api/services')
    let data = await res.json()
    setServices(data.data)
  }

  const updateTitle = (event, index) => {
    let newData = [...Services]
    newData[index].title = event.target.value
    setServices(newData)
  }

  const updateParagraph = (event, index) => {
    let newData = [...Services]
    newData[index].paragraph = event.target.value
    setServices(newData)
  }

  const updateData = async () => {
    let res = await fetch('http://localhost:3000/api/admin/services', {
      method: "POST",
      body: JSON.stringify({ AllServices: Services })
    })

    if (res.status == 200) {
      sucessMsg("data updated sucessfully")
    } else {
      errorMsg("something went wrong")
    }
  }

  const sucessMsg = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  const errorMsg = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  useEffect(() => {
    getAllServices()
  }, [])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <div className="md:mx-4">
        <div className="container m-auto px-4 md:px-0">
          <div className="heading text-3xl font-semibold text-center my-4">Services</div>
          <div className="Services flex flex-col gap-6">
            {Services?.map((item, index) => (
              <div className="faq flex flex-col" key={index}>
                <label htmlFor="name">
                  <div className="block py-2">Title</div>
                  <input type="text" name="name" id="name" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.title} onChange={(e) => {
                    updateTitle(e, index)
                  }} />
                </label>
                <label htmlFor="para">
                  <div className="block py-2">Paragraph</div>
                  <textarea name="para" id="para" className="px-2 rounded-sm outline-none ring-1 ring-zinc-400 w-full" value={item.paragraph} onChange={(e) => {
                    updateParagraph(e, index)
                  }}></textarea>
                </label>
              </div>
            ))}
          </div>
          <div className="buttons my-4">
            <button className="bg-zinc-800 text-white py-[2px] px-4 rounded-md" onClick={() => {
              updateData()
            }}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}
