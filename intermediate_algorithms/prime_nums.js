/*Return the sum of all prime numbers that are less 
than or equal to num*/

function sumPrimes(num) {
 let rest;
 let dividers = 0;
 let sum = 0;
 for (let i = 2; i <= num; i++){
  for (let j = 1; j < i; j++){
    rest = i % j;
    if (rest == 0){
      dividers ++;
    }
  }
  if(dividers == 1){
    console.log(i)//prime numbers
    sum += i;
  }
  dividers = 0;
 }
  return sum;
}
sumPrimes(10);