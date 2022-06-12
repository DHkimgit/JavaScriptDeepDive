// 오브젝트 생성자 함수
const person = new Object()

person.name = 'duke';
person.sayhello = function () {
  console.log('hi My name is ' + this.name);
};

person.sayhello();

// 생성자 함수에 의한 객체 생성
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function (){
    return 2 * this.radius;
  };
}
// 생성자 함수 내부에선 return문을 반드시 생략해야 한다.
// 생성자 함수에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손하기 때문이다.
const circle1 = new Circle(5);
const circle2 = new Circle(10);