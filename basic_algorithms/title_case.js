//take a sentence and change all first letters of words to uppercase, and rest to lowercase
function titleCase(str) {
 let strTitleCase = "";
  let letter;//actual letter
  let flag = false;//flag to check if space stands before actual letter
   for(let i = 0; i<str.length; i++){
     letter = str.charAt(i);
     //the first letter of the first word in a sentence or any letter after space (any other word beginning)
     if(i==0 || flag == true){
       letter = str.charAt(i).toUpperCase();
       flag = false;
     }
     //space
     else if(/\s/.test(letter)==true){
       flag = true;
     }
     //any other letter
     else{
       letter = str.charAt(i).toLowerCase();
     }
     strTitleCase += letter;
   }
  return strTitleCase;
}

console.log(titleCase("people are lazy this days"));
console.log(titleCase("hEEllo eveRYoNE"));