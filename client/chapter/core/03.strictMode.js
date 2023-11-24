/* ---------------------------------------- */
/* Strict Mode                              */
/* ---------------------------------------- */

// 엄격 모드를 사용한 코드와 그렇지 않은 코드를 비교해봅니다.

'use strict';

// #1
const jujeob =
  '심선범 넌 뭐랄까.. 마치 베를린 같아. 왜냐하면 치명적인 독일 수도.';
console.log(jujeob);

// #2
console.log(this);
//use strict 모드에서는 전역에 대고 this를 송출 했을 때, undefined가 나와야함.

var gVar = 10;

let b = 10;
