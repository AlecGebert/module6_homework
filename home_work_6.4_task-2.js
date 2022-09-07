function primeOrNot(n) {
  if (n < 2) {
    return "Число должно быть больше 1";
  } else if (n > 1000) {
    return "Число должно быть меньше 1000";
  } else if (n === 2) {
    return "Простое число";
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Составное число";
    }
    return "Простое число";
  }
}

console.log(0, primeOrNot(0));
console.log(1001, primeOrNot(1001));
console.log(2, primeOrNot(2));
console.log(23, primeOrNot(23));
console.log(100, primeOrNot(100));
