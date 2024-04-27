/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const get_map_gold = function (obj, ind) {
  if (level === 'castome_map_1') {
    if (ind === 0) {
      obj.gold = 500000;
    }
    if (ind === 1) {
      obj.gold = 500000;
    }
  } else if (level === 'castome_map_2') {
    obj.gold = 1000000;
  } else if (level === 1) {
    if (title.style === 'h' || title.style === 'orc') {
      if (ind === 0) {
        obj.gold = 5000;
      }
      if (ind === 1) {
        obj.gold = 5000;
      }
    }
  }
};

const get_map_oil = function (obj, ind) {
  if (level === 'castome_map_1' || level === 'castome_map_2') {
    if (ind === 0) {
      obj.oil = 10000;
    }
    if (ind === 1) {
      obj.oil = 10000;
    }
  }
};
