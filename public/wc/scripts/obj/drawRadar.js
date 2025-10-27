/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.drawRadar = function () {
  if (!this.drawGabaritRadar) {
    this.drawGabaritRadar = 130 / gameFielgMap.length;

    this.radarX = radar.x + this.horizont * this.drawGabaritRadar;
    this.radarY = radar.y + this.vertikal * this.drawGabaritRadar;
  }

  let unit = false;

  if (this.unit) {
    unit = this.unit;
  } else if (this.vossalObj) {
    unit = this.vossalObj;
  }

  if (this.dragoon) {
    unit = this.dragoon;
  }

  if (!unit) {
    if (this.water) {
      ctx2.fillStyle = '#18AFFF';

      // imageToDraw=ocean;
    } else {
      ctx2.fillStyle = '#7DB5A6';
    //  imageToDraw = sumexpe;
    }
  } else if (unit.unitName === 'wood') {
    ctx2.fillStyle = '#003f00';
    // imageToDraw = unit.imageToDraw;
  } else if (unit.unitName === 'shahta') {
    ctx2.fillStyle = '#D6BB3D';
  } else if (unit.type === 'stena') {
    ctx2.fillStyle = 'white';
  } else if (unit.type === 'gora') {
    ctx2.fillStyle = 'grey';
  } else if (!unit.neitral) {
    if (unit.fatherFraction.fraction === 'blackOrcs') {
      ctx2.fillStyle = '#0F0F0F';
      // imageToDraw=unit.imageToDraw
    } else if (unit.fatherFraction.fraction === 'redOrcs') {
      ctx2.fillStyle = '#DF434C';
      // imageToDraw=unit.imageToDraw
    } else if (unit.fatherFraction.fraction === 'lazurOrcs') {
      ctx2.fillStyle = '#00FFFF';
      // imageToDraw=unit.imageToDraw
    } else if (unit.fatherFraction.fraction === 'h_blue') {
      ctx2.fillStyle = 'blue';
      // imageToDraw=unit.imageToDraw
    }
  }

  if (this.oil) {
    ctx2.fillStyle = '#4B0082';

    ctx2.fillRect(
      this.radarX,
      this.radarY,
      this.drawGabaritRadar,
      this.drawGabaritRadar,
    );
  } else if (unit) {
    ctx2.fillRect(
      this.radarX,
      this.radarY,
      this.drawGabaritRadar,
      this.drawGabaritRadar,
    );
  } else {
    ctx2.drawImage(
      this.imageToDraw,
      40,
      40,
      10,
      10,
      this.radarX,
      this.radarY,
      this.drawGabaritRadar * 1.1,
      this.drawGabaritRadar * 1.1,
    );

    // ctx2.fillRect(this.radarX,this.radarY,this.drawGabaritRadar,this.drawGabaritRadar);
  }
};
