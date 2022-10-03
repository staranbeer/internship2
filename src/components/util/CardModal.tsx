import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import Modal from "./Modal";
interface CardModalProps {
  title: string;
  description: string;
  image: string;
  id: string;
  isLiked: boolean;
  isOpen: boolean;
  dateCreated: string;
  onClose: () => void;
  setLiked: (value: string) => void;
}

const CardModal = ({
  title,
  description,
  image,
  id,
  onClose,
  isLiked,
  setLiked,
  isOpen,
  dateCreated,
}: CardModalProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-lg">{title}</h2>
        <button
          onClick={() => {
            setLiked(id);
          }}
          className="heart-container shrink-0 w-10 h-10 grid place-items-center bg-[#16181d] rounded-full"
        >
          <HiOutlineHeart
            className="heart transition-all"
            size={24}
            fill={`${isLiked ? "red" : "#f3f3f3"}`}
            stroke={`${isLiked ? "red" : "#f3f3f3"}`}
          />
        </button>
      </div>

      <div className="my-5 rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="inline-block font-bold  py-1 rounded-md">
        {new Date(Date.parse(dateCreated)).toLocaleDateString()}
      </div>
      <div className="overflow-hidden">
        <p
          className={`mt-5 inline-block ${
            showDescription ? "" : "truncate text-ellipsis"
          } `}
        >
          {description}
        </p>
        {description.length > 60 && (
          <button
            onClick={() => setShowDescription((i) => !i)}
            className="block  text-base text-gray-400 font-bold"
          >
            {showDescription ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      <div>
        <a
          href={image}
          download
          target="_blank"
          className="btn inline-block btn-secondary mt-3"
        >
          Download Image
        </a>
      </div>
    </Modal>
  );
};

export default CardModal;
