/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkGoodLandingCell = function (cell) {
  // console.log("ok");

  let ok_1 = true;

  let { vertikal } = cell;
  const { horizont } = cell;

  if (
    gameFielg[vertikal]
    && gameFielg[vertikal][horizont]
    && !gameFielg[vertikal - 1][horizont].water
    // ||
    //! gameFielg[vertikal-1][horizont+1].water
  ) {
    vertikal += 1;
  }

  for (let v = vertikal - 1; v <= vertikal; v++) {
    for (let h = horizont; h <= horizont + 1; h++) {
      if (
        !gameFielg[v]
        || !gameFielg[v][h]
        || !gameFielg[v][h].water
        || (gameFielg[v][h].unit
          && gameFielg[v][h].unit.cell.sea
          && gameFielg[v][h].unit.persolalNumber !== this.persolalNumber)
        || gameFielg[v][h].vossalObj
      ) {
        ok_1 = false;
      }
    }
  }

  return ok_1;
};
