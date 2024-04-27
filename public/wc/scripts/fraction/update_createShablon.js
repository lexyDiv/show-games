/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.update_createShablon = function () {
  if (this.ii_crash) {
    // console.log("here");

    // console.log(this.ii_crash.terpila.hp);

    if (
      this.ii_crash.terpila
        && this.ii_crash.terpila.unitStatus === 'building'
        && this.ii_crash.terpila.hp <= 300
        && this.towers.length < Math.floor(this.createShablon.towers.length) * 1.5
    ) {
      const { cell } = this.ii_crash.terpila;

      let min = [];

      const cells = [];

      for (let i = cell.vertikal - 8; i <= cell.vertikal + 8; i++) {
        for (let k = cell.horizont - 8; k <= cell.horizont + 8; k++) {
          let ok = 0;

          for (let v = i - 2; v <= i + 1; v++) {
            for (let h = k - 1; h <= k + 2; h++) {
              if (
                gameFielg[v]
                  && gameFielg[v][h]
                  && gameFielg[v][h].ii_free
                  && gameFielg[v][h].persolalNumber !== cell.persolalNumber
                  && !gameFielg[v][h].vossalObj
                  && !gameFielg[v][h].water_line
                  && gameFielg[v][h].continent === this.continent
                  // &&
                  // well_cell_for_building(gameFielg[i][k],100)
              ) {
                // cells.push(gameFielg[i][k]);
                ok++;
              }
            }
          }

          if (ok === 16) {
            cells.push(gameFielg[i][k]);
          }
        }
      }

      for (let i = 0; i < cells.length; i++) {
        const dis = get_distanse_on_lineyka(this.startPoint, 50, cells[i], 100);

        if (!min.length || min[0] > dis) {
          min = [dis, cells[i]];
        }
      }

      if (min.length) {
        const obj = min[1];

        this.ii_dop_towers.push(
          new SablonObj(obj.horizont, obj.vertikal, undefined, 'guard'),
        );
      }

      this.ii_crash = false;
    } // else{this.ii_crash=false;};
  }

  if (!this.alarmTimer) {
    this.ii_crash = false;
  }
};
