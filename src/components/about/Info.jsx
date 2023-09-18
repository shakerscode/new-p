import { useState } from "react"; 
import ArrowRight from "../icons/ArrowRight";

const content = [
  {
    title: "Blog",
    content:
      "Read up on product innovations and updates, company announcements, community spotlights, and more. ",
  }, 
  {
    title: "Customer stories",
    content:
      "See how some of the most influential businesses around the world use GitHub to provide the best services, products, and experiences for their customers. ",
  },
  {
    title: "Careers",
    content:
      "Help us build the home for all developers. We’re a passionate group of people dedicated to software development and collaboration. Come join us! ",
  }, 
];

function Info() {
  return (
    <section className="max-w-[1280px] mx-auto w-full h-auto flex flex-col justify-center items-center px-4 mb-20">
      <div className="">
        {content.map((c, i) => (
          <Common key={i} c={c} />
        ))}
      </div>
    </section>
  );
}

export default Info;

const Common = ({ c }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    data-aos="fade-up-in" 
            data-aos-duration="1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-start items-start flex-col md:w-2/4 mx lg:w-2/4 xl:w-2/4 mx-auto text-start gap-2 py-10 border-b-2 border-b-gray-200 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <h1
          className={`md:text-2xl lg:text-2xl xl:text-2xl text-xl font-bold  ${
            isHovered ? "text-[#243499]" : "text-gray-900"
          }`}
        >
          {c.title}
        </h1>
        <div
          className={`${
            isHovered
              ? "text-[#243499] translate-x-3 transition-all .3s ease-in-out"
              : "text-gray-900"
          }`}
        >
          <ArrowRight size={20} />
        </div>
      </div>
      <p
        className={` md:text-xl lg:text-xl xl:text-xl text-md ${
          isHovered ? "text-[#243499]" : "text-gray-700"
        }  `}
      >
        {c.content}
      </p>
    </div>
  );
};
