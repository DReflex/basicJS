
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
for (var i = target.length;i !== 0;i--) {
    if (target[target.length -i] == str[str.length -i]) {
      console.log("true");
    }
    else{
        console.log("false");
      return false;

    }
}
return true;
}

confirmEnding("Bastian", "an");
