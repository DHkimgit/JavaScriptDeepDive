/*Object.create(생성할 객체가 상속받을 프로토타입으로 지정할 객체, 생성할 객체의 프로퍼티 키와 
프로퍼티 디스크립터 객체로 이루어진 객체) 두번째 인수는 생략 가능 */

let obj = Object.create(null) //Object.create 를 상속받지 못한다.
console.log(Object.getPrototypeOf(obj) === null); //true

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true }
});
console.log(obj.x) //1
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true

const myProto = {x: 10};
// obj => myProto => Object.prototype => null
obj = Object.create(myProto);
console.log(obj.x); //10
console.log(Object.getPrototypeOf(obj) === myProto); //true

//생성자 함수
function Person(name){
    this.name = name;
}
//obj => Person.prototype => Object.prototype => null
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === person.prototype); //true

