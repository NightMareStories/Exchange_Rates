import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import About from '../About/About';
import '../ComponentsReset.scss';
import '../Components.scss';
import GeneralHeader from '../GeneralHeader/Header';
import GeneralFooter from '../GeneralFooter/Footer';

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
        <GeneralHeader />
        <div className="site">
          <Header />
          <div className="main _container">
            <main>
              <Routes>
                <Route exact="true" path="/" element={<Rate />} />
                <Route exact="true" path="/about" element={<About />} />
              </Routes>
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
        <GeneralFooter />
      </>
    );
  }

}

export default App;
