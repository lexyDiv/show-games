/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.draw_water = function () {
  this.myDraw = false;

  if (this.water) {
    // console.log("ok");pausa=1
    // console.log(this.gabarit); pausa=1;

    this.animTimer++;

    if (this.animTimer === 1000) {
      this.animTimer = 0;
    }

    this.animY = 0;
    let pribKoof = 3;
    let koof = 0.3;

    let dop_gab = 1;

    if (this.priboy_line) {
      this.animY = 100;
      pribKoof = 1;
      koof = 0.5;

      dop_gab = 1.5;
    }

    // ctx.globalAlpha=this.glblAlpha_2;
    // ctx.fillStyle="blue";
    // ctx.fillRect(this.x+10+removeX,this.y+10+removeY,30,30);

    if (this.vector) {
      this.gabarit += koof / pribKoof;
    } else {
      this.gabarit -= koof / 3;
    }

    // ocean

    const gabarit = this.gabarit * dop_gab;

    ctx.globalAlpha = this.glblAlpha_2;
    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      this.x - (gabarit - 50) / 2 + removeX,
      this.y - (gabarit - 50) / 2 + removeY,
      gabarit,
      gabarit,
    );
    ctx.glblAlpha = 1;

    ctx.globalAlpha = this.glblAlpha;
    ctx.drawImage(
      this.imageToDraw,
      this.animX_2,
      this.animY_2,
      100,
      100,
      this.x - (gabarit - 50) / 2 + removeX,
      this.y - (gabarit - 50) / 2 + removeY,
      gabarit,
      gabarit,
    );
    ctx.globalAlpha = 1;

    this.glblAlpha -= 0.01; // 05;

    if (this.glblAlpha <= 0.03) {
      this.glblAlpha = 1;

      this.animX_2 = this.animX;
      this.animY_2 = this.animY;

      this.animX = Math.floor(Math.random() * 8) * 100;
      this.animY = 0; // Math.floor(Math.random()*2)*100;

      // pausa=1;
    }

    this.glblAlpha_2 = 1 - this.glblAlpha;

    if (this.gabarit >= 85) {
      this.vector = 0;
    }

    if (this.gabarit <= 75) {
      this.vector = 1;
    }
    // console.log("water");

    if (this.oil) {
      this.oil.draw();
    }

    // return;
  } else if (this.water_line) {
    // pesok

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      this.x - 35 + removeX,
      this.y - 35 + removeY,
      120,
      120,
    );

    // ctx.drawImage(,0,0,100,100,(this.x+removeX)-25,(this.y+removeY)-25,100,100);
  }

  // ctx.strokeStyle="red";
  // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
};
