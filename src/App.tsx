import Header from "./components/Header/Header";
import PortfolioStory from "./components/PortfolioStory/PortfolioStory";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />

      <main id="main-content">
        <PortfolioStory />
      </main>
    </>
  );
};

export default App;
