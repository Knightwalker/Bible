function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return factorial(n - 1) * n;
	}
}

// console.log(factorial(0)) = 1
// console.log(factorial(1)) = 1
// console.log(factorial(2)) = 2
// console.log(factorial(3)) = 6
// console.log(factorial(4)) = 24
// console.log(factorial(5)) = 120
// console.log(factorial(6)) = 720
// console.log(factorial(7)) = 5040
// console.log(factorial(8)) = 40320
// console.log(factorial(9)) = 362880
// https://en.wikipedia.org/wiki/Factorial