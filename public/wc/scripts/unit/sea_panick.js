Unit.prototype.sea_panick = function (agressor, born_cell) {
    if (!agressor || !agressor.cell) {
      return;
    }
  
    let cells = [];
  
    for (let i = this.vertikal - 10; i <= this.vertikal + 10; i++) {
      for (let k = this.horizont - 10; k <= this.horizont + 10; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          this.good_cell_for_ship(gameFielg[i][k])
        ) {
          cells.push(gameFielg[i][k]);
        }
      }
    }
  
    let max = [];
  
    for (let i = 0; i < cells.length; i++) {
      let dis = get_distanse_on_lineyka(
        agressor.cell,
        agressor.gabarit,
        cells[i],
        100
      );
  
      if (!max.length || max[0] < dis) {
        max = [dis, cells[i]];
      }
    }
  
    if (max.length && this.cell) {
      //console.log("go");
  
      this.clickSave = new ClickSave(0, max[1]);
      this.born_cell = max[1];
  
      if (this.warrior) {
        this.ii_saveCell = this.born_cell;
      }
  
      if (!this.active) {
        this.fatherFraction.activeUnits.push(this.cell.unit);
        this.active = true;
      }
    }
  };