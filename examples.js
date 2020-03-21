function bFind(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
          return true;
      }
  }
  return false;
}

function bFind2(needle, haystack) {
  let haystackCeilHalfLength = Math.ceil(haystack.length / 2);
  let heystackFloorHalfLenght = Math.floor(haystack.length / 2)
  for (let i = haystackCeilHalfLength, j = heystackFloorHalfLenght; i < haystack.length, j >= 0; i++, j--) {
      if (haystack[i] === needle) {
        return true;
      }
      if (haystack[j] === needle) {
        return true;
      }
  }
  return false;
}

// BEGIN Tests | Function 1
console.log('%cTest 1 | Single Test | Element 1 = 10000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
let result = [], element = undefined, arr = undefined, totalTime = undefined, t0 = undefined, t1 = undefined;
result['bFind'] = [];
result['bFind2'] = [];
element = 10000000; // ten milion
arr = []; for (let i = 1; i <= 10000000; i++) { arr.push(i); }
t0 = performance.now();
console.log("- Result: " + bFind(element, arr));
t1 = performance.now();
console.log("- Runtime: " + (t1 - t0) + " milliseconds.");
result['bFind']['Single Test | Element = 10000000'] = (t1 - t0) + " ms.";

console.log('%cTest 2 | Multiple Tests | Element = 10000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
element = 10000000; // ten milion
totalTime = 0;
for (let i = 0; i < 1000; i++) {
  t0 = performance.now();
  console.log(bFind(element, arr));
  t1 = performance.now();
  totalTime += (t1 - t0);
}
console.log("- Result: " + bFind(element, arr));
console.log("- Runtime: " + (totalTime / 1000) + " milliseconds.");
result['bFind']['Multiple Tests | Element = 10000000'] = (totalTime / 1000) + " ms.";

console.log('%cTest 3 | Multiple Tests | Element = 6000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
element = 6000000; // six milion
totalTime = 0;
for (let i = 0; i < 1000; i++) {
  t0 = performance.now();
  console.log(bFind(element, arr));
  t1 = performance.now();
  totalTime += (t1 - t0);
}
console.log("- Result: " + bFind(element, arr));
console.log("- Runtime: " + (totalTime / 1000) + " milliseconds.");
result['bFind']['Multiple Tests | Element = 6000000'] = (totalTime / 1000) + " ms.";

// END Tests | Function 1

// BEGIN Tests | Function 2
console.log('%cTest 1 | Single Test | Element = 10000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
element = 10000000; // ten milion
arr = []; for (let i = 1; i <= 10000000; i++) { arr.push(i); }
t0 = performance.now();
console.log("- Result: " + bFind2(element, arr));
t1 = performance.now();
console.log("- Runtime: " + (t1 - t0) + " milliseconds.");
result['bFind2']['Single Test | Element = 10000000'] = (t1 - t0) + " ms.";

console.log('%cTest 2 | Multiple Tests | Element = 10000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
element = 10000000; // ten milion
totalTime = 0;
for (let i = 0; i < 1000; i++) {
  t0 = performance.now();
  console.log(bFind2(element, arr));
  t1 = performance.now();
  totalTime += (t1 - t0);
}
console.log("- Result: " + bFind2(element, arr));
console.log("- Runtime: " + (totalTime / 1000) + " milliseconds.");
result['bFind2']['Multiple Tests | Element = 10000000'] = (totalTime / 1000) + " ms.";

console.log('%cTest 3 | Multiple Tests | Element = 6000000', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
element = 6000000; // six milion
totalTime = 0;
for (let i = 0; i < 1000; i++) {
  t0 = performance.now();
  console.log(bFind2(element, arr));
  t1 = performance.now();
  totalTime += (t1 - t0);
}
console.log("- Result: " + bFind2(element, arr));
console.log("- Runtime: " + (totalTime / 1000) + " milliseconds.");
result['bFind2']['Multiple Tests | Element = 6000000'] = (totalTime / 1000) + " ms.";
// END Tests | Function 2

// BEGIN Statistics
console.log('%cFinal Statistics', `
  background-color: yellow;
  border: 3px solid black;
  color: black;
  padding-left: 3px;
  padding-right: 3px;
`);
console.table(result);