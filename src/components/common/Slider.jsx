import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect, useRef } from "react";

const logos = [
  "https://img.freepik.com/free-vector/connection-vector-logo-template_460848-8078.jpg",
  "https://img.freepik.com/free-vector/letter-s-logo-negative-space-style-corporate-business-emblem-logotype_126523-2780.jpg",
  "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg",
  "https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg",
  "https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg",
  "https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg",
  "https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg",
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
  "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg",
  "https://img.freepik.com/premium-vector/business-blue-abstract-logo_1365-476.jpg",
];

function Slider() {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, {
        type: "loop", 
        height: "10rem",
        width:"100%",
        autoScroll: {
          speed: .5,
        },
        pagination: false,
        arrows: false,
        controls: false,
        perPage: getPerPage(),
      });

      // Update perPage value when the window is resized
      window.addEventListener("resize", () => {
        splideInstance.options.perPage = getPerPage();
      });

      splideInstance.mount({ AutoScroll });
    }
  }, []);

  function getPerPage() {
    return window.innerWidth >= 768 ? 5 : 2;
  } 

  return (
    <div className="splide px-6 md:px-12" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list md:gap-4 gap-2 ">
          {logos?.map((logo, i) => ( 
              <img
              key={i}
                src={logo}
                alt="company-logos"
                className="splide__slide w-32  h-32 "
              /> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
