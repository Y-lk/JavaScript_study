"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0)); // item позволяет нам получить класс, который располагается под определённым индексом.

// console.log(btns[1].classList.add('red')); // Позволяет добавлять классы в свойства. Можно добавлять несколько классов.
// console.log(btns[0].classList.remove('blue')); // Позволяет удалять классы из свойств.
// console.log(btns[0].classList.toggle('blue')); // Добавляет класс, если его нет и удаляет этот класс, если он есть.

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else{
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) =>{
    if (event.target && event.target.tagName == "BUTTON"){
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);