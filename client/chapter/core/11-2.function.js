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
  const arr = [...arguments]; // [...] : 스프레드 신탁스 - 배열을 전개 대상으로 만듬

  //   arr.forEach((item) => (total += item));

  //forEach와 reduce 의 차이: forEach는 값을 반환하지 않음.(반복문만 돌고 끝) 때문에 forEach 앞에는 return 붙여도 나오는 게 없음
  //reduce는 값을 반환함.(아무거나 다 반환함)
  //map은 값을 반환함. 단, 배열만 반환

  arr.forEach(function (a, b, c) {
    //a는 데이터, b는 index, c는 배열 자체
    console.log(c);
  });

  //  return arr.reduce(function (acc, cur) {
  //     //acc:accumulator - 누적하다// cur:current - 현재값
  //     return acc + cur;
  //   }, 0); //0은 start 값 이게 acc 에 가면서 계산식이 시작함 {} 도 가능하며, 아무것도 안 들어갈 경우 맨 앞의 arr.reduce의 arr이 초깃값이 됨

  return arr.reduce((acc, cur) => acc + cur, 0);

  //   arr.forEach(function (item, _, array) {
  //     total += item;
  //   }); //forEach(function(element,index,array)) 비어 있는 변수의 경우 _ 로 표기함;

  // return total;
  //   return a + b + c + d + e + f + g;
};

const result = calculateTotal(1000, 2000, 3000, 4000, 1300, 4500, 35000);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {}; //이렇게 쓰면 변수 anonymousFunctioinExppression이 함수 이름이 됨
// dir(함수 이름) => 함수 정보

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {}; //이렇게 쓰면 hello로는 호출 안되고 nameFunctionExpression으로 호출이됨

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success();
  } else {
    fail();
  }
};

cb(
  true,
  function () {
    console.log('성공!');
  },
  function () {
    console.log('실패!');
  }
);

function movePage(url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail({ message: '에러입니다' });
  }
}
movePage(
  'https://.naver.com',
  function (url) {
    console.log(`${url}해당페이지로 넘어갑니다.`);
  },
  function (err) {
    console.log(err.message);
  }
);
//'www.naver.com'.match(/http.+www/) - http +.(http후의 문자들)+www 가 될 경우 옳다고 봄.
// 함수 선언문 vs. 함수 (표현)식
//location.href = url > url로의 이동

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression - 만드는 즉시 실행될 수 있는 함수의 표현식
// (function(){})() 이렇게 쓰임 등장한 이유는 var를 가둬두기 위해

let IIFE;

(function a() {
  var a = 10;
})();

const arrc = ['a', 'b', 'c'];
// const newArr = ['ax', 'b-x', 'c-x'];

// let name = [];
// arrc.forEach(function (item) {
//   name.push(item + '-x');
// });
// console.log(name);

// const name = arrc.reduce(function (acc, cur) {
//   acc.push(cur + '-x');
//   return acc;
// }, []);

// console.log(name);

const name = arrc.map(function (item) {
  return item + '-x';
});
console.log(name);
