/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.check_resurs = function () {
  if (this.woods_ok) {
    if (!this.resurs_timer) {
      let ok;

      for (
        let i = this.startPoint.vertikal - 100;
        i <= this.startPoint.vertikal + 100;
        i++
      ) {
        let brc;

        for (
          let k = this.startPoint.horizont - 100;
          k <= this.startPoint.horizont + 100;
          k++
        ) {
          if (
            gameFielg[i]
              && gameFielg[i][k]
              && gameFielg[i][k].unit
              && gameFielg[i][k].unit.type === 'wood'
              && gameFielg[i][k].unit.cell.continent === this.continent
          ) {
            ok = true;
            brc = true;
            break;
          }
        }

        if (brc) {
          break;
        }
      }

      if (!ok) {
        this.woods_ok = false;
      }
    }

    this.resurs_timer++;

    if (this.resurs_timer === 100) {
      this.resurs_timer = 0;
    }
  }
};
