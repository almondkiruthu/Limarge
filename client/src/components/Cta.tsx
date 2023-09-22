import Faq from "./Faq";
import Testimonials from "./Testimonials";

const Cta = () => {
  return (
    <>
      <div className="mt-[22rem] mm:mt-[6.25rem] rounded-t-[40px] bg-customBlue lg:mt-[15rem] sm:mt-[18rem]">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      <div className="relative bg-customBlue text-center text-white">
        <div className="container">
          <h2 className="font-archivo text-[2.5rem] font-semibold lg:text-[3.625rem]">
            Have an Idea? Let's <br /> consult and scale it <br /> together
          </h2>
          <div className="px-4 pt-[3.125rem] text-center font-inter lg:pt-20">
            <button className="contact-us-btn w-[100%] rounded-[0.75rem] py-3 text-center font-medium text-white 2xl:max-w-[10rem]">
              Book a demo
            </button>
          </div>
        </div>
        <div className="invisible lg:visible lg:absolute 2xl:top-[12.5rem]">
          <img src="/Cta/Mask.svg" alt="Line" className="h-[0] lg:h-[100%]" />
        </div>
      </div>
      {/* Faq section */}
      <Faq />
    </>
  );
};

export default Cta;
