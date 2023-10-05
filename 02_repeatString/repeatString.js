const repeatString = function (word, times) {
  if (times > -1) {
    let sentence = "";
    for (i = 0; i < times; i++) {
      sentence = sentence + word;
    }
    return sentence;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
