import React from 'react';
import './Calc.scss';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]) })
  }

  render() {
    return (
      <div className="calculator">
        <h3 className="calculator-title">Currency exchange calculator in EUR</h3>
        <div className="calculator-block">
          <div className="calculator-block__wish">I want:</div>
          <div className="calculator-block__form">
            <form onSubmit={this.calcRate} className="calculator-form">
              <input type="number" defaultValue="150" placeholder="Enter your value" name="count-currency" className="calculator-form__input" />
              <select name="type-currency" id="" className="calculator-form__select">
                {Object.keys(this.props.rate).map((keyName, i) =>
                (
                  <option key={keyName} value={keyName} className="calculator-form__option">{keyName}</option>
                )
                )}
              </select>
              <input type="submit" value="calculate" className="calculator-form__submit _btn" />
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

}

export default Calc;
