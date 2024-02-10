const reverseString = function(string) {
    var stringArray = string.split("");
    var reverseArray = stringArray.reverse();
    var rejoinArray = reverseArray.join("");
    return rejoinArray;
};

// Do not edit below this line
module.exports = reverseString;
