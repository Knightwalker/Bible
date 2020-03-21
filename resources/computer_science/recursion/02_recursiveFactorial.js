function factorial(n) {
  if (n == 0) { // base case
    return 1;
  }
  
  return n * factorial(n - 1);

}

console.log(factorial(5)); // 120