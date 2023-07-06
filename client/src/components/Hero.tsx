import Heroextension from "./Heroextension";

const Hero = () => {
  return (
    <>
      <div className="lg:pl-32 lg:pt-6 relative lg:pb-10 pb-32">
        <div className="font-extrabold text-customBlue">
          <div className="flex justify-start items-baseline pl-4 flex-wrap">
            <div className="">
              <h1 className="font-archivo text-[42px] pr-4  lg:text-[6.125rem]">
                We elevate and
              </h1>
            </div>
            {/* <h1 className="font-archivo text-[42px] lg:text-[6.125rem] ">
              and
            </h1> */}
            <div className="lg:px-3">
              <img
                src="./Hero/HeroTextImage1.svg"
                alt="HeroTextImage1"
                className="w-[2.7rem] lg:w-[100%] px-1"
              />
            </div>
            <h1 className="font-archivo text-[42px] lg:text-[6.125rem]">
              enrich
            </h1>
          </div>
        </div>
        <div className="font-extrabold text-customBlue">
          <div className="pl-4">
            <div className="flex items-baseline flex-wrap">
              <div>
                <img
                  src="./Hero/HeroTextImage2.svg"
                  alt="HeroTextImage2"
                  className="hidden lg:block"
                />
              </div>
              <h1 className="font-archivo text-[42px] lg:text-[6.125rem] pr-4">
                change across
              </h1>
              {/* <h1 className="font-archivo text-[42px] lg:text-[98px] pr-4">
                across
              </h1> */}
              <h1 className="font-archivo text-[42px] lg:text-[6.125rem] pr-4">
                industries
              </h1>
            </div>
          </div>
        </div>

        {/* Hero p text */}

        <div className="pt-5 pl-4">
          <p className="font-inter text-customBlue  text-[18px] lg:text-xl">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>

        {/* hero buttton */}

        <div className="font-inter pt-9 px-2">
          <button className="contact-us-btn w-full lg:max-w-[10rem] px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>

        {/* Hero vibrant ribbon  */}
        <div className="absolute right-[-30px] bottom-[-5px] lg:top-[100px] ">
          <img
            src="./Hero/VibrantHeroLine.svg"
            alt="line"
            className="w-[150px] lg:w-[100%]"
          />
        </div>
      </div>
      <Heroextension />
    </>
  );
};

export default Hero;
