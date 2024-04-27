/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const infoGamePanel = function () {
  if (!drawPanel) {
    ctx.drawImage(panel, 0, 0, 200, 700, 700, 0, 200, 700);

    ctx.globalAlpha = 0.55;
    ctx.fillStyle = 'black';
    ctx.fillRect(700, 0, 200, 700);
    ctx.globalAlpha = 1;

    ctx.drawImage(ramka, 0, 0, 800, 800, 715, 35, 170, 170);

    // drawPanel=true;
  }

  radar.draw();

  if (!crateZoonMouse.active && player) {
    for (let i = 0; i < player.selectUnits.length; i++) {
      player.selectUnits[i].drawQuatro = true;

      // player.selectUnits[i].infoAndControl(i);
    }

    for (let i = 0; i < player.selectBuildings.length; i++) {
      player.selectBuildings[i].drawQuatro = true;

      // player.selectUnits[i].infoAndControl(i);
    }

    for (let i = 0; i < player.selectIsSweem.length; i++) {
      player.selectIsSweem[i].drawQuatro = true;

      // player.selectUnits[i].infoAndControl(i);
    }

    for (let i = 0; i < player.selectDragons.length; i++) {
      player.selectDragons[i].drawQuatro = true;

      // player.selectUnits[i].infoAndControl(i);
    }
  } else if (crateZoonMouse.active && player) {
    for (let i = 0; i < player.selectIsSweem.length; i++) {
      player.selectIsSweem[i].drawQuatro = false;

      // player.selectUnits[i].infoAndControl(i);
    }

    for (let i = 0; i < player.selectDragons.length; i++) {
      player.selectDragons[i].drawQuatro = false;

      // player.selectUnits[i].infoAndControl(i);
    }

    for (let i = 0; i < player.selectBuildings.length; i++) {
      player.selectBuildings[i].drawQuatro = false;

      // player.selectUnits[i].infoAndControl(i);
    }
  }

  unit_menu();
};
