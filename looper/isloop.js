"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let counter = 1;
  let memo = {};
  let currentNode = linkedlist.getNthNode(counter);
  // for (let key in memo) {
  //   if (memo[key] === currentNode) {
  //     return true;
  //   } else {
  //     memo[counter] = currentNode;
  //     counter++;
  //   }
  // }
  while (currentNode) {
    for (let key in memo) {
      if (memo[key] === currentNode) {
        return true;
      } else {
        memo[counter] = currentNode;
        counter++;
      }
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
