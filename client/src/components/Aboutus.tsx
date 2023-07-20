const Aboutus = () => {
  return (
    <>
      <div className="knowus-card absolute inset-x-0 bottom-[-600px]  z-10 rounded-[40px] p-3 3xl:bottom-[-400px] lg:left-[310px] lg:right-[15%] lg:p-32">
        <div>
          <p className="text-center font-archivo text-[40px] font-semibold text-white lg:text-start lg:text-[58px]">
            Get to Know us
          </p>
        </div>
        <div className=" lg:flex">
          <div className="p-5 pl-4 lg:p-0 lg:pt-[60px]">
            <img
              src="/Aboutus/Note.svg"
              alt="Aboutus"
              className="h-[152.57px] lg:h-[100%]"
            />
          </div>

          <div className="flex-col pl-4">
            <div className="text-white">
              <p className="pb-2 font-archivo text-[28px] font-semibold">
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
              <p className="pb-2 pt-2 font-archivo text-[28px] font-semibold">
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
              <p className="pb-2 font-archivo text-[28px] font-semibold">
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
              <p className="pb-2 pt-10 font-archivo text-[28px] font-semibold">
                Our Vision
              </p>
              <p className="font-inter text-base text-white">
                To deliver the world’s most innovative <br /> consultancy growth
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
