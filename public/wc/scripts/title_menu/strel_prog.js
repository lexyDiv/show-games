/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const strel_prog = function (dx, dy) {
  kaskad_key = false;

  for (let i = 0; i < keys_strel.length; i++) {
    let punkt = keys_strel[i];

    if (
      punkt.type === "nation"
        && (orc.length + h.length === 0 || !positions.length)
        && !punkt.father.fraction
    ) {
      punkt.blue = true;
    } else if (
      punkt.type === "position"
        && !positions.length
        && punkt.father.fraction
    ) {
      punkt.blue = true;
    } else {
      punkt.blue = false;
    }

    if (
      !punkt.blue
        && !selected
        && !(
          dx < punkt.x - punkt.gabX / 2
          || dx > punkt.x + punkt.gabX / 2
          || dy < punkt.y - punkt.gabY / 2
          || dy > punkt.y + punkt.gabY / 2
        )
    ) {
      strel_q = {
        x: punkt.x - punkt.gabX / 2,
        y: punkt.y - punkt.gabY / 2,
        gabX: punkt.gabX,
        gabY: punkt.gabY,
      };
      selected = true;

      if ((menu_long_click && pausa_click) || punkt.long_click) {
        punkt.long_click = true;
        long_punkt = punkt;
      }
    }
    // else{punkt.long_click=false;long_punkt=false;};
  }
};
