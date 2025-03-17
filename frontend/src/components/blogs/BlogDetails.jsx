import React from "react";
import { useParams } from "react-router-dom";
import blogs from "./blogData";
import { FaArrowRight } from "react-icons/fa6";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;
  return (
    <div className="bg-[#fff]">
      <div className="mx-4 py-10">
        <h2 className="text-lg sm:text-2xl text-start font-bold mx-2 sm:w-[60%]">
          {blog.title}
        </h2>
        <img
          src={blog.image}
          alt="Image"
          className="mt-4 w-full h-96 object-cover"
        />

        <div className="max-w-8xl mx-auto py-10">
          {/* Introduce Section */}

          <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
            <h2 className="text-lg sm:text-[20px]">12/12/2021</h2>

            <h2 className="text-lg sm:text-[20px] md:mr-60 ">
              Category: {blog.category}
            </h2>
          </div>

          {/* Description Section */}
          <div className="flex justify-between items-start mt-4 flex-col gap-4 sm:gap-4">
            <h2 className="md:text-2xl text-[18px] font-bold cursor-pointer flex items-center justify-center gap-2 group text-[#1447e6] pb-1">
              Description
            </h2>

            <p className="text-black text-lg sm:text-[18px]">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
