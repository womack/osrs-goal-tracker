import React, {Component} from 'react';
import TBOW from "./images/tbow.svg";
import {getMoney, addMoney} from "./util/api.js";
import './App.css';

class App extends Component {

  state = {
    money: 0,
    tbow: 1200000000
  }

  componentDidMount() {
    getMoney().then(data => {
      this.setState({
        money: data.money.value
      }, () => {
        setTimeout(this.updateBar, 1000)
      })
    })
  }

  updateBar = () => {
    const percentage = ((this.state.money / this.state.tbow) * 100);
    var bar = document
      .getElementById('tbow')
      .ldBar;
    bar.set(percentage);
  }

  updateMoney = (newValue) => () => {
    addMoney(newValue).then(data => {
      this.setState({
        money: data.money.value
      }, this.updateBar)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="display">

          <div className="goal">GOAL : {this
              .state
              .tbow
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div
            id="tbow"
            className="ldBar label-center"
            data-type="fill"
            data-value="0"
            data-stroke-trail="gray"
            data-stroke-trail-width="10"
            data-stroke-width="5"
            data-img={TBOW}></div>
          <div className="currentMoney">CURRENT GP : {this
              .state
              .money
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </div>

        <div className="controls">
          <button onClick={this.updateMoney(1000000)}>+1m</button>
          <button onClick={this.updateMoney(5000000)}>+5m</button>
          <button onClick={this.updateMoney(10000000)}>+10m</button>
          <button onClick={this.updateMoney(50000000)}>+50m</button>
          <button onClick={this.updateMoney(-1000000)}>-1m</button>
          <button onClick={this.updateMoney(-5000000)}>-5m</button>
          <button onClick={this.updateMoney(-10000000)}>-10m</button>
          <button onClick={this.updateMoney(-50000000)}>-50m</button>

        </div>
      </div>

    );
  }
}

export default App;
