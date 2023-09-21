import { useState } from "react";
import CommonSectionHead from "../common/CommonSectionHead";
import Dotted from "../icons/Dotted";
import LinearGradient from "../icons/LinearGradient";
import ConfirmationModal from "../common/ConfirmationModal";
import { useNavigate } from "react-router-dom";

export default function Package() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const titles = {
    title1: "Discover",
    title2: "Our solution",
    title3: "Packages",
  };
  return (
    <section
      id="pricing"
      className=" bg-white  lg:pt-[60px]  relative overflow-hidden max-w-[1280px] mx-auto"
    >
      <div className="container mx-auto">
        {/* Re-used component */}
        <CommonSectionHead props={titles} />
        <div className="flex flex-wrap justify-center mt-14">
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 lg:w-2/3 lg:h-[450px] px-4"
          >
            <div className="shadow-md bg-gray-800 rounded-3xl relative z-10 
            overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 
            sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 h-full flex justify-center items-center flex-col">
          
              <div>
                <span className="text-white text-center font-semibold text-2xl block mb-4">
                  Customized Package
                </span>
                <div className="pb-4 mb-5 mt-12 text-center text-white">
                  <p>
                    Shape Your Cloud Solution to Match Your Business Needs
                    Perfectly.
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/pricing")}
                className=" w-full block text-white font-semibold text-primary 
                bg-blue-500 rounded-lg text-center p-4 hover:text-white hover:bg-blue-400 lg:w-60 transition "
              >
                Book a Call
              </button>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <LinearGradient />
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <Dotted />
                </span>
              </div>
            </div>
          </div>
            </div>
          </div> 
      {isModalOpen && (
        <ConfirmationModal
          url={"https://calendly.com/temp-tse"}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
}
