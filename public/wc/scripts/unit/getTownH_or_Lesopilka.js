/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getTownH_or_Lesopilka = function () {
  let min = [];

  for (let i = 0; i < this.fatherFraction.lesopilkas.length; i++) {
    const a = this.fatherFraction.lesopilkas[i].x - this.x;
    const b = this.fatherFraction.lesopilkas[i].y - this.y;

    const c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, this.fatherFraction.lesopilkas[i]];
    }
  }

  for (let i = 0; i < this.fatherFraction.townHolls.length; i++) {
    const a = this.fatherFraction.townHolls[i].x - this.x;
    const b = this.fatherFraction.townHolls[i].y - this.y;

    const c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, this.fatherFraction.townHolls[i]];
    }
  }

  if (min.length) {
    return min[1];
  }

  return 0;
};
