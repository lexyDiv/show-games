/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.cleared_way = function () {
  for (let i = this.vertikal - 6; i <= this.vertikal + 7; i++) {
    for (let k = this.horizont - 5; k <= this.horizont + 6; k++) {
      if (
        gameFielg[i]
        && gameFielg[i][k]
        && gameFielg[i][k].unit
        && gameFielg[i][k].unit.cell
        && gameFielg[i][k].unit.sweeme
        && !gameFielg[i][k].unit.neitral
        && gameFielg[i][k].unit.fatherFraction.fraction
          === this.fatherFraction.fraction
        && !gameFielg[i][k].unit.active
        && gameFielg[i][k].unit.unitStatus === 'life'
      ) {
        const { unit } = gameFielg[i][k];

        if (this.cell.unit) {
          unit.sea_panick(this.cell.unit, true);
        }
      }
    }
  }
};
