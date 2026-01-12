import React from "react";
import "./Style.css";


const Nav = () => {
  return (
 
<nav className="navbar">
      <div className="logo">
        <img
          src="/saving-plan.png"
          alt="Logo"
        />
        <span>Smart Saving Planner</span>
      </div>

      <div className="hamburger" >
      </div>

      <ul>
        <li><a href="#" className="login-btn">Login</a></li>
      </ul>
    </nav>



  
  );
};

export default Nav;
