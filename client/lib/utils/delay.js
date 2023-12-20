import { getNode, isNumber, isObject } from '../../lib/index.js';

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
function delayP(options) {
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
        resolve('아싸 성공~!');
      } else {
        reject('실패!!');
      }
    }, timeout);
  });
}

delayP(3000).then((res) => {
  console.log(res);
});

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

console.log(delayP(false));
