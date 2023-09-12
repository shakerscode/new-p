function CommonSectionHead({ props }) {
  return (
    <div
      className="flex justify-center flex-col "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="h-44 md:w-1/4 mx-auto lg:w-2/4 xl:w-2/4 mt-24 font-[Domine]">
        <h4 className="text-gray-300 text-center md:text-center lg:text-center xl:text-center text-2xl md:text-5xl lg:text-5xl xl:text-5xl">
          {props.title1}
        </h4>
        <h4 className="text-gray-500 text-center md:text-center lg:text-center xl:text-center md:text-6xl lg:text-6xl xl:text-6xl text-5xl">
          {props.title2}
        </h4>
        <h4 className="text-center md:text-6xl lg:text-6xl xl:text-6xl text-5xl">
          {props.title3}
        </h4>
      </div>
    </div>
  );
}

export default CommonSectionHead;
