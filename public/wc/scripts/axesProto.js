/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
Axes.prototype.draw = function () {
  if (this.type === 'ballista') {
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      if (!this.boo_draw && !this.boo && !this.inviz) {
        this.gabX = 80;
        this.gabY = 80;

        ctx.save();

        ctx.translate(this.x + removeX, this.y + removeY);

        ctx.rotate(this.conor);

        ctx.drawImage(
          b_s,
          0,
          0,
          100,
          100,
          -this.gabX,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(-2.5,-2.5,5,5);

        ctx.restore();
      } else {
        if (!this.s) {
          this.s = true;

          /// /////////////////////////////////////////////  SOUND
          if (sounds_fly.length + sounds_fight.length < 35) {
            const a = this.x
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].x;
            const b = this.y
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].y;

            const dis = Math.sqrt(a * a + b * b);

            let volume = (450 - dis) / 450;

            // console.log(volume); pausa=1;
            if (volume < 0) {
              volume = 0;
            }

            select_sound_fly(undefined, 'boo', volume);
          }
          /// ///////////////////////////////////////////////
        }

        ctx.drawImage(
          boo_ball,
          this.animX_v,
          this.animY_v,
          100,
          98,
          this.boo_point.x + removeX - 75,
          this.boo_point.y + removeY - 70,
          150,
          150,
        );

        // ctx.fillStyle="red";
        // ctx.fillRect(this.boo_point.x+removeX,this.boo_point.y+removeY,5,5);

        // console.log(this.animX_v);
        // pausa=1
      }
    }
  } else if (this.type === 'luk') {
    /*
  let dis=get_distanse_on_lineyka(this.cell,50,gameFielg[centerDrawPoint.cellObj.vertikal][centerDrawPoint.cellObj.horizont],50);

  let volume=(450-dis)/450;

  //console.log(volume); pausa=1;
  if(volume<0){volume=0;};

  select_sound_fight(this.cell.unit,"tree_sound",volume);
  */

    if (this.stopDraw) {
      this.stopDraw--;
    } else if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      /// /////////////////////////////////////////////  SOUND
      if (this.takt === 0 && sounds_fly.length + sounds_fight.length < 35) {
        const dis = get_distanse_on_lineyka(
          this.target.cell,
          this.target.gabarit,
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

        select_sound_fly(undefined, 'luk', volume);
      }
      /// ///////////////////////////////////////////////

      if (!this.stop) {
        const a = this.target.damagePointX - this.x;
        const b = this.target.damagePointY - this.y;

        const c = Math.sqrt(a * a + b * b);

        const a2 = this.target.damagePointX - this.father.damagePointX;
        const b2 = this.target.damagePointY - this.father.damagePointY;

        const c2 = Math.sqrt(a2 * a2 + b2 * b2);

        if (c < 25 && c2 > 100) {
          this.stop = true;
        }

        // console.log(c2);

        // if(this.x>=centerDrawPoint.cellObj.x-350&&this.x<centerDrawPoint.cellObj.x+350
        // &&this.y>=centerDrawPoint.cellObj.y-350&&this.y<centerDrawPoint.cellObj.y+350
        // &&!this.stop
        // ){

        // console.log(this.xy_mass.length)
        /// *

        // ctx.fillStyle="red";
        // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);

        // pausa=1;

        this.gabX = 50;
        this.gabY = 50;

        ctx.save();

        ctx.translate(this.x + removeX, this.y + removeY);

        ctx.rotate(this.conor);

        ctx.drawImage(
          elf_str,
          0,
          0,
          100,
          100,
          -this.gabX,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(-2.5,-2.5,5,5);

        ctx.restore();

        // pausa=1;

        // this.animX+=100;

        // if(this.animX===400){this.animX=0;};

        // };
      }
    }
  } else if (this.type === 'tor') {
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      ctx.drawImage(
        orc_tornado,
        this.animX,
        0,
        100,
        100,
        this.x + removeX - 8,
        this.y + removeY - 80,
        100,
        100,
      );

      this.animX += 100;

      if (this.animX >= 400) {
        this.animX = 0;
      }
    }
    // ctx.fillStyle="red";
    // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);
  } else if (this.type === 'z') {
    if (this.stopDraw) {
      this.stopDraw--;
    } else if (!this.dop) {
      const a = this.target.damagePointX - this.x;
      const b = this.target.damagePointY - this.y;

      const c = Math.sqrt(a * a + b * b);

      const a2 = this.target.damagePointX - this.father.damagePointX;
      const b2 = this.target.damagePointY - this.father.damagePointY;

      const c2 = Math.sqrt(a2 * a2 + b2 * b2);

      if (c < 25 && c2 > 100) {
        this.stop = true;
      }

      // console.log(c2);

      if (
        this.x >= centerDrawPoint.cellObj.x - 350
        && this.x < centerDrawPoint.cellObj.x + 350
        && this.y >= centerDrawPoint.cellObj.y - 350
        && this.y < centerDrawPoint.cellObj.y + 350
        && !this.stop
      ) {
        // console.log(this.xy_mass.length)
        /// *

        // ctx.fillStyle="red";
        // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);

        // console.log(this.animX); pausa=1;

        this.gabX = 100;
        this.gabY = 100;
        // pausa=1;
        // ctx.drawImage(orc_z,this.animX,0,100,100,this.x+removeX,this.y+removeY,100,100);

        ctx.save();

        ctx.translate(this.x + removeX, this.y + removeY);

        ctx.rotate(this.conor);

        ctx.drawImage(
          orc_z,
          this.animX,
          0,
          100,
          100,
          -this.gabX,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(-2.5,-2.5,5,5);

        ctx.restore();

        // pausa=1;

        // if(!this.dop){
        this.animX += 100;

        if (this.animX === 500) {
          this.animX = 0;
        }
        // };
      }
    } else {
      ctx.drawImage(
        orc_z,
        this.animX,
        0,
        100,
        100,
        this.x + removeX - this.gabX / 2,
        this.y + removeY - this.gabY / 2,
        this.gabX,
        this.gabY,
      );
    }
  } else if (this.type === 'dragoonFire') {
    // pausa=1
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      if (!this.boo_draw && !this.boo) {
        const koof = (this.takt * 50) / this.sT;

        this.gabX = 100 + koof;
        this.gabY = 100 + koof;

        // console.log(this.gabX)

        let imageToDraw = dragoonFire;

        if (this.father.fatherFraction.nation === 'h') {
          imageToDraw = gry_fire;
        }

        ctx.save();
        ctx.translate(this.x + removeX, this.y + removeY);
        ctx.rotate(this.conorAnim);

        ctx.drawImage(
          imageToDraw,
          this.animX,
          this.animY,
          100,
          100,
          -this.gabX / 5,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="black";
        // ctx.fillRect(-25,-25,50,50);

        // ctx.fillStyle="red";
        // ctx.fillRect(0,0,5,5);

        ctx.restore();

        // console.log(this.target);
        /*
  let a=this.target.damagePointX-this.father.damagePointX;
  let b=this.target.damagePointY-this.father.damagePointY;

  let c=Math.sqrt(a*a+b*b);

  this.x2+=Math.cos(this.conor)*(c/this.sT);
  this.y2+=Math.sin(this.conor)*(c/this.sT);

      //console.log(x)
      //console.log(this.father)
  ctx.fillStyle="blue";
  ctx.fillRect(this.x2+removeX,this.y2+removeY,5,5);
      */
        // pausa=1

        this.animY += 100;

        if (this.animY >= 400) {
          this.animY = 0;
        }
      }
    }
  } else if (this.type === 'orc_ballista') {
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      if (!this.boo_draw && !this.boo && !this.inviz) {
        ctx.drawImage(
          ballista_ball,
          this.animX,
          0,
          100,
          100,
          this.x + removeX - 28,
          this.y + removeY - 23,
          50,
          50,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);

        // pausa=1

        this.animX += 100;
        if (this.animX === 600) {
          this.animX = 0;
        }
      } else {
        if (!this.s && this.animY_v === 0) {
          this.s = true;

          /// /////////////////////////////////////////////  SOUND
          if (sounds_fly.length + sounds_fight.length < 35) {
            // console.log(this.takt); pausa=1

            const a = this.x
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].x;
            const b = this.y
              - gameFielg[centerDrawPoint.cellObj.vertikal][
                centerDrawPoint.cellObj.horizont
              ].y;

            const dis = Math.sqrt(a * a + b * b);

            let volume = (450 - dis) / 450;

            // console.log(volume); pausa=1;
            if (volume < 0) {
              volume = 0;
            }

            select_sound_fly(undefined, 'boo', volume);
          }
          /// ///////////////////////////////////////////////
        }

        // console.log(this.animY_v); pausa=1

        ctx.drawImage(
          boo_ball,
          this.animX_v,
          this.animY_v,
          100,
          98,
          this.boo_point.x + removeX - 75,
          this.boo_point.y + removeY - 70,
          150,
          150,
        );

        // ctx.fillStyle="red";
        // ctx.fillRect(this.boo_point.x+removeX,this.boo_point.y+removeY,5,5);

        // console.log(this.animX_v);
        // pausa=1
      }
    }
    // console.log(this.takt);
  } else if (this.type === 'cannon_tower' || this.type === 'distroer_canon') {
    // if(!this.gabX){this.gabX=30; this.gabY=30;};

    if (this.type === 'cannon_tower') {
      if (sounds_fly.length + sounds_fight.length < 35 && !this.b) {
        this.b = true;

        const a = this.x
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].x;
        const b = this.y
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].y;

        const dis = Math.sqrt(a * a + b * b);

        let volume = (450 - dis) / 450;

        // console.log(volume); pausa=1;
        if (volume < 0) {
          volume = 0;
        }

        select_sound_fly(undefined, 'cannon', volume);
      }
    }

    if (this.takt < 1000) {
      if (this.stopDraw) {
        this.stopDraw--;
      } else if (
        this.x >= centerDrawPoint.cellObj.x - 350
          && this.x < centerDrawPoint.cellObj.x + 350
          && this.y >= centerDrawPoint.cellObj.y - 350
          && this.y < centerDrawPoint.cellObj.y + 350
      ) {
        // pausa=1;
        // console.log(this.xy_mass.length)
        /// *

        if (this.takt > 1) {
          // console.log(this.gabX);

          ctx.drawImage(
            yadro,
            this.animX,
            this.animY,
            100,
            100,
            this.x + removeX - this.gabX / 2,
            this.y + removeY - this.gabY / 2,
            this.gabX,
            this.gabY,
          );

          // ctx.fillStyle="red";
          // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);
          this.animX += 100;

          if (this.animX === 300) {
            this.animX = 0;
          }

          // console.log("ksdgh")
        } else {
          ctx.drawImage(
            yadro_vzryv,
            this.animX_v,
            this.animY_v,
            100,
            100,
            this.xy.x + removeX - 67,
            this.xy.y + removeY - 62,
            150,
            150,
          );

          /// /////////////////////////////////////////////  SOUND
          if (sounds_fly.length + sounds_fight.length < 35 && !this.bbb) {
            this.bbb = true;

            const a = this.x
                - gameFielg[centerDrawPoint.cellObj.vertikal][
                  centerDrawPoint.cellObj.horizont
                ].x;
            const b = this.y
                - gameFielg[centerDrawPoint.cellObj.vertikal][
                  centerDrawPoint.cellObj.horizont
                ].y;

            const dis = Math.sqrt(a * a + b * b);

            let volume = (450 - dis) / 450;

            // console.log(volume); pausa=1;
            if (volume < 0) {
              volume = 0;
            }

            select_sound_fly(undefined, 'disboo', volume);
          }
          /// ///////////////////////////////////////////////
        }

        // ctx.fillStyle="blue";
        // ctx.fillRect(this.xy.x+removeX,this.xy.y+removeY,5,5);

        // pausa=1;

        // this.animX+=100;

        // if(this.animX===400){this.animX=0;};
      }
    }
  } else if (this.type === 'turtle') {
    if (this.stopDraw) {
      this.stopDraw--;
    } else {
      const a = this.target.damagePointX - this.x;
      const b = this.target.damagePointY - this.y;

      const c = Math.sqrt(a * a + b * b);

      const a2 = this.target.damagePointX - this.father.damagePointX;
      const b2 = this.target.damagePointY - this.father.damagePointY;

      const c2 = Math.sqrt(a2 * a2 + b2 * b2);

      if (c < 25 && c2 > 100) {
        this.stop = true;
      }

      // console.log(c2);

      if (
        this.x >= centerDrawPoint.cellObj.x - 350
        && this.x < centerDrawPoint.cellObj.x + 350
        && this.y >= centerDrawPoint.cellObj.y - 350
        && this.y < centerDrawPoint.cellObj.y + 350
        && !this.stop
      ) {
        // console.log(this.xy_mass.length)
        /// *

        // ctx.fillStyle="red";
        // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);

        // pausa=1;

        ctx.save();

        ctx.translate(this.x + removeX, this.y + removeY);

        ctx.rotate(this.conor);

        ctx.drawImage(
          turtle_m,
          this.animX,
          this.animY,
          100,
          100,
          -this.gabX,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(-2.5,-2.5,5,5);

        ctx.restore();

        // pausa=1;

        this.animX += 100;

        if (this.animX === 400) {
          this.animX = 0;
        }
      }
    }
  } else if (this.type === 'strela_tower') {
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
      && !this.stop
    ) {
      /// /////////////////////////////////////////////  SOUND
      if (
        this.takt <= 2
        && sounds_fly.length + sounds_fight.length < 35
        && !this.hit
      ) {
        this.hit = true;

        const a = this.x
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].x;
        const b = this.y
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].y;

        const dis = Math.sqrt(a * a + b * b);

        let volume = (450 - dis) / 450;

        // console.log(volume); pausa=1;
        if (volume < 0) {
          volume = 0;
        }

        select_sound_fly(undefined, 'hit', volume);
      }
      /// ///////////////////////////////////////////////

      /// /////////////////////////////////////////////  SOUND
      if (sounds_fly.length + sounds_fight.length < 35 && !this.start) {
        this.start = true;
        // console.log(this.takt); pausa=1

        const a = this.x
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].x;
        const b = this.y
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].y;

        const dis = Math.sqrt(a * a + b * b);

        let volume = (450 - dis) / 450;

        // console.log(volume); pausa=1;
        if (volume < 0) {
          volume = 0;
        }

        select_sound_fly(undefined, 'strela', volume);
      }
      /// ///////////////////////////////////////////////

      if (this.stopDraw) {
        this.stopDraw--;
      } else {
        const a = this.target.damagePointX - this.x;
        const b = this.target.damagePointY - this.y;

        const c = Math.sqrt(a * a + b * b);

        const a2 = this.target.damagePointX - this.father.damagePointX;
        const b2 = this.target.damagePointY - this.father.damagePointY;

        const c2 = Math.sqrt(a2 * a2 + b2 * b2);

        if (c < 25 && c2 > 100) {
          this.stop = true;
        }

        // console.log(c2);

        // console.log(this.xy_mass.length)
        /// *

        // ctx.fillStyle="red";
        // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);

        // pausa=1;

        ctx.save();

        ctx.translate(this.x + removeX, this.y + removeY);

        ctx.rotate(this.conor);

        ctx.drawImage(
          tower_strela,
          this.animX,
          this.animY,
          100,
          100,
          -this.gabX,
          -this.gabY / 2,
          this.gabX,
          this.gabY,
        );

        // ctx.fillStyle="blue";
        // ctx.fillRect(-2.5,-2.5,5,5);

        ctx.restore();

        // pausa=1;

        this.animX += 100;

        if (this.animX === 400) {
          this.animX = 0;
        }
      }
    }
  } else if (this.type === 'topor') {
    if (
      this.x >= centerDrawPoint.cellObj.x - 350
      && this.x < centerDrawPoint.cellObj.x + 350
      && this.y >= centerDrawPoint.cellObj.y - 350
      && this.y < centerDrawPoint.cellObj.y + 350
    ) {
      /// *
      /// /////////////////////////////////////////////  SOUND
      if (this.takt === 0 && sounds_fly.length + sounds_fight.length < 35) {
        const dis = get_distanse_on_lineyka(
          this.target.cell,
          this.target.gabarit,
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

        select_sound_fly(undefined, 'topor', volume);
      }
      /// ///////////////////////////////////////////////
      //* /

      // ctx.fillStyle="red";
      // ctx.fillRect(this.x+removeX,this.y+removeY,5,5);
      // console.log(this.x+removeX);
      // pausa=1;

      ctx.drawImage(
        trollAxe,
        this.animX,
        this.animY,
        100,
        100,
        this.x + removeX - 22,
        this.y + removeY - 22,
        45,
        45,
      );

      this.animX += 100;

      if (this.animX === 800) {
        this.animX = 0;
      }
    }
  }
};

