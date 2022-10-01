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
    <article className="cursor-pointer  ">
      <div className="relative max-w-sm aspect-square rounded-xl overflow-hidden">
        <img src={image} alt="" className=" w-full h-full object-cover" />
        <button className=" w-12 h-12 place-items-center grid absolute right-4 bottom-4 bg-white rounded-full">
          <HiOutlineHeart
            className="heart transition-all active:scale-125"
            size={28}
            fill={`${isLiked ? "red" : "gray"}`}
            stroke={`${isLiked ? "red" : "gray"}`}
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
