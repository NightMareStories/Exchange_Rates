# Привет!
&nbsp;

---
## Это приложение написано на ReactJS. Чтобы протестировать его работу вам потребуется:
### **1. `Cначала вам нужно установить `"[NodeJS](https://nodejs.org/)"` на ваш компьютер. Для того чтобы проверить его наличие на вашем "ПК", введите команду в терминале:`**

```
node --version 
```

```
npm --version
```

### `Если команды работают и выводят версии, то "Node" и "NPM" у вас уже установленны;`
### **2. `Установить все зависимости командой "npm i" в терминале:`
&nbsp; 

```
npm i
```
&nbsp;

### **3. `После установки всех необходимых модулей можно запускать приложение командой "npm start":`
&nbsp;

```
npm start
```
&nbsp;
## **Теперь за работу!**
---
&nbsp;

# 1. Введение
&nbsp;

---
### "Exchange Rates" - это приложение написанное на "ReactJS" с использованием классов ("Class") для создания компонентов ставшее доступным в "JavaScript ES6". Работа приложения заключается в получении курса валют с сервиса API, и  возможности обменять конкретную валюту в валюту евро. При загрузке страницы, приложение посылает запрос на сервис по выдаче валютного значения, получает данные по валютам, преобразует и выводит эти данные на страницу. Также данные по валютам отправляются в калькулятор валют, где пользователь может посчитать сумму любой выбранной валюты в евро. Попробуйте сами. Введите нужное вам сумму, выберите валюту из списка, и нажмите на кнопку. Внизу вы увидите результат в валюте евро. Приложение адаптировано под мобильные устройства.
---
&nbsp;

# 2. Ознакомление
&nbsp;

---
### Сначала ознакомимся со структурой приложения. По умолчанию при создании приложения в папке "public" лежат служебные файлы: "manifest.json", "robots.txt" и "favicon.ico".В ней также находится: сама страница "index.html" - в которую будет рендерится всё приложение; и папка "img" - содержащая картинку логотипа. Точкой входа в приложение по умолчанию является файл "index.js" он находится в папке "src". Там же лежит и файл стилизации "index.scss" - содержащий миксины для работы со шрифтами приложения. Файл "reportWebVitals" - оставлен по умолчанию при создании приложения. Файл "vars.scss" - содержит переменные со шрифтами приложения и мпортируется во все стили компонентов. Хочу отметить, что в данном приложении я использовал классы ("Class") в ES 6, а не функциональное создание компонентов с использованием хуков, но для лучшего понимания с этого момента я буду называть классы компонентами. В папке "App" содержится компонент "App.js" и файл "App.scss" - содержащий  основные стили приложения. В "App.js" импортируются все компоненты приложения. В папке "Rate" расположены: компонент "Rate.js" - работа которого заключается в том, чтобы получать с сервиса нужные валюты и выводить их курс на страницу; и "Rate.scss" -  стили для этого компонента. В папке "Calc" находится: компонент "Calc.js" - выполняющий работу по обмену валюты; и его стили "Calc.scss". В папке "About" расположен компонент "About.js" и его стили "About.scss". В нем содержится описание приложения. В папке "Header" находятся: компонент "Header.js" - содержащий заголовок страницы; его стили "Header.scss"; и папку "Nav" - содержащую навигацию страницы. В папке "Nav" содержатся: компонент "Nav.js" - внутри которого прописана навигация страниц; и его стили "Nav.scss". В папке "Footer" находятся: компонент "Footer" - содержащий подвал страницы; и его стили "Footer.scss". В папке "fonts" находятся все шрифты используемые в приложении. Папки "HeaderGeneral" и "FooterGeneral" - имеют свои собственные стили и компоненты, содержат общие заголовок и подвал для всех приложений, но не являются их частью.
---
&nbsp;

# 3. Обзор
&nbsp;

