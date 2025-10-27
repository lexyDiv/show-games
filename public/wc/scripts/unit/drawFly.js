/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.drawFly = function () {
  /// /////////////////////////////	SOUND

  if (sounds_fly.length + sounds_fight.length < 30) {
    if (this.tyuk) {
      const dis = get_distanse_on_lineyka(
        this.cell,
        100,
        gameFielg[centerDrawPoint.cellObj.vertikal][
          centerDrawPoint.cellObj.horizont
        ],
        50,
      );

      let volume = (450 - dis) / 450;

      // console.log(volume); pausa=1;
      if (volume < 0) {
        volume = 0;
      }

      select_sound_fight(this.cell.dragoon, 'fight', volume);

      this.tyuk = false;
    }

    // if(this.hp<=0){console.log(this.distroyTimer);};

    if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 29) {
      //

      this.dead_sound = true;

      const dis = get_distanse_on_lineyka(
        this.cell,
        50,
        gameFielg[centerDrawPoint.cellObj.vertikal][
          centerDrawPoint.cellObj.horizont
        ],
        50,
      );

      let volume = (450 - dis) / 450;

      // console.log(volume); pausa=1;
      if (volume < 0) {
        volume = 0;
      }

      select_sound_fight(this.cell.dragoon, 'dead', volume);
    }
  }
  /// ////////////////////////////////////

  this.myDraw = false;

  if (this.moveVektor === 'right') {
    // this.imageToDraw=peon;

    this.animX = 200;

    // if(this.gold){this.animX=100;};
  } else if (this.moveVektor === 'right_Down') {
    // this.imageToDraw=peon;

    this.animX = 300;

    // if(this.gold){this.animX=140;};
  } else if (this.moveVektor === 'down') {
    // this.imageToDraw=peon;

    this.animX = 400;

    // if(this.gold){this.animX=180;};
  } else if (this.moveVektor === 'down_Left') {
    // this.imageToDraw=peon2;

    this.animX = 500;

    // if(this.gold){this.animX=75;};
  } else if (this.moveVektor === 'left') {
    // this.imageToDraw=peon2;

    this.animX = 600;

    // if(this.gold){this.animX=115;};
  } else if (this.moveVektor === 'left_Up') {
    // this.imageToDraw=peon2;

    this.animX = 700;

    // if(this.gold){this.animX=150;};
  } else if (this.moveVektor === 'up') {
    // this.imageToDraw=peon;

    this.animX = 0;

    // if(this.gold){this.animX=30;};
  } else if (this.moveVektor === 'up_Right') {
    // this.imageToDraw=peon;

    this.animX = 100;

    // if(this.gold){this.animX=65;};
  }
  /// ///////////////////////////////////////
  if (!this.animDr) {
    this.animDr = 10000;
  }
  this.animDr--;

  if (
    (!this.iFight && !this.iStand && this.animDr % 4 === 0)
    || (this.iStand && this.animDr % 5 === 0)
  ) {
    this.animY += 100;

    if (this.animY >= 400) {
      this.animY = 0;
    }
  }

  if (this.fatherFraction.nation === 'orc') {
    if (this.iFight || this.stopTroll > 170) {
      this.animY = 400;
    }

    if (this.stopTroll === 170) {
      this.animY = 0;
    }
  } else {
    if (this.iDoTakt === 4) {
      this.animY = 400;
    } else if (this.iDoTakt === 5) {
      this.animY = 500;
    }
    if (this.iDoTakt >= 6) {
      this.animY = 600;
    }
  }

  //

  if (this.hp <= 0) {
    this.animY = 500 + this.dopAnim;

    // console.log(this.animY);
  }

  ctx.globalAlpha = 0.5;
  ctx.drawImage(
    dragoon_orc_shadow,
    this.animX,
    this.animY,
    100,
    100,
    this.x + removeX + 4,
    this.y + removeY - 50,
    100,
    100,
  );
  ctx.globalAlpha = 1;

  ctx.drawImage(
    this.imageToDraw,
    this.animX,
    this.animY,
    100,
    100,
    this.x + removeX - 17,
    this.y + removeY - 120,
    150,
    150,
  );

  if (this.nar) {
    ctx.drawImage(
      nar,
      0,
      0,
      100,
      100,
      this.x + removeX,
      this.y + removeY - 50,
      100,
      100,
    );
  }

  /*

        ctx.lineWidth=3;
        ctx.strokeStyle="violet";
    ctx.strokeRect(this.x+removeX,(this.y+removeY)-50,100,100);

    ctx.fillStyle="red";
    ctx.fillRect(this.damagePointX+removeX,(this.damagePointY+removeY),5,5);

    ctx.fillStyle="red";
    ctx.fillRect(this.cell.x+removeX,(this.cell.y+removeY),50,50);

    for(let i=0;i<this.way.length;i++){

        //console.log(this.way[i].x)

    ctx.fillStyle="red";
    ctx.fillRect(this.way[i].x+removeX,(this.way[i].y+removeY),50,50);

    };

        //console.log(this.way.length);
    // */

  /*
        ctx.lineWidth=3;
        ctx.strokeStyle="violet";
    ctx.strokeRect(this.x+removeX,(this.y+removeY)-50,100,100);

    ctx.fillStyle="red";
    ctx.fillRect(this.firePoint.x+removeX,(this.firePoint.y+removeY),5,5);
    */
};
