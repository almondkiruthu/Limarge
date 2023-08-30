import Faq from "./Faq";
import Testimonials from "./Testimonials";

const Cta = () => {
  return (
    <>
      <div className="mt-[100px] rounded-t-[40px] bg-customBlue pb-[500px] lg:mt-60">
        <div className="container">
          <Testimonials />
        </div>
      </div>
      <div className="relative bg-customBlue pt-[360px] text-center text-white lg:pt-20">
        <div className="container">
          <h2 className="font-archivo text-[40px] font-semibold lg:text-[58px]">
            Have an Idea? Let's <br /> consult and scale it <br /> together
          </h2>
          <div className="px-4 pt-[50px] text-center font-inter lg:pt-20">
            <button className="contact-us-btn w-[100%] rounded-[12px] py-3 text-center font-medium text-white lg:w-[10%] lg:px-8">
              Book a demo
            </button>
          </div>
          <div className="invisible lg:visible lg:absolute lg:top-[200px]">
            <img src="/Cta/Mask.svg" alt="Line" className="h-[0] lg:h-[100%]" />
          </div>
        </div>
      </div>
     
        <Faq />
      
    </>
  );
};

export default Cta;
