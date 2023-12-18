/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler

function handler() {
  console.log('클릭 발생!');
}

// first.onclick = handler;
// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick() {
  console.log('클릭했습니다');
}
// first.addEventListener('click', handleClick);

// getNode('.second').addEventListener('click', () => {
//   //   first.removeEventListener('click', handleClick);
// });

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent('first', 'click', handleClick);
// first.addEventListener('mouseenter', handleClick);
// first.addEventListener('mouseleave', handleClick);
// first.addEventListener('mousemove', handleClick);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({ offsetX: x, offsetY: y }) {
  //   const { offsetX: x, offsetY: y } = e;
  console.log(x, y);
  //   x = Math.random() * 400;
  //   y = Math.random() * 300;
  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

ground.addEventListener('click', handleClickBall);

ground.addEventListener('mounsemove', ({ offsetX: x, offsetY: y }) => {
  let template = `<div class="emoticon" style="top:${y}px; left"></div>`;
});

//몇초에 한번씩만 호출되도록, 마우스가 멈추면 호출되도록.

ground.addEventListener(
  'mousemove',
  throttle(() => {
    console.log(this);
  }, 1000)
);

let timeout;

function debounce(callback, limit) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    callback.call(this);
  }, limit);
}

debounce(() => {}, 1000);

// function debounce(callback, limit = 100) {
//   let timeout;

//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       callback.apply(this, args);
//     }, limit);
//   };
// }

// debounce(() => {}, 1000);

function func(a, b) {
  console.log('this:', this);
  console.log('A:', a);
  console.log('B:', b);
}

function throttle(callback, limit = 100) {
  let waiting = false;
  if (!waiting) {
    callback();
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
  }
}

//func.call('tiger',1,2) // call은 전달 시 낱개로
// func.apply('tiger', [1, 2]); // apply는 배열로 전달
// const a = func.bind('tiger', 1, 2); // 실행시키지 않음 - 함수 실행 안됨.
// a(); //대신 묶어서 그대로 전달시키는 역할을 함.

/*

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?


function funcA(a,b,c){
  console.log(a,b,c);
}

function funcB(a,b,c){
  this(a,b,c)
}


funcB.apply(funcA,[1,2,3])

*/
