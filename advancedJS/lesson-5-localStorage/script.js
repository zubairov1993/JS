'use strict';

// // что-бы записать новый ключ 

// localStorage.setItem('number', 5);

// // что-бы получать данные из localStorage

// localStorage.getItem('number')
// console.log(localStorage.getItem('number'));

// //что-бы удалить какой либо ключ

// localStorage.removeItem('number')

// //что-бы отчистить хранилище

// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
      localStorage.removeItem('bg');
      form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  }
});

const persone = {
  name: 'Alex',
  age: 25
};

// const serializedPersone = JSON.stringify(persone);
// localStorage.setItem('alex', serializedPersone);

// console.log(JSON.parse(localStorage.getItem('alex')));
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));