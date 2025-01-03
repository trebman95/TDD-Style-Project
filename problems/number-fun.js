function returnsThree() {
  let num = 3;
  return num;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError("Range Error! Needs to be between 1 to 1000000")
  }
  return 1 / n
}

try { //Allows the error message to only be displayed
  console.log(reciprocal(-1))
} catch (error) {
  console.error(error.message)
}

// console.log(5)
// console.log(reciprocal(-1))
// console.log(reciprocal(1000001))


module.exports = {
  returnsThree,
  reciprocal
};
