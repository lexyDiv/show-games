Unit.prototype.ground_panick = function (agressor) {
    if (!agressor.cell) {
      return;
    }
  
    let cells = [];
  
    for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
      for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
        if (gameFielg[i] && gameFielg[i][k] && gameFielg[i][k].free) {
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
        50
      );
  
      if (!max.length || max[0] < dis) {
        max = [dis, cells[i]];
      }
    }
  
    if (max.length && this.cell) {
      this.clickSave = new ClickSave(0, max[1]);
  
      if (this.warrior) {
        //this.ii_saveCell=this.born_cell;
      }
  
      if (!this.active) {
        this.fatherFraction.activeUnits.push(this.cell.unit);
        this.active = true;
      }
    }
  };