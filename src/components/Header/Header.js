import React from 'react';
import './Header.scss';

import Nav from './Nav/Nav';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="main-header">
          <div className="header-content _container">
            <h1 className="header-content__title">Exchange Rates</h1>
          </div>
        </div>
        <Nav />
      </header>

    );
  }

}

export default Header;
