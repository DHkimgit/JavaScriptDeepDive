function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자값이어야 합니다");
  }
  return x + y;
}

var add = function (x, y) {
  return x + y;
};

var add = new Function("x", "y", "return x + y");
var add = (x, y) => x + y; //Function 생성자 함수
