// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Lecture_1 from './Lecture 1/Lecture_1';

class App extends Component {
  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate() {
    console.log('didUpdate');
  }

  render() {
    return (
      <div className="App">
        <Lecture_1 />
      </div>
    );
  }
}

export default App;
