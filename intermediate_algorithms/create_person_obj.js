//create/change personal data (first & last name)
var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];
  this.setFirstName = (first) => {
    firstName = first;
  };
  this.setLastName = (last) => {
    lastName = last;
  };
  this.setFullName = (firstAndLast) => {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + " " + lastName; 
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName("Haskell")
console.log(bob.getFullName())
bob.setFullName("Haskell Curry")
console.log(bob.getFullName())
