class PokemonClient {

    /*
(data) => {
            this.model.setPokemonName(data.name);
            this.model.setImgSource(data.imgSource);
        }
        */

    fetchPokemonData(url, callback) {
        return fetch(url)
            .then((response) => {
                return response.json();
            }).then((data) => {

                const pokemonObject = {
                    name: data.name,
                    imgSource: data.sprites.front_shiny
                }
                callback(pokemonObject);
        })
    }

}

module.exports = PokemonClient;