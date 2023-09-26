import { useEffect } from "react";
import BlogContent from "../components/compliance/BlogContent";
import BusinessPolicy from "../components/compliance/BusinessPolicy";
import Content from "../components/compliance/Content";
import Hero from "../components/compliance/Hero";
import Location from "../components/compliance/Location";
import Trust from "../components/compliance/Trust";


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
            <Trust/>
            <Content/>
        </>
    );
}

export default Compliance;