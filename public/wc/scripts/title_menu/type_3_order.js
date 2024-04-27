/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const type_3_order = function (key) {
  key.x = key.father.x;
  key.y = key.father.y + (1 + key.num) * key.father.gabY;
  key.gabX = key.father.gabX;
  key.gabY = key.father.gabY;
};
