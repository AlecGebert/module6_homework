const evenOrOdd = (arr) => {
  let counterOdd = 0;
  let counterEven = 0;
  let zeroCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zeroCounter++;
      } else if (arr[i] % 2 !== 0) {
        counterOdd++;
      } else if (arr[i] % 2 === 0 && arr[i] !== 0) {
        counterEven++;
      }
    }
  }
  console.log(`"В массиве ${counterEven} четных чисел"`);
  console.log(`"В массиве ${counterOdd} нечетных чисел"`);
  console.log(`"В массиве ${zeroCounter} нолей"`);
};

let exempleArr = [1, "b", 3, 2, 0, 5, 7, 2, 0, 0];

evenOrOdd(exempleArr);
