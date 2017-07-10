
function findLongestWord(str) {
  var split = str.split(" ");
  var num = 0;
  for(var i = 0; i < split.length; i++){
    var length = split[i].length;
    if(length > num){
      num = length;
    }
  }
  return num;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
