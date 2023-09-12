import MessageBox from "../../components/icons/MessageBox";
import media1 from "../../assets/imgs/media-1.png";
import media2 from "../../assets/imgs/media-2.png";
import media3 from "../../assets/imgs/media-3.png";
import media4 from "../../assets/imgs/media-4.png";
import ArrowRight from "../icons/ArrowRight";

const boxItems = [
  {
    icon: <MessageBox size={24} />,
    title: "Besoin de stabilité",
    desc: "Your critical applications are hosted in the Cloud. You must ensure the stability of your infrastructures and be able to intervene quickly in the event of an incident.",
  },
  {
    icon: <MessageBox size={24} />,
    title: "Besoin de stabilité",
    desc: "Your critical applications are hosted in the Cloud. You must ensure the stability of your infrastructures and be able to intervene quickly in the event of an incident.",
  },
  {
    icon: <MessageBox size={24} />,
    title: "Besoin de stabilité",
    desc: "Your critical applications are hosted in the Cloud. You must ensure the stability of your infrastructures and be able to intervene quickly in the event of an incident.",
  },
];

function Infrastructure() {
  return (
    <section className="bg-[#F8F9FC]">
      <div className="h-auto mx-auto max-w-[1280px] w-full py-16 relative bg-[#F8F9FC]">
        <h3
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="text-center text-4xl"
        >
          Why outsource the management of its infrastructure?
        </h3>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="h-[6px] gradient-bg-2 w-[260px] md:my-4 lg:my-4 xl:my-4 my-1 rounded-full absolute md:top-[88px] lg:top-[88px]xl:top-[88px] md:right-44 lg:right-44 xl:right-44 hidden md:block"
        ></div>
        <p
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="text-center text-sm mt-14 px-6 md:px-0"
        >
          Find out why you should entrust us with the management of your Cloud
          infrastructure:
        </p>

        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="mt-8 px-6 md:px-0 text-center md:text-left"
        >
          <p className="text-md text-[#869BFF] font-bold py-1">
            Skyloud outsourcing at the service of your infrastructure
          </p>
          <p>
            <span className="font-bold font-sm mt-2">
              Managing your cloud infrastructure
            </span>{" "}
            involves several constraints such as recruitment, on-call duty and
            keeping expertise in-house. Moreover, it is not always possible for
            companies to internalize this costly and complex skill.
          </p>
          <p className="font-bold font-sm mt-2">
            Our SRE engineers ensure the availability, the maintenance in
            operational condition of your infrastructure and offer you support
            so that you can concentrate on your core business in the best
            conditions.
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="bg-white w-full h-fit px-6 md:h-[250px] mt-8 rounded-xl flex flex-wrap md:flex-nowrap justify-center items-center md:px-10 py-20 gap-8 overflow-hidden"
        >
          {boxItems?.map((box, i) => (
            <div key={i}>
              <div className="bg-[#E5EAFF] w-[50px] h-[50px] flex items-center justify-center rounded-full text-[#7F96FF]">
                {box.icon}
              </div>
              <h3 className="text-lg my-2 text-[#7f96ff] font-bold">
                {box.title}
              </h3>
              <p className="text-[#1b1b4c] text-sm">{box.desc}</p>
            </div>
          ))}
        </div>
        <CloudOutsourcing />
      </div>
    </section>
  );
}

export default Infrastructure;

const CloudOutsourcing = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mt-10 md:mt-20 gap-10">
      <div className="w-full md:w-2/4 flex justify-center items-center flex-col">
        <div className="flex gap-5">
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src={media1}
            alt="media-images"
            className="w-[150px] bg-white p-5 rounded-lg shadow-md"
          />
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src={media2}
            alt="media-images"
            className="w-[150px] bg-white p-5 rounded-lg shadow-md"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src={media3}
            alt="media-images"
            className="w-[150px] bg-white p-5 rounded-lg shadow-md"
          />
          <img
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            src={media4}
            alt="media-images"
            className="w-[150px] bg-white p-5 rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        className="w-full md:w-2/4 h-fit flex flex-wrap md:flex-nowrap bg-white rounded-xl p-[20px] gap-8 "
      >
        <div className="w-full md:w-2/4 h-full flex flex-col justify-center items-center">
          <div className="bg-[#ccd5ff] w-[70px] h-[70px] flex justify-center items-center mt-10 rounded-[10px]">
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/63bfc38b7842c5fd7899edd4_server-solid2.svg"
              alt=""
            />
          </div>
          <h4 className="text-[#7f96ff] py-5 font-bold text-md">
            Cloud outsourcing
          </h4>
          <p className="text-[12px] mb-3">
            Our teams administer your Cloud infrastructure 24/7 and allow you to
            benefit from this technology.
          </p>
          <div className="flex justify-center items-center gap-5 pt-5 pb-10">
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/63984f0aae5518489cfdb03a_logo_only_gcp.svg"
              alt=""
              className="h-[28px]"
            />
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/6398509e3c019a1c68f3383c_Amazon_Web_Services_Logo%20(1)%20(2).svg"
              alt=""
              className="h-[28px]"
            />
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/6398505524911a29795d5db6_ScalewayIcon-8.png"
              alt=""
              className="h-[28px]"
            />
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/639850dfecdaeb32c2b5a410_azure.png"
              alt=""
              className="h-[28px]"
            />
            <img
              src="https://uploads-ssl.webflow.com/633604f2b53d992b9190a890/63ac00c3dd12792a91e1941a_ovhIcon.svg"
              alt=""
              className="h-[28px]"
            />
          </div>
        </div>
        <div className="w-full flex md:block justify-center flex-col items-center md:w-2/4 h-full py-4">
          <div className="flex items-center gap-5 text-sm">
            <div className="gradient-bg-2 flex justify-center items-center text-white w-[22px] h-[22px] rounded-[5px]">
              <ArrowRight size={14} />{" "}
            </div>
            <p>
              <span className="text-[#7f96ff] font-bold">
                Amazon Web Services
              </span>{" "}
              outsourcing
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm mt-[35px]">
            <div className="gradient-bg-2 flex justify-center items-center text-white w-[22px] h-[22px] rounded-[5px]">
              <ArrowRight size={14} />{" "}
            </div>
            <p>
              Managed
              <span className="text-[#7f96ff] font-bold">
                {" "}
                Google Cloud Platform
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm mt-[35px]">
            <div className="gradient-bg-2 flex justify-center items-center text-white w-[22px] h-[22px] rounded-[5px]">
              <ArrowRight size={14} />{" "}
            </div>
            <p>
              <span className="text-[#7f96ff] font-bold">Azure</span> Managed
              Services
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm mt-[35px]">
            <div className="gradient-bg-2 flex justify-center items-center text-white w-[22px] h-[22px] rounded-[5px]">
              <ArrowRight size={14} />
            </div>
            <p>
              <span className="text-[#7f96ff] font-bold">Scaleway</span>{" "}
              outsourcing
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm mt-[35px]">
            <div className="gradient-bg-2 flex justify-center items-center text-white w-[22px] h-[22px] rounded-[5px]">
              <ArrowRight size={14} />{" "}
            </div>
            <p>
              <span className="text-[#7f96ff] font-bold">OVH</span> outsourcing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
