//@ts-ignore
import { useTestimonialContext } from "/lib/context";

const Testimonials = () => {
  const { currentTestimonial, handlePrevTestimonial, handleNextTestimonial } =
    useTestimonialContext();
  return (
    <>
      <div className="testimonial-card  absolute bottom-[-320px] left-3 z-10 w-[95%] rounded-[40px] p-5 text-white lg:bottom-[0] lg:left-[274px] lg:w-[70%] lg:p-20">
        <div>
          <h3 className="pt-8 text-center font-archivo text-[40px] font-semibold lg:text-start lg:text-[58px]">
            Igniting success through <br /> consultancy expertise
          </h3>
        </div>
        <div className="flex flex-wrap lg:gap-72">
          <div className="font-archivo text-[22px] lg:text-[28px]">
            <p className="pb-8 pt-5">{currentTestimonial.message}</p>
          </div>

          <div className="absolute right-3 top-3 lg:right-20 lg:top-[230px]">
            <img
              src="/Testimonial/Quotes.svg"
              alt="quotes"
              className="h-[1.8125rem] lg:h-[100%]"
            />
          </div>
        </div>
        <div className="flex gap-x-[100px] lg:gap-[800px]">
          <div className="font-inter">
            <p className="text-xl">{currentTestimonial.clientName}</p>
            <p className="text-base opacity-80">
              {currentTestimonial.companyName}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <button onClick={handlePrevTestimonial}>
              <img src="/Testimonial/ArrowLeft.svg" alt="prev" />
            </button>
            <button onClick={handleNextTestimonial}>
              <img src="/Testimonial/ArrowRight.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
