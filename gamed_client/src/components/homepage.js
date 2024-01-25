import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
const Home = () => {
  const logo = require('./loginSignin/logo.png');
  return (
    <div>
    <div className="container">
      <a href="#menu">
        <h1 style={{ fontSize: "100px", color: "#d4ff59" }}>GamEd. </h1>
      </a>
      <img src={logo} height="200px" alt="" />
      <div className="popover" id="menu">
        <div className="content">
          <a href="#" className="close"></a>
          <div className="nav">
            <ul className="nav_list">
              <div className="nav_list_item">
                <li>
                  <Link to="/topic" style={{ fontSize: 25 }}>Warprep</Link>
                </li>
              </div>
             
              <div className="nav_list_item">
                <li>
                <Link to="/focal" style={{ fontSize: 25 }}>Focalpoint</Link>
                  
                </li>
              </div>
              <div className="nav_list_item">
                <li>
                <Link to="/challenge" style={{ fontSize: 25 }}>Warzone</Link>
                  
                </li>
              </div>
              <div className="nav_list_item">
                <li>
                <Link to="/legends" style={{ fontSize: 25 }}>Legends</Link>
                  
                </li>
              </div>
              <div className="nav_list_item">
                <li>
                  <Link to="/login" style={{ fontSize: 25 }}>Signup/login</Link>
                
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
