import Header from "./components/Header";
import Hero from "./components/Hero";
import Reasons from "./components/Reasons";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Ads from "./components/Ads";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reasons />
      <AboutUs />
      <Services />
      <Stats />
      <Ads />
      <Projects />
      <Contact />
      <Bottom />
      <Footer />
    </main>
  );
}
