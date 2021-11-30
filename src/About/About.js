import React from 'react';
import './About.scss';

class About extends React.Component {

  render() {
    return (
      <div className="about">
        <p className="about-text">
          "Exchange Rates" is an application written in "ReactJS" using "Class" to create components, made available in "JavaScript ES6". The work of the application is to receive the exchange rate from the API service, and the ability to exchange a specific currency into the euro currency.
        </p>
        <p className="about-text">
          When the page is loaded, the application sends a request to the service for issuing a currency value, receives data on currencies, converts and displays this data on the page. Also, data on currencies is sent to the currency calculator, where the user can calculate the amount of any selected currency in euros.
        </p>
        <p className="about-text">
          Try it yourself. Enter the amount you need, select a currency from the list, and click on the button. Below you will see the result in Euro currency. The application is adapted for mobile devices.
        </p>
      </div>
    );
  }

}

export default About;
