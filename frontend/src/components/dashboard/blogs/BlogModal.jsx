import { useState } from "react";
import { useAddBlogMutation } from "../../../redux/slices/BlogSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BlogModel = ({ isOpen, onClose }) => {
  const [addBlog, { isLoading, error }] = useAddBlogMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    blogImage: null,
    description: "",
    previewImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        blogImage: file,
        previewImage: URL.createObjectURL(file), 
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("blogImage", formData.blogImage); 

      // Call the API
      const res = await addBlog(formDataToSend).unwrap();
      console.log(res);
      if (res.status === 200) {
        onClose();
        toast.success(res.message, { position: "top-center" });
        navigate("/admin-blogs")
      }
    } catch (error) {
      toast.error(error.data?.message || "An error occurred");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000a4] bg-opacity-50 overflow-auto py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[440px] h-auto">
        <h2 className="text-xl font-bold my-4 mt-10">Add New Blog</h2>
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border mb-2"
            required
          />
          <input
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border mb-2"
            required
          />
          <input
            name="blogImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border mb-2"
            aria-label="Upload blog image"
            required
          />
          {formData.previewImage && (
            <img
              src={formData.previewImage}
              alt="Preview"
              className="w-full h-32 object-cover rounded mb-2"
            />
          )}
          <textarea
            name="description"
            placeholder="Content"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border mb-2"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModel;