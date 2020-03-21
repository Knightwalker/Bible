function searchArray(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
          return true;
      }
  }
  return false;
}

// let searchedElement = 10000000;
// let arr = []; for (let i = 1; i <= 10000000; i++) { arr.push(i); }
// console.log(bFind(searchedElement, arr));
