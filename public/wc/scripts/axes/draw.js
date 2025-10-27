/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
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
          if (sounds_fly.length + sounds_fight.length < 30) {
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
