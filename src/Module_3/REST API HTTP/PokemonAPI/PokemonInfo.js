import { Component } from 'react';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/ditto';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidMount() {
    const POKE_API_JSON = this.props.items;

    this.setState({ loading: true });
    setTimeout(() => {
      fetch(POKE_API)
        // fetch(POKE_API_JSON)
        .then((res) => res.json())
        .then((pokemon) => {
          console.log(pokemon);
          this.setState({ pokemon });
        })
        .finally(this.setState({ loading: false }));
    }, 500);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.pokemonInfo !== this.props.pokemonInfo) {
      console.log('The pokemon name was changed')
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    // console.log(POKE_API_JSON);
    return (
      <div>
        {loading && <p>Loading your Pokemon. Please wait...</p>}
        {pokemon && (
          <div>
            <p>Name: {pokemon.name}</p>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="240"
              height="240"
            />
            <p>Base experience: {pokemon.base_experience}</p>
          </div>
        )}
      </div>
    );
  }
}
