import { useState } from "react";
import { Link } from "react-router-dom";
import Author from "../icons/Author";
import Comments from "../icons/Comments";
import Edit from "../icons/Edit";
import Delete from "../icons/Delete";
import DeleteModal from "../../pages/Admin/components/DeleteModal";
import { Modal } from "../../pages/Admin/components/Common/CommonModal"; 

export default function BlogCard({ blog, dynamicHight }) {
  // eslint-disable-next-line no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("userToken"));

  function formatDateAndTime(dateTimeString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    const timeOptions = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };

    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

    return { formattedDate, formattedTime };
  }

  const { formattedDate } = formatDateAndTime(blog?.date);
  const handleEdit = () => {
    setIsModalEditOpen(true);
  };

  const closeModal = () => {
    setIsModalEditOpen(false);
  };

  return (
    <div
      // onMouseOver={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col gap-5 shadow-md border-[1px] h-auto w-full border-solid border-gray-100 p-4 mb-8 rounded-[12px] relative"
    >
      <div
        className={`w-[100%] md:h-${dynamicHight[0]} lg:h-[${dynamicHight[1]}] h-full rounded-md cursor-pointer`}
      >
        <Link to={`/blog/${blog?._id}`}>
          <img
            src={
              blog?.media
                ? blog?.media
                : "https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
            }
            alt="Blog image"
            className="w-full h-full rounded-md"
          />
        </Link>
      </div>
      <div className="">
        <p className="text-xs text-gray-500">{formattedDate} </p>
        <Link to={`/blog/${blog?._id}`}>
          <h1 className="xl:text-2xl text-xl font-bold text-black link link-hover">
            {blog?.title}
          </h1>
        </Link>
        <p className="text-sm mt-4 w-full text-gray-600 lg:w-4/5 h-full">
          {blog?.post[0]?.slice(0, 200)}...
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="text-gray-600">
            <Author size={14} />
          </div>
          <h4 className="text-sm text-gray-500">{blog.author}</h4>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <div className="text-gray-600">
            <Comments size={14} />
          </div>
          <h4 className="text-sm text-gray-500">{blog.comment} comments</h4>
        </div>

        {/* if we need to show edit and delete btn for normal user then we will show this section  */}
        {token && (
          <div className="bg-white w-20 ml-auto items-center gap-2 shadow-md hidden lg:hidden px-4 py-2 rounded-md">
            <button
              onClick={() => setIsModalEditOpen(true)}
              className="hover:text-[#243499] cursor-pointer"
            >
              <Edit size={20} />
            </button>
            <div className="hover:text-[#243499] cursor-pointer mt-1">
              <button onClick={() => setIsModalOpen(true)}>
                <Delete size={20} />
              </button>
              {isModalOpen && (
                <DeleteModal id={blog?._id} setIsModalOpen={setIsModalOpen} />
              )}
            </div>
          </div>
        )}
      </div>

      {/* if we need to show edit and delete btn for normal user then we will show this section  */}
      {isHovered && (
        <div className="bg-white hidden absolute md:flex lg:flex left-1 top-1 items-center gap-2 shadow-md  px-4 py-2 rounded-md">
          <button
            onClick={handleEdit}
            className="hover:text-[#243499] cursor-pointer"
          >
            <Edit size={20} />
          </button>
          <div className="hover:text-[#243499] cursor-pointer mt-1">
            <button onClick={() => setIsModalOpen(true)}>
              <Delete size={20} />
            </button>
            {isModalOpen && (
              <DeleteModal id={blog?._id} setIsModalOpen={setIsModalOpen} />
            )}
          </div>
        </div>
      )}
      {isModalEditOpen && (
        <Modal blog={blog} mode={"edit"} closeModal={closeModal} />
      )}
    </div>
  );
}
