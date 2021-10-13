//splitting arrays into subarrays with length of predefined size
function splitArr(arr, size) {
  let iterations = Math.ceil(arr.length/size);//number of subarrays
  let prevArr = [];
   for(let i = 0; i<iterations; i++){
     prevArr.push(arr.splice(0,size));
   }
  return prevArr;
}

splitArr(["a", "b", "c", "d"], 2);
splitArr([0, 1, 2, 3, 4, 5], 3);
splitArr([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)