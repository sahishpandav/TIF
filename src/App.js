import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="Homepage">
      <div className="BlurredBackground"></div>
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
