

function convertPokemonTypesToLi(pokemonTypes) {
   /* return pokemonTypes.map((type)  => {
        return `
        <li class="type">Grass</li>
        `
    })*/
    return pokemonTypes.map((typeSlot)  => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types"> <!-- Lista Ordenada -->
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>
                
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

//-- PEGOU A LISTA DE POKEMONS E POVOU NO HTML (JS PARA HTML)--

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    //const newHtml = pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
    //pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
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

