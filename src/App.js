import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Pages/Home/Banner/Banner';
import Contact from './Pages/Home/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar></NavBar>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
