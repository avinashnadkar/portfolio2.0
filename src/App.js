import './App.css';
import { ThemeContextProvider } from "./Context/ThemeContextProvider";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
