import React from 'react'
import FAQs from '../components/FAQs'

export default function FAQsPage() {
    return (
        <div className="md:px-4">
            <div className="container px-4 m-auto md:px-0">
                <div className="heading text-2xl font-bold text-center text-zinc-700 my-12">Frequently Asked Questions</div>
                <FAQs />
            </div>
        </div>
    )
}
