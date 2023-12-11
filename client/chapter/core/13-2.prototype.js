/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    //constructor는 최초 1회만 실행되며 그 이후론 실행되지 않음 - 더 실행하고 싶다면 아래에 메서드를 만들어야함
    // 아예 한번 실행 후 constructor에 접근이 안됨
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }
  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

const animal = new Animal('포동이');

class Tiger extends Animal {
  static options = {
    versiont: '1,0,0',
    company: 'like-lion',
    ceo: '----',
  }; //static은 메서드가 아니라 객체로도 사용 가능
  constructor(name) {
    super(name); //부모(Animal) 것을 가져오는 역할을 함 그리고  Animal에도 name이 있었으니 변수 전달해줌
    this.pattern = '호랑이무늬';
  }
  //   bark() {
  //     return '어흥!';
  //   } //이렇게 만들면 인스턴스이나
  static bark() {
    return '어흥!';
  } //이렇게 앞에 static을 붙여주면 스테틱 메서드가 됨
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다 `;
  }
}

const 한라산호랑이 = new Tiger();

//react class vs function(hooks)

// class Tab extends React.Component {
//   render() {
//     return <div>{value}</div>;
//   }
// }

// function Tab(){
//     return (
//         <div>{value}</div>
//     )
// }
const a = new Array();
class Array {
  constructor() {}
  static isArray() {}
  forEach() {}
  reduce() {}
  map() {}
}

// class 문법은 훨씬 더 직관적임
// 생성자 함수는 내부에 constructor가 있어 언제든 생성한 것을 가져올 수 있음
// but class 문법의 constructor은 최초 1회만 호출되며 그 후엔 동일한 객체에선 다신 호출할 수 없음
// get에서는 return, set에서는 변수를 꼭 적어줘야 함
// extends를 통해 확장 가능, 다만 그렇게 할 경우 안에다가 super()를 적어주고, 그 안에 매개변수도 설정해야함
// static 메서드도 훨씬 단순하게 쓸 수 있음 - 메서드 앞에 static을 붙이는 것만으로도 언제든 호출해서 사용할 수 있음
