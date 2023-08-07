import Servicecards from "./Servicecards";

const Services = () => {
  return (
    <>
      <div className="relative bg-customBlue pt-20 text-white">
        <div className="container">
          <div>
            <h2 className="3xl:text-[3.625rem] pb-14 text-center font-archivo text-[2.5rem] font-semibold 2xl:text-[3rem]">
              Our Main <br /> Services
            </h2>
          </div>
          <Servicecards />
          <div className="invisble 3xl:visible 3xl:absolute 3xl:right-[18%] 3xl:top-4 2xl:visible 2xl:absolute 2xl:right-[10%] 2xl:top-4">
            <img
              src="/Servicesassets/Star.svg"
              alt="star"
              className="3xl:h-full h-0 2xl:h-full"
            />
          </div>
          <div className="3xl:pt-20 px-4 pt-[3.125rem] text-center font-inter">
            <button className="contact-us-btn 3xl:w-[10%] 3xl:px-8 w-[100%] rounded-[0.75rem] py-3 text-center font-medium text-white 2xl:max-w-[10%]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
