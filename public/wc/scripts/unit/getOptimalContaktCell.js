/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getOptimalContaktCell = function () {
  let min = [];

  for (let i = 0; i < this.target.contaktCells.length; i++) {
    const a = this.target.contaktCells[i].x - this.x;
    const b = this.target.contaktCells[i].y - this.y;

    const c = Math.sqrt(a * a + b * b);

    if (
      (!min.length || c < min[0])
      && (gameFielg[this.target.contaktCells[i].vertikal][
        this.target.contaktCells[i].horizont
      ].free
        || this.type === 1)
    ) {
      min = [c, this.target.contaktCells[i]];
    }
  }

  if (min.length) {
    return gameFielg[min[1].vertikal][min[1].horizont];
  }
};
