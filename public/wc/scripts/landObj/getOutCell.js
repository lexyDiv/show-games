/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

LandObj.prototype.getOutCell = function () {
  const free = [];

  for (let i = 0; i < this.contaktCells.length; i++) {
    if (
      gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .free === true
      && !gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .timer
    ) {
      free.push(this.contaktCells[i]);
    }
  }

  let min = 0;

  for (let i = 0; i < free.length; i++) {
    if (!min || free[i].outPrioritet < min.outPrioritet) {
      min = free[i];
    }
  }

  // console.log(min.outPrioritet);

  return min;
};
