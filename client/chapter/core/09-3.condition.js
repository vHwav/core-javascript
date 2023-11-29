/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

// let thisTime = prompt('지금이 언제인가요?');

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
function switchTime() {
  switch (thisTime) {
    case MORNING:
      alert('뉴스 기사 글을 읽는다');
      break;
    case LUNCH:
      alert('자주 가는 식당에 가서 식사를 한다');
      break;
    case DINNER:
      alert('동네 한바퀴를 조깅한다.');
      break;
    case NIGHT:
      alert('친구에게 전화를 걸어 수다를 떤다');
      break;
    case LATE_NIGHT:
    case DAWN:
      alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
      break;
    default:
      alert('아침, 점심, 저녁, 밤, 심야, 새벽 중 선택해주세요');
  }
}

/* switch문 → if문 변환 --------------------------------------------------- */

function ifTime() {
  if (thisTime === MORNING) {
    alert('뉴스 기사 글을 읽는다');
  } else if (thisTime === LUNCH) {
    alert('자주 가는 식당에 가서 식사를 한다');
  } else if (thisTime === DINNER) {
    alert('동네 한바퀴를 조깅한다.');
  } else if (thisTime === NIGHT) {
    alert('친구에게 전화를 걸어 수다를 떤다');
  } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
    alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
  } else {
    alert('아침, 점심, 저녁, 밤, 심야, 새벽 중 선택해주세요');
  }
}

/* switch vs. if -------------------------------------------------------- */

//prompt 통해서 숫자를 입력 받는다(단 0~6까지만)

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  switch (num) {
    case 0:
      return '월';

    case 1:
      return '화';

    case 2:
      return '수';

    case 3:
      return '목';

    case 4:
      return '금';

    case 5:
      return '토';

    case 6:
      return '일';
  }
}

// 요일 뽑아내기 => Weekend 월~금 : 평일입니다 토~일 : 주말입니다

function weekend() {
  const today = getDay(getRandom(7));

  console.log(today);

  let day;
  //   if (today.includes('토')) {
  //     return '토요일';
  //   } else if (today.includes('일')) {
  //     return '일요일';
  //   } else {
  //     return '평일';
  //   }
  day = today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
  return day;
}

const todayIs = weekend();

console.log(todayIs);
