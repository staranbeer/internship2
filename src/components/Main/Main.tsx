import { useContext, useState } from "react";
import CardProps from "../../index.types";
import SearchContext from "../context/SearchContext";
import Card from "./Card";

const Main = () => {
  const { cardList } = useContext(SearchContext);

  return (
    <main className="p-6 bg-[#16181d] overflow-scroll  grid justify-items-center  gap-10 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 flex-1">
      {cardList.length === 0 ? (
        <div className="text-white font-bold ">
          ! Search for something in the text box !
        </div>
      ) : (
        cardList.map((res: CardProps) => {
          return <Card key={res.id} {...res} isLiked={false} />;
        })
      )}
    </main>
  );
};

export default Main;
