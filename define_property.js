// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나
// 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의 하는 것을 말한다.
// 프로퍼티 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부 등을 정의하여 객체의 프로퍼티가 어떻게 동작해야 하는지 정확이 정의가 가능하다.
const person = {};
// 데이터 프로퍼티 정의
Object.defineProperty(person, "firstName", {
  value: "Duhyun",
  Writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "kim",
});

// 접근자 프로퍼티 정의
Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

person.fullName = "jun Jung";
console.log(person);

// 객체 확장 금지
Object.preventExtensions(person);

// 객체 밀봉 = 프로퍼티 추가와 삭제, 프로퍼티 어트리뷰트 재정의 금지, 값 갱신은 가능
Object.seal(person);

// 객제 동결= 프로퍼티 추가와 삭제, 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지
Object.freeze(person);
