const Stories = () => {
  return (
    <>
      <div className="bg-customBlue pb-20">
        <div className="text-center pt-[100px]">
          <h2 className="text-white font-archivo font-semibold text-[58px]">
            Years of strategic <br /> consulting expertise
          </h2>
        </div>
        <div className="flex ml-[310px] gap-48 pt-24">
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue text-left">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">15</p>
              </div>
              <div>
                <p className="font-inter text-base">
                  Years of consulting <br /> expertise
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">2</p>
              </div>
              <div>
                <p className="font-inter text-base">Offices in Kenya</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[12px]">
            <div className="py-8 px-[75px] text-customBlue">
              <div>
                <p className="font-archivo text-[78px] font-extrabold">3K+</p>
              </div>
              <div>
                <p className="font-inter text-base">
                  Successful clients
                  <br /> consulted with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
