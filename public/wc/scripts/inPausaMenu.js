/* eslint-disable no-lonely-if */
/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const in_pausa_menu = function () {
  ctx3.lineWidth = 0.5;

  ctx3.fillStyle = 'black';
  ctx3.fillRect(758, 9, 84, 24);

  ctx3.drawImage(
    sp,
    0,
    0,
    200,
    50,
    in_game_menu_obj.x - in_game_menu_obj.gabX / 2,
    in_game_menu_obj.y - in_game_menu_obj.gabY / 2,
    in_game_menu_obj.gabX,
    in_game_menu_obj.gabY,
  );

  if (
    !win_or_loose
    && !pausa
    && !(
      obj.x < in_game_menu_obj.x - in_game_menu_obj.gabX / 2
      || obj.x > in_game_menu_obj.x + in_game_menu_obj.gabX / 2
      || obj.y < in_game_menu_obj.y - in_game_menu_obj.gabY / 2
      || obj.y > in_game_menu_obj.y + in_game_menu_obj.gabY / 2
    )
  ) {
    ctx3.strokeStyle = 'yellow';
    ctx3.strokeRect(
      in_game_menu_obj.x - in_game_menu_obj.gabX / 2,
      in_game_menu_obj.y - in_game_menu_obj.gabY / 2,
      in_game_menu_obj.gabX,
      in_game_menu_obj.gabY,
    );

    if (pausa_click && obj.x) {
      in_game_menu_obj.timer = 2;

      pausa = 1;

      in_pausa_menu_obj_in_create();
    }
  }

  if (in_game_menu_obj.timer) {
    if (in_game_menu_obj.timer > 0) {
      in_game_menu_obj.timer--;

      in_game_menu_obj.gabX -= 8;
      in_game_menu_obj.gabY -= 2;
    }
    // else{in_game_menu_obj.timer++;};
  } else {
    if (in_game_menu_obj.gabX < 80) {
      in_game_menu_obj.gabX += 8;
      in_game_menu_obj.gabY += 2;
    }
    // in_game_menu_obj.gabX=80;
    // in_game_menu_obj.gabY=20;
  }
};
