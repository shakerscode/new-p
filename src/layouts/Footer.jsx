import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Facebook from "../components/icons/Facebook";
import Instagram from "../components/icons/Instagram";
import Linkedin from "../components/icons/Linkedin";
import Twitter from "../components/icons/Twitter";
import Threads from "../components/icons/Threads";

export default function Footer() {
  return (
    <div className="text-slate-900 border-solid border-t-[1px] border-t-gray-200">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between p-8 lg:p-16 items-center md:justify-between md:gap-20 lg:gap-20 xl:gap-20 gap-5 max-w-[1280px] mx-auto pt-10">
        <div>
          <img className="h-28" src={logo} alt="Logo" />
          <p className="text-slate-400 text-center text-sm mt-2">
            A Cloud Service Provider
          </p>
          <p className="mb-4 text-sm lg:text-lg text-center">Based In London</p>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-8 lg:gap-20">
          <ul className="space-y-2 text-sm ">
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to={"/"} className="link hover:underline">
                How it Works
              </Link>
            </li>
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to={"/"} className="link hover:underline">
                Terms of Use
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to={"/privacy-policy"} className="link hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to={"/compliance"} className="link hover:underline">
                Compliances
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to="/about">About us</Link>
            </li>
            <li className="link hover:underline md:text-start lg:text-start xl:text-start text-center ">
              <Link to="/contact">Contact team</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="mb-4 text-sm lg:text-lg text-center md:text-start lg:text-start xl:text-start">
            Social media
          </p>
          <ul className="flex items-center justify-center gap-2">
            <li className="text-blue-600 cursor-pointer">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
            </li>
            <li className="text-red-400 cursor-pointer">
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </li>
            <li className="text-blue-800 cursor-pointer">
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </li>
            <li className="text-sky-400 cursor-pointer">
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            </li>
            <li className="text-gray-700 cursor-pointer">
              <a
                href="https://www.threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Threads size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-5 text-gray-500 text-[12px]">
        All right reserved by &copy; AetherIlane {new Date().getFullYear()}
      </p>
    </div>
  );
}
