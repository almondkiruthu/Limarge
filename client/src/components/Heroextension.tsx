// import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className=" relative rounded-t-[2.5rem] bg-customBlue pb-[3.75rem]">
        <div className="hero__extension__container container flex flex-col-reverse items-center justify-center sm:flex sm:flex-col-reverse sm:items-center sm:justify-center lg:flex lg:flex-row lg:items-center lg:gap-x-[6rem] xl:gap-x-0">
          <div className="mt-4 hidden pb-5 pt-10 sm:mt-[1rem] sm:flex lg:ml-[2rem] lg:mr-auto lg:gap-x-[0.3rem] xl:ml-[4rem] xl:gap-x-[1rem] 2xl:ml-[5rem] 2xl:gap-x-[1.5rem]">
            <img
              className="lg:w-[6rem] xl:w-full"
              src="./Heroextension/AlphabetLogo.svg"
              alt="AlphabetLogo"
            />
            <img
              className="lg:w-[6rem] xl:w-full"
              src="./Heroextension/AmazonLogo.svg"
              alt="amazonlogo"
            />
            <img
              className="lg:w-[6rem] xl:w-full"
              src="./Heroextension/AzureLogo.svg"
              alt="azurelogo"
            />
            <img
              className="lg:w-[6rem] xl:w-full"
              src="./Heroextension/SlackLogo.svg"
              alt="slacklogo"
            />
          </div>
          {/* Mobile view */}
          <div className=" mt-4 flex-col pb-5 pt-10 sm:mt-[1rem] sm:hidden">
            <div className="flex gap-x-5">
              <img
                className="lg:w-[6rem] xl:w-full"
                src="./Heroextension/AlphabetLogo.svg"
                alt="AlphabetLogo"
              />
              <img
                className="lg:w-[6rem] xl:w-full"
                src="./Heroextension/AmazonLogo.svg"
                alt="amazonlogo"
              />
            </div>
            <div className="flex gap-x-5 pt-4">
              {" "}
              <img
                className="lg:w-[6rem] xl:w-full"
                src="./Heroextension/AzureLogo.svg"
                alt="azurelogo"
              />
              <img
                className="lg:w-[6rem] xl:w-full"
                src="./Heroextension/SlackLogo.svg"
                alt="slacklogo"
              />
            </div>
          </div>
          <div className="relative ml-[2rem] mr-[1rem] flex-col items-center justify-center sm:ml-[9rem] sm:flex-col sm:items-center sm:justify-center md:ml-auto md:mr-[3rem] lg:ml-auto lg:mr-auto">
            <div className="user__background">
              <img
                src="./Heroextension/UserBg.svg"
                alt="ClientsBackground"
                className="w-[90%] sm:w-[70%] lg:w-[80%] xl:w-[90%] 2xl:w-[100%]"
              />
            </div>

            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.8, duration: 0.5 }}
              className=""
            >
              <img
                src="./Heroextension/User.svg"
                alt="HappyClient"
                className="absolute left-[0.2rem] top-[-5.48rem] w-[85%] mm:left-[0.3rem] mm:top-[-6.7rem] sm:left-0 sm:top-[-9rem] sm:w-[70%] md:top-[-9.6rem] lg:top-[-10.5rem] lg:w-[80%] xl:top-[-12.4rem] xl:w-[90%] 2xl:top-[-13.73rem] 2xl:w-[100%]"
              />
            </div>
          </div>
        </div>
        {/* Hero vibrant ribbon  */}
        <div className="absolute right-0 top-[-8.5rem] md:right-[-1rem] md:top-[-15rem] lg:right-[-1rem] lg:top-[-19rem] xl:right-[-2rem] xl:top-[-20rem] 2xl:right-0 2xl:top-[-22rem]">
          <img
            src="./Hero/VibrantHeroLine.svg"
            alt="vibrant ribbon"
            className="w-[6.72344rem] md:h-[14.64313rem] md:w-[15.92944rem] lg:h-[16.64313rem] lg:w-[16.92944rem] xl:h-[17.64313rem] xl:w-[20.92944rem] 2xl:h-[18.64313rem] 2xl:w-[25.92944rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Heroextension;
