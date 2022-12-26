





function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types"> <!-- Lista Ordenada -->
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
            </div>
        </li>

    `
}

//-- PEGOU A LISTA DE POKEMONS E POVOU NO HTML (JS PARA HTML)--

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {


    //const newList = pokemons.map(convertPokemonToLi).join('')
    //const newList = pokemons.map(convertPokemonToLi).join('')
    //const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon)) 
    //const newHtml = newList.join('')

    //pokemonList.innerHTML += newHtml
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})


/*

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {


    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })

    const newHtml = newList.join('')

    pokemonList.innerHTML += newHtml


})

*/




    // Manipular transformar lista no JS elemento/para/elemento

    //console.log(newList)

    //return pokemon.name
/*
const listItems = []



for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToLi(pokemon))
}
console.log(listItems)
pokemonList.innerHTML += convertPokemonToLi(pokemon)
*/

