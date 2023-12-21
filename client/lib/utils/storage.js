import { isString, typeError } from '../../lib/index.js';

const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입이어야 합니다' });
    }
  });

  //   if (!isString(key)) {
  //     typeError('setStorage 함수의 첫번째 인수인 key는 문자 타입이어야 합니다');
  //   }
  //   storage.setItem(key, JSON.stringify(value));
}

setStorage('obj', { name: 'hobby2' });

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      JSON.parse(storage.getItem(key));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입이어야 합니다' });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear : storage.removeItem(key);
    resolve();
  });
}

deleteStorage('name');

// storage.setItem('obj', JSON.stringify({ name: 'hobby', age: 15 }));
// console.log(JSON.parse(storage.getItem('obj')));
