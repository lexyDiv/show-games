/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const global_zanaves_prog_draw = function () {
  // console.log(global_zanaves.go_to);

  if (global_zanaves.timer) {
    global_zanaves.timer--;
  } else if (global_zanaves.go_to === 'day') {
    global_zanaves.alfa -= global_zanaves.alfa_step;

    if (global_zanaves.alfa <= 0) {
      global_zanaves.alfa = 0;
      global_zanaves.active = false;
    }
  } else if (global_zanaves.go_to === 'night') {
    global_zanaves.alfa += global_zanaves.alfa_step;

    if (global_zanaves.alfa >= 1) {
      global_zanaves.alfa = 1;
      // global_zanaves.active=false;
    }
  }

  ctx3.globalAlpha = global_zanaves.alfa;
  ctx3.fillStyle = 'black';
  ctx3.fillRect(0, 0, width, height);
  ctx3.globalAlpha = 1;
};
