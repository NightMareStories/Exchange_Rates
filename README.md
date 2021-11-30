# Hello!
&nbsp;

---
## This app is written in ReactJS. To test it, you need to install all dependencies with the "npm i" command in the terminal.
&nbsp; 

```

npm i

```
&nbsp;

### After installing all the necessary modules, you can start the application with the "npm start" command.
&nbsp;

```

npm start

```
&nbsp;
## **Now get to work!**
---
&nbsp;

# 1. Introduction
&nbsp;

---
### "Exchange Rates" is an application written in "ReactJS" using "Class" to create components, made available in "JavaScript ES6". The work of the application is to receive the exchange rate from the API service, and the ability to exchange a specific currency into the euro currency. When the page is loaded, the application sends a request to the service for issuing a currency value, receives data on currencies, converts and displays this data on the page. Also, data on currencies is sent to the currency calculator, where the user can calculate the amount of any selected currency in euros. Try it yourself. Enter the amount you need, select a currency from the list, and click on the button. Below you will see the result in Euro currency. The application is adapted for mobile devices. 
---
&nbsp;

# 2. Familiarization
&nbsp;

---
### First, let's take a look at the structure of the application. By default, when creating an application, the "public" folder contains service files: "manifest.json", "robots.txt" and "favicon.ico". It also contains: the "index.html" page itself - into which the entire application will be rendered; and the "img" folder - containing the logo image. The default entry point to the application is the "index.js" file located in the "src" folder. There is also the "index.scss" styling file, which contains mixins for working with application fonts. File "reportWebVitals" - left by default when creating the application. File "vars.scss" - contains variables with application fonts and is exported to all component styles. I want to point out that in this application I used classes ("Class") in ES 6, not functional creation of components using hooks, but for better understanding from now on I will refer to classes as components. The App folder contains the App.js component and the App.scss file that contains the main styles for the application. All components of the application are imported into "App.js". The "Rate" folder contains: the "Rate.js" component - whose job is to receive the required currencies from the service and display their rate on the page; and "Rate.scss" are the styles for this component. The folder "Calc" contains: component "Calc.js" - performing work on currency exchange; and its styles "Calc.scss". The About folder contains the About.js component and its About.scss styles. It contains a description of the application. The "Header" folder contains: the "Header.js" component - containing the page header; its styles are "Header.scss"; and the "Nav" folder - containing the page navigation. The "Nav" folder contains: the "Nav.js" component - within which the page navigation is registered; and its styles "Nav.scss". The "Footer" folder contains: the "Footer" component - containing the page footer; and its styles "Footer.scss". The "fonts" folder contains all the fonts used in the application. Folders "HeaderGeneral" and "FooterGeneral" - have their own styles and components, contain a common header and footer for all applications, but are not part of them. 
---
&nbsp;

# 3. Overview
&nbsp;

---
### Now that we have figured out what is where, let's move on to a detailed look at the code for the "Exchange Rates" application. The entry point "index.js" - contains imports: the "React" module; the "ReactDom" module; "BrowserRouter" - for routing; "index.scss" - containing mixins for working with fonts; "App" component - where all application components will be connected; "reportWebVitals" - left by default when creating an application.

```

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router><App /></Router>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### In index.js, the "App" component is rendered onto the page in the "root" block, the "App" component itself is wrapped in the "Router" for further application work in the SPA.
---
&nbsp;

---
### Component "App" - contains all the components of the application, routing navigation, and an auxiliary block with a "cookie" - notification. The imports of the App component are as follows: the React module; "Switch" and "Route" from the "react-router-dom" module - necessary for page navigation to work; "App.scss" - containing basic and general styles; the "Header", "Footer", "Rate", "About" components and the "HeaderGeneral" and "FooterGeneral" components common to all applications.

```

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

```

### Since the application was written using "classes" and not a functional approach using hooks, the syntax is as follows: first, an "App" class is created based on the "React" component; the render contains a constant and a function for displaying/hiding the "cookie" block - notifications; in return, all the components and the cookie block are rendered. The "main" block contains routing between two application pages ("Rate", "About") and, depending on the "path", renders one of the components. The block with "cookie" - has a "ref" and contains a click event on the button with the "acceptCookie" function. This function receives an element from the page using the "blockCookie" ref and checks for the absence of the "_hide" class on the element; if successful, the "_hide" class is added to the "cookie" block, thereby hiding it from the page.
---
&nbsp;

---
### The work of the "Rate" component is to receive data about currencies from the api service, transform this data and display it on the page. First of all, the "Rate" component is imported: the "React" module; styles for the "Rate" component; component "Calc" - containing a calculator for calculating the required amount of the selected currency in euros. To work, we need a function with a "fetch" - a request for the service of the exchange rate, and since we need to receive and display data when the page is loaded, the "constructor" declared inside the class will come in handy. So, let's create a class based on the React component.

```

import React from 'react';
import './Rate.scss';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
    this.getRate();
  }
 render() {
    return (

    );
  }

}

export default Rate;

```

### We declare "constructor" inside the class. Inside the constructor, we must inherit using "super()". Next, we need states in which we will write ready-made data and display it on the page, as well as send it to the "Calc" component to calculate the value of the selected currency. State "date" - will display the date of the last update of the exchange rate on the page. State "currencyRate" - will contain the rate of a specific currency received from the service. After the states are declared, we need an array with the names of currencies, let's call it "currency". And finally, let's call the "getRate" function inside the constructor, it will be executed when the page is loaded.
---
&nbsp;

---
### Now let's look at this very function "getRate". In the "getRate" arrow function, at the beginning, a "fetch" is sent - a request for a service with the exchange rate, then a "then" promise is specified to get the data.

```

