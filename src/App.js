import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/footer/Footer";
import Join from "./components/joinUS/Join";
import Plans from "./components/plans/Plans";
import Program from "./components/program/Program";
import Reson from "./components/reason/Reson";
import Testimonial from "./components/tesimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reson />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
