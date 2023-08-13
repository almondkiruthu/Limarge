// import { motion } from "framer-motion";

const Emphasis = () => {
  return (
    <>
      <div className="bg-customBlue pb-12 text-white">
        <div className="container flex flex-wrap items-center justify-around sm:flex-nowrap md:gap-x-[0.3rem] lg:gap-x-[2rem] lg:pt-[3rem] xl:pt-[4rem] 2xl:gap-x-[4rem]">
          <div className="lg:ml-4 2xl:ml-0">
            <div>
              <h2 className="pl-4 font-archivo text-[2.5rem] font-semibold xl:text-[3rem] 2xl:pl-0 2xl:text-[3.625rem] ">
                Unlocking <br /> Potential. Driving <br /> Success.
              </h2>
            </div>
            <div className="pt-4">
              <p className="pl-4 font-inter text-base 2xl:pl-0">
                Experience transformative consultancy solutions <br /> tailored
                to your unique industry needs.
              </p>
            </div>
            <div className="pl-3 pt-8 font-inter 2xl:pl-0">
              <button className="contact-us-btn w-[100%] rounded-[12px] px-8 py-3 text-center font-medium text-white  sm:max-w-[10rem]">
                Contact us
              </button>
            </div>
            <div className="pl-4 pt-5 2xl:pl-0">
              <div className="">
                <img
                  src="./EmphasisHeroSection/Clients.svg"
                  alt="line"
                  className="h-[3.125rem]"
                />
              </div>
              <p className="pt-5 font-inter text-[1.75rem] font-semibold">
                10,000+
              </p>
              <p className="font-regular pt-2 font-inter text-xl opacity-70">
                Positive feedback
              </p>
            </div>
          </div>
          <div className="">
            <div className="pl-5 pt-4 2xl:pl-0">
              <img
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ delay: 2 }}
                src="./EmphasisHeroSection/EmphasisHeroImage.svg"
                alt="EmphasisHeroImage"
                className="h-[12.9124rem] md:h-[18rem] lg:h-[90%] lg:w-[90%] xl:h-[80%] 2xl:h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emphasis;