getRate = () => {
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=97a3a9a0208b90896597ebcaf20c03e3')
      .then(data => {
        return data.json();
      })
      .then(data => {

        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result })
      });
  }

```

### The received data ("data") is converted to an object ("data.json()"). Further, a repeated "then" is indicated, where the "date" state is assigned, from the "data" object, the "date" value (the date of the exchange rate update). The "data" object contains the "rates" object, which contains a large number of different currencies. We need to take only a few of them, and this is exactly what the previously declared "currency" array is needed for. It remains only to iterate over this array and create a ready-made object "result" in which the name of the currency will act as a key, and the coefficient of this currency as a value. Now that we have a ready-made "result" object with the data of the currencies we need, we can assign the "result" object to the "currencyRate" state.
---
&nbsp;

---
### We will display the "currencyRate" state on the page by iterating over the array.

```

 render() {
    return (
      <div className="rate">
        <h3 className="rate-title">Exchange rate for {this.state.date}</h3>
        <div className="rate-block">
          {Object.keys(this.state.currencyRate).map((keyName, i) =>
          (
            <div className="rate-block__column rate-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
              <p>*Сan be bought for 1 EUR</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }

```

### Having received the keys through "Object.keys()", we can now iterate over the array using the "map()" method and display the necessary data in the necessary elements, namely: the name of the currency ("keyname") and its value ("currencyRate [keyName]"), using the "toFixed(2)" method we trim the digits after the fraction to two. Below the currency output block, the "Calc" component is imported with the "currencyRate" state passed to it.
---
&nbsp;

---
### The "Calc" component takes the "currencyRate" state as a "rate" props and displays the names of the currencies in the form list. It also uses the function to exchange the amount of the selected currency in euros.

### First imported: the React module and styles for the "Calc" component. A class is created based on the React component, and a constructor is written inside.

```

import React from 'react';
import './Calc.scss';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }
  render() {
    return (
    );
  }

}

export default Calc;

```

### We will need a constructor to work with the "result" state - in which we will write the result of calculating the currency in euros and to work with the "rate" props - in which there is an object with currencies and their values.
---
&nbsp;

---
### Next, we need to convert the "rate" props to a state for further work with it.

```

static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
}

```

### To do this, we write the static method "getDerivedStateFromProps (props, state)", and inside we return an object in which we specify the name of the state as a key, and specify the props "rate" as a value.
---
&nbsp;

---
### The "calcRate" function is hung on the block with the form through the "onSubmit" event, and when the button is clicked in the form, the function will be launched.

```

render() {
    return (
      <div className="calculator">
        <h3 className="calculator-title">Currency exchange calculator in EUR</h3>
        <div className="calculator-block">
          <div className="calculator-block__wish">I want:</div>
          <div className="calculator-block__form">
            <form onSubmit={this.calcRate} className="calculator-form">
              <input type="number" defaultValue="150" placeholder="Enter your value" name="count-currency" className="calculator-form__input"/>
              <select name="type-currency" id="" className="calculator-form__select">
                {Object.keys(this.props.rate).map((keyName, i) =>
                (
                  <option key={keyName} value={keyName} className="calculator-form__option">{keyName}</option>
                )
                )}
              </select>
              <input type="submit" value="calculate" className="calculator-form__submit _btn"/>
            </form>
          </div>
          <div className="calculator-block__result result-block">
            <h4 className="result-block__title">Result:</h4>
            <ul className="result-block__result">
              <li className="result-block__result_currency">EUR {this.state.result.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div >
    );
  }

```

### The form contains a field for entering the desired value ("input") and a field for choosing a currency ("select"). In the currency selection field, during rendering, the "rate" props are iterated over and the names of the currencies are displayed in the "option".
---
&nbsp;

---
### When the form is submitted by pressing a button, the "calcRate" function: cancels the event by default; gets all the elements of the form into the variable "elements"; in the "countCurrency" variable named "count-currency" gets the value entered in "input"; into the variable "typeCurrency", named "type-currency", gets the value selected in "select"; through the "setState" selector writes to the "result" state an expression: divide the value from "input" by the value from the "rate" state, which is equal to the value of the selected currency in "select".

```

calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]) })
}

```

### The state "result" is displayed on the page in a block under the form, the value is truncated to two numbers after the dot using the "toFixed (2)" method.
---
&nbsp;

---
### This completes the work of the application, and it remains to disassemble the auxiliary components of the program.

### The "Header" component is imported: the React module; styles for the component; as well as the "Nav" component - containing navigation through the application.

```

import React from 'react';
import './Header.scss';

import Nav from './Nav/Nav'

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

```

### The component itself contains a header with the name of the application.
---
&nbsp;

---
### The "Nav" component imports: the React module; component styles; and also "Link" from the "react-router-dom" module - for asynchronous transition between application pages.

```

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

```

### The component itself contains links to application pages.
---
&nbsp;

---
### The component "Footer" imports: the React module and styles for the component.

```

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

```

### It contains copyright information with the name of the application.
---
&nbsp;

---
### The component "About" imports: the React module and component styles.

```

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

```

### It contains brief information about the application.
---
&nbsp;

---
### We will not consider the "HeaderGeneral" and "FooterGeneral" components, since they are not part of the application, but only carry a common wrapper for all applications. 
---
&nbsp;

# 4. Conclusion
&nbsp;

---
### In creating this application, I did not encounter any difficulties or misunderstanding of any particular work process. The only exception is the use of classes ("Class") in "JavaScript ES6". Since at the beginning I wrote applications on a functional approach using "hooks", then using classes I had to get used to the new syntax and use new methods for working with components. But this is more a matter of habit than some difficulty. I can say that I liked and it was interesting to work on this application, and to apply the new features of "JavaScript ES6" in working with React components.
---
&nbsp;

# ___Thank you for your time!___ 