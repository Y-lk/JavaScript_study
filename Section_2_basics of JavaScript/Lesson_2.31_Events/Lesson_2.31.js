"Use strict";

const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");

// btn.onclick = function(){
//   alert("Click!");
// };

// btn.addEventListener("click", () =>{      // Вот назначаются события. Современная версия. 
//   alert("Click!");                        
// });

// btn.addEventListener("click", () =>{      // Можно назначать на одно действие несколько  
//   alert("Second Click!");                 // событий.
// });

btn.addEventListener("mouseenter", () =>{      
  console.log("Hover.");                 
});

/*
Иногда нам нужно получать данные о том элементе, с которым мы взаимодейсвуем.
Например: что за событие сейчас произошло или что за элемент используется.
Для этого есть специальный объект события, который называется "event". Называть его можно как угодно, но обычно
называют "event" или "e".
Он передаётся как аргумент в call back функцию и всегда идёт первым.
*/
// btn.addEventListener("click", (e) =>{
//   console.log(e.target);
//   e.target.remove();        
// });

//
// let i = 0;
// const deleteElement = (e) =>{
//   console.log(e.target);
  
//   i++;
//   if (i==3){
//     btn.removeEventListener("click",deleteElement);
//   }
// };

// btn.addEventListener("click",deleteElement);

const deleteElement = (e) =>{
  console.log(e.target);
  console.log(e.type);
};

// btn.addEventListener("click",deleteElement);
// overlay.addEventListener("click",deleteElement);
/*
Для того, чтобы отменить стандартное действие браузера, мы используем функцию preventDefault(). 
Её мы помещаем в самое начало обработчика.
*/
const link = document.querySelector("a");

link.addEventListener("click", event => {
  event.preventDefault();
  console.log(event.target);
});

/*
Вешаем обработчики событий сразу на несколько кнопок.
*/

const btns = document.querySelectorAll("button");

btns.forEach(btn1 => {
  btn1.addEventListener("click",deleteElement, {once: true});
});