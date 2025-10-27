/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getFightVector = function (target) {
  const a = target.damagePointX - this.damagePointX;
  const b = target.damagePointY - this.damagePointY;

  let conor = ((Math.atan2(b, a) + (180 / 180) * Math.PI) / Math.PI) * 180;

  if (this.type === 'distroer') {
    conor += 90;
  }

  if (conor > 360) {
    conor -= 360;
  }

  let vector;

  if (conor >= 67.5 && conor < 112.5) {
    vector = 'up';
  } else if (conor >= 112.5 && conor < 157.5) {
    vector = 'up_Right';
  } else if (conor >= 157.5 && conor < 202.5) {
    vector = 'right';
  } else if (conor >= 202.5 && conor < 247.5) {
    vector = 'right_Down';
  } else if (conor >= 247.5 && conor < 292.5) {
    vector = 'down';
  } else if (conor >= 292.5 && conor < 337.5) {
    vector = 'down_Left';
  } else if ((conor >= 337.5 && conor <= 360) || (conor >= 0 && conor < 22.5)) {
    vector = 'left';
  } else if (conor >= 22.5 && conor < 67.5) {
    vector = 'left_Up';
  }

  // console.log(vector);

  return vector;
};
