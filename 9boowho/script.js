function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  if (typeof(bool) === "boolean") {
    console.log("true");
    return true;
  }
  console.log("false");
  return false;
}

booWho(false);
