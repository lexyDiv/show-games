/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.magick_ok = function (arg) {
  if (
    (arg.neitral || arg.fatherFraction.union === this.fatherFraction.union)
    && this.type === 'mag'
  ) {
    return false;
  }

  // console.log("dddd");

  if (this.magick === 'cure') {
    // console.log(arg.fatherFraction.fraction===this.fatherFraction.fraction);

    if (
      arg.unitStatus === 'life'
      && !arg.neitral
      && arg.gabarit === 50
      && arg.fatherFraction.fraction === this.fatherFraction.fraction
      && arg.cell
      && arg.hp > 0
      && arg.hp < arg.hpfull
      && arg.persolalNumber !== this.persolalNumber
    ) {
      // console.log("ok");
      return true;
    }
    return false;
  } if (this.magick === 'rage') {
    // console.log(arg.fatherFraction.fraction===this.fatherFraction.fraction);

    if (
      arg.unitStatus === 'life'
      && !arg.neitral
      && arg.warrior
      && arg.gabarit === 50
      && arg.fatherFraction.fraction === this.fatherFraction.fraction
      && arg.cell
      && arg.hp > 0
      && arg.persolalNumber !== this.persolalNumber
    ) {
      // console.log("ok");
      return true;
    }
    return false;
  } if (this.magick === 'tor') {
    if (arg.gabarit === 50 || arg.fly) {
      return false;
    } if (arg.gabarit > 50 && !arg.fly) {
      return true;
    }
  } else if (this.magick === 'z' || this.magick === 'nar') {
    if (arg.gabarit === 50 || arg.fly) {
      return true;
    } if (arg.gabarit > 50 && !arg.fly) {
      return false;
    }
  }
};
