import {
  servicehelpBottomOne,
  servicehelpBottomTwo,
} from "../constants/constants";
import ArrowRight from "../icons/ArrowRight";
import LongLeftArrow from "../icons/LongLeftArrow";

function ManagedCloudService() {
  return (
    <section>
      <div className="bg-gray-100 my-10 px-5 py-14 md:px-10 md:py-10  rounded-3xl mx-4 md:mx-0">
        <h2 className="text-xl text-center font-bold text-gray-800">
          How Do Our Managed Cloud Services Help You?
        </h2>
        <div className="block md:flex items-center justify-center md:gap-20 mt-8">
          <div className="flex flex-col gap-4">
            {servicehelpBottomOne.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <ArrowRight size={16} />{" "}
                <h1 className="text-lg text-gray-600 py-1">{s.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {servicehelpBottomTwo.map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <ArrowRight size={16} />{" "}
                <h1 className="text-lg text-gray-600 py-1">{s.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-8 mx-auto rounded-lg hover:bg-gray-600 hover:text-white  flex items-center gap-2 text-[12px] border-[1px] border-solid border-gray-600 font-bold px-5 py-3 text-gray-700">
          Get a Free Small Business Cloud Services Assessment{" "}
          <div className="hidden md:block">
            <LongLeftArrow size={16} />
          </div>
        </button>
      </div>
    </section>
  );
}

export default ManagedCloudService;
