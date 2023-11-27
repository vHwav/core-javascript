/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);
// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const str = new String('hi'); //string constructor

console.log(str);

const double = 'hello'; //string literal
const single = 'hello'; //string literal
const backtick = `hello ${10 + 30}`; //string literal - 식만 줄 수 있고, 문은 올 수 없음(값을 반환하지 않기 때문에).

console.log(typeof backtick);
// 4. 정수, 부동 소수점 숫자(길이 제약)

const num = new Number(13);
console.log(num);

const integer = 150;
const floatingPointNumber = 10.123;

console.log(typeof null);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigNumber = 123n;
console.log(typeof bigNumber);
// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(typeof isActive);
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const object = new Object({ name: 'seonbeom' });
console.log(object);

const obj = { name: 'tiger' };
console.log(typeof obj);
// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uuid');
const unique2 = Symbol('uuid');
// 이렇게 내용물이 같더라도 Symbol로 사용될 경우 다른 객체로 인지함.
// unique 와 unique2는 다름.

console.log(unique); //symbol은 정말 unique한 값을 줄 때 사용함(어느 곳에도 사용되어선 안됨)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'tiger', //객체는 키와 value가 하나의 쌍을 이뤄야 함.
  age: '25',
  sayHi: function () {
    console.log('hello~');
  },
  alert1: function () {}, // normal function
  alert2() {}, // 위와 똑같은 역할을 하는 methods - consise method
  alert3: () => {}, // arrow function
};
user.sayHi();

console.log(user); //앞선 것들과 다르게 object는 entity를 담을 수 있음.

// Array

const newArray = new Array([1, 2, 3]);

const arr = [10, 100, 1000, 1, 2, 3]; //배열은 항상 0부터 세기 시작.

Array(10); //비어있는 배열 10개가 생성됨.
Array(10).fill(null); //null로 차있는 배열 10개가 생김

// function

//함수 vs 클래스 = 붕어빵틀
function 붕어빵틀(재료) {
  //parameter 매개변수 인자
  return `냠냠 ${재료}붕어빵`;
}
const a = 붕어빵틀('팥'); //argument 인수
// 붕어빵틀('슈크림');
// 붕어빵틀('와사비');
// 붕어빵틀('피자');
console.log(a); //함수는 무조건 undefined만 반환함

// this
