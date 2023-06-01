class PokemonView {
    constructor(pokemonModel, pokemonClient) {
        this.model = pokemonModel;
        this.client = pokemonClient;
    }

    loadPokemon() {
        return this.client.fetchPokemonData("https://pokeapi.co/api/v2/pokemon/ditto", (data) => {
            /*{
                    name: ""
                    imgSource: ""
                }
            */
            this.model.setPokemonName(data.name);
            this.model.setImgSource(data.imgSource);
            console.log(this.model);
            this.displayPokemon();
        });
    }

    /*(url, callback) => {
            return Promise.resolve(callback(mockData));
         })
         */

    displayPokemon() {

    }

}

module.exports = PokemonView;
