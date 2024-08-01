function sumOfTripletEvens(array) {
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

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(sumOfTripletEvens(arr));
