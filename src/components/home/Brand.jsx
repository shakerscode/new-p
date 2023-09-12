import logoThree from '../../assets/imgs/Amazon_Web_Services_Logo.svg'
import logoOne from '../../assets/imgs/Kubernetes_Logo.png'
import logoFour from '../../assets/imgs/Microsoft_Azure_Logo.svg'
import logoTwo from '../../assets/imgs/terraformio-ar21.svg'


export default function Brand() {
  return (
    <div className="bg-white max-w-1280px my-10 px-4">
      <div data-aos="zoom-in-up"data-aos-duration="1000" 
      className="mx-auto max-w-7xl w-full py-10 px-6 lg:px-8 shadow-xl bg-white md:w-[80%] lg:w-[80%] xl:w-[80%] border-[1px] border-solid border-gray-100 rounded-xl">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
        You Can Rely on Our Certified Engineers for All Business.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
          <img
            className="col-span-2 max-h-16  object-contain lg:col-span-1"
            src={logoOne}
            alt="Kubernetes"
            width={158}
            height={58}
          />
          <img
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src={logoTwo}
            alt="terraformio"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-14  object-con tain lg:col-span-1"
            src={logoThree}
            alt="AWS"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={logoFour}
            alt="Azure"
            width={158}
            height={48}
          /> 
        </div>
      </div>
    </div>
  )
}
