// let 키워드는 재할당이 불가능하며 블록 레벨 스코프를 가지고 변수 호이스팅이 발생하지 않는 것처럼 동작한다. 호이스팅이 없는건 아니다.
//console.log(foo); // Temperal Dead Zone 일시적 사각지대

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo);
foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo);

//const 키워드
const f = 1; // const키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
f = 2; // const 키워드로 선언한 변수는 재할당이 금지된다.

// const 키워드를 상수처럼 활용
const TAX_PRICE = 0.1;

let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_PRICE);

console.log(afterTaxPrice);

// const 키워드와 객체
const person = {
  name: 'Lee'
};

// 객체는 변경 가능한 값이므로 재할당 없이 변경이 가능하다.
preson.name = 'kim';

console.log(person.name);