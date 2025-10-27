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
      const cell_1 = gameFielg[this.vertikal - 1]
      && gameFielg[this.vertikal - 1][this.horizont];
      const cell_2 = gameFielg[this.vertikal]
      && gameFielg[this.vertikal][this.horizont - 1];

      if (
        (cell_1
          && cell_1.unit
          && cell_1.unit.cell
          && cell_1.unit.gabarit === 50
          && cell_1.unit.unitStatus
            === 'life'
          && cell_1.unit.hotCell.vertikal
            === this.vertikal
          && cell_1.unit.hotCell.horizont
            === this.horizont - 1)
        || (cell_2
          && cell_2.unit
          && cell_2.unit.cell
          && cell_2.unit.gabarit === 50
          && cell_2.unit.unitStatus
            === 'life'
          && cell_2.unit.hotCell.vertikal
            === this.vertikal - 1
          && cell_2.unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal - 1
      && this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      const cell_1 = gameFielg[this.vertikal - 1]
      && gameFielg[this.vertikal - 1][this.horizont];
      const cell_3 = gameFielg[this.vertikal] && gameFielg[this.vertikal][this.horizont + 1];

      if (
        (cell_1
          && cell_1.unit
          && cell_1.unit.cell
          && cell_1.unit.gabarit === 50
          && cell_1.unit.unitStatus
            === 'life'
          && cell_1.unit.hotCell.vertikal
            === this.vertikal
          && cell_1.unit.hotCell.horizont
            === this.horizont + 1)
        || (cell_3
          && cell_3.unit
          && cell_3.unit.cell
          && cell_3.unit.gabarit === 50
          && cell_3.unit.unitStatus
            === 'life'
          && cell_3.unit.hotCell.vertikal
            === this.vertikal - 1
          && cell_3.unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1
      && this.way[this.way.length - 1].horizont === this.horizont - 1
    ) {
      const cell_2 = gameFielg[this.vertikal]
      && gameFielg[this.vertikal][this.horizont - 1];
      const cell_4 = gameFielg[this.vertikal + 1]
      && gameFielg[this.vertikal + 1][this.horizont];

      if (
        (cell_2
          && cell_2.unit
          && cell_2.unit.cell
          && cell_2.unit.gabarit === 50
          && cell_2.unit.unitStatus
            === 'life'
          && cell_2.unit.hotCell.vertikal
            === this.vertikal + 1
          && cell_2.unit.hotCell.horizont
            === this.horizont)
        || (cell_4
          && cell_4.unit
          && cell_4.unit.cell
          && cell_4.unit.gabarit === 50
          && cell_4.unit.unitStatus
            === 'life'
          && cell_4.unit.hotCell.vertikal
            === this.vertikal
          && cell_4.unit.hotCell.horizont
            === this.horizont - 1)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1
      && this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      const cell_3 = gameFielg[this.vertikal] && gameFielg[this.vertikal][this.horizont + 1];
      const cell_4 = gameFielg[this.vertikal + 1]
      && gameFielg[this.vertikal + 1][this.horizont];

      if (
        (cell_4
          && cell_4.unit
          && cell_4.unit.cell
          && cell_4.unit.gabarit === 50
          && cell_4.unit.unitStatus
            === 'life'
          && cell_4.unit.hotCell.vertikal
            === this.vertikal
          && cell_4.unit.hotCell.horizont
            === this.horizont + 1)
        || (cell_3
          && cell_3.unit
          && cell_3.unit.cell
          && cell_3.unit.gabarit === 50
          && cell_3.unit.unitStatus
            === 'life'
          && cell_3.unit.hotCell.vertikal
            === this.vertikal + 1
          && cell_3.unit.hotCell.horizont
            === this.horizont)
      ) {
        return false;
      }
    }
  }

  return true;
};
