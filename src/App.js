import './App.css';
import './style.css'
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import { Portfolio } from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Masthead/>
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
