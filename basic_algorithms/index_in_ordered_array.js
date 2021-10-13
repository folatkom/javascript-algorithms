//checks what would be index of num if it was pushed into arr, 
//and arr would be sorted from least to greatest, including num

function whichIndex(arr, num) {
let index = 0;
  for(let i = 0; i<arr.length; i++){
    if(num>arr[i]){
      index++;
    }
  }
  return index;
}

whichIndex([40, 60], 50);