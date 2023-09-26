import trust from "../../assets/imgs/trust.png";

 

function Trust() {
  return (
    <section className="mt-10">
      <div className=" h-auto mx-auto max-w-[1280px] w-full p-5 flex flex-col justify-center items-center gap-5">
        <div className="h-32 bg-gray-300 w-full md:w-full rounded-2xl flex justify-between items-center px-4 md:px-10">
          <h3 className="text-xl md:text-3xl font-bold">
            We are the only one business that you
            <br /> can trust
          </h3>
          <img src={trust} alt="" className="md:w-48 w-24" />
        </div> 
      </div>
    </section>
  );
}

export default Trust;
