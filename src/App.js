
import './App.css';
import Nav from './Components/Nav';
import About from './Components/about';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/home';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/home" component={Home} />
      <Route path = "/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
