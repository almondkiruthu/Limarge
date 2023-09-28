import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <div className="bg-customBlue pb-20 pt-20 text-white lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap justify-center md:gap-x-[10rem] lg:gap-x-[15rem] xl:gap-x-[14rem] 2xl:gap-x-[20rem]">
            <div className="flex-col">
              <h3 className="font-archivo text-[2.5rem] font-semibold lg:text-[3.625rem]">
                Frequently asked <br /> questions
              </h3>
              <div className="pt-10 lg:pt-20">
                <img
                  src="/Faq/FaqImage.svg"
                  alt="FaqImage"
                  className="mx-auto h-[12.1675rem] lg:h-[100%]"
                />
              </div>
            </div>
            <div>
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
