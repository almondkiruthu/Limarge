const Services = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-20">
        <div>
          <h2 className="font-archivo text-[58px] text-center font-semibold">
            Our Main <br /> Services
          </h2>
        </div>
        <div>
          <div className="education-card">
            <p className="font-archivo text-xl">Education</p>
            <div>
              <p className="font-inter text-base">We specialize in.</p>
            </div>
            <div className="flex">
              {" "}
              <div>
                <p className="font-inter text-base">01</p>
              </div>
              <div>
                <p className="font-inter font-medium text-base">
                  Masters and PhD proposal and <br /> thesis development.
                </p>
              </div>
              <div>
                <hr className="bg-white opacity-10" />
              </div>
            </div>
            <div className="flex">
              {" "}
              <div>
                <p className="font-inter text-base">02</p>
              </div>
              <div>
                <p className="font-inter font-medium text-base">
                  Research methodology and <br />
                  data analysis guidance
                </p>
              </div>
              <div>
                <hr className="bg-white opacity-10" />
              </div>
            </div>
            <div className="flex">
              {" "}
              <div>
                <p className="font-inter text-base">03</p>
              </div>
              <div>
                <p className="font-inter font-medium text-base">
                Customized mentoring and <br />
                coaching
                </p>
              </div>
              <div>
                <hr className="bg-white opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
