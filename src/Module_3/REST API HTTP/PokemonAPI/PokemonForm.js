import { Component } from "react";
import { ImSearch } from "react-icons/im";

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  }

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    return (
      <>
      </>
    )
  }
}