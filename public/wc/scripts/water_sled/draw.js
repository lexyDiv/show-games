/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Water_sled.prototype.draw = function () {
  ctx.globalAlpha = this.alf;

  ctx.save();
  ctx.translate(this.x + removeX, this.y + removeY);
  ctx.rotate(this.conor);

  ctx.drawImage(
    water_sled,
    this.animX,
    this.animY,
    100,
    100,
    -this.gabarit / 2,
    -this.gabarit / 2,
    this.gabarit,
    this.gabarit,
  );

  ctx.restore();
  // console.log(this.conor);
  ctx.globalAlpha = 1;
};
