/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const click_key_prog = function () {
  if (click_key) {
    if (!click_key.key.use) {
      click_key.key.use = true;

      select_sound_fly(undefined, 'click', 1);

      click_key.key.timer = 5;

      click_key.key.mas = 0.95;
      click_key.key.click = true;
    } else if (click_key.key.mas < 1) {
      click_key.key.mas += 0.01;
    } else {
      click_key.base.ret = click_key.key.act;
      click_key.key.use = false;
      click_key = false;
    }
  }
};
