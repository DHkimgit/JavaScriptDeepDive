function foo() {
  console.log("global funtion foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo();
}
bar();
foo();
