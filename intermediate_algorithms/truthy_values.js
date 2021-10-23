//check if the given predicate is truthy on all elements of a collection

function truthCheck(collection, pre) {
  for (let i = 0; i<collection.length; i++){
    if(collection[i].hasOwnProperty(pre)){
      if(Boolean(collection[i][pre]) == false){
        return false;
      }
    }
    else{
      return false;
    }  
  }
  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));//true
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));//false
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))//false