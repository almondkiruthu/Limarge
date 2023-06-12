import Faq from "./Faq";
import Testimonials from "./Testimonials";

const Cta = () => {
  return (
    <>
      <div className="bg-customBlue rounded-t-[40px] relative pb-[500px] mt-[100px] lg:mt-60">
        <Testimonials />
      </div>
      <div className="text-white bg-customBlue text-center pt-[360px] lg:pt-20 relative">
        <h2 className="font-archivo text-[40px] lg:text-[58px] font-semibold">
          Have an Idea? Let's <br /> consult and scale it <br /> together
        </h2>
        <div className="font-inter pt-24 text-center">
          <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
            Book a demo
          </button>
        </div>
        <div className="absolute top-[200px]">
          <img src="/Cta/Mask.svg" alt="Line" />
        </div>
      </div>
      <Faq />
    </>
  );
};

export default Cta;
