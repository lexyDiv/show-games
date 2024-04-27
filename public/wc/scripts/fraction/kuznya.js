/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.kuznya = function () {
  if (this.myJoubeTimer_kuz) {
    this.myJoubeTimer_kuz--;
  }

  // console.log(this.myJoubeTimer_kuz)

  if (this.myJoubeTimer_kuz === 0) {
    if (this.myJoube_kuz === 'dopNoFlyPanzer_level') {
      this.dopNoFlyPanzer_level++;
      this.dopNoFlyPanzer += 0.2;
    } else if (this.myJoube_kuz === 'dopNoFlyAttack_level') {
      this.dopNoFlyAttack_level++;
      this.dopNoFlyAttack += 0.2;
    } else if (this.myJoube_kuz === 'dopBallista') {
      this.dopBallista_level++;
      this.dopBallista += 0.2;
    }

    this.myJoube_kuz = false;
    this.myJoubeTimer_kuz = false;
  }
};
