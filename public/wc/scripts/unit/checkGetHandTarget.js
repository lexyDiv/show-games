/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkGetHandTarget = function () {
  if (this.type === 2 || this.type === 'rizar' || this.type === 'mag') {
    for (let i = 0; i < this.cell.iContaktWith.length; i++) {
      if (
        this.cell.iContaktWith[i].father.persolalNumber
        === this.handTarget.persolalNumber
      ) {
        return true;
      }
    }
  } else if (
    this.type === 3
    || this.type === 'ballista'
    || this.type === 'dragoon'
  ) {
    if (
      !this.handTarget.neitral
      && this.handTarget.fatherFraction.union !== this.fatherFraction.union
    ) {
      // zhivie vragy

      const a = this.handTarget.damagePointX - this.damagePointX;
      const b = this.handTarget.damagePointY - this.damagePointY;

      const c = Math.sqrt(a * a + b * b);

      // if(10-(this.cell.x+25)===10-this.cell.x+25){console.log("ok")};
      // console.log(c);

      if (c <= this.seeing) {
        return true;
      }
    } else if (
      this.handTarget.neitral
      || this.handTarget.fatherFraction.union === this.fatherFraction.union
    ) {
      // ne vragy

      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          this.cell.iContaktWith[i].father.persolalNumber
          === this.handTarget.persolalNumber
        ) {
          return true;
        }
      }
    }
  }

  return false;
};
