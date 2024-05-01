Unit.prototype.cleared_way_ground = function () {
    for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
      for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          gameFielg[i][k].unit &&
          gameFielg[i][k].unit.cell &&
          gameFielg[i][k].unit.gabarit === 50 &&
          !gameFielg[i][k].unit.sweeme &&
          !gameFielg[i][k].unit.neitral &&
          gameFielg[i][k].unit.fatherFraction.fraction ===
            this.fatherFraction.fraction &&
          !gameFielg[i][k].unit.active
        ) {
          let unit = gameFielg[i][k].unit;
  
          if (unit && this.cell.unit) {
            unit.ground_panick(this.cell.unit);
          }
        }
      }
    }
  };