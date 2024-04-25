/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.ii_panick = function () {
  for (let i = 0; i < this.inPanick.length; i++) {
    const u = this.inPanick[i];

    if (u.panick.timer === 100) {
      let max = [];

      for (let ver = u.vertikal - 5; ver <= u.vertikal + 5; ver++) {
        for (let hor = u.horizont - 5; hor <= u.horizont + 5; hor++) {
          if (
            gameFielg[ver]
              && gameFielg[ver][hor]
              && gameFielg[ver][hor].free
          ) {
            const a = u.panick.agressor.vertikal - ver;
            const b = u.panick.agressor.horizont - hor;

            const c = Math.sqrt(a * a + b * b);

            if (!max.length || c > max[0]) {
              max = [c, gameFielg[ver][hor]];
            }
          }
        }
      }

      if (max.length) {
        u.clickSave = new ClickSave(0, max[1]);
        if (u.fatherFraction.activeUnits.indexOf(u) === -1) {
          u.fatherFraction.activeUnits.push(u);
        }
      }

      u.panick.timer--;

      // console.log("u.horizont : "+u.horizont);
      // console.log("u.vertikal : "+u.vertikal);
      // console.log(max[1]);
    } else if (u.panick.timer) {
      u.panick.timer--;

      if (!u.panick.timer && u.hp > 0) {
        u.ii_saveCell = u.panick.startCell;
        if (u.fatherFraction.activeUnits.indexOf(u) === -1) {
          u.fatherFraction.activeUnits.push(u);
        }
      }
    }

    if (!u.panick.timer || u.target || u.handTarget || u.hp <= 0) {
      u.panick = false;

      this.inPanick.splice(i, 1);
      i--;
    }
  }
};
