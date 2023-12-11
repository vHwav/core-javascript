function earth() {
  let water = true;

  let apple = {
    ceo: 'steve jobs',
    founder: 'Tim Cook',
  };

  function tiger() {
    console.log(water);
  }
  return tiger;
}

const ufo = earth();

// const button = document.querySelector('button');

// function handleClick() {
//   let isClicked = false;
//   return function () {
//     if (!isClicked) {
//       document.body.style.background = 'orange';
//     } else {
//       document.body.style.background = 'white';
//     }
//     isClicked = !isClicked;
//   };
// }

//즉시실행코드
const button = document.querySelector('button');

const handleClick = (() => {
  let isClicked = false;
  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }
    isClicked = !isClicked;
  };
})();
button.addEventListener('click', handleClick); //이벤트 생성

// setTimeout(() => {
//   button.removeEventListener('click', handleClick);
// }, 3000);

function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, 'click', handleClick);

remove();

function useState(initValue) {
  let value = initValue;
  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }
  return [read, write];
}

const [stae, setState] = useState(true);
