


//Quiz 1
/* class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));
*/



//Quiz 2

/* const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);
*/


//Quiz 3

/*class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
*/

//Quiz 4

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever();




