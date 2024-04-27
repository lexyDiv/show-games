/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const activeFreeLandObjectsToProg = function () {
  for (let i = 0; i < activeFreeLandObjects.length; i++) {
    activeFreeLandObjects[i].prog(activeFreeLandObjects[i]);

    if (activeFreeLandObjects[i].readyToOut) {
      activeFreeLandObjects[i].readyToOut = false;

      activeFreeLandObjects.splice(i, 1);

      i--;
    }
  }
};
