import Heroextension from "./Heroextension";

const Hero = () => {
  return (
    <>
      <div className="relative pb-32 2xl:pb-10 2xl:pl-32 2xl:pt-6">
        <div className="font-extrabold text-customBlue">
          <div className="flex flex-wrap items-baseline justify-start pl-4">
            <div className="">
              <h1 className="pr-4 font-archivo text-[42px] xl:text-[5rem] 2xl:text-[6.125rem]">
                We elevate and
              </h1>
            </div>
            {/* <h1 className="font-archivo text-[42px] lg:text-[6.125rem] ">
              and
            </h1> */}
            <div className="2xl:px-3">
              <img
                src="./Hero/HeroTextImage1.svg"
                alt="HeroTextImage1"
                className="w-[2.7rem] px-1 lg:w-[100%]"
              />
            </div>
            <h1 className="font-archivo text-[42px] 2xl:text-[6.125rem]">
              enrich
            </h1>
          </div>
        </div>
        <div className="font-extrabold text-customBlue">
          <div className="pl-4">
            <div className="flex flex-wrap items-baseline">
              <div>
                <img
                  src="./Hero/HeroTextImage2.svg"
                  alt="HeroTextImage2"
                  className="hidden 2xl:block"
                />
              </div>
              <h1 className="pr-4 font-archivo text-[42px] 2xl:text-[6.125rem]">
                change across
              </h1>
              {/* <h1 className="font-archivo text-[42px] lg:text-[98px] pr-4">
                across
              </h1> */}
              <h1 className="pr-4 font-archivo text-[42px] 2xl:text-[6.125rem]">
                industries
              </h1>
            </div>
          </div>
        </div>

        {/* Hero p text */}

        <div className="pl-4 pt-5">
          <p className="font-inter text-[18px]  text-customBlue 2xl:text-xl">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>

        {/* hero buttton */}

        <div className="px-2 pt-9 font-inter">
          <button className="contact-us-btn w-full rounded-[12px] px-8 py-3 text-center font-medium text-white 2xl:max-w-[10rem]">
            Contact us
          </button>
        </div>

        {/* Hero vibrant ribbon  */}
        <div className="absolute bottom-[-5px] right-[-30px] 2xl:top-[100px] ">
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
