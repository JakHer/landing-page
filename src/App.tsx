import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Hero
        title="I help startups build fast, conversion-focused interfaces with React."
        subtitle="I build modern frontends with React + TypeScript, focused on performance, UX, and maintainable code."
        primaryCtaLabel="Start a project"
        primaryCtaHref="#contact"
        secondaryCtaLabel="View projects"
        secondaryCtaHref="#projects"
      />

      <Projects username="JakHer" limit={6} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
