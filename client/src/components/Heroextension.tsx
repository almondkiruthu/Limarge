// import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className=" relative rounded-t-[2.5rem] bg-customBlue pb-[3.75rem]">
        <div className="hero__extension__container container lg:flex lg:items-center">
          <div className="pb-5 pt-10 lg:mr-auto lg:flex xl:ml-[4rem] xl:gap-x-[1rem] 2xl:ml-[5rem] 2xl:gap-x-[1.5rem]">
            <img src="./Heroextension/AlphabetLogo.svg" alt="AlphabetLogo" />
            <img src="./Heroextension/AmazonLogo.svg" alt="amazonlogo" />
            <img src="./Heroextension/AzureLogo.svg" alt="azurelogo" />
            <img src="./Heroextension/SlackLogo.svg" alt="slacklogo" />
          </div>
          <div className="relative lg:ml-auto lg:mr-auto lg:flex-col lg:items-center lg:justify-center">
            <div className="user__background">
              <img
                src="./Heroextension/UserBg.svg"
                alt="ClientsBackground"
                className=""
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
                className="absolute xl:top-[-13.73rem] 2xl:top-[-13.73rem]"
              />
            </div>
          </div>
        </div>
        {/* Hero vibrant ribbon  */}
        <div className="absolute right-0 xl:right-[-2rem] xl:top-[-20rem] 2xl:right-0 2xl:top-[-22rem]">
          <img
            src="./Hero/VibrantHeroLine.svg"
            alt="vibrant ribbon"
            className="w-[150px] xl:h-[17.64313rem] xl:w-[20.92944rem] 2xl:h-[18.64313rem] 2xl:w-[25.92944rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Heroextension;
