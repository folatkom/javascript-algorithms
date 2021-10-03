//this function checks if target is the ending of str
function confirmEnd(str,target){
  return RegExp(target+"$").test(str);
}

confirmEnd("America", "ca");
confirmEnd("Walking on water", "ca");