const fastBulleSort = require('fast-bubble-sort');
const debug = require('debug');
const typescript = require('typescript');

// Test case for the bubbleSort function
function debugBubbleSort() {
  // Create an array with random numbers
  let arr = [34, 17, 23, 2, 89, 45, 67, 12, 99, 5];
  console.log("Original array:", arr);

  // Call the bubbleSort function
  let sortedArr = bubbleSort(arr);
  console.log("Sorted array:", sortedArr);

  // Verify the sorting result
  let isSorted = true;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] > sortedArr[i]) {
      isSorted = false;
      break;
    }
  }

  // Print a message based on whether the array is correctly sorted
  if (isSorted) {
    console.log("The bubbleSort function works correctly.");
  } else {
    console.log("The bubbleSort function does not work correctly.");
  }
}

module.exports = debugBubbleSort;
