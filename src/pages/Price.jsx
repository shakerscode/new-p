import React from "react";
import EssentialPack from "../components/price/EssentialPack";
import PricingHero from "../components/price/PricingHero";
import ServiceHelp from "../components/price/ServiceHelp";

 

function Price() {

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className="h-fit-content h-auto mx-auto max-w-[1280px] w-full">
            <PricingHero/>
            <ServiceHelp/>
            <EssentialPack/>
        </div>
    );
}

export default Price;