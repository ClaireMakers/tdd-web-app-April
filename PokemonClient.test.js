const PokemonClient = require("./PokemonClient");

describe("PokemonClient tests", () => {
    test("when a fetch request is made correctly to the server, it sends back a 200 status and the relevant data for my application", () => {
        const pokemonClient = new PokemonClient();

        //need to make sure a promise is returned
        //formatting the data into a useful object

        const url = "https://pokeapi.co/api/v2/pokemon/ditto";

        return pokemonClient.fetchPokemonData(url, (data) => {
            expect(data).toBeTruthy();
        })
    })

    test("when the fetchPokemonData function is called, it returns data in the correct format", () => {
        const pokemonClient = new PokemonClient();

        //need to make sure a promise is returned
        //formatting the data into a useful object

        const url = "https://pokeapi.co/api/v2/pokemon/ditto";

        return pokemonClient.fetchPokemonData(url, (data) => {
          expect(data).toEqual({
            name: "ditto",
            imgSource:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
          });
        });
    });
})