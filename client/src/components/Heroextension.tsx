const Heroextension = () => {
  return (
    <>
      <div className="flex-row-reverse bg-customBlue rounded-t-[40px] lg:flex pb-[60px]">
        
        <div className="">
          <div className="px-[30px] lg:mr-[200px]">
            <img src="./Heroextension/UserBg.svg" alt="ClientsBackground" />
          </div>
          <div className="absolute bottom-[30px]  right-[50px] lg:bottom-[120px] lg:right-[240px]">
            <img src="./Heroextension/User.svg" alt="HappyClient" className="h-[250px] lg:h-[420px]" />
          </div>
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
