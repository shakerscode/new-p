import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleBlogQuery } from "../redux/api/apiSlice";
import Facebook from "../components/icons/Facebook";
import Linkedin from "../components/icons/Linkedin";
import Twitter from "../components/icons/Twitter";
import Instagram from "../components/icons/Instagram";
import Author from "../components/icons/Author";
import formatDateAndTime from "../utils/getDate";

export default function AllUserSingleBlog() {
  const { id } = useParams();
  const { data: singleBlog, isLoading } = useSingleBlogQuery(id);

  //For starting viewing from the top.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //It tooks some time to get data from DB. For this time we can set some text or spinners so that user can understand that data is coming. For Async operation.
  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-[#243499] h-32 w-full">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto min-h-screen pt-12">
      <div className="w-[100%] mx-auto md:h-[700px] lg:h-[700px] xl:h-[700px] h-[300px] relative">
        <div className="absolute w-full h-full bg-gray-700 opacity-60"></div>
        <img
          src={singleBlog?.media}
          alt=""
          className="w-full h-full rounded-lg opacity-100 text-black"
        />
        <div className="absolute bottom-2 md:bottom-12 lg:bottom-12 xl:bottom-12 md:p-12 lg:p-12 xl:p-12 p-5 rounded-full text-white">
          <h1 className="md:text-5xl lg:text-5xl xl:text-5xl text-4xl font-[Domine] opacity-100">
            {singleBlog?.title}
          </h1>
          {/* Getting formatted date and time from a hook */}
          <h1 className="md:text-xl lg:text-xl xl:text-xl text-md mt-2 font-[Domine]">
            {formatDateAndTime(singleBlog?.date).formattedDate}
          </h1>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-fit mt-16 pb-10 ">
        <div className="flex justify-between items-center gap-4 border-solid border-b-[1px] border-b-gray-200 py-3">
          <div className="flex items-center gap-4 ">
            <div>
              <Author size={24} />
            </div>
            <h2 className="text-xl">{singleBlog?.author}</h2>
          </div>
          <div className="flex items-center gap-4">
            <p>Share:</p>
            <div className="flex items-center gap-1">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=http://www.aetherlane.com/blog/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500"
              >
                <Facebook size={20} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=http://www.aetherlane.com/blog/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`https://www.instagram.com/?url=http://www.aetherlane.com/blog/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-red-500"
              >
                <Instagram size={20} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=http://www.aetherlane.com/blog/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-500"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-lg flex gap-8 flex-col text-gray-900 pt-5">
          {singleBlog?.post?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
