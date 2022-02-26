import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import ProjectDetails from './Pages/Projects/ProjectDetails/ProjectDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
