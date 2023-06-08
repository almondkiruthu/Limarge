const Footer = () => {
  return (
    <>
      <div className="footer pt-12">
        <div className="flex items-center gap-[800px] ml-[270px]">
          <div>
            <img src="/Footer/Logo.svg" alt="logo" />
          </div>
          <div className="flex">
            <div>
              <p className="font-inter text-base opacity-70 text-white pt-3 pr-4">
                Send us email at
              </p>
            </div>
            <div className="font-inter text-center ml-2">
              <button className="contact-us-btn px-8 py-3 rounded-[12px] font-medium text-white text-center">
                limarge@example.com
              </button>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 flex ml-[320px]">
          {/* <hr className="bg-white opacity-30 ml-[280px] mr-[360px] border-[1px]" /> */}
          <img src="/Footer/Underline.svg" alt="line" />
        </div>
        <div className="flex ml-[280px] gap-[920px] ">
          <div className="flex-col">
            <p className="font-inter text-white font-semibold py-5">Location</p>
            <div className="font-inter opacity-50 text-white">
              <p className="pb-2">
                Limarge homes <br /> bulding, ground floor, <br /> Nairobi Meru
                highway, <br /> opposite Kannet <br /> enterprises.
              </p>
              <p className="pb-2">mailto:janeefery@gmail.com</p>
              <p className="pb-2">P.o box 2564 Embu</p>
              <p className="pb-2">Tel + 254 707 927 167</p>
            </div>
          </div>
          <div className="flex-col text-white">
            <p className="font-inter text-white font-semibold py-5">
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

        <div className="flex font-inter opacity-50 text-white gap-[500px] pt-10">
          <div className="ml-[280px]">
            <p>Copyright @ LIMARGE CONSULTANTS 2023. All rights reserved.</p>
          </div>
          <div className="flex">
            <div className="">
              <p>Terms and service</p>
            </div>
            <div className="pl-20">
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
