function getAttr(node, attribute) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof attribute !== 'string') {
    throw new TypeError(
      'getAttr함수의 두번째 인자에는 문자형이 들어가야 합니다'
    );
  }
  return node.getAttribute(attribute);
}

function setAttr(node, prop, name) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string' || typeof name !== 'string') {
    throw new TypeError('setAttr의 인자에는 문자형만 들어가야 합니다');
  }
  if (name === '') {
    node.removeAttribute(prop);
    return; //여기까지 수행하면 아래는 더이상 수행하지 않도록
  }
  if (!name) throw new Error('setAttr함수의 세번째 인수는 필수 입력값입니다');

  if (prop.startsWith('data')) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return; //두번 수행되지 않도록
  }

  node.setAttribute(prop, name);
}

const attr = (node, prop, value) =>
  value === undefined ? getAttr(node, prop) : setAttr(node, prop, value);
