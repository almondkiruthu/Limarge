const Emphasis = () => {
  return (
    <>
      <div className="bg-customBlue lg:pl-56 text-white flex flex-wrap pt-10 pb-12">
        <div>
          <div>
            <h2 className="font-archivo font-semibold text-[58px] ">
              Unlocking <br /> Potential. Driving <br /> Success.
            </h2>
          </div>
          <div className="pt-4">
            <p className="font-inter text-base">
              Experience transformative consultancy solutions <br /> tailored to
              your unique industry needs.
            </p>
          </div>
          <div className="font-inter pt-8">
            <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
              Contact us
            </button>
          </div>
          <div className="pt-5">
            <div>
                <img src="./EmphasisHeroSection/Clients.svg" alt="line" />
            </div>
            <p className="font-inter font-semibold text-[28px] pt-5">10,000+</p>
            <p className="font-inter font-regular text-xl pt-2">Positive feedback</p>
          </div>
        </div>
        <div className="ml-[250px]">
          <div>
            <img
              src="./EmphasisHeroSection/EmphasisHeroImage.svg"
              alt="EmphasisHeroImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Emphasis;
