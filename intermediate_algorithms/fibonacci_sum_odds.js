/*Given a positive integer num, return the sum of all odd Fibonacci numbers that 
are less than or equal to num.*/

function sumFibs(num) {
  let currentNum = 1;
  let prevNum = 0;
  let sumTwo = 1;
  let sumAll = 1;//first fibo num
  while (prevNum+currentNum <= num){
    sumTwo = currentNum + prevNum;
    prevNum = currentNum;
    currentNum = sumTwo;
    if(currentNum % 2 != 0){
      sumAll += currentNum;
    }
  }
  return sumAll;
}
console.log(sumFibs(10));