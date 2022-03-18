function criaPessoa(nome, sobrenome) {
    return { nome,sobrenome };
}
console.log(criaPessoa("José", "Henrique"))

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(3));
console.log(triplica(3));

const criaMultiplicador2 = (multiplicador) => {
    return (n) => {
        return n * multiplicador;
    }
}
const duplica2 = criaMultiplicador2(2);
const triplica2 = criaMultiplicador2(3);
console.log(duplica2(3));
console.log(triplica2(3));