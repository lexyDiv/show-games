/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const DragoonDamage = function (
  x,
  y,
  timer,
  dragoon,
  cell,
  vertikal,
  horizont,
) {
  this.x = x;
  this.y = y;

  this.horizont = horizont;
  this.vertikal = vertikal;

  this.timer = timer;
  this.dragoon = dragoon;
  this.cell = cell;

  this.animX = -100;
  this.animY = 0;
};
