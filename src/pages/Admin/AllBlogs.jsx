import Loader from "../../components/UI/Loader";
import { useGetBlogsQuery } from "../../redux/api/apiSlice";
import Blog from "./components/Blog";

function AllBlogs() {
  const {
    data: blogs,
    error,
    isLoading,
  } = useGetBlogsQuery({ refetchOnMountOrArgChange: true });
  const arrayEl = [1, 2, 3, 4, 5, 6];
  const reverseData = blogs?.data ? [...blogs.data].reverse() : [];

  if (isLoading) {
    return arrayEl.map((el, index) => <Loader key={index} />);
  }

  if (error) {
    return <div>Error: {error.message} Network error</div>;
  }

  return (
    <div className="">
      <div className="mt-8">
        {reverseData.length <= 0 && (
          <p className="text-center text-xl text-gray-400">
            No blog post available
          </p>
        )}
        {reverseData?.map((blog, i) => (
          <Blog blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AllBlogs;
