import LongLeftArrow from "../icons/LongLeftArrow";

 

function PricingHero() {
    return (
       <section className="pricing-bg p-5 md:p-14 block md:flex gap-10 mt-10 rounded-3xl">
            <div className="w-full py-4">
                <p className="uppercase text-[12px]">Cloud managed service for small business abd startup</p>
                <h2 className="md:text-5xl md:mt-5 font-bold md:leading-[48px]">Managed Cloud Services for SMEs and Startups</h2>
                <p className="text-[12px] py-2 md:py-5">Reduce your costs and while improving business agility, security, and developer productivity.</p>
                <button className="rounded-lg text-sm flex items-center gap-3 border-[1px] border-gray-600 py-3 px-5 hover:bg-gray-600 hover:text-white font-bold">Get Free Infrastructure Assessment<LongLeftArrow size={16} /></button>
            </div>
            <div className="w-full p-5 flex justify-center items-center">
                <div className="h-[350px] md:w-2/4 bg-blue-300 px-4 py-7 rounded-xl relative">
                    <p className="text-[9px] w-fit rounded-md bg-yellow-300 py-1 font-bold px-2 text-gray-800 shadow">LIMITED OFFER</p>
                    <h3 className="text-2xl py-3 font-bold text-gray-800">
                        Startup Cloud Services Essentials Pack
                    </h3>
                    <div className="p-2 bg-blue-700 text-center rounded-xl ">
                        <p className="text-md border-[1px] border-solid border-gray-400 py-3 rounded-xl  text-white font-semibold">SAVE UP TO <span className="text-xl font-bold">$25,500</span></p>
                        <p className="text-[12px] text-gray-200 pt-2">in annual Cloud services cost</p>
                    </div>
                    <button className="my-4 flex items-center gap-2 text-[12px] font-semibold px-2 text-blue-700">Learn More <LongLeftArrow size={16} /></button> 
                </div>
            </div>
       </section>
    );
}

export default PricingHero;