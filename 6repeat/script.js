
function repeatStringNumTimes(str, num) {
  // repeat after me
  console.log(num);
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(str);
    console.log(arr);
  }
  console.log(arr.join(""));
  return arr.join("");
}

repeatStringNumTimes("abc", 3);
