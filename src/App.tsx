import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Hero
        title="I help startups ship fast, polished React interfaces that convert."
        subtitle="I design and build high-quality frontends for startups and product teams, with a focus on speed, clarity, and maintainable React code."
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
