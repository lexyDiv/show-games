/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

LandObj.prototype.player_pro_draw = function () {
  ctx.globalAlpha = 0.5;

  this.buildready = this.hpfull;

  if (this.type === 2) {
    ctx.drawImage(
      this.imageToDraw,
      0,
      0,
      100,
      100,
      this.x + removeX - 60,
      this.y + removeY - 125,
      this.pro_x,
      this.pro_y,
    );
  } else {
    this.draw();
  }

  ctx.globalAlpha = 1;

  if (mig_vector) {
    mig += 0.02;
  } else {
    mig -= 0.02;
  }

  if (mig >= 0.6) {
    mig_vector = 0;
  }
  if (mig <= 0.2) {
    mig_vector = 1;
  }

  ctx.globalAlpha = mig;

  for (let i = 0; i < cells_player_building_pro.length; i++) {
    if (cells_player_building_pro[i]) {
      const { x } = cells_player_building_pro[i];
      const { y } = cells_player_building_pro[i];

      ctx.fillStyle = 'red';
      ctx.fillRect(x + removeX, y + removeY, 50, 50);
    }
  }

  ctx.globalAlpha = 1;
};
