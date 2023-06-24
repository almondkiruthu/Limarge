//@ts-nocheck
import { createContext, useContext, useState } from "react";
// @ts-ignore
import testimonialData from "../lib/testimonialData.js";

//@ts-ignore
const TestimonialContext = createContext();

// @ts-ignore
export const ContextProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([testimonialData[0]]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // @ts-ignore
  const handlePrevTestimonial = () => {
    const newIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;

    setCurrentTestimonialIndex(newIndex);
  };

  // @ts-ignore
  const handleNextTestimonial = () => {
    const newIndex = (currentTestimonialIndex + 1) % testimonials.length;

    setCurrentTestimonialIndex(newIndex);
  };

  // @ts-ignore
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <TestimonialContext.Provider value={{ testimonials, setTestimonials, handlePrevTestimonial, handleNextTestimonial, currentTestimonial}}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonialContext = () => useContext(TestimonialContext);

