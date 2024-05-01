/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkGetTarget = function () {
  if (this.cell) {
    if (
      this.type === 1
      || this.type === 2
      || this.type === 'rizar'
      || this.type === 'mag'
    ) {
      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          this.cell.iContaktWith[i].father.persolalNumber
          === this.target.persolalNumber
        ) {
          this.moveVektor = this.cell.iContaktWith[i].moveVektor;

          return true;
        }
      }
    } else if (
      this.type === 3
      || this.type === 'ballista'
      || this.type === 'dragoon'
    ) {
      const a = this.target.damagePointX - this.damagePointX;
      const b = this.target.damagePointY - this.damagePointY;

      const c = Math.sqrt(a * a + b * b);

      if (c <= this.seeing) {
        return true;
      }
    }
  }

  return false;
};
