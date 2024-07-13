const elements = document.querySelectorAll(".element");

var ballon = document.querySelector(".ballon");

let count = 1;
setInterval(() => {
  count++;
  let currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  if (count > elements.length) {
    elements[0].classList.add("current");
    count = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);

setInterval(() => {
  ballon.classList.add("ballon-position");
}, 5);
