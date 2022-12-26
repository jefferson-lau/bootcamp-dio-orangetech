
//FUNCAO QUE CONSOME ABSTRAI DO HTTP GET
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // const offset = 0
    // const limit = 10
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        //.then((pokemons) => pokemons.url) 
        //.then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).json()))
        .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url)
                                                        .then((response) => response.json())))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => {
            debugger
            console.log(pokemonDetails)
        })
        //.catch((error) => console.error(error))
}

Promise.all([ //PROMESSAS 
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    console.error(results)
})

