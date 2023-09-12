import CommonSectionHead from "../../pages/Admin/components/Common/CommonSectionHead";

const serviceInfo = [
  [
    {
      title: "Database Management",
    },
    {
      title: "Server Architecture",
    },
  ],
  [
    {
      title: "CI/CD Pipeline Implementation",
    },
    {
      title: "DevOps Consulting",
    },
  ],
  [
    {
      title: "Server Migration and Consolidation",
    },
    {
      title: "Multi Cloud Strategy",
    },
  ],
  [
    {
      title: "Machine Learning and AI Integration",
    },
    {
      title: "Data Warehousing and Analytics",
    },
  ],
  [
    {
      title: "Containerization Services",
    },
    {
      title: "Hybrid Cloud Integration",
    },
  ],
  [
    {
      title: "Managed Kubernetes Service",
    },
    {
      title: "Contact us for more",
    },
  ],
];

function AddOnServices() {
  const titles = {
    title1: "Discover",
    title2: " Our add-on ",
    title3: "Services",
  };

  return (
    <section
      id="services"
      className="max-w-[1280px] w-full h-auto mx-auto px-8"
    >
      <CommonSectionHead props={titles} />
      <div className="h-auto my-14 relative">
        <div className="md:w-2/4 xl:w-2/4 lg:w-2/4 w-full h-fit mx-auto">
          {serviceInfo.map((row, rowIndex) => (
            <div
              data-aos={"fade-in"}
              data-aos-duration="1000"
              key={rowIndex}
              className={`flex  justify-between items-center gap-10 py-8 border-t-2 border-solid border-t-gray-400 ${
                rowIndex === serviceInfo.length - 1
                  ? "border-b-2 border-b-gray-400"
                  : ""
              }`}
            >
              {row.map((service, colIndex) => (
                <div
                  data-aos={colIndex === 0 ? "fade-left" : "fade-right"}
                  data-aos-duration="1000"
                  key={colIndex}
                  className="cursor-pointer"
                >
                  <a
                    className="relative"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {service.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddOnServices;
