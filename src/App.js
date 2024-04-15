import "./App.css";

import { Component } from "react";

const Title = {
  margin: "0 20px",
};

export default class App extends Component {
  state = {
    count: 0,
    isLoading: false,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <button className="Button" onClick={this.incrementCount}>
          Increment Count +
        </button>
        <div style={Title}>Current state: {this.state.count}</div>
        <button className="Button" onClick={this.decrementCount}>
          Decrement Count -
        </button>
      </div>
    );
  }
}
