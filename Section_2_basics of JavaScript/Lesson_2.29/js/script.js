'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// box.style.cssText = "background-color: blue; width: 500px";

// btns[1].style.borderRadius = "100%";
// circles[1].style.backgroundColor = "red";

// for(let i = 0; i < hearts.length; i++){
//   hearts[i].style.backgroundColo r = "green";
// }

// hearts.forEach(element => {
//   element.style.backgroundColor = "green";
// });

const div = document.createElement('div');
const text = document.createTextNode("Тут был я.");

div.classList.add("black");

//document.body.append(div);
//wrapper.appendChild(div);

wrapper.append(div);
//wrapper.prepend(div);

// wrapper.insertBefore(div, hearts[0]);

//hearts[0].before(div);
//hearts[0].after(div);

//circles[0].remove();
// wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");