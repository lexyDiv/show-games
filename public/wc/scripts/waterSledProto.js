Water_sled.prototype.prog = function (mySelf, father) {
  this.timer++;

  if (this.father.type !== "turtle") {
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

    //console.log(this.alf);
  }
};

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
    this.gabarit
  );

  ctx.restore();
  //console.log(this.conor);
  ctx.globalAlpha = 1;
};
