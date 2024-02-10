const sumAll = function(x, y) {

    // Check if x and y are integers and non-negative
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }

    // Find the minimum and maximum of x and y
    const min = Math.min(x, y);
    const max = Math.max(x, y);

    const numberOfTerms = max - min + 1;
    const sumOfAll = (numberOfTerms * (min + max)) / 2;
    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
