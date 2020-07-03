'use strict';

// const persone = {
//     name: 'alex',
//     tel: '333000020'
// }

// console.log(JSON.stringify(persone));

//^^^ так записываютя  файлы в JSON формат, это из-за методо stringify

// const persone = {
//     name: 'alex',
//     tel: '333000020'
// }

// console.log(JSON.parse(JSON.stringify(persone)));

//^^^ так вытвскиваются из JSON, это из-за метода parse

const persone = {
    name: 'alex',
    tel: '333000020',
    parents: {
        mom: 'olga',
        dad: 'rog'
    }
}

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'ann';
console.log(persone);
console.log(clone);
