/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const click_to_iden_prog = function () {
  if (click_to_iden) {
    // console.log("ok");

    if (click_to_iden.timer) {
      click_to_iden.timer--;
    } else {
      if (
        !click_to_iden.active
          && click_to_iden.unit.cell
          && click_to_iden.unit.hp > 0
      ) {
        if (!click_to_iden.unit.fly && click_to_iden.unit.gabarit === 50) {
          player.selectUnits.push(click_to_iden.unit);
        } else if (
          !click_to_iden.unit.fly
            && click_to_iden.unit.gabarit === 100
        ) {
          player.selectIsSweem.push(click_to_iden.unit);
        } else {
          player.selectDragons.push(click_to_iden.unit);
        }
      } else if (
        click_to_iden.active
          && click_to_iden.unit.cell
          && click_to_iden.unit.hp > 0
      ) {
        const { vertikal } = click_to_iden.unit;
        const { horizont } = click_to_iden.unit;

        const units = [];

        for (let i = vertikal - 20; i < vertikal + 20; i++) {
          for (let k = horizont + 20; k > horizont - 20; k--) {
            if (gameFielg[i] && gameFielg[i][k]) {
              const cell = gameFielg[i][k];

              if (!click_to_iden.unit.fly) {
                if (
                  cell.unit
                    && !cell.unit.neitral
                    && cell.unit.fatherFraction.control === 'player'
                    && cell.unit.type === click_to_iden.unit.type
                    && cell.unit.unitStatus === 'life'
                    && cell.unit.cell
                    && cell.unit.hp > 0
                    && units.indexOf(cell.unit) === -1
                ) {
                  units.push(cell.unit);
                }
              } else if (
                cell.dragoon
                    && cell.dragoon.type === click_to_iden.unit.type
                    && cell.dragoon.fatherFraction.control === 'player'
                    && cell.dragoon.cell
                    && cell.dragoon.hp > 0
                    && units.indexOf(cell.dragoon) === -1
              ) {
                units.push(cell.dragoon);
              }
            }
          }
        }

        const mass = [];

        while (true) {
          let min = [];

          for (let i = 0; i < units.length; i++) {
            const u = units[i];

            const dis = get_distanse_on_lineyka(
              u.cell,
              u.gabarit,
              click_to_iden.unit.cell,
              click_to_iden.unit.gabarit,
            );

            if (!min.length || dis < min[0]) {
              min = [dis, u];
            }
          }

          if (min.length) {
            mass.push(min[1]);
            units.splice(units.indexOf(min[1]), 1);
          }

          if (!units.length || mass.length === 9) {
            break;
          }
        } // while

        if (!click_to_iden.unit.fly && click_to_iden.unit.gabarit === 50) {
          player.selectUnits = mass;
        } else if (
          !click_to_iden.unit.fly
            && click_to_iden.unit.gabarit === 100
        ) {
          player.selectIsSweem = mass;
        } else {
          player.selectDragons = mass;
        }
      }

      click_to_iden = false;
    }
  }
};
