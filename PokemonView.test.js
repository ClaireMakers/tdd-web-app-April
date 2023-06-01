const PokemonView = require("./PokemonView");
const PokemonClient = require("./PokemonClient");
const PokemonModel = require("./PokemonModel");



describe("PokemonView tests", () => {
    it("loads data from the API and populates the model with it", () => {
        
        const pokemonModelDouble = {
            setPokemonName: () => {
            pokemonModelDouble.pokemonName = "pokemonName"
          },
            setImgSource: () => {
              pokemonModelDouble.imgSource = "imgSource"
          }
        };

        const mockPokemonClient = {
            fetchPokemonData: jest.fn()
        }

        const mockData = {
          name: "name",
          imgSource: "imgSource"
        };


         mockPokemonClient.fetchPokemonData.mockImplementationOnce((url, callback) => {
            return Promise.resolve(callback(mockData));
         })

         const pokemonView = new PokemonView(
           pokemonModelDouble,
           mockPokemonClient
         );

        pokemonView.loadPokemon().then(() => {
             
         });
    }); 

   

    it("displays the image and the name of the pokemon on the page", () => {

    })
})