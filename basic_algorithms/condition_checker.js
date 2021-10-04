//find first element in an array that return true for given condition (function)
//if there is none, return undefined
function findElement(arr, func) {
  let num;
  for(let i = 0; i<arr.length; i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 3 === 0));
console.log(findElement([1, 2, 3, 4], num => num % 5 === 0));