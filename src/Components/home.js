import React from 'react';
import './main.css';
import logo2 from '../img/logo2.png';
const Home = () => {
  return (
    <div className="main-content">
      <img src={logo2} />
      <div className="head-c">
        <h2>Welcome to Prep-O-Simplify!!</h2>
      </div>
      <div className="btn">
        <button><b>Let's Begin</b></button>


        <p><b>One-Stop Solution for <font>Campus Placement Preparation <br />exclusivelyfor DIT'ians </font></b></p>

      </div>
    </div>
  );
}
export default Home;
