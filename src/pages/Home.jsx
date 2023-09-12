import { useEffect, useState } from "react";
import AddOnServices from "../components/home/AddOnServices";
import Benefits from "../components/home/Benefits";
import Brand from "../components/home/Brand";
import Business from "../components/home/Business";
import ExpertEngineer from "../components/home/ExpertEngineer";
import QuestionAndAnswer from "../components/home/FAQ";
import HeroSection from "../components/home/HeroSection";
import Package from "../components/home/Package";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { Link, useLocation } from "react-router-dom";
import ArrowRight from "../components/icons/ArrowRight";
import Phone from "../components/icons/Phone";
import ConfirmationModal from "../components/common/ConfirmationModal";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Infrastructure from "../components/home/Infrastructure";
import Support from "../components/home/Support"; 

const Home = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // When we navigate one page to another page, we will be kept in the view size where we were in previous page. This function will make sure that wherever we came to this page, the  page will start from the top.

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="overflow-hidden">
      <Header setIsModalOpen={setIsModalOpen} />
      <HeroSection />
      <Business /> 
      <Infrastructure/>
      <Support/>
      <Benefits />
      <AddOnServices />
      <ExpertEngineer />
      <Package />
      <WhyChooseUs />
      <Brand />
      <QuestionAndAnswer />
      <Footer />
      {location.pathname === "/" && <BottomMenu />}

      {isModalOpen && (
        <ConfirmationModal
          url={"https://calendly.com/temp-tse"}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Home;

const BottomMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full z-50 md:flex hidden"
    style={{
      position: 'fixed',
      bottom: 20, 
      padding: '8px', 
    }}>
      <div className="bg-white py-2 pl-8 pr-2 mx-auto w-[660px] h-[70px] custom-shadow rounded-2xl border-[1px]">
        <div className="w-full h-full lg:flex md:flex xl:flex hidden justify-between items-center flex-row flex-nowrap gap-8">
          <a href="#services">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Services
            </p>
          </a>
          <a href="#why-choose-us">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Why us
            </p>
          </a>
          <a href="#pricing">
            <p className="text-sm text-gray-500 hover:text-[#243499] cursor-pointer transition-all .4s ease-in-out">
              Pricing
            </p>
          </a>
          <a href="#faq">
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
            <a href="#pricing">
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
