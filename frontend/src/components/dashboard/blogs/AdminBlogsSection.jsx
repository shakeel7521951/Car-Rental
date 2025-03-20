import React from "react";

const AdminBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "March 20, 2025",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "March 18, 2025",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      author: "Alice Johnson",
      date: "March 15, 2025",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Admin Blogs Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-600 text-sm">By {blog.author}</p>
              <p className="text-gray-500 text-xs">{blog.date}</p>
              <div className="flex justify-between mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;