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
    this.getState = this.getRate();
  }

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
}

export default Rate;
