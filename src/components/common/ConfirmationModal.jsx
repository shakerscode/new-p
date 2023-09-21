import XClose from "../icons/XClose";

function ConfirmationModal({ url, setIsModalOpen }) {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white md:pt-8 flex-col flex justify-center items-center px-5 nd:px-8 pb-0 md:pb-4 rounded-lg shadow-md w-[90%] md:w-[50%]  lg:w-2/4  h-[50%] overflow-y-auto relative">
        <h3 className="text-lg md:text-2xl text-center">
          Please book a call or email us for further discussion.
        </h3>
        <div className="flex justify-center items-center gap-3 mt-4">
          <a
            className=" bg-violet-600 hover:bg-violet-500 px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out"
            href="mailto:solution@aetherlane.com"
          >
            Email Us
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <button  className=" bg-[#FD5B1D] hover:bg-[#FD5B1D] px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out">
              Book a Call
            </button>
          </a>
        </div>
        <button
            onClick={() => setIsModalOpen(false)}
            className="cursor-pointer p-2  absolute top-3 right-3 text-sm md:text-md lg:text-md text-black rounded-md font-bold border-[1px] border-solid border-gray-200 hover:bg-white hover:text-[#243499] ml-2 transition ease-in-out delay-450"
          >
            <XClose size={20}/>
          </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
