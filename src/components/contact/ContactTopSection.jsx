import { useState } from "react";
import ConfirmationModal from "../common/ConfirmationModal";

export default function ContactTopSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="h-fit-content h-auto mx-auto max-w-[1280px] w-full md:py-8">
        <h2 
          className="text-center w-auto text-3xl md:text-5xl px-6 pt-8 md:pt-10 lg:pt-10 md:pb-12 font-bold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500"
        >
          We are always here to help.
        </h2>
       <div className="flex flex-wrap md:flex-nowrap gap-5 px-4">
        <div className="w-auto md:w-2/4 h-auto flex justify-center items-center flex-col rounded-2xl mx-auto bg-blue-50 p-4 lg:px-12 lg:pb-10 lg:pt-6">
          <h2 className="mt-4 text-3xl text-center font-semibold text-slate-800">
            Email Us
          </h2>
          <p className="mt-7 text-lg text-slate-600 text-center">
            Write to us for get solution
            <span className="text-sky-400"> solution@aetherlane.com</span>, we
            are constantly looking at our inbox.
          </p>
          <div className="flex items-center justify-center mt-5">
            <a
              className=" bg-violet-600 hover:bg-violet-500 px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out"
              href="mailto:solution@aetherlane.com"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="w-auto md:w-2/4 h-auto flex justify-center items-center flex-col mx-auto rounded-2xl bg-pink-50 p-4 lg:px-12 lg:pb-10 lg:pt-6">
          <h2 className="mt-4 text-3xl text-center font-semibold text-slate-800">
            Talk to Us
          </h2>
          <p className="mt-7 text-lg text-slate-600 text-center">
            Take a 20-minute consult to learn. We can be tailored to tackle your
            needs.
          </p>
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="  bg-sky-600 hover:bg-sky-500 px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out"
            >
              Book a Call
            </button>
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
