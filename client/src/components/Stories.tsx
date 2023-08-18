import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="relative rounded-b-[2.5rem] bg-customBlue pb-96">
        <div className="container">
          
        </div>
        <div className="pt-[6.25rem] text-center">
          <h2 className="3xl:text-[3.625rem] font-archivo text-[40px] font-semibold text-white 2xl:text-[3rem]">
            Years of strategic <br /> consulting expertise
          </h2>
        </div>
        <div className="3xl:visible 3xl:absolute 3xl:top-[70px] invisible 2xl:visible 2xl:absolute 2xl:right-0 2xl:top-[1%]">
          <img
            src="/Storiesassets/Ring.svg"
            alt="Ring"
            className="3xl:h-[100%] h-[0] 2xl:h-[100%]"
          />
        </div>
        <div className="3xl:ml-[3.125rem] 3xl:gap-x-4 3xl:pt-24 flex flex-wrap gap-y-10 pt-10 2xl:gap-x-3">
          <div className="mx-auto rounded-[12px] bg-white">
            <div className=" px-[60px] py-4  text-customBlue 2xl:px-[75px] 2xl:py-8">
              <div>
                <p className="3xl:text-[78px] font-archivo text-[48px] font-extrabold 2xl:text-[4.875rem]">
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
            <div className="px-[70px] py-4  text-customBlue 2xl:px-[75px] 2xl:py-8">
              <div>
                <p className="3xl:text-[78px] font-archivo text-[48px] font-extrabold 2xl:text-[4.875rem]">
                  2
                </p>
              </div>
              <div>
                <p className="font-inter text-base">Offices in Kenya</p>
              </div>
            </div>
          </div>
          <div className="mx-auto rounded-[12px]  bg-white">
            <div className="px-[63px] py-4  text-customBlue 2xl:px-[75px] 2xl:py-8">
              <div>
                <p className="3xl:text-[78px] font-archivo text-[48px] font-extrabold 2xl:text-[4.875rem]">
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

        <div className="px-4 pt-[50px] text-center font-inter 2xl:pt-20">
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
