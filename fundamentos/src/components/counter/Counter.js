import "./counter.css";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: this.props.inicialNumber || 0,
    step: this.props.step || 1,
  };

  increase = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };

  decrease = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (event) => {
    let value = event.target.value;
    this.setState({
      step: parseInt(value),
    });
  };

  render() {
    return (
      <div className="counter">
        <h2>Contador</h2>
        <h3 className="counter-display">{this.state.number}</h3>
        <label htmlFor="step">Valor de Contagem</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.setStep}
          name="step"
        ></input>
        <div className="buttons">
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
