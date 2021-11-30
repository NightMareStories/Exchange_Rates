import React from 'react';
import './Footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer" className="footer">
          <div className="footer-block">
              <div className="footer-block__content block-copyrights">
                <h1 className="footer-title">2021 &copy; ReactJS. Exchange Rates.</h1>
                <p> All Rights Reserved</p>
              </div>
            </div>
      </footer>
    );
  }

}

export default Footer;
