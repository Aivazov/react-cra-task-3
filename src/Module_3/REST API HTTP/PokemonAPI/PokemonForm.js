import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      alert('Please enter a pokemon name');
      return;
    }
    console.log(this.state.pokemonName);
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch />
          </button>
        </form>
      </>
    );
  }
}
