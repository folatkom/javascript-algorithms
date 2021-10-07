//delete falsy values (false, null, 0, "", undefined, and NaN) from array
function deleteFalsyValues(arr) {
  let newArr = [];
  for(let i = 0; i<arr.length; i++){
    if(Boolean(arr[i])==true){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

deleteFalsyValues(["green", "", 5, false, 19]);
