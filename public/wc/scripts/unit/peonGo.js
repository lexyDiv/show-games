/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.peonGo = function (target) {
  /// /////////////////////////////////////////////////////////peon

  if (
    target.unitStatus === 'life'
      && target.type === 1
      && target.fatherFraction.union !== this.fatherFraction.union
      && target.cell
      && !target.way.length
      && target.stepTakt === 0
      && target.myJoube !== 'i build'
      && !target.isBlocked()
      && !target.clickSave
      && target.waitTime === 30
  ) {
    let max = [];

    for (let i = target.vertikal - 5; i <= target.vertikal + 5; i++) {
      for (let k = target.horizont - 5; k <= target.horizont + 5; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          const a = this.x - gameFielg[i][k].x;
          const b = this.y - gameFielg[i][k].y;

          const c = Math.sqrt(a * a + b * b);

          if (gameFielg[i][k].free && (!max.length || c > max[0])) {
            max = [c, gameFielg[i][k]];
          }
        }
      }
    }

    if (max.length) {
      target.clickSave = new ClickSave(0, max[1]);

      if (target.fatherFraction.activeUnits.indexOf(target) === -1) {
        target.fatherFraction.activeUnits.push(target);
      }

      // console.log("karaul");
    }

    // console.log("karaul");
  }

  /// /////////////////////////////////////////////////////////peon
};
