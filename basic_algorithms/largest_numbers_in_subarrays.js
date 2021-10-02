//this function returns maximum of every subarray of given array
function largestOfArr(arr) {
  let num;
  let largeNum = Number.NEGATIVE_INFINITY;
  let largeNumArr = [];
  for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr[i].length;j++){
      num = arr[i][j];
       if (num>largeNum){
        largeNum = num;
       }  
    }
    largeNumArr.push(largeNum);
    largeNum = Number.NEGATIVE_INFINITY;
  }
  return largeNumArr;
}

console.log(largestOfArr([[13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfArr([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));