import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full py-2 px-4 bg-gray-200 text-left"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3.41L16.18 9.6a1 1 0 0 1-1.42 1.42L10 6.84 4.24 12.6a1 1 0 0 1-1.42-1.42L10 3.41z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
