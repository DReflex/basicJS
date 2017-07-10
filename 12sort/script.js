
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
