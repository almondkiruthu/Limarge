import Servicecards from "./Servicecards";

const Services = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-20 relative">
        <div>
          <h2 className="font-archivo text-[2.5rem] 3xl:text-[3.625rem] text-center font-semibold pb-14">
            Our Main <br /> Services
          </h2>
        </div>
        <Servicecards />
        <div className="invisble 3xl:visible 3xl:absolute 3xl:right-[18%] 3xl:top-4">
          <img src="/Servicesassets/Star.svg" alt="star" className="h-0 3xl:h-[100%]" />
        </div>
        <div className="font-inter pt-[3.125rem] 3xl:pt-20 text-center px-4">
          <button className="contact-us-btn w-[100%] 3xl:w-[10%] 3xl:px-8 py-3 rounded-[0.75rem] font-medium text-white text-center">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
