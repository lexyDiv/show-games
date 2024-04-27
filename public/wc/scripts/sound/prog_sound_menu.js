/* eslint-disable no-undef */
/* eslint-disable func-names */

Sound.prototype.prog_sounds_menu = function () {
  // console.log(this.sound.currentTime)

  if (this.stop) {
    // console.log(true);

    if (this.sound.volume > 0.1) {
      this.sound.volume -= 0.02;
    } else {
      this.sound.volume = 0;

      this.readyToOut = true;
      this.sound.pause();
    }
  }

  if (this.sound.currentTime >= this.out_time) {
    this.readyToOut = true;
    this.sound.pause();
  }

  if (!this.start) {
    this.sound.play();
    this.start = true;
  }
};
