import Cta from "./components/Cta";
import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Servicesextension from "./components/Servicesextension";
import Stories from "./components/Stories";
import Team from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Emphasis />
      <Services />
      <Stories />
      <Team />
      <Servicesextension />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
