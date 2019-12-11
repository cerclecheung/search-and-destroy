"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let firstHalf = [];
  let secondHalf = [];
  if (array.length % 2 === 0) {
    firstHalf = array.slice(0, array.length / 2);
    secondHalf = array.slice(array.length / 2);
  } else {
    firstHalf = array.slice(0, (array.length + 1) / 2);
    secondHalf = array.slice((array.length + 1) / 2);
  }

  //////
  if (array.length > 1) {
    return binarySearch(firstHalf, target) || binarySearch(secondHalf, target);
  } else {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
