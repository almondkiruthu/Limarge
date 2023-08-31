const Aboutus = () => {
  return (
    <>
      <div className="knowus-card relative  bottom-[-37.5rem]  z-10 mx-auto max-w-[20.4375rem] rounded-[2.5rem] p-3 sm:top-[-8rem] sm:max-w-[30.125rem] sm:px-[4rem] sm:pb-[4rem] sm:pt-[3rem] md:top-[-13rem] lg:top-[-9rem] lg:max-w-[60.125rem] xl:top-[-12rem] xl:max-w-[75.125rem] 2xl:top-[-15rem]">
        <div>
          <p className="text-center font-archivo text-[2.5rem] font-semibold text-white lg:text-start xl:text-[3.625rem]">
            Get to Know us
          </p>
        </div>
        <div className="lg:flex lg:gap-x-1 xl:gap-x-2">
          <div className="p-5 pl-4 lg:p-0 lg:pt-[3.75rem]">
            <img
              src="/Aboutus/Note.svg"
              alt="Aboutus"
              className="h-[9.535625rem] xl:h-[100%]"
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
        <div className="vibrant-ribbon invisible z-50 lg:visible lg:absolute lg:bottom-[-9.5rem] lg:left-[-4rem] xl:bottom-[-12rem] xl:left-[-3rem] 2xl:bottom-[-14.125rem] 2xl:left-[-10rem]">
          <img
            src="/Aboutus/Vibrantribbon.svg"
            alt="Line"
            className="h-0 lg:h-[12rem] xl:h-[15rem] 2xl:h-[100%]"
          />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
