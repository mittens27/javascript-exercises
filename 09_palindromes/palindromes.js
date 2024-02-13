const palindromes = function (str) {
  // convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // split the string into an array of characters, reverse the array, and join it back into a string
  var reversed = str.split("").reverse().join("");
  // return true if the reversed string is equal to the original, false otherwise
  return reversed === str;
};

// Do not edit below this line
module.exports = palindromes;
