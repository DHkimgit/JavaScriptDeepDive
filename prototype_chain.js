function person(name){
  this.name = name;
}

person.prototype.sayHello = function(){
  console.log(`Hi My name is ${this.name}`);
};

const me = new person('Lee');

console.log(me.hasOwnProperty('name'));
