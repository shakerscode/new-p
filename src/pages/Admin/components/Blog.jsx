import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../../../components/icons/Comments";
import Delete from "../../../components/icons/Delete";
import Edit from "../../../components/icons/Edit";
import DeleteModal from "./DeleteModal";
import Author from "../../../components/icons/Author";
import { Modal } from "./Common/CommonModal";
import formatDateAndTime from "../../../utils/getDate"

function Blog({ blog }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("userToken"));

   
  //handling edit post
  const handleEdit = () => {
    setIsModalEditOpen(true);
  };

  const closeModal = () => {
    setIsModalEditOpen(false);
  };

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col md:flex-row gap-5 shadow-md border-[1px] h-auto md:h-60 lg:h-60 border-solid border-gray-100 p-4 mb-8 rounded-[12px] relative"
    >
      <div className="md:w-[350px] w-[100%] h-full rounded-md cursor-pointer">
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
      <div className="w-full md:w-3/4 lg:w-3/4 h-full">
        <p className="text-sm text-gray-500">{formatDateAndTime(blog?.date).formattedDate} </p>
        <Link to={`/blog/${blog?._id}`}>
          <h1 className="md:text-2xl text-xl font-bold text-black link link-hover">
            {blog?.title}
          </h1>
        </Link>
        <p className="text-sm mt-4 w-full text-gray-600">
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
        {token && (
          <div className="bg-white w-20 ml-auto flex items-center gap-2 shadow-md md:hidden lg:hidden px-4 py-2 rounded-md">
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

export default Blog;
