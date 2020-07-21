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

function isUniqueOptimized(arr) {
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

let arr1 = []; for (let i = 0; i < 3000; i++) { arr1[i] = i}
let arr2 = []; for (let i = 0; i < 3000; i++) { arr2[i] = i}

let t0 = performance.now();
console.log(isUnique(arr1));
let t1 = performance.now();
console.log("- Runtime: " + (t1 - t0) + " milliseconds.");

t0 = performance.now();
console.log(isUniqueOptimized(arr2));
t1 = performance.now();
console.log("- Runtime: " + (t1 - t0) + " milliseconds.");