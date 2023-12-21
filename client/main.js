import { getNode, setStorage, bindEvent, getStorage } from './lib/index.js';

// 1. textField의 value값을 로컬 스토리지에 저장

const { localStorage: storage } = window;

const textValue = getNode('#textField');

function inputHandler() {
  const value = this.value;
  setStorage('text', value);
}

//새로고침이 일어났을 때
function init() {
  getStorage('text').then((res) => (textValue.value = res));
}

bindEvent(textValue, 'input', inputHandler);
window.addEventListener('Load', init);
