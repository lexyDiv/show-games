/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const exit = function () {
  if (exit_timer) {
    exit_timer--;
  }

  if (global_zanaves.alfa === 1) {
    global_obnul();

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 0;
    global_zanaves.go_to = 'day';
    global_zanaves.active = true;

    title.list_3.castom_start = false;
    title.list = 1;
    title.active = true;

    title.list_3.timer = 0;
    title.list_3.imageToDraw = null;
    title.list_3.mapDraw = false;
    title.list_3.list = false;

    menu_kursor = false;
    start_game = false;
    pausa = 0;
    exit_timer = 0;
    ctx.clearRect(0, 0, width, height);
    ctx2.clearRect(0, 0, width, height);
    ctx3.clearRect(0, 0, width, height);
    // console.log("obnul");
  }
};
