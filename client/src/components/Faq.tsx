import Accordion from "./Accordion";


const Faq = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-20 lg:pt-44 pb-20">
        <div className="flex flex-wrap  lg:gap-[40px]">
          <div className="flex-col pl-6 lg:pl-0 lg:ml-[300px]">
            <h3 className="font-archivo text-[40px] lg:text-[58px] font-semibold">
              Frequently asked <br /> questions
            </h3>
            <div className="pt-10 lg:pt-20">
                <img src="/Faq/FaqImage.svg" alt="FaqImage" className="h-[194.68px] lg:h-[100%] mx-auto" />
            </div>
          </div>
          <div>
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
