// 75. Funções fábrica (Factory Functions)

const criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está falando ${assunto}`;
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
    }
};

const p1 = criaPessoa('José', 'Henrique');
console.log(p1);
console.log(p1.fala('que Linux é melhor do que Windows'));
console.log(p1.nomeCompleto);
p1.nome = 'José1';
console.log(p1);