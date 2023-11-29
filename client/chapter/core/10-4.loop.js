/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};
//객체에서 내가 원하는 값이 있어? - in문을 사용하면 됨
//in 문은 안에 포함되어 있는지 알아볼 수 있음

Object.prototype.nickName = 'tiger';

const key = 'creator';

// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));
console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
console.log({}.hasOwnProperty.call(javaScript, key));
//Object = ({}) 임으로 줄여쓰는 것이 가능
//call을 쓰면, 그 능력을 빌려 쓸 수 있음

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
    //[]에 key를 넣으면 value 값을 받음 ex)console.log(javaScript[key])
  }
}

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(key);
}
//for...in은 객체를 순환하는 용도로 사용.
//for...in은 객체에만 쓰는 것이 좋음. (배열에 쓸 시 순서를 보장하기 어려움,성능도 안좋음)

const obj = {};

obj.nickName = 'tiger';
Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true, //true여야만 덮어쓰기가 가능.
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true, //지우거나, 지우지 않거나.
  },
});
//Object.freeze 를 주면 객체 자체를 얼리는 것도 가능

console.log(Array.prototype.forEach.call('안녕', () => {} ));
