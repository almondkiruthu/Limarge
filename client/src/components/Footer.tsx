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
        <div className="pt-5 pb-5">
            <hr className="bg-white opacity-30 ml-[280px] mr-[360px]" />
        </div>
      </div>
    </>
  );
};

export default Footer;
