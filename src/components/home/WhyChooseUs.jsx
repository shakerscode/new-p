import TailordImage from "../../assets/imgs/2.png";
import ProactiveImage from "../../assets/imgs/3.png";
import EngineerImage from "../../assets/imgs/4.png";
import InnovationImage from "../../assets/imgs/5.png";
import ClientImage from "../../assets/imgs/6.png";
import AgilityImage from "../../assets/imgs/7.png";
import CommonSectionHead from "../common/CommonSectionHead";

export default function WhyChooseUs() {
  const leftData = [
    {
      name: "Tailord Solutions",
      img: TailordImage,
      des: "Customized packages that precisely fit your unique business needs.",
    },
    {
      name: "Proactive approach",
      img: ProactiveImage,
      des: "Anticipating issues and opportunities for an optimized, secure cloud environment.",
    },
    {
      name: "Client Centric",
      img: ClientImage,
      des: "Personalized attention, support, and a partnership built on trust.",
    },
  ];

  const rightData = [
    {
      name: "Expert Engineer",
      img: EngineerImage,
      des: "A team of experienced cloud professionals to maximize your cloud investment.",
    },
    {
      name: "Innovation Focus",
      img: InnovationImage,
      des: "Equipping you with cutting-edge technologies to stay competitive.",
    },
    {
      name: "Agility and Scalability",
      img: AgilityImage,
      des: "Adaptable services that evolve alongside your business.",
    },
  ];

  const titles = {
    title1: "Why",
    title2: "Choose",
    title3: "Us",
  };

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white pb-4 lg:pb-[90px] max-w-[1280px] mx-auto"
    >
      {/* Reused a component */}
      <CommonSectionHead props={titles} />
      <div className="container mx-auto">
        <div className=" flex flex-wrap px-4 md:px-8 xl:px-0 mx-auto">
          <div className="w-full xl:pr-16 lg:w-1/2">
            {leftData.map((data, index) => (
              <div
                data-aos="fade-right"
                data-aos-duration="900"
                key={index}
                className="flex justify-between mb-10 md:mb-4"
              >
                <img
                  src={data.img}
                  alt="choose us image"
                  className="md:w-1/2 w-[130px] md:flex-1"
                />
                <div className="flex flex-col justify-center flex-1">
                  <h1 className="text-xl md:text-[22px] font-normal">
                    {data.name}
                  </h1>
                  <p className="text-[#98AEC6] text-sm md:text-[16px] mt-3">
                    {data.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full xl:pl-16 lg:w-1/2">
            {rightData.map((data, index) => (
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                key={index}
                className="flex justify-between mb-10 md:mb-4"
              >
                <img
                  src={data.img}
                  alt="choose us image"
                  className="md:w-1/2 w-[130px] md:flex-1"
                />
                <div className="flex flex-col justify-center flex-1">
                  <h1 className="text-xl md:text-[22px] font-normal">
                    {data.name}
                  </h1>
                  <p className="text-[#98AEC6] text-sm md:text-[16px] mt-3">
                    {data.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
