const Hero = () => {
  return (
    <>
      <div className="ml-56 mt-6">
        <div className="flex items-baseline font-extrabold text-customBlue gap-[10px]">
          <h1 className="font-archivo text-[98px]">We elevate and</h1>
          <img src="./Hero/HeroTextImage1.svg" />
          <h1 className="font-archivo text-[98px]">enrich</h1>
        </div>
        <div className="flex items-baseline font-extrabold text-customBlue">
          <img src="./Hero/HeroTextImage2.svg" />
          <h1 className="font-archivo text-[98px]">change across industries</h1>
        </div>
        <div className="pt-5">
          <p className="font-inter text-customBlue text-xl">
            Unleash growth potential. Empower <br /> franchisees. Expert
            consultancy at your <br /> service.
          </p>
        </div>
        <div className="font-inter pt-9" >
          <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
