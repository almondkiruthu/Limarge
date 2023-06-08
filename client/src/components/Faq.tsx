import Accordion from "./Accordion";


const Faq = () => {
  return (
    <>
      <div className="bg-customBlue text-white pt-44 pb-20">
        <div className="flex  gap-[40px]">
          <div className="flex-col ml-[300px]">
            <h3 className="font-archivo text-[58px] font-semibold">
              Frequently asked <br /> questions
            </h3>
            <div className="pt-20">
                <img src="/Faq/FaqImage.svg" alt="FaqImage" />
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
