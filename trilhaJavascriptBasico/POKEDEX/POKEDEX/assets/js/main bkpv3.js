
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/*
fetch(url)  
    .then((response) => response.json())            //VERSAO REDUZIDA DA FUNCAO
    .then((jsonBody) => console.log(jsonBody))      //VERSAO REDUZIDA DA FUNCAO
    .catch((error) => console.error(error))         //VERSAO REDUZIDA DA FUNCAO
*/
//===================================================

//DEBUGGAR
/*
fetch(url)  
    .then((response) => response.json())           
    .then((jsonBody) => {  
        debugger            //QUANDO EXECUTAR O JS ELE PARA O BREAKPOINT NO DEBUGGER
        console.log(jsonBody)
    })
    .catch((error) =>    console.error(error))        
*/
//===================================================
//PARTE 1
/*
fetch(url)  
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)          
    .then((pokemonList) => {  
        debugger            //QUANDO EXECUTAR O JS ELE PARA O BREAKPOINT NO DEBUGGER
        console.log(pokemonList)
    })
    .catch((error) =>    console.error(error)) 
*/

//===================================================
//PARTE 2

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

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(convertPokemonToLi(pokemon))
        }
    })
    .catch((error) => console.error(error)) 