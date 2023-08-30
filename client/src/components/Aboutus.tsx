const Aboutus = () => {
  return (
    <>
      <div className="knowus-card relative  bottom-[-37.5rem]  z-10 rounded-[2.5rem] p-3 2xl:mx-auto 2xl:max-w-[75.125rem] 2xl:top-[-15rem] 2xl:px-[4rem] 2xl:pt-[3rem] 2xl:pb-[4rem]">
        <div>
          <p className="text-center font-archivo text-[2.5rem] font-semibold text-white lg:text-start lg:text-[3.625rem]">
            Get to Know us
          </p>
        </div>
        <div className="lg:flex 2xl:gap-x-2">
          <div className="p-5 pl-4 lg:p-0 lg:pt-[3.75rem]">
            <img
              src="/Aboutus/Note.svg"
              alt="Aboutus"
              className="h-[9.535625rem] lg:h-[100%]"
            />
          </div>

          <div className="flex-col pl-4">
            <div className="text-white">
              <p className="pb-2 font-archivo text-[1.75rem] font-semibold">
                Who we are
              </p>
              <p className="font-inter text-base text-white">
                Limarge Consultants is a firm of <br /> professional
                consultants. We translate <br /> knowledge into actionable
                solutions <br /> through lecturing, counselling, training,{" "}
                <br /> and research.
              </p>
            </div>
            <div className="text-white">
              <p className="pb-2 pt-2 font-archivo text-[1.75rem] font-semibold">
                Our Philosophy
              </p>
              <p className="font-inter text-base text-white">
                Our passion is to surpass expectations. <br /> We are solution
                mentors who apply <br /> professional ethics in our quest to
                offer <br /> solutions. We create what people love <br /> and
                want before they even realize it.
              </p>
            </div>
          </div>

          <div className="flex-col pl-4 lg:pl-8">
            <div className="text-white">
              <p className="pb-2 font-archivo text-[1.75rem] font-semibold">
                Our Mission
              </p>
              <p className="font-inter text-base text-white">
                To provide a unique consultancy <br /> experience worldwide,
                delivered <br />
                consistently in a high-quality manner, <br /> that is memorable,
                reasonably priced, <br /> and fosters a friendly atmosphere
              </p>
            </div>
            <div className="text-white">
              <p className="pb-2 pt-10 font-archivo text-[1.75rem] font-semibold">
                Our Vision
              </p>
              <p className="font-inter text-base text-white">
                To deliver the world’s most innovative <br /> consultancy growth
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="vibrant-ribbon invisible z-50 lg:visible lg:absolute lg:left-0 lg:top-[85.125rem]">
            <img
              src="/Aboutus/Vibrantribbon.svg"
              alt="Line"
              className="h-0 lg:h-[100%]"
            />
          </div>
      </div>
    </>
  );
};

export default Aboutus;
