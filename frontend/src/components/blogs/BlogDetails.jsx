import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "./blogData";
import Button from "../Button";
import { CiHeart } from "react-icons/ci";


function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  if (!blog) return <h2>Blog not found</h2>;

  const handleAddComment = () => {
    if (newComment.trim() !== "" && userName.trim() !== "") {
      const newCommentObj = {
        name: userName,
        text: newComment,
        date: new Date().toLocaleString(),
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setUserName("");
    }
  };

  const handleLikeComment = (index) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };

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
            <h2 className="md:text-2xl text-[18px] font-bold cursor-pointer flex items-center justify-center gap-2 group text-black pb-1">
              Description
            </h2>
            <p className="text-black text-lg sm:text-[18px]">{blog.description}</p>
          </div>

          {/* Comment Input Section */}
          <div className="mt-3 p-2">
            <div className="w-full sm:w-6/12">
              {/* <input
                type="text"
                className="w-full border rounded-md p-2 mb-2 focus:outline-[#11110f] transition-all"
                placeholder="Enter your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              /> */}
              <textarea
                className="w-full border rounded-md p-2 focus:outline-[#11110f] transition-all"
                rows="4"
                placeholder="Enter your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button text="Comment" bgHover="black" textHover="white" cutHover="white"
                onClick={handleAddComment} />
            </div>
          </div>

          <hr className="my-4" />

          {/* Comments List */}
          <div className="px-2 bg-[#ffee0274] mt-3 p-4 rounded-md">
            <h3 className="text-lg font-bold">Comments:</h3>
            {comments.length === 0 ? (
              <p className="text-gray-600">No comments yet. Be the first to comment!</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {comments.map((comment, index) => (
                  <li key={index} className="p-4 rounded shadow-sm w-full   bg-white">
                    <div className=" flex justify-between w-full sm:w-4/12 mb-2">
                      {/* <p className="text-sm font-bold">{comment.name}</p> */}
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                    <div className=" flex justify-start gap-2 items-center">
                      <span><CiHeart  className=" mt-[6px]" /></span>
                      <button
                        className="text-black  text-sm mt-1"
                        onClick={() => handleLikeComment(index)}
                      >
                        {comment.likes} Likes
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
