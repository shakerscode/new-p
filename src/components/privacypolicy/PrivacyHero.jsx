import privacyBg from "../../assets/imgs/privacy-bg.png";

function PrivacyHero() {
  return (
    <section className="bg-gray-600">
      <div className="h-auto flex justify-between items-center max-w-[1280px] w-full mx-auto">
        <div className="ml-14 py-20 md:py-0 text-white">
          <h3 className="text-6xl">Privacy</h3>
          <p className="text-lg py-2">Words to live by!</p>
        </div>
        <img
          src={privacyBg}
          alt="privacy-hero-bg"
          className="w-[550px] h-70 hidden md:block"
        />
      </div>
    </section>
  );
}

export default PrivacyHero;
