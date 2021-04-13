
import react from 'react';
import './App.css';
import './Components/main.css';
import logo2 from './img/logo2.png'
import Nav from './Components/Nav';
import About from './Components/about';
import { BrowserRouter, Route, Link, HashRouter,Switch } from "react-router-dom";
import Home from './Components/home';
import IT from './Components/IT';
import Footer from './Components/footer';
function App() {

  return (

    <BrowserRouter>
      <Nav />

      <div className="App">
      <Switch>
      <Route path = '/' exact component={() => <Home /> } />
      <Route path = "/about" exact component={() => <About /> } />
      <Route path = "/IT" component={IT} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
