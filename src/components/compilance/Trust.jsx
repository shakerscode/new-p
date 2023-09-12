import trust from "../../assets/imgs/trust.png";

const content = [
  {
    title: "Certifications and Audits:",
    post: "We take data security and privacy seriously. We hold industry certifications that validate our commitment to safeguarding your information. Our compliance audits and third-party assessments stand as a testament to our dedication. These certifications are more thansymbols – they are a reflection of our proactive approach towards providing you with a secure and trusted environment.",
  },
  {
    title: "Secure Cloud Solutions:",
    post: "Our secure cloud solutions are built upon industry-leading frameworks such as AWS Well-Architected Framework and CIS Benchmarks. These frameworks provide a solid foundation for robust security practices, ensuring that your cloud infrastructure is fortified against threats and vulnerabilities.",
  },
  {
    title: "Evolving with the Industry:",
    post: "At the forefront of industry evolution, we leverage AWS's cutting-edge technologies and services to ensure your cloud environment stays agile and secure. By aligning with AWS best practices and constantly adapting to emerging trends, we guarantee that your cloud solutions remain optimized, compliant, and future-proof.",
  },
  {
    title: "Personalized Compliance and Ongoing Commitment:",
    post: "Recognizing the distinct compliance needs of every business, our approach is tailored to your specific requirements. This ensures you can concentrate on your core objectives, while we expertly manage the complexities of compliance. Our journey towards compliance excellence is ongoing, as we continually review and enhance our policies, practices, and partnerships to provide unwavering compliance leadership.",
  },
];

function Trust() {
  return (
    <section className="my-5">
      <div className="md:py-20 h-auto mx-auto max-w-[1280px] w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="h-32 bg-gray-300 w-full md:w-[90%] rounded-2xl flex justify-between items-center px-4 md:px-10">
          <h3 className="text-xl md:text-3xl font-bold">
            We are the only one business that you
            <br /> can trust
          </h3>
          <img src={trust} alt="" className="md:w-48 w-24" />
        </div>
        <div className="md:mt-20 mt-5 flex justify-center items-center flex-col gap-16">
          {content.map((con, i) => (
            <div key={i} className="w-full md:w-3/4 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 ">
              <h3 className="text-3xl text-center md:text-start font-bold w-full md:w-2/4">{con.title}</h3>
              <p className="text-center w-full md:w-2/4">{con.post}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
