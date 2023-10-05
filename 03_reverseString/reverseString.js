const reverseString = function (input) {
  let output = "";
  for (i = input.length - 1; i > -1; i--) {
    output = output + input[i];
  }
  return output.toString();
};

// Do not edit below this line
module.exports = reverseString;
