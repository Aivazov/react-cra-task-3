// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Lecture_1 from './Module 3 Lecture 1/Lecture_1';
import Modal from './Module 3 Lecture 1/Modal';
import Clock from './Module 3 Lecture 1/Clock';
import Tabs from './Module 3 Lecture 1/Tabs';
import JSONtabs from './Module 3 Lecture 1/Tabs.json';

class App extends Component {
  state = {
    name: 'asdfas',
    text: '',
    showModal: false,
  };

  // "Lifestyle components" always stay under the "state"

  componentDidMount() {
    // console.log('Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('didUpdate');

    if (this.state !== prevState.state) {
      // console.log('state object has been updated');
    }

    //lets add our state Obj to the local storage

    localStorage.setItem('state', JSON.stringify(this.state.name));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  closeModal = () => {
    // using this button unnecessary because of the toggleModal public method
    // just use the toggleModal
    // if (this.showModal === true) {
    this.setState((prev) => {
      return { showModal: false };
    });
    // console.log(this.state.showModal);
    // } else {
    //   console.log(this.state.showModal);
    // }
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

  render() {
    // console.log(this.state);
    const { name, text, showModal } = this.state;

    return (
      <div className="App">
        <Tabs items={JSONtabs} />
        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}
        {/* we can render something just write the markup between the Modal Component */}
        {/* but for the rendering the inner content you should to write "this.props.children" in the Modal__content Div */}
        {/* {showModal && (
          <Modal onCloseModal={this.closeModal}>
            <h1>Hi there</h1>
            <p>Lorem ipsum dolor</p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal Window
            </button>
          </Modal>
        )} */}
        <Clock />
        {/* <form onSubmit={this.addElement}>
          <label>
            <input type="text" onChange={this.controledSubmit} />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form> */}
        {/* <Lecture_1 state={this.state} method={this.usingElement} /> */}
      </div>
    );
  }
}

export default App;
