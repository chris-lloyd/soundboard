import React from "react";

const CardList = () => {
  const cards = [
    { id: 1, title: "Card 1", content: "This is the content for Card 1." },
    { id: 2, title: "Card 2", content: "This is the content for Card 2." },
    { id: 3, title: "Card 3", content: "This is the content for Card 3." },
    { id: 4, title: "Card 4", content: "This is the content for Card 4." },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
