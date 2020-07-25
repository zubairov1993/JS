'use strict';

// try {
// console.log('Normal');  
// console.log(a);
// console.log('result');
// } catch(error) {
// // console.log(error);
// console.log(error.name);
// console.log(error.massage);
// console.log(error.stack);
// } finally {

// }

// console.log('Still normal');

try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  })
} catch(e) {
  console.log(e);
}
console.log('normal');
