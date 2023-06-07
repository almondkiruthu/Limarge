import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="bg-customBlue pb-96 relative rounded-b-[100px]">
        <div className="text-center pt-[100px]">
          <h2 className="text-white font-archivo font-semibold text-[58px]">
            Years of strategic <br /> consulting expertise
          </h2>
        </div>
        <div className="absolute right-0 top-[70px]">
          <img src="/Storiesassets/Ring.svg" alt=" " />
        </div>
        <div className="flex ml-[310px] gap-48 pt-24">
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue text-left">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">15</p>
              </div>
              <div>
                <p className="font-inter text-base">
                  Years of consulting <br /> expertise
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">2</p>
              </div>
              <div>
                <p className="font-inter text-base">Offices in Kenya</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">3K+</p>
              </div>
              <div>
                <p className="font-inter text-base">
                  Successful clients
                  <br /> consulted with us
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-inter pt-24 text-center">
          <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
        <Aboutus />
        <div className="absolute left-0 top-[1250px] z-50 vibrant-ribbon">
          <img src="/Aboutus/Vibrantribbon.svg" alt="Line" />
        </div>
        {/* <div className="absolute right-[75px] top-[1250px] z-50 vibrant-ribbon1">
          <img src="/Aboutus/Vibrantribbon.svg" alt="Line" />
        </div> */}
      </div>
    </>
  );
};

export default Stories;
