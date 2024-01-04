import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
    <ChakraProvider>
        <div className="blured"></div>
          <Navbar />
          <Homepage />
          <Footer />
      
    </ChakraProvider>
      
    </>
  );
}

export default App;
