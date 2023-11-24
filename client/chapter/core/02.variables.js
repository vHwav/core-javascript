/* ------------------ */
/* Variables          */
/* ------------------ */

let admin;
let name;
name = 'John';
admin = name;

alert(admin);

const ourPlanetName = 'Earth';

let onlineUserName;

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - Calculate product price by quantity
let calcProductPriceByQuantity;
// - 구매 제품 가격의 총 합
let totalProductPrice;
// - 1년 기준 일(day)자 수
const DAY_PER_TEAR = 365;
// - 구매 결제 여부
// is, has > bulean 값을 가짐
let isPayment = true; //값을 결제 했니?
let hasCartList = false; //카트에 물건이 담겨 있니?
// - 구매 결제 내역
let paymentList;
// - 브랜드 접두사
const BRAND_PREFIX = 'NIKE';
// - 오늘의 운세
let fortuneOToday = 'good';
// - 상품 정보
const productInformation = '세탁금지';

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

//redux, recoil, jotai, zustand = ajax

// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 응답 실패

const PANDING = 'api/panding';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const REJECTED = 'api/rejected';

//상수로 정의 해놓고 결과값이 나오면 저렇게 뜨도록 함. 