/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {//arguments와 [...args]의 차이: arguments는 유사배열인데, [...args]는 배열이라 배열의 능력을 쓸 수 있음.
  //normal function
  //   //   console.log(rest); //일반함수와 화살표 함수의 차이: 화살표 함수는 arguments가 없음
  //   return args.reduce(function (acc, cur) {
  //     return acc + cur;
  //   }, 0); //0 입력 안하면 배열의 첫번째값이 들어감
  //arrow function

  let total = 0;
  total = args.reduce((acc, cur) => acc + cur);
  return total;
};
const result = calcAllMoney(1000, 5000, 4500, 15000);
// let calcAllMoney2 = (...args) => args.reduce((acc, cur) => acc + cur, 0);

let user = () => {
  return {
    name: 'hobby',
    age: 40,
  };
};
//객체 리턴시에는 중괄호가 있으면 함수 본문으로 인식하기 때문에
// let user = () =>({name:'hobby',age:40})
console.log(result);
// 화살표 함수와 this
// 일반 함수와 양면의 얼굴  // 생성자
// 생성자는 무겁기 때문에 arrow function으로 만들 수 없음
function Button(name) {
  this.name = name;
}
const b = new Button('tiger');
function button() {
  return { name: 'hello' };
}
const a = new button(); //함수 앞에 new를 붙이면 객체를 담을 수 있음
//이렇게 new가 붙으며 객체를 생성하는 생성자 함수는 맨 앞을 대문자(pasclacase)방식으로 표기하자
//ex) new String, new Number 등등...

//일반 함수
// - constructor 내장
// - this : 나를 호출한 대상을 this로 찾음
// 객체의 메서드로 사용이 많이 됨. =>this를 찾기 위해

//화살표 함수
// - constructor 비내장
// - this: 자체를 바인딩(가지지)않음
// - 객체 안의 메서드 안의 함수로 많이 사용됨

// this의 사용 - dom에서는 선택된 대상, 객체에서는 그 안의 형제요소

const user2 = {
  total: 0,
  name: 'hob',
  age: 13,
  address: '서울시 중랑구',
  grades: [80, 90, 100],
  //   totalGrades: function () {
  //     // this.grades.forEach((item) => {
  //     //   console.log(item);
  //     //   this.total += item;
  //     // });
  //     // return this.total;
  //     //arrow function 안의 this
  //     // console.log('일반 함수:', this); //user.totalGrades라 user로 부터 호출 됐기 때문에 this는 user가 됨
  //     // function sayHi() {
  //     //   console.log('sayHi:', this);
  //     // } //function sayHi의 this는 window 에서 가져옴.
  //     // //왜냐하면 sayHi() 함수는 호출한 대상이 없기 때문
  //     // const sayHi2 = () => {
  //     //   console.log('sayHi2:', this);
  //     // };
  //     // sayHi();
  //     // sayHi2();
  //   },
  totalGrades() {
    //consise 메서드(매서드 축약형) : arrow function에서 this를 포함한 문법 - 이 안에서 this 쓸 시에는 바로 부모의 것을 불러올 수 있음
    //다만 객체 안에서만 쓸 수 있음.
    //constructor를 내장하고 있지 않음
    this.grades.forEach((item) => (this.total += item));
    return this.total;
  },
};

const result2 = user2.totalGrades();
// console.log(result2);

const obj = {
  alert: function () {},
  alert2: () => {},
  alert3() {}, //constructor 비 내장
};
//모듈 프로그래밍 상태에서 this를 화살표함수로 찾으면 undefined가 뜸
new button();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let result = 1;
//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }
//   return result;
// };
// let powerExpression = (numeric, powerCount) =>
//   Array(powerCount)
//     .fill(null)
//     .reduce((acc) => acc * numeric, 1);
// console.log(powerExpression(2, 53));
// console.log(pow(2, 53));
// repeat(text: string, repeatCount: number): string;

let repeat = (string, num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};
let repeatPowr = (string, num) =>
  Array(num)
    .fill(null)
    .reduce((acc) => (acc += string), '');

console.log(repeatPowr('hello', 3));


//map: 배열을 받아 새로운 배열을 반환(생성)하기 위해
// filter: 배열을 받아 필터링된 값들만 배열로 반환하기 위해
// reduce:  배열을 받아 무언가의 값으로 만들기 위해
// forEach: 배열을 받아 순환하기 위해(값 반환 x)
