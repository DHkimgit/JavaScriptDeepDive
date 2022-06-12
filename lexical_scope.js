var i = 1;

function foo(){
  var i = 10;
  bar();
}
function bar(){ //함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정된다. 이 경우 함수 bar의 상위 스코프는 전역 스코프다.
  console.log(i);
}

foo();
bar();
var x = 'global';
function foo2(){
  console.log(x);
  var x = 'local'
}
foo2();
console.log(x)