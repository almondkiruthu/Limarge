const Emphasis = () => {
  return (
    <>
      <div className="bg-customBlue pl-56 text-white flex pt-10">
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
                <img src="./EmphasisHeroSection/EmphasisHeroLine.svg" alt="line" />
            </div>
            
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
