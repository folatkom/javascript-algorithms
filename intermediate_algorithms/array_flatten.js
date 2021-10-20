//flatten a nested array
function steamrollArray(arr) {
  let tempArr = arr.join(",").split(",");
  let flatArr = [];
  for(let i = 0; i < tempArr.length; i++){
    if(/\d/.test(tempArr[i])){
      flatArr.push(Number(tempArr[i]));
    }
    else if(/\w/.test(tempArr[i])){//ignore white signs
      if(tempArr[i] === '[object Object]'){
        flatArr.push({});
      }
      else{
        flatArr.push(tempArr[i]);
      }
    }
  }
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
