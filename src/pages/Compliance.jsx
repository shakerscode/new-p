import { useEffect } from "react";
import BlogContent from "../components/compilance/BlogContent";
import BusinessPolicy from "../components/compilance/BusinessPolicy";
import Content from "../components/compilance/Content";
import Hero from "../components/compilance/Hero";
import Location from "../components/compilance/Location";
import Trust from "../components/compilance/Trust";


function Compliance() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, []);
    return (
        <>
            <Hero/>
            <Location/>
            <BusinessPolicy/>
            <BlogContent/>
            <Content/>
            <Trust/>
        </>
    );
}

export default Compliance;