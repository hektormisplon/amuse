import React, { Component } from 'react'
import logo from '../../assets/logo/logo.svg'
import './header.sass'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
          <img src={logo} className="header_logo"/>
          <nav className="header_nav">
            <a href="#">Lorem</a>
            <a href="#">Ipsum</a>
            <a href="#">Map</a>
            <a href="#">Settings</a>
          </nav>
      </header>
    )
  }
}
