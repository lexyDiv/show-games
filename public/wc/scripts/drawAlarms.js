/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const draw_alarms = function () {
  if (!player) {
    return;
  }

  for (let i = 0; i < player.radar_alarms.length; i++) {
    const obj = player.radar_alarms[i];

    if (!obj.timer && obj.list === 40) {
      player.radar_alarms.splice(i, 1);
      i--;
    }

    if (obj.timer) {
      obj.timer--;
    } else {
      obj.list++;
      obj.gabarit = 0;
      if (obj.list < 40) {
        obj.timer = 10;
      }
    }

    obj.alfa = obj.timer / 10;

    obj.gabarit = (gameFielg.length / 20) * (1 - obj.timer / 10);

    ctx3.globalAlpha = obj.alfa;
    ctx3.drawImage(
      obj.drawImage,
      0,
      0,
      100,
      100,
      obj.radarX - obj.gabarit / 2,
      obj.radarY - obj.gabarit / 2,
      obj.gabarit,
      obj.gabarit,
    );
    ctx3.globalAlpha = 1;
  }
};
