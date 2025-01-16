import React from 'react'

const Blog = () => {
  
    const blogs = [
      {
        id: 1,
        title: "The Joy of Reading",
        author: "John Doe",
        date: "January 10, 2025",
        content: "Reading books opens up new worlds, enhances our imagination, and broadens our perspectives. In this blog, we explore how reading can enrich your life and why you should make it a daily habit.",
      },
      {
        id: 2,
        title: "Top 10 Must-Read Classics",
        author: "Jane Smith",
        date: "January 8, 2025",
        content: "Discover the timeless masterpieces that have shaped literature over the centuries. From 'Pride and Prejudice' to '1984', we list the top 10 must-read classics for every book lover.",
      },
      {
        id: 3,
        title: "How to Organize Your Book Collection",
        author: "Emily Johnson",
        date: "January 5, 2025",
        content: "A well-organized book collection can make finding your favorite titles easier and more enjoyable. In this post, we share tips and tricks for organizing your books like a pro.",
      },
    ];
  return (
  
      <div className="bg-gray-100 min-h-screen p-6 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog</h1>
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  By {blog.author} on {blog.date}
                </p>
                <p className="text-gray-600 leading-relaxed">{blog.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



  
  );
};



export default Blog
