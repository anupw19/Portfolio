import "./app.scss";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/parallax";
import Skills from "./components/skills/skills";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="skills"><Parallax type="skills"/></section>
    <section><Skills /></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
