/*ES5
var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); */

//ES6
const prefix = "prop";

let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj);

//ES6 메서드 축약 표현
const person = {
  name: "kim",
  age: 10,
  sayHi: function () {
    //ES5의 메서드 정의
    console.log("Hello");
  },
  addAge() {
    // ES6의 메서드 축약 표현. 함수 정의를 생략하고 메서드를 정의한다.
    this.age += 1;
  },
};
const _ = require("lodash");
const o = { x: { y: 1 } };
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);
