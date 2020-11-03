import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/get-to-know-me">Get To Know Me</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </div>
    );
  }
}

export default NavBar;
