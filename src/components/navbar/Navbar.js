import React, { Component } from 'react';
import '../navbar/navbar.css';
import Materialize from 'materialize-css';

class Navbar extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    Materialize.AutoInit();
}

  render() {
    return(
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Menu Item One</a></li>
          <li><a href="#!">Menu Item Two</a></li>
          {/* <li className="divider"></li> */}
          <li><a href="#!">Menu Item Three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left">Pelodata</a>
            <ul>
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons">dehaze</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
  )
  }
}

export default Navbar;