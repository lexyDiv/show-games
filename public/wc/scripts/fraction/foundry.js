/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
Fraction.prototype.foundry = function () {
  if (this.myJoubeTimer_fou) {
    this.myJoubeTimer_fou--;
  }

  // console.log(this.myJoubeTimer_kuz)

  if (this.myJoubeTimer_fou === 0) {
    this.dopAttack_level++;
    this.dopAttack += 0.2;

    this.myJoube_fou = false;
    this.myJoubeTimer_fou = false;
  }
};
