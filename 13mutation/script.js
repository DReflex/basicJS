function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    var str = arr[0].toLowerCase();
    var check = arr[1].toLowerCase();
    if(str.indexOf(check[i]) === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
