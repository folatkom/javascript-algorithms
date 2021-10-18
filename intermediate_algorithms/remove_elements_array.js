//Remove all elements from the initial array that are of the same value as given arguments.

function destroyer(arr,...args) {
  let newArr = [...arr];
  let argArr = [...args];

  for (let i = 0; i<argArr.length; i++){ 
    for (let j = 0; j<newArr.length; j++){
      if(argArr[i] == newArr[j]){     
        newArr.splice(j,1)
        j--;//after splice elements move one index backward, so the old tested index is now a new untested index
      }
    }
  }
  return newArr;
}

console.log(destroyer([3, 2, 3, 1, 2, 3], 2, 3));