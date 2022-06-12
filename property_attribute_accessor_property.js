const person = {
  //데이터 프로퍼티
  firstName: 'Duhyun',
  lastName: 'kim',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다. getter 함수
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name){
    // 배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(' ');
  }
};
//데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName);
// 접근자 프로퍼티를 통한 프로퍼티 값 저장. setter 함수가 호출된다.
person.fullName = 'jonghyun Lee';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조. getter 함수가 호출된다.
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);