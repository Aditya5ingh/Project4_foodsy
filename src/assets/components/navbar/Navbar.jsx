import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="logo">
          <h1>
            F<span>oo</span>dy Z<span>o</span>ne
          </h1>
        </div>
        <div className="menu">
          <div className="menuContainer">
            <a href="">
              <button>All </button>
            </a>
            <a href="">
              <button>Breakfast</button>
            </a>
            <a href="">
              <button>Lunch</button>
            </a>
            <a href="">
              <button>Dinner</button>
            </a>
          </div>
        </div>
        <div className="menuSearch">
          <input type="text" placeholder="Search Food..." />
        </div>
      </div>
    </div>
  );
}
