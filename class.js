// 클래스

var Person1 = function () {
  // 생성자 함수
  function Person1(name) {
    this.name = name;
  }
  // 프로토타입 메서드
  Person1.prototype.sayHi = function () {
    console.log("Hi my name is" + this.name);
  };
  //정적 메서드
  Person1.sayHello = function () {
    console.log("Hello");
  };
  // 생성자 함수 반호
  return Person1;
};
// 인스턴스 참조
const me = new Person1("Lee");
// 인스턴스의 프로퍼티 참조
console.log(me.name);
//프로토타입 메서드 호출
me.sayHi;
// 정적 메서드 호출
//Person1.sayHello;

// 클레스
class Person2 {
  // 생성자. 클레스 당 1개만 존재 가능. 생략 하면 빈constructor가 자동적으로 생성. 인스턴스의 초기화를 담당
  constructor(name) {
    this.name = name;
  }

  // 클레스 필드 정의. 외부의 값으로 초기화 하는 경우에는 constructor를 써야한다. 클레스 필드에는 this를 쓸 수 없기 때문
  age = "20";

  // 클레스 필드에 함수를 할당
  getName = function () {
    return this.name;
  };

  // 프로토타입 메서드
  sayHi() {
    console.log("Hi mt name is" + this.name);
  }

  // 정적 메서드
  static sayHello() {
    console.log("Hello");
  }

  // 정적 필드(TC39)
  static sex = "MAN";

  // private 필드 정의(TC39)
  #max_Hamberger = "2";
}
// 클레스의 인스턴스 생성. new 연산자와 함께 호출한다.
const person2 = new Person2();
console.log(person2.max_Hamberger);

// 상속
class Animal{
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    eat() {return 'eat';}
    move() {return 'move';}
}
class Bird extends Animal{
    fly(){return 'fly';}
}
const bird = new Bird(1, 5)
console.log(bird.age, bird.weight, bird.fly, bird.eat)

// 상속 : super 키워드
// super를 호출하면 수퍼클래스의 constructor와 메서드를 호출할 수 있다.
// 수퍼클레스
class Base{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}
// 서브 클레스
class Derived extends Base {
    // 서브클래스에서 컨스트럭터를 생략하지 않은 경우 무조건 super를 호출해야 한다.
    // 서브클레스의 컨스트럭터에서는 super를 호출하기 전까지는 this를 사용할 수 없다.
    constructor (a, b, c){
        super(a, b);
        this.c = c;
    }
}
const deriver = new Derived(1, 2, 3);
console.log(deriver.a, deriver.b, deriver.c);