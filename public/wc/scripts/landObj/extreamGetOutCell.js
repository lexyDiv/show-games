/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

LandObj.prototype.extreamGetOutCell = function () {
  const free = [];

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      if (gameFielg[i][k].free) {
        free.push(gameFielg[i][k]);
      }
    }
  }

  let min = [];

  for (let i = 0; i < free.length; i++) {
    const a = free[i].x - this.x;
    const b = free[i].y - this.y;

    const c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, free[i]];
    }
  }

  return min[1];
};
