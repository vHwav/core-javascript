/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;

  console.log(i);
}
let j = 1;
while (j <= 10) {
  if (j % 2 == 0) {
    console.log(j);
  }
  j++;
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
//frontEndDev.toString => 'HTML,CSS,SVG,JavaScript,jQuery,React,Redux'
//frontEndDev.join(' ') => 'HTML CSS SVG JavaScript jQuery React Redux'

let i = 0;
let l = frontEndDev.length;

// while (i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for (; i < l; i++) {
  let value = frontEndDev[i];
  if (value.includes('jQuery') || value.includes('SVG')) continue;

  if (value.includes('jQuery')) break;
  //   console.log(frontEndDev[i]);
}

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let h = l - 1; h >= 0; h--) {
  let value = frontEndDev[h];
  console.log(value);
}
//let i = l;
//let subject;
for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  console.log(subject);
}
