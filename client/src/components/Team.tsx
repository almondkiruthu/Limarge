const Team = () => {
  return (
    <>
      <div className="pt-[480px]">
        <div>
          <p className="font-archivo text-[58px] text-customBlue text-center font-semibold ">
            Comprised of diverse <br /> minds
          </p>
        </div>
        <div className="flex gap-28 ml-[480px] pt-12">
          <div className="bg-customBlue rounded-[12px] pt-5 pr-5 pl-5 pb-4">
            <div className="bg-[#FE8650] rounded-[12px]">
              <div className="ml-[75px]">
                <img src="/Teamassets/Consultant.svg" alt="consultant" />
              </div>
            </div>
            <div className="text-white pt-2">
              <p className="font-inter text-[26px] pb-12">
                Dr. Jane Efery Wanyoike <br /> PhD, CPA (K)
              </p>
              <p className="font-inter text-[32px]">LEAD CONSULTANT</p>
            </div>
            <div>
              <button>
                <img src="/Teamassets/linkedinbtn.svg" alt="linkedin" />
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
              <p className="font-inter text-[26px] pb-2">
                Dr. Margaret.G PhD HRM, <br /> MA Counseling psychology,
                <br />
                B/ed(special education)
              </p>
              <p className="font-inter text-[32px]">LEAD CONSULTANT</p>
            </div>
            <div>
              <button>
                <img src="/Teamassets/linkedinbtn.svg" alt="linkedin" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
