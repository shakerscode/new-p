import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../icons/Menu";
import XClose from "../icons/XClose";

export const MobileMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section className="flex lg:hidden">
      <div 
        className="space-y-2 cursor-pointer hover:text-[#243499]"
        onClick={() => setIsNavOpen((prev) => !prev)} 
      >
        <Menu size={24}/>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute cursor-pointer z-50 top-0 right-0 px-8 py-8 hover:text-[#243499]"
          onClick={() => setIsNavOpen(false)}
        > 
          <XClose size={24}/>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <Link to={'/'} onClick={() => setIsNavOpen((prev) => !prev)} >
              <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Home</p>
          </Link>
          <Link to={'/blog'} onClick={() => setIsNavOpen((prev) => !prev)} >
            <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Blog</p>
          </Link>
          <Link to={'/about'} onClick={() => setIsNavOpen((prev) => !prev)} >
            <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>About</p>
          </Link>
          <Link to={'/contact'} onClick={() => setIsNavOpen((prev) => !prev)} >
            <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Contact</p>
          </Link>
          <Link to={'/compliances'} onClick={() => setIsNavOpen((prev) => !prev)} >
            <p className=' hover:bg-slate-100 px-4 py-2 rounded-lg font-semibold transition .4s ease-in-out hover:text-primary'>Compliances</p>
          </Link>
        </ul>
      </div>
    </section>
  )
}
