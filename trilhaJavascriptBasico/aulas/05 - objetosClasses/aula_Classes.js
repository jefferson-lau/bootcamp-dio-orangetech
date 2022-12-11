


//======================================================================


// const jefferson = {         //objeto
//     nome: 'jefferson',
//     idade: 32,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// const robson = {         //objeto
//     nome: 'Robson',
//     idade: 40,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

//======================================================================

//Classe é Definição
// class Pessoa {
//     nome;
//     idade;

//     descrever() {

//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }

// }

// //Instância é a ocorrência
// const robson = {         //objeto
//     nome: 'Robson',
//     idade: 40,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

//======================================================================



//Classe é Definição
// class Pessoa {
//     nome;
//     idade;

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// //Instância é a ocorrência
// // const jefferson = new Pessoa();
// // console.log(jefferson);

// //R: Objeto Pessoa não tem dados, pq não foi atribuido;

// const jefferson = new Pessoa();
// jefferson.nome = 'Jefferson';
// jefferson.idade = 32;

// const robson = new Pessoa();
// robson.nome = 'Robson';
// robson.idade = 45;

// console.log(jefferson);
// console.log(robson);




//======================================================================


//Classe é Definição
// class Pessoa {
//     nome;
//     idade;

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// //Instância é a ocorrência
// // const jefferson = new Pessoa();
// // console.log(jefferson);

// //R: Objeto Pessoa não tem dados, pq não foi atribuido;

// const jefferson = new Pessoa();
// jefferson.nome = 'Jefferson';
// jefferson.idade = 32;

// const robson = new Pessoa();
// robson.nome = 'Robson';
// robson.idade = 45;

// jefferson.descrever();
// robson.descrever();


//==========================================================================

//Constructor

// class Pessoa {
//     nome;
//     idade;

//     // constructor(){      //O QUE ACONTECE COM INSTANCIA DE UMA CLASSE
//     //     this.nome = 'teste';
//     //     this.idade = 20;
//     // }

//     constructor(nome, idade) {      //O QUE ACONTECE COM INSTANCIA DE UMA CLASSE
//         this.nome = nome;
//         this.idade = idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }


// const jefferson = new Pessoa('Jefferson', 32);
// const robson = new Pessoa('Robson', 35);


// jefferson.descrever();
// robson.descrever();


//==========================================================================


// class Pessoa {
//     nome;
//     idade;
//     anoNascimento;
//     // constructor(){      //O QUE ACONTECE COM INSTANCIA DE UMA CLASSE
//     //     this.nome = 'teste';
//     //     this.idade = 20;
//     // }

//     constructor(nome, idade) {      //O QUE ACONTECE COM INSTANCIA DE UMA CLASSE
//         this.nome = nome;
//         this.idade = idade;
//         this.anoNascimento = 2022 - idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }


// const jefferson = new Pessoa('Jefferson', 43);
// const robson = new Pessoa('Robson', 35);

// console.log(jefferson);
// console.log(robson);





//==========================================================================



class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {      //O QUE ACONTECE COM INSTANCIA DE UMA CLASSE
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) { 
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}


const jefferson = new Pessoa('Jefferson', 23);
const robson = new Pessoa('Robson', 23);

compararPessoas(jefferson, robson);




