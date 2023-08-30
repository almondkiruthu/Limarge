import Aboutus from "./Aboutus";

const Stories = () => {
  return (
    <>
      <div className="relative rounded-b-[2.5rem] bg-customBlue pb-96">
        <div className="container">
          <div className="pt-[6.25rem] text-center">
            <h2 className="font-archivo text-[2.5rem] font-semibold text-white 2xl:text-[3.625rem]">
              Years of strategic <br /> consulting expertise
            </h2>
          </div>
          <div className="invisible 2xl:visible 2xl:absolute 2xl:right-0 2xl:top-[4.375rem]">
            <img
              src="/Storiesassets/Ring.svg"
              alt="Ring"
              className="h-[0] 2xl:h-[100%]"
            />
          </div>
          <div className="flex flex-wrap gap-y-10 pt-10 2xl:gap-x-[8rem] 2xl:gap-y-0 2xl:pt-24">
            <div className="mx-auto rounded-[1.33rem] bg-white">
              <div className="px-[3.75rem] py-4  text-customBlue 2xl:px-[4.6875rem] 2xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold 2xl:text-[4.875rem]">
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
              <div className="px-[3.75rem] py-4  text-customBlue 2xl:px-[4.6875rem] 2xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold 2xl:text-[4.875rem]">
                    2
                  </p>
                </div>
                <div>
                  <p className="font-inter text-base">Offices in Kenya</p>
                </div>
              </div>
            </div>
            <div className="mx-auto rounded-[1.33rem]  bg-white">
              <div className="px-[3.9375rem] py-4  text-customBlue 2xl:px-[4.6875rem] 2xl:py-8">
                <div>
                  <p className="font-archivo text-[3rem] font-extrabold 2xl:text-[4.875rem]">
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
            <button className="contact-us-btn w-[100%] rounded-[0.75rem] py-3 text-center font-medium text-white lg:w-[10%] lg:px-8">
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
