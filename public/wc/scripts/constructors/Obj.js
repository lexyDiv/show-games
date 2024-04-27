/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const Obj = function (type, vertikal, horizont, persolalNumber) {
  this.contact_map_cells = [];

  this.field = [];

  this.ii_fractions_way;
  this.ii_cells = [];

  /// ////////////////////////////// stopTownHoll

  this.ii_free = true;

  this.stopBuild = false;

  this.w_animX_1 = 0;
  this.w_animY_1 = 0;

  this.w_animX_2 = 0;
  this.w_animY_1 = 0;

  this.glblAlpha = (Math.random() * 70) / 100 + 0.3;
  this.glblAlpha_2 = 1 - this.glblAlpha;

  this.animTimer = 0;

  this.persolalNumber = persolalNumber;

  this.x = horizont * 50;
  this.y = vertikal * 50;

  this.vertikal = vertikal;
  this.horizont = horizont;

  this.free = true;

  this.h = 0;
  this.f = 0;
  this.g = 0;

  this.startFinish = [];

  this.type = type;

  this.unit = 0;
  this.pen = [];
  this.water_sleds = [];

  this.iContaktWith = [];
  this.contaktCells = [];

  this.dragoonDamages = [];

  if (this.type === 1) {
    // this.free=false;

    this.ranX = Math.floor(Math.random() * 25);
    this.ranY = Math.floor(Math.random() * 25);

    const ranX = Math.floor(Math.random() * 2);
    const ranY = Math.floor(Math.random() * 2);

    if (!ranX) {
      this.ranX = -this.ranX;
    }
    if (!ranY) {
      this.ranY = -this.ranY;
    }
  }

  this.animX = Math.floor(Math.random() * 12) * 100;
  // this.animY=Math.floor(Math.random()*4)*200;;
  this.animX_wl = Math.floor(Math.random() * 4) * 200;
  this.animY_w1 = Math.floor(Math.random() * 4) * 200;

  this.inUse = false;

  // if(this.type===20){

  this.way = [];

  this.vektors = [];

  // };
  this.vossalObj = 0;

  this.stopTownHoll = [];
};
