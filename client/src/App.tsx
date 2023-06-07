import Emphasis from "./components/Emphasis";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stories from "./components/Stories";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Emphasis />
      <Services />
      <Stories />
    </div>
  );
};

export default App;
