
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len =str.length;
  if (len > num) {
    console.log(str.substr(0, num)+ "...");
    return(str.substr(0, num) + "...");
  }
  return str;

}

truncateString("Peter Piper picked a peck of pickled peppers", 11)
