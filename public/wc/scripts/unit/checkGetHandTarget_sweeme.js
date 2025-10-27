/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkGetHandTarget_sweeme = function () {
  const a = this.damagePointX - this.handTarget.damagePointX;
  const b = this.damagePointY - this.handTarget.damagePointY;

  const dis = Math.sqrt(a * a + b * b);

  if (dis <= this.seeing) {
    return true;
  }

  return false;
};
