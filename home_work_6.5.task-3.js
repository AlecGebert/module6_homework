function getSum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(getSum(1)(2), getSum(3)(5), getSum(55)(17));

// or

let result = getSum(5);

console.log(result(1), result(5), result(25));
