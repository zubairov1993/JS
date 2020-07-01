// Контекст вызова - это как БОМЖ, т.е. у него нет определенного места и он приписывается ко всему миру, если его поместить в специальное учереждение то он будет функционировать в нем.

'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     } 

//     console.log(sum());
// }

// showThis(4, 5);

//Если мы отключим СТРОГИЙ РЕЖИМ, то в этом случае THIS будет ссылатся на глобальный обьект WINDOW. Если включить СТРОГИЙ РЕЖИМ то THIS будет UNDEFINED.

// 1) Обычная функция: this = window, но если use strict: this = undefined
// -----------------------------
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// Если мы используем метод внутри обьекта, то контекст вызова будет указывать на этот обьект

// 2) Контекст у методов обьекта = сам обьект
//-----------------------------------

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//Если мы в методе вызовем функцию то контекст будет UNDEFINED потому что это просто вызов функции,и он уже не относится к методу он уже не метод обьекта
//---------------------

// function User(name, id) {
//     this.name = name,
//     this.id = id,
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);

//внутр функции-конструктора контекст вызова для всех методов и свойств будет только что созданный обьект, в данном случае это ivan >>> let ivan = new User('Ivan', 23);

// function User(name, id) {
//     this.name = name,
//     this.id = id,
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }
// let ivan = new User('Ivan', 23);

// даже если у нас появятся методы внутри этого прототипа, в этом методе контекст вызова все равно будет ссылатся на ivan
// 3)this в конструкторах и классах - это новый экземляр обьекта
//---------------------------------

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'jonh'
// };

// sayName.call(user);
// sayName.apply(user);
//----

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'jonh'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// Ручная привязка this: call, apply, bind



const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});
//когда обработчик событий написан класическим образом, контекст вызова будет сам элемент на котором произошло событие, как event.target