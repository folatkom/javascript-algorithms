//ROT13 code for uppercase letters (shift letters by 13 places)

function rot13(str) {
  let decodedStr = "";
  let charCode;
  let currentChar;
  for(let i = 0; i < str.length; i++){
    currentChar = str.charAt(i);
    if(/[A-Z]/.test(currentChar)){
      if(str.charCodeAt(i)<78){
        charCode = str.charCodeAt(i)+13;//rot13 code
      }
      else{
        charCode = str.charCodeAt(i)-13;
      }
      decodedStr += currentChar.replace(currentChar,String.fromCharCode(charCode));
    }
    else{
      decodedStr += currentChar;
    }
  }
  return decodedStr;
}
console.log(rot13("V YBIR EBPX'AQ'EBYY!"));
console.log(rot13("I LOVE ROCK'ND'ROLL!"));