import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Introduction/Intro";
import ProjectList from "./Components/ProjectList/ProjectList";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Intro />
      <ProjectList />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
