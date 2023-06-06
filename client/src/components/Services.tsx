import Servicecards from "./Servicecards";

const Services = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-20 relative">
        <div>
          <h2 className="font-archivo text-[58px] text-center font-semibold pb-14">
            Our Main <br /> Services
          </h2>
        </div>
        <Servicecards />
        <div className="absolute right-[300px] top-4">
          <img src="/Servicesassets/Star.svg" alt="star" />
        </div>
        <div className="font-inter pt-20 text-center">
          <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
