"use strict";

//Complete this algo
const isLoop = linkedlist => {
  const getNode = counter => {
    let hareNode = linkedlist.getNthNode(counter);
    return hareNode;
  };
  let hareCounter = 1;
  let turtleCounter = 1;
  let hareVar = getNode(1); //give the hareVar some initial not falsey value
  let turtleVar;

  while (hareVar.next) {
    hareCounter++;

    hareVar = getNode(hareCounter);
    //for every 2 steps the hare goes, turtle gets one step
    if (hareCounter % 2 === 1) {
      turtleCounter++;
    }
    turtleVar = getNode(turtleCounter);

    if (hareVar === turtleVar) {
      return true;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
