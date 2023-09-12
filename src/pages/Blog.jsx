import { useEffect } from "react";
import bgImage from "../assets/imgs/bg.png";
import { useGetBlogsQuery } from "@/redux/api/apiSlice";
import Author from "../components/icons/Author";
import Comments from "../components/icons/Comments";
import { Link } from "react-router-dom";
import formatDateAndTime from "../utils/getDate";

export default function BlogPage() {
  const { data: blogs, isLoading } = useGetBlogsQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //Async loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-[#243499] h-32 w-full">
        Loading...
      </div>
    );
  }

//Reversing the data for getting newest post at the top
  const reverseData = blogs?.data ? [...blogs.data].reverse() : [];

  //Getting trending post. Filtering according comments. As we don't have any comment yet, we can still get the data by slicing blogs
  const trendingData =
    blogs?.data?.length > 7
      ? blogs?.data?.filter((data) => data.comment > 10)
      : blogs?.data.slice(2, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-0 lg:px-0 xl:px-0 mt-5">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`relative overflow-hidden bg-cover bg-no-repeat md:p-0 md:h-48 lg:h-64 xl:h-80 p-12`}
      ></div>
      <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap justify-between gap-10 my-10">
        <div className="md:w-[70%] lg:w-[70%] xl:w-[70%] w-full">
          <h1 className="lg:text-4xl text-3xl px-4 xl:px-0 font-semibold ">
            Latest Blogs
          </h1>
          <div className="border border-b-slate-50 my-3"></div>
          <div className="w-full flex flex-col gap-12">
            {reverseData?.map((data, i) => (
              <div key={i} className="w-full shadow-lg border">
                <Link to={`/blog/${data?._id}`}>
                  <img
                    src={data?.media}
                    alt=""
                    className="w-full max-h-[600px] h-auto cursor-pointer"
                  />
                </Link>
                <div className="mt-5 border-t-[1px] p-6">
                  <p className="txt-sm text-gray-600">
                    {formatDateAndTime(data?.date).formattedDate}
                  </p>
                  <Link to={`/blog/${data?._id}`}>
                    <h1
                      className={
                        "md:text-4xl lg:text-4xl xl:text-4xl text-3xl font-bold text-black cursor-pointer"
                      }
                    >
                      {data?.title}
                    </h1>
                  </Link>
                  <p className="mt-2 txt-sm">
                    {data?.post[0]?.slice(0, 200)}..
                  </p>
                  <div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-gray-600">
                        <Author size={14} />
                      </div>
                      <h4 className="text-sm text-gray-500">{data.author}</h4>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-gray-600">
                        <Comments size={14} />
                      </div>
                      <h4 className="text-sm text-gray-500">
                        {data.comment} comments
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[30%] lg:w-[30%] xl:w-[30%] w-full">
          <h1 className="lg:text-4xl text-3xl px-4 xl:px-0 font-semibold">
            Trending Post
          </h1>
          <div className="border border-b-slate-50 my-3"></div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              {trendingData?.map((data, i) => (
                <div key={i} className="w-full shadow-lg border">
                  <img
                    src={data?.media}
                    alt=""
                    className="max-h-[300px] h-auto"
                  />
                  <div className="p-4 border-t-[1px]">
                    <Link to={`/blog/${data?._id}`}>
                      <h1
                        className={
                          " text-xl font-bold text-black cursor-pointer"
                        }
                      >
                        {data?.title}
                      </h1>
                    </Link>
                    {/* Getting formatted date and time from a hook */}
                    <p className="text-[12px] text-gray-600">
                      {formatDateAndTime(data?.date).formattedDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  py-5 my-10">
        <h1 className="lg:text-4xl text-3xl px-4 xl:px-0 font-semibold ">
          More Blogs
        </h1>
        <div className="border  border-b-slate-50 my-3"></div>
        <div className="grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-cols-1 gap-5">
          {blogs?.data?.slice(0, 4).map((data, i) => (
            <div key={i} className="w-full shadow-lg border">
              <Link to={`/blog/${data?._id}`}>
                <img
                  src={data?.media}
                  alt=""
                  className="w-full h-[200px] cursor-pointer"
                />
              </Link>
              <div className="mt-5 border-t-[1px] p-4">
                <p className="text-[12px] text-gray-600">
                  {formatDateAndTime(data?.date).formattedDate}
                </p>
                <Link to={`/blog/${data?._id}`}>
                  <h1 className={"text-xl font-bold text-black cursor-pointer"}>
                    {data?.title}
                  </h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
