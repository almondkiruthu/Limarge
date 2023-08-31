import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="relative rounded-b-[2.5rem] bg-customBlue sm:pb-[15rem] md:pb-[20rem] 2xl:pb-96 lg:pb-[15rem]">
        <div className="container">
          <div className="pt-[6.25rem] text-center">
            <h2 className="font-archivo text-[2.5rem] font-semibold text-white xl:text-[3.625rem]">
              Years of strategic <br /> consulting expertise
            </h2>
          </div>
          <div className="invisible xl:visible xl:absolute xl:right-0 xl:top-[4.375rem]">
            <img
              src="/Storiesassets/Ring.svg"
              alt="Ring"
              className="h-[0] xl:h-[10rem] 2xl:h-[100%]"
            />
          </div>
          <div className="flex flex-wrap gap-y-10 pt-10  xl:gap-x-[2rem] xl:gap-y-0 xl:pt-28  2xl:gap-x-[8rem] 2xl:pt-24">
            <div className="mx-auto rounded-[1.33rem] bg-white">
              <div className="px-[3.75rem] py-4  text-customBlue xl:px-[4.6875rem] xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold xl:text-[4.875rem]">
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
            <div className="mx-auto rounded-[1.33rem] bg-white">
              <div className="px-[3.75rem] py-4  text-customBlue xl:px-[4.6875rem] xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold xl:text-[4.875rem]">
                    2
                  </p>
                </div>
                <div>
                  <p className="font-inter text-base">Offices in Kenya</p>
                </div>
              </div>
            </div>
            <div className="mx-auto rounded-[1.33rem]  bg-white">
              <div className="px-[3.9375rem] py-4  text-customBlue xl:px-[4.6875rem] xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold xl:text-[4.875rem]">
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

          <div className="px-4 pt-[3.125rem] text-center font-inter 2xl:pt-20">
            <button className="contact-us-btn w-[100%] rounded-[0.75rem] py-3 text-center font-medium text-white lg:px-8 sm:w-[25%] md:w-[20%] lg:w-[16%] xl:w-[15%] 2xl:w-[10%]">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <Aboutus />
    </>
  );
};

export default Stories;
