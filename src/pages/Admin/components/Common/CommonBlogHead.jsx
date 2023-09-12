/* eslint-disable no-case-declarations */
import { useState } from "react"; 
import Edit from "../../../../components/icons/Edit";
import { Modal } from "./CommonModal";

function CommonBlogHead() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-full mt-4">
      <div className="flex justify-between items-center border-b-[1px] mt-3 border-solid border-gray-300 py-2 px-2 mb-2"> 
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex ml-auto justify-between items-center gap-4 bg-[#243499] px-4 py-2 rounded-lg border-[1px] border-solid border-[#243499] mb-2 mt-5 cursor-pointer font-bold text-white hover:bg-white hover:text-[#243499]"
        >
          Create Post <Edit size={18} />
        </button>
      </div>
      {isModalOpen && (
        <Modal blog={null} mode={"create"} closeModal={closeModal} />
      )}
    </div>
  );
}

export default CommonBlogHead;
 