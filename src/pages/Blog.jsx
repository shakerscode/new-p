import { useEffect, useState } from "react";
import bgImage from "../assets/imgs/bg.png";
import { useGetBlogsQuery } from "@/redux/api/apiSlice";
import Author from "../components/icons/Author";
import Comments from "../components/icons/Comments";
import { Link } from "react-router-dom";
import formatDateAndTime from "../utils/getDate";
import blogHero from "../assets/imgs/bloghero.png";
import XClose from "../components/icons/XClose";

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 lg:px-0 xl:px-0 my-10 z-10 w-full h-[600px] bg-cover bg-center rounded-2xl relative">
      {/* <img src={blogHero} alt="blog-hero" className="w-full h-full rounded-2xl"/> */}
      <div className="bg-sky-400 w-full h-full absolute top-0 bottom-0 rounded-2xl">
        <div className="w-full h-full md:px-12 px-5 py-16 text-white flex justify-center items-center flex-col">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="py-3 text-center text-white text-3xl font-bold"
          >
            Our All Blog Are In Medium. Please Read Them From There.
          </h3>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="flex cursor-pointer justify-center items-center gap-1 md:gap-4 py-2 px-3 md:py-[13px] md:px-[21px] bg-[#FD5B1D]  text-sm 
              md:text-md lg:text-md text-white rounded-lg font-bold border-[1px] border-solid border-[#FD5B1D] hover:bg-white hover:text-[#243499] 
              ml-2 transition ease-in-out delay-450 shadow-md"
          >
            Start Reading
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmationModal
          url={"https://medium.com/"}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

function ConfirmationModal({ url, setIsModalOpen }) {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white md:pt-8 flex-col flex justify-center items-center px-5 nd:px-8 pb-0 md:pb-4 rounded-lg shadow-md w-[90%] md:w-[50%]  lg:w-2/4  h-[30%] overflow-y-auto relative">
        <h3 className="text-2xl text-center">
          Are you sure you want to read our blogs?
        </h3>
        <div className="flex justify-center items-center gap-3 mt-4">
          <a
            onClick={() => setIsModalOpen(false)}
            className=" bg-violet-600 hover:bg-violet-500 px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out"
          >
            No
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <button className=" bg-[#FD5B1D] hover:bg-[#FD5B1D] px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out">
              Read More
            </button>
          </a>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="cursor-pointer p-2  absolute top-3 right-3 text-sm md:text-md lg:text-md text-black rounded-md font-bold border-[1px] border-solid border-gray-200 hover:bg-white hover:text-[#243499] ml-2 transition ease-in-out delay-450"
        >
          <XClose size={20} />
        </button>
      </div>
    </div>
  );
}
