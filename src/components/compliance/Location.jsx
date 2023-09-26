import locationImage from "../../assets/imgs/lock-2.png" 

function Location() {
    return (
       <section className="px-4">
        <div className="md:h-[500px] lg:h-[500px] xl:h-[500px] rounded-3xl bg-cyan-600 h-auto mx-auto max-w-[1280px] w-full p-5 flex flex-wrap md:flex-nowrap justify-center items-center mb-10"> 
        <div className="w-[500px] px-0 md:px-5">
            <p className="text-xl md:text-2xl text-center text-white">
            Headquartered in Europe, we operate under the stringent framework of the world`&apos;`s most robust data privacy and security regulations. Our operations are guided by the EU GDPR Law, reflecting our unwavering commitment to ensuring the highest standards of data protection.
            </p>
        </div>
        <div className="w-fit md:w-[500px] h-fit md:h-[500px] flex justify-end items-center">
            <img src={locationImage} className="w-auto md:w-[350px] h-auto md:h-[350px] rounded-2xl"/>
        </div>
        </div>
       </section>
    );
}

export default Location;