function chunkArrayInGroups(arr, size) {
  var array = [];
  for (var i = 0; i < arr.length; i += size) {
    array.push(arr.slice(i , i+size));
  }
  // Break it up.
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
