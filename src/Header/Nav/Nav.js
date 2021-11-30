import React from 'react';
import './Nav.scss';

import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="header-nav">
        <div className="nav-block _container">
          <nav className="nav-block__content nav-links">
            <ul className="nav-links__links">
              <li><Link to="/" className="nav-links__links_link">Main</Link></li>
              <li><Link to="/About" className="nav-links__links_link">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

}

export default Nav;
