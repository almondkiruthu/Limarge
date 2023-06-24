import { createContext, useContext, useState } from "react";


//@ts-ignore
const TestimonialContext = createContext();


// @ts-ignore
export const ContextProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);


  return (
    <TestimonialContext.Provider value={{ testimonials, setTestimonials }}>
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonialContext = () => useContext(TestimonialContext);

