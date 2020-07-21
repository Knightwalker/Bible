function Base2ToBase10(arg) {
let n = String(arg);
let resStr1 = "";
let resStr2 = "";
let resStr3 = 0;

let index = n.length - 1;
for (let i = 0; i < n.length; i++) {
  // Build the strings, which will show the equation step by step.
  if (i < n.length - 1) {
    resStr1 += `${n[i]} * 2 ^ ${index} + `;
    resStr2 += `${n[i] * Math.pow(2, index)} + `;
  } else {
    resStr1 += `${n[i]} * 2 ^ ${index}`;
    resStr2 += `${n[i] * Math.pow(2, index)}`;
  }
  // Calculating 
  resStr3 += Number(n[i]) * Math.pow(2, index); 
  index--;
}
resStr3 = String(resStr3);
 
console.log(resStr1);
console.log(resStr2);
console.log(resStr3);

}

Base2ToBase10('1101');