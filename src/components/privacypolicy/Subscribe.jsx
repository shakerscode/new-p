function Subscribe() {
  return (
    <section className="bg-amber-50">
      <div className="max-w-[1280px] w-full mx-auto py-16">
        <div className="flex justify-around flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:w-2/4 pl-5">
            <h2 className="text-4xl md:text-[42px] font-normal text-gray-800">Subscribe to Our Insights</h2>
            <button className="mt-3 bg-sky-600 hover:bg-sky-500 px-6 py-3 text-white font-semibold rounded-lg transition-transform transform duration-150 ease-in-out">
              Subscribe
            </button>
          </div>
          <div className="md:w-2/4 px-4 md:px-12">
            <h2 className="text-4xl md:text-[42px] font-normal text-gray-800">Latest from our blog</h2>
            <p className="text-md md:text-[20px] text-gray-700 py-2">Our experience through Snowflake DATA CLOUD WORLD TOUR The World of Data, Apps and AI 2023 in Delhi</p>
            <p className="text-gray-600 md:text-base text-[14px]">I had the opportunity to experience the Data Cloud World Tour, and it was all about collaborating wi...</p>
            <button className="mt-5 border-sky-600 border-[1px] border-solid bg-white hover:bg-sky-500 hover:text-white px-6 py-3 text-sky-600 font-semibold rounded-lg transition-transform  duration-350 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
