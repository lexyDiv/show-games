/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const removeControl = function () {
  // removeX

  const mass = [];

  // centerDrawPoint.horizont=centerDrawPoint.cellObj.horizont;
  // centerDrawPoint.vertikal=centerDrawPoint.cellObj.vertikal;

  const ver = Math.floor((cenY - removeY) / 50);
  const hor = Math.floor((cenX - removeX) / 50);

  centerDrawPoint.cellObj = gameFielg[ver][hor];

  /// ////////////////////////////////////////

  if (gameFielg[0][0].x + removeX < 0) {
    if (obj.x <= 0) {
      removeX += 25;
    }
  }

  if (gameFielg[0][gameFielgMas - 1].x + 50 + removeX > 50 * 14) {
    if (obj.x + 10 >= width) {
      removeX -= 25;
    }
  }

  // if(gameFielg[0][0].x+removeX>0){removeX-=(gameFielg[0][0].x); console.log(removeX);};

  if (
    gameFielg[0][0].y + removeY
    < 0 // ||gameFielg[0][139].x+50>50*14
  ) {
    if (obj.y <= 0) {
      removeY += 25;
    }
  }

  if (
    gameFielg[gameFielgMas - 1][gameFielgMas - 1].y + 50 + removeY
    > 50 * 14 // ||gameFielg[0][139].x+50>50*14
  ) {
    if (obj.y + 10 >= height) {
      removeY -= 25;
    }
  }

  // console.log(removeY);

  if (removeX > 0) {
    removeX = 0;
  } else if (Math.abs(removeX - 700) > gameFielg.length * 50) {
    removeX = -(gameFielg.length * 50 - 700);
  }

  if (removeY > 0) {
    removeY = 0;
  } else if (Math.abs(removeY - 700) > gameFielg.length * 50) {
    removeY = -(gameFielg.length * 50 - 700);
  }
};
