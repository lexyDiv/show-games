/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.check_and = function () {
  let result;

  if (level === 1) {
    if (title.style === 'orc') {
      let ok_1;
      let ok_2 = 0;

      for (let i = 0; i < this.baracks.length; i++) {
        if (this.baracks[i].iComplite && this.baracks[i].hp > 0) {
          ok_1 = true;
        }
      }

      for (let i = 0; i < this.farms.length; i++) {
        if (this.farms[i].iComplite && this.farms[i].hp > 0) {
          ok_2++;
        }
      }

      if (
        (!this.peoples.length && !this.buildings.length)
          || (this.gold < 400 && !this.batraks.length)
          || (!this.townHolls.length
            && (!this.batraks.length || this.gold < 1000 || this.wood < 1000))
      ) {
        result = 'loose';
      }

      if (ok_1 && ok_2 >= 4) {
        result = 'win';
      }
    } else {
      if (!this.peoples.length && !this.buildings.length) {
        result = 'loose';
      }

      if (ok_1 && ok_2 >= 4) {
        result = 'win';
      }
    }
  } else if (level === 2) {
  }

  if (result) {
    if (music) {
      music.stop_command = true;
    }

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 10;
    global_zanaves.go_to = 'night';
    global_zanaves.active = true;

    win_or_loose = result;

    title.active = true;
    title.list = 'and';
  }
};
