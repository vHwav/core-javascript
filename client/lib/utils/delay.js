import {
  getNode,
  isNumber,
  isObject,
  xhrPromise,
  insertLast,
} from '../../lib/index.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//       second.style.top = '0px';
//     });
//     second.style.transform = 'rotate(360deg)';
//   });
//   second.style.top = '100px';
// });

//Promise API

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다',
};
export function delayP(options) {
  let config = { ...defaultOptions }; //객체 훼손 방지를 위해 복사해서 사용

  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }
  const { shouldReject, data, errorMessage, timeout } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject('실패!');
      }
    }, timeout);
  });
}

delayP(3000);
// delayP(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//catch로 에러를 받을 수 있지만, then은 콜백을 두개 받을 수 있음
// delayP(true).then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// ); // 두번째 인수를 err 받을 수 있으나 자주 쓰진 않음
//catch는 then().then().then().then().then().then().catch()로 해서 에러를 모을 때 사용

//수행하고 나서 then을 실행해줘

// console.log(delayP(false));

//promise object

//async - 함수가 promise 객체를 반환 하도록
//      - await 사용 -> promise 객체

//await - 코드의 실행 흐름 제어 (멈춤)
//      - result값 가져오기

async function delayA(item) {
  return item;
}

const value = await delayA('이슬기나');

// console.log(value);

async function 라면끓이기() {
  //   const 물 = await delayP({ data: '물' });
  //   console.log(물);
  //   const 스프 = await delayP({ data: '스프' });
  //   console.log(스프);
  //   const 면 = await delayP({ data: '면' });
  //   console.log(면);
  //   const 그릇 = await delayP({ data: '그릇' });
  //   console.log(그릇);
  //   delayP({ data: '물' })
  //     .then((res) => {
  //       console.log(res);
  //       return delayP({ data: '스프' });
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return delayP({ data: '면' });
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return delayP({ data: '그릇' });
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   console.log('물넣기');
  //   console.log('스프넣기');
  //   console.log('면넣기');
  //   console.log('그릇에담기');
}

라면끓이기();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/3');

  console.log(data);

  insertLast(
    document.body,
    `<img src="${data.sprites['front_default']}" alt="독침붕" />`
  );
}

// getData();
