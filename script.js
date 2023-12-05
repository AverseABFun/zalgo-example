'use strict';
let glitches = Array.from(document.querySelectorAll('.glitchy-text'));

for (let i = 0; i < glitches.length; i++) {
  let item = glitches[i];
  function func() {
    item.innerText = zalgoRandomGeneration(
      Math.floor(Math.random() * 2) == 1
        ? item.dataset.textOne
        : item.dataset.textTwo,
      getRandomInt(9) + 1 //just so there's always some zalgo text characters
    );
    setTimeout(func, getRandomInt(1500));
  }
  setTimeout(func, getRandomInt(1500));
}
