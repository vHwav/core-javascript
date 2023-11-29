/* ------------------- */
/* Logical Operators   */
/* ------------------- */
let age = 20;
if (age >= 14 && 90 >= age) {
  console.log('청춘입니다');
}

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);
//logical And Assignment 논리곱 할당 연산자
//a &&= b; //이 결과 값(a또는b)을 a 에 담겠다는 의미

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);
//logical or Assignment 논리합 할당 연산자
//a ||=b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

function loginFx() {
  let loginFirst = prompt("who's there?");

  let login = loginFirst === null ? null : loginFirst.toLowerCase();

  if (!loginFirst) return;

  // login?.toLowerCase = 변수 뒤에 ?가 붙으면 optional chaining으로 값이 성립하지 않으면 말고, 성립하면 진행하도록 console.error('함',함)
  //대상이 null이나 undefined 면 실행을 안해버림.

  if (login === 'admin') {
    let password = prompt('Password?');
    if (password === 'TheMaster') {
      alert('Welcome!');
    } else if (password === null || password === '') {
    } else {
      alert('Wrong password');
    }
  } else if (login === null || login.replace(/\s*/g, '') === '') {
  } else {
    alert("I don't know you");
  }
  //replace(a,b)는 a값들을 전부 b로 대체하는 것을 의미함.
}
