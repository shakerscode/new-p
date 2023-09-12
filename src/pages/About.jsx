import { useEffect } from "react"
import AboutTopSection from "../components/about/AboutTopSection"
import Follow from "../components/about/Follow"
import Info from "../components/about/Info"
import WorkWithUs from "../components/about/WorkWithUs"

const About = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen ">
      <AboutTopSection />
      <Follow/>
      <Info/> 
      <WorkWithUs />
    </div>
  )
}

export default About;
