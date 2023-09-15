import { useState } from "react";
import { compliance } from "../constants/constants";
import ChevronArrow from "../icons/ChevronArrow";

function BlogContent() {
  const [contentIndex, setContentIndex] = useState(0);
 
  return (
    <section className="px-4 my-0 md:my-5">
      <div className="md:h-[500px] lg:h-[500px] xl:h-[500px] h-auto mx-auto max-w-[1280px] w-full flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-5 py-10 md:mt-16">
        <div className="w-full md:w-2/4 h-full flex items-center justify-center flex-col gap-3">
          {compliance.map((c, i) => (
            <div
              onClick={() => setContentIndex(i)}
              key={i}
              className={`hover:bg-gray-300 hover:rounded-lg flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 p-3 ${
                contentIndex === i ? "bg-gray-300 rounded-lg" : "bg-white"
              }`}
            >
              <div>
                <h5 className="text-lg text-[#243499] font-bold">{c.title}</h5>
                <p className="text-sm text-gray-600 pt-1 pb-3">{c.subtitle}</p>
              </div>
              <div className="text-[#243499]">
                <ChevronArrow size={24} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/4 h-full flex justify-center items-center">
          <p className="px-24 text-xl text-center">{compliance[contentIndex].post}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
