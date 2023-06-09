const Heroextension = () => {
  return (
    <>
      <div className="flex-row-reverse bg-customBlue rounded-t-[40px] lg:flex pb-32">
        
        <div className="">
          <div className="px-[30px] lg:ml-[250px]">
            <img src="./Heroextension/UserBg.svg" alt="ClientsBackground" />
          </div>
          <div className="absolute bottom-[30px]  right-[50px] lg:bottom-[-120px] lg:right-[280px]">
            <img src="./Heroextension/User.svg" alt="HappyClient" className="h-[250px]" />
          </div>
        </div>
        <div className=" pt-5 lg:flex lg:items-baseline lg:pl-[218px] lg:pt-10 pb-5 lg:gap-12">
          <div className="flex justify-center">
            <div>
              <img src="./Heroextension/AlphabetLogo.svg" alt="AlphabetLogo" />
            </div>
            <div>
              <img src="./Heroextension/AmazonLogo.svg" alt="amazonlogo" />
            </div>
          </div>

          <div className="flex justify-center">
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
