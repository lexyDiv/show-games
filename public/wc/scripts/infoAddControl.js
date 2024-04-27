/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const infoAndControl = function (unitIndex) {
  /// / ochen syroe

  if (this.unitName === 'shahta') {
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.font = '50px Areal';
    ctx.fillStyle = 'red';

    ctx.fillText(this.unitName, 730, 100);

    ctx.font = '20px Areal';

    ctx.fillText(`gold : ${this.gold}`, 730, 160);
  } else if (this.unitStatus === 'life') {
    if (this.unitName === 'peon') {
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';
      ctx.font = '50px Areal';
      ctx.fillStyle = 'red';

      ctx.fillText(this.unitName, 730, 100);
    }
  }
};

LandObj.prototype.infoAndControl = infoAndControl;
Unit.prototype.infoAndControl = infoAndControl;
