import "./App.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Display from "./componets/Display";
import About from "./componets/About";
import ContactForm from "./componets/ContactForm";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Hero />
        <Display />
        <About />
        {/* <ContactForm /> */}
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
