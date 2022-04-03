// 74. Funções imediatas (IIFE)

const sobrenome = 'Henrique';

((sobrenome) => {
    const nome = 'José';
    console.log(nome + ' ' + sobrenome);
})(sobrenome);

console.log(sobrenome);