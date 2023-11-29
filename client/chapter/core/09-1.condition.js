/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm('영화봤니?');

// if (!didWatchMovie) {
//   //if에 true 값이 들어오면 바로 실행됨
//   let goingToWatchMovie = confirm('영화 볼거니?');
//   if (goingToWatchMovie) {
//     let withWho = prompt('누구랑 볼거니?');
//     if (withWho === 'you') {
//       console.log('어머...');
//     } else {
//       let withWho = prompt('누구랑 볼거니?');
//     }
//   } else {
//     console.log('관심 없어.');
//   }
// } else {
//   console.log('그래...');
// }
// 영화 볼거니?
// let didWatchMovie = 'no';
// let goingToWatchMovie = 'yes';

// didWatchMovie = prompt('영화 봤니?');

// let movieMessage = didWatchMovie.includes('yes')
//   ? '그거 재밌더라'
//   : goingToWatchMovie.includes('yes')
//     ? '너무 설렌다 같이 보자!'
//     : '난 별로...';
// console.log(movieMessage);
// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node, isActive) {
  //render(document.body, false)
  let template = `
      <div>${isActive ? '안녕' : '잘가'}</div>
    `;

  node.insertAdjacentHTML('beforeend', template);
}
