/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다`;
  },
  __proto__: animal,
};
//객체의 상속은 __proto__로 다른 객체의 능력을 전부 상속해줄 수 있음
//허나 말그대로 상속의 의미만 있을 뿐, 새로 생성된 것들은 ..? 왜 계층 구조가 안되는지?

const 백두산호랑이 = {
  color: 'white',
  name: '포동이',
  __proto__: tiger,
};

// 생성자 함수
// new F() 생성자 함수를 통해 객체를 만들어냄
// 이렇게 만든 객체에 능력을 주기 위해서는 .prototype을 통해서 값을 전달해줄 수 있음 
// 새로운 함수를 만들었을 때, .call()을 사용해서 능력을 가져올 수 있음
// 이렇게 될 경우, 그 함수 내에서 call로 불러온 대상이 그대로 시행되는 것
// 생성자를 통해 생성된 객체가 가진 능력: 인스턴스 메서드-함수 안에다가 메서드를 만들었을 때, 그 생성자 함수로 생성된 객체가 아니라면 쓸 수 없음
// 함수가 가진 능력: 스테틱 메서드 - 누구나 다 호출해서 사용할 수 있음



function button() {}

function button2() {}

button(); //일반 함수
new button2(); //생성자함수 => 무조건 객체를 반환함(객체가 아닌 것을 반환할 시엔 반환 자체가 안됨)

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.prey = food;
    this.stomach.push(food);
  };
}

function Tiger(name) {
  Animal.call(this); //Tiger 가 Animal()의 능력을 가지는 법.
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다`;
  };
}
const 한라산호랑이 = new Tiger('포동이');
const 금강산호랑이 = new Tiger();

// function sum(a, b, c) {
//   console.log(this);
// }

// sum.call('안녕', 1, 2, 3); // 바로 실행
// // apply
// // bind

Tiger.hunt(); //이건 인스턴스 메서드

Tiger.bark = function () {
  return '어흥!';
}; //이건 스테틱메서드
