import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Hours from "./components/Hours";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Hours />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}