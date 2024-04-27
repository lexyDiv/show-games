/* eslint-disable func-names */
/* eslint-disable no-undef */

LandObj.prototype.drawTrups = function () {
  if (this.type === 'wood') {
    ctx.drawImage(
      this.imageToDrawTrup,
      this.animX,
      this.animY,
      200,
      200,
      this.x + removeX + this.ranX + this.ranGabX / 2,
      this.y + removeY - 60 + this.ranY + this.ranGabY / 2,
      40 + this.ranGabX,
      80 + this.ranGabY,
    );
  }
};
