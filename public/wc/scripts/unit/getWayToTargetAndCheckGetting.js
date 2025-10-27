/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getWayToTargetAndCheckGetting = function (arg) {
  if (this.target && this.cell) {
    const optimalContaktCell = this.getOptimalContaktCell();

    // console.log(this.target);
    this.finish = optimalContaktCell; // this.target.cell;
    this.sosFin = optimalContaktCell; // this.target.cell;

    if (!this.finish) {
      this.finish = this.target.cell;
      this.sosFin = this.target.cell;
    }

    this.potentialTarget = 0;
    this.potentialWay = [];

    getWay(arg, this.iSee, 10000, this.target);

    /// ////////////////////////////////////////////////////

    // console.log(this.potentialWay);

    if (this.way.length) {
      for (let i = 0; i < this.target.contaktCells.length; i++) {
        if (
          this.way[0].vertikal === this.target.contaktCells[i].vertikal
          && this.way[0].horizont === this.target.contaktCells[i].horizont
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
