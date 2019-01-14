import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to="/new" activeClassName="active">New</NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav;
