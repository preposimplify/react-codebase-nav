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
        <button>Let's Begin</button>

    //  <div className="para">
        <p><b>One-Stop Solution for Campus Placement Preparation <br />exclusively for DIT'ians</b></p>
    //  </div>
      </div>
    </div>
  );
}
export default Home;
