/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  //   console.log(arguments);
  let total = 0;
  //for 문
  //   for (let i = 0; i < arguments.length; i++) {
  //     total += arguments[i];
  //   }

  //for of문
  //   for (let value of arguments) {
  //     total += value;
  //   }

  //   배열의 메서드 forEach, reduce

  //빌려쓰기
  //   Array.prototype.forEach.call(arguments, function (item) {
  //     total += item;
  //   });

  // arguments의 (태생)부모 자체를 배열로 바꿔 버리면?
  arguments.__proto__ = Array.prototype; //__proto__는 arguments의 태생을 뜻함. 함수 내에서 바꿔주는 것은 위험하지 않음

  console.log(arguments);

  //진짜 배열 만들기
  //   const arr = Array.prototype.slice.call(arguments);
  //   const arr = Array.from(arguments);
  const arr = [...arguments]; // [...] : 스프레드 신탁스 배열을 전개 대상으로 만듬

  //   arr.forEach((item) => (total += item));

  total = arr.reduce(function (acc, cur) {
    //acc:accumulator - 누적하다// cur:current - 현재값
    return acc + cur;
  }, 0); //0은 start 값 이게 acc 에 가면서 계산식이 시작함

  //   arr.forEach(function (item, _, array) {
  //     total += item;
  //   }); //forEach(function(element,index,array)) 비어 있는 변수의 경우 _ 로 표기함;

  return total;
  //   return a + b + c + d + e + f + g;
};

const result = calculateTotal(1000, 2000, 3000, 4000, 1300, 4500, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
