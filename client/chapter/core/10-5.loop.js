/* --------------- */
/* For Of Loop     */
/* --------------- */
//enumerable: 열거 가능한
//iterable: 반복 가능한

//반복 가능한 요소들은 for ... of 로 순환이 가능하다

//string, Array

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
  //[Symbol.iterator]{...} 라는 것이 포함되어 있으면 iterable 한 요소로 판단함.
  //이걸 메소드로 넣으면 iterable 한 요소로 작동도 함.
};

//arrayLike: 유사배열, 배열과 굉장히 비슷하지만 배열이 아닌 것들
//document.querySelectorAll('span'); > NodeList(3) [span.first, span.second, span.third] 이나 배열이 아닌 nodelist임

const str = '유사배열입니다';

for (let value of str) {
  //   console.log(value);
}

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

for (let value of languages) {
  let name = value.name;
  //console.table(value);//consoel. table, warning,erro, log 이렇게 다양함
  if (name.includes('Java') && name.length < 5) continue;

  //   console.table(value);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// console.log(randomUser);

// 객체의 키, 값 순환
// - for ~ in 문

Object.prototype.nickName = 'tiger';

// 객체의 키, 값 순환
// - for ~ in 문

// 재귀 함수

// for (let key in randomUser) {
//   if (Object.prototype.hasOwnProperty.call(randomUser, key)) {
//     const L1 = randomUser[key];
//     console.log('\tL1 : ', L1);
//     if (typeof L1 === 'object') {
//       for (let key in L1) {
//         if (Object.prototype.hasOwnProperty.call(L1, key)) {
//           const L2 = L1[key];
//           console.log('\t\tL2 : ', L2);
//           if (typeof L2 === 'object') {
//             for (let key in L2) {
//               if (Object.prototype.hasOwnProperty.call(L2, key)) {
//                 const L3 = L2[key];
//                 console.log('\t\t\tL3 : ', L3);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// - for ~ of 문

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.values(randomUser));

//구조분해할당

for (let [key, value] of Object.entries(randomUser)) {
  console.log(value); // 이렇게 하면 구조분해 할당이 됨.
}

//for in 과 for of 의 차이: for in은 객체에 사용, for of 는 배열에 사용.
//for of는 배열에만 쓸 수 있지만, Object keys,values,entries 를 사용하여 객체를 배열로 만든 후 사용하면 됨
//for in 도 배열에 슬 수 있지만, for of와 다르게 순서가 지켜지지 않고,
//사용자가 임의적으로 지정한 prototype까지 불러오는 성능 문제로 추천하지 않음

//앞의 hasOwnProperty와 다르게 prototype의 call을 가져오지 않아도 쓸 수 있는 메소드를 스테틱 메서드라 함
//인스턴스 메서드는 객체로부터 생성된 자식

// - 성능 비교 진단
