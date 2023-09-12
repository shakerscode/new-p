import Slider from "../common/Slider";

function Business() {
 
  return (
    <div className="w-full first-letter:flex justify-center items-center flex-col h-fit">
      <div className="md:mt-36 lg:mt-36 xl:mt-36 mt-14 text-center md:text-4xl lg:text-4xl xl:text-4xl text-md max-w-[1280px] mx-auto ">
        <p className="px-4">
          Connect with
          <span className="text-[#FD5B1D] opacity-100 md:ml-3 lg:ml-3 xl:ml-3 ml-1">
            world-class expert
          </span>{" "}
          for a flat monthly price. Connect today and make unlimited changes.
        </p>
      </div>
      <div className="mt-16 w-full flex-col flex justify-center items-center mx-auto">
        <div className="mx-auto">
          <div className="bg-[#FD5B1D] text-sm md:text-md lg:text-md xl:text-md text-white px-5 py-1 md:py-2 lg:py-2 xl:py-2 rounded-lg">
            <p>Trusted by 15+ Business</p>
          </div>
        </div>
        <Slider/> 
      </div>
    </div>
  );
}

export default Business;
