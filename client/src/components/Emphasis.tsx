import { motion } from "framer-motion";

const Emphasis = () => {
  return (
    <>
      <div className="bg-customBlue 2xl:pl-56 text-white flex flex-wrap 2xl:pt-10 pb-12">
        <div>
          <div>
            <h2 className="font-archivo font-semibold text-[40px] pl-4 lg:pl-0 lg:text-[58px] ">
              Unlocking <br /> Potential. Driving <br /> Success.
            </h2>
          </div>
          <div className="pt-4">
            <p className="font-inter text-base pl-4 lg:pl-0">
              Experience transformative consultancy solutions <br /> tailored to
              your unique industry needs.
            </p>
          </div>
          <div className="font-inter pt-8 pl-3 lg:pl-0">
            <button className="contact-us-btn w-[100%] lg:w-[40%] px-8 py-3 rounded-[12px] font-medium text-white text-center">
              Contact us
            </button>
          </div>
          <div className="pt-5 pl-4 lg:pl-0">
            <div className="">
              <img
                src="./EmphasisHeroSection/Clients.svg"
                alt="line"
                className="h-[50px]"
              />
            </div>
            <p className="font-inter font-semibold text-[28px] pt-5">10,000+</p>
            <p className="font-inter font-regular text-xl pt-2 opacity-70">
              Positive feedback
            </p>
          </div>
        </div>
        <div className=" lg:ml-[250px]">
          <motion.div className="pt-4 pl-5 lg:pl-0">
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
