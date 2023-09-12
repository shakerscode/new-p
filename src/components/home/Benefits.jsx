import CommonSectionHead from "../../pages/Admin/components/Common/CommonSectionHead";

 

function Benefits() {
  const titles = {
    title1: "Our",
    title2: "Connections",
    title3: "Benefits",
  };
  return (
    <section id="benefits" className="max-w-[1280px] h-auto mx-auto px-4">
      {/* Re-used component */}
      <CommonSectionHead props={titles} />
      <div className="md:mt-32 lg:mt-32 xl:mt-32 mt-0 h-auto p-4">
        <div className="flex gap-10 flex-col md:flex-row lg:flex-row xl:flex-row w-full">
          <div
           data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="md:h-[450px] lg:h-[450px] xl:h-[450px] h-auto  flex  justify-center items-center w-full p-2"
          >
            <p className="md:text-5xl xl:text-5xl lg:text-5xl text-2xl text-center w-full font-[Domine] text-gray-700">
              Unlock the power of the cloud with our all-in-one Solution and
              boost efficiency. cut costs, save time, ensure security and
              exceeding performance goals
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
            className="card  bg-[#FD5B1D] hover:bg-[#ff9a72] h-[450px] flex justify-center items-center cursor-pointer opacity-100 w-full rounded-[80px] px-3 text-center text-white md:text-7xl xl:text-7xl lg:text-7xl text-4xl font-[Domine] pt-4"
          >
            <h3> Enhanced Performance</h3>
            <span className="text-white text-2xl md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-[#eb753e]">
              We ensure enhanced performance by optimizing systems for faster
              and more efficient operations, resulting in improved user
              experiences.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 w-full mt-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            className="md:h-[550px] lg:h-[550px] xl:h-[550px] h-[450px] rounded-[40px] bg-cyan-400 w-full px-3 text-center text-white  font-[Domine] pt-10  flex justify-center items-center cursor-pointer card hover:bg-cyan-400 md:text-7xl xl:text-7xl lg:text-7xl text-4xl"
          >
            <h3>Security</h3>
            <span className="text-white md:text-2xl lg:text-2xl xl:text-2xl text-lg md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-cyan-500">
              We ensure robust cloud security by implementing advanced measures
              to safeguard your data, applications, and infrastructure from
              threats, ensuring peace of mind for your business.
            </span>
          </div>
          <div className="md:h-[550px] lg:h-[550px] xl:h-[550px] h-auto w-full flex flex-col gap-6">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              className="md:h-full lg:h-full xl:h-full h-[450px] bg-yellow-300 rounded-[40px] px-3 text-center text-white md:text-7xl xl:text-7xl lg:text-7xl text-4xl font-[Domine] md:pt-4 lg:pt-4 xl:pt-4 pt-10 flex justify-center items-center cursor-pointer card"
            >
              <h3>Cost Management</h3>
              <span className="text-white md:text-2xl lg:text-2xl xl:text-2xl text-lg md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-yellow-500 ">
                We optimize operational efficiency by streamlining processes,
                automating tasks, and utilizing cloud-native tools, enhancing
                productivity and resource utilization for your business.
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="md:h-full lg:h-full xl:h-full h-[450px] bg-yellow-300 rounded-[40px] px-8 text-start text-white md:text-7xl xl:text-7xl lg:text-7xl text-4xl font-[Domine] md:pt-4 lg:pt-4 xl:pt-4 pt-10 flex justify-center items-center cursor-pointer card"
            >
              <h3>Boost Efficiency</h3>
              <span className="text-white md:text-2xl lg:text-2xl xl:text-2xl text-lg md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-yellow-500 ">
                We optimize operational efficiency by streamlining processes,
                automating tasks, and utilizing cloud-native tools, enhancing
                productivity and resource utilization for your business.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 w-full mt-8">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            className="md:h-64 lg:h-64 xl:h-64 h-[450px] md:w-[60%] lg:w-[60%] xl:w-[60%] w-full rounded-[40px] bg-lime-400 px-8 text-start text-white md:text-7xl xl:text-7xl lg:text-7xl text-4xl font-[Domine] pt-4 flex justify-center items-center cursor-pointer card"
          >
            <h3>On-Demand Report</h3>
            <span className="text-white md:text-2xl lg:text-2xl xl:text-2xl text-lg md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-lime-600">
              We offer on-demand server reports that provide insightful and
              actionable data about your cloud infrastructure whenever you need
              it, ensuring transparency and informed decision-making.
            </span>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
            className="md:h-64 lg:h-64 xl:h-64 h-[450px] md:w-[40%] lg:w-[40%] xl:w-[40%] w-full rounded-[40px] bg-red-500 text-center text-white md:text-7xl xl:text-7xl lg:text-7xl text-4xl font-[Domine] pt-4 flex justify-center items-center cursor-pointer card"
          >
            <h3>24/7 <br className="md:hidden lg:hidden xl:hidden block"/> Chat Support </h3>
            <span className="text-white md:text-2xl lg:text-2xl xl:text-2xl text-lg md:px-16 lg:px-16 xl:px-16 p-5 font-[inter] font-normal bg-red-600">
              We provide 24/7 chat support to assist you promptly with any
              queries or concerns, ensuring uninterrupted and reliable service.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
