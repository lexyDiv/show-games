/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const do_start_draw = function () {
  if (!timer_do_start && pausa_click) {
    // global_start=true;

    title.active = true;
  }

  ctx3.drawImage(
    do_global_start.imageToDraw,
    0,
    0,
    1000,
    800,
    0,
    0,
    width,
    height,
  );

  if (!timer_do_start && !do_global_start.click) {
    if (pausa_click && !do_global_start.click) {
      do_global_start.click = true;
    }

    if (do_global_start.in_string.alfa > 0.2) {
      do_global_start.in_string.alfa_start = true;
    }

    if (!do_global_start.in_string.alfa_vector) {
      do_global_start.in_string.alfa += 0.05;
    } else {
      do_global_start.in_string.alfa -= 0.02;
    }

    if (do_global_start.in_string.alfa_start) {
      if (do_global_start.in_string.alfa > 1) {
        do_global_start.in_string.alfa = 1;
        do_global_start.in_string.alfa_vector = 1;
      }
      if (do_global_start.in_string.alfa < 0.2) {
        do_global_start.in_string.alfa = 0.2;
        do_global_start.in_string.alfa_vector = 0;
      }
    }

    let i_0 = do_global_start.in_string.txt;

    for (let i = 0; i < i_0.length; i++) {
      let obj = i_0[i];

      let imageToDraw = do_global_start.imageToDraw_2;

      let x = 450 - (i_0.length * 20) / 2;

      ctx3.globalAlpha = do_global_start.in_string.alfa;
      ctx3.drawImage(
        imageToDraw,
        menu_litera(obj),
        0,
        12,
        12,
        x + i * 20,
        480,
        27,
        27,
      );
      ctx3.globalAlpha = 1;
    }
  }

  if (!global_zanaves.active || global_zanaves.go_to === 'night') {
    let step = 250;

    for (let k = 0; k < do_global_start.strings.length; k++) {
      let string = do_global_start.strings[k];

      step += 25;

      if (k === 1 || k === 2) {
        step += 10;
      }

      if (!string.timer) {
        // console.log(do_global_start.strings.length)
        string.alfa += string.alfa_step;
        if (string.alfa > 1) {
          string.alfa = 1;
        }

        let i_0 = string.txt;

        for (let i = 0; i < i_0.length; i++) {
          let obj = i_0[i];

          let imageToDraw = unit_menu_little_liters;

          let x = 450 - (i_0.length * 15) / 2;

          ctx3.globalAlpha = string.alfa;
          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 15,
            step,
            17,
            17,
          );
          ctx3.globalAlpha = 1;
        }
      } else {
        string.timer--;
      }
    }
  }
};
