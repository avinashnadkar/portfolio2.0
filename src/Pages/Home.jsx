import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';

const Home = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <AboutMe/>
            <Projects/>
            <Contact/> 
        </>
    )
}

export default Home;