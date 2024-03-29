import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">NetFlex</a>
        <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto text-right">
            <li className="nav-item">
              <NavLink to="/films" className="nav-link" activeClassName="active" > Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favoris" className="nav-link" activeClassName="active"> Favoris </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}