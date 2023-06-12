const Team = () => {
  return (
    <>
      <div className="pt-[630px] lg:pt-[480px] relative">
        <div>
          <p className="font-archivo text-[40px] lg:text-[58px] text-customBlue text-center font-semibold ">
            Comprised of diverse <br /> minds
          </p>
        </div>
        <div className="flex flex-wrap gap-y-4 lg:gap-28 lg:ml-[480px] pt-12">
          <div className="bg-customBlue rounded-[12px] pt-5 pr-5 pl-5 pb-4">
            <div className="bg-[#FE8650] rounded-[12px]">
              <div className="ml-[75px]">
                <img
                  src="/Teamassets/Consultant.svg"
                  alt="consultant"
                  className=""
                />
              </div>
            </div>
            <div className="text-white pt-2">
              <p className="font-inter text-[20px] lg:text-[26px] pb-12">
                Dr. Jane Efery Wanyoike <br /> PhD, CPA (K)
              </p>
              <p className="font-inter text-[24px] lg:text-[32px]">
                LEAD CONSULTANT
              </p>
            </div>
            <div>
              <button>
                <img
                  src="/Teamassets/linkedinbtn.svg"
                  alt="linkedin"
                  className="h-[40px] lg:h-[100%]"
                />
              </button>
            </div>
          </div>

          <div className="bg-customBlue rounded-[12px] pt-5 pr-5 pl-5 pb-2">
            <div className="bg-[#FE8650] rounded-[12px]">
              <div className="ml-[75px]">
                <img src="/Teamassets/Consultant.svg" alt="consultant" />
              </div>
            </div>
            <div className="text-white pt-2">
              <p className="font-inter text-[20px] lg:text-[26px] pb-12">
                Dr. Margaret.G PhD HRM, <br /> MA Counseling psychology,
                <br />
                B/ed(special education)
              </p>
              <p className="font-inter text-[24px] lg:text-[32px]">
                LEAD CONSULTANT
              </p>
            </div>
            <div>
              <button>
                <img
                  src="/Teamassets/linkedinbtn.svg"
                  alt="linkedin"
                  className="h-[40px] lg:h-[100%]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="invisible lg:visible lg:absolute lg:left-[35%] lg:top-[1090px] -z-10">
          <img
            src="/Teamassets/Backround.svg"
            alt="group2"
            className="h-0 lg:h-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
