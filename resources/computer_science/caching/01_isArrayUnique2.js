function isUnique2(arr) {
  let cache = [];
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) {
      return false;
    } else {
      cache[arr[i]] = true;
    }
  }

  return result;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = []; for (let i = 0; i < 1000; i++) { arr1[i] = i}
let arr3 = []; for (let i = 0; i < 5000; i++) { arr1[i] = i}

console.log(isUnique2(arr1)); // true -> Runtime: 0.08500006515532732 milliseconds.
console.log(isUnique2(arr2)); // true -> Runtime: 0.1799999736249447 milliseconds.
console.log(isUnique2(arr3)); // true -> Runtime: 0.5200000014156103 milliseconds.