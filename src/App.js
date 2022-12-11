// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Lecture_1 from './Lecture 1/Lecture_1';

class App extends Component {
  state = {
    name: 'asdfas',
    text: '',
  };

  addElement = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      text: e.currentTarget.value,
    }));
  };

  controledSubmit = (e) => {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  usingElement = () => {
    this.setState((prev) => ({ name: prev.name + 1 }));
  };

  componentDidMount() {
    console.log('Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');

    if (this.state !== prevState.state) {
      console.log('state object has been updated');
    }

    //lets add our state Obj to the local storage

    localStorage.setItem('state', JSON.stringify(this.state.name));
  }

  compoe;

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <form onSubmit={this.addElement}>
          <label>
            <input type="text" onChange={this.controledSubmit} />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <Lecture_1 state={this.state} method={this.usingElement} />
      </div>
    );
  }
}

export default App;
