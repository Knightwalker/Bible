// Returns "Aliquot Sequence" as an array.
function AliquotSequence(n) 
{ 
    let seq = []; 
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        seq.push(i); 
      }        
    }        
    return seq;  
} 

// Returns "Aliquot Sequence" sum as number.
function AliquotSum(n) 
{ 
    let sum = 0; 
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        sum += i; 
      }        
    }    
    return sum;  
} 
  
console.log(AliquotSequence(6));
console.log(AliquotSum(6));