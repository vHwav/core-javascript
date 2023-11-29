/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇번 반복하시겠습니까?', 0);

// do {
//   console.log(repeat);
//   if (repeat < 0) {
//     console.log('최초실행');
//     break;
//   }
//   repeat--;
// } while (repeat);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// let h = 0;
// do {
//   if (h >= 10) {
//     console.log('실행 끝');
//     break;
//   }
//   console.log(++h);
// } while (repeat--);

let first = document.querySelector('.first'); //querySelector에 css 의 선택자를 다 쓸 수 있음.
let second = document.querySelector('.second'); //querySelector에 css 의 선택자를 다 쓸 수 있음.
//querySelector만 했을 때는 가장 처음의 요소를 가져오나,
//querySelectorAll을 쓰면 전체를 가져옴.

// console.log(first.nextSibling.nextSibling);
//nextSibling은 가장 작은 단위(node)부터 찾음. 즉, .first > .second까지 가는 공백이 #text로 표현됨.
//주석을 넣으면 공백이 나옴.

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);

// function next(node) {

//   do {
//     node = node.nextSibling;
//   } while (node.nodeType !== 1);

//   return node;
// }

// const second = next(first);
// const third = next(second);

//prev(second)

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

const previous = prev(second);

first.nextElementSibling; // first 다음 처음 오는 element 를 찾음.