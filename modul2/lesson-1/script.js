const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block'); 

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));//позволяет получить класс под определенным индексом
// console.log(btns[1].classList.add('red'));//добавляет классы, можно добавлять несколько классов через запятую
// console.log(btns[0].classList.remove('blue'));//удаляет классы
// console.log(btns[0].classList.toggle('blue'));//если есть класс с таким названием то он будет убран а если его нет до добавит з0

// if(btns[1].classList.contains('red')) {
//     console.log('red')
// }

btns[0].addEventListener('click', () => {
    // if(!btns[0].classList.contains('red')) {
    //     btns[0].classList.add('red')
    // } else {
    //     btns[0].classList.remove('red')
    // }
    // btns[1].classList.toggle('red')
});

// console.log(btns[0].className);// можно так, но не нужно


// Делегирование
// wrapper.addEventListener('click', (event) => {
//     let target = event.target;
//     if(target && target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (event) => {
    let target = event.target;
    if(target && target.matches('button.red')) {
        console.log('Hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     })
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);