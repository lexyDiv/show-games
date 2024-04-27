/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const mem_prog_load = function () {
  if (!mem_hz) {
    return;
  }

  if (mem_hz.timer) {
    mem_hz.timer--;
  } else {
    const { ind } = mem_hz;

    for (let i = 0; i < mem[ind].length; i++) {
      const u = mem[ind][i];

      if (u.hp <= 0) {
        mem[ind].splice(i, 1);
      } else if (u.cell) {
        if (u.gabarit === 50) {
          player.selectUnits.push(u);
        } else if (u.fly) {
          player.selectDragons.push(u);
        } else if (u.sweeme) {
          player.selectIsSweem.push(u);
        } else if (u.unitStatus !== 'life') {
          player.selectBuildings.push(u);
        }

        // all_units.push(u);
      }
    }

    mem_hz = false;
  }
};
