import { motion } from "framer-motion";

const Emphasis = () => {
  return (
    <>
      <div className="flex xl:justify-around flex-wrap bg-customBlue pb-12 text-white 2xl:pl-56 2xl:pt-10">
        <div>
          <div>
            <h2 className="pl-4 font-archivo text-[40px] font-semibold xl:text-[3rem] 2xl:pl-0 2xl:text-[58px] ">
              Unlocking <br /> Potential. Driving <br /> Success.
            </h2>
          </div>
          <div className="pt-4">
            <p className="pl-4 font-inter text-base 2xl:pl-0">
              Experience transformative consultancy solutions <br /> tailored to
              your unique industry needs.
            </p>
          </div>
          <div className="pl-3 pt-8 font-inter 2xl:pl-0">
            <button className="contact-us-btn w-[100%] rounded-[12px] px-8 py-3 text-center font-medium text-white lg:w-[40%]">
              Contact us
            </button>
          </div>
          <div className="pl-4 pt-5 2xl:pl-0">
            <div className="">
              <img
                src="./EmphasisHeroSection/Clients.svg"
                alt="line"
                className="h-[50px]"
              />
            </div>
            <p className="pt-5 font-inter text-[28px] font-semibold">10,000+</p>
            <p className="font-regular pt-2 font-inter text-xl opacity-70">
              Positive feedback
            </p>
          </div>
        </div>
        <div className="2xl:ml-[250px]">
          <motion.div className="pl-5 pt-4 lg:pl-0">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2 }}
              src="./EmphasisHeroSection/EmphasisHeroImage.svg"
              alt="EmphasisHeroImage"
              className="h-[206.6px] lg:h-[100%]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Emphasis;
