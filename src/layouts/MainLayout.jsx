import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Phone from "../components/icons/Phone";
import ArrowRight from "../components/icons/ArrowRight";
import ConfirmationModal from "../components/common/ConfirmationModal";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header setIsModalOpen={null} />}
      <div>
        <Outlet />
      </div>
      <BottomMenu />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

const BottomMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full z-50 md:flex hidden"
      style={{
        position: "fixed",
        bottom: 20,
        padding: "8px",
      }}
    >
      <div className="bg-white py-2 pl-8 pr-2 mx-auto w-[660px] h-[70px] custom-shadow rounded-2xl border-[1px]">
        <div className="w-full h-full lg:flex md:flex xl:flex hidden justify-between items-center flex-row flex-nowrap gap-8">
          <a href="/#services">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Services
            </p>
          </a>
          <a href="/#why-choose-us">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Why us
            </p>
          </a>
          <a href="/#pricing">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Pricing
            </p>
          </a>
          <a href="/#faq">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              FAQ
            </p>
          </a>
          <Link to="/compliance">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Compliance
            </p>
          </Link>
          <Link to="/blog">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Blog
            </p>
          </Link>
          <div className="flex justify-end items-center gap-1">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex justify-center items-center py-[13px] rounded-xl h-[50px] w-[50px] border-solid border-[1px] border-orange-600 bg-orange-600 hover:bg-white hover:text-orange-600 text-white transition-all ease-in-out delay-100"
            >
              <Phone size={16} />
            </button>
            <a href="/#pricing">
              <button
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex justify-center items-center gap-4 py-[13px] h-[50px] w-[50px] px-[21px] bg-[#243499] text-base-100 rounded-xl font-bold hover:bg-white border-[1px] border-solid border-[#243499] text-white hover:text-[#243499] transition ease-in-out delay-450 cursor-pointer"
              >
                <div
                  className={
                    isHovered
                      ? "transform transition-transform rotate-[-45deg]"
                      : "transform transition-transform rotate-0"
                  }
                >
                  <ArrowRight size={12} />
                </div>
              </button>
            </a>
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
  );
};
