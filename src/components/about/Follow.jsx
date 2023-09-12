import Threads from "../icons/Threads";
import Youtube from "../icons/Youtube";
import Twitter from "../icons/Twitter";
import Linkedin from "../icons/Linkedin";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import AboutBg from "../../assets/imgs/about-bg.png";

function Follow() {
  return (
    <section className="max-w-[1280px] mx-auto w-full h-auto flex flex-col justify-center items-center px-4 py-14">
      <div className="">
        <h5 data-aos="fade-up" 
            data-aos-duration="1000" className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center">
          Follow Us On
        </h5>
        <div className="flex justify-center items-center mt-5 gap-6">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="1000" className="text-blue-500">
            <Facebook size={34} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="1200" className="text-red-500">
            <Instagram size={34} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="1400" className="text-blue-700">
            <Linkedin size={34} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="1600" className="text-blue-400">
            <Twitter size={34} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="1800" className="text-red-500">
            <Youtube size={34} />
          </a>
          <a href="https://www.threads.net/?hl=en" target="_blank" rel="noreferrer" data-aos="fade-up" 
            data-aos-duration="2000" className="text-gray-700 cursor-pointer">
            <Threads size={34} />
          </a>
       </div>
      </div>
      <div className="md:mt-20 lg:mt-20 xl:mt-20 mt-12">
        <img data-aos="fade-up" 
            data-aos-duration="1000" src={AboutBg} alt="about-section-bg" />
      </div>
    </section>
  );
}

export default Follow;
