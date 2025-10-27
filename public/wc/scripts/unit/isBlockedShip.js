/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.isBlockedShip = function () {
  let block = 0;

  if (
    !gameFielg[this.vertikal]
    || !gameFielg[this.vertikal][this.horizont - 1]
    || !gameFielg[this.vertikal - 1][this.horizont - 1]
    || gameFielg[this.vertikal][this.horizont - 1].unit
    || gameFielg[this.vertikal][this.horizont - 1].vossalObj
    || gameFielg[this.vertikal - 1][this.horizont - 1].unit
    || gameFielg[this.vertikal - 1][this.horizont - 1].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal - 2]
    || !gameFielg[this.vertikal - 2][this.horizont]
    || !gameFielg[this.vertikal - 2][this.horizont + 1]
    || gameFielg[this.vertikal - 2][this.horizont].unit
    || gameFielg[this.vertikal - 2][this.horizont].vossalObj
    || gameFielg[this.vertikal - 2][this.horizont + 1].unit
    || gameFielg[this.vertikal - 2][this.horizont + 1].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal]
    || !gameFielg[this.vertikal][this.horizont + 2]
    || !gameFielg[this.vertikal - 1][this.horizont + 2]
    || gameFielg[this.vertikal][this.horizont + 2].unit
    || gameFielg[this.vertikal][this.horizont + 2].vossalObj
    || gameFielg[this.vertikal - 1][this.horizont + 2].unit
    || gameFielg[this.vertikal - 1][this.horizont + 2].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal + 1]
    || !gameFielg[this.vertikal + 1][this.horizont]
    || !gameFielg[this.vertikal + 1][this.horizont + 1]
    || gameFielg[this.vertikal + 1][this.horizont].unit
    || gameFielg[this.vertikal + 1][this.horizont].vossalObj
    || gameFielg[this.vertikal + 1][this.horizont + 1].unit
    || gameFielg[this.vertikal + 1][this.horizont + 1].vossalObj
  ) {
    block++;
  }

  if (block === 4) {
    return true;
  }

  return false;
};
