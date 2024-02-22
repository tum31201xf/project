import React from "react";
import './css/navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="header">
            <h1 className="imglogo" src="#">Logo</h1>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/Search">Search</Link>
                </div>
        </div>

            
    );
  }
  
  export default Navbar;
  