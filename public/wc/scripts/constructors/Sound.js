/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const Sound = function (sound, start_time, out_time, unit, sound_type) {
  this.sound = sound;

  this.sound.currentTime = start_time;

  this.out_time = out_time;

  this.start = false;

  this.unit = unit;

  this.sound_type = sound_type;
};
