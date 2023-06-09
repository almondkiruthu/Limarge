import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="relative rounded-b-[40px] bg-customBlue pb-96">
        <div className="pt-[100px] text-center">
          <h2 className="font-archivo text-[40px] font-semibold text-white lg:text-[58px]">
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
        <div className="flex flex-wrap gap-y-10 pt-10 lg:ml-[50px] lg:gap-x-4  lg:pl-0 lg:pt-24">
          <div className="mx-auto rounded-[12px] bg-white">
            <div className=" px-[60px] py-4  text-customBlue lg:px-[75px] lg:py-8">
              <div>
                <p className="font-archivo text-[48px] font-extrabold lg:text-[78px]">
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
          <div className="mx-auto rounded-[12px] bg-white">
            <div className="px-[70px] py-4  text-customBlue lg:px-[75px] lg:py-8">
              <div>
                <p className="font-archivo text-[48px] font-extrabold lg:text-[78px]">
                  2
                </p>
              </div>
              <div>
                <p className="font-inter text-base">Offices in Kenya</p>
              </div>
            </div>
          </div>
          <div className="mx-auto rounded-[12px]  bg-white">
            <div className="px-[63px] py-4  text-customBlue lg:px-[75px] lg:py-8">
              <div>
                <p className="font-archivo text-[48px] font-extrabold lg:text-[78px]">
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

        <div className="px-4 pt-[50px] text-center font-inter lg:pt-20">
          <button className="contact-us-btn w-[100%] rounded-[12px] py-3 text-center font-medium text-white lg:w-[10%] lg:px-8">
            Contact us
          </button>
        </div>
        <Aboutus />
        <div className="vibrant-ribbon invisible z-50 lg:visible lg:absolute lg:left-0 lg:top-[1250px]">
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
