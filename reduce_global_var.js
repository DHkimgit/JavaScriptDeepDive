// 즉시 실행 함수
(function (){
  var foo = 10;
  // ...
}());
// 함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한번만 호출된다. 이 방법을 사용하면 전역 변수를 생성하지 않는다.

// 네임스페이스 객체
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.age = 21;
MYAPP.person = {
  name: 'Lee',
  address: 'Seoul'
};
console.log(MYAPP.name); // Lee
console.log(MYAPP.person.address); //Seoul

// 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방식이다.
// 네임스페이스를 분리해서 식별자 충돌을 막는 효과는 있지만 네임스페이스 객체 자체가 전역 변수로 생성되므로 그다지 유용해 보이지는 않는다.

// 모듈 패턴 => 클로저
var Counter = (function () {
  // private 변수
  var num = 10;
  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase(){
      return ++num;
    },
    decrease(){
      return --num;
    }
  };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num);
console.log(Counter.increase);
console.log(Counter.increase);
console.log(Counter.decrease);