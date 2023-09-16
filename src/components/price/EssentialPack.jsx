import { useState } from "react";
import LongLeftArrow from "../icons/LongLeftArrow";
import { packContent, servicehelpBottomOne,   servicehelpBottomTwo } from "../constants/constants";
import ArrowRight from "../icons/ArrowRight";

function EssentialPack() {
  return (
    <section className="essential-pack-bg px-6 py-10 md:py-12 md:p-12 mb-16 rounded-3xl ">
      <div className="block md:flex gap-16">
        <div className="w-full md:w-1/3 text-white">
          <p className="text-[9px] w-fit bg-yellow-300 py-1 font-bold px-2 rounded-md text-gray-800 shadow">
            LIMITED OFFER
          </p>
          <h3 className="text-3xl py-3 font-bold text-white">
            Startup Cloud <br /> Services Essentials <br /> Pack
          </h3>
          <div className="p-2 bg-blue-700 text-center rounded-lg">
            <div className="border-[1px] border-solid border-gray-400 py-2 rounded-lg">
              <p className="text-[12px] text-gray-300 font-semibold">
                <span className="text-lg text-white font-bold">$2,000</span>{" "}
                {""}per month*
              </p>
              <p className="text-[12px] text-gray-200 pt-1">
                $24,000 annual package
              </p>
            </div>
            <p className="text-[12px] text-gray-300 pt-2">
              save up to $25,500 annually
            </p>
          </div>
          <h5 className="text-[12px] mt-5">
            Get the full cloud services package at a{" "}
            <span className="font-bold">50% discount</span> now!
          </h5>
          <p className="text-[10px] py-1 text-blue-500 italic underline cursor-pointer">
            *Terms and Conditions Apply
          </p>
          <button className="my-4 rounded-lg hover:bg-gray-600 hover:text-white  flex items-center gap-2 text-[12px] border-[1px] border-solid border-white font-semibold px-5 py-2 text-white">
            Contact Us <LongLeftArrow size={16} />
          </button>
        </div>
        <div className="w-full md:w-2/3 text-white">
          <h6 className="pr-5 font-bold text-sm">
            All the cloud services computing solutions your startup needs,
            packaged for <br /> optimal performances and costs:
          </h6>
          <div className="mt-5">
            {packContent.map((p, i) => (
              <AccordionItems header={p.title} text={p.post} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-10 p-10 rounded-3xl">
      <h2 className="text-xl font-bold text-gray-800">
        How Do Our Managed Cloud Services Help You?
      </h2>
      <div className="block md:flex items-center mt-8">
        <div className="w-full md:w-2/4">
          {servicehelpBottomOne.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-600">
              <ArrowRight size={16}/> <h1 className="text-sm text-gray-600 py-1">{s.title}</h1> 
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/4">
          {servicehelpBottomTwo.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-600">
              <ArrowRight size={16}/> <h1 className="text-sm text-gray-600 py-1">{s.title}</h1> 
            </div>
          ))}
        </div>
      </div>
      <button className="mt-8 rounded-lg hover:bg-gray-600 hover:text-white  flex items-center gap-2 text-[12px] border-[1px] border-solid border-gray-600 font-bold px-5 py-3 text-gray-700">
            Get a Free Small Business Cloud Services Assessment <div className="hidden md:block"><LongLeftArrow size={16} /></div>
          </button>
      </div>
    </section>
  );
}

export default EssentialPack;

const AccordionItems = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div
      onClick={() => handleToggle()}
      className="single-faq mb-2 md:mb-2 w-full border-solid border-[1px] border-white p-5 rounded-xl cursor-pointer"
    >
      <button
        className={`faq-btn flex justify-between items-center w-full text-left`}
      >
        <div className="w-full">
          <h4 className="text-md md:text-lg font-semibold text-white">
            {header}
          </h4>
        </div>
        <div className=" flex w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-white">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="currentColor"
              stroke=""
            />
          </svg>
        </div>
      </button>

      <div
        className={`duration-200 ease-in-out ${active ? "block" : "hidden"}`}
      >
        <p className="py-3 text-[14px] md:text-base leading-relaxed text-gray-800 text-start">
          {text}
        </p>
      </div>
    </div>
  );
};
