import logo from './logo.svg';
import './App.css';
import './style.css'
import Navbar from './components/Navbar';
import Masthead from './components/Masthead';
import { Portfolio } from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <div className=''>
      <h1>Welcome to the freelance site</h1>
      <Navbar />
      <Masthead/>
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
