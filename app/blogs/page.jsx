import React from 'react'
import BlogsCmp from '../components/Blogs'

export default function BlogsPage() {
  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        <div className="heading text-2xl md:text-3xl font-bold text-center text-zinc-700 py-8">All Blogs</div>
        <BlogsCmp />
      </div>
    </div>
  )
}
