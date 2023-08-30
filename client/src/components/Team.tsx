const Team = () => {
  return (
    <>
      <div className="container pt-0">
        <div>
          <p className="text-center font-archivo text-[2.5rem] font-semibold text-customBlue lg:text-[3.625rem] ">
            Comprised of diverse <br /> minds
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 pt-12 lg:gap-x-28">
          <div className="rounded-[12px] bg-customBlue pb-4 pl-5 pr-5 pt-5">
            <div className="rounded-[12px] bg-[#FE8650]">
              <div className="ml-[75px]">
                <img
                  src="/Teamassets/Consultant.svg"
                  alt="consultant"
                  className=""
                />
              </div>
            </div>
            <div className="pt-2 text-white">
              <p className="pb-12 font-inter text-[20px] lg:text-[26px]">
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

          <div className="rounded-[12px] bg-customBlue pb-2 pl-5 pr-5 pt-5">
            <div className="rounded-[12px] bg-[#FE8650]">
              <div className="ml-[75px]">
                <img src="/Teamassets/Consultant.svg" alt="consultant" />
              </div>
            </div>
            <div className="pt-2 text-white">
              <p className="pb-12 font-inter text-[20px] lg:text-[26px]">
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
        <div className="invisible -z-10 lg:visible lg:absolute lg:left-[35%] lg:top-[1090px]">
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
