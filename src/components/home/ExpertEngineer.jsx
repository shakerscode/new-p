import CommonSectionHead from "../common/CommonSectionHead";

export default function ExpertEngineer() {
  const titles = {
    title1: "Partner",
    title2: "With world class",
    title3: "Expert Engineers",
  };
  return (
    <section id="team" className="bg-[#B3B9DC] pb-24 px-8 w-full">
      <div className="mx-auto max-w-[1280px] w-full">
        {/* Re-used component */}
        <CommonSectionHead props={titles} />
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="w-auto mt-32 md:mt-0 lg:mt-0 xl:mt-0 px-6 lg:px-0 lg:w-[600px] mx-auto"
        >
          <p className="mt-16 lg:mt-14 text-center text-lg">
            Our dedicated team comprises cloud architects, system engineers,
            security experts, and performance optimizers. Their expertise and
            commitment drive our cloud business forward, ensuring exceptional
            service delivery every day.
          </p>
        </div>
      </div>
    </section>
  );
}
