/*Find the smallest common multiple of the provided parameters that can be evenly divided 
by both, as well as by all sequential numbers in the range between these parameters.*/
function smallestCommons(arr) {
  let rangeArr = [];
  let dividers = 1;
  if (arr[0]<arr[1]){
    for(let i = arr[0]; i <= arr[1]; i++){
      rangeArr.push(i);
    }
  }
  else if (arr[1]<arr[0]){
    for(let i = arr[1]; i <= arr[0]; i++){
      rangeArr.push(i);
    }
  }
  else{
    return arr[0];
  }
  let multiple = rangeArr[rangeArr.length-1]//start number to check
  while(dividers<=rangeArr.length){
    for(let j = 0; j < rangeArr.length; j++){
      if(multiple % rangeArr[j] == 0){
        dividers++;
      }
    }
    if(dividers == rangeArr.length){
      return multiple;
    }
    else{
      dividers = 0;
    }
    multiple += rangeArr[rangeArr.length-1];//every next number to check
    }
}

console.log(smallestCommons([2,7]));
console.log(smallestCommons([23, 18]));