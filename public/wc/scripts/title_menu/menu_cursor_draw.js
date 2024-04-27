/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const menu_kursor_draw = function () {
  if (menu_kursor && title.active) {
    // console.log("ok");

    // human_cursor_ok

    ctx3.drawImage(
      human_cursor_ok,
      0,
      0,
      28,
      32,
      menu_kursor[0] - 3,
      menu_kursor[1],
      40,
      40,
    );

    // ctx3.fillStyle="red";
    // ctx3.fillRect(dx,dy,3,3);
  }
};
