var person = {
  name: "Lee",
  age: 20,
  num: 0,
  increase: function () {
    this.num++;
  },
};

var circle = {
  radius: 5,
  getDiameter: function () {
    return this.radius * 2;
  },
};

let x = 1,
  y = 2;

var obj = { x, y };

console.log(person.name);
console.log(circle.getDiameter());
console.log(obj);
