function isUnique(arr) {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) { // skip self
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
  }

  return result;
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = []; for (let i = 0; i < 1000; i++) { arr1[i] = i}
let arr3 = []; for (let i = 0; i < 5000; i++) { arr1[i] = i}

console.log(isUnique(arr1)); // true -> Runtime: 0.1300000585615635 milliseconds.
console.log(isUnique(arr2)); // true -> Runtime: 2.7649999829009175 milliseconds.
console.log(isUnique(arr3)); // true -> Runtime: 26.814999990165234 milliseconds.