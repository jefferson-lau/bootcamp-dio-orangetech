/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.


Você terá 3 variáveis. Sendo elas:

    - 1 Preço do combustível;
    - 2 Gasto médio de combustível do carro por KM;
    - 3 Distancia em KM da viagem;
*/


const precoCombustivel = 5.79;
//precoCombustivel
const kmPorLitros = 9;
//Consumo KM por Litro
const distanciaEmKM = 100;
//distanciaEmKM

const litrosConsumidos = distanciaEmKM/kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(litrosConsumidos);
console.log(valorGasto.toFixed(2));

