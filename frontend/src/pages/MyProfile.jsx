import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useProfileQuery } from "../redux/slices/UserApi";
import { clearProfile, setProfile } from "../redux/slices/UserSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: profileData, isLoading, error } = useProfileQuery();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (profileData?.user) {
      dispatch(setProfile(profileData.user));
    }
  }, [profileData, dispatch]);

  const profile = useSelector((state) => state.user.profile);

  const handleImageChange = async (e) => {
    const profilePic = e.target.files[0];
    if (profilePic) {
      const formData = new FormData();
      formData.append("profilePic", profilePic);

      try {
        const response = await updateProfile(formData).unwrap();
        dispatch(setProfile(response?.user));
        setSelectedImage(URL.createObjectURL(profilePic));
        toast.success("Profile image updated!", { position: "top-center" });
      } catch (error) {
        toast.error(error.message || "Failed to update image.", {
          position: "top-center",
        });
      }
    }
  };

  const handleDeleteProfile = async () => {
    try {
      dispatch(clearProfile());
      navigate("/");
      toast.success("Profile deleted successfully!", { position: "top-center" });
    } catch (error) {
      toast.error("Failed to delete profile.", { position: "top-center" });
    }
  };

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error loading profile</div>;
  if (!profile) return <div className="text-center mt-10">No profile found</div>;

  const userInitial = profile?.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
        <div
          className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center bg-gray-100 text-2xl font-bold text-blue-600 cursor-pointer relative overflow-hidden group"
          onClick={() => document.getElementById("imageInput").click()}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />
          ) : profile.profilePic?.url ? (
            <img src={profile.profilePic?.url} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            userInitial
          )}
          <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition-opacity duration-300">
            Change Photo
          </div>
        </div>

        <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />

        <p className="text-2xl font-bold mt-4 text-blue-600">Hello, {profile.name}</p>
        <p className="text-lg font-medium text-gray-700">{profile.email}</p>
        <p className="text-sm text-gray-500">Role: {profile.role}</p>

        <div className="w-full flex justify-between mt-6 gap-10">
          <Link
            to="/update-password"
            className="w-1/2 py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-md"
          >
            Update Password
          </Link>
          <button
            onClick={handleDeleteProfile}
            className="w-1/2 py-2 rounded-md text-white font-medium bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-md"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
