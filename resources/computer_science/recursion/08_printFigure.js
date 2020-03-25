function printFigure(n) {
  if (n == 0) { // Bottom of recursion
    return;
  }

  console.log("*".repeat(n)); // Pre-action: print n asterisks
  printFigure(n - 1);         // Recursive call: print figure of size n-1
  console.log("#".repeat(n)); // Post-action: print n hashtags

}