import React from "react";
import CardProps from "../index.types";
import { HiOutlineHeart } from "react-icons/hi";
const Card = ({
  id,
  title,
  description,
  image,
  dateCreated,
  isLiked = false,
}: CardProps & { isLiked: boolean }) => {
  return (
    <article className="cursor-pointer w-full  ">
      <div className="relative max-w-sm aspect-square rounded-xl overflow-hidden mx-auto">
        <img src={image} alt="" className=" w-full h-full object-cover" />
        <div className="w-full  absolute bottom-3 flex justify-between items-center px-5 ">
          <div className="bg-[#16181d] text-white font-bold px-5 py-1 rounded-md">
            {new Date(Date.parse(dateCreated)).toLocaleDateString()}
          </div>
          <button className="heart-container w-12 h-12 grid place-items-center bg-[#16181d] rounded-full">
            <HiOutlineHeart
              className="heart transition-all"
              size={28}
              fill={`${isLiked ? "red" : "#f3f3f3"}`}
              stroke={`${isLiked ? "red" : "#f3f3f3"}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
