'use strict';

const now = new Date('2020-05-01');
 new Date.parse('2020-05-01');

console.log(now.getHours(18));// Часы
console.log(now.getHours(18, 40));// Часы и минуты
console.log(now);



const now = new Date('2020-06-20');
const now = new Date(2020, 6, 20, 20);
const now = new Date(0);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset());
console.log(now.getTime());


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
 let end = new Date();

 alert(`Цикл отработал ${end - start} миллисекунд `);