const Aboutus = () => {
  return (
    <>
      <div className="knowus-card rounded-[40px] z-10 absolute left-[20px] lg:left-[310px] p-3 lg:p-32 bottom-[-300px] lg:bottom-[-400px]">
        <div>
          <p className="text-white font-archivo text-center lg:text-start text-[40px] lg:text-[58px] font-semibold">
            Get to Know us
          </p>
        </div>
        <div className=" lg:flex">
          <div className="p-5 lg:p-0 lg:pt-[60px] pl-4">
            <img
              src="/Aboutus/Note.svg"
              alt="Aboutus"
              className="h-[152.57px] lg:h-[100%]"
            />
          </div>

          <div className="flex-col pl-4">
            <div className="text-white">
              <p className="font-archivo font-semibold text-[28px] pb-2">
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
              <p className="font-archivo font-semibold text-[28px] pt-2 pb-2">
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
              <p className="font-archivo font-semibold text-[28px] pb-2">
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
              <p className="font-archivo font-semibold text-[28px] pt-10 pb-2">
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
