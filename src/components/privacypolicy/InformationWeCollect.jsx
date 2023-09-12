import { useState } from "react"; 
import { collect, share } from "../constants/constants";

function InformationWeCollect() {
  return (
    <section className="bg-gray-200">
      <div className="max-w-[1280px] w-full mx-auto text-center py-16 md:px-0 px-4">
        <h3 className="text-4xl md:text-5xl">Information We collect</h3>
        <div className="mt-10">
          {collect?.map((c, i) => (
            <AccordionItem key={i} header={c.header} text={c.text} />
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-4xl md:text-5xl">How we share your information</h3>
          <div className="mt-10">
            {share?.map((c, i) => (
              <AccordionItem key={i} header={c.header} text={c.text} />
            ))}
          </div>
        </div>
        <p className="mt-16 text-lg md:text-xl px-4 md:px-16">
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at <b>info@tothenew.com</b>, or send postal mail to <b>2nd Floor, NSL Techzone SEZ, Noida-Greater Noida Expressway, Sector 144, Noida, Uttar Pradesh 201306, India.</b>
        </p>
      </div>
    </section>
  );
}

export default InformationWeCollect;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div
      onClick={() => handleToggle()}
      className="single-faq mb-2 md:mb-4 w-full rounded-2xl border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8 cursor-pointer"
    >
      <button
        className={`faq-btn flex justify-between items-center w-full text-left`}
      >
        <div className="w-full">
          <h4 className="text-md md:text-lg font-semibold text-gray-900">{header}</h4>
        </div>
        <div className=" flex w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-gray-900">
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
