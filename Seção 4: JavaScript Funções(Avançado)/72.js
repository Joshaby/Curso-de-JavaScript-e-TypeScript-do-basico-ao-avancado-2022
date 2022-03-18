function retornaFuncao(nome) {
    return function(nome) {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);
console.log(funcao('José'));