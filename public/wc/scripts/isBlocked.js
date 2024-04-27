/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const isBlocked = function (arg) {
  for (let i = 0; i < this.contaktCells.length; i++) {
    if (
      gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .free
      || (arg
        && arg.horizont === this.contaktCells[i].horizont
        && arg.vertikal === this.contaktCells[i].vertikal)
    ) {
      return false;
    }
  }

  return true;
};

Unit.prototype.isBlocked = isBlocked;
LandObj.prototype.isBlocked = isBlocked;
