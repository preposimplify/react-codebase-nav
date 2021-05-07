import React from 'react';
import { BrowserRouter, Route,Link, HashRouter,Switch } from "react-router-dom";
import './it.css';
import {FlippingCard, FlippingCardFront, FlippingCardBack} from 'react-ui-cards';
import Product from './product';
import Service from './service';
import Startup from './startups';
const IT = (props) => {
  const styles1 = {
    backgroundColor:"white",
    paddingTop:'8em',

  }
  return (
   <div>
   <div class="container h-100">
  <div class="row align-middle">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-1">
        <div class="txt">
          <h1>PRODUCT BASED<br />
COMPANIES</h1>
          <p>Companies like Adobe, Amazon, Commvault, Goldman Sachs, Lenovo, Zscaler</p>
        </div>
        <Link to="/Product">More!</Link>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-2">
        <div class="txt">
          <h1>FUNDED  <br />
STARTUPS</h1>
          <p>Companies like Navigus, Postman, Clicklabs, Bobble AI, Avalara Systems</p>
        </div>
        <Link to="/Startup">More!</Link>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-3">
        <div class="txt">
          <h1>SERVICE BASED <br />COMPANIES</h1>
          <p>Companies like TCS, Infosys, Capgemini, Cognizant, Wipro, Accenture, Deloitte</p>
        </div>
        <Link to="/Service">More!</Link>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>

</div>
  
  );
}
export default IT;
