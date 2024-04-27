/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const Axes = function (x, y, type, target, attack, father, conor, xy) {
  this.x = x;
  this.y = y;

  this.x2 = father.damagePointX;
  this.y2 = father.damagePointY;

  this.type = type;

  this.attack = attack;

  this.animX = 0;
  this.animY = 0;
  this.father = father;
  this.conor = conor;

  this.target = target;

  if (this.type === 'dragoonFire') {
    this.gabX = 150;
    this.gabY = 150;

    // this.dopGabX=25;
    // this.dopGabY=25;

    // this.xy_mass=[];
  } else if (this.type === 'strela_tower' || this.type === 'turtle') {
    this.gabX = 100;
    this.gabY = 100;

    // this.dopGabX=25;
    // this.dopGabY=25;

    // this.xy_mass=[];
  } else if (this.type === 'cannon_tower' || this.type === 'distroer_canon') {
    this.gabX = 30;
    this.gabY = 30;
    this.xy = xy;
    // this.cannonCell=cannonCell;

    this.stopTakt = false;
    this.animX = 0;
    this.animY = 0;

    this.animX_v = 0;
    this.animY_v = 0;
    // this.dopGabX=25;
    // this.dopGabY=25;

    // this.xy_mass=[];
  }
};
