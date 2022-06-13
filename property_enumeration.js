const person = {
  name: "kim",
  age: 21,
  address: "seoul",
  __proto__: { family: 4 },
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 만약 객체 자신의 프로퍼티 만을 열거하려고 한다면 hasOwnProperty 메서드를 사용한다.
for (const key in person) {
  if (!person.hasOwnProperty(key)) continue;
  console.log(`${key}: ${person[key]}`);
}
// 아니면 Object.keys나 es8에서 도입된 Object.valus/entries 메서드를 이용한다.
console.log(Object.entries(person));
Object.entries(person).forEach(([key, value]) => console.log(key, value));
