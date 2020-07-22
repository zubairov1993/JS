'use strict';

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function() {
//     console.log(`Username: ${this.name}, age: ${userAge}`);
//   };

//   this.getAge = function() {
//     return userAge;
//   };

//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение!');
//     }
//   }
// }

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  
  #surname = 'eeeee';

  say = () => {
    console.log(`Username: ${this.name}${this.#surname}, age: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
  }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
ivan.say();