---
### Теперь когда мы разобрались что где находится, перейдем к подробному обзору кода приложения "Exchange Rates". Точка входа "index.js" - содержит импорты: модуль "React"; модуль "ReactDom"; "BrowserRouter" - для работы роутинга; "index.scss" - содержащий миксины для работы со шрифтами; компонент "App" - куда будут подключаться все компоненты приложения; "reportWebVitals" - оставлен по умолчанию при создании приложения.

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

### В index.js происходит рендеринг компонента "App" на страницу в блок "root", сам компонент "App" оборачивается в  "Router" для дальнейшей работы приложения в SPA.
---
&nbsp;

---
### Компонент "App" - содержит все компоненты приложения, роутинг навигацию, и вспомогательный блок с "cookie" - уведомлением. Импорты компонента "App" следующие: модуль "React"; "Switch" и "Route" из модуля "react-router-dom" - необходимые для работы навигации по странице; "App.scss" - содержащий основные и общие стили; компоненты "Header", "Footer", "Rate", "About" и общие для всех приложений компоненты "HeaderGeneral" и "FooterGeneral".

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

### Так как приложение было написано с применением "классов" а не функционального подхода с применением хуков, то синтаксис будет следующий: в начале создается класс "App" на основе "React" - комонента; в рендере находятся константа и функция для отображения/скрытия блока "cookie" - уведомления; в return рендерится все компоненты и блок с "cookie". Блок "main" содержит роутинг между двумя страницами приложения ("Rate", "About") и в зависимости от "path" рендерит один из компонентов. Блок с "cookie" - имеет "ref" и содержит на кнопке событие клик с функцией "acceptCookie". Данная функция получает элемент со страницы с помощью рефа "blockCookie" и делает проверку на отсутсвие класса "_hide" у элемента, в случае успеха, класс "_hide" добавляется блоку "cookie" тем самым скрывая его со страницы.
---
&nbsp;

---
### Работа компонента "Rate" заключается в получении данных о валютах с сервиса api, преобразовании этих данных и вывода их на страницу. Первым делом в компонент "Rate" импортируются: модуль "React"; стили для компонента "Rate"; компонент "Calc" - содержащий в себе калькулятор для подсчета необходимого количества выбранной валюты в евро. Для работы нам потребуется функция с "fetch" - запросом на сервис курса валют и так как нам нужно получать и выводить данные при загрузке страницы, то нам пригодится "constructor" объявленый внутри класса. Итак, создаем класс на основе компонента React.

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

### Внутри класса объявляем "constructor". Внутри конструктора обязательно наследуемся используя "super()". Далее нам понадобятся стейты в которые мы будем записывать готовые данные и выводить на страницу, а также отправлять в компонент "Calc" для подсчета значения выбранной валюты. Стейт "date" - будет выводить на страницу дату последнего обновления курса валют. Стэйт "currencyRate" - будет содержать полученный с сервиса коофициент конкретной валюты. После объявления стэйтов нам пригодится массив с названиями валют, назовем его "currency". И напоследок вызовем внутри конструктора функцию "getRate", она будет выполняться при загрузке страницы.
---
&nbsp;

---
### Теперь рассмотрим эту самую функцию "getRate". В стрелочной функции "getRate" в начале отправляется "fetch" - запрос на сервис с курсом валют, затем указывается promise "then" для получения данных.

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

### Полученные данные ("data") преобразуются в объект ("data.json()"). Далее указывается повторный "then", где стейту "date" присваивается, из объекта "data", значение "date" (дата обновления курса валют). Объект "data" содержит внутри себя объект "rates" в котором лежит большое количество разных валют. Нам же нужно взять лишь некоторые из них, именно для этого и нужен ранее объявленный массив "currency". Осталось только сделать перебор этого массива и создать готовый объект "result" в котором в качестве ключа будет выступать название валюты, а в качестве значения - коофициент этой валюты. Теперь когда у нас есть готовый объект "result" с данными нужных нам валют, можно присваивать в стейт "currencyRate" объект "result".
---
&nbsp;

---
### Стэйт "currencyRate" мы будем выводить на страницу через перебор массива.

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

