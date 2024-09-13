import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/add">Add Item</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
            <span style={{paddingLeft:"15px"}}></span>
            <NavLink to="/drinks">Drinks</NavLink>
            <span style={{paddingLeft:"15px"}}></span>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
