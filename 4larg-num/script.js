
function largestOfFour(arr) {
  // You can do this!
  //make room for result
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    //this result will reset each time j finish
    var reset = -100;
    var inner = arr[i];

    for (var j = 0; j < inner.length; j++) {
      if(inner[j] > reset){
        reset = inner[j];
      }
    }
    console.log(reset);
    result.push(reset);
  }
  console.log(result);
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
