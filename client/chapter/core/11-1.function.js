/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// function getRandomValue() {
//   return Math.random() > 0.5 ? 1 : 0;
// }

// 함수 선언
// function calPrice(
//   priceA,
//   priceB,
//   priceC = getRandomValue(),
//   priceD = getRandomValue()
// ) {
//   if (!priceC) priceC = 0;
//   priceC = priceC || 0;
//   priceC ||= 0;
//   priceC = priceC ?? 0;
//   priceC ??= 0;
//   if (!priceA) return 0;
//   if(!priceB) return 0;
//   if (!priceA || !priceB) {
//     throw new Error(
//       'calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.'
//     );
//   }

//   return priceA + priceB + priceC + priceD;
// }

// // 함수 호출
// // Number(undefined) = undefined, Number(null)=0;
// const result = calPrice(1000);
// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
//1. 하나의 기능만을 수행해야 한다
//2. 이름과 매개변수의 이름을 직관적으로 적어야 한다.(가독성 => 읽었을 때 바로 기능을 알 수 있다.)
//3. 재사용성이 좋아야 한다

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {
  if (!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력값입니다.');
  //   if (typeof pxValue === 'string') {
  //     pxValue = parseInt(pxValue, 10);
  //   }
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10));
  //   if (typeof base === 'string') {
  //     base = parseInt(base, 10);
  //   }
  typeof base === 'string' && (base = parseInt(base, 10));
  return pxValue / base + 'rem';
}

//Test Driven Development - 테스트 주도 개발

console.assert(rem(20) === '1.25rem'); //썼을 때 이 결과가 맞는지 봐달라는뜻
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');
// console.assert(rem() === Error);

// console.log(parseFloat(30));

//rem(20) === '1.25rem'

// css(node: string, prop: string, value: number|strung) : string;

function getStyle(node, prop) {
  //prop:property의 약자
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string')
    throw new Error('getStyle 함수의 두번째 인수는 string 타입 이어야 합니다');
  return getComputedStyle(node, null)[prop]; //변수를 넣어야 할 때는 []안에 넣도록 함.
  //null을 쓰는 이유, 가상요소가 들어갈 자리인데 비워두는 것. 아예 안써도됨.
  //저기를 채운다면 ::ater 등의 요소를 잡을 수 있음
}

function setStyle(node, prop, custom) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (typeof prop !== 'string') {
    throw new Error('setStyle 함수의 두번째 인수는 string 타입이어야 합니다.');
  }
  //prop in node.style < node의 스타일 리스트와 prop을 비교함
  return (node.style[prop] = custom);
}

/*
1.function name//함수의 이름
2. parameter, arguments//인수와 인자
3. return value//값을 반환하는지
4. validation//어디까지 작동되는지
5. test [test driven development]//테스트를 통한 완성
*/

function css(node, prop, custom) {
  //   //getter
  //   if (!custom) {
  //     return getStyle(node, prop);
  //   } else {
  //     //setter
  //     setStyle(node, prop, custom);
  //   }
  return !custom ? getStyle(node, prop) : setStyle(node, prop, custom);
}
// const css = (node, prop, custom) => !custom ? getStyle(node, prop) : setStyle(node, prop, custom);

// css('.first', 'color'); //getter
// css('.first', 'color', 'orange'); //setter

// getStyle(document.body, 'fontSize');
// document.body.style.fontSize: 이건 계산되기 전의 css 값을 가져옴
// getComputedStyle(document.body).fontSize: 계산된 후의 css 값을 가져옴

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
