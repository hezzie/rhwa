import React from "react";
import {  Link } from "react-router-dom";

const Nav = props => {
  return (
    <div className="left-top">
      <div><Link to="/">Current day</Link></div>
      <div><Link to="/1">second day</Link></div>
      <div><Link to="/2">Third day</Link></div>
      <div><Link to="/3">Fourth day</Link></div>
      <div><Link to="/4">Fifth day</Link></div>
    </div>
  );
};

export default Nav;
