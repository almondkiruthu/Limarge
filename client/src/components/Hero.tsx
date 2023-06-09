import Heroextension from "./Heroextension";

const Hero = () => {
  return (
    <>
      <div className="lg:ml-56 lg:mt-6 relative pb-10">
        <div className="lg:items-baseline font-extrabold text-customBlue">
          <div className="lg:flex pl-4">
            <div className="flex">
              <h1 className="font-archivo text-[42px] pr-4  lg:text-[98px]">
                We
              </h1>
              <h1 className="font-archivo text-[42px] lg:text-[98px]">
                elevate
              </h1>
            </div>
            <div className="flex items-baseline">
              <h1 className="font-archivo text-[42px] pr-[5px] lg:text-[98px] lg:pl-4">
                and
              </h1>
              <div className="lg:px-3">
                <img
                  src="./Hero/HeroTextImage1.svg"
                  alt="HeroTextImage1"
                  className="w-[40px] lg:w-[80px]"
                />
              </div>
              <h1 className="font-archivo text-[42px] lg:text-[98px] pl-[5px]">
                enrich
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:items-baseline font-extrabold text-customBlue">
          <div className="lg:flex pl-4">
            <div className="flex items-baseline">
              <img
                src="./Hero/HeroTextImage2.svg"
                alt="HeroTextImage2"
                className="w-[60px] lg:w-[120px]"
              />
              <h1 className="font-archivo text-[42px] lg:text-[98px] pr-4">
                change
              </h1>
            </div>
            <div className="flex">
              <h1 className="font-archivo text-[42px] pr-[4px] lg:text-[98px]">
                across
              </h1>
              <h1 className="font-archivo text-[42px] lg:text-[98px] pl-[5px]">
                industries
              </h1>
            </div>
          </div>
        </div>

        <div className="pt-5 pl-4">
          <p className="font-inter text-customBlue  text-[18px] lg:text-xl">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>
        <div className="font-inter pt-9 px-2">
          <button className="contact-us-btn w-full lg:w-[10%] px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
        <div className="absolute right-[-30px] bottom-[-120px] lg:top-[10px]">
          <img
            src="./Hero/VibrantHeroLine.svg"
            alt="line"
            className="h-[200px] lg:h-[450px]"
          />
        </div>
      </div>
      <Heroextension />
    </>
  );
};

export default Hero;
