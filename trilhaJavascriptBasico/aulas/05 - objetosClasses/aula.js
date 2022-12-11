


// const nome = 'jefferson'; "Variavel Fixa"

//======================================================================

// const jefferson = {         //objeto
//     nome: 'jefferson',
//     idade: 32
// }

// console.log(jefferson.nome);
// console.log(jefferson.idade);
// console.log(jefferson);

//======================================================================

// const jefferson = {         //objeto
//     nome: 'jefferson',
//     idade: 32
// }
// jefferson.altura = 1.72;
// delete jefferson.nome;

// console.log(jefferson);


//======================================================================


// const pessoa = {         //objeto
//     nome: 'jefferson',
//     idade: 32,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };


// pessoa.descrever();

//======================================================================

// const pessoa = {         //objeto
//     nome: 'jefferson',
//     idade: 32,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// pessoa.nome = 'Robson';
// pessoa.idade = 40;

// pessoa.descrever();

//======================================================================

// const pessoa = {         //objeto
//     nome: 'jefferson',
//     idade: 32,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };


// pessoa.descrever = function (){
//     console.log(`Meu nome é ${this.nome}`);

// }

// pessoa.descrever();

//======================================================================

const pessoa = {         //objeto
    nome: 'jefferson',
    idade: 32,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


// const atributo = 'idade';       //Acessando os valores através de um atributo

// console.log(pessoa[atributo]);  //Acessando através de uma sintase mais dinamica 
// console.log(pessoa['nome']);    // Notaçao de coleção

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';

pessoa.descrever();
