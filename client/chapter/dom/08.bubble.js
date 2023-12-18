/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  //   console.log(e.target); // 마우스가 클릭한 대상을 찾음
  console.log(e.currentTarget === this); //이벤트가 걸려 있는 대상을 가리킴 arrow function이 아닐시엔 같음
  console.log('%c section', 'color:orange');
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:dodgerblue');
// });

// p.addEventListener('click', () => {
//   console.log('%c p', 'color:hotpink');
// });
// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:hotpink');
// });

/* 캡처링 ----------------------------------------------------------------- */
