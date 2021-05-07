
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
import Service from './Components/service';
import Product from './Components/product';
import Startup from './Components/startups';
function App() {

  return (

    <BrowserRouter>
      <Nav />

      <div className="App">
      <Switch>
      <Route path = '/' exact component={() => <Home /> } />
      <Route path = '/About' component={About} />
      <Route path = "/IT" component={IT} />
      <Route path = "/Service" component={Service} />
      <Route path = "/Product" component={Product} />
      <Route path = "/Startup" component={Startup} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
