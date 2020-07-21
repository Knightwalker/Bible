function Base10ToBinary(arg) {
let n = Number(arg);
let nStartLen = Number(String(n).length);

let temp = "";
let resStr1 = "";
let resStr2 = "";

while(n > 0) {
  if (n % 2 == 0) {
    resStr1 += ' '.repeat(0 + (nStartLen - Number(String(n).length)));
    resStr1 += `${n} : 2 = ${n/2} | 0\n`;
    temp += 0;
    n -= n/2;
  } else if (n % 2 == 1) {
    resStr1 += ' '.repeat(0 + (nStartLen - Number(String(n).length)));
    resStr1 += `${n} : 2 = ${Math.floor(n/2)} | 1\n`;
    temp += 1;
    n -= Math.ceil(n/2);
  }
}
for (let i = temp.length - 1; i >= 0; i--) {
  resStr2 += temp[i];
}

console.log(resStr1);
console.log(resStr2);

}

// Base10ToBinary('18');
// 18 : 2 = 9 | 0
//  9 : 2 = 4 | 1
//  4 : 2 = 2 | 0
//  2 : 2 = 1 | 0
//  1 : 2 = 0 | 1
//  10010

Base10ToBinary('18');