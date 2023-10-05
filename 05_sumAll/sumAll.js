const sumAll = function (no1, no2) {
  if (typeof no1 != "number" || typeof no2 != "number" || no1 < 0 || no2 < 0) {
    return "ERROR";
  } else {
    let min = 0;
    let max = 0;
    if (no1 >= no2) {
      min = no2;
      max = no1;
    } else {
      min = no1;
      max = no2;
    }

    let sum = 0;
    for (i = min; i <= max; i++) {
      sum = sum + i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
