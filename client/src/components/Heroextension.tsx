// import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className="rounded-t-[2.5rem] bg-customBlue pb-[3.75rem]">
        <div className="hero__extension__container container lg:flex 2xl:flex 2xl:items-center">
          <div className=" 2xl:m pb-5 pt-10 2xl:ml-[5rem] 2xl:mr-auto 2xl:flex 2xl:gap-x-[1.5rem]">
            <img src="./Heroextension/AlphabetLogo.svg" alt="AlphabetLogo" />
            <img src="./Heroextension/AmazonLogo.svg" alt="amazonlogo" />
            <img src="./Heroextension/AzureLogo.svg" alt="azurelogo" />
            <img src="./Heroextension/SlackLogo.svg" alt="slacklogo" />
          </div>
          <div className="relative 2xl:ml-auto 2xl:mr-auto 2xl:flex-col 2xl:items-center 2xl:justify-center">
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
                className="absolute 2xl:top-[-13.75rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroextension;
