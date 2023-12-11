/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) => Array.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalisArray(array) {
  //   return Array.isArray(array)

  Object.prototype.toString.call(array).slice(8, -1).toLowerCase() === 'array';
}
// isArray([]);

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdk131',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 52,
    imageSrc: 'Asxkf23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzokske13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 24,
    imageSrc: 'aabaq13',
  },
];

/* 요소 순환 ---------------------------- */

// forEach - 반환 값이 없음

arr.forEach((item, index) => {});
for (let i = 0; i < arr.length; i = i + 1) {
  //   console.log(arr[i], i);
}

// people.forEach((item) => console.log(item.job));

const span = document.querySelectorAll('span');

// span.forEach((item) => {
//   item.addEventListener('click', () => {
//     console.log('clicked');
//   });
// });
span.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});
//여러 항목들에 이벤트 바인딩이 효과적인가? -NO!
//위의 방식은 이벤트를 갯수대로 생성하게 됨
// > 해결하는 방법: 이벤트 위임 event delegation(부모요소에 이벤트를 주는 방법)

// span.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log(e);
//   });
// }); // ??????

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

// const reverseArray = arr.reverse();
const reverseArray = arr.toReversed();
console.log(reverseArray);

// console.log(arr.splice(1, 2));
console.log(arr.toSpliced(1, 2));

const a = arr.toSorted((a, b) => {
  return b - a;
});

console.log(a);
console.log(arr);

/* 새로운 배열 반환 ------------------------ */

//배열 복사하는 법..

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const card = people.map((item, index) => {
  return /*html*/ `<div class="userCard">
      <div class="imageField">
       
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>`;
});

// card.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });
const newAge = people.map((item) => item.age - 2);
console.log(newAge);
/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find - 단일대상(빠름)

const find = people.find((item) => item.name === '송현규');
const findage = people.find((item) => item.age < 30);
const findIndex = people.findIndex((item) => item.age < 30);
console.log(findIndex);

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter - 맞는 대상 전부
const filter = people.filter((item) => item.age < 30);
console.log(filter);
/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// const totalAge = people.reduce((acc, cur) => {
//   return acc + cur.age;
// }, 0);
// console.log(totalAge);
// const template = people.reduce(
//   (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
//   ''
// );
// console.log(template);
// document.body.insertAdjacentElement('beforeend', template);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */
const str = '종명 예진 현주 지인 훈 은원';
// split
const stringToArray = str.split(' ');
console.log(stringToArray);
// join
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
