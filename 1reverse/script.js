function reverseString(str) {
  var s = str.split('');
  var string = [];
  for(var i = s.length; i>=0; i--){
    string.push(s[i]);
  }
  string = string.join("");
  console.log(string);
  return string;
}

reverseString("hello");
