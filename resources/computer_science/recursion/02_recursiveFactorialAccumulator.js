function fact(n, accumulator = 1) {
  if (n == 0) {
    return accumulator;
  }

  return fact(n - 1, n * accumulator);
}

console.log(fact(5)); // 120