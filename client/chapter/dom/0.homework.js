//querySelector

const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

function timer() {}
setTimeout(timer, 3000);
let isOpend = false;
function handleMenu(e) {
  e.preventDefault();
  //   console.log(e);
  //   console.log('open!');

  //메뉴에게 is-active 클래스를 넣어준다
  //   menu.classList.toggle('is-active');
  //menu.classList.remove('is-active')

  if (!isOpend) {
    menu.classList.add('is-active');
  } else {
    menu.classList.remove('is-active');
  }
  isOpend = !isOpend;
}

button.addEventListener('click', handleMenu); //click이벤트를 시행하면 객체를 넣지 않았어도, 객체가 떨어짐

//eventListener 이벤트 핸들러 -> click:객체, scroll:객체

//classList

//preventDefault
