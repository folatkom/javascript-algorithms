/*Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1 5555555555
1 555-555-5555
1 (555)555-5555
1 (555) 555-5555

The area code is required. If the country code is provided, you must confirm that the country code is 1.*/

function telephoneCheck(str) {
  if ((/^1?[-\s]?(\d\d\d|\(\d\d\d\))[-\s]?\d\d\d[-\s]?\d\d\d\d$/).test(str)){
      return true;
    }
  return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 456 789 4444"))
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555)555-5555"));//false
console.log(telephoneCheck("(6054756961)"));//false
console.log(telephoneCheck("1 (555) 555-5555"))