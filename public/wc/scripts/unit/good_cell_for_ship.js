/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.good_cell_for_ship = function (cell) {
  for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
    for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
      let obj;

      // gameFielg[i][k];

      if (gameFielg[i] && gameFielg[i][k]) {
        obj = gameFielg[i][k];
      }

      if (
        obj
        && ((obj.unit && obj.unit.persolalNumber !== this.persolalNumber)
          || !obj.sea
          || obj.sea !== this.cell.sea
          || obj.vossalObj)
      ) {
        return false;
      }
    }
  }

  return true;
};
