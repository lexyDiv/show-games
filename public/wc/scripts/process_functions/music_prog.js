/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const music_prog = function () {
  if (music) {
    // console.log(music.melody.currentTime)

    if (music.pausa_command) {
      music.go_command = false;
    }

    if (music.melody.currentTime >= music.max || music.stop_command) {
      music.go_command = false;
      music.pausa_command = false;
    }

    if (!music.start && !pausa) {
      music.melody.volume = 1;
      music.melody.currentTime = music.min;
      music.melody.play();
      music.start = true;

      // console.log("go")
    }

    /// /////////////////////////////////////////////////////////////////

    if (music.go_command) {
      if (music.go_command === 1) {
        music.melody.play();
        music.go_command = 2;
      }

      if (music.melody.volume < 0.95) {
        music.melody.volume += 0.03;
      } else {
        music.melody.volume = 1;
        music.go_command = false;
      }
    }

    if (
      music.melody.volume >= 0.03
      && (music.melody.currentTime >= music.max
        || music.stop_command
        || music.pausa_command)
    ) {
      music.melody.volume -= 0.03;
    }

    if (
      music.melody.volume <= 0.3
      && (music.melody.currentTime >= music.max
        || music.stop_command
        || music.pausa_command)
    ) {
      music.melody.volume = 0;
      music.melody.pause();
      music.pausa_command = false;
    }

    // console.log(music.melody.currentTime)

    if (
      music.melody.volume === 0
      && (music.melody.currentTime >= music.max || music.stop_command)
    ) {
      music = false;
    }
  }
};
