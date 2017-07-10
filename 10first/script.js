
function titleCase(str) {
  str = str.toLowerCase();
  var split = str.split(" ");
  console.log(split);
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  split = split.join(" ");
  console.log(split);
  return split;
}

titleCase("I'm a little tea pot");
