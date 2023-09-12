import imgOne from "../../assets/imgs/shield-verified.png";
import ChevronArrow from "../icons/ChevronArrow";

function BlogContent() {
  return (
    <section className="px-4 my-0 md:my-5">
      <div className="md:h-[500px] lg:h-[500px] xl:h-[500px] h-auto mx-auto max-w-[1280px] w-full flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-5 py-10 md:mt-16">
        <div className="w-full md:w-2/4 h-full flex items-center justify-center flex-col gap-3">
          <div className="flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 p-3">
            <div>
              <h5 className="text-lg text-[#243499] font-bold">Security Compliance</h5>
              <p className="text-sm text-gray-600 pt-1 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div className="text-[#243499]">
              <ChevronArrow size={24} />
            </div>
          </div> 
          <div className="flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 p-3">
            <div>
              <h5 className="text-lg text-[#243499] font-bold">Security Compliance</h5>
              <p className="text-sm text-gray-600 pt-1 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div className="text-[#243499]">
              <ChevronArrow size={24} />
            </div>
          </div> 
          <div className="flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 p-3">
            <div>
              <h5 className="text-lg text-[#243499] font-bold">Security Compliance</h5>
              <p className="text-sm text-gray-600 pt-1 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div className="text-[#243499]">
              <ChevronArrow size={24} />
            </div>
          </div> 
          <div className="flex justify-between items-center w-full border-b-[1px] cursor-pointer border-gray-300 p-3">
            <div>
              <h5 className="text-lg text-[#243499] font-bold">Security Compliance</h5>
              <p className="text-sm text-gray-600 pt-1 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div className="text-[#243499]">
              <ChevronArrow size={24} />
            </div>
          </div> 
        </div>
        <div className="w-full md:w-2/4 h-full flex justify-center items-center">
          <img src={imgOne} alt="security-verified-img" className="w-auto md:w-[350px] h-auto md:h-[350px]" />
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
