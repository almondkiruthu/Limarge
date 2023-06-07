const Testimonials = () => {
  return (
    <>
      <div className="testimonial-card text-white">
        <div>
          <h3 className="font-archivo font-semibold text-[58px]">
            Igniting success through <br /> consultancy expertise
          </h3>
        </div>
        <div className="flex">
          <div className="font-archivo text-[28px]">
            <p>
              Limerage Consultancy has been an invaluable partner in our
              <br /> journey towards success. Their expert advice and strategic{" "}
              <br /> insights have significantly improved our business
              operations. We <br /> are grateful for their professionalism,
              dedication, and the <br /> exceptional value they bring to our
              organization.
            </p>
          </div>

          <div>
            <p className="font-archivo text-[200px] testimonial-quotes">
              <img src="/Testimonial/Quotes.svg" alt="quotes" />
            </p>
          </div>
        </div>
        <div className="flex">
            <div className="font-inter">
                <p className="text-[20px]">Floyd Miles</p>
                <p className="text-base opacity-80">The Walt Disney Company</p>
            </div>
            <div className="flex">
                <button><img src="/Testimonial/ArrowLeft.svg" alt="prev" /></button>
                <button><img src="/Testimonial/ArrowRight.svg" alt="next" /></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
