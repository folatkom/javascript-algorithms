/*Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it.*/

function dropElements(arr, func) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      newArr=arr.slice(i);
      return newArr;
    }
  }
  return newArr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));