/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const restart_map_prog = function () {
  if (!restart_map) {
    return;
  }
  restart_map--;

  if (restart_map === 50) {
    global_obnul();

    if (!title.style) {
      fractionsCrate();
    } else {
      start_game = false;
    }
  }

  if (!restart_map) {
    pausa = 0;

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 1;
    global_zanaves.go_to = 'day';
    global_zanaves.active = true;

    if (title.style) {
      global_zanaves.alfa_step = 0.02;
      global_zanaves.timer = 50;
      global_zanaves.go_to = 'day';
      global_zanaves.active = true;

      title.active = true;
      title.list = 5;
      title.list_5.timer = 0;
    }
  }
};

function fractionsPush() {
  for (let i = 0; i < all_fractions.length; i++) {
    const fraction = all_fractions[i];

    if (fraction.nation === 'h') {
      h_fractions.push(fraction);
    } else {
      orc_fractions.push(fraction);
      // console.log("here")
    }
  }
}

fractionsPush();
