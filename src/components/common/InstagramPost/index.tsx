import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { Heart, MessageCircle } from "lucide-react";

import { BsThreeDots } from "react-icons/bs";
import ProfilePic from "../../../assets/ProfilePic.jpg";
// import PostImage from "../../assets/PostImage.jpg"; // Replace with actual post image

const InstagramPost = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-lg w-96 overflow-hidden ">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">archanarajeshwar</p>
            <p className="text-xs text-gray-500">Location-Portfolio</p>
          </div>
        </div>
        <BsThreeDots className="text-gray-600 text-xl cursor-pointer" />
      </div>

      {/* Post Image */}
      <img
        src={ProfilePic}
        alt="Post"
        className="w-full h-80 object-cover bg-gray-200"
      />

      {/* Like & Comment Section */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setLiked(!liked)}>
            <Heart
              className="text-2xl transition-all"
              color={liked ? "#ef4444" : "#6b7280"} // Red when liked, gray when not
              fill={liked ? "#ef4444" : "none"} // Fill red when liked
            />
          </button>
          <MessageCircle className=" transform scale-x-[-1] text-2xl text-gray-500 cursor-pointer" />
        </div>

        {/* Caption */}
        <p className="mt-2 text-sm text-gray-900">
          <span className="mr-1 font-semibold">archanarajeshwar</span>Never
          giving up is my Magic.
        </p>
      </div>
    </div>
  );
};

export default InstagramPost;
