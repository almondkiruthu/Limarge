import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="bg-customBlue pb-96 relative rounded-b-[40px]">
        <div className="text-center pt-[100px]">
          <h2 className="text-white font-archivo font-semibold text-[40px] lg:text-[58px]">
            Years of strategic <br /> consulting expertise
          </h2>
        </div>
        <div className="invisible lg:visible lg:absolute lg:right-0 lg:top-[70px]">
          <img
            src="/Storiesassets/Ring.svg"
            alt="Ring"
            className="h-[0] lg:h-[100%]"
          />
        </div>
        <div className="flex lg:ml-[310px] gap-y-10 lg:gap-48 pt-10 lg:pt-24  lg:pl-0 flex-wrap">
          <div className="bg-white rounded-[12px] mx-auto">
            <div className=" py-4 lg:py-8  px-[60px] lg:px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[48px] lg:text-[78px] font-extrabold">
                  15
                </p>
              </div>
              <div>
                <p className="font-inter text-base">
                  Years of consulting <br /> expertise
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px] mx-auto">
            <div className="py-4 lg:py-8  px-[70px] lg:px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[48px] lg:text-[78px] font-extrabold">
                  2
                </p>
              </div>
              <div>
                <p className="font-inter text-base">Offices in Kenya</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px]  mx-auto">
            <div className="py-4 lg:py-8  px-[63px] lg:px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[48px] lg:text-[78px] font-extrabold">
                  3K+
                </p>
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

        <div className="font-inter pt-[50px] lg:pt-20 text-center px-4">
          <button className="contact-us-btn w-[100%] lg:w-[10%] lg:px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
        <Aboutus />
        <div className="invisible lg:visible lg:absolute lg:left-0 lg:top-[1250px] z-50 vibrant-ribbon">
          <img
            src="/Aboutus/Vibrantribbon.svg"
            alt="Line"
            className="h-0 lg:h-[100%]"
          />
        </div>
        {/* <div className="absolute right-[75px] top-[1250px] z-50 vibrant-ribbon1">
          <img src="/Aboutus/Vibrantribbon.svg" alt="Line" />
        </div> */}
      </div>
    </>
  );
};

export default Stories;

