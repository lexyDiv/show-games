/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.drawSpecial = function () {
  this.myDraw = false;

  if (this.type === 1) {
    ctx.drawImage(
      tree_grunt,
      this.animX,
      this.animY,
      200,
      200,
      this.x + removeX - 25 + this.ranX,
      this.y + removeY - 25 + this.ranY,
      100,
      100,
    );
  }
};
