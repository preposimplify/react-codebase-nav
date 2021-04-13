import React, { useEffect, useState } from 'react';
import './nav.css';
import { BrowserRouter as Router, Route, NavLink, Link} from "react-router-dom";
import logo2 from '../img/logo2.png';
import About from './about';

const Nav = () => {
  const style2 = {
    maxHeight: "150px",
    maxWidth: "150px",
    width: "60px",
    height: "60px"
  }
  return (
    <div className="Nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="/"><img src={logo2} style={style2}/></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginRight:"4px"}}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link active color" aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/about" >About</Link>
        </li>
        <li class="nav-item dropdown" >
          <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Domain
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/IT">IT</a></li>
            <li><a class="dropdown-item" href="#">Circuital</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Compiler</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

</div>

  );
}
export default Nav;
