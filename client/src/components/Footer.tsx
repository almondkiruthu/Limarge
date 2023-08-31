const Footer = () => {
  return (
    <>
      <div className="footer pt-12">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="2xl:ml-[10rem] 2xl:mr-auto">
              <img src="/Footer/Logo.svg" alt="logo" />
            </div>
            <div className="flex flex-wrap 2xl:ml-auto 2xl:mr-[11rem]">
              <div>
                <p className="pr-4 pt-3 font-inter text-base text-white opacity-70">
                  Send us email at
                </p>
              </div>
              <div className="ml-2 text-center font-inter">
                <button className="contact-us-btn rounded-[0.75rem] px-8 py-3 text-center font-medium text-white">
                  limarge@example.com
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-5 pt-8">
            <img src="/Footer/Underline.svg" alt="line" />
          </div>
          <div className="flex flex-wrap">
            <div className="flex-col 2xl:ml-[11rem] 2xl:mr-auto">
              <p className="py-5 font-inter font-semibold text-white">
                Location
              </p>
              <div className="font-inter text-white opacity-50">
                <p className="pb-2">
                  Limarge homes <br /> bulding, ground floor, <br /> Nairobi
                  Meru highway, <br /> opposite Kannet <br /> enterprises.
                </p>
                <p className="pb-2">mailto:janeefery@gmail.com</p>
                <p className="pb-2">P.o box 2564 Embu</p>
                <p className="pb-2">Tel + 254 707 927 167</p>
              </div>
            </div>
            <div className="flex-col text-white 2xl:ml-auto 2xl:mr-[15rem]">
              <p className="py-5 font-inter font-semibold text-white">
                Quick Links
              </p>
              <div className="font-inter opacity-50">
                <p className="pb-2">About</p>
                <p className="pb-2">Services</p>
                <p className="pb-2">Contact</p>
                <p className="pb-2">Home</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap pt-10 font-inter text-base text-white opacity-50">
            <div className="2xl:ml-[11rem] 2xl:mr-auto">
              <p>Copyright @ LIMARGE CONSULTANTS 2023. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap 2xl:ml-auto 2xl:mr-[8rem] 2xl:gap-x-8">
              <div className="">
                <p>Terms and service</p>
              </div>
              <div className="">
                <p>Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
