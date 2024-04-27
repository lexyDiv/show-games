/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const maps_txt_draw = function (dx, dy) {
  let map;

  for (let i = 0; i < all_maps.length; i++) {
    map = all_maps[i];
    // ctx3.drawImage(sp,0,50,200,50,360,350+31*i,160,31);
    map.x = 360;
    map.y = 350 + 31 * i;
    map.gabX = 160;
    map.gabY = 31;
    map.reserv = false;
  }

  all_maps[all_maps.indexOf(title.map)].reserv = true;

  /// ///////////////////////////////////////// prog

  let b = title.list_3.map_control;

  // b.scroller.y=dy;

  if (!selected && pausa_click && all_maps.length > 7) {
    let str;

    for (let i = 0; i < 2; i++) {
      if (!i) {
        str = b.click_up;

        if (
          !(
            dx < str.x
            || dx > str.x + str.gabX
            || dy < str.y
            || dy > str.y + str.gabY
          )
        ) {
          b.scroller.y -= 124 / (all_maps.length - 7);
        }
      } else {
        str = b.click_down;

        if (
          !(
            dx < str.x
            || dx > str.x + str.gabX
            || dy < str.y
            || dy > str.y + str.gabY
          )
        ) {
          b.scroller.y += 124 / (all_maps.length - 7);
        }
      }
    }
  }

  if (click_up) {
    b.scroller.fixY = false;
  }

  if (
    all_maps.length > 7
    && !selected
    && !(
      dx < b.scroller.x
      || dx > b.scroller.x + b.scroller.gabX
      || dy < b.scroller.y
      || dy > b.scroller.y + b.scroller.gabY
    )
  ) {
    selected = true;

    if (pausa_click) {
      b.scroller.fixY = dy - b.scroller.y;
    }

    // if(menu_long_click){scroller.y=dy};
  }

  if (b.scroller.fixY) {
    b.scroller.y = dy - b.scroller.fixY;
  }

  if (b.scroller.y < b.scroller.up_y) {
    b.scroller.y = b.scroller.up_y;
  } else if (b.scroller.y > b.scroller.down_y) {
    b.scroller.y = b.scroller.down_y;
  }

  remove_map_y = -(b.scroller.y - b.scroller.up_y) * b.scroller.koof_y;

  /// //////////////////////////

  // ctx3.fillStyle="green";
  // ctx3.fillRect(0,0,width,height);

  ctx3.globalAlpha = title.alfa_2;

  ctx3.drawImage(vert_pan, 0, 0, 14, 100, 520, 350, 28, 230);
  ctx3.globalAlpha = 1;

  let q;

  for (let i = 0; i < all_maps.length; i++) {
    map = all_maps[i];

    if (map.y + remove_map_y > 315 && map.y + remove_map_y < 565) {
      if (
        map.name
        && !selected
        && !b.scroller.fixY
        && !(
          dx < map.x
          || dx > map.x + map.gabX
          || dy < map.y + remove_map_y
          || dy > map.y + map.gabY + remove_map_y
        )
      ) {
        if (pausa_click) {
          title.map = map;
          title.re_subjects();
        }

        q = {
          x: map.x, y: map.y, gabX: map.gabX, gabY: map.gabY,
        };
      }

      ctx3.globalAlpha = title.alfa_2;
      ctx3.drawImage(
        sp,
        0,
        50,
        200,
        50,
        map.x,
        map.y + remove_map_y,
        map.gabX,
        map.gabY,
      );
      ctx3.globalAlpha = 1;

      if (map.name) {
        for (let i = 0; i < map.name.length; i++) {
          let ob = map.name[i];

          let imageToDraw; //= unit_menu_little_liters;

          imageToDraw = unit_menu_little_liters_3;

          let x = map.x + map.gabX / 2 - (map.name.length * 7) / 2;

          ctx3.globalAlpha = title.alfa_2;
          ctx3.drawImage(
            imageToDraw,
            menu_litera(ob),
            0,
            12,
            12,
            x + i * 7,
            map.y + remove_map_y + 10,
            10,
            12,
          );
          ctx3.globalAlpha = 1;
        }
      }

      if (!map.reserv) {
        ctx3.globalAlpha = 0.3;
        ctx3.fillStyle = 'black';
        ctx3.fillRect(map.x, map.y + remove_map_y, map.gabX, map.gabY);
        ctx3.globalAlpha = 1;
      }
    }
  }

  ctx3.globalAlpha = title.alfa_2;
  ctx3.drawImage(
    strel_down,
    0,
    0,
    10,
    10,
    b.click_down.x,
    b.click_down.y,
    b.click_down.gabX,
    b.click_down.gabY,
  );

  ctx3.drawImage(
    strel_up,
    0,
    0,
    10,
    10,
    b.click_up.x,
    b.click_up.y,
    b.click_up.gabX,
    b.click_up.gabY,
  );

  ctx3.drawImage(
    strel_point,
    0,
    0,
    10,
    10,
    b.scroller.x,
    b.scroller.y,
    b.scroller.gabX,
    b.scroller.gabY,
  );
  ctx3.globalAlpha = 1;

  if (q) {
    ctx3.globalAlpha = title.alfa_2;
    ctx3.strokeStyle = 'yellow';
    ctx3.strokeRect(q.x + 2, q.y + remove_map_y + 2, q.gabX - 4, q.gabY - 4);
    ctx3.globalAlpha = 1;
  }

  // remove_map_y-=0.3
  // ctx3.globalAlpha=1;
};
