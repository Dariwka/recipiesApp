import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/addrecipe">Add Recipe</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
