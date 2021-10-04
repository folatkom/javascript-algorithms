//truncate a string to num first letters and add "..." if num<str.length
function truncateString(str, num) {
  if(num<str.length){
    let truncatedStr = `${str.substr(0,num)}...`;
    return truncatedStr;
  }
  return str;
}
truncateString("I love pancakes with cream", 8);
truncateString("I love pancakes with cream", "I love pancakes with cream".length);