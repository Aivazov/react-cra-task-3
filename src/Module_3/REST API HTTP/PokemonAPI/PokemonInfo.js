import { Component } from 'react';

// const POKE_API = `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`;
// `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
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

      this.setState({loading: true})

      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
      .then((res) => res.json())
      .then(pokemon => {
        console.log(pokemon);
        this.setState({pokemon})
      })
      .finally(this.setState({loading: false})
      );
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
