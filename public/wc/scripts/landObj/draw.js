/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-undef */
LandObj.prototype.draw = function () {
  this.myDraw = false;

  if (this.type !== 'wood' && this.hp <= 0 && !this.crash_s) {
    this.crash_s = true;

    /// /////////////////////////////////////////////  SOUND
    if (sounds_fly.length + sounds_fight.length < 35) {
      let dis;

      const a = this.x
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].x;
      const b = this.y
          - gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ].y;

      dis = Math.sqrt(a * a + b * b);

      let volume = (450 - dis) / 450;

      // console.log(volume); pausa=1;
      if (volume < 0) {
        volume = 0;
      }

      select_sound_fly(undefined, 'crash', volume);
    }
    /// ///////////////////////////////////////////////
  }

  if (this.type === 'stena') {
    ctx.drawImage(
      this.imageToDraw,
      0,
      0,
      32,
      32,
      this.x + removeX,
      this.y + removeY,
      50,
      50,
    );

    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,100,100);
  } else if (this.type === 'gora') {
    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      0,
      200,
      200,
      this.x + removeX,
      this.y + removeY - 20,
      100,
      140,
    );

    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,100,100);
  } else if (this.type === 'foundry') {
    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent < 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        port_trup,
        0,
        0,
        100,
        100,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'oil_platform') {
    // console.log("ok");

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX, this.y + removeY - 50, 100, 100);
    }

    this.drawQuatro = false;

    if (this.hp > 0 && this.buildready > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);

      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          300,
          100,
          100,
          this.x + removeX,
          this.y + removeY - 50,
          100,
          100,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          200,
          100,
          100,
          this.x + removeX,
          this.y + removeY - 50,
          100,
          100,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX,
          this.y + removeY - 50,
          100,
          100,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          this.imageToDraw,
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

      if (procentHp <= 90) {
        this.gabX = (100 - procentHp) * 1.2;
        this.gabY = (100 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x + (100 - this.gabX) / 2 + removeX,
          this.y - 90 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    }

    if (this.distroyTimer < 501) {
      this.gabX = 100;
      this.gabY = 100;
      this.animX = 510;
      this.animY = 150;
      // this.tileStepX=40;
      // this.tileStepY=35;
      this.animKorrektorY = -50;
      // this.animKorrektorX=-10;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        0,
        500,
        100,
        100,
        this.x + removeX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 25,
          this.y + removeY - 115,
          150,
          200,
        );

        // console.log(this.distroyTimer);
      }
    }
  } else if (this.type === 'oil_Ref') {
    // hp oil_ref_orc_black
    // console.log()

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent < 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        port_trup,
        0,
        0,
        100,
        100,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'oil') {
    ctx.drawImage(
      oil,
      this.animX,
      this.animY,
      100,
      100,
      this.x + removeX,
      this.y + removeY - 50,
      100,
      100,
    );

    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,(this.y+removeY)-50,100,100);
  } else if (this.type === 'port') {
    // hp

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent < 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        port_trup,
        0,
        0,
        100,
        100,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (
    this.type === 'altar'
      || this.type === 'dragon_roost'
      || this.type === 'temple'
  ) {
    // barack

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'ogreBase') {
    // barack

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'kuznya') {
    // barack

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'tower') {
    // tower

    let imageToDraw;

    if (this.upgrade === 'watch') {
      imageToDraw = this.imageToDraw;
    } else if (this.upgrade === 'guard') {
      imageToDraw = this.imageToDraw_2;
    } else if (this.upgrade === 'cannon') {
      imageToDraw = this.imageToDraw_3;
    }

    /// //////////////
    /*
    let vertikal=Math.floor(this.damagePointY/50);
    let horizont=Math.floor(this.damagePointX/50);

    for(let i=vertikal-11;i<vertikal+11;i++){

        for(let k=horizont-11;k<horizont+11;k++){

        if(gameFielg[i]&&gameFielg[i][k]){
            let a=(gameFielg[i][k].x+25)-this.damagePointX;
            let b=(gameFielg[i][k].y+25)-this.damagePointY;

            let c=Math.sqrt(a*a+b*b);

        if(c<=450){

            ctx.strokeStyle="red";
            ctx.strokeRect(gameFielg[i][k].x+removeX,gameFielg[i][k].y+removeY,50,50);

        };

        };

        };

    };

    */
    /// //////////////////

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX, this.y + removeY - 50, 100, 100);
    }

    this.drawQuatro = false;

    if (this.hp > 0 && this.buildready > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);

      if (procent === 100 && !this.upgradeTimer) {
        ctx.drawImage(
          imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 10,
          this.y + removeY - 105,
          120,
          150,
        );

        // this.buildready=2000;
      } else {
        ctx.drawImage(
          imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 10,
          this.y + removeY - 105,
          120,
          150,
        );
      }

      // ctx.fillStyle="red";
      // ctx.fillRect(this.firePointX+removeX,this.firePointY+removeY,5,5);

      if (procentHp <= 90) {
        this.gabX = (100 - procentHp) * 1.2;
        this.gabY = (100 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x + (100 - this.gabX) / 2 + removeX,
          this.y - 90 + (100 - this.gabY) / 2 + removeY - 20,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    }

    if (this.distroyTimer < 501) {
      if (imageToDraw !== som) {
        imageToDraw = som;
      }

      this.gabX = 100;
      this.gabY = 100;
      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -50;
      this.animKorrektorX = -10;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 25,
          this.y + removeY - 115,
          150,
          200,
        );

        // console.log(this.distroyTimer);
      }
    }
  } else if (this.type === 5) {
    // barack

    /*

        if(this.fatherFraction.fraction==="redOrcs"&&this.imageToDraw!==leso){

        this.imageToDraw=leso;
        }
        else if(this.fatherFraction.fraction==="blackOrcs"&&this.imageToDraw!==leso_black){

            this.imageToDraw=leso_black;
        }
            else if(this.fatherFraction.fraction==="lazurOrcs"&&this.imageToDraw!==leso_lazur){

            this.imageToDraw=leso_lazur;
        }
        */

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          100,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          100,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 4) {
    // lesopilka

    if (
      this.fatherFraction.fraction === 'redOrcs'
        && this.imageToDraw !== leso
    ) {
      this.imageToDraw = leso;
    } else if (
      this.fatherFraction.fraction === 'blackOrcs'
        && this.imageToDraw !== leso_black
    ) {
      this.imageToDraw = leso_black;
    } else if (
      this.fatherFraction.fraction === 'lazurOrcs'
        && this.imageToDraw !== leso_lazur
    ) {
      this.imageToDraw = leso_lazur;
    }

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX - 55,
          this.y + removeY - 50,
          160,
          160,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      // console.log("draw");

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 'wood') {
    // ctx.strokeStyle="black";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);

    if (this.animTimer < 6) {
      this.animTimer++;
    } else {
      this.animTimer = 0;

      this.animX += 200;
    }

    if (this.animX === 800) {
      this.animX = 0;
    }

    let { vibro } = this;

    if (this.vibro % 2 === 0) {
      vibro = -this.vibro;
    }

    ctx.globalAlpha = this.distroyTimer / 20;

    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
    // console.log(this.animX)

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      200,
      200,
      this.drawX - 10 + removeX + vibro / 4,
      this.drawY + removeY,
      60 + this.ranGabX,
      100 + this.ranGabY,
    );

    ctx.globalAlpha = 1;
    // console.log(this.ranY);

    // ctx.fillStyle="blue";
    // ctx.fillRect(this.drawX+removeX,this.drawY+removeY+100,5,5);
  } else if (this.type === 1) {
    // shahta

    if (this.drawQuatro) {
      ctx.strokeStyle = 'violet';
      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.hp > 0) {
      if (!this.workers.length) {
        this.animKorrektorX = -75;
        this.animKorrektorY = -70;
        this.animX = 0;
        this.animY = 0;
        this.tileStepX = 110;
        this.tileStepY = 105;
        this.gabX = 180;
        this.gabY = 180;

        if (this.imageToDraw !== som) {
          this.imageToDraw = som;
        }
      } else {
        // ctx.drawImage(som,0,100,110,105,this.x+removeX-75,this.y+removeY-63,180,180);
        this.animX = 0;
        this.animY = 100;
        this.animKorrektorY = -63;
        this.animKorrektorX = -75;
        this.tileStepX = 110;
        this.tileStepY = 105;
        this.gabX = 180;
        this.gabY = 180;

        if (this.imageToDraw !== som) {
          this.imageToDraw = som;
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }
    }

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      this.tileStepX,
      this.tileStepY,
      this.x + removeX + this.animKorrektorX,
      this.y + removeY + this.animKorrektorY,
      this.gabX,
      this.gabY,
    );

    ctx.globalAlpha = 1;

    if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
      if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
        this.animX_2 = 0;
      } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
        this.animX_2 = 100;
      } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
        this.animX_2 = 200;
      } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
        this.animX_2 = 300;
      } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
        this.animX_2 = 400;
      } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
        this.animX_2 = 500;
      } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
        this.animX_2 = 600;
      } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
        this.animX_2 = 700;
      } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
        this.animX_2 = 800;
      } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
        this.animX_2 = 900;
      } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
        this.animX_2 = 1000;
      } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
        this.animX_2 = 1100;
      } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
        this.animX_2 = 1200;
      } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
        this.animX_2 = 1300;
      } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
        this.animX_2 = 1400;
      } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
        this.animX_2 = 1500;
      }

      ctx.drawImage(
        vzryv1,
        this.animX_2 + 5,
        this.animY_2,
        96,
        100,
        this.x + removeX - 75,
        this.y + removeY - 170,
        200,
        350,
      );

      // console.log(this.distroyTimer);
    }
  } else if (this.type === 2) {
    // townHoll

    if (this.level === 1 && this.myJoube !== 'levelUpgrade') {
      // console.log("?????");

      if (this.fatherFraction.nation === 'orc') {
        this.face_animY = 500;
      } else {
        this.face_animY = 400;
      }

      if (
        this.fatherFraction.fraction === 'redOrcs'
          && this.imageToDraw !== townHoll_orc_red
      ) {
        this.imageToDraw = townHoll_orc_red;
      } else if (
        this.fatherFraction.fraction === 'blackOrcs'
          && this.imageToDraw !== townHoll_orc_black
      ) {
        this.imageToDraw = townHoll_orc_black;
      } else if (
        this.fatherFraction.fraction === 'lazurOrcs'
          && this.imageToDraw !== townHoll_orc_lazur
      ) {
        this.imageToDraw = townHoll_orc_lazur;
      } else if (
        this.fatherFraction.fraction === 'h_blue'
          && this.imageToDraw !== townHoll_h_blue
      ) {
        this.imageToDraw = townHoll_h_blue;
      }
    }

    if (
      this.level === 2
        || (this.level === 1 && this.myJoube === 'levelUpgrade')
    ) {
      // console.log("?????");

      if (
        this.fatherFraction.fraction === 'redOrcs'
          && this.imageToDraw !== townHoll_2_orc_red
      ) {
        this.imageToDraw = townHoll_2_orc_red;
      } else if (
        this.fatherFraction.fraction === 'blackOrcs'
          && this.imageToDraw !== townHoll_2_orc_black
      ) {
        this.imageToDraw = townHoll_2_orc_black;
      } else if (
        this.fatherFraction.fraction === 'lazurOrcs'
          && this.imageToDraw !== townHoll_2_orc_lazur
      ) {
        this.imageToDraw = townHoll_2_orc_lazur;
      } else if (
        this.fatherFraction.fraction === 'h_blue'
          && this.imageToDraw !== townHoll_2_h_blue
      ) {
        this.imageToDraw = townHoll_2_h_blue;
      }
    }

    if (
      this.level === 3
        || (this.level === 2 && this.myJoube === 'levelUpgrade')
    ) {
      // console.log("?????");

      if (
        this.fatherFraction.fraction === 'redOrcs'
          && this.imageToDraw !== townHoll_3_orc_red
      ) {
        this.imageToDraw = townHoll_3_orc_red;
      } else if (
        this.fatherFraction.fraction === 'blackOrcs'
          && this.imageToDraw !== townHoll_3_orc_black
      ) {
        this.imageToDraw = townHoll_3_orc_black;
      } else if (
        this.fatherFraction.fraction === 'lazurOrcs'
          && this.imageToDraw !== townHoll_3_orc_lazur
      ) {
        this.imageToDraw = townHoll_3_orc_lazur;
      } else if (
        this.fatherFraction.fraction === 'h_blue'
          && this.imageToDraw !== townHoll_3_h_blue
      ) {
        this.imageToDraw = townHoll_3_h_blue;
      }
    }

    // console.log(this.myJoube);

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX - 50, this.y + removeY - 50, 150, 150);
    }

    this.drawQuatro = false;

    if (this.buildready > 0 && this.hp > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);
      // console.log(procent);

      if (procent === 100 && this.myJoube !== 'levelUpgrade') {
        // ctx.drawImage(this.imageToDraw,0,0,100,100,this.x+removeX-70,this.y+removeY-110,190,230);
        this.animX = 0;
        this.animY = 0;

        // this.buildready=2000;
      } else if (
        procent > 60
          || (this.myJoubeTimer && this.myJoube === 'levelUpgrade')
      ) {
        this.animX = 0;
        this.animY = 100;
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 80,
          200,
          200,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 70,
          this.y + removeY - 70,
          200,
          200,
        );
      }

      if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          this.animX,
          this.animY,
          100,
          100,
          this.x + removeX - 60,
          this.y + removeY - 125,
          170,
          250,
        );
      }

      // ctx.strokeStyle="red";
      // ctx.strokeRect(this.x+removeX-50,this.y+removeY-50,150,150);

      if (procentHp <= 90) {
        this.gabX = (150 - procentHp) * 1.2;
        this.gabY = (150 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX2,
          this.animY2,
          200,
          200,
          this.x - 30 + (100 - this.gabX) / 2 + removeX,
          this.y - 60 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX2 += 200;

          if (this.animX2 === 1000) {
            this.animX2 = 0;
            this.animY2 += 200;
          }

          if (this.animY2 === 400) {
            this.animY2 = 0;
          }
        }
      }
    } else {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 180;
      this.gabY = 180;

      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -65;
      this.animKorrektorX = -85;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 75,
          this.y + removeY - 170,
          200,
          350,
        );
      }
    }
  } else if (this.type === 3) {
    // farm

    if (this.drawQuatro) {
      if (this.control === 'player') {
        ctx.strokeStyle = 'green';
      } else {
        ctx.strokeStyle = 'red';
      }

      ctx.strokeRect(this.x + removeX, this.y + removeY - 50, 100, 100);
    }

    this.drawQuatro = false;

    if (this.hp > 0 && this.buildready > 0) {
      const procent = this.buildready / (this.hpfull / 100);
      const procentHp = this.hp / (this.hpfull / 100);

      // console.log(procent);

      // ctx.strokeStyle="red";
      // ctx.strokeRect(this.x+removeX,this.y+removeY-50,100,100);

      if (procent === 100) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          0,
          100,
          100,
          this.x + removeX,
          this.y + removeY - 50,
          100,
          100,
        );

        // this.buildready=2000;
      } else if (procent > 60) {
        ctx.drawImage(
          this.imageToDraw,
          0,
          100,
          100,
          100,
          this.x + removeX,
          this.y + removeY - 50,
          100,
          100,
        );
      } else if (procent > 30) {
        ctx.drawImage(
          som,
          580,
          200,
          80,
          60,
          this.x + removeX - 5,
          this.y + removeY - 65,
          120,
          120,
        );
      } else if (procent >= 0) {
        ctx.drawImage(
          som,
          580,
          140,
          80,
          60,
          this.x + removeX - 5,
          this.y + removeY - 60,
          120,
          120,
        );
      }

      if (procentHp <= 90) {
        this.gabX = (100 - procentHp) * 1.2;
        this.gabY = (100 - procentHp) * 1.2;

        ctx.drawImage(
          fire,
          this.animX,
          this.animY,
          200,
          200,
          this.x + (100 - this.gabX) / 2 + removeX,
          this.y - 90 + (100 - this.gabY) / 2 + removeY,
          this.gabX,
          this.gabY,
        );

        this.animTimer++;

        if (this.animTimer === 3) {
          this.animTimer = 0;

          this.animX += 200;

          if (this.animX === 1000) {
            this.animX = 0;
            this.animY += 200;
          }

          if (this.animY === 400) {
            this.animY = 0;
          }
        }
      }
    }

    if (this.distroyTimer < 501) {
      if (this.imageToDraw !== som) {
        this.imageToDraw = som;
      }

      this.gabX = 100;
      this.gabY = 100;
      this.animX = 510;
      this.animY = 150;
      this.tileStepX = 40;
      this.tileStepY = 35;
      this.animKorrektorY = -50;
      this.animKorrektorX = -10;

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        this.tileStepX,
        this.tileStepY,
        this.x + removeX + this.animKorrektorX,
        this.y + removeY + this.animKorrektorY,
        this.gabX,
        this.gabY,
      );

      ctx.globalAlpha = 1;

      if ((this.hp <= 0 || this.buildready <= 0) && this.distroyTimer >= 436) {
        if (this.distroyTimer <= 500 && this.distroyTimer > 496) {
          this.animX_2 = 0;
        } else if (this.distroyTimer <= 496 && this.distroyTimer > 492) {
          this.animX_2 = 100;
        } else if (this.distroyTimer <= 492 && this.distroyTimer > 488) {
          this.animX_2 = 200;
        } else if (this.distroyTimer <= 488 && this.distroyTimer > 484) {
          this.animX_2 = 300;
        } else if (this.distroyTimer <= 484 && this.distroyTimer > 480) {
          this.animX_2 = 400;
        } else if (this.distroyTimer <= 480 && this.distroyTimer > 476) {
          this.animX_2 = 500;
        } else if (this.distroyTimer <= 476 && this.distroyTimer > 472) {
          this.animX_2 = 600;
        } else if (this.distroyTimer <= 472 && this.distroyTimer > 468) {
          this.animX_2 = 700;
        } else if (this.distroyTimer <= 468 && this.distroyTimer > 464) {
          this.animX_2 = 800;
        } else if (this.distroyTimer <= 464 && this.distroyTimer > 460) {
          this.animX_2 = 900;
        } else if (this.distroyTimer <= 460 && this.distroyTimer > 456) {
          this.animX_2 = 1000;
        } else if (this.distroyTimer <= 456 && this.distroyTimer > 452) {
          this.animX_2 = 1100;
        } else if (this.distroyTimer <= 452 && this.distroyTimer > 448) {
          this.animX_2 = 1200;
        } else if (this.distroyTimer <= 448 && this.distroyTimer > 444) {
          this.animX_2 = 1300;
        } else if (this.distroyTimer <= 444 && this.distroyTimer > 440) {
          this.animX_2 = 1400;
        } else if (this.distroyTimer <= 440 && this.distroyTimer > 436) {
          this.animX_2 = 1500;
        }

        ctx.drawImage(
          vzryv1,
          this.animX_2 + 5,
          this.animY_2,
          96,
          100,
          this.x + removeX - 25,
          this.y + removeY - 115,
          150,
          200,
        );

        // console.log(this.distroyTimer);
      }
    }
  }
};
