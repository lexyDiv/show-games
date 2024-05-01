Radar.prototype.draw = function () {
  if (!this.initialization) {
    //ctx2.strokeStyle="blue";
    //ctx2.strokeRect(this.x,this.y,this.gabarit,this.gabarit);

    //console.log("ok");

    for (let i = 0; i < gameFielg.length; i++) {
      for (let k = 0; k < gameFielg[i].length; k++) {
        //if(!i){console.log(gameFielg[i][k].radarY)};

        gameFielg[i][k].drawRadar();
      }
    }
  } else {
    this.drawGabaritRadar = gameFielg[0][0].drawGabaritRadar;

    for (let k = 0; k < gameFielg[this.tarration].length; k++) {
      //if(!i){console.log(gameFielg[i][k].radarY)};

      gameFielg[this.tarration][k].drawRadar();
    }

    this.tarration++;

    if (this.tarration === gameFielg.length) {
      this.tarration = 0;
    }

    let rX = -removeX / 15;
    let rY = -removeY / 15;

    let koof = 50 / 15;

    let gab = (700 * 130) / (gameFielg.length * 50);

    let r_x = radar.x + rX * (this.drawGabaritRadar / koof);
    let r_y = radar.y + rY * (this.drawGabaritRadar / koof);

    //console.log(rX)

    ctx3.strokeStyle = "violet";
    ctx3.strokeRect(r_x, r_y, gab, gab);

    //console.log(x)

    if (radar.move) {
      let r_x = obj.x - radar.x;
      let r_y = obj.y - radar.y;

      let gab = gameFielg[0][0].drawGabaritRadar;
      //drawGabaritRadar

      let reX = r_x / gab;
      let reY = r_y / gab;

      removeX =
        -(Math.floor(reX) * 50 - 350) + ((Math.floor(reX) * 50 - 350) % 15);
      removeY =
        -(Math.floor(reY) * 50 - 350) + ((Math.floor(reY) * 50 - 350) % 15);

      if (removeX > 0) {
        removeX = 0;
      } else if (Math.abs(removeX - 700) > gameFielg.length * 50) {
        removeX = -(gameFielg.length * 50 - 700);
      }

      if (removeY > 0) {
        removeY = 0;
      } else if (Math.abs(removeY - 700) > gameFielg.length * 50) {
        removeY = -(gameFielg.length * 50 - 700);
      }
    }
  }

  this.initialization = true;
};
