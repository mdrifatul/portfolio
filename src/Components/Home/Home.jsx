
import About from '../About';
import Navbar from '../Navbar';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';
import Projects from './../Projects/Projects';
import Skills from './../Skills/Skills';
import './Home.css';

const Home = () => {
  return (

    <>
    <div className="w-11/12 mx-auto ">
      <div><Navbar></Navbar></div>
      <div id='about'><About></About></div>
      <div id='project'><Projects></Projects> </div>
      <div id='skills'><Skills></Skills></div>
      <div id='contact'><Contact></Contact></div>
    </div>
      <div><Footer></Footer></div>

    </>
  );
};

export default Home;