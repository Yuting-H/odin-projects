function sumOfTripletEvens(array: Array) {
  array = array.filter((num) => {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  });

  array = array.map((num) => {
    return num * 3;
  });

  let sum = array.reduce((total, curr) => {
    return total + curr;
  }, 0);
}

let arr = [1, 2, 3, 4, 5];

console.log(sumOfTripletEvens(arr));
