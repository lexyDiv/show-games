/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const unit_menu = function () {
  // create_unit_dop_menu unit_menu_draw

  if (player) {
    ctx3.globalAlpha = 0.8;
    ctx3.drawImage(pan, 0, 0, 500, 100, 45, 0, 600, 25);
    ctx3.globalAlpha = 1;

    const dop = 30;

    ctx3.drawImage(unit_m, 0, 1300, 100, 100, 70 + dop, 3, 20, 20);

    lit = `:${String(player.gold)}`;

    for (let i = 0; i < lit.length; i++) {
      ctx3.drawImage(
        unit_menu_little_liters,
        menu_litera(lit[i]),
        0,
        12,
        12,
        92 + dop + i * 10,
        6,
        15,
        15,
      );
    }

    ctx3.drawImage(unit_m, 0, 1400, 100, 100, 210 + dop, 3, 20, 20);

    lit = `:${String(player.wood)}`;

    for (let i = 0; i < lit.length; i++) {
      ctx3.drawImage(
        unit_menu_little_liters,
        menu_litera(lit[i]),
        0,
        12,
        12,
        232 + dop + i * 10,
        6,
        15,
        15,
      );
    }

    ctx3.drawImage(unit_m, 0, 1500, 100, 100, 350 + dop, 3, 20, 20);

    lit = `:${String(player.oil)}`;

    for (let i = 0; i < lit.length; i++) {
      ctx3.drawImage(
        unit_menu_little_liters,
        menu_litera(lit[i]),
        0,
        12,
        12,
        372 + dop + i * 10,
        6,
        15,
        15,
      );
    }

    ctx3.drawImage(unit_m, 0, 1600, 100, 100, 490 + dop, 3, 20, 20);

    lit = `:${String(player.peoples.length)}/${String(player.maxUnits)}`;

    for (let i = 0; i < lit.length; i++) {
      ctx3.drawImage(
        unit_menu_little_liters,
        menu_litera(lit[i]),
        0,
        12,
        12,
        512 + dop + i * 10,
        6,
        15,
        15,
      );
    }
  }

  if (
    (player && player.selectUnits.length && player.selectUnits[0].drawQuatro)
    || (player
      && player.selectBuildings.length
      && player.selectBuildings[0].drawQuatro)
    || (player
      && player.selectDragons.length
      && player.selectDragons[0].drawQuatro)
    || (player
      && player.selectIsSweem.length
      && player.selectIsSweem[0].drawQuatro)
  ) {
    unit_menu_draw();
  } else {
    player.menu_unit = false;
    all_units_start = false;
  }
};
