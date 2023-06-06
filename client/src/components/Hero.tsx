import Heroextension from "./HeroExtension";


const Hero = () => {
  return (
    <>
      <div className="ml-56 mt-6 relative">
        <div className="flex items-baseline font-extrabold text-customBlue">
          <h1 className="font-archivo text-[98px]">We elevate and</h1>
          <div className="px-3">
            <img src="./Hero/HeroTextImage1.svg" alt="HeroTextImage1" />
          </div>
          <h1 className="font-archivo text-[98px]">enrich</h1>
        </div>
        <div className="flex items-baseline font-extrabold text-customBlue">
          <div className="pr-7">
            <img src="./Hero/HeroTextImage2.svg" alt="HeroTextImage2"/>
          </div>
          <h1 className="font-archivo text-[98px]">change across industries</h1>
        </div>
        <div className="pt-5">
          <p className="font-inter text-customBlue text-xl">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>
        <div className="font-inter pt-9">
          <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
        <div className="absolute right-0 top-[150px]">
            <img src="./Hero/VibrantHeroLine.svg" alt="line" />
        </div>
      </div>
      <Heroextension />
    </>
  );
};

export default Hero;
