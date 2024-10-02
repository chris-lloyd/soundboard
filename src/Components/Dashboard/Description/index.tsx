import { useState } from "react";
import Button from "../../Button";
import Modal from "../../Modal";
import AddSoundContent from "../../AddSoundContent";

const Description = ({ refresh,setPlaying }: { refresh: Function ,setPlaying:Function}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Left Content */}
      <div className="flex flex-row gap-2 items-end ">
        <div>
          <p className="text-3xl font-bold neon-purple">Soundboard</p>
        </div>

        <div>
          <Button
            onClick={handleOpenModal}
            text=""
            icon={
              <svg
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            }
          />
        </div>

        <div>
        <Button
            onClick={()=>setPlaying(false)}
            text=""
            icon={
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 9v6m4-6v6" />
            </svg>
            }
          />
        </div>
      </div>

      {/* Right Logo */}
      <div className="w-12 h-12">
        <img
          src="https://wikimediafoundation.org/wp-content/uploads/2023/03/Sound-of-All-Human-Knowledge-winner-announcement-press-release-image.png"
          alt="Logo"
          className="w-full h-full"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleOpenModal}
        children={<AddSoundContent refresh={refresh}/>}
      />
    </div>
  );
};

export default Description;
