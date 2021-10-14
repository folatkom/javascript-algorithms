/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  var newArr = [];
  let testArr =arr1.concat(arr2);
  for(let i = 0; i<testArr.length; i++){
    let checked1 = arr1.some((currentValue1)=>{
      return currentValue1 == testArr[i]
    });
    let checked2 = arr2.some((currentValue2)=>{
      return currentValue2 == testArr[i]
    });
    if(checked1 == false || checked2 == false){
      newArr.push(testArr[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));