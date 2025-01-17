"use strict";

// Complete this algo
const minJumps = arr => {
  let jumpCount = 1;
  const alteredArr = arr.map((ele, idx) => ele + idx);
  let currentIdx = 0;
  while (currentIdx < arr.length - 1) {
    let minIdx = currentIdx + 1;
    let maxIdx = alteredArr[currentIdx];
    if (maxIdx >= arr.length - 1) {
      return jumpCount;
    } else {
      const subArr = alteredArr.slice(minIdx, maxIdx + 1);
      let max = Math.max(...subArr);
      currentIdx = subArr.lastIndexOf(max) + minIdx;
      jumpCount++;
    }
  }
};

module.exports = minJumps;