### Получив ключи через "Object.keys()" мы теперь можем перебрать массив методом "map()" и вывести в необходимые элементы нужные данные, а именно: название валюты ("keyName") и её значение ("currencyRate[keyName]"), с помощью метода "toFixed(2)" обрезаем цифры после дроби до двух. Ниже блока вывода валюты, импортируется компонент "Calc" с передачей в него стэйта "currencyRate".
---
&nbsp;

---
### Компонент "Calc" принимает стэйт "currencyRate" в качестве пропса "rate" и выводит в список формы названия валют. Также с помощью функции он обменивает количество выбранной валюты в евро.

### В начале импортируется: модуль React и стили для компонента "Calc". На основе компонента React создается класс, внутри прописывается конструктор.

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

### Конструктор нам понадобится для работы со стейтом "result" - в который мы будем записывать результат подсчета валюты в евро и для работы с пропсом "rate" - в котором лежит объект с валютами и их значениями.
---
&nbsp;

---
### Далее нам понадобится преобразовать пропс "rate" в стэйт, для дальнейшей работы с ним.

```

static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
}

```

### Для этого прописываем статичный метод "getDerivedStateFromProps(props, state)", а внутри возвращаем объект, в котором указываем в качестве ключа название стейта, а в качестве значения указываем пропс "rate".
---
&nbsp;

---
### Функция "calcRate" вешается на блок с формой через событие "onSubmit" и при нажатии на кнопку в форме, будет запускаться функция.

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

### В форме находится поле для ввода нужного значения ("input") и поле для выбора валюты ("select"). В поле выбора валюты при рендеринге осуществляется перебор пропса "rate" и вывод в "option" названия валют.
---
&nbsp;

---
### При отправке формы нажатием кнопки, функция "calcRate": отменяет событие по дефолту; в переменную "elements" получает все элементы формы; в переменную "countCurrency" ,по имени "count-currency", получает введеное в "input" значение; в переменную "typeCurrency", по имени "type-currency", получает значение выбранное в "select"; через селектор "setState" записывает в стэйт "result" выражение: значение из "input" поделить на значение из стэйта "rate", которое равно значению выбранной вылюты в "select".

```

calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]) })
}

```

### Стэйт "result" выводится на страницу в блоке под формой, значение обрезается до двух чисел после точки методом "toFixed(2)".
---
&nbsp;

---
### На этом работа приложения заканчивается, и осталось разобрать вспомогательные компоненты программы.

### В компонент "Header" импортируются: модуль React; стили для компонента; а также компонент "Nav" - содержащий навигацию по приложению.

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

### В самом компоненте находится заголовок с названием приложения.
---
&nbsp;

---
### В компоненте "Nav" импортируются: модуль React; стили компонента; а также "Link" из модуля "react-router-dom" - для ассинхронного перехода между страницами приложения.

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

### Сам компонент содержит ссылки на страницы приложения.
---
&nbsp;

---
### В компоненте "Footer" импортируются: модуль React и стили для компонента.

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

### Он содержит информацию по копирайту с названием приложения.
---
&nbsp;

---
### В компоненте "About" импортируются: модуль React и стили компонента.

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

### Он содержит краткую информацию о приложении.
---
&nbsp;

---
### Компоненты "HeaderGeneral" и "FooterGeneral" не будем рассматривать, так как частью приложения они не являются, а лишь несут в себе общую обертку для всех приложений.
---
&nbsp;

# 4. Заключение
&nbsp;

---
### В создании этого приложения, я не столкнулся с какими - либо трудностями или непониманием какого-то конкретного процесса работы. Единственным исключением можно назвать применение классов ("Class") в "JavaScript ES6". Так как вначале я писал приложения на функциональном подходе с применением хуков ("hooks"), то тут, используя классы мне пришлось привыкать к новому синтаксису и использовать новые методы для работы с компонентами. Но это скорее дело привычки, чем какие-то сложности. Могу сказать что, мне понравилось и было интересно работать над данным приложением, и применять новые возможности "JavaScript ES6" в работе с компонентами React.
---
&nbsp;

# ___Спасибо за уделенное время!___ 
