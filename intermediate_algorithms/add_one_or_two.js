/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.*/
//If either argument isn't a valid number, return undefined.

function addTogether(x,y) {
  if (arguments.length == 2){
   if (typeof(x)=="number" && typeof(y)=="number"){
    return x+y;
   }
  }
  else if (arguments.length ==1){
    if(typeof(x)=="number"){
      return function(y){
        if(typeof(y)=="number"){
          return x + y;
        }
      }
    }
  }
  return undefined
}

console.log(addTogether(2,3));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(3);
console.log(addTogether(2,"3"))