/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const good_sea_build_cell = function (cell) {
  for (let i = cell.vertikal - 1; i <= cell.vertikal + 1; i++) {
    for (let k = cell.horizont - 1; k <= cell.horizont + 1; k++) {
      let obj;

      if (gameFielg[i] && gameFielg[i][k]) {
        obj = gameFielg[i][k];
      }

      if (
        obj
        && ((obj.type !== 'water' && !obj.free)
          || (obj.type === 'water' && (obj.unit || obj.vossalObj)))
      ) {
        return false;
      }
    }
  }

  return true;
};
