
import './App.css';
import Benefits from './components/benefits-section/Benefits';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import FaqSection from './components/faq-section/FaqSection';
import ContactSection from './components/contact-section/ContactSection';
import Testimonials from './components/testimonial-section/Testimonials';
import AccordionSection from './components/accrodion-section/AccordionSection';
import Footer from './components/footer/Footer';
function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Benefits />
        <FaqSection />
        <ContactSection />
        <Testimonials />
        <AccordionSection />
      </main>
      <Footer />
    </>
  );
}

export default App;




