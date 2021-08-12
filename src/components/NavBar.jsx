import React, { useState } from "react";

export default function NavBar() {
  return (
    <div id="app">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="../../public/index.html">
          BestInSlot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="../../public/index.html">
                Team Compositions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../public/index.html">
                Item Combinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../../public/index.html">
                About
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}
