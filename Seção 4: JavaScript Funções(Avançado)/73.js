// 73. Funções de callback

const rand = (min = 1000, max = 3000) => {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

const f1 = (callback) => {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

const f2 = (callback) => {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

const f3 = (callback) => {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(() => {
    f2(() => {
        f3(() => {
            console.log('Olá mundo');
        });
    });
});