// import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className=" relative rounded-t-[2.5rem] bg-customBlue pb-[3.75rem]">
        <div className="hero__extension__container container md:flex-col md:items-center md:justify-center lg:flex lg:items-center lg:gap-x-[6rem] xl:gap-x-0">
          <div className="pb-5 pt-10 lg:ml-[2rem] lg:mr-auto lg:flex lg:gap-x-[0.3rem] xl:ml-[4rem] xl:gap-x-[1rem] 2xl:ml-[5rem] 2xl:gap-x-[1.5rem]">
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
          <div className="relative lg:ml-auto lg:mr-auto lg:flex-col lg:items-center lg:justify-center">
            <div className="user__background">
              <img
                src="./Heroextension/UserBg.svg"
                alt="ClientsBackground"
                className="lg:w-[80%] xl:w-[90%] 2xl:w-[100%]"
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
                className="absolute lg:top-[-10.5rem] lg:w-[80%] xl:top-[-12.4rem] xl:w-[90%] 2xl:top-[-13.73rem] 2xl:w-[100%]"
              />
            </div>
          </div>
        </div>
        {/* Hero vibrant ribbon  */}
        <div className="absolute right-0 lg:right-[-1rem] lg:top-[-19rem] xl:right-[-2rem] xl:top-[-20rem] 2xl:right-0 2xl:top-[-22rem]">
          <img
            src="./Hero/VibrantHeroLine.svg"
            alt="vibrant ribbon"
            className="w-[150px] lg:h-[16.64313rem] lg:w-[16.92944rem] xl:h-[17.64313rem] xl:w-[20.92944rem] 2xl:h-[18.64313rem] 2xl:w-[25.92944rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Heroextension;
