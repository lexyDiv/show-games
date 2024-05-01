/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkValideFreeCell = function () {
  if (this.cell.iContaktWith.length && this.gabarit === 50) {
    // this.way[this.way.length-1].free

    if (
      this.way[this.way.length - 1].vertikal === this.vertikal - 1
      && this.way[this.way.length - 1].horizont === this.horizont - 1
    ) {
      if (
        (gameFielg[this.vertikal - 1]
          && gameFielg[this.vertikal - 1][this.horizont]
          && gameFielg[this.vertikal - 1][this.horizont].unit
          && gameFielg[this.vertikal - 1][this.horizont].unit.cell
          && gameFielg[this.vertikal - 1][this.horizont].unit.gabarit === 50
          && gameFielg[this.vertikal - 1][this.horizont].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.vertikal
            === this.vertikal
          && gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.horizont
            === this.horizont - 1)
        || (gameFielg[this.vertikal]
          && gameFielg[this.vertikal][this.horizont - 1]
          && gameFielg[this.vertikal][this.horizont - 1].unit
          && gameFielg[this.vertikal][this.horizont - 1].unit.cell
          && gameFielg[this.vertikal][this.horizont - 1].unit.gabarit === 50
          && gameFielg[this.vertikal][this.horizont - 1].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.vertikal
            === this.vertikal - 1
          && gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal - 1
      && this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      if (
        (gameFielg[this.vertikal - 1]
          && gameFielg[this.vertikal - 1][this.horizont]
          && gameFielg[this.vertikal - 1][this.horizont].unit
          && gameFielg[this.vertikal - 1][this.horizont].unit.cell
          && gameFielg[this.vertikal - 1][this.horizont].unit.gabarit === 50
          && gameFielg[this.vertikal - 1][this.horizont].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.vertikal
            === this.vertikal
          && gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.horizont
            === this.horizont + 1)
        || (gameFielg[this.vertikal]
          && gameFielg[this.vertikal][this.horizont + 1]
          && gameFielg[this.vertikal][this.horizont + 1].unit
          && gameFielg[this.vertikal][this.horizont + 1].unit.cell
          && gameFielg[this.vertikal][this.horizont + 1].unit.gabarit === 50
          && gameFielg[this.vertikal][this.horizont + 1].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.vertikal
            === this.vertikal - 1
          && gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1
      && this.way[this.way.length - 1].horizont === this.horizont - 1
    ) {
      if (
        (gameFielg[this.vertikal]
          && gameFielg[this.vertikal][this.horizont - 1]
          && gameFielg[this.vertikal][this.horizont - 1].unit
          && gameFielg[this.vertikal][this.horizont - 1].unit.cell
          && gameFielg[this.vertikal][this.horizont - 1].unit.gabarit === 50
          && gameFielg[this.vertikal][this.horizont - 1].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.vertikal
            === this.vertikal + 1
          && gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.horizont
            === this.horizont)
        || (gameFielg[this.vertikal + 1]
          && gameFielg[this.vertikal + 1][this.horizont]
          && gameFielg[this.vertikal + 1][this.horizont].unit
          && gameFielg[this.vertikal + 1][this.horizont].unit.cell
          && gameFielg[this.vertikal + 1][this.horizont].unit.gabarit === 50
          && gameFielg[this.vertikal + 1][this.horizont].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.vertikal
            === this.vertikal
          && gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.horizont
            === this.horizont - 1)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1
      && this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      if (
        (gameFielg[this.vertikal + 1]
          && gameFielg[this.vertikal + 1][this.horizont]
          && gameFielg[this.vertikal + 1][this.horizont].unit
          && gameFielg[this.vertikal + 1][this.horizont].unit.cell
          && gameFielg[this.vertikal + 1][this.horizont].unit.gabarit === 50
          && gameFielg[this.vertikal + 1][this.horizont].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.vertikal
            === this.vertikal
          && gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.horizont
            === this.horizont + 1)
        || (gameFielg[this.vertikal]
          && gameFielg[this.vertikal][this.horizont + 1]
          && gameFielg[this.vertikal][this.horizont + 1].unit
          && gameFielg[this.vertikal][this.horizont + 1].unit.cell
          && gameFielg[this.vertikal][this.horizont + 1].unit.gabarit === 50
          && gameFielg[this.vertikal][this.horizont + 1].unit.unitStatus
            === 'life'
          && gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.vertikal
            === this.vertikal + 1
          && gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    }
  }

  return true;
};
