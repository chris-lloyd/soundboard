import axios from "axios";
import React from "react";
import { api } from "../../api";

interface deleteSoundContentProps {
  link: string;
  id: string;
}

const DeleteSoundContent = ({
  currentSound,
  handleOpenModal,
  refresh,
}: {
  currentSound: deleteSoundContentProps;
  handleOpenModal: Function;
  refresh: Function;
}) => {
  const handleOnConfirm = async () => {
    await axios.delete(`${api.playlist}/${currentSound.id}`);
    refresh();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="rounded-lg p-6 ">
        <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleOnConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={() => handleOpenModal()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSoundContent;
