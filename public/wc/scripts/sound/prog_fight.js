/* eslint-disable no-undef */
/* eslint-disable func-names */
Sound.prototype.prog_fight = function () {
  if (this.sound.currentTime >= this.out_time) {
    this.readyToOut = true;
    this.sound.pause();
  } else if (!this.start) {
    this.sound.play();
    this.start = true;

    if (this.start_time) {
      this.sound.currentTime = this.start_time;
    }
  }
};
