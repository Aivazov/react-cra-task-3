import React, { Component } from 'react';
// import './Clock.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null; // this var needed to "Unmount" the interval function to prevent its execution when interval will be hidden

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    // clearing the react "subscription"
    // it is needed only if the component will be hidden
    // othewise, it will creates sufficient problems with the performance
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
