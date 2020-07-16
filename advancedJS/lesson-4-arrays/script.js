'use strict';

//filter - возвращает новый массив

// const names = ['ivan', 'vanya', 'vano', 'vini', 'ivanesens'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map - позволяет взять исходный массив и изменить каждый элем. внутри него соответственно на выходе получается новый массив

// const answers = ['insS', 'DDDf', 'sssaA'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

//some  берет массив и преребирает его, и если хотя бы один элемент по какому либо условию, то в таком случае он вернет true, т.е. возвращет булиновое значение
//every - тоже самое что и some, но вернет true только если все элементы будут соответствовать условию


// const some = [4, 'dsd', 'awdaaw'];

// console.log(some.some(item => typeof(item) === 'number'));//true
// console.log(some.every(item => typeof(item) === 'number'));//false

//reduce - собирает массив воедино

// const arr = [4, 5, 1, 3, 2, 6];
//                          0   4
//                          4   5
//                          9   1
//                          10  3
//                          13  2
//                          15  6
//                          21
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal', 
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArr);