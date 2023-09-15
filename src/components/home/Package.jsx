import { useState } from "react";
import CommonSectionHead from "../../pages/Admin/components/Common/CommonSectionHead";
import Dotted from "../icons/Dotted";
import LinearGradient from "../icons/LinearGradient";
import ConfirmationModal from "../common/ConfirmationModal";

export default function Package() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            className="w-full md:w-1/2 lg:w-1/3 px-4"
          >
            <div className="shadow-md bg-gray-800 rounded-3xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ">
              <span className="text-white font-semibold text-lg block mb-4">
                Monthly
              </span>
              <h2 className="font-bold text-white mb-5 text-[42px]">
                £ 2,500
                <span className="text-base text-white font-medium">/mo</span>
              </h2>
              <div className="text-white font-normal pb-4 mb-5 border-b border-[#ffffff] ">
                <p>Pause and cancel anytime </p>
                <p className=" text-base">whats Included</p>
              </div>
              <div className="mb-7">
                <ul className="list-disc">
                  <li className="text-base text-white leading-loose mb-1">
                    Cost Management
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Performance Optimized
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Security compliances
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Backup and Disasters Recovery
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Governance and Policy
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    24/7 Chat Support
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    One Dedicated Engineer
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Weekly Report
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    15 Days money back guarantee
                  </li>
                  <li className="text-base text-white leading-loose mb-1">
                    Cancel any time
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className=" w-full block text-white font-semibold text-primary bg-blue-500 rounded-lg text-center p-4 hover:text-white hover:bg-blue-400  transition "
              >
                Get Started Today
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
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="w-full md:w-1/2 lg:w-1/3 px-4 md:pb-10"
          >
            <div className=" bg-blue-200 h-full rounded-3xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-md py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 flex flex-col justify-center">
              <div>
                <span className="text-primary text-center font-semibold text-xl block mb-4">
                  Customized Package
                </span>
                <div className="pb-4 mb-5 mt-12 text-center">
                  <p>
                    Shape Your Cloud Solution to Match Your Business Needs
                    Perfectly.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className=" w-full block text-white font-semibold text-primary bg-blue-500 rounded-lg text-center p-4 hover:text-white hover:bg-blue-400  transition "
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
