/* eslint-disable no-undef */
/* eslint-disable func-names */

Sound.prototype.prog = function () {
  if (this.sound.currentTime >= this.out_time) {
    this.readyToOut = true;
    this.sound.pause();

    if (this.sound_type !== 'tree_sound') {
      this.unit.voice = false;
    }
  } else if (!this.start) {
    this.sound.play();
    this.start = true;
  }
};
