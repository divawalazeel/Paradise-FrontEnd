import './App2.css';
import About from './components/About/About';
import Book from './components/Book/Book';
import Features from './components/Features/Features';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Reviews from './components/Reviews/Reviews';
import Slider from './components/Slider/Slider';
function App() {
  return (
    <div>
      <Navbar/>
      <Parallax/>
      <About/>
      <Slider/>
      <Features/>
      <Book/>
      <Reviews/>
    </div>
  );
}

export default App;
