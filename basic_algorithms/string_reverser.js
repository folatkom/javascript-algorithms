function reverseString(str) {
  let revStr = "";
  for(let i=str.length-1;i>-1;i--){
    revStr += str.charAt(i);
  }
  return revStr;
}

console.log(reverseString("hello"));