import CardProps from "../../index.types";
import Card from "../Card";

const Main = ({ cardList }: { cardList: CardProps[] }) => {
  return (
    <main className="p-6 bg-[#16181d] overflow-scroll  grid justify-items-center  gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 flex-1">
      {cardList.map((res: CardProps) => {
        return <Card key={res.id} {...res} isLiked={false} />;
      })}
    </main>
  );
};

export default Main;
