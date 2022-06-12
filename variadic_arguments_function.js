// 자바스크립트에서 함수는 객체이므로 여러가지 프로퍼티를 가진다. 그중 arguments 프로퍼티는 함수 호출시 전달된 인수들의 정보를 담고 있는
// 유사 배열 객체이다.
// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다.
const sum1 = function () {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
};

// 유사 배열 객체의 간접 호출
const sum2 = function () {
  // arguments 객체를 배열로 변환
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
};
// ES6의 Rest parameter
const sum3 = function (...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
};

console.log(sum1(1));
console.log(sum1(1, 2));
console.log(sum1(1, 2, 3));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4, 5));
console.log(sum3(1, 2));
console.log(sum3(1, 2, 3, 4, 5));
