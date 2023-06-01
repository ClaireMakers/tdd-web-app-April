class PokemonModel {
  constructor() {
    this.pokemonName = "";
    this.imgSource = "";
  }

  getPokemonName() {
    return this.pokemonName;
  }

  getImgSource() {
    return this.imgSource;
  }

  setPokemonName(name) {
    this.pokemonName = name;
  }

    setImgSource(url) {
        this.imgSource = url;
  }
    
}

module.exports = PokemonModel;
