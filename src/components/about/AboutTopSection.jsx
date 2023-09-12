export default function AboutTopSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h1 data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000" className="text-center md:text-6xl lg:text-6xl xl:text-6xl text-4xl font-bold">
          About Us
        </h1>
        <figure className="mt-10">
          <blockquote className="text-center md:text-xl lg:text-xl xl:text-xl text-md font-normal leading-8 text-gray-900 sm:leading-9">
            <p data-aos="fade-up" 
            data-aos-duration="1500">
              “At the heart of our business lies a vision - to revolutionize
              cloud computing. We aspire to empower businesses with cutting-edge
              solutions that transcend limitations, foster growth, and shape a
              more efficient and connected future.”
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
