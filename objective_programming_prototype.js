// 일반적인 생성자 함수
function Circle1(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 원 생성
const circle1 = new Circle1(1);
// 반지름이 2인 원 생성
const circle2 = new Circle1(2);

console.log(circle1.getArea());
console.log(circle2.getArea());
// Circle1 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea 메서드를 중복 생성하고
// 모든 인스턴스가 중복 소유된다. getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
// =================================================================================================================//
// 자바스크립트 프로토타입 이용
function Circle2(radius) {
  this.radius = radius;
}

Circle2.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

console.log(circle3.getArea());
console.log(circle4.getArea());
console.log(Circle2.prototype);
// 프로토타입 기반 상속으로 객체 안에서 불필요한 중복을 일으키는 메서드를 제거했다.

// function Car(name) {
//   this.name = name;
// }
// const K5 = new Car("k5");
// console.log(K5.prototype === Object.prototype);