Axes.prototype.prog = function () {
  if (this.type === 'tor') {
    this.vertikal = Math.floor(this.y / 50);
    this.horizont = Math.floor(this.x / 50);

    /*
  if(gameFielg[this.vertikal][this.horizont].dragoonDamages.indexOf(arg)===-1){gameFielg[this.vertikal][this.horizont].dragoonDamages.push(arg);};

  if(this.cells.indexOf(gameFielg[this.vertikal][this.horizont])===-1){this.cells.push(gameFielg[this.vertikal][this.horizont]);};

  for(let i=0;i<this.cells.length;i++){

  if(this.cells[i].persolalNumber!==gameFielg[this.vertikal][this.horizont].persolalNumber){
  this.cells[i].dragoonDamages.splice(this.cells[i].dragoonDamages.indexOf(arg),1);
  };

  };
  */

    if (this.life_timer % 50 === 0) {
      const x_ran = Math.floor(Math.random() * 2);
      const y_ran = Math.floor(Math.random() * 2);

      this.gSp = Math.random() * 0.7;
      this.vSp = Math.random() * 0.7;

      if (!x_ran) {
        this.gSp = -this.gSp;
      }
      if (!y_ran) {
        this.vSp = -this.vSp;
      }
    }

    if (this.x + this.gSp > 0 && this.x + this.gSp < gameFielg.length * 50) {
      this.x += this.gSp;
    }

    if (this.y + this.vSp > 0 && this.y + this.vSp < gameFielg.length * 50) {
      this.y += this.vSp;
    }

    if (this.life_timer % 10 === 0) {
      const objs = [];

      for (let i = this.vertikal - 2; i <= this.vertikal + 2; i++) {
        for (let k = this.horizont - 2; k <= this.horizont + 2; k++) {
          if (
            gameFielg[i]
            && gameFielg[i][k]
            && gameFielg[i][k].unit
            && gameFielg[i][k].unit.cell
            && !gameFielg[i][k].unit.neitral
            && gameFielg[i][k].unit.hp > 0
            && objs.indexOf(gameFielg[i][k].unit) === -1
          ) {
            objs.push(gameFielg[i][k].unit);

            let c;

            if (gameFielg[i][k].unit.unitStatus === 'life') {
              const { hp } = gameFielg[i][k].unit;

              if (!gameFielg[i][k].unit.active) {
                if (!gameFielg[i][k].unit.sweeme) {
                  gameFielg[i][k].unit.ground_panick(this.father);
                } else {
                  gameFielg[i][k].unit.sea_panick(this.father);
                }
              }

              let a; //= (gameFielg[i][k].unit.x+25)-(this.boo_point.x);
              let b; //= (gameFielg[i][k].unit.y+25)-(this.boo_point.y);

              if (gameFielg[i][k].unit.gabarit === 50) {
                a = gameFielg[i][k].unit.x + 25 - this.x;
                b = gameFielg[i][k].unit.y + 25 - this.y;
              } else if (gameFielg[i][k].unit.gabarit === 100) {
                a = gameFielg[i][k].unit.x + 50 - this.x;
                b = gameFielg[i][k].unit.y - this.y;
              }

              c = Math.sqrt(a * a + b * b);
              // console.log("life : "+c);

              if (c < 110) {
                // console.log(c);
                const attack = this.attack - c * (this.attack / 110);

                gameFielg[i][k].unit.hp
                  -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                // console.log("life att: "+attack)
                // indexOf
                if (!gameFielg[i][k].unit.active) {
                  gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                    gameFielg[i][k].unit,
                  );
                  gameFielg[i][k].unit.active = true;
                }

                /// /////////////////////
                if (title.style && hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                  this.father.fatherFraction.kills++;
                }

                /// ///////////////////////////
              }

              // console.log(c);
            } else if (gameFielg[i][k].unit.unitStatus === 'building') {
              let hp;

              const a = gameFielg[i][k].unit.damagePointX - this.x;
              const b = gameFielg[i][k].unit.damagePointY - this.y;

              c = Math.sqrt(a * a + b * b);

              // console.log(c);

              if (c < 110) {
                const attack = this.attack - c * (this.attack / 110);

                // console.log(" att: "+attack)

                if (
                  gameFielg[i][k].unit.buildready >= gameFielg[i][k].unit.hpfull
                ) {
                  hp = gameFielg[i][k].unit.hp;

                  gameFielg[i][k].unit.hp
                    -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                  /// /////////////////////
                  if (title.style && hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                    this.father.fatherFraction.kills++;
                  }

                  /// ///////////////////////////
                } else {
                  hp = gameFielg[i][k].unit.buildready;

                  gameFielg[i][k].unit.buildready
                    -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                  /// /////////////////////
                  if (
                    title.style
                    && hp > 0
                    && gameFielg[i][k].unit.buildready <= 0
                  ) {
                    this.father.fatherFraction.razings++;
                  }

                  /// ///////////////////////////
                }

                if (
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.indexOf(
                    gameFielg[i][k].unit,
                  ) === -1
                ) {
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.push(
                    gameFielg[i][k].unit,
                  );
                }

                if (!gameFielg[i][k].unit.alarmTimer) {
                  gameFielg[i][k].unit.alarmTimer = 500;
                  gameFielg[i][k].unit.agressor = this.father;
                }
              }
            }
          }
        }
      }
    }

    this.life_timer--;

    if (!this.life_timer) {
      this.readyToOut = true;
      /*
  for(let i=0;i<this.cells.length;i++){

  this.cells[i].dragoonDamages.splice(this.cells[i].dragoonDamages.indexOf(arg),1);

  };
  */
    }
  } else if (this.type === 'z') {
    /*
  if(!this.stopDraw){
  let a={x:this.x,y:this.y,gabX:this.gabX,gabY:this.gabY};

  this.xy_mass.unshift(a);

  if(this.xy_mass.length>=5){this.xy_mass.pop();};
  };
  */
    // console.log(this.x);

    if (this.dop) {
      // pausa=1;

      if (this.dop % 3 === 0) {
        // pausa=1;

        this.animX += 100;

        // console.log(this.animX);

        this.x = this.sx;
        this.y = this.sy;

        if (this.target.hp > 0 && this.target.cell) {
          const { hp } = this.target;

          this.x = this.target.x + 25;
          this.y = this.target.y + 25;

          this.target.hp -= 50;
          if (!this.target.active) {
            this.target.fatherFraction.activeUnits.push(this.target);
            this.target.active = true;
          }

          /// ///////////////
          if (title.style && hp > 0 && this.target.hp <= 0) {
            this.father.fatherFraction.kills++;
          }
          /// /////////////////
        }

        // if(this.target.unitStatus==="life"){
      }

      this.dop--;

      if (!this.dop) {
        this.takt = 0;
      }

      return;
    }

    this.x += this.gSp;
    this.y += this.vSp;

    this.takt--;

    // this.gabX-=this.dopGabKoof;
    // this.gabY-=this.dopGabKoof;

    if (this.takt === 0 && !this.dop && this.target.cell) {
      this.dop = 15;
      this.takt = 10;
      this.animX = 400;
      this.x = this.target.x + 25;
      this.y = this.target.y + 25;

      this.sx = this.target.x + 25;
      this.sy = this.target.y + 25;

      if (this.target.fly) {
        this.x = this.target.x + 50;
        this.y = this.target.y;

        this.sx = this.target.x + 50;
        this.sy = this.target.y;
      }

      // };
      // if(this.target.unitStatus==="building"){if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
    }
  } else if (this.type === 'distroer_canon') {
    /*
  if(!this.stopDraw){
  let a={x:this.x,y:this.y,gabX:this.gabX,gabY:this.gabY};

  this.xy_mass.unshift(a); cell

  if(this.xy_mass.length>=5){this.xy_mass.pop();};
  };

  gabX
  */

    if (this.takt < 1000) {
      if (this.takt > 1) {
        this.x += this.gSp;
        this.y += this.vSp;
      } else {
        this.x = this.xy.x;
        this.y = this.xy.y;

        this.animX_v += 100;

        if (this.animX_v === 800) {
          this.animX_v = 0;
          this.animY_v += 100;
        }
      }

      /// ////////////////////////////////
      if (!this.s_t) {
        this.s_t = this.takt;

        this.dopGabKoof = 50 / this.s_t;
      }

      if (!this.target.fly) {
        if (this.s_t > 10) {
          if (this.takt > this.s_t / 1.8) {
            this.gabX += 2; // this.dopGabKoof;
            this.gabY += 2; // this.dopGabKoof;
          } else {
            this.gabX -= 2; // this.dopGabKoof;
            this.gabY -= 2; // this.dopGabKoof;
          }
        }
      } else {
        this.gabX += this.dopGabKoof;
        this.gabY += this.dopGabKoof;
      }
      /// //////////////////////////////

      if (!this.stopTakt) {
        this.takt--;
      } else {
        this.stopTakt--;
      }

      // this.gabX-=this.dopGabKoof;
      // this.gabY-=this.dopGabKoof;

      if (this.takt === 1 && this.stopTakt === false) {
        this.stopTakt = 33;

        if (!this.target.fly) {
          //  if(this.target.hp>0&&this.target.cell){
          // this.target.hp-=this.attack-((this.attack*this.target.panzer)/100);

          // console.log(this.xy.x);

          const vertikal = Math.floor(this.xy.y / 50);
          const horizont = Math.floor(this.xy.x / 50);

          const bu = [];

          for (let i = vertikal - 2; i <= vertikal + 2; i++) {
            for (let k = horizont - 2; k <= horizont + 2; k++) {
              if (
                gameFielg[i]
                && gameFielg[i][k]
                && gameFielg[i][k].unit
                && !gameFielg[i][k].unit.neitral
                && gameFielg[i][k].unit.cell
                // gameFielg[i][k].unit.unitStatus!=="building"&&
                && gameFielg[i][k].unit.hp > 0
                && bu.indexOf(gameFielg[i][k].unit) === -1
              ) {
                bu.push(gameFielg[i][k].unit);

                let a; //= (gameFielg[i][k].unit.x+25)-(this.xy.x);
                let b; //= (gameFielg[i][k].unit.y+25)-(this.xy.y);

                if (
                  gameFielg[i][k].unit.gabarit === 50
                  || gameFielg[i][k].unit.gabarit === 150
                ) {
                  a = gameFielg[i][k].unit.x + 25 - this.xy.x;
                  b = gameFielg[i][k].unit.y + 25 - this.xy.y;
                } else if (gameFielg[i][k].unit.gabarit === 100) {
                  a = gameFielg[i][k].unit.x + 50 - this.xy.x;
                  b = gameFielg[i][k].unit.y - this.xy.y;
                }

                const c = Math.sqrt(a * a + b * b);

                if (c < 75) {
                  const attack = this.attack - c * (this.attack / 75);

                  // gameFielg[i][k].unit.hp-=attack-((attack*gameFielg[i][k].unit.panzer)/100);

                  if (
                    gameFielg[i][k].unit.unitStatus === 'life'
                    // &&
                    //! gameFielg[i][k].unit.active
                  ) {
                    const { hp } = gameFielg[i][k].unit;

                    if (!gameFielg[i][k].unit.active) {
                      if (!gameFielg[i][k].unit.sweeme) {
                        gameFielg[i][k].unit.ground_panick(this.father);
                      } else {
                        gameFielg[i][k].unit.sea_panick(this.father);
                      }
                    }

                    gameFielg[i][k].unit.hp
                      -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                    if (!gameFielg[i][k].unit.active) {
                      gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                        gameFielg[i][k].unit,
                      );
                      gameFielg[i][k].unit.active = true;
                    }

                    /// ///////////////////////
                    if (title.style) {
                      if (hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                        this.father.fatherFraction.kills++;
                      }
                    }

                    /// /////////////////////////
                  } else if (
                    gameFielg[i][k].unit.unitStatus === 'building'
                    && !gameFielg[i][k].unit.neitral
                    // &&
                    // gameFielg[i][k].unit.fatherFraction.activeBuildings.indexOf(gameFielg[i][k].unit)===-1
                  ) {
                    let hp;

                    if (
                      gameFielg[i][k].unit.buildready
                      >= gameFielg[i][k].unit.hpfull
                    ) {
                      hp = gameFielg[i][k].unit.hp;

                      gameFielg[i][k].unit.hp
                        -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                      /// ///////////////////////
                      if (
                        title.style
                        && hp > 0
                        && gameFielg[i][k].unit.hp <= 0
                      ) {
                        this.father.fatherFraction.razings++;
                      }
                      /// //////////////////////////
                    } else {
                      hp = gameFielg[i][k].unit.buildready;

                      gameFielg[i][k].unit.buildready
                        -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                      /// ///////////////////////
                      if (
                        title.style
                        && hp > 0
                        && gameFielg[i][k].unit.buildready <= 0
                      ) {
                        this.father.fatherFraction.razings++;
                      }
                      /// //////////////////////////
                    }

                    if (
                      gameFielg[i][
                        k
                      ].unit.fatherFraction.activeBuildings.indexOf(
                        gameFielg[i][k].unit,
                      ) === -1
                    ) {
                      gameFielg[i][k].unit.fatherFraction.activeBuildings.push(
                        gameFielg[i][k].unit,
                      );
                    }
                  }

                  // indexOf
                }

                // console.log(c);
              }
            }
          }

          if (
            !this.boo
            && gameFielg[vertikal]
            && gameFielg[vertikal][horizont]
            && !gameFielg[vertikal][horizont].water
          ) {
            // type,horizont,vertikal,speed,fraction

            // console.log(horizont);

            this.boo = new Unit('boo');

            this.boo.x = this.x;
            this.boo.y = this.y;
            this.boo.horizont = horizont;
            this.boo.vertikal = vertikal;
            this.boo.alpf = 1;

            gameFielg[vertikal][horizont].pen.unshift(this.boo);
          }
        } else {
          const { hp } = this.target;

          this.target.hp
            -= this.attack - (this.attack * this.target.panzer) / 100;

          // console.log("okokokok");
          this.readyToOut = true;

          /// ///////////////////////
          if (title.style && hp > 0 && this.target.hp <= 0) {
            this.father.fatherFraction.kills++;
          }
          /// //////////////////////////
        }
      } // 000
    } else {
      this.takt--;

      if (this.takt <= 1100 && this.boo) {
        this.boo.alpf -= 0.01;
      }

      if (this.takt === 1001) {
        // console.log(this.takt);
        this.readyToOut = true;

        if (this.boo) {
          gameFielg[this.boo.vertikal][this.boo.horizont].pen.splice(
            gameFielg[this.boo.vertikal][this.boo.horizont].pen.indexOf(
              this.boo,
            ),
            1,
          );
        }

        // console.log("okokokokokok");
      }
    }

    /// /////////////////////////////////////

    if (this.takt === 0) {
      this.takt = 2000;
    }

    /// ///////////////////////////////////

    // if(this.target.unitStatus==="life"){if(this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
    // if(this.target.unitStatus==="building"){if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};

    // console.log("ok");
  } else if (this.type === 'dragoonFire') {
    // pausa=1

    this.x += this.gSp;
    this.y += this.vSp;

    if (!this.sT) {
      this.sT = this.takt;
    }

    if (this.takt) {
      this.takt--;
    }

    if (!this.takt) {
      // pausa=1;

      // let vertikal=Math.floor(this.boo_point.y/50);
      // let horizont=Math.floor(this.boo_point.x/50);

      // this.x2+=Math.cos(this.conor)*(c/this.sT);
      // this.y2+=Math.sin(this.conor)*(c/this.sT);
      // (x,y,timer,dragoon,cell)

      // console.log(this.sT)

      // console.log(this.father.conor)

      for (let i = -2; i < 5; i++) {
        const x = this.boo_point.x + Math.cos(this.conor) * (i * 50);
        const y = this.boo_point.y + Math.sin(this.conor) * (i * 50);

        const vertikal = Math.floor(y / 50);
        const horizont = Math.floor(x / 50);

        if (gameFielg[vertikal] && gameFielg[vertikal][horizont]) {
          const obj = new DragoonDamage(
            x,
            y,
            60 + Math.abs(i * 15),
            this.father,
            gameFielg[vertikal][horizont],
            vertikal,
            horizont,
          );

          gameFielg[vertikal][horizont].dragoonDamages.push(obj);

          dragoonDamages.push(obj);
        }
      }

      // pausa=1
      this.readyToOut = true;
    }
  } else if (this.type === 'orc_ballista' || this.type === 'ballista') {
    // indexOf
    // let axe=new Axes(this.firePoint.x,this.firePoint.y,"orc_ballista",undefined,this.attack,this.cell.unit,conor);

    if (this.inviz) {
      this.inviz--;
    }

    if (this.takt) {
      this.takt--;
    }

    if (!this.takt) {
      if (!this.boo) {
        const vertikal = Math.floor(this.boo_point.y / 50);
        const horizont = Math.floor(this.boo_point.x / 50);

        const bu = [];

        for (let i = vertikal - 3; i <= vertikal + 3; i++) {
          for (let k = horizont - 3; k <= horizont + 3; k++) {
            if (
              gameFielg[i]
              && gameFielg[i][k]
              && gameFielg[i][k].unit
              && gameFielg[i][k].unit.cell
              && gameFielg[i][k].unit.persolalNumber
                !== this.father.persolalNumber
              && bu.indexOf(gameFielg[i][k].unit) === -1
              && ((gameFielg[i][k].unit.unitStatus === 'life'
                && gameFielg[i][k].unit.hp > 0)
                || (gameFielg[i][k].unit.unitStatus === 'building'
                  && !gameFielg[i][k].unit.neitral
                  && gameFielg[i][k].unit.hp > 0
                  && gameFielg[i][k].unit.buildready > 0))
            ) {
              bu.push(gameFielg[i][k].unit);

              let c;

              if (gameFielg[i][k].unit.unitStatus === 'life') {
                const { hp } = gameFielg[i][k].unit;

                if (!gameFielg[i][k].unit.active) {
                  if (!gameFielg[i][k].unit.sweeme) {
                    gameFielg[i][k].unit.ground_panick(this.father);
                  } else {
                    gameFielg[i][k].unit.sea_panick(this.father);
                  }
                }

                let a; //= (gameFielg[i][k].unit.x+25)-(this.boo_point.x);
                let b; //= (gameFielg[i][k].unit.y+25)-(this.boo_point.y);

                if (gameFielg[i][k].unit.gabarit === 50) {
                  a = gameFielg[i][k].unit.x + 25 - this.boo_point.x;
                  b = gameFielg[i][k].unit.y + 25 - this.boo_point.y;
                } else if (gameFielg[i][k].unit.gabarit === 100) {
                  a = gameFielg[i][k].unit.x + 50 - this.boo_point.x;
                  b = gameFielg[i][k].unit.y - this.boo_point.y;
                }

                c = Math.sqrt(a * a + b * b);
                // console.log("life : "+c);

                if (c < 110) {
                  // console.log(c);
                  const attack = this.attack - c * (this.attack / 110);

                  gameFielg[i][k].unit.hp
                    -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                  // console.log("life att: "+attack)
                  // indexOf
                  if (!gameFielg[i][k].unit.active) {
                    gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                      gameFielg[i][k].unit,
                    );
                    gameFielg[i][k].unit.active = true;
                  }
                }

                /// ////////////////////////
                if (title.style && hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                  this.father.fatherFraction.kills++;
                }
                /// /////////////////////////////////
              } else if (gameFielg[i][k].unit.unitStatus === 'building') {
                let hp;

                const a = gameFielg[i][k].unit.damagePointX - this.boo_point.x;
                const b = gameFielg[i][k].unit.damagePointY - this.boo_point.y;

                c = Math.sqrt(a * a + b * b);

                // console.log(c);

                if (c < 110) {
                  const attack = this.attack - c * (this.attack / 110);

                  // console.log(" att: "+attack)

                  if (
                    gameFielg[i][k].unit.buildready
                    >= gameFielg[i][k].unit.hpfull
                  ) {
                    hp = gameFielg[i][k].unit.hp;

                    gameFielg[i][k].unit.hp
                      -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                    /// ////////////////////////
                    if (title.style && hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                      this.father.fatherFraction.razings++;
                    }
                    /// /////////////////////////////////
                  } else {
                    const hp = gameFielg[i][k].unit.buildready;

                    gameFielg[i][k].unit.buildready
                      -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                    /// ////////////////////////
                    if (
                      title.style
                      && hp > 0
                      && gameFielg[i][k].unit.buildready <= 0
                    ) {
                      this.father.fatherFraction.razings++;
                    }
                    /// /////////////////////////////////
                  }

                  if (
                    gameFielg[i][k].unit.fatherFraction.activeBuildings.indexOf(
                      gameFielg[i][k].unit,
                    ) === -1
                  ) {
                    gameFielg[i][k].unit.fatherFraction.activeBuildings.push(
                      gameFielg[i][k].unit,
                    );
                  }

                  if (!gameFielg[i][k].unit.alarmTimer) {
                    gameFielg[i][k].unit.alarmTimer = 500;
                    gameFielg[i][k].unit.agressor = this.father;
                  }
                }
              }
            }
          }
        }

        this.boo = true;
        this.boo_draw = 100;
        this.takt = 'boo';

        this.animX_v = 0;
        this.animY_v = 0;
      } else if (this.boo_draw) {
        this.boo_draw--;

        if (this.boo_draw % 2 === 0) {
          this.animX_v += 100;

          if (this.animX_v === 800) {
            this.animX_v = 0;
            this.animY_v += 100;
            this.boo_point.y -= 2;
            this.boo_point.x += 1;
            // pausa=1
          }
        }
      }

      if (this.boo_draw === 0) {
        this.readyToOut = true;
      }

      // this.readyToOut=true;
    } else {
      this.x += this.gSp;
      this.y += this.vSp;
    }

    // console.log(this.takt);
  } else if (this.type === 'cannon_tower') {
    /*
  if(!this.stopDraw){
  let a={x:this.x,y:this.y,gabX:this.gabX,gabY:this.gabY};

  this.xy_mass.unshift(a);

  if(this.xy_mass.length>=5){this.xy_mass.pop();};
  };

  gabX
  */

    if (this.takt < 1000) {
      if (this.takt > 1) {
        this.x += this.gSp;
        this.y += this.vSp;
      } else {
        this.x = this.xy.x;
        this.y = this.xy.y;

        this.animX_v += 100;

        if (this.animX_v === 800) {
          this.animX_v = 0;
          this.animY_v += 100;
        }
      }

      /// ////////////////////////////////
      if (!this.s_t) {
        this.s_t = this.takt;

        // this.dopGabKoof=100/this.s_t;
      }

      if (this.s_t > 10) {
        if (this.takt > this.s_t / 1.8) {
          this.gabX += 2; // this.dopGabKoof;
          this.gabY += 2; // this.dopGabKoof;
        } else {
          this.gabX -= 2; // this.dopGabKoof;
          this.gabY -= 2; // this.dopGabKoof;
        }
      }

      /// //////////////////////////////

      if (!this.stopTakt) {
        this.takt--;
      } else {
        this.stopTakt--;
      }

      // this.gabX-=this.dopGabKoof;
      // this.gabY-=this.dopGabKoof;

      if (this.takt === 1 && this.stopTakt === false) {
        this.stopTakt = 33;

        //  if(this.target.hp>0&&this.target.cell){
        // this.target.hp-=this.attack-((this.attack*this.target.panzer)/100);

        // console.log(this.xy.x);

        const vertikal = Math.floor(this.xy.y / 50);
        const horizont = Math.floor(this.xy.x / 50);

        const bu = [];

        for (let i = vertikal - 2; i <= vertikal + 2; i++) {
          for (let k = horizont - 2; k <= horizont + 2; k++) {
            if (
              gameFielg[i]
              && gameFielg[i][k]
              && gameFielg[i][k].unit
              && gameFielg[i][k].unit.cell
              && gameFielg[i][k].unit.unitStatus !== 'building'
              && gameFielg[i][k].unit.hp > 0
            ) {
              let c;

              if (
                gameFielg[i][k].unit.unitStatus === 'life'
                && gameFielg[i][k].unit.hp > 0
                // &&
                // gameFielg[i][k].unit.cell
                && bu.indexOf(gameFielg[i][k].unit) === -1
              ) {
                const { hp } = gameFielg[i][k].unit;

                bu.push(gameFielg[i][k].unit);

                let a; //= (gameFielg[i][k].unit.x+25)-(this.xy.x);
                let b; //= (gameFielg[i][k].unit.y+25)-(this.xy.y);

                if (gameFielg[i][k].unit.gabarit === 50) {
                  a = gameFielg[i][k].unit.x + 25 - this.xy.x;
                  b = gameFielg[i][k].unit.y + 25 - this.xy.y;
                } else if (gameFielg[i][k].unit.gabarit === 100) {
                  a = gameFielg[i][k].unit.x + 50 - this.xy.x;
                  b = gameFielg[i][k].unit.y - this.xy.y;
                }

                c = Math.sqrt(a * a + b * b);

                if (c < 75) {
                  // console.log("crash");

                  const attack = this.attack - c * (this.attack / 75);

                  gameFielg[i][k].unit.hp
                    -= attack - (attack * gameFielg[i][k].unit.panzer) / 100;

                  if (!gameFielg[i][k].unit.active) {
                    gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                      gameFielg[i][k].unit,
                    );
                    gameFielg[i][k].unit.active = true;
                  }

                  // indexOf
                }

                /// ////////////////////////
                if (title.style && hp > 0 && gameFielg[i][k].unit.hp <= 0) {
                  this.father.fatherFraction.kills++;
                }
                /// /////////////////////////////////
              }
            }
          }
        }

        if (
          !this.boo
          && gameFielg[vertikal]
          && gameFielg[vertikal][horizont]
          && !gameFielg[vertikal][horizont].water
        ) {
          // type,horizont,vertikal,speed,fraction

          // console.log(horizont);

          this.boo = new Unit('boo');

          this.boo.x = this.x;
          this.boo.y = this.y;
          this.boo.horizont = horizont;
          this.boo.vertikal = vertikal;
          this.boo.alpf = 1;

          gameFielg[vertikal][horizont].pen.unshift(this.boo);
        }
      }
    } else {
      this.takt--;

      if (this.takt <= 1100 && this.boo) {
        this.boo.alpf -= 0.01;
      }

      if (this.takt === 1001) {
        this.readyToOut = true;

        // console.log("ok");

        if (this.boo) {
          gameFielg[this.boo.vertikal][this.boo.horizont].pen.splice(
            gameFielg[this.boo.vertikal][this.boo.horizont].pen.indexOf(
              this.boo,
            ),
            1,
          );
        }

        // console.log("okokokokokok");
      }
    }

    /// /////////////////////////////////////

    if (this.takt === 0) {
      this.takt = 2000;
    }

    /// ///////////////////////////////////

    // if(this.target.unitStatus==="life"){if(this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
    // if(this.target.unitStatus==="building"){if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
  } else if (
    this.type === 'strela_tower'
    || this.type === 'turtle'
    || this.type === 'luk'
  ) {
    /*
  if(!this.stopDraw){
  let a={x:this.x,y:this.y,gabX:this.gabX,gabY:this.gabY};

  this.xy_mass.unshift(a);

  if(this.xy_mass.length>=5){this.xy_mass.pop();};
  };
  */
    // console.log(this.x);

    this.x += this.gSp;
    this.y += this.vSp;

    this.takt--;

    this.gabX -= this.dopGabKoof;
    this.gabY -= this.dopGabKoof;

    if (this.takt === 0) {
      let hp;

      if (
        this.target.unitStatus === 'building'
        && this.target.buildready < this.target.hpfull
        && this.target.buildready > 0
      ) {
        hp = this.target.buildready;

        this.target.buildready
          -= this.attack - (this.attack * this.target.panzer) / 100;
      } else if (this.target.hp > 0 && this.target.cell) {
        hp = this.target.hp;

        this.target.hp
          -= this.attack - (this.attack * this.target.panzer) / 100;
      }

      if (this.target.unitStatus === 'life') {
        if (!this.target.active) {
          this.target.fatherFraction.activeUnits.push(this.target);
          this.target.active = true;
        }

        if (!this.target.warrior) {
          if (!this.target.alarmTimer) {
            this.target.alarmTimer = 500;
            this.target.agressor = this.father;
          }
        }

        /// ////////////////////////
        if (title.style && hp && hp > 0 && this.target.hp <= 0) {
          this.father.fatherFraction.kills++;
        }
        /// /////////////////////////////////
      }
      if (this.target.unitStatus === 'building') {
        if (
          this.target
          && this.target.fatherFraction.activeBuildings.indexOf(this.target) === -1
        ) {
          this.target.fatherFraction.activeBuildings.push(this.target);
        }

        if (this.type === 'luk' || this.type === 'turtle') {
          if (!this.target.alarmTimer) {
            this.target.alarmTimer = 500;
            this.target.agressor = this.father;
          }
        }

        /// ////////////////////////
        if (
          title.style
          && hp
          && hp > 0
          && (this.target.buildready <= 0 || this.target.hp <= 0)
        ) {
          this.father.fatherFraction.razings++;
        }
        /// /////////////////////////////////
      }
    }
  } else if (this.type === 'topor') {
    this.x += this.gSp;
    this.y += this.vSp;

    this.takt--;

    if (this.takt === 0) {
      let hp;

      if (
        this.target.unitStatus === 'building'
        && this.target.buildready < this.target.hpfull
        && this.target.buildready > 0
      ) {
        hp = this.target.buildready;

        this.target.buildready
          -= this.attack - (this.attack * this.target.panzer) / 100;
      } else if (this.target.hp > 0 && this.target.cell) {
        hp = this.target.hp;

        this.target.hp
          -= this.attack - (this.attack * this.target.panzer) / 100;
      }

      if (this.target.unitStatus === 'life') {
        if (!this.target.active) {
          this.target.fatherFraction.activeUnits.push(this.target);
          this.target.active = true;
        }

        /// ////////////////////////
        if (title.style && hp && hp > 0 && this.target.hp <= 0) {
          this.father.fatherFraction.kills++;
        }
        /// /////////////////////////////////
      }
      if (this.target.unitStatus === 'building') {
        if (
          this.target
          && this.target.fatherFraction.activeBuildings.indexOf(this.target) === -1
        ) {
          this.target.fatherFraction.activeBuildings.push(this.target);

          /// ////////////////////////
          if (
            title.style
            && hp
            && hp > 0
            && (this.target.buildready <= 0 || this.target.hp <= 0)
          ) {
            this.father.fatherFraction.razings++;
          }
          /// /////////////////////////////////
        }

        if (!this.target.alarmTimer) {
          this.target.alarmTimer = 500;
          this.target.agressor = this.father;
        }
      }
    }
  }
};
