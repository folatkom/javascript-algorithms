//repeat str num times, if num - negative, return empty string
function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  if(num>0){
    for(let i=1;i<=num;i++){
      repeatedStr += str;
    }
  }
  return repeatedStr;
}
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -1));