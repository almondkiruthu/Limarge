import Servicecards from "./Servicecards";

const Services = () => {
  return (
    <>
      <div className="relative bg-customBlue pt-20 text-white">
        <div className="container">
          <div>
            <h2 className="pb-14 text-center font-archivo text-[2.5rem] font-semibold xl:text-[3rem] 2xl:text-[3.625rem] ">
              Our Main <br /> Services
            </h2>
          </div>
          <Servicecards />
          <div className="invisble sm:visible sm:absolute sm:right-[3%] sm:top-1 md:right-[7%] xl:right-[10%] 2xl:right-[10%] 2xl:top-4">
            <img
              src="/Servicesassets/Star.svg"
              alt="star"
              className="h-0 sm:h-[8rem] xl:h-full"
            />
          </div>
          <div className="px-4 pt-[3.125rem] text-center font-inter 2xl:pt-20">
            <button className="contact-us-btn w-[100%] rounded-[0.75rem] py-3 text-center font-medium text-white ml:max-w-[80%] sm:max-w-[25%] md:max-w-[20%] lg:max-w-[15%] lg:px-[1rem] xl:max-w-[15%] 2xl:max-w-[10%] 2xl:px-8">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
