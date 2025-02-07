import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Testimony } from "./components/Testimony";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-center">
        <Hero />
        <Portfolio />
        <Testimony />
      </div>
      <Footer />
    </>
  );
}

export default App;
