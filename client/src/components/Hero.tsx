import Heroextension from "./Heroextension";

const Hero = () => {
  return (
    <>
      <div className="container pb-32 xl:pb-[4rem] 2xl:pb-[3rem] lg:pt-[1rem]">
        <div className="font-extrabold text-customBlue">
          <div className="flex flex-wrap items-baseline justify-start pl-4 2xl:mr-[12rem] xl:mr-[11rem] xl:justify-center 2xl:justify-center 2xl:pl-0">
            <div className="">
              <h1 className=" pr-4 font-archivo text-[2.625rem] xl:text-[5.125rem] 2xl:text-[6.125rem]">
                We elevate and
              </h1>
            </div>
            <div className="lg:mr-2">
              <img
                src="./Hero/HeroTextImage1.svg"
                alt="HeroTextImage1"
                className="w-[2.7rem] xl:w-[4.625rem] 2xl:w-[5.625rem]"
              />
            </div>
            <h1 className="font-archivo text-[2.625rem] xl:text-[5.125rem] 2xl:text-[6.125rem]">
              enrich
            </h1>
          </div>
        </div>
        <div className="font-extrabold text-customBlue">
          <div className="pl-4 2xl:pl-0">
            <div className="flex flex-wrap items-baseline xl:justify-center 2xl:justify-center">
              <div>
                <img
                  src="./Hero/HeroTextImage2.svg"
                  alt="HeroTextImage2"
                  className="xl:w-[6.43606rem] 2xl:w-[6.43606rem]"
                />
              </div>
              <h1 className="pr-4 font-archivo text-[2.625rem] xl:text-[5.125rem] 2xl:text-[6.125rem]">
                change across
              </h1>
              <h1 className="pr-4 font-archivo text-[2.625rem] xl:text-[5.125rem] 2xl:text-[6.125rem] ">
                industries
              </h1>
            </div>
          </div>
        </div>

        {/* Hero p text */}

        <div className="pl-4 pt-5 text-customBlue lg:flex xl:ml-[3.5rem] 2xl:ml-[5.5rem] 2xl:pl-0 2xl:pt-[2rem]">
          <p className="font-inter text-[1.125rem]  2xl:text-[1.25rem]">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>

        {/* hero buttton */}

        <div className="px-2 pt-9 font-inter xl:pt-[2rem] 2xl:ml-[5.2rem] 2xl:px-0 2xl:pt-[3rem]">
          <button className="contact-us-btn w-full rounded-[12px] px-8 py-3 text-center font-medium text-white xl:max-w-[10rem] 2xl:text-base">
            Contact us
          </button>
        </div>
      </div>
      <Heroextension />
    </>
  );
};

export default Hero;
