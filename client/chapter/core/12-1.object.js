/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

/* global isObject */ //eslint에서 주석을 인식하게 해서 isObject가 이 페이지에 없는 걸 에러 인식하지 않음

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zindex: 10000,
  top: '50%',
  left: '50%',
  width: 60,
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%,-50%',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null; //authentication: 인증의 줄임말 authorization: 허가

authUser = {
  uid: 'user-id-aszxcmklqwe!@#123',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};
// 점(.) 표기법

// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']); //get
// console.log((authUser['permission'] = 'paid')); //set

Object.prototype.SIGN = true; //오염시키고 hasOwnProperty 를 쓰려고 넣은 거.

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    // console.log(key);
    // console.log(authUser[key]);
  }
}

//객체의 key만을 모아놓은 배열
let keyList = Object.keys(authUser);
// console.log(keyList);
// 객체의 value만을 모아놓은 배열
let valueList = Object.values(authUser);
// console.log(valueList);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone = '010-0000-0000') {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}
const user = createUser('tiger', '35');
// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거(remove, value 값이 null이 되게 함) or 삭제(delete, key값과 value값을 다 사라지게 함.)

function removeProperty(object, property) {
  //   for (let key in object) {
  //     if (property == key) {
  //       return (object[property] = null); //property를 변수 선언 할 때 [] 안에 넣어야 함
  //     }
  //   }

  object[property] = null;
  return true;
}

function deleteProperty(object, key) {
  if (isObject(object)) {
    delete object[key];
  }
}

// 여기서 객체와 null, undefined를 object 와 구분하기 위해 쓰는 것이 toString
// Object.prototype.toString.call('a').slice(8,-1).toLowerCase()

// removeProperty(authUser, 'uid');
// console.log(authUser.uid);
// removeProperty(authUser, 'name'); //authUser.name = null
// deleteProperty(authUser, 'name'); // delete authUser.name

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };
// console.log(student);
// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}
//이 아래로 중요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */ //구조를 분해하고 다시 할당하는 것
/* ------------------------------------------- */
//순서를 빠꿀 수 없음, 변수 이름은 바꿀 수 있다
const arr = [10, 100, 1000, 10000];
// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];
// const a4 = arr[3];

// const [a1, a2, a3, a4] = arr;
const [a1, ...d] = arr;

// console.log(d);

for (let [key, value] of Object.entries(authUser)) {
  //   console.log(key);
}
const [first, second, third] = document.querySelectorAll('span');

const salaries = {
  김지수: 85,
  이정현: 50,
  박수양: 6,
  장효진: 33,
};
let result = 0;
for (let [key, value] of Object.entries(salaries)) {
  result += value;
}
// console.log(result);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* -------------------------------------------- */

//순서가 정해지지 않음. 변수의 이름을 변경할 수 있다

const {
  김지수: kim,
  이정현: lee,
  박수양: park,
  장효진: jang,
  이경화: le = '500',
} = salaries; //객체의 구조분해 할당은 value 값을 추가 시킬 수 있음
//또한 객체의 구조 분해시 key값을 변수로 넣어줘야 value값을 찾을 수 있음 -> key값이 불편할 경우, 리네임을 하면됨
//자바스크립트는 없는 값에 접근하면 error가 아닌 undefined를 반환함

function createUserData(obj) {
  console.log(obj);
  const { userName, age, job, gender = 'male' } = obj;
  return {
    userName,
    age,
    job,
    gender,
  };
}

const user1 = createUserData({
  userName: 'tiger',
  age: 40,
  job: 'developer',
});
