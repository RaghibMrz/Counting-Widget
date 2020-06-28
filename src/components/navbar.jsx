import React, { Component } from "react";

const Navbar = ({ counterCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Counter Widget
        <span className="badge badge-pill badge-primary m-2">
          {counterCount}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
