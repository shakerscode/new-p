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
import ConfirmationModal from "../components/common/ConfirmationModal";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Infrastructure from "../components/home/Infrastructure";
import Support from "../components/home/Support";

const Home = () => {
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
      <Infrastructure />
      <Support />
      <Benefits />
      <AddOnServices />
      <ExpertEngineer />
      <Package />
      <WhyChooseUs />
      <Brand />
      <QuestionAndAnswer />
      <Footer />

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
