import { useState } from "react";
import { compliance } from "../constants/constants";
import ChevronArrow from "../icons/ChevronArrow";

function BlogContent() {
  const [contentIndex, setContentIndex] = useState(0);
 
  return (
    <section className="px-4">
      <div className="md:h-[500px] lg:h-[500px] xl:h-[500px] h-auto mx-auto max-w-[1280px] rounded-3xl bg-gray-700 w-full flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-5 px-10 py-10 md:mt-10">
        <div className="w-full md:w-2/4 h-full flex items-center justify-center flex-col gap-3">
          {compliance.map((c, i) => (
            <div
              onClick={() => setContentIndex(i)}
              key={i}
              className={`flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 rounded-2xl p-3 ${
                contentIndex === i ? "bg-sky-400 rounded-2xl" : "bg-white"
              }`}
            >
              <div>
                <h5 className={`text-lg text-[#243499] font-bold ${ contentIndex === i ? "text-white" : "text-[#243499]"}`}>{c.title}</h5>
                <p className={` text-sm text-gray-600 pt-1 pb-1 ${ contentIndex === i ? "text-white" :"text-gray-600"}`}>{c.subtitle}</p>
              </div>
              <div className={`${contentIndex === i ? "text-white" : "text-[#243499]"}`}>
                <ChevronArrow size={24} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/4 h-full flex justify-center items-center">
          <p className="md:px-24 px-3 text-lg md:text-xl text-center text-white">{compliance[contentIndex].post}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
