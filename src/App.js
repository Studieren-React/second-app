import "./App.css";

import { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    isCalculating: false,
    time: 1000,
    item: 'count'
  };

  componentDidMount() {
    this.setState({ count: this.getCount() });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { count } = this.state;
    this.saveCount(count);
  }

  componentWillUnmount() {
    this.stopCounter(this.interval);
  }

  start = () => {
    const { time, isCalculating } = this.state;

    if (!isCalculating) {
      this.interval = setInterval(() => {
        this.setState({ count: this.state.count + 1 })
      }, time);
    } else {
      this.stopCounter(this.interval);
    }

    this.setState({ isCalculating: !this.state.isCalculating });
  };

  reset = () => {
    this.stopCounter(this.interval);
    this.setState({ count: 0, isCalculating: false });
  };

  stopCounter = (interval) => {
    clearInterval(interval);
  }

  getCount = () => {
    const count = window.localStorage.getItem(this.state.item);

    if (count) {
      return Number(count);
    }
  }

  saveCount = (count) => {
    window.localStorage.setItem(this.state.item, count);
  }

  render() {
    const { isCalculating, count } = this.state;

    return (
      <div className="App">
        <h2 className="Title">react timer</h2>
        <div className="Counter">Current state: {count}</div>
        <div className="Wrapper">
          <button
              className="Button"
              onClick={this.start}
          >
            {isCalculating ? 'stop' : 'start'}
          </button>
          <button
              className="Button"
              onClick={this.reset}
          >
            reset
          </button>
        </div>
      </div>
    );
  }
}
