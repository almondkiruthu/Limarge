//@ts-ignore
import { useTestimonialContext } from "/lib/context";

const Testimonials = () => {
  const { currentTestimonial, handlePrevTestimonial, handleNextTestimonial } =
    useTestimonialContext();
  return (
    <>
      <div className="testimonial-card relative mx-auto rounded-[2.5rem] p-5 text-white lg:top-[-9rem] lg:max-w-[60.125rem] xl:top-[-9rem] xl:max-w-[68.125rem] 2xl:top-[-10rem] 2xl:max-w-[75.125rem] 2xl:p-20">
        <div>
          <h3 className="pt-8 text-center font-archivo text-[2.5rem] font-semibold lg:text-start lg:text-[3.625rem]">
            Igniting success through <br /> consultancy expertise
          </h3>
        </div>
        <div className="flex flex-wrap lg:gap-x-[18rem]">
          <div className="font-archivo text-[1.375rem] lg:text-[1.75rem]">
            <p className="pb-8 pt-5">{currentTestimonial.message}</p>
          </div>

          <div className="absolute right-3 top-3 lg:right-20 xl:top-[10rem] 2xl:top-[14.375rem]">
            <img
              src="/Testimonial/Quotes.svg"
              alt="quotes"
              className="h-[1.8125rem] lg:h-[100%]"
            />
          </div>
        </div>
        <div className="flex gap-x-[6.25rem] lg:gap-[45rem]">
          <div className="font-inter">
            <p className="text-xl">{currentTestimonial.clientName}</p>
            <p className="text-base opacity-80">
              {currentTestimonial.companyName}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <button onClick={handlePrevTestimonial}>
              <img
                src="/Testimonial/ArrowLeft.svg"
                alt="prev"
                className="h-[1.5rem] w-[2.5rem]"
              />
            </button>
            <button onClick={handleNextTestimonial}>
              <img
                src="/Testimonial/ArrowRight.svg"
                alt="next"
                className="h-[1.5rem] w-[2.5rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
