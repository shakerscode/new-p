import ArrowRight from "../icons/ArrowRight";

const supportItems = [
  {
    url: "https://img.freepik.com/free-vector/computer-service-abstract-concept-illustration_335657-1897.jpg",
    titles: [
      "Audit regular",
      "Monte  de version",
      "Great security",
      "Misaas de sounds",
    ],
    category: "Maintenance",
  },
  {
    url: "https://img.freepik.com/free-vector/sentiment-analysis-concept-illustration_114360-5182.jpg",
    titles: ["Audit regular", "Monte  de version", "Great security"],
    category: "Monitoring",
  },
  {
    url: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
    titles: ["Audit regular", "Monte  de version", "Great security"],
    category: "Support",
  },
];

function Support() {
  return (
    <section className="bg-[#F8F9FC]">
      <div className="h-fit-content h-auto mx-auto max-w-[1280px] w-full md:py-16 relative bg-[#F8F9FC]">
        <h3 className="text-center text-4xl">Full support</h3>
        <div className="h-[6px] gradient-bg-2 w-[140px] my-4 rounded-full absolute top-[88px] right-[41.5%] hidden md:block"></div>
        <p className="text-sm pb-2 pt-10 text-center px-6 md:px-0">
          We manage your infrastructure 24/7 so that you can gain peace of mind
          and productivity.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center my-5 gap-10">
          {supportItems?.map((items, i) => (
            <div
              key={i}
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              className="w-[350px] h-[500px]  rounded-xl shadow-md "
            >
              <div className="w-full h-[60%] bg-blue-500 px-5 pt-5 rounded-t-xl relative">
                <img
                  src={items.url}
                  alt="support-image"
                  className="rounded-t-xl h-full w-full"
                />
                 <div className="absolute top-8 right-[0%] left-[0%] bg-white px-6 py-2 shadow-md mx-10 rounded-md">
                  <h5 className="text-center font-bold">{items.category}</h5>
                </div>
              </div>
              <div className="w-full h-[40%] px-5 bg-white rounded-b-xl">
                {items.titles.map((title, i) => (
                  <div key={i} className="pt-5">
                    <div className="flex gap-5 items-center text-blue-500">
                      <ArrowRight size={14} />
                      <p className="text-sm text-gray-900"> {title}</p>
                    </div>
                  </div>
                ))} 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Support;
