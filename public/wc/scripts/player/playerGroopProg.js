/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const player_groop_prog = function (units) {
  in_unit_menu = true;

  groop_mem_unit = true;
  // unit_dop_menu=[];

  // unit_dop_menu=[]; i_0

  let y = 230;

  let x = 0;

  for (let i = 0; i < units.length; i++) {
    const obj = units[i];

    if (i === 3 || i === 6) {
      y += 60;
      x -= 150;
    }

    obj.groop_menu_animX = 730 + i * 50 + x;
    obj.groop_menu_animY = y;
  }

  const us = [];

  for (let i = 0; i < units.length; i++) {
    const unit = units[i];

    if (
      !pausa
        && obj.x >= unit.groop_menu_animX
        && obj.x <= unit.groop_menu_animX + 40
        && obj.y >= unit.groop_menu_animY
        && obj.y <= unit.groop_menu_animY + 40
    ) {
      unit.groop_menu_active = true;

      if (menu_click) {
        // console.log("ok");

        if (groop_mem && groop_mem.unit) {
          if (groop_mem.unit.persolalNumber === unit.persolalNumber) {
            const u = groop_mem.unit;

            groop_mem = { timer: 2, units: [] };

            for (let j = 0; j < all_units.length; j++) {
              if (u.type === all_units[j].type) {
                groop_mem.units.push(all_units[j]);
              }
            }

            player.selectUnits = [];
            player.selectDragons = [];
            player.selectBuildings = [];
            player.selectIsSweem = [];
            allUnits = [];
          }
        } else {
          groop_mem = { unit, timer: 10 };
        }

        menu_click = false;
        break;
      }
    }
  }

  // console.log(us); pausa=1

  if (us.length) {
    player.selectDragons = [];
    player.selectIsSweem = [];
    player.selectUnits = [];

    for (let j = 0; j < 9; j++) {
      if (!us.length) {
        break;
      }

      let min = [];

      for (let i = 0; i < us.length; i++) {
        const dis = get_distanse_on_lineyka(
          us[i].cell,
          us[i].gabarit,
          uu.cell,
          us[i].gabarit,
        );

        if (!min.length || min[0] > dis) {
          min = [dis, us[i]];
        }
      }

      if (min.length) {
        us.splice(us.indexOf(min[1]), 1);

        if (min[1].fly) {
          player.selectDragons.push(min[1]);
        } else if (min[1].sweeme) {
          player.selectIsSweem.push(min[1]);
        } else {
          player.selectUnits.push(min[1]);
        }
      }
    }
  }

  player_groop_draw(units);
};
