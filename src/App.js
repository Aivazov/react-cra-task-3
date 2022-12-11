// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Lecture_1 from './Lecture 1/Lecture_1';

class App extends Component {
  state = {
    element: 'asdfas',
  };

  usingElement = () => {
    this.setState(prev => ({element: prev.element + 1}));
  }

  componentDidMount() {
    console.log('Did Mount');
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');

    if (this.state !== prevState.state) {
      console.log('state object has been updated')
    }
  };

  compoe

  render() {
    return (
      <div className="App">
        <Lecture_1 state={this.state} method={this.usingElement} />
      </div>
    );
  }
}

export default App;
