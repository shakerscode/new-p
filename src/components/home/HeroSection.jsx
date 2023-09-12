import cloudIMage from "../../assets/imgs/cloudImg-1.png";
import { useState } from "react";
import ConfirmationModal from "../common/ConfirmationModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="gradient-bg">
      <div className="md:h-[550px] lg:h-[550px] xl:h-[550px] h-auto mx-auto max-w-[1280px] w-full">
        <div className="w-full h-full flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap items-center justify-center gap-5">
          <div className="md:w-[50%] lg: xl:w-[50%] w-auto h-full flex items-center justify-center">
            <div className="h-[80%] flex items-center justify-start p-5 w-full">
              <div>
                <h1
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                  className="md:text-4xl lg:text-4xl font-bold text-white text-2xl"
                >
                  Focus on Business Growth, Let Us Handle Your Cloud
                  Infrastructure
                </h1>
                <p
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                  className="mt-4 text-white text-sm"
                >
                  We help companies build and manage available, resilient and
                  scalable infrastructures. We manage, optimize, secure and
                  elevate your cloud journey
                </p>
                <div className="flex w-full md:mt-5 lg:mt-5 xl:mt-5 mt-5 gap-3 md:gap-2 lg:gap-2 xl:gap-2">
                  <a href="#pricing">
                    <button
                      data-aos="zoom-out-up"
                      data-aos-duration="1500"
                      className=" py-2 px-3 md:py-[13px] md:px-[21px] bg-white text-[#243499] rounded-lg font-bold border-[1px] border-solid border-white hover:bg-[#243499] text-sm md:text-md lg:text-md xl:text-md hover:text-white hover:border-white transition ease-in-out delay-450 shadow-md"
                    >
                      See Package
                    </button>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    data-aos="zoom-out-up"
                    data-aos-duration="1500"
                    className=" py-2 px-3 md:py-[13px] md:px-[21px] bg-[#FD5B1D] opacity-100 text-white rounded-lg font-bold border-[1px] border-solid border-[#FD5B1D] text-sm md:text-md lg:text-md xl:text-md hover:bg-white hover:text-[#FD5B1D]  transition ease-in-out delay-450 shadow-md"
                  >
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] lg: xl:w-[50%] w-auto h-full pb-10 md:pb-0 lg:pb-0 xl:pb-0 flex items-center justify-center">
            <div className="w-full md:w-[90%] h-auto md:h-[80%] ml-0 px-4 md:px-0 md:ml-10">
              <img src={cloudIMage} className={"h-full w-auto"} />
            </div>
          </div>
        </div> 
        {isModalOpen && (
          <ConfirmationModal
            url={"https://calendly.com/temp-tse"}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
