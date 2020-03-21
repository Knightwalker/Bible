function sumArr(arr, index) {
  if (index == arr.length) { // base case
    return 0;

  } else { // general case
    return arr[index] += sumArr(arr, index + 1); // tail
    
  }
}

let arr = [1, 2, 3, 4, 5];
let sum = sumArr(arr, 0);
console.log(sum); // 15