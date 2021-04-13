import React from 'react';
import { BrowserRouter, Route, Link, HashRouter,Switch } from "react-router-dom";
import './it.css';
const IT = () => {
  return (
    <div className="it-field">
    <h1>IT Companies</h1>
    <hr />
    <div className="Prod">
    <h3>Product Based Companies</h3>
  <span>*Companies Like Adobe, Amazon, Zscaler, Commvault, WorkIndia, Avalara and many more</span>
  </div>
  <br />
    <div class="container">
  <div className="row">
    <div className="col-sm-6">
      <b>DSA and Problem Solving</b>
      <ul>
      <li>Maths</li>
      <li>Arrays</li>
      <li>String</li>
      <li>Matrix</li>
      <li>Linked-list</li>
      <li>Stack</li>
      <li>Queue</li>
      <li>Hashing</li>
      <li>Tree</li>
      <li>BST</li>
      <li>Graph</li>
      <li>Dynammic Programming</li>
      <li>Trie</li>
      <li>Bit Magic</li>

      </ul>
    </div>
    <div className="col-sm">
      <b>Subjective</b>
      <ul type="none">
      <li>OS</li>
      <li>DBMS</li>
      <li>System Design</li>
      <li>Computer Networks</li>
      <li>OOPs</li>


      </ul>
    </div>
    <div className="col-sm">
      <b>Development</b>
      <ul type="none">
      <li>Web</li>
      <li>Mobile</li>
      <li>ML</li>
      <li>BlockChain</li>
      <li>Cryptography</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
}
export default IT;
