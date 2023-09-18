import { speakingNumbers } from "../constants/constants";

 

function Numbers() {
    return (
        <section className="max-w-[1280px] mx-auto w-full bg-gray-300 rounded-xl mb-16">
            <div className="p-8">
                <h1 data-aos="fade-up" 
            data-aos-duration="900" className="text-4xl md:py-4 text-gray-900 font-semibold">Numbers Always Speak Louder</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    speakingNumbers.map((numbers, i) =>(
                        <div data-aos="fade-up" 
                        data-aos-duration="1000" key={i} className={`${numbers.bg} ${numbers?.text} p-16 rounded-xl`}>
                            <h2 className="font-bold text-4xl">{numbers.numbers}</h2>
                            <p className="">{numbers?.desc}</p>
                        </div>
                    ))
                }
            </div>
            </div>
            
        </section>
    );
}

export default Numbers;