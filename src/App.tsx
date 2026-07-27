import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />

      <main id="main-content">
        <Hero
          title="I help startups ship fast, polished React interfaces that convert."
          subtitle="I design and build high-quality frontends for startups and product teams, with a focus on speed, clarity, and maintainable React code."
          primaryCtaLabel="Start a project"
          primaryCtaHref="#contact"
          secondaryCtaLabel="View projects"
          secondaryCtaHref="#projects"
        />

        <Projects username="JakHer" limit={4} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
