function reverseString(string) {
  let newArr = string.split('');

  try {
    newArr.reverse();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }


  return newArr.join('')
  // return string.split("").reverse().join("") // Alternate one-line return


};

let word = "fun"
console.log(reverseString(word)); // 'nuf'

module.exports = { reverseString }
