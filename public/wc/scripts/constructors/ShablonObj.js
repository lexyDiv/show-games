/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const SablonObj = function (horizont, vertikal, father, tower, cell) {
  this.horizont = horizont;
  this.vertikal = vertikal;

  this.x = horizont * 50;
  this.y = vertikal * 50;

  this.father = father;

  this.iBorn = false;
  this.cell = cell;
  this.tower = tower;
};
