import React from 'react'
import ServicesCmp from '../components/Services'

export default function ServicesPage() {
    return (
        <div className="md:px-4">
            <div className="container m-auto px-4 md:px-0">
                <div className="text-2xl md:text-3xl my-8 font-bold text-zinc-700 text-center">Services</div>
                <ServicesCmp/>
            </div>
        </div>
    )
}
