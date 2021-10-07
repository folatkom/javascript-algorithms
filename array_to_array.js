//put elements of arr1 into index n of arr2, in order
function arrSplice(arr1, arr2, n) {
  let arr3 = [...arr2];
  arr3.splice(n,0,...arr1)
  return arr3;
}

arrSplice([1, 2, 3], [4, 5, 6], 1);