// import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className="max-w-[] flex-row-reverse rounded-t-[40px] bg-customBlue pb-[60px] xl:flex xl:justify-evenly 2xl:flex">
        <div className="user-bg relative mx-auto xl:ml-[8rem]">
          <div className="-z-10 px-[15%] xl:px-0 xl:pl-[0rem] 2xl:ml-auto 2xl:pl-0">
            <img
              src="./Heroextension/UserBg.svg"
              alt="ClientsBackground"
              className="h-full w-full xl:h-[100%] xl:w-[80%] 2xl:w-[100%]"
            />
          </div>
          <div
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute inset-0 top-[-142px] object-cover 2xl:right-[1%] 2xl:top-[-220px]"
          >
            <img
              src="./Heroextension/User.svg"
              alt="HappyClient"
              className="h-full object-cover px-[10%] xl:px-0"
            />
          </div>
        </div>
        <div className=" pb-5 pt-10 xl:flex xl:pl-24 2xl:mr-auto 2xl:flex 2xl:items-baseline 2xl:gap-x-12 2xl:pl-[8rem] 2xl:pt-10">
          <div className="flex justify-center gap-x-[2.5rem]">
            <div>
              <img src="./Heroextension/AlphabetLogo.svg" alt="AlphabetLogo" />
            </div>
            <div>
              <img src="./Heroextension/AmazonLogo.svg" alt="amazonlogo" />
            </div>
          </div>

          <div className="flex justify-center gap-x-[2.5rem] xl:ml-[2rem] 2xl:ml-0">
            <div>
              <img src="./Heroextension/AzureLogo.svg" alt="azurelogo" />
            </div>
            <div>
              <img src="./Heroextension/SlackLogo.svg" alt="slacklogo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroextension;
