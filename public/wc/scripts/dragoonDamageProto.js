/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
DragoonDamage.prototype.drawDragDam = function () {
  if (
    this.x >= centerDrawPoint.cellObj.x - 350
    && this.x < centerDrawPoint.cellObj.x + 350
    && this.y >= centerDrawPoint.cellObj.y - 350
    && this.y < centerDrawPoint.cellObj.y + 350
  ) {
    if (this.timer <= 60) {
      if (this.animX < 0) {
        this.animX = 0;
      }

      if (this.dragoon.fatherFraction.nation === 'orc') {
        ctx.drawImage(
          boom,
          this.animX,
          this.animY,
          95,
          100,
          this.x - 50 + removeX,
          this.y - 170 + removeY,
          100,
          200,
        );

        /// ////////////////////////////////////////////////////sound
        if (!this.sound && !this.animX && !this.animY) {
          this.sound = true;

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

            select_sound_fly(undefined, 'boo_drag', volume);
          }
        }
        /// /////////////////////////////////////////////////////////
      } else {
        ctx.drawImage(
          gry_boo,
          this.animX,
          this.animY,
          95,
          100,
          this.x - 50 + removeX,
          this.y - 170 + removeY,
          100,
          200,
        );
      }

      // ctx.fillStyle="red";
      // ctx.fillRect(this.x+removeX,(this.y+removeY),5,5);

      // pausa=1
    }
  }
};

DragoonDamage.prototype.prog = function (mySelf) {
  if (this.timer) {
    this.timer--;
    // pausa=1

    if (this.timer <= 60 && this.timer % 4 === 0) {
      this.animX += 100;

      if (this.animX === 700) {
        this.animY += 100;
        this.animX = 0;
      }

      if (!this.boo) {
        this.boo = new Unit('boo');

        this.boo.x = this.x;
        this.boo.y = this.y;
        this.boo.horizont = this.horizont;
        this.boo.vertikal = this.vertikal;
        this.boo.alpf = 1;
        this.boo.distroyTimer = 400;

        if (
          !gameFielg[this.vertikal][this.horizont].water
          && !gameFielg[this.vertikal][this.horizont].water_line
          && this.dragoon.fatherFraction.nation === 'orc'
        ) {
          gameFielg[this.vertikal][this.horizont].pen.unshift(this.boo);
        }

        const units = [];

        for (let ver = this.vertikal - 4; ver <= this.vertikal + 4; ver++) {
          for (let hor = this.horizont - 4; hor <= this.horizont + 4; hor++) {
            if (gameFielg[ver] && gameFielg[ver][hor]) {
              if (
                gameFielg[ver][hor].dragoon
                && gameFielg[ver][hor].dragoon.persolalNumber
                  !== this.dragoon.persolalNumber
                && units.indexOf(gameFielg[ver][hor].dragoon) === -1
              ) {
                units.push(gameFielg[ver][hor].dragoon);
              }

              if (
                gameFielg[ver][hor].unit
                && !gameFielg[ver][hor].unit.neitral
                && gameFielg[ver][hor].unit.hp > 0
                && gameFielg[ver][hor].unit.cell
                && units.indexOf(gameFielg[ver][hor].unit) === -1
              ) {
                units.push(gameFielg[ver][hor].unit);
              }
            }
          }
        }

        for (let i = 0; i < units.length; i++) {
          let dx;
          let dy;

          if (units[i].unitStatus === 'building') {
            dx = units[i].damagePointX;
            dy = units[i].damagePointY;
          } else if (units[i].gabarit === 50) {
            dx = units[i].x + 25;
            dy = units[i].y + 25;

            // console.log("okokokok");
          } else if (units[i].gabarit === 100) {
            dx = units[i].x + 50;
            dy = units[i].y;
          }

          const a = dx - this.x;
          const b = dy - this.y;

          const c = Math.sqrt(a * a + b * b);

          const zona = 100;

          const uronDrg = this.dragoon.attack - this.dragoon.attack / (zona / c);

          // console.log(c);pausa=1;

          if (c < zona) {
            if (units[i].unitStatus === 'building') {
              let hp;

              if (units[i].buildready < units[i].hpfull) {
                hp = units[i].buildready;

                units[i].buildready
                  -= uronDrg - (uronDrg * units[i].panzer) / 100;

                /// ////////////////////////
                if (title.style && hp > 0 && units[i].buildready <= 0) {
                  mySelf.fatherFraction.razings++;
                }
                /// /////////////////////////////////
              } else {
                hp = units[i].hp;

                units[i].hp -= uronDrg - (uronDrg * units[i].panzer) / 100;

                /// ////////////////////////
                if (title.style && hp > 0 && units[i].hp <= 0) {
                  mySelf.fatherFraction.razings++;
                }
                /// /////////////////////////////////
              }

              if (
                units[i].fatherFraction.activeBuildings.indexOf(units[i]) === -1
              ) {
                units[i].fatherFraction.activeBuildings.push(units[i]);
              }

              if (!units[i].alarmTimer) {
                units[i].alarmTimer = 500;
                units[i].agressor = this.dragoon;
              }
            } else {
              const { hp } = units[i];

              units[i].hp -= uronDrg - (uronDrg * units[i].panzer) / 100;

              /// ////////////////////////
              if (title.style && hp > 0 && units[i].hp <= 0) {
                mySelf.fatherFraction.kills++;
              }
              /// /////////////////////////////////

              if (!units[i].active) {
                units[i].fatherFraction.activeUnits.push(units[i]);
                units[i].active = true;
              }

              if (!units[i].warrior) {
                if (!units[i].alarmTimer) {
                  units[i].alarmTimer = 500;
                  units[i].agressor = this.dragoon;
                }
              }

              if (
                units[i].hp > 0
                && units[i].fatherFraction.control === 'comp'
                && !units[i].iCanGetFly
                && !units[i].way.length
                && (!units[i].animys || !units[i].animys.length)
                && !units[i].handTarget
              ) {
                if (units[i].fatherFraction.inPanick.indexOf(units[i]) === -1) {
                  units[i].fatherFraction.inPanick.push(units[i]);
                  units[i].panick = new Panick(
                    100,
                    units[i].cell,
                    this.dragoon,
                  );
                } else if (units[i].panick) {
                  units[i].panick.timer = 100;
                  units[i].panick.agressor = this.dragoon;
                }

                // console.log("in");
              }
            }
          }
        }

        // pausa=1;
      }
    }
  } else {
    this.boo.distroyTimer--;
    this.boo.alpf = 0.01 + this.boo.distroyTimer / 400;

    if (!this.boo.distroyTimer) {
      gameFielg[this.boo.vertikal][this.boo.horizont].pen.splice(
        gameFielg[this.boo.vertikal][this.boo.horizont].pen.indexOf(this.boo),
        1,
      );

      this.cell.dragoonDamages.splice(
        this.cell.dragoonDamages.indexOf(mySelf),
        1,
      );
      this.readyToOut = true;
    }
  }

  // console.log(this.timer)
};
