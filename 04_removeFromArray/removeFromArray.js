function removeFromArray(array, ...args) {
  for (arg of args) {
    position = array.indexOf(arg);
    if (position != -1) {
      newArray = array.splice(position, 1);
    }
  }
  return array;
}

removeFromArray([1, 2, 3], 2, 2);

// Do not edit below this line
module.exports = removeFromArray;
