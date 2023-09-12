import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "../components/UI/MobileMenu";
import siteLogo from "../assets/logo.png";
import ArrowRight from "../components/icons/ArrowRight";
import ConfirmationModal from "../components/common/ConfirmationModal";

export default function Header({ setIsModalOpen }) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="z-10 md:px-8 px-3 bg-[#aecce3]">
      <div className="max-w-[1280px] mx-auto h-[90px]">
        <div className="flex justify-between items-center h-full">
          <MobileMenu />
          <div>
            <p className="text-md text-gray-900 font-semibold mt-1 hidden md:block">
              Based In
              <br /> London
            </p>
          </div>
          <div className="h-ful w-20 md:w-32 lg:w-32 xl-32 cursor-pointer">
            <Link to={"/"}>
              <img src={siteLogo} alt="Aetherllane" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-1">
            <button
              onClick={() => {
                if (location === "/") {
                  setIsModalOpen(true);
                } else {
                  setModalOpen(true);
                }
              }}
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex cursor-pointer justify-center items-center gap-1 md:gap-4 py-2 px-3 md:py-[13px] md:px-[21px] bg-[#FD5B1D]  text-sm md:text-md lg:text-md text-white rounded-lg font-bold border-[1px] border-solid border-[#FD5B1D] hover:bg-white hover:text-[#243499] ml-2 transition ease-in-out delay-450 shadow-md"
            >
              <p>Start Today</p>
              <div
                className={`${
                  isHovered
                    ? "transform transition-transform rotate-[-45deg]"
                    : "transform transition-transform rotate-0"
                } hidden md:flex lg:flex xl:flex`}
              >
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {modalOpen && location !== "/" && (
        <ConfirmationModal
          url={"https://calendly.com/temp-tse"}
          setIsModalOpen={setModalOpen}
        />
      )}
    </div>
  );
}
