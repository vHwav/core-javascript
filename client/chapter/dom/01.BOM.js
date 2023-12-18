/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

// alert('aa');

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

//http: 프로토콜(protocal) 어떠한 방식으로 정보를 넘길거냐의 차이
//http://localhost 호스트(host)
//5500 포트(port)

console.log(location.href); //여기까지만 쓰면 get 임.
console.log(location.port);
console.log(location.pathName); // 왜 안되지...
console.log(location.search);

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

let value;

// function getCoords() {
//   navigator.geolocation.getCurrentPosition((data) => {
//     value = data;
//   });
//   return value;
// } - 이 코드는 비동기 시간 때문에 return이 뜨지 않음(geolocation이 값을 받아오는데 오래 걸림)

function getCoords() {
  return new Promise((resolve, reject) => {
    //promise: 데이터가 올 때까지 대기하는 함수 올 때까지 안의 코드가 시행되지 않음
    navigator.geolocation.getCurrentPosition((data) => {
      if (data) {
        const { latitude: lat, longitude: long } = data.coords;
        resolve({ lat, long });
      } else {
        reject({ message: '위치 서비스 동의하세요' });
      }
    });
  });
}
getCoords().then((result) => {
  //   console.log(result);
});

// navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//   console.log(stream);
//   document.querySelector('#videoElement').srcObject = stream;
// });

/*

navigator.mediaDevices.getUserMedia({video:true})
.then((stream)=>{
  console.log( stream );
  document.querySelector('#videoElement').srcObject = stream;
})

*/

//console.log(navigator.geolocation); //선이 그어지는 건 지금은 더이상 사용되지 않는 기능임

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

//height: 모니터 사이즈
//availHeight : 브라우저 크기
//innerHeight : 브라우저 해상도 크기 === 100vh
//innerWidth
/*orientation:{
    landscape : 풍경화 가로(정방향)
    portrait: 초상화 세로
}*/

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

const arr = [1, 2, 3, 4, 5];

const newArray = [...arr].reverse();

arr.toReversed(); // 새로운 배열

try {
  throw new Error(); //아래쪽 에러로는 접근되지 않음 하지만 중첩 가능
  try{
    
    throw new Error();
  }catch{
    
  }
  throw new Error();
} catch {
  console.log('err!');
}
