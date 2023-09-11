const Team = () => {
  return (
    <>
      <div className="container relative pb-[rem] pt-0">
        <div>
          <p className="text-center font-archivo text-[2.5rem] font-semibold text-customBlue lg:text-[3.625rem] ">
            Comprised of diverse <br /> minds
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-4 pt-12 sm:gap-x-[2rem] md:gap-x-[3rem] lg:gap-y-0">
          <div className="flex-col items-center justify-center rounded-[1.33rem] bg-customBlue pb-4 pl-5 pr-5 pt-5">
            <div className="h-4 w-4 rounded-[1.33rem] bg-[#FE8650]"></div>
            <div className="pt-5 text-white">
              <p className="pb-12 font-inter text-[1.25rem] lg:text-[1.625rem]">
                Dr. Jane Efery Wanyoike <br /> PhD, CPA (K)
              </p>
              <p className="pt-6 font-inter text-[24px] lg:text-[32px]">
                LEAD CONSULTANT
              </p>
            </div>
            <div>
              <button>
                <img
                  src="/Teamassets/linkedinbtn.svg"
                  alt="linkedin"
                  className="mt-3 h-[2.5rem] lg:h-[3.5625rem] lg:w-[3.5625rem]"
                />
              </button>
            </div>
          </div>

          <div className="flex-col items-center justify-center rounded-[1.33rem] bg-customBlue pb-2 pl-5 pr-5 pt-5">
            <div className="h-4 w-4 rounded-[1.33rem] bg-[#FE8650]"></div>
            <div className="pt-4 text-white">
              <p className="pb-9 font-inter text-[1.25rem] lg:text-[1.625rem]">
                Dr. Margaret.G PhD HRM, <br /> MA Counseling psychology,
                <br />
                B/ed(special education)
              </p>
              <p className="font-inter text-[1.5rem] lg:text-[2rem]">
                LEAD CONSULTANT
              </p>
            </div>
            <div>
              <button>
                <img
                  src="/Teamassets/linkedinbtn.svg"
                  alt="linkedin"
                  className="mt-3 h-[2.5rem] lg:h-[3.5625rem] lg:w-[3.5625rem]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="invisible -z-10 lg:visible lg:absolute 2xl:left-[40rem] lg:top-[26rem] xl:left-[33rem] lg:left-[25rem]">
          <img
            src="/Teamassets/Backround.svg"
            alt="group2"
            className="h-0 lg:h-[20rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
