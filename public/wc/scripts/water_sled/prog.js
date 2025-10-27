/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Water_sled.prototype.prog = function (mySelf) {
  this.timer++;

  if (this.father.type !== 'turtle') {
    this.gabarit += 2;
  } else {
    this.gabarit += 1;
  }

  this.alf -= 0.015;

  if (this.timer % 3 === 0) {
    this.animY += 100;
    if (this.animY === 500) {
      this.animY = 0;
      this.animX += 100;
    }
  }

  if (this.timer === 60) {
    this.cell.water_sleds.splice(this.cell.water_sleds.indexOf(mySelf), 1);

    this.readyToOut = true;

    // console.log(this.alf);
  }
};
