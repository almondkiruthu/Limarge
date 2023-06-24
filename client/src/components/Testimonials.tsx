//@ts-ignore
import { useTestimonialContext } from "/lib/context";


const Testimonials = () => {
  const { currentTestimonial, handlePrevTestimonial, handleNextTestimonial } = useTestimonialContext();
  return (
    <>
      <div className="testimonial-card  text-white absolute rounded-[40px] z-10 p-5 lg:p-20 left-3 lg:left-[274px] bottom-[-320px] lg:bottom-[0] w-[95%] lg:w-[70%]">
        <div>
          <h3 className="font-archivo font-semibold text-center lg:text-start text-[40px] lg:text-[58px] pt-8">
            Igniting success through <br /> consultancy expertise
          </h3>
        </div>
        <div className="flex flex-wrap lg:gap-72">
          <div className="font-archivo text-[22px] lg:text-[28px]">
            <p className="pb-8 pt-5">
            {currentTestimonial.message}
            </p>
          </div>

          <div className="absolute right-3 top-3 lg:top-[270px] lg:right-20">
            <img
              src="/Testimonial/Quotes.svg"
              alt="quotes"
              className="h-[29px] lg:h-[100%]"
            />
          </div>
        </div>
        <div className="flex gap-x-[100px] lg:gap-[800px]">
          <div className="font-inter">
            <p className="text-[20px]">{currentTestimonial.clientName}</p>
            <p className="text-base opacity-80">{currentTestimonial.companyName}</p>
          </div>
          <div className="flex gap-4 items-center">
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
