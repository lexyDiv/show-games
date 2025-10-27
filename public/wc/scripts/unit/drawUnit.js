/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.drawUnit = function () {
  this.myDraw = false;

  if (this.hp < 0) {
    this.hp = 0;
  }

  // console.log("draw")

  if (this.sweeme) {
    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk) {
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

        select_sound_fight(this.cell.unit, 'fight', volume);

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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////
  }

  /*
  for(let i=0;i<this.way.length;i++){

      //console.log(this.way[i].x)

  ctx.fillStyle="red";
  ctx.fillRect(this.way[i].x+removeX,(this.way[i].y+removeY),50,50);

  };
  */
  /*
  if(this.spedr){

  ctx.fillStyle="red";
  ctx.fillRect(this.x+removeX,(this.y+removeY),50,50);
  };
  */

  if (this.type === 'mag') {
    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk_rage) {
        select_sound_fight(this.cell.unit, this.tyuk_rage);

        this.tyuk_rage = false;
      } else if (this.tyuk) {
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

        select_sound_fight(this.cell.unit, 'fight', volume);

        this.tyuk = false;
      }

      // if(this.hp<=0){console.log(this.distroyTimer);};

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 1019) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    if (this.hp > 0) {
      // 75

      // if(!this.iGetMyCell){this.iStand=false;};

      if (!this.iStand) {
        this.moveTimer = 100;
      } else {
        this.moveTimer--;

        /*
  if(!this.gold){
      this.animY=0;
  }
  else{
      this.animY=0;
  };
      // */
      }

      if (this.iStand && !this.anim_magick_timer) {
        this.animY = 0;
      }

      // console.log(this.gold);

      // this.imageToDraw=peon;

      if (this.animTimer > 0) {
        this.animTimer--;
      }

      if (this.iStand && this.moveTimer <= 0 && !this.iFight) {
        if ((!this.animTimer || !this.moveVektor) && this.hp > 0) {
          this.animTimer = Math.floor(Math.random() * 150) + 30;

          // this.animX=Math.floor(Math.random()*5)*51;
          this.randomMoveVektor = Math.floor(Math.random() * 8);

          if (this.randomMoveVektor === 0) {
            this.moveVektor = 'right';
          } else if (this.randomMoveVektor === 1) {
            this.moveVektor = 'up_Right';
          } else if (this.randomMoveVektor === 2) {
            this.moveVektor = 'right_Down';
          } else if (this.randomMoveVektor === 3) {
            this.moveVektor = 'down';
          } else if (this.randomMoveVektor === 4) {
            this.moveVektor = 'down_Left';
          } else if (this.randomMoveVektor === 5) {
            this.moveVektor = 'left_Up';
          } else if (this.randomMoveVektor === 6) {
            this.moveVektor = 'up';
          } else if (this.randomMoveVektor === 7) {
            this.moveVektor = 'left';
          }
        }
      }

      // if(!this.moveVektor){console.log("pizda");};

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

      if (!this.iFight && this.moveVektor && !this.iStand) {
        if (this.animTimer === 0) {
          this.animTimer = 200;
        }

        if (this.animTimer % 4 === 0) {
          this.animY += 100;
        }

        if (this.animY >= 500 || this.iDraw === 0) {
          this.animY = 100;
        }
      } else if (this.iFight) {
        // console.log("ok");

        this.animY = this.iDoTakt * 100 + 400;

        if (this.animY === 400) {
          this.animY = 0;
        }
      }
    }

    // if(this.hp<=0){console.log(this.animY);};

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      99,
      this.x + removeX - 30,
      this.y + removeY - 35,
      110,
      110,
    );

    // ctx.globalAlpha=1;

    this.iStand = true;

    this.iDraw = 2;

    if (this.drawQuatro) {
      const bar = (this.hpfull / 80) * this.hp;

      ctx.strokeStyle = 'green';
      ctx.strokeRect(this.x + removeX, this.y + removeY, 50, 50);

      if (bar > 70) {
        ctx.fillStyle = 'green';
      } else if (bar > 40) {
        ctx.fillStyle = 'yellow';
      } else if (bar > 0) {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(
        this.x + removeX,
        this.y + removeY - 8,
        (this.hp * 50) / this.hpfull,
        5,
      );
    }

    this.drawQuatro = false;

    /*
  if(this.target){

  ctx.fillStyle="red";
  ctx.fillRect(this.target.x+removeX,this.target.y+removeY,50,50);

  };
  // */
    // ctx.fillStyle="red";
    // ctx.fillRect(this.hotCell.x+removeX,this.hotCell.y+removeY,50,50);
  } else if (this.type === 'turtle') {
    // iDoTakt

    // this.draw_visible=true;

    if (this.fatherFraction.control === 'player') {
      this.draw_visible = true;
    }

    if (this.draw_visible) {
      if (this.hp > 0) {
        if (this.moveVektor === 'right') {
          this.animX = 200;
        } else if (this.moveVektor === 'right_Down') {
          this.animX = 300;
        } else if (this.moveVektor === 'down') {
          this.animX = 400;
        } else if (this.moveVektor === 'down_Left') {
          this.animX = 500;
        } else if (this.moveVektor === 'left') {
          this.animX = 600;
        } else if (this.moveVektor === 'left_Up') {
          this.animX = 700;
        } else if (this.moveVektor === 'up') {
          this.animX = 0;
        } else if (this.moveVektor === 'up_Right') {
          this.animX = 100;
        }
      }

      //*
      if (this.drawGabarit >= 105) {
        // console.log(this.drawGabarit);
        this.drawGabarit = 105;
      } else if (this.drawGabarit <= 95) {
        // console.log(this.drawGabarit);
        this.drawGabarit = 95;
      }
      //* /

      if (this.drawGabarit > 100) {
        this.gabaritVector = 0;
      } else if (this.drawGabarit < 100) {
        this.gabaritVector = 1;
      }

      // this.drawConor+=0.01;

      if (this.conorVektor) {
        this.drawConor += 0.001;
      } else {
        this.drawConor -= 0.001;
      }

      if (this.drawConor >= 0.05) {
        this.conorVektor = 0;
        // console.log(this.drawConor)
      } else if (this.drawConor <= -0.05) {
        this.conorVektor = 1;
        // console.log(this.drawConor)
      }

      if (this.gabaritVector) {
        this.gabaritKoof += 0.002;
      } else {
        this.gabaritKoof -= 0.002;
      }

      this.drawGabarit += this.gabaritKoof;

      if (this.iFight) {
        // thithis.iDoTakt
        if (this.iDoTakt === 1 || this.iDoTakt === 3) {
          this.animY = 100;
        } else if (this.iDoTakt === 2) {
          this.animY = 200;
        } else if (this.iDoTakt === 4) {
          this.animY = 0;
        }
      }

      ctx.save();
      ctx.translate(this.x + 50 + removeX, this.y + removeY);
      ctx.rotate(this.drawConor);

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        100,
        100,
        -this.drawGabarit / 2,
        -this.drawGabarit / 2,
        this.drawGabarit,
        this.drawGabarit,
      );

      ctx.restore();
    }

    /*
  ctx.beginPath();
  ctx.arc(this.damagePointX+removeX, this.damagePointY+removeY, this.seeing, 0, 2 * Math.PI, false);
  //ctx.fillStyle = 'green';
  //ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#003300';
  ctx.stroke();

              ctx.fillStyle="violet";
              ctx.fillRect(this.damagePointX+removeX,this.damagePointY+removeY,5,5);

  */

    /*
  for(let i=this.vertikal-11;i<=this.vertikal+11;i++){
      for(let k=this.horizont-11;k<=this.horizont+11;k++){

      if(gameFielg[i]&&gameFielg[i][k])	{
          let dis=get_distanse_on_lineyka(this.cell,100,gameFielg[i][k],50);

          if(
          dis<=this.seeing
          ){
              ctx.strokeStyle="red";
              ctx.strokeRect(gameFielg[i][k].x+removeX,(gameFielg[i][k].y+removeY),5,5);
          };

      };

      };
  };

  // */
  } else if (this.type === 'linkor') {
    if (this.moveVektor === 'right') {
      this.animX = 200;
    } else if (this.moveVektor === 'right_Down') {
      this.animX = 300;
    } else if (this.moveVektor === 'down') {
      this.animX = 400;
    } else if (this.moveVektor === 'down_Left') {
      this.animX = 500;
    } else if (this.moveVektor === 'left') {
      this.animX = 600;
    } else if (this.moveVektor === 'left_Up') {
      this.animX = 700;
    } else if (this.moveVektor === 'up') {
      this.animX = 0;
    } else if (this.moveVektor === 'up_Right') {
      this.animX = 100;
    }

    //*
    if (this.drawGabarit >= 105) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 105;
    } else if (this.drawGabarit <= 95) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 95;
    }
    //* /

    if (this.drawGabarit > 100) {
      this.gabaritVector = 0;
    } else if (this.drawGabarit < 100) {
      this.gabaritVector = 1;
    }

    // this.drawConor+=0.01;

    if (this.conorVektor) {
      this.drawConor += 0.001;
    } else {
      this.drawConor -= 0.001;
    }

    if (this.drawConor >= 0.05) {
      this.conorVektor = 0;
      // console.log(this.drawConor)
    } else if (this.drawConor <= -0.05) {
      this.conorVektor = 1;
      // console.log(this.drawConor)
    }

    if (this.gabaritVector) {
      this.gabaritKoof += 0.002;
    } else {
      this.gabaritKoof -= 0.002;
    }

    this.drawGabarit += this.gabaritKoof;

    ctx.save();
    ctx.translate(this.x + 50 + removeX, this.y + removeY);
    ctx.rotate(this.drawConor);

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      -this.drawGabarit / 2,
      -this.drawGabarit / 2,
      this.drawGabarit,
      this.drawGabarit,
    );

    ctx.restore();

    // console.log(this.drawConor)

    // if(this.ii_saveCell){
    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.ii_saveCell.x+removeX,this.ii_saveCell.y+removeY,50,50);
    // };

    /*
  ctx.fillStyle="green";
  ctx.fillRect(this.damagePointX+removeX,this.damagePointY+removeY,5,5);

  if(this.target){
  ctx.fillStyle="red";
  ctx.fillRect(this.target.x+removeX,(this.target.y+removeY),50,50);
  };
  */

    /*
  for(let i=0;i<this.way.length;i++){

      //console.log(this.way[i].x)

  ctx.fillStyle="red";
  ctx.fillRect(this.way[i].x+removeX,(this.way[i].y+removeY),50,50);

  };
  // */
  } else if (this.type === 'distroer') {
    if (this.moveVektor === 'right') {
      this.animX = 200;
    } else if (this.moveVektor === 'right_Down') {
      this.animX = 300;
    } else if (this.moveVektor === 'down') {
      this.animX = 400;
    } else if (this.moveVektor === 'down_Left') {
      this.animX = 500;
    } else if (this.moveVektor === 'left') {
      this.animX = 600;
    } else if (this.moveVektor === 'left_Up') {
      this.animX = 700;
    } else if (this.moveVektor === 'up') {
      this.animX = 0;
    } else if (this.moveVektor === 'up_Right') {
      this.animX = 100;
    }

    //*
    if (this.drawGabarit >= 105) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 105;
    } else if (this.drawGabarit <= 95) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 95;
    }
    //* /

    if (this.drawGabarit > 100) {
      this.gabaritVector = 0;
    } else if (this.drawGabarit < 100) {
      this.gabaritVector = 1;
    }

    // this.drawConor+=0.01;

    if (this.conorVektor) {
      this.drawConor += 0.001;
    } else {
      this.drawConor -= 0.001;
    }

    if (this.drawConor >= 0.05) {
      this.conorVektor = 0;
      // console.log(this.drawConor)
    } else if (this.drawConor <= -0.05) {
      this.conorVektor = 1;
      // console.log(this.drawConor)
    }

    if (this.gabaritVector) {
      this.gabaritKoof += 0.002;
    } else {
      this.gabaritKoof -= 0.002;
    }

    this.drawGabarit += this.gabaritKoof;

    ctx.save();
    ctx.translate(this.x + 50 + removeX, this.y + removeY);
    ctx.rotate(this.drawConor);

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      -this.drawGabarit / 2,
      -this.drawGabarit / 2,
      this.drawGabarit,
      this.drawGabarit,
    );

    ctx.restore();

    /*
      ctx.beginPath();
  ctx.arc(this.damagePointX+removeX, this.damagePointY+removeY, this.dash, 0, 2 * Math.PI, false);
  //ctx.fillStyle = 'green';
  //ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.stroke();

              ctx.fillStyle="violet";
              ctx.fillRect(this.damagePointX+removeX,this.damagePointY+removeY,5,5);
      */

    // console.log(this.drawConor)

    // if(this.ii_saveCell){
    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.ii_saveCell.x+removeX,this.ii_saveCell.y+removeY,50,50);
    // };

    /*
  ctx.fillStyle="green";
  ctx.fillRect(this.damagePointX+removeX,this.damagePointY+removeY,5,5);

  if(this.target){
  ctx.fillStyle="red";
  ctx.fillRect(this.target.x+removeX,(this.target.y+removeY),50,50);
  };
  */

    /*
  for(let i=0;i<this.way.length;i++){

      //console.log(this.way[i].x)

  ctx.fillStyle="red";
  ctx.fillRect(this.way[i].x+removeX,(this.way[i].y+removeY),50,50);

  };
  // */
  } else if (this.type === 'oil_tanker') {
    if (this.moveVektor === 'right') {
      this.animX = 200;
    } else if (this.moveVektor === 'right_Down') {
      this.animX = 300;
    } else if (this.moveVektor === 'down') {
      this.animX = 400;
    } else if (this.moveVektor === 'down_Left') {
      this.animX = 500;
    } else if (this.moveVektor === 'left') {
      this.animX = 600;
    } else if (this.moveVektor === 'left_Up') {
      this.animX = 700;
    } else if (this.moveVektor === 'up') {
      this.animX = 0;
    } else if (this.moveVektor === 'up_Right') {
      this.animX = 100;
    }

    /*
  for(let i=0;i<this.way.length;i++){

      //console.log(this.way[i].x)

  ctx.fillStyle="red";
  ctx.fillRect(this.way[i].x+removeX,(this.way[i].y+removeY),50,50);

  };
  */

    //*
    if (this.drawGabarit >= 105) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 105;
    } else if (this.drawGabarit <= 95) {
      // console.log(this.drawGabarit);
      this.drawGabarit = 95;
    }
    //* /

    if (this.drawGabarit > 100) {
      this.gabaritVector = 0;
    } else if (this.drawGabarit < 100) {
      this.gabaritVector = 1;
    }

    // this.drawConor+=0.01;

    if (this.conorVektor) {
      this.drawConor += 0.001;
    } else {
      this.drawConor -= 0.001;
    }

    if (this.drawConor >= 0.05) {
      this.conorVektor = 0;
      // console.log(this.drawConor)
    } else if (this.drawConor <= -0.05) {
      this.conorVektor = 1;
      // console.log(this.drawConor)
    }

    if (this.gabaritVector) {
      this.gabaritKoof += 0.002;
    } else {
      this.gabaritKoof -= 0.002;
    }

    this.drawGabarit += this.gabaritKoof;

    let imageToDraw;

    if (this.oil) {
      imageToDraw = this.imageToDraw_2;
    } else {
      imageToDraw = this.imageToDraw;
    }

    ctx.save();
    ctx.translate(this.x + 50 + removeX, this.y + removeY);
    ctx.rotate(this.drawConor);

    ctx.drawImage(
      imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      -this.drawGabarit / 2,
      -this.drawGabarit / 2,
      this.drawGabarit,
      this.drawGabarit,
    );

    ctx.restore();

    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,(this.y+removeY)-50,100,100);
  } else if (this.type === 'transport') {
    // ctx.fillStyle="green";
    // ctx.fillRect(this.cell.x+removeX,this.cell.y+removeY,50,50);

    // console.log(this.moveVektor)

    if (this.moveVektor === 'right') {
      this.animX = 200;
    } else if (this.moveVektor === 'right_Down') {
      this.animX = 300;
    } else if (this.moveVektor === 'down') {
      this.animX = 400;
    } else if (this.moveVektor === 'down_Left') {
      this.animX = 500;
    } else if (this.moveVektor === 'left') {
      this.animX = 600;
    } else if (this.moveVektor === 'left_Up') {
      this.animX = 700;
    } else if (this.moveVektor === 'up') {
      this.animX = 0;
    } else if (this.moveVektor === 'up_Right') {
      this.animX = 100;
    }

    if (
      this.landing
      && this.landing.passagers_out_cells.length
      && this.hp > 0
    ) {
      ctx.drawImage(
        parking,
        0,
        0,
        300,
        300,
        this.x + removeX,
        this.y - 50 + removeY,
        100,
        100,
      );
    } else {
      //*
      if (this.drawGabarit >= 105) {
        // console.log(this.drawGabarit);
        this.drawGabarit = 105;
      } else if (this.drawGabarit <= 95) {
        // console.log(this.drawGabarit);
        this.drawGabarit = 95;
      }
      //* /

      if (this.drawGabarit > 100) {
        this.gabaritVector = 0;
      } else if (this.drawGabarit < 100) {
        this.gabaritVector = 1;
      }

      // this.drawConor+=0.01;

      if (this.conorVektor) {
        this.drawConor += 0.001;
      } else {
        this.drawConor -= 0.001;
      }

      if (this.drawConor >= 0.05) {
        this.conorVektor = 0;
        // console.log(this.drawConor)
      } else if (this.drawConor <= -0.05) {
        this.conorVektor = 1;
        // console.log(this.drawConor)
      }

      if (this.gabaritVector) {
        this.gabaritKoof += 0.002;
      } else {
        this.gabaritKoof -= 0.002;
      }

      this.drawGabarit += this.gabaritKoof;
    }

    ctx.save();
    ctx.translate(this.x + 50 + removeX, this.y + removeY);
    ctx.rotate(this.drawConor);

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      100,
      -this.drawGabarit / 2,
      -this.drawGabarit / 2,
      this.drawGabarit,
      this.drawGabarit,
    );

    ctx.restore();

    /*
  for(let i=0;i<this.ii_passagers.length;i++){

      ctx.fillStyle="violet"
      ctx.fillRect(this.ii_passagers[i].x+removeX,this.ii_passagers[i].y+removeY,50,50);

                      ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="25px Areal";
  ctx.fillStyle="black";

  ctx.fillText(this.persolalNumber,this.ii_passagers[i].x+removeX,this.ii_passagers[i].y+removeY);
  };
  // */

    /*
  for(let i=0;i<this.way.length;i++){

      ctx.fillStyle="violet"
      ctx.fillRect(this.way[i].x+removeX,this.way[i].y+removeY,50,50);

                      ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="25px Areal";
  ctx.fillStyle="black";

  ctx.fillText(this.persolalNumber,this.way[i].x+removeX,this.way[i].y+removeY);
  };
  // */

    /*
  if(this.tardetLandCell){

          ctx.fillStyle="red"
      ctx.fillRect(this.tardetLandCell.x+removeX,this.tardetLandCell.y+removeY,50,50);

  };

  ///*

  if(this.tardetLandCell){

                  ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="25px Areal";
  ctx.fillStyle="black";

  ctx.fillText(this.persolalNumber,this.tardetLandCell+removeX,this.tardetLandCell.y+removeY);

  ctx.fillStyle="green";

  ctx.fillText(this.persolalNumber,this.x+removeX,this.y+removeY);
  };

  // */

    //* /
    /*
  if(this.landing){

      for(let i=0;i<this.landing.landCells.length;i++){

              ctx.fillStyle="yellow"
      ctx.fillRect(this.landing.landCells[i].x+removeX,this.landing.landCells[i].y+removeY,50,50);

                      ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="25px Areal";
  ctx.fillStyle="black";

  ctx.fillStyle="green";

  ctx.fillText(i,this.landing.landCells[i].x+removeX,this.landing.landCells[i].y+removeY);

      };

  };
  // */
    /*
  if(this.spe){

          ctx.fillStyle="red"
      ctx.fillRect(this.spe.x+removeX,this.spe.y+removeY,50,50);

  };

  if(this.spe){

                  ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="25px Areal";
  ctx.fillStyle="black";

  ctx.fillText(this.persolalNumber,this.spe.x+removeX,this.spe.y+removeY);

  ctx.fillStyle="green";

  ctx.fillText(this.persolalNumber,this.x+removeX,this.y+removeY);
  };

  // */

    // console.log(this.drawConor);
    /// *
    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,(this.y-50)+removeY,100,100);

    // ctx.strokeStyle="violet";
    // ctx.strokeRect(this.damagePointX+removeX,this.damagePointY+removeY,5,5);
    //* /
  } else if (this.type === 'rizar') {
    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk_rage) {
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

        select_sound_fight(this.cell.unit, 'rage', volume);

        this.tyuk_rage = false;
      } else if (this.tyuk) {
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

        select_sound_fight(this.cell.unit, 'fight', volume);

        this.tyuk = false;
      }

      // if(this.hp<=0){console.log(this.distroyTimer);};

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 1000) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    // 75

    // if(!this.iGetMyCell){this.iStand=false;};

    if (!this.iStand) {
      this.moveTimer = 100;
    } else {
      this.moveTimer--;

      /*
  if(!this.gold){
      this.animY=0;
  }
  else{
      this.animY=0;
  };
      // */
    }

    if (this.iStand) {
      this.animY = 0;
    }

    // console.log(this.gold);

    // this.imageToDraw=peon;

    if (this.animTimer > 0) {
      this.animTimer--;
    }

    if (this.iStand && this.moveTimer <= 0 && !this.iFight) {
      if ((!this.animTimer || !this.moveVektor) && this.hp > 0) {
        this.animTimer = Math.floor(Math.random() * 150) + 30;

        // this.animX=Math.floor(Math.random()*5)*51;
        this.randomMoveVektor = Math.floor(Math.random() * 8);

        if (this.randomMoveVektor === 0) {
          this.moveVektor = 'right';
        } else if (this.randomMoveVektor === 1) {
          this.moveVektor = 'up_Right';
        } else if (this.randomMoveVektor === 2) {
          this.moveVektor = 'right_Down';
        } else if (this.randomMoveVektor === 3) {
          this.moveVektor = 'down';
        } else if (this.randomMoveVektor === 4) {
          this.moveVektor = 'down_Left';
        } else if (this.randomMoveVektor === 5) {
          this.moveVektor = 'left_Up';
        } else if (this.randomMoveVektor === 6) {
          this.moveVektor = 'up';
        } else if (this.randomMoveVektor === 7) {
          this.moveVektor = 'left';
        }
      }
    }

    // if(!this.moveVektor){console.log("pizda");};

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

    if (!this.iFight && this.moveVektor && !this.iStand) {
      if (this.animTimer === 0) {
        this.animTimer = 200;
      }

      if (this.animTimer % 2 === 0) {
        this.animY += 100;
      }

      if (this.animY >= 500 || this.iDraw === 0) {
        this.animY = 100;
      }
    } else if (this.iFight) {
      // console.log("ok");

      this.animY = this.iDoTakt * 100 + 400;

      if (this.animY === 400) {
        this.animY = 0;
      }
    }

    // console.log(this.drawQuatro);

    // if(this.fatherFraction.control==="comp"){

    // console.log(this.animY);

    // };

    // if(this.fatherFraction.control==="player"&&this.way.length){console.log(this.iStand);};
    // if(this.iStand&&this.myJoube!=="i build"){
    //	if(!this.gold){
    //	this.animY=0;
    //	}
    //	else{this.animY=530;};

    //	};

    // if(!this.iStand&&this.gold&&!this.iDraw){this.animY=575;};	//&&&!!!!!!!????????????

    if (this.hp <= 0) {
      if (this.distroyTimer < 992) {
        this.animY = 1100;
      } else if (this.distroyTimer < 996) {
        this.animY = 1000;
      } else if (this.distroyTimer < 1000) {
        this.animY = 900;
      }

      /// ///////////////////////////////////////////////
      if (this.distroyTimer < 990) {
        if (this.distroyTimer > 0) {
          ctx.globalAlpha = this.distroyTimer / 50;
        } else {
          ctx.globalAlpha = 0;
        }

        ctx.drawImage(
          this.imageToDraw,
          this.animX,
          1300,
          100,
          99,
          this.x + removeX - 30,
          this.y + removeY - 35,
          110,
          110,
        );

        ctx.globalAlpha = 1;

        if (this.distroyTimer > 0) {
          ctx.globalAlpha = this.distroyTimer / 900;
        } else {
          ctx.globalAlpha = 0;
        }

        ctx.drawImage(
          this.imageToDraw,
          this.animX,
          1200,
          100,
          99,
          this.x + removeX - 30,
          this.y + removeY - 35,
          110,
          110,
        );

        ctx.globalAlpha = 1;
      }

      /// //////////////////////////////////////////////

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 1100;
      } else {
        ctx.globalAlpha = 0;
      }
    }

    // if(this.fatherFraction.control==="comp"){console.log(this.distroyTimer/300);};

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      99,
      this.x + removeX - 30,
      this.y + removeY - 35,
      110,
      110,
    );

    ctx.globalAlpha = 1;

    this.iStand = true;

    this.iDraw = 2;

    if (this.drawQuatro) {
      const bar = (this.hpfull / 80) * this.hp;

      ctx.strokeStyle = 'green';
      ctx.strokeRect(this.x + removeX, this.y + removeY, 50, 50);

      if (bar > 70) {
        ctx.fillStyle = 'green';
      } else if (bar > 40) {
        ctx.fillStyle = 'yellow';
      } else if (bar > 0) {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(
        this.x + removeX,
        this.y + removeY - 8,
        (this.hp * 50) / this.hpfull,
        5,
      );
    }

    this.drawQuatro = false;

    /*
  if(this.target){

  ctx.fillStyle="red";
  ctx.fillRect(this.target.x+removeX,this.target.y+removeY,50,50);

  };
  // */
    // ctx.fillStyle="red";
    // ctx.fillRect(this.hotCell.x+removeX,this.hotCell.y+removeY,50,50);
  } else if (this.type === 'ballista') {
    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk) {
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

        select_sound_fight(this.cell.unit, 'fight', volume);

        this.tyuk = false;
      }

      // if(this.hp<=0){console.log(this.distroyTimer);};

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 1000) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    if (this.drawQuatro) {
      const bar = (100 * this.hp) / this.hpfull; // (this.hpfull/100)*this.hp;

      // console.log(this.hpfull/100)
      // ctx.strokeStyle="green";
      // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
      ctx.globalAlpha = 0.3;

      ctx.drawImage(
        vydel,
        this.q_animX,
        this.q_animY,
        100,
        100,
        this.x + removeX - 25,
        this.y + removeY - 20,
        100,
        100,
      );

      ctx.globalAlpha = 1;

      this.q_timer++;

      if (this.q_timer === 3) {
        this.q_timer = 0;
        this.q_animX += 100;
      }

      if (this.q_animX === 1500) {
        this.q_animX = 0;
      }
      // if(this.q_animY===300){this.q_animY=0;};

      if (bar > 70) {
        ctx.fillStyle = 'green';
      } else if (bar > 40) {
        ctx.fillStyle = 'yellow';
      } else if (bar > 0) {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(
        this.x + removeX + 2.5,
        this.y + removeY - 30,
        (this.hp * 45) / this.hpfull,
        5,
      );
    }

    this.drawQuatro = false;

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

    if (this.animTimer) {
      this.animTimer--;
    }

    if (this.animTimer === 0) {
      this.animTimer = 20000;
    }

    if (!this.iFight && this.moveVektor && !this.iStand) {
      // console.log(this.iStand);

      if (this.animTimer % 3 === 0) {
        this.animY += 100;
      }

      if (
        this.animY >= 200
        // ||this.iDraw===0
      ) {
        this.animY = 0;
      }
    } else if (this.iFight) {
      // console.log(this.iDoTakt);
      // pausa=1;

      // this.animY=this.iDoTakt*100+100;

      // if(this.animY===400){this.animY=300;};

      if (this.iDoTakt === 3) {
        this.animY = 300;
      }
      if (this.iDoTakt === 4) {
        this.animY = 200;
      }

      // console.log(this.animY)
    }

    if (this.hp > 0) {
      if (this.stopTroll) {
        this.animY = 300;
      }

      ctx.drawImage(
        this.imageToDraw,
        this.animX,
        this.animY,
        100,
        100,
        this.x + removeX - 8,
        this.y + removeY - 13,
        70,
        70,
      );
    } else {
      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }

      ctx.drawImage(
        ballista_orc_hlam,
        0,
        0,
        100,
        100,
        this.x + removeX - 10,
        this.y + removeY - 8,
        70,
        70,
      );

      ctx.globalAlpha = 1;

      // console.log(this.distroyTimer)
      // pausa=1

      if (this.distroyTimer === 501) {
        ctx.drawImage(
          b_oo,
          0,
          0,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 500) {
        ctx.drawImage(
          b_oo,
          100,
          0,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 499) {
        ctx.drawImage(
          b_oo,
          200,
          0,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 498) {
        ctx.drawImage(
          b_oo,
          300,
          0,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 497) {
        ctx.drawImage(
          b_oo,
          0,
          100,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 496) {
        ctx.drawImage(
          b_oo,
          100,
          100,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 495) {
        ctx.drawImage(
          b_oo,
          200,
          100,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 494) {
        ctx.drawImage(
          b_oo,
          300,
          100,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 493) {
        ctx.drawImage(
          b_oo,
          0,
          200,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 492) {
        ctx.drawImage(
          b_oo,
          100,
          200,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 491) {
        ctx.drawImage(
          b_oo,
          200,
          200,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 490) {
        ctx.drawImage(
          b_oo,
          300,
          200,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 489) {
        ctx.drawImage(
          b_oo,
          0,
          300,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 488) {
        ctx.drawImage(
          b_oo,
          100,
          300,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 487) {
        ctx.drawImage(
          b_oo,
          200,
          300,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      } else if (this.distroyTimer === 486) {
        ctx.drawImage(
          b_oo,
          300,
          300,
          100,
          100,
          this.x + removeX - 15,
          this.y + removeY - 15,
          80,
          80,
        );
      }

      // ctx.fillStyle="blue";
      // ctx.fillRect(this.x+25+removeX,this.y+25+removeY,5,5);
    }

    if (this.iFight && this.iDoTakt < 3) {
      this.animY = 0;
    }

    // console.log("ok");
    // ctx.strokeStyle="red";
    // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);

    this.iStand = true;

    if (this.firePoint) {
      // ctx.fillStyle="blue";
      // ctx.fillRect(this.firePoint.x+removeX,this.firePoint.y+removeY,5,5);
    }
  } else if (this.type === 'boo') {
    ctx.globalAlpha = this.alpf;

    ctx.drawImage(
      boo,
      0,
      0,
      100,
      100,
      this.x + removeX - 20,
      this.y + removeY - 5,
      50,
      50,
    );

    ctx.globalAlpha = 1;
    // console.log("ok");
  } else if (this.type === 3) {
    // luchnik

    // 75

    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk) {
        const dis = get_distanse_on_lineyka(
          this.cell,
          50,
          gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ],
          50,
        );

        let volume = (450 - dis) / 450;

        // pausa=1;
        if (volume < 0) {
          volume = 0;
        }

        select_sound_fight(this.cell.unit, 'fight', volume);

        this.tyuk = false;
      }

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 500) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    if (!this.iStand) {
      this.moveTimer = 100;
    } else {
      this.moveTimer--;
      /// *
      if (!this.gold) {
        this.animY = 0;
      } else {
        this.animY = 0;
      }
      //* /
    }

    // console.log(this.gold);

    // this.imageToDraw=peon;

    if (this.animTimer > 0) {
      this.animTimer--;
    }

    if (
      this.iStand
      && this.moveTimer <= 0
      && !this.iFight
      && !this.iGetTarget
    ) {
      if ((!this.animTimer || !this.moveVektor) && this.hp > 0) {
        this.animTimer = Math.floor(Math.random() * 150) + 30;

        // this.animX=Math.floor(Math.random()*5)*51;
        this.randomMoveVektor = Math.floor(Math.random() * 8);

        if (this.randomMoveVektor === 0) {
          this.moveVektor = 'right';
        } else if (this.randomMoveVektor === 1) {
          this.moveVektor = 'up_Right';
        } else if (this.randomMoveVektor === 2) {
          this.moveVektor = 'right_Down';
        } else if (this.randomMoveVektor === 3) {
          this.moveVektor = 'down';
        } else if (this.randomMoveVektor === 4) {
          this.moveVektor = 'down_Left';
        } else if (this.randomMoveVektor === 5) {
          this.moveVektor = 'left_Up';
        } else if (this.randomMoveVektor === 6) {
          this.moveVektor = 'up';
        } else if (this.randomMoveVektor === 7) {
          this.moveVektor = 'left';
        }
      }
    }

    // if(!this.moveVektor){console.log("pizda");};

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

    if (!this.iFight && this.moveVektor && !this.iStand) {
      if (this.animTimer === 0) {
        this.animTimer = 200;
      }

      if (this.animTimer % 3 === 0) {
        this.animY += 100;
      }

      if (this.animY >= 500 || this.iDraw === 0) {
        this.animY = 100;
      }
    } else if (this.iFight) {
      // console.log("ok");

      this.animY = this.iDoTakt * 100 + 400;

      if (this.animY === 400) {
        this.animY = 0;
      }
    }

    // console.log(this.drawQuatro);

    // if(this.fatherFraction.control==="comp"){

    // console.log(this.animY);

    // };

    // if(this.fatherFraction.control==="player"&&this.way.length){console.log(this.iStand);};
    // if(this.iStand&&this.myJoube!=="i build"){
    //	if(!this.gold){
    //	this.animY=0;
    //	}
    //	else{this.animY=530;};

    //	};

    // if(!this.iStand&&this.gold&&!this.iDraw){this.animY=575;};	//&&&!!!!!!!????????????

    if (this.hp <= 0) {
      if (this.distroyTimer < 492) {
        this.animY = 1100;
      } else if (this.distroyTimer < 496) {
        this.animY = 1000;
      } else if (this.distroyTimer < 500) {
        this.animY = 900;
      }

      if (this.distroyTimer > 0) {
        ctx.globalAlpha = this.distroyTimer / 100;
      } else {
        ctx.globalAlpha = 0;
      }
    }

    if (this.drawQuatro) {
      const bar = (this.hpfull / 80) * this.hp;

      // ctx.strokeStyle="green";
      // ctx.strokeRect(this.x+removeX,this.y+removeY,50,50);
      ctx.globalAlpha = 0.3;

      ctx.drawImage(
        vydel,
        this.q_animX,
        this.q_animY,
        100,
        100,
        this.x + removeX - 25,
        this.y + removeY - 20,
        100,
        100,
      );

      ctx.globalAlpha = 1;

      this.q_timer++;

      if (this.q_timer === 3) {
        this.q_timer = 0;
        this.q_animX += 100;
      }

      if (this.q_animX === 1500) {
        this.q_animX = 0;
      }
      // if(this.q_animY===300){this.q_animY=0;};

      if (bar > 70) {
        ctx.fillStyle = 'green';
      } else if (bar > 40) {
        ctx.fillStyle = 'yellow';
      } else if (bar > 0) {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(
        this.x + removeX + 2.5,
        this.y + removeY - 30,
        (this.hp * 45) / this.hpfull,
        5,
      );
    }

    this.drawQuatro = false;

    ctx.drawImage(
      this.imageToDraw,
      this.animX,
      this.animY,
      100,
      99,
      this.x + removeX - 30,
      this.y + removeY - 35,
      110,
      110,
    );

    ctx.globalAlpha = 1;

    this.iStand = true;

    this.iDraw = 2;
  } else if (this.type === 1) {
    // peon

    if (this.fatherFraction.nation === 'orc') {
      if (this.fatherFraction.fraction === 'redOrcs') {
        if (!this.gold && !this.wood && this.imageToDraw !== peon_new) {
          this.imageToDraw = peon_new;
        } else if (this.gold && this.imageToDraw !== peon_with_gold) {
          this.imageToDraw = peon_with_gold;
        } else if (this.wood && this.imageToDraw !== peon_with_wood) {
          this.imageToDraw = peon_with_wood;
        }
      } else if (this.fatherFraction.fraction === 'blackOrcs') {
        if (!this.gold && !this.wood && this.imageToDraw !== peon_new_black) {
          this.imageToDraw = peon_new_black;
        } else if (this.gold && this.imageToDraw !== peon_with_gold_black) {
          this.imageToDraw = peon_with_gold_black;
        } else if (this.wood && this.imageToDraw !== peon_with_wood_black) {
          this.imageToDraw = peon_with_wood_black;
        }
      } else if (this.fatherFraction.fraction === 'lazurOrcs') {
        if (!this.gold && !this.wood && this.imageToDraw !== peon_new_lazur) {
          this.imageToDraw = peon_new_lazur;
        } else if (this.gold && this.imageToDraw !== peon_with_gold_lazur) {
          this.imageToDraw = peon_with_gold_lazur;
        } else if (this.wood && this.imageToDraw !== peon_with_wood_lazur) {
          this.imageToDraw = peon_with_wood_lazur;
        }
      }
    } else if (this.fatherFraction.fraction === 'h_blue') {
      if (!this.gold && !this.wood && this.imageToDraw !== peon_new_lazur) {
        this.imageToDraw = peon_h_blue;
      } else if (this.gold && this.imageToDraw !== peon_with_gold_lazur) {
        this.imageToDraw = peon_gold_h_blue;
      } else if (this.wood && this.imageToDraw !== peon_with_wood_lazur) {
        this.imageToDraw = peon_wood_h_blue;
      }
    }

    // if(!this.imageToDraw){console.log(this.fatherFraction.fraction)}

    /// /////////////////////////////	SOUND

    if (sounds_fly.length + sounds_fight.length < 30) {
      if (this.tyuk) {
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

        select_sound_fight(this.cell.unit, 'tree_sound', volume);

        this.tyuk = false;
      }

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 500) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    // 75
    // console.log(this.animY+" up");
    let iBuildWithGold = 0;

    if (this.gold && this.myJoube === 'i build') {
      this.gold = 0;
      iBuildWithGold = 1;
    }

    if (!this.iStand) {
      this.moveTimer = 100;
    } else {
      this.moveTimer--;
      /// *
      if (!this.gold) {
        this.animY = 0;
      } else {
        this.animY = 0;
      }
      //* /
    }

    // console.log(this.gold);

    // this.imageToDraw=peon;

    if (this.animTimer > 0) {
      this.animTimer--;
    }

    if (this.iStand && this.moveTimer <= 0 && this.myJoube !== 'i build') {
      if ((!this.animTimer || !this.moveVektor) && this.hp > 0) {
        this.animTimer = Math.floor(Math.random() * 150) + 30;

        // this.animX=Math.floor(Math.random()*5)*51;
        this.randomMoveVektor = Math.floor(Math.random() * 8);

        if (this.randomMoveVektor === 0) {
          this.moveVektor = 'right';
        } else if (this.randomMoveVektor === 1) {
          this.moveVektor = 'up_Right';
        } else if (this.randomMoveVektor === 2) {
          this.moveVektor = 'right_Down';
        } else if (this.randomMoveVektor === 3) {
          this.moveVektor = 'down';
        } else if (this.randomMoveVektor === 4) {
          this.moveVektor = 'down_Left';
        } else if (this.randomMoveVektor === 5) {
          this.moveVektor = 'left_Up';
        } else if (this.randomMoveVektor === 6) {
          this.moveVektor = 'up';
        } else if (this.randomMoveVektor === 7) {
          this.moveVektor = 'left';
        }
      }
    }

    // if(!this.moveVektor){console.log("pizda");};

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

    if (this.myJoube !== 'i build' && this.moveVektor && !this.iStand) {
      if (this.animTimer === 0) {
        this.animTimer = 200;
      }

      if (this.animTimer % 4 === 0) {
        this.animY += 100;
      }

      if (this.animY >= 500 || this.iDraw === 0) {
        this.animY = 100;
      }
    } else if (this.myJoube === 'i build') {
      // console.log("ok");

      this.animY = this.iDoTakt * 100 + 500;
    }

    // console.log(this.drawQuatro);

    // if(this.fatherFraction.control==="comp"){

    // console.log(this.animY);

    // };

    // if(this.fatherFraction.control==="player"&&this.way.length){console.log(this.iStand);};
    // if(this.iStand&&this.myJoube!=="i build"){
    //	if(!this.gold){
    //	this.animY=0;
    //	}
    //	else{this.animY=530;};

    //	};

    // if(!this.iStand&&this.gold&&!this.iDraw){this.animY=575;};	//&&&!!!!!!!????????????

    if (this.hp <= 0) {
      if (this.distroyTimer < 492) {
        this.animY = 1200;
      } else if (this.distroyTimer < 496) {
        this.animY = 1100;
      } else if (this.distroyTimer < 500) {
        this.animY = 1000;
      }

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
      100,
      100,
      this.x + removeX - 30,
      this.y + removeY - 35,
      110,
      110,
    );

    ctx.globalAlpha = 1;

    this.iStand = true;

    if (iBuildWithGold) {
      this.gold = 100;
    }

    this.iDraw = 2;

    if (this.drawQuatro) {
      ctx.strokeStyle = 'green';
      ctx.strokeRect(this.x + removeX, this.y + removeY, 50, 50);
    }

    this.drawQuatro = false;

    /*

  for(let i=0;i<this.contaktCells.length;i++){
  ctx.fillStyle="red";
  ctx.fillRect(this.contaktCells[i].x+removeX,this.contaktCells[i].y+removeY,50,50);

  };
  // */
    // ctx.fillStyle="black";
    // ctx.fillRect(this.cell.x+removeX,this.cell.y+removeY,50,50);

    // ctx.fillStyle="red";
    // ctx.fillRect(this.hotCell.x+removeX,this.hotCell.y+removeY,50,50);
  } else if (this.type === 2) {
    // mechnick

    /// /////////////////////////////	SOUND

    if (sounds_fight.length < 35) {
      if (this.tyuk) {
        const dis = get_distanse_on_lineyka(
          this.cell,
          50,
          gameFielg[centerDrawPoint.cellObj.vertikal][
            centerDrawPoint.cellObj.horizont
          ],
          50,
        );

        let volume = (450 - dis) / 450;

        // pausa=1;
        if (volume < 0) {
          volume = 0;
        }

        select_sound_fight(this.cell.unit, 'fight', volume);

        this.tyuk = false;
      }

      if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 500) {
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

        select_sound_fight(this.cell.unit, 'dead', volume);
      }
    }
    /// ////////////////////////////////////

    // 75

    if (!this.iStand) {
      this.moveTimer = 100;
    } else {
      this.moveTimer--;
      /// *
      if (!this.gold) {
        this.animY = 0;
      } else {
        this.animY = 0;
      }
      //* /
    }

    // console.log(this.gold);

    // this.imageToDraw=peon;

    if (this.animTimer > 0) {
      this.animTimer--;
    }

    if (this.iStand && this.moveTimer <= 0 && !this.iFight) {
      if ((!this.animTimer || !this.moveVektor) && this.hp > 0) {
        this.animTimer = Math.floor(Math.random() * 150) + 30;

        // this.animX=Math.floor(Math.random()*5)*51;
        this.randomMoveVektor = Math.floor(Math.random() * 8);

        if (this.randomMoveVektor === 0) {
          this.moveVektor = 'right';
        } else if (this.randomMoveVektor === 1) {
          this.moveVektor = 'up_Right';
        } else if (this.randomMoveVektor === 2) {
          this.moveVektor = 'right_Down';
        } else if (this.randomMoveVektor === 3) {
          this.moveVektor = 'down';
        } else if (this.randomMoveVektor === 4) {
          this.moveVektor = 'down_Left';
        } else if (this.randomMoveVektor === 5) {
          this.moveVektor = 'left_Up';
        } else if (this.randomMoveVektor === 6) {
          this.moveVektor = 'up';
        } else if (this.randomMoveVektor === 7) {
          this.moveVektor = 'left';
        }
      }
    }

    // if(!this.moveVektor){console.log("pizda");};

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

    if (!this.iFight && this.moveVektor && !this.iStand) {
      if (this.animTimer === 0) {
        this.animTimer = 200;
      }

      if (this.animTimer % 3 === 0) {
        this.animY += 100;
      }

      if (this.animY >= 500 || this.iDraw === 0) {
        this.animY = 100;
      }
    } else if (this.iFight) {
      // console.log("ok");

      this.animY = this.iDoTakt * 100 + 400;

      if (this.animY === 400) {
        this.animY = 0;
      }
    }

    // console.log(this.drawQuatro);

    // if(this.fatherFraction.control==="comp"){

    // console.log(this.animY);

    // };

    // if(this.fatherFraction.control==="player"&&this.way.length){console.log(this.iStand);};
    // if(this.iStand&&this.myJoube!=="i build"){
    //	if(!this.gold){
    //	this.animY=0;
    //	}
    //	else{this.animY=530;};

    //	};

    // if(!this.iStand&&this.gold&&!this.iDraw){this.animY=575;};	//&&&!!!!!!!????????????

    if (this.hp <= 0) {
      if (this.distroyTimer < 492) {
        this.animY = 1100;
      } else if (this.distroyTimer < 496) {
        this.animY = 1000;
      } else if (this.distroyTimer < 500) {
        this.animY = 900;
      }

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
      100,
      99,
      this.x + removeX - 30,
      this.y + removeY - 35,
      110,
      110,
    );

    ctx.globalAlpha = 1;

    this.iStand = true;

    this.iDraw = 2;

    if (this.drawQuatro) {
      const bar = (this.hpfull / 80) * this.hp;

      ctx.strokeStyle = 'green';
      ctx.strokeRect(this.x + removeX, this.y + removeY, 50, 50);

      if (bar > 70) {
        ctx.fillStyle = 'green';
      } else if (bar > 40) {
        ctx.fillStyle = 'yellow';
      } else if (bar > 0) {
        ctx.fillStyle = 'red';
      }

      ctx.fillRect(
        this.x + removeX,
        this.y + removeY - 8,
        (this.hp * 50) / this.hpfull,
        5,
      );
    }

    this.drawQuatro = false;

    /*
  if(this.target){

  ctx.fillStyle="red";
  ctx.fillRect(this.target.x+removeX,this.target.y+removeY,50,50);

  };
  // */
    // ctx.fillStyle="red";
    // ctx.fillRect(this.hotCell.x+removeX,this.hotCell.y+removeY,50,50);
  }

  if (this.hp > 0) {
    if (this.rage) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x + removeX + 17, this.y + removeY - 20, 15, 15);

      ctx.lineWidth = 3;
      ctx.strokeStyle = 'white';
      ctx.strokeRect(this.x + removeX + 17, this.y + removeY - 20, 15, 15);
    }

    for (let i = 0; i < this.hp_up.length; i++) {
      ctx.drawImage(
        bul_bul,
        this.hp_up[i].animX,
        0,
        100,
        100,
        this.x + removeX - 25,
        this.y + removeY - 25,
        100,
        100,
      );
    }

    if (this.nar) {
      ctx.drawImage(
        nar,
        0,
        0,
        100,
        100,
        this.x + removeX,
        this.y + removeY,
        50,
        50,
      );
    }
  }

  /*
  if(
  this.fatherFraction.revers
  &&
  this.fatherFraction.revers.on_evacuation
  )
  {

      let ok;

  //if(this.fatherFraction.revers.transports){
  //for(let i=0;i<this.fatherFraction.revers.transports.length;i++){

      if(this.fatherFraction.revers.on_evacuation.indexOf(this.cell.unit)!==-1){ok=true; };

  //};
  //};

  if(ok){
  ctx.fillStyle="red";
  ctx.fillRect(this.x+removeX,this.y+removeY,50,50);
  };
  };
  // */

  /*
  for(let i=0;i<this.way.length;i++){

  ctx.fillStyle="red";
  ctx.fillRect(this.way[i].x+removeX,this.way[i].y+removeY,50,50);

  };

  // */
  /*
              ctx.textBaseline="top";
  ctx.textAlign="left";
  ctx.font="15px Areal";
  ctx.fillStyle="black";

  ctx.fillText(this.fatherFraction.fraction,this.x+removeX,this.y+removeY);
  ctx.fillStyle="red";
  ctx.fillText(this.fatherFraction.control,this.x+removeX,this.y+removeY+15);
  ctx.fillStyle="black";
  ctx.fillText("type "+this.type,this.x+removeX,this.y+removeY+30);

      ctx.fillText(this.persolalNumber,this.x+removeX+40,this.y+removeY+15);
  */
};
