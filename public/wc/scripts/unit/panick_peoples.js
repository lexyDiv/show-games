/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.panick_peoples = function (target) {
  const cells = [];

  for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
    for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
      if (gameFielg[i] && gameFielg[i][k] && gameFielg[i][k].free) {
        cells.push(gameFielg[i][k]);
      }
    }
  }

  let max = [];

  for (let i = 0; i < cells.length; i++) {
    const a = cells[i].x + 25 - target.damagePointX;
    const b = cells[i].y + 25 - target.damagePointY;

    const c = Math.sqrt(a * a + b * b);

    if (!max.length || max[0] < c) {
      max = [c, cells[i]];
    }
  }

  if (max.length) {
    this.clickSave = new ClickSave(0, max[1]);

    if (!this.active) {
      this.fatherFraction.activeUnits.push(this.cell.unit);
      this.active = true;
    }
  }
};
