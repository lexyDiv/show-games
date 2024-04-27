/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.lesopilka = function () {
  if (this.myJoubeTimer_leso) {
    this.myJoubeTimer_leso--;
  }

  // console.log(this.myJoubeTimer_leso)

  if (this.myJoubeTimer_leso === 0) {
    if (this.myJoube_leso === 'dopFlySee_level') {
      this.dopFlySee_level++;
      this.dopFlySee += 50;
    } else if (this.myJoube_leso === 'dopFlyAttack_level') {
      this.dopFlyAttack_level++;
      this.dopFlyAttack += 0.2;
    }

    this.myJoube_leso = false;
    this.myJoubeTimer_leso = false;
  }
};
