const PokemonModel = require("./PokemonModel");

describe("PokemonModel", () => {
    it("sets the pokemon name when setPokemonName is called", () => {
        const pokemonModel = new PokemonModel(); 
        
        pokemonModel.setPokemonName("Pokemon");
        expect(pokemonModel.pokemonName).toEqual("Pokemon");
    });

    it("set the image source when setImgSource is called", () => { 
        const pokemonModel = new PokemonModel(); 

        pokemonModel.setImgSource("url");
        expect(pokemonModel.imgSource).toEqual("url");
    });
    
    it("returns the pokemon name when getPokemonName is called", () => {
      const pokemonModel = new PokemonModel();

      pokemonModel.setPokemonName("Pokemon");
      const name = pokemonModel.getPokemonName();
      expect(name).toEqual("Pokemon");
    })

    it("returns the image source when getImgSource is called", () => { 
        const pokemonModel = new PokemonModel(); 

        pokemonModel.setImgSource("url");
        const imgSource = pokemonModel.getImgSource();
        expect(imgSource).toEqual("url");
    });
})