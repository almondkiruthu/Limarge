import { motion } from "framer-motion";

const Heroextension = () => {
  return (
    <>
      <div className="flex-row-reverse bg-customBlue rounded-t-[40px] lg:flex pb-[60px]">
        <div className="user-bg relative">
          <div className="px-[50px] lg:mr-[200px] -z-10">
            <img
              src="./Heroextension/UserBg.svg"
              alt="ClientsBackground"
              className="h-[105.311px] w-[296.01px] lg:h-[100%] lg:w-[100%]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-[-142px] inset-0 object-cover lg:top-[-220px] lg:right-[13%]"
          >
            <img
              src="./Heroextension/User.svg"
              alt="HappyClient"
              className="h-full px-9"
            />
          </motion.div>
        </div>
        <div className=" pt-10 lg:flex lg:items-baseline lg:pl-[218px] lg:pt-10 pb-5 lg:gap-x-12 lg:mr-[256px]">
          <div className="flex justify-center gap-x-[40px]">
            <div>
              <img src="./Heroextension/AlphabetLogo.svg" alt="AlphabetLogo" />
            </div>
            <div>
              <img src="./Heroextension/AmazonLogo.svg" alt="amazonlogo" />
            </div>
          </div>

          <div className="flex justify-center gap-x-[40px]">
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
