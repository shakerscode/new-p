import InformationWeCollect from "../components/privacypolicy/InformationWeCollect";
import Overview from "../components/privacypolicy/Overview";
import Subscribe from "../components/privacypolicy/Subscribe";
import Hero from "../components/privacypolicy/hero";


function PrivacyAndPolicy() {
    return (
        <div>
            <Hero/>
            <Overview/>
            <InformationWeCollect/>
            <Subscribe/>
        </div>
    );
}

export default PrivacyAndPolicy;