import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import About from '../About/About';
import HeaderGeneral from '../HeaderGeneral/Header';
import FooterGeneral from '../FooterGeneral/Footer';

class App extends React.Component {
  render() {
    const blockCookie = React.createRef();

    const acceptCookie = (event) => {
      let cookie = blockCookie.current;

      if (!cookie.classList.contains('_hide')) {
        cookie.classList.add('_hide');
      }
    }

    return (
      <>
      <HeaderGeneral />
      <div className="site">
        <Header />
        <div className="main _container">
          <main>
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route exact path="/about" component={About} />
            </Switch>
          </main>
        </div>
        <div className="cookie _container" id="cookie_info" ref={blockCookie}>
          <div className="cookie-content">
            <div className="cookie-content__text">
              <p>We use cookies on our website to collect technical information.</p>
              <p>In particular, for the personalized operation of the site, we process the IP address of the region of your location.</p>
            </div>
            <div className="cookie-content__button">
                <button className="cookie-content__button_btn" onClick={acceptCookie}>OK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <FooterGeneral />
      </>
    );
  }

}

export default App;
