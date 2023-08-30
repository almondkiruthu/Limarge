import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <div className="bg-customBlue pb-20 pt-20 text-white lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap  lg:gap-[40px]">
            <div className="flex-col pl-6 lg:ml-[300px] lg:pl-0">
              <h3 className="font-archivo text-[40px] font-semibold lg:text-[58px]">
                Frequently asked <br /> questions
              </h3>
              <div className="pt-10 lg:pt-20">
                <img
                  src="/Faq/FaqImage.svg"
                  alt="FaqImage"
                  className="mx-auto h-[194.68px] lg:h-[100%]"
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
