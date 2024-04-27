/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const game_music_control = function () {
  if (
    player
    && !pausa
    && gameFielg.length
    && global_zanaves.go_to !== 'night'
  ) {
    if (!music) {
      if (player) {
        const ran = Math.floor(Math.random() * 5);

        const m = new Audio();
        m.src = `wc/music/${player.nation}/${String(ran + 1)}.mp3`;

        music = { melody: m, min: 0, max: game_musics_h[ran].max };
      }
    }
  }
};
