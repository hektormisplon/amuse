import React, { Component } from 'react';
import logo from '../../assets/logo/logo.svg';
import './header.sass';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="/">
          <img src={logo} alt="logo" className="header_logo" />
        </a>
        <nav className="header_nav">
          <a href="/news" className="header_nav-link">
            News
          </a>
          <a href="/map" className="header_nav-link">
            Musea
          </a>
          <a href="/about" className="header_nav-link">
            About
          </a>
          <a href="/login" className="header_nav-link">
            Sign In
          </a>
        </nav>
      </header>
    );
  }
}
