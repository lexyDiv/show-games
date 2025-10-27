/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkNextDragCell = function () {
  let nextCell_ok = 0;

  // let alienWay=[];

  if (this.way.length) {
    const { vertikal } = this.way[this.way.length - 1];
    const { horizont } = this.way[this.way.length - 1];

    for (let v = vertikal - 1; v <= vertikal; v++) {
      let brc;

      for (let h = horizont; h <= horizont + 1; h++) {
        if (
          gameFielg[v]
          && gameFielg[v][h]
          && (!gameFielg[v][h].dragoon
            || (gameFielg[v][h].dragoon
              && gameFielg[v][h].dragoon.persolalNumber === this.persolalNumber))
        ) {
          nextCell_ok++;
        } else {
          brc = true;
          break;
        }
      }

      if (brc) {
        break;
      }
    }
  }

  return nextCell_ok;
};
