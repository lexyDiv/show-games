/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const hp_graf = function (x, res, max) {
  const hp_proc = (res * 100) / max;

  const gabarit_x = (res * x) / max;

  let color;

  if (hp_proc > 70) {
    color = 'green';
  } else if (hp_proc > 40) {
    color = 'yellow';
  } else {
    color = 'red';
  }

  return { gabarit: gabarit_x, color, proc: hp_proc };
};
