//Replece the given word(2d argument) in a sentence(1st argument) for a new one(3d argument)
/*Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog*/

function myReplace(str, before, after) {
  if(/[A-Z]/.test(before.charAt(0))){
    after = after.replace(/^[a-z]/,(after.charAt(0)).toUpperCase());
  }
  else{
    after = after.replace(/^[A-Z]/,(after.charAt(0)).toLowerCase());
  }
  return str.split(before).join(after);
}
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));