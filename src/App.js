import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Skills from './components/skills'
import Works from './components/works';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
