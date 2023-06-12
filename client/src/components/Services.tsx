import Servicecards from "./Servicecards";

const Services = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-20 relative">
        <div>
          <h2 className="font-archivo text-[40px] lg:text-[58px] text-center font-semibold pb-14">
            Our Main <br /> Services
          </h2>
        </div>
        <Servicecards />
        <div className="invisble lg:visible lg:absolute lg:right-[300px] lg:top-4">
          <img src="/Servicesassets/Star.svg" alt="star" className="h-0 lg:h-[100%]" />
        </div>
        <div className="font-inter pt-[50px] lg:pt-20 text-center px-4">
          <button className="contact-us-btn w-[100%] lg:w-[10%] lg:px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
