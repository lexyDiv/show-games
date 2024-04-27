/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const kaskad_prog = function (dx, dy) {
  let stop;

  for (let i = 0; i < keys_kaskad.length; i++) {
    let punkt = keys_kaskad[i];

    if (
      !selected
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

      if (
        long_punkt
          && (long_punkt.type === 's'
            || long_punkt.father.num === punkt.father.father.num)
      ) {
        kaskad_key = punkt;

        stop = true;
      }
    }
  }

  if (click_up && kaskad_key) {
    if (kaskad_key.father.type === 's') {
      season = kaskad_key.txt;
      kaskad_key.father.txt = season;
    } else if (kaskad_key.father.type === 'nation') {
      if (kaskad_key.txt !== 'None') {
        // console.log(kaskad_key.father.father.position);
        if (kaskad_key.father.father.fraction) {
          kaskad_key.father.father.fraction.reserv = false;
        }

        kaskad_key.father.father.fraction = kaskad_key.f;

        if (!kaskad_key.father.father.position) {
          kaskad_key.father.father.position = positions[0];
          positions[0].reserv = true;
        }
      } else {
        // console.log(kaskad_key.father.father.fraction);

        kaskad_key.father.father.fraction.reserv = false;
        kaskad_key.father.father.position.reserv = false;
        // console.log(kaskad_key.father.father.fraction.position);

        kaskad_key.father.father.position = false;
        kaskad_key.father.txt = 'None';
        kaskad_key.father.father.fraction = false;
        kaskad_key.father.father.union = '1';
      }
    } else if (kaskad_key.father.type === 'position') {
      kaskad_key.father.father.position.reserv = false;
      kaskad_key.father.father.position = kaskad_key.p;
      kaskad_key.father.father.position.reserv = true;
    } else if (kaskad_key.father.type === 'union') {
      kaskad_key.father.father.union = kaskad_key.txt;
    }

    kaskad_key = false;
  }

  return stop;
};
