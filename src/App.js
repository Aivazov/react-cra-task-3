// import logo from './logo.svg';
import { Component } from 'react';
import { ImSpinner } from 'react-icons/im';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Lecture_1 from './Module_3/Module 3 Lecture 1/Lecture_1';
import Modal from './Module_3/Module 3 Lecture 1/Modal';
import Clock from './Module_3/Module 3 Lecture 1/Clock';
import Tabs from './Module_3/Module 3 Lecture 1/Tabs';
import JSONtabs from './Module_3/Module 3 Lecture 1/Tabs.json';
import Reader from './Module_3/Module 3 Lecture Lifecycle 2/Reader/Reader';
import ReaderJSON from './Module_3/Module 3 Lecture Lifecycle 2/Reader/reader.json';
import PokemonInfo from './Module_3/REST API HTTP/PokemonAPI/PokemonInfo';
import PokemonForm from './Module_3/REST API HTTP/PokemonAPI/PokemonForm';
// import PokemonData from "./Module_3/REST API HTTP/PokemonAPI/PokemonData.json";
import { MaterialsFormEditor } from './Module_3/REST API HTTP/REST API Using mockAPI/MaterialsFormEditor';
import { Materials } from './Module_3/REST API HTTP/REST API Using mockAPI/Materials/Materials';
import * as API from './Module_3/REST API HTTP/REST API Using mockAPI/services/api';
import './help styles/SpinnerStyles.css';
import ImageFinderApp from './Module_3/ImageFinder/ImageFinderApp';

class App extends Component {
  state = {
    name: 'asdfas',
    text: '',
    showModal: false,
    pokemonName: '',
    materials: [],
    isLoading: false,
  };

  // "Lifestyle components" always stay under the "state"

  async componentDidMount() {
    // console.log('Did Mount');

    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
    }
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

  handlePokemonSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };

  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  removeMaterial = async (id) => {
    try {
      await API.removeMaterial(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // console.log(this.state);
    const { name, text, showModal, isLoading, materials } = this.state;
    console.log(materials);

    return (
      <div className="App">
        {/* ********************MODULE_3******************** */}
        {/* <Reader items={ReaderJSON}/> */}
        {/* <Tabs items={JSONtabs} /> */}
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
        {/* <Clock /> */}
        {/* <form onSubmit={this.addElement}>
          <label>
            <input type="text" onChange={this.controledSubmit} />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form> */}
        {/* <Lecture_1 state={this.state} method={this.usingElement} /> */}
        {/* ***POKEMON API*** */}
        {/* <ToastContainer autoClose={3000} />{' '} */}
        {/* this is a notiflix alternative */}
        {/* <PokemonForm onSubmit={this.handlePokemonSubmit} /> */}
        {/* <PokemonInfo pokemonName={this.state.pokemonName} /> */}
        {/* <MaterialsFormEditor
          onSubmit={this.addMaterial}
          isSubmitting={isLoading}
        />
        {isLoading && (
          <div>
            <ImSpinner size="32" className="icon-spin" />
            <p>Adding element...</p>
          </div>
        )}
        <Materials
          listItems={materials}
          onDelete={this.removeMaterial}
          onUpdate={this.updateMaterial}
        /> */}
        <ImageFinderApp />
      </div>
    );
  }
}

export default App;
