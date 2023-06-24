//@ts-nocheck
import { createContext, useContext, useState } from "react";
// @ts-ignore
import testimonialData from "/lib/testimonialData.js";

//@ts-ignore
const TestimonialContext = createContext();

// @ts-ignore
export const ContextProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([testimonialData[0]]);
  //   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const [count, setCount] = useState(1);
  const Count = () => {
    setCount(count + 1);
    if (count === 2) {
      setCount(2);
    }
  };

  const [prevCount, setPrevCount] = useState(count);
  const PrevCount = () => {
    setPrevCount(prevCount - 1);
    if (prevCount === 0) {
      setPrevCount(0);
    }
  };
  const currentTestimonial = testimonials[0];
  const handleNextTestimonial = () => {
    Count();
    currentTestimonial = setTestimonials([testimonialData[count]]);
  };
  const handlePrevTestimonial = () => {
    PrevCount();
    currentTestimonial = setTestimonials([testimonialData[prevCount]]);
  };

  return (
    <TestimonialContext.Provider
      value={{
        testimonials,
        setTestimonials,
        handlePrevTestimonial,
        handleNextTestimonial,
        currentTestimonial,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonialContext = () => useContext(TestimonialContext);
