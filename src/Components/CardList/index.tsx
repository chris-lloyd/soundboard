import React, { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import DeleteSoundContent from "../deleteSoundContent";
import Modal from "../Modal";

interface cardsProps {
  id: string;
  image: string;
  link: string;
  title: string;
}

const CardList = ({
  cards,
  playing,
  setPlaying,
  refresh,
}: {
  cards: cardsProps[];
  playing: boolean;
  setPlaying: Function;
  refresh: Function;
}) => {
  const [currentSound, setCurrentSound] = useState({
    link: "",
    id: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  const handlePlay = (link: string, id: string) => {
    setCurrentSound((prev) => {
      !prev.link && setPlaying(true);
      prev.link !== link && setPlaying(true);
      prev.link === link && setPlaying(true);

      return { link: link, id };
    });
  };

  const reactPlayer = useCallback(() => {
    return (
      <ReactPlayer
        url={currentSound.link}
        playing={playing} // Control playback
        onEnded={() => setPlaying(false)}
        controls={true} // Show player controls
        width="0" // Set width to 0 to hide the player
        height="0" // Set height to 0 to hide the player
      />
    );
  }, [playing, currentSound.link]);

  return (
    <>
      <div className="flex flex-wrap  gap-8 p-2 w-full">
        {cards.map((card: cardsProps) => (
          <div
            key={card.id}
            className="max-w-48 max-h-72 bg-zinc-500 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative group">
              <img
                className="w-48 h-48 object-cover"
                src={card.image}
                alt="Music cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => {
                    handlePlay(card.link, card.id);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full focus:outline-none shadow-lg transform transition-transform hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-6.084-3.422A1 1 0 007 8.618v6.764a1 1 0 001.668.832l6.084-3.422a1 1 0 000-1.664z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-4">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">
                {card.title}
              </h5>
            </div>
            {/* delete Button */}
            <button
              onClick={() => {
                handleOpenModal();
                setPlaying(false);
                setCurrentSound({ id: card.id, link: card.link });
              }}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg focus:outline-none"
              aria-label="Delete"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
        {reactPlayer()}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleOpenModal}
        children={
          <DeleteSoundContent
            currentSound={currentSound}
            handleOpenModal={handleOpenModal}
            refresh={refresh}
          />
        }
      />
    </>
  );
};

export default CardList;
