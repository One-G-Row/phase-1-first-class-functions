//callback function
function receivesAFunction(add) {
  return add();
}
console.log(
  receivesAFunction(function () {
    return 1 + 2;
  })
);

//higher order function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function");
  };
  return namedFunction();
}

//higher order function
function returnsAnAnonymousFunction() {
  return function () {
    return "This is an anonymous function";
  };
}
