import { useEffect } from "react"
import AboutTopSection from "../components/about/AboutTopSection"
import Follow from "../components/about/Follow"
import Info from "../components/about/Info"
import WorkWithUs from "../components/about/WorkWithUs"
import OurValue from "../components/about/OurValue"
import Numbers from "../components/about/Numbers"
import Video from "../components/about/Video"

const About = () => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen ">
      <AboutTopSection />
      <OurValue />
      <Numbers />
      <Video/>
      <WorkWithUs />
      <Follow/>
      <Info/> 
    </div>
  )
}

export default About;
