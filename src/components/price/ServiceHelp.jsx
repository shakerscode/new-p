import { servicehelpLeft, servicehelpRight } from "../constants/constants";

function ServiceHelp() {
  return (
    <section className="bg-gray-200 px-5 pt-14 md:pt-12 md:p-12 my-16 rounded-3xl mx-4 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        How Do Our Managed Cloud Services Help You?
      </h2>
      <div className="block md:flex items-center mt-8 pb-8 md:pb-0">
        <div className="w-full md:w-2/4">
          {servicehelpLeft.map((s, i) => (
            <div key={i} className="p-0  mt-4 md:mt-0 md:p-4">
              <h1 className="text-xl md:text-2xl font-bold py-1">{s.title}</h1>
              <p className="text-sm text-gray-600">{s.post}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/4">
          {servicehelpRight.map((s, i) => (
            <div key={i} className="p-0  mt-4 md:mt-0 md:p-4">
              <h1 className="text-xl md:text-2xl font-bold py-1">{s.title}</h1>
              <p className="text-sm text-gray-600">{s.post}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceHelp;
