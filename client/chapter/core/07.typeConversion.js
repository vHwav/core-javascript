/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
let weekend;

console.log(days + ''); //null
console.log(weekend + ''); //undefined

// boolean
let isClicked = false;
console.log(days + '');
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //undefined는 NaN이 뜸

// null
let money = null;
console.log(Number(money)); //null은 0이 뜸

// boolean
let cutie = true;
console.log(Number(cutie)); // true는 1이 뜸

// string
let num = '250';
console.log(Number(num));
console.log(+'250');
console.log('250' * 1);
console.log('250' / 1);
//+, *1, /1

// numeric string
const width = '105.3px';
console.log(Number(width)); //NaN이 뜸 이것을 변화시키기 위해 원하는 value값만 뺄 수 있는 함수가 있음
//parseInt
console.log(parseInt(width, 10)); //105 뒤에 붙는 10은 10진수라는 의미. parseInt는 윈도우에서 제공하는 함수(methods중 하나)로 Int가 정수라는 의미를 갖고 console.error('있음',있음
//2~36진수 중 하나이기 때문에 진수 값을 명시해주는 것이 좋음

//parseFloat
console.log(parseFloat(width)); // 105.3 - 소숫점까지 나오며, 진수 표시의 필요가 없음.

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); //undefined는 false
console.log(Boolean(' ')); // 빈칸은 true
console.log(Boolean(0)); // 숫자 0은 false
console.log(Boolean('0')); // 문자 0은 true

const value = prompt('값을 입력해주세요'); //이렇게 하면 0을 입력시 문자형으로 true가 됨
const value2 = +prompt('값을 입력해주세요'); //이렇게 하면 0을 입력시 숫자형으로 false가 됨
console.log(typeof value);
