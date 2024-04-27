/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.alarm_mor_warriors = function () {
  for (let i = 0; i < this.baracks.length; i++) {
    if (
      this.gold >= 2000
        && this.wood >= 1000
        && this.oil >= 500
        && this.peoples.length < this.maxUnits
    ) {
      const barack = this.baracks[i];

      if (!barack.myJoubeTimer) {
        const ran = Math.floor(Math.random() * 3);

        if (!ran && this.canLuchnick) {
          barack.myJoubeTimer = myJoube_time('luchnik');
          barack.myJoube = 'luchnik';

          this.gold -= 500;
          this.wood -= 50;
        } else if (this.canRizar) {
          barack.myJoubeTimer = myJoube_time('rizar');
          barack.myJoube = 'rizar';

          this.gold -= 1000;
          this.wood -= 100;
        } else {
          barack.myJoubeTimer = myJoube_time('mechnick');
          barack.myJoube = 'mechnick';

          this.gold -= 600;
        }

        if (this.activeBuildings.indexOf(barack) === -1) {
          this.activeBuildings.push(barack);
        }
      }
    } else {
      break;
    }
  }
};
