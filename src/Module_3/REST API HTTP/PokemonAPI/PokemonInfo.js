import { Component } from 'react';

// const POKE_API = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`;
// `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    // const POKE_API_JSON = this.props.items;
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    //     // fetch(POKE_API_JSON)
    //     .then((res) => res.json())
    //     .then((pokemon) => {
    //       console.log(pokemon);
    //       this.setState({ pokemon });
    //     })
    //     .finally(this.setState({ loading: false }));
    // }, 500);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.pokemonName !== this.props.pokemonName) {
      console.log('The pokemon name was changed');

      this.setState({ loading: true, pokemon: null });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(
                `We do not have a Pokemon with name "${this.props.pokemonName}"`
              )
            );
          })
          .then((pokemon) => {
            console.log(pokemon);
            this.setState({ pokemon });
          })
          .catch((error) => this.setState({ error }))
          .finally(this.setState({ loading: false, error: null }));
      }, 500);
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    // console.log(POKE_API_JSON);
    return (
      <div>
        {error && <p>{error.message}</p>}
        {loading && <p>Loading your Pokemon. Please wait...</p>}
        {pokemon && (
          <div>
            <p>Name: {pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
            <p>Base experience: {pokemon.base_experience}</p>
            <p>This is a prop: {this.props.pokemonName}</p>
          </div>
        )}
      </div>
    );
  }
}
