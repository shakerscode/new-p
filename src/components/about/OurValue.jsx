import team from "../../assets/imgs/team.png"
import { aboutValueData } from "../constants/constants"; 

function OurValue() {
  return (
    <section className="max-w-[1280px] mx-auto w-full h-[950px] md:h-[600px] flex flex-col justify-center items-center md:mt-14 px-4 md:px-0 mb-20">
      <div  className="z-10 w-full h-full bg-cover bg-center rounded-bl-[180px] rounded-tr-[220px] relative"
        style={{ backgroundImage: `url(${team})` }}>  
        <div className="bg-black opacity-80 w-full h-full absolute top-0 bottom-0 rounded-bl-[180px] rounded-tr-[220px]">
        <div className="w-full h-full md:px-12 px-5 py-16 md:mt-12 text-white">
            <p data-aos="fade-up" 
            data-aos-duration="1000" className="text-[12px] text-center text-gray-100">Our Values</p>
            <h3 data-aos="fade-up" 
            data-aos-duration="1100" className="py-3 text-center text-white text-3xl font-bold">Aetherllane&apos;s DNA</h3>
            <p data-aos="fade-up" 
            data-aos-duration="1200" className="text-sm text-center text-white mt-4">Our values  are shared across the M33 Group. They shape our daily actions and enable us to build trust both among <br /> our team members and with our clients</p>
            <div className="flex justify-center flex-wrap md:flex-nowrap items-center mt-10 gap-5 md:px-8">
                {
                    aboutValueData.map((value, i) =>(
                        <div key={i} className="z-20" data-aos="fade-up" 
                        data-aos-duration="1300">
                           <div className="w-10 h-10 bg-white rounded-full p-2 mb-1 md:mb-2">
                           <img src={value.image} alt="" className="w-full h-full"/>
                           </div>
                            <h2 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold text-white">{value?.title}</h2>
                            <p className="text-sm">{value?.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default OurValue;
