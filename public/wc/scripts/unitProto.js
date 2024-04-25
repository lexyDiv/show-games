Unit.prototype.drawFly = function () {
  ////////////////////////////////	SOUND

  if (sounds_fly.length + sounds_fight.length < 35) {
    if (this.tyuk) {
      let dis = get_distanse_on_lineyka(
        this.cell,
        100,
        gameFielg[centerDrawPoint.cellObj.vertikal][
          centerDrawPoint.cellObj.horizont
        ],
        50
      );

      let volume = (450 - dis) / 450;

      //console.log(volume); pausa=1;
      if (volume < 0) {
        volume = 0;
      }

      select_sound_fight(this.cell.dragoon, "fight", volume);

      this.tyuk = false;
    }

    //if(this.hp<=0){console.log(this.distroyTimer);};

    if (this.hp <= 0 && !this.dead_sound && this.distroyTimer === 29) {
      //

      this.dead_sound = true;

      let dis = get_distanse_on_lineyka(
        this.cell,
        50,
        gameFielg[centerDrawPoint.cellObj.vertikal][
          centerDrawPoint.cellObj.horizont
        ],
        50
      );

      let volume = (450 - dis) / 450;

      //console.log(volume); pausa=1;
      if (volume < 0) {
        volume = 0;
      }

      select_sound_fight(this.cell.dragoon, "dead", volume);
    }
  }
  ///////////////////////////////////////

  this.myDraw = false;

  if (this.moveVektor === "right") {
    // this.imageToDraw=peon;

    this.animX = 200;

    //if(this.gold){this.animX=100;};
  } else if (this.moveVektor === "right_Down") {
    // this.imageToDraw=peon;

    this.animX = 300;

    //if(this.gold){this.animX=140;};
  } else if (this.moveVektor === "down") {
    // this.imageToDraw=peon;

    this.animX = 400;

    //if(this.gold){this.animX=180;};
  } else if (this.moveVektor === "down_Left") {
    // this.imageToDraw=peon2;

    this.animX = 500;

    //if(this.gold){this.animX=75;};
  } else if (this.moveVektor === "left") {
    // this.imageToDraw=peon2;

    this.animX = 600;

    //if(this.gold){this.animX=115;};
  } else if (this.moveVektor === "left_Up") {
    // this.imageToDraw=peon2;

    this.animX = 700;

    // if(this.gold){this.animX=150;};
  } else if (this.moveVektor === "up") {
    // this.imageToDraw=peon;

    this.animX = 0;

    //if(this.gold){this.animX=30;};
  } else if (this.moveVektor === "up_Right") {
    // this.imageToDraw=peon;

    this.animX = 100;

    // if(this.gold){this.animX=65;};
  }
  //////////////////////////////////////////
  if (!this.animDr) {
    this.animDr = 10000;
  }
  this.animDr--;

  if (
    (!this.iFight && !this.iStand && this.animDr % 4 === 0) ||
    (this.iStand && this.animDr % 5 === 0)
  ) {
    this.animY += 100;

    if (this.animY >= 400) {
      this.animY = 0;
    }
  }

  if (this.fatherFraction.nation === "orc") {
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

    //console.log(this.animY);
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
    100
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
    150
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
      100
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
  //*/

  /*
      ctx.lineWidth=3;
      ctx.strokeStyle="violet";
  ctx.strokeRect(this.x+removeX,(this.y+removeY)-50,100,100);
  
  
  
  ctx.fillStyle="red";
  ctx.fillRect(this.firePoint.x+removeX,(this.firePoint.y+removeY),5,5);
  */
};

Unit.prototype.checkAntyMoveVektors = function (unit) {
  /*	
if(conor>=67.5&&conor<112.5){
	vector="up";
	}
else if(conor>=112.5&&conor<157.5){
	vector="up_Right";
}
else if(conor>=157.5&&conor<202.5){
	vector="right";
}
else if(conor>=202.5&&conor<247.5){
	vector="right_Down";
}
else if(conor>=247.5&&conor<292.5){
	vector="down";
}
else if(conor>=292.5&&conor<337.5){
	vector="down_Left";
}
else if((conor>=337.5&&conor<=360)||(conor>=0&&conor<22.5)){
	vector="left";
}
else if(conor>=22.5&&conor<67.5){
	vector="left_Up";
}	
*/

  if (this.persolalNumber === unit.persolalNumber) {
    return "her";
  }

  let vektor = unit.moveVektor;

  if (vektor === "up") {
    if (
      this.moveVektor === "down" ||
      this.moveVektor === "right_Down" ||
      this.moveVektor === "down_Left"
    ) {
      return "anty";
    }
  } else if (vektor === "up_Right") {
    if (
      this.moveVektor === "down_Left" ||
      this.moveVektor === "down" ||
      this.moveVektor === "left"
    ) {
      return "anty";
    }
  } else if (vektor === "right") {
    if (
      this.moveVektor === "left" ||
      this.moveVektor === "down_Left" ||
      this.moveVektor === "left_Up"
    ) {
      return "anty";
    }
  } else if (vektor === "right_Down") {
    if (
      this.moveVektor === "left_Up" ||
      this.moveVektor === "left" ||
      this.moveVektor === "up"
    ) {
      return "anty";
    }
  } else if (vektor === "down") {
    if (
      this.moveVektor === "up" ||
      this.moveVektor === "left_Up" ||
      this.moveVektor === "up_Right"
    ) {
      return "anty";
    }
  } else if (vektor === "down_Left") {
    if (
      this.moveVektor === "up_Right" ||
      this.moveVektor === "up" ||
      this.moveVektor === "right"
    ) {
      return "anty";
    }
  } else if (vektor === "left") {
    if (
      this.moveVektor === "right" ||
      this.moveVektor === "up_Right" ||
      this.moveVektor === "right_Down"
    ) {
      return "anty";
    }
  } else if (vektor === "left_Up") {
    if (
      this.moveVektor === "right_Down" ||
      this.moveVektor === "down" ||
      this.moveVektor === "right"
    ) {
      return "anty";
    }
  }

  return "her";
};

Unit.prototype.checkGoodLandingCell = function (cell) {
  //console.log("ok");

  let ok_1 = true;

  let vertikal = cell.vertikal;
  let horizont = cell.horizont;

  if (
    gameFielg[vertikal] &&
    gameFielg[vertikal][horizont] &&
    !gameFielg[vertikal - 1][horizont].water
    //||
    //!gameFielg[vertikal-1][horizont+1].water
  ) {
    vertikal += 1;
  }

  for (let v = vertikal - 1; v <= vertikal; v++) {
    for (let h = horizont; h <= horizont + 1; h++) {
      if (
        !gameFielg[v] ||
        !gameFielg[v][h] ||
        !gameFielg[v][h].water ||
        (gameFielg[v][h].unit &&
          gameFielg[v][h].unit.cell.sea &&
          gameFielg[v][h].unit.persolalNumber !== this.persolalNumber) ||
        gameFielg[v][h].vossalObj
      ) {
        ok_1 = false;
      }
    }
  }

  return ok_1;
};

Unit.prototype.getMy_landing_cell = function () {
  let min = [];

  let continent = allContinents[this.landing.base_cell.continent];

  for (let i = 0; i < continent.conturLine_sea_Cells.length; i++) {
    if (
      continent.conturLine_sea_Cells[i].sea === this.cell.sea &&
      this.checkGoodLandingCell(continent.conturLine_sea_Cells[i])
    ) {
      let dis = get_distanse_on_lineyka(
        this.landing.base_cell,
        50,
        continent.conturLine_sea_Cells[i],
        50
      );

      if (!min.length || min[0] > dis) {
        min = [dis, continent.conturLine_sea_Cells[i]];
      }
    }
  }

  if (
    !gameFielg[min[1].vertikal - 1][min[1].horizont].water ||
    !gameFielg[min[1].vertikal - 1][min[1].horizont + 1].water
  ) {
    min[1] = gameFielg[min[1].vertikal + 1][min[1].horizont];
  }

  ///*
  if (
    !gameFielg[min[1].vertikal][min[1].horizont + 1].water ||
    !gameFielg[min[1].vertikal - 1][min[1].horizont + 1].water
  ) {
    min[1] = gameFielg[min[1].vertikal][min[1].horizont - 2];
    //console.log("ok");
  }

  //min[1]=gameFielg[min[1].vertikal][min[1].horizont-2];

  return min[1];
};

Unit.prototype.panick_peoples = function (target) {
  let cells = [];

  for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
    for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
      if (gameFielg[i] && gameFielg[i][k] && gameFielg[i][k].free) {
        cells.push(gameFielg[i][k]);
      }
    }
  }

  let max = [];

  for (let i = 0; i < cells.length; i++) {
    let a = cells[i].x + 25 - target.damagePointX;
    let b = cells[i].y + 25 - target.damagePointY;

    let c = Math.sqrt(a * a + b * b);

    if (!max.length || max[0] < c) {
      max = [c, cells[i]];
    }
  }

  if (max.length) {
    this.clickSave = new ClickSave(0, max[1]);

    if (!this.active) {
      this.fatherFraction.activeUnits.push(this.cell.unit);
      this.active = true;
    }
  }
};

Unit.prototype.magick_ok = function (arg) {
  if (
    (arg.neitral || arg.fatherFraction.union === this.fatherFraction.union) &&
    this.type === "mag"
  ) {
    return false;
  }

  //console.log("dddd");

  if (this.magick === "cure") {
    //console.log(arg.fatherFraction.fraction===this.fatherFraction.fraction);

    if (
      arg.unitStatus === "life" &&
      !arg.neitral &&
      arg.gabarit === 50 &&
      arg.fatherFraction.fraction === this.fatherFraction.fraction &&
      arg.cell &&
      arg.hp > 0 &&
      arg.hp < arg.hpfull &&
      arg.persolalNumber !== this.persolalNumber
    ) {
      //console.log("ok");
      return true;
    } else {
      return false;
    }
  } else if (this.magick === "rage") {
    //console.log(arg.fatherFraction.fraction===this.fatherFraction.fraction);

    if (
      arg.unitStatus === "life" &&
      !arg.neitral &&
      arg.warrior &&
      arg.gabarit === 50 &&
      arg.fatherFraction.fraction === this.fatherFraction.fraction &&
      arg.cell &&
      arg.hp > 0 &&
      arg.persolalNumber !== this.persolalNumber
    ) {
      //console.log("ok");
      return true;
    } else {
      return false;
    }
  } else if (this.magick === "tor") {
    if (arg.gabarit === 50 || arg.fly) {
      return false;
    } else if (arg.gabarit > 50 && !arg.fly) {
      return true;
    }
  } else if (this.magick === "z" || this.magick === "nar") {
    if (arg.gabarit === 50 || arg.fly) {
      return true;
    } else if (arg.gabarit > 50 && !arg.fly) {
      return false;
    }
  }
};

Unit.prototype.checkNextSweemeCell = function (cell) {
  let nextCell_ok = 0;

  //let alienWay=[];

  if (this.way.length) {
    let vertikal = this.way[this.way.length - 1].vertikal;
    let horizont = this.way[this.way.length - 1].horizont;

    for (let v = vertikal - 1; v <= vertikal; v++) {
      let brc;

      for (let h = horizont; h <= horizont + 1; h++) {
        if (
          gameFielg[v] &&
          gameFielg[v][h] &&
          gameFielg[v][h].water &&
          !gameFielg[v][h].vossalObj &&
          (!gameFielg[v][h].unit ||
            (gameFielg[v][h].unit &&
              gameFielg[v][h].unit.persolalNumber === this.persolalNumber))
        ) {
          nextCell_ok++;
        } else {
          brc = true;
          break;
        }
      }

      if (brc) {
        break;
      }
    }
  }

  return nextCell_ok;
};

Unit.prototype.checkNextDragCell = function () {
  let nextCell_ok = 0;

  //let alienWay=[];

  if (this.way.length) {
    let vertikal = this.way[this.way.length - 1].vertikal;
    let horizont = this.way[this.way.length - 1].horizont;

    for (let v = vertikal - 1; v <= vertikal; v++) {
      let brc;

      for (let h = horizont; h <= horizont + 1; h++) {
        if (
          gameFielg[v] &&
          gameFielg[v][h] &&
          (!gameFielg[v][h].dragoon ||
            (gameFielg[v][h].dragoon &&
              gameFielg[v][h].dragoon.persolalNumber === this.persolalNumber))
        ) {
          nextCell_ok++;
        } else {
          brc = true;
          break;
        }
      }

      if (brc) {
        break;
      }
    }
  }

  return nextCell_ok;
};

Unit.prototype.ground_panick = function (agressor) {
  if (!agressor.cell) {
    return;
  }

  let cells = [];

  for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
    for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
      if (gameFielg[i] && gameFielg[i][k] && gameFielg[i][k].free) {
        cells.push(gameFielg[i][k]);
      }
    }
  }

  let max = [];

  for (let i = 0; i < cells.length; i++) {
    let dis = get_distanse_on_lineyka(
      agressor.cell,
      agressor.gabarit,
      cells[i],
      50
    );

    if (!max.length || max[0] < dis) {
      max = [dis, cells[i]];
    }
  }

  if (max.length && this.cell) {
    this.clickSave = new ClickSave(0, max[1]);

    if (this.warrior) {
      //this.ii_saveCell=this.born_cell;
    }

    if (!this.active) {
      this.fatherFraction.activeUnits.push(this.cell.unit);
      this.active = true;
    }
  }
};

Unit.prototype.sea_panick = function (agressor, born_cell) {
  if (!agressor || !agressor.cell) {
    return;
  }

  let cells = [];

  for (let i = this.vertikal - 10; i <= this.vertikal + 10; i++) {
    for (let k = this.horizont - 10; k <= this.horizont + 10; k++) {
      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        this.good_cell_for_ship(gameFielg[i][k])
      ) {
        cells.push(gameFielg[i][k]);
      }
    }
  }

  let max = [];

  for (let i = 0; i < cells.length; i++) {
    let dis = get_distanse_on_lineyka(
      agressor.cell,
      agressor.gabarit,
      cells[i],
      100
    );

    if (!max.length || max[0] < dis) {
      max = [dis, cells[i]];
    }
  }

  if (max.length && this.cell) {
    //console.log("go");

    this.clickSave = new ClickSave(0, max[1]);
    this.born_cell = max[1];

    if (this.warrior) {
      this.ii_saveCell = this.born_cell;
    }

    if (!this.active) {
      this.fatherFraction.activeUnits.push(this.cell.unit);
      this.active = true;
    }
  }
};

Unit.prototype.cleared_way_ground = function () {
  for (let i = this.vertikal - 3; i <= this.vertikal + 3; i++) {
    for (let k = this.horizont - 3; k <= this.horizont + 3; k++) {
      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        gameFielg[i][k].unit &&
        gameFielg[i][k].unit.cell &&
        gameFielg[i][k].unit.gabarit === 50 &&
        !gameFielg[i][k].unit.sweeme &&
        !gameFielg[i][k].unit.neitral &&
        gameFielg[i][k].unit.fatherFraction.fraction ===
          this.fatherFraction.fraction &&
        !gameFielg[i][k].unit.active
      ) {
        let unit = gameFielg[i][k].unit;

        if (unit && this.cell.unit) {
          unit.ground_panick(this.cell.unit);
        }
      }
    }
  }
};

Unit.prototype.cleared_way = function () {
  for (let i = this.vertikal - 6; i <= this.vertikal + 7; i++) {
    for (let k = this.horizont - 5; k <= this.horizont + 6; k++) {
      if (
        gameFielg[i] &&
        gameFielg[i][k] &&
        gameFielg[i][k].unit &&
        gameFielg[i][k].unit.cell &&
        gameFielg[i][k].unit.sweeme &&
        !gameFielg[i][k].unit.neitral &&
        gameFielg[i][k].unit.fatherFraction.fraction ===
          this.fatherFraction.fraction &&
        !gameFielg[i][k].unit.active &&
        gameFielg[i][k].unit.unitStatus === "life"
      ) {
        let unit = gameFielg[i][k].unit;

        if (this.cell.unit) {
          unit.sea_panick(this.cell.unit, true);
        }
      }
    }
  }
};

Unit.prototype.goWaySweeme = function (arg) {
  //speed

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.iGetMyCell = true;

    this.hotCell = this.cell;

    this.x = this.cell.x;
    this.y = this.cell.y;

    if (!this.way.length) {
      this.iStand = true;
    }

    if (this.iGetTarget) {
      this.way = [];
      this.stepTakt = 0;
      this.iStand = true;
      return;
    }

    //if(!this.handCell&&!this.target&&!this.handTarget){this.way=[];this.stepTakt=0;};

    //if(this.way!=="go"&&!this.way.length&&!this.target&&!this.handTarget){this.stopGetTarget=0;};

    let nextCell_ok;

    if (this.way !== "go") {
      nextCell_ok = this.checkNextSweemeCell();
    }

    //////////////////////////////////

    if (this.fatherFraction.control === "comp") {
      if (
        this.type !== "transport" &&
        this.way !== "go" &&
        this.way.length &&
        this.handCell &&
        nextCell_ok < 4 &&
        get_distanse_on_lineyka(this.cell, 100, this.handCell, 100) <= 1000
      ) {
        this.way = [];
        this.handCell = 0;

        //console.log("here");

        return;
      }
    }

    //////////////////////////////////////////////

    let deep = glob_deep;

    if (
      this.way === "go" ||
      (this.way.length &&
        (!nextCell_ok || nextCell_ok < 4) &&
        (!this.target ||
          this.type === "distroer" ||
          this.type === "linkor" ||
          this.type === "turtle") &&
        (!this.handTarget ||
          this.type === "oil_tanker" ||
          this.type === "distroer" ||
          this.type === "linkor" ||
          this.type === "turtle"))
      //&&this.handCell
    ) {
      //console.log("sdjfgidhf");

      //let a=Math.floor(Math.random()*2);

      //if(a){a=Math.floor(Math.random()*1000);};

      let noFree = 300; //+a;

      this.finish = this.spe; //this.way[0];
      this.sosFin = this.spe; //this.way[0];

      let res;

      if (this.way === "go") {
        if (this.target) {
          this.finish = this.target.cell;
          this.sosFin = this.target.cell;
          this.spe = this.target.cell;
          res = true;
        } else if (this.handCell) {
          this.finish = this.handCell;
          this.sosFin = this.handCell;
          this.spe = this.handCell;
          res = true;
        } else if (this.handTarget) {
          this.finish = this.handTarget.cell;
          this.sosFin = this.handTarget.cell;
          this.spe = this.handTarget.cell;
          res = true;
        }
      }

      this.way = [];
      ////*
      //console.log("hren");
      //getWay=function(arg,noFree,deep,target)
      // getVektors=function(arg,target,unit)

      //if(nextCell_ok<4){deep=1000;};

      if (
        this.spe &&
        get_distanse_on_lineyka(this.cell, 100, this.spe, 50) <= 500
      ) {
        deep = 200;
        //console.log(this.type);
      }

      let dis;

      if (this.handCell) {
        dis = get_distanse_on_lineyka(this.cell, 100, this.spe, 50);

        deep = Math.floor(dis) * 2;
      }

      /////////////////////////////////////////// trans

      if (this.fatherFraction.control === "comp") {
        if (this.type === "transport") {
          this.trans_can_get = false;
        }
        //console.log(this.trans_can_get);
      }

      ///////////////////////////

      if (this.finish && this.cell.unit) {
        getWay(this.cell.unit, noFree, deep);
      }

      //////////////////////////////////////	trans
      if (this.fatherFraction.control === "comp") {
        if (this.type === "transport") {
          if (!this.trans_can_get) {
            this.cleared_way();
          }
        } else if (this.type === "oil_tanker") {
          if (!this.tanker_iCanGet) {
            this.cleared_way();
            //console.log("ok");
          }
        }
        //console.log(this.trans_can_get);
      }
      //////////////////////////////////////

      //console.log("here");

      if (
        this.way.length &&
        this.way[this.way.length - 1].persolalNumber ===
          this.cell.persolalNumber
      ) {
        this.way = [];
      }
      if (this.type === "transport" && this.landing && !this.iCanGet) {
        this.landing = false;
      }

      this.iCanGet = false;

      if (res) {
        return;
      }

      //console.log(noFree.length);
    }

    if (
      this.way.length &&
      nextCell_ok === 4
      //&&this.checkValideFreeCell()
    ) {
      //if(this.type===2&&!this.way[this.way.length-1].free){console.log("ggggggggggggggggggggggggggggggggg");};
      //console.log(this.persolalNumber); pausa=1;

      //speed=this.speed-(this.speed*this.stepTakt);
      let speedKoof = 1 - this.stepTakt;

      //if(this.checkValideFreeCell()){

      this.iGetMyCell = false;

      this.iStand = false;

      //this.getGsp_Vsp();

      this.updateSpeed();
      this.getGsp_Vsp();

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = false;
        }
      }

      this.cell = this.way[this.way.length - 1];
      //this.hotCell=this.cell;

      this.horizont = this.way[this.way.length - 1].horizont;
      this.vertikal = this.way[this.way.length - 1].vertikal;

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = arg;
        }
      }

      this.way.pop();

      /*
	this.cell.unit=0;	
	this.cell.free=true;	
	this.cell=this.way[this.way.length-1];
	this.horizont=this.way[this.way.length-1].horizont;
	this.vertikal=this.way[this.way.length-1].vertikal;
    this.cell.unit=arg;
	this.cell.free=false;
	this.way.pop();
*/

      //this.damagePointX=this.cell.x+50;
      //this.damagePointY=this.cell.y;

      //if(this.cell){
      this.cellUpdate(); //////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //};
      ///

      ///

      this.x += this.gSp * speedKoof;
      this.y += this.vSp * speedKoof;

      let a = this.cell.x - this.x;
      let b = this.cell.y - this.y;

      let c = Math.sqrt(a * a + b * b);

      this.stepTakt = c / this.speed;

      //}
    } else if (!this.way.length) {
      this.stepTakt = 0;
      //this.way=[];
      this.finish = 0;

      this.iStand = true;
    }
  } else {
    //if(!this.target){
    //this.holdToGo=10;
    //}
    //else{this.holdToGo=0;this.iStand=true;};

    //console.log((Math.floor(this.stepTakt)*10))
    //if(this.type!=="turtle"||(this.draw_visible))
    if (Math.floor(this.stepTakt) % 5 === 0) {
      water_sled_create(arg);
    }

    this.x += this.gSp;
    this.y += this.vSp;

    this.iStand = false;
    this.iGetMyCell = false;

    this.stepTakt--;

    //if(!this.way.length&&this.stepTakt<=0){this.stepTakt=0;this.finish=0;};

    //console.log("ok");
  }

  //if(!this.way.length&&this.stepTakt<=0){this.finish=0;console.log("ok");};

  //console.log(this.way);
  //if(fractions[0].activeUnits[0]){
  //console.log(this.way.length);
  //};
};

Unit.prototype.goWayDrag = function (arg) {
  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.iGetMyCell = true;

    //this.hotCell=this.cell;

    this.x = this.cell.x;
    this.y = this.cell.y;

    if (!this.way.length) {
      this.iStand = true;
    }

    if (this.iGetTarget) {
      this.way = [];
      this.stepTakt = 0;
      this.iStand = true;
      return;
    }

    //if(!this.handCell&&!this.target&&!this.handTarget){this.way=[];this.stepTakt=0;};

    //if(this.way!=="go"&&!this.way.length&&!this.target&&!this.handTarget){this.stopGetTarget=0;};

    let nextCell_ok = this.checkNextDragCell();

    if (
      (this.way.length &&
        (!nextCell_ok || nextCell_ok < 4) &&
        !this.target &&
        !this.handTarget) ||
      //&&this.handCell
      this.way === "go"
    ) {
      //console.log("sdjfgidhf");

      //let a=Math.floor(Math.random()*2);

      //if(a){a=Math.floor(Math.random()*1000);};

      let noFree = 1000; //+a;

      this.finish = this.way[0];
      this.sosFin = this.way[0];

      if (this.way === "go") {
        this.finish = this.handCell;
        this.sosFin = this.handCell;
      }

      this.way = [];
      ////*
      //console.log("hren");
      //getWay=function(arg,noFree,deep,target)
      // getVektors=function(arg,target,unit)

      getWay(this.cell.dragoon, noFree, 500);

      //console.log(noFree.length);
    }

    if (
      this.way.length &&
      nextCell_ok === 4
      //&&this.checkValideFreeCell()
    ) {
      //if(this.type===2&&!this.way[this.way.length-1].free){console.log("ggggggggggggggggggggggggggggggggg");};

      //speed=this.speed-(this.speed*this.stepTakt);
      let speedKoof = 1 - this.stepTakt;

      //if(this.checkValideFreeCell()){

      this.iGetMyCell = false;

      this.iStand = false;

      this.getGsp_Vsp();

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].dragoon = false;
        }
      }

      this.cell = this.way[this.way.length - 1];

      this.horizont = this.way[this.way.length - 1].horizont;
      this.vertikal = this.way[this.way.length - 1].vertikal;

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].dragoon = arg;
        }
      }

      this.way.pop();

      /*
	this.cell.unit=0;	
	this.cell.free=true;	
	this.cell=this.way[this.way.length-1];
	this.horizont=this.way[this.way.length-1].horizont;
	this.vertikal=this.way[this.way.length-1].vertikal;
    this.cell.unit=arg;
	this.cell.free=false;
	this.way.pop();
*/

      this.damagePointX = this.cell.x + 50;
      this.damagePointY = this.cell.y;

      //if(this.cell){
      this.cellUpdate(); //////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //};
      ///

      ///

      this.x += this.gSp * speedKoof;
      this.y += this.vSp * speedKoof;

      let a = this.cell.x - this.x;
      let b = this.cell.y - this.y;

      let c = Math.sqrt(a * a + b * b);

      this.stepTakt = c / this.speed;

      //}
    } else if (!this.way.length) {
      this.stepTakt = 0;
      //this.way=[];
      this.finish = 0;

      this.iStand = true;
    }
  } else {
    //if(!this.target){
    //this.holdToGo=10;
    //}
    //else{this.holdToGo=0;this.iStand=true;};

    this.x += this.gSp;
    this.y += this.vSp;

    this.iStand = false;
    this.iGetMyCell = false;

    this.stepTakt--;

    //if(!this.way.length&&this.stepTakt<=0){this.stepTakt=0;this.finish=0;};

    //console.log("ok");
  }

  //if(!this.way.length&&this.stepTakt<=0){this.finish=0;console.log("ok");};

  //console.log(this.way);
  //if(fractions[0].activeUnits[0]){
  //console.log(this.way.length);
  //};
};

Unit.prototype.goWay = function (arg) {
  //if(this.iFight){console.log("ok");};handTarget target console.log(this.stopGetTarget);

  //contaktCells
  //let speed=this.speed;

  //console.log("ok");glob_deep iContaktWith
  //iStand

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.iGetMyCell = true;

    this.hotCell = this.cell;

    this.x = this.cell.x;
    this.y = this.cell.y;

    if (this.need_return) {
      this.need_return = false;
      return;
    }

    if (!this.way.length) {
      this.iStand = true;
    }

    if (this.iGetTarget) {
      this.way = [];
      this.stepTakt = 0;
      this.iStand = true;
      return;
    }

    //stopGetTarget

    //console.log(this.way.length);

    //this.nockNokc=true;
    //this.moveVektor=0;

    //if(this.way.length&&!this.way[this.way.length-1].free&&this.way[this.way.length-1].persolalNumber===this.cell.persolalNumber){this.way.pop();};
    /*
if(
((this.way.length===1&&!this.way[this.way.length-1].free)||!this.way.length)&&
!this.target&&!this.handTarget&&this.handCell
){
	this.way=[];
	this.handCell=0;
	};
*/

    //if(!this.handCell&&!this.target&&!this.handTarget){this.way=[];this.stepTakt=0;};

    if (
      ((this.fatherFraction.control === "player" && !this.hold_position) ||
        this.fatherFraction.control === "comp") &&
      !this.handCell &&
      !this.target &&
      !this.handTarget
    ) {
      this.way = [];
      this.stepTakt = 0;
    }

    //if(this.way!=="go"&&!this.way.length&&!this.target&&!this.handTarget&&!this.ii_back){this.stopGetTarget=0;console.log("hreeeee");};

    if (
      ((this.way.length &&
        !this.way[this.way.length - 1].free &&
        !this.target &&
        !this.handTarget &&
        this.handCell) ||
        this.way === "go") &&
      !this.iWaitMyBros
    ) {
      this.way = [];

      //console.log("sdjfgidhf");

      //let a=Math.floor(Math.random()*2);

      //if(a){a=Math.floor(Math.random()*1000);};

      let noFree = 350;

      this.finish = this.handCell;
      this.sosFin = this.handCell;
      ////*
      //console.log("hren");
      //getWay=function(arg,noFree,deep,target)
      // getVektors=function(arg,target,unit)

      let deep = glob_deep;

      let dis;

      if (this.handCell) {
        dis = get_distanse_on_lineyka(this.cell, 50, this.handCell, 50);
      }

      ///*
      if (this.ii_saveCell && !this.animys.length && this.handCell) {
        //deep=5000;

        //if(dis<=400){deep=500;};

        this.ii_saveCell_reset++;
      }
      //*/

      if (this.ii_saveCell_reset >= 100 || this.animys.length) {
        this.ii_saveCell_reset = 0;
        this.ii_saveCell = false;

        //console.log("VAZHNO");
      }

      if (this.handCell) {
        deep = Math.floor(dis) * 2;
      }

      if (this.revers) {
        deep = 50000;
      }

      getWay(this.cell.unit, noFree, deep);

      //if(this.warrior){console.log(this.way.length)};
      ////////////////////////////////////////

      ///////////////////////////////////////////////////////////
    }

    if (
      this.way.length &&
      this.way[this.way.length - 1].free &&
      this.checkValideFreeCell()
    ) {
      //if(this.type===2&&!this.way[this.way.length-1].free){console.log("ggggggggggggggggggggggggggggggggg");};

      //speed=this.speed-(this.speed*this.stepTakt);
      let speedKoof = 1 - this.stepTakt;

      //if(this.checkValideFreeCell()){

      this.iGetMyCell = false;

      this.iStand = false;

      this.getGsp_Vsp();

      this.cell.unit = 0;
      this.cell.free = true;
      this.cell = this.way[this.way.length - 1];
      this.horizont = this.way[this.way.length - 1].horizont;
      this.vertikal = this.way[this.way.length - 1].vertikal;
      this.cell.unit = arg;
      this.cell.free = false;
      this.way.pop();

      if (
        (this.type === 1 ||
          this.type === 2 ||
          this.type === 3 ||
          this.type === "ballista" ||
          this.type === "rizar") &&
        this.cell
      ) {
        this.damagePointX = this.cell.x + 25;
        this.damagePointY = this.cell.y + 25;
      }

      if (this.cell) {
        this.cellUpdate(); //////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
      ///

      ///

      this.x += this.gSp * speedKoof;
      this.y += this.vSp * speedKoof;

      let a = this.cell.x - this.x;
      let b = this.cell.y - this.y;

      let c = Math.sqrt(a * a + b * b);

      this.stepTakt = c / this.speed;

      //}
    } else if (!this.way.length) {
      this.stepTakt = 0;
      //this.way=[];
      this.finish = 0;

      this.iStand = true;
    }
  } else {
    //if(!this.target){
    //this.holdToGo=10;
    //}
    //else{this.holdToGo=0;this.iStand=true;};

    this.x += this.gSp;
    this.y += this.vSp;

    this.iStand = false;
    this.iGetMyCell = false;

    this.stepTakt--;

    //if(!this.way.length&&this.stepTakt<=0){this.stepTakt=0;this.finish=0;};

    //console.log("ok");
  }

  //if(!this.way.length&&this.stepTakt<=0){this.finish=0;console.log("ok");};

  //console.log(this.way);
  //if(fractions[0].activeUnits[0]){
  //console.log(this.way.length);
  //};
  /*
if(this.ii_saveCell&&!this.handCell&&!this.target&&!this.handTarget&&!this.way.length){
	//console.log(this.cell.unit);// pausa=1;
	this.spedr=true;
}
else {this.spedr=false;};
*/
};

Unit.prototype.getGsp_Vsp = function () {
  let cell = this.way[this.way.length - 1];

  if (cell.vertikal === this.vertikal && cell.horizont === this.horizont + 1) {
    this.gSp = this.rightGSP;
    this.vSp = this.rightVSP;

    this.moveVektor = "right";
  } else if (
    cell.vertikal === this.vertikal + 1 &&
    cell.horizont === this.horizont + 1
  ) {
    this.gSp = this.right_DownGSP;
    this.vSp = this.right_DownVSP;

    this.moveVektor = "right_Down";
  } else if (
    cell.vertikal === this.vertikal + 1 &&
    cell.horizont === this.horizont
  ) {
    this.gSp = this.downGSP;
    this.vSp = this.downVSP;

    this.moveVektor = "down";
  } else if (
    cell.vertikal === this.vertikal + 1 &&
    cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.down_LeftGSP;
    this.vSp = this.down_LeftVSP;

    this.moveVektor = "down_Left";
  } else if (
    cell.vertikal === this.vertikal &&
    cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.leftGSP;
    this.vSp = this.leftVSP;

    this.moveVektor = "left";
  } else if (
    cell.vertikal === this.vertikal - 1 &&
    cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.left_UpGSP;
    this.vSp = this.left_UpVSP;

    this.moveVektor = "left_Up";
  } else if (
    cell.vertikal === this.vertikal - 1 &&
    cell.horizont === this.horizont
  ) {
    this.gSp = this.upGSP;
    this.vSp = this.upVSP;

    this.moveVektor = "up";
  } else if (
    cell.vertikal === this.vertikal - 1 &&
    cell.horizont === this.horizont + 1
  ) {
    this.gSp = this.up_RightGSP;
    this.vSp = this.up_RightVSP;

    this.moveVektor = "up_Right";
  }
};

Unit.prototype.getBuildPosition = function (
  horizont,
  vertikal,
  building,
  danger
) {
  if (building === "tower") {
    let potentialCells = [];

    for (let i = vertikal - 20; i < vertikal + 20; i++) {
      for (let k = horizont - 20; k < horizont + 20; k++) {
        let stop = false;

        for (let v = i - 1; v <= i; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k; h <= k + 1; h++) {
            if (
              !gameFielg[v] ||
              !gameFielg[v][h] ||
              gameFielg[v][h].free === false ||
              gameFielg[v][h].stopBuild ||
              gameFielg[v][h].continent !== this.cell.continent ||
              gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let stop;

        for (
          let v = potentialCells[i].vertikal - 10;
          v <= potentialCells[i].vertikal + 10;
          v++
        ) {
          for (
            let h = potentialCells[i].horizont - 10;
            h <= potentialCells[i].horizont + 10;
            h++
          ) {
            if (
              gameFielg[v] &&
              gameFielg[v][h] &&
              gameFielg[v][h].unit &&
              gameFielg[v][h].unit.unitStatus === "building" &&
              !gameFielg[v][h].unit.neitral &&
              gameFielg[v][h].unit.type !== "oil_platform" &&
              gameFielg[v][h].unit.fatherFraction.union !==
                this.fatherFraction.union
            ) {
              stop = true;
              //console.log("stop");
            }
          }
        }

        if (!stop) {
          let a = potentialCells[i].horizont - horizont;
          let b = potentialCells[i].vertikal - vertikal;

          let c = Math.sqrt(a * a + b * b);

          if (!min.length || c < min[0]) {
            min = [c, potentialCells[i]];
          }
        }
      }

      return min[1];
    }
  } else if (
    building === "barack" ||
    building === "kuznya" ||
    building === "ogreBase" ||
    building === "altar" ||
    building === "dragon_roost" ||
    building === "temple"
  ) {
    let potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v] ||
              !gameFielg[v][h] ||
              gameFielg[v][h].free === false ||
              gameFielg[v][h].stopBuild ||
              gameFielg[v][h].continent !== this.cell.continent ||
              gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let a = potentialCells[i].horizont - horizont;
        let b = potentialCells[i].vertikal - vertikal;

        let c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === "lesopilka") {
    //console.log(this.cell.continent)
    //pausa=1

    let potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v] ||
              !gameFielg[v][h] ||
              gameFielg[v][h].free === false ||
              gameFielg[v][h].stopBuild ||
              gameFielg[v][h].continent !== this.cell.continent ||
              gameFielg[v][h].iContaktWith.length ||
              this.cell.continent !== gameFielg[v][h].continent
            ) {
              //if(gameFielg[v]&&gameFielg[v][h]&&this.cell.continent!==gameFielg[v][h].continent)	{console.log("ne");pausa=1;};

              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let a = potentialCells[i].horizont - horizont;
        let b = potentialCells[i].vertikal - vertikal;

        let c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === "townHoll") {
    let potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i + 1; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k - 1; h <= k + 1; h++) {
            if (
              !gameFielg[v] ||
              !gameFielg[v][h] ||
              gameFielg[v][h].free === false ||
              gameFielg[v][h].stopTownHoll.length ||
              gameFielg[v][h].stopBuild ||
              gameFielg[v][h].iContaktWith.length
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let a = potentialCells[i].horizont - horizont;
        let b = potentialCells[i].vertikal - vertikal;

        let c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  } else if (building === "farm") {
    let potentialCells = [];

    for (let i = vertikal - 117; i < vertikal + 118; i++) {
      for (let k = horizont - 117; k < horizont + 118; k++) {
        let stop = false;

        for (let v = i - 1; v <= i; v++) {
          if (stop === true) {
            break;
          }

          for (let h = k; h <= k + 1; h++) {
            if (
              !gameFielg[v] ||
              !gameFielg[v][h] ||
              gameFielg[v][h].free === false ||
              gameFielg[v][h].stopBuild ||
              gameFielg[v][h].continent !== this.cell.continent ||
              (gameFielg[v][h].iContaktWith.length && h % 2 === 0)
            ) {
              stop = true;

              break;
            }
          }
        }

        if (stop === false) {
          potentialCells.push(gameFielg[i][k]);
        }
      }
    }

    if (potentialCells.length) {
      let min = [];

      for (let i = 0; i < potentialCells.length; i++) {
        let a = potentialCells[i].horizont - horizont;
        let b = potentialCells[i].vertikal - vertikal;

        let c = Math.sqrt(a * a + b * b);

        if (!min.length || c < min[0]) {
          min = [c, potentialCells[i]];
        }
      }

      return min[1];
    }
  }
};

Unit.prototype.good_cell_for_ship = function (cell) {
  for (let i = cell.vertikal - 1; i <= cell.vertikal; i++) {
    for (let k = cell.horizont; k <= cell.horizont + 1; k++) {
      let obj;

      //gameFielg[i][k];

      if (gameFielg[i] && gameFielg[i][k]) {
        obj = gameFielg[i][k];
      }

      if (
        obj &&
        ((obj.unit && obj.unit.persolalNumber !== this.persolalNumber) ||
          !obj.sea ||
          obj.sea !== this.cell.sea ||
          obj.vossalObj)
      ) {
        return false;
      }
    }
  }

  return true;
};

Unit.prototype.createBuilding = function (build, builder, player_cell) {
  if (this.type === 1) {
    //myCells

    ///
    //this.fatherFraction.freeBatraks.splice(this.fatherFraction.freeBatraks.indexOf(builder),1);

    ///farms

    //console.log(build)

    if (build === "temple") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        ////////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === "comp") {
          let objs = [];

          for (
            let i = 0;
            i < this.fatherFraction.createShablon.temples.length;
            i++
          ) {
            if (this.fatherFraction.createShablon.temples[i].iBorn === false) {
              this.fatherFraction.createShablon.temples[i].iBorn = true;
              build = this.fatherFraction.createShablon.temples[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "temple"
          );
          //this.myJoube="i build";
        }
        ////////////////////////////////////////////////////////////////////////////////

        //console.log(build);

        this.target = new LandObj(
          "temple",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.temples.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "temple",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.temples.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "dragon_roost") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        ////////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === "comp") {
          let objs = [];

          for (
            let i = 0;
            i < this.fatherFraction.createShablon.dragon_roosts.length;
            i++
          ) {
            if (
              this.fatherFraction.createShablon.dragon_roosts[i].iBorn === false
            ) {
              this.fatherFraction.createShablon.dragon_roosts[i].iBorn = true;
              build = this.fatherFraction.createShablon.dragon_roosts[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "dragon_roost"
          );
          //this.myJoube="i build";
        }
        ////////////////////////////////////////////////////////////////////////////////

        //console.log(build);

        this.target = new LandObj(
          "dragon_roost",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.dragon_roosts.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "dragon_roost",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.dragon_roosts.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "foundry") {
      if (this.fatherFraction.control === "comp") {
        let cell;

        //cell=allContinents[this.cell.continent].conturLineCells;

        //console.log() my_continent

        //let ot=this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          let dis = get_distanse_on_lineyka(
            this.fatherFraction.ports[0].cell,
            100,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            150
          );

          if (
            (!min.length || min[0] > dis) &&
            allContinents[this.cell.continent].conturLine_sea_Cells[i].sea ===
              this.fatherFraction.sea &&
            good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i]
            ) &&
            dis >= 250
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        ///////////////////////////////////////////////////////////////////

        let build;

        let buildCell;

        buildCell = cell;
        //this.myJoube="i build";

        //console.log(build);

        this.target = new LandObj(
          "foundry",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        let tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          "guard"
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        //console.log(builder.target);
        this.fatherFraction.foundrys.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "foundry",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.foundrys.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      //console.log(nnn)

      //return;
    } else if (build === "oil_Ref") {
      if (this.fatherFraction.control === "comp") {
        let cell;

        //cell=allContinents[this.cell.continent].conturLineCells;

        //console.log() my_continent

        //let ot=this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          let dis = get_distanse_on_lineyka(
            this.fatherFraction.ports[0].cell,
            100,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            150
          );

          if (
            (!min.length || min[0] > dis) &&
            allContinents[this.cell.continent].conturLine_sea_Cells[i].sea ===
              this.fatherFraction.sea &&
            good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i]
            ) &&
            dis >= 250
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        ///////////////////////////////////////////////////////////////////

        let build;

        let buildCell;

        buildCell = cell;
        //this.myJoube="i build";

        //console.log(build);

        this.target = new LandObj(
          "oil_Ref",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        let tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          "guard"
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        //console.log(builder.target);
        this.fatherFraction.oil_Refs.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "oil_Ref",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        obj.cell.continent = this.cell.continent;
        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.oil_Refs.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      //console.log(nnn)

      //return;
    } else if (build === "port") {
      if (this.fatherFraction.control === "comp") {
        let cell;

        //cell=allContinents[this.cell.continent].conturLineCells;

        let ot = this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          let dis = get_distanse_on_lineyka(
            ot,
            50,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            50
          );

          if (
            (!min.length || min[0] > dis) &&
            allContinents[this.cell.continent].conturLine_sea_Cells[i].sea ===
              this.fatherFraction.sea &&
            good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i]
            )
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        ///////////////////////////////////////////////////////////////////

        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        buildCell = cell;
        //this.myJoube="i build";

        //console.log(build);

        this.target = new LandObj(
          "port",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        let tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          "guard"
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        //console.log(builder.target);
        this.fatherFraction.ports.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "port",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        obj.cell.continent = this.cell.continent;
        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.ports.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      //console.log(nnn)

      //return;
    } else if (build === "altar") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        ////////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === "comp") {
          let objs = [];

          for (
            let i = 0;
            i < this.fatherFraction.createShablon.altars.length;
            i++
          ) {
            if (this.fatherFraction.createShablon.altars[i].iBorn === false) {
              this.fatherFraction.createShablon.altars[i].iBorn = true;
              build = this.fatherFraction.createShablon.altars[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "altar"
          );
          //this.myJoube="i build";
        }
        ////////////////////////////////////////////////////////////////////////////////

        //console.log(build);

        this.target = new LandObj(
          "altar",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.altars.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "altar",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.altars.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "ogreBase") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        if (this.fatherFraction.control === "comp") {
          for (
            let i = 0;
            i < this.fatherFraction.createShablon.ogreBases.length;
            i++
          ) {
            if (
              this.fatherFraction.createShablon.ogreBases[i].iBorn === false
            ) {
              this.fatherFraction.createShablon.ogreBases[i].iBorn = true;
              build = this.fatherFraction.createShablon.ogreBases[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "ogreBase"
          );
          //this.myJoube="i build";
        }

        //console.log(build);

        this.target = new LandObj(
          "ogreBase",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.ogreBases.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "ogreBase",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.ogreBases.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "kuznya") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.kuznyas.length;
          i++
        ) {
          if (this.fatherFraction.createShablon.kuznyas[i].iBorn === false) {
            this.fatherFraction.createShablon.kuznyas[i].iBorn = true;
            build = this.fatherFraction.createShablon.kuznyas[i];
            iBornCresteShablonNumber = i;

            break;
          }
        }

        if (!build) {
          return;
        }
        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          "kuznya"
        );
        //this.myJoube="i build";

        //console.log(build);

        this.target = new LandObj(
          "kuznya",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.kuznyas.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //console.log("ok");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "kuznya",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.kuznyas.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "tower") {
      //unterTowers
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        //////////////////////////////////////////////////////////////////////////////////////////////

        let min = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.towers.length;
          i++
        ) {
          let obj = this.fatherFraction.createShablon.towers[i];

          if (!obj.iBorn && obj.para) {
            min = [0, obj, i];
            break;
          }

          let dis;

          if (
            !obj.iBorn &&
            (gameFielg[obj.vertikal][obj.horizont].free ||
              gameFielg[obj.vertikal][obj.horizont].vossalObj ||
              gameFielg[obj.vertikal][obj.horizont].unit.unitName !== "wood")
          ) {
            dis = get_distanse_on_lineyka(
              this.fatherFraction.startPoint,
              50,
              gameFielg[obj.vertikal][obj.horizont],
              100
            );

            if (!min.length || min[0] > dis || min[1].para) {
              min = [dis, obj, i];
            }
          }
        }

        if (min.length) {
          build = min[1];
          build.iBorn = true;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "tower"
          );
          iBornCresteShablonNumber = min[2];
        } else {
          return;
        }

        //this.myJoube="i build";

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //console.log(build);

        if (buildCell) {
          this.target = new LandObj(
            "tower",
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction
          );

          this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

          this.target.control = this.fatherFraction.control;

          //console.log(builder.target);
          this.fatherFraction.towers.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          if (this.fatherFraction.control === "comp") {
            this.fatherFraction.activeBuildings.push(this.target);
            this.target.builders.push(builder);
            this.iGoBuild = true;
            this.fatherFraction.unterTowers.push(this.target);
            this.target.iBee =
              this.fatherFraction.createShablon.towers[
                iBornCresteShablonNumber
              ].tower;
          }

          this.fatherFraction.gold -= 1500;
          this.fatherFraction.wood -= 500;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target
          );

          this.way = [];
          //console.log("ok");
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          "tower",
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.towers.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 1500;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "barack") {
      if (this.fatherFraction.control === "comp") {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        let min = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.baracks.length;
          i++
        ) {
          if (this.fatherFraction.createShablon.baracks[i].iBorn === false) {
            /*
		this.fatherFraction.createShablon.baracks[i].iBorn=true;
		build=this.fatherFraction.createShablon.baracks[i];
		iBornCresteShablonNumber=i;
		*/

            let dis = get_distanse_on_lineyka(
              this.fatherFraction.startPoint,
              50,
              gameFielg[this.fatherFraction.createShablon.baracks[i].vertikal][
                this.fatherFraction.createShablon.baracks[i].horizont
              ],
              150
            );

            if (!min.length || min[0] > dis) {
              min = [dis, this.fatherFraction.createShablon.baracks[i], i];
            }
          }
        }

        this.fatherFraction.createShablon.baracks[min[2]].iBorn = true;
        build = min[1];
        iBornCresteShablonNumber = min[2];

        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          "barack"
        );
        //this.myJoube="i build";
        if (!buildCell) {
          return;
        }

        //console.log(build);

        this.target = new LandObj(
          5,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.baracks.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        //if(this.fatherFraction.control==="comp"){

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        //};

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //console.log("ok");
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          5,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.baracks.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "lesopilka") {
      if (this.fatherFraction.control === "comp") {
        let min = [];

        for (let i = 0; i < woods.length; i++) {
          let a = woods[i].x - this.fatherFraction.startPoint.x;
          let b = woods[i].y - this.fatherFraction.startPoint.y;

          let c = Math.sqrt(a * a + b * b);

          if (
            (!min.length || c < min[0]) &&
            woods[i].hp > 0 &&
            c < 5000 &&
            woods[i].cell.continent === this.cell.continent
          ) {
            min = [c, woods[i]];
          }
        }

        //console.log(min[1])

        if (!min.length) {
          min = [0, this.cell];
        }

        if (min.length) {
          let build = new SablonObj(min[1].horizont, min[1].vertikal);

          let buildCell;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "lesopilka"
          );
          //this.myJoube="i build";

          //console.log(build);

          this.target = new LandObj(
            4,
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction
          );
          this.target.control = this.fatherFraction.control;

          let tow = new SablonObj(
            this.target.horizont,
            this.target.vertikal,
            undefined,
            "guard"
          );
          tow.para = true;
          this.fatherFraction.createShablon.towers.push(tow);

          this.fatherFraction.lesopilkas.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          //if(this.fatherFraction.control==="comp"){

          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;

          //};

          this.fatherFraction.gold -= 700;
          this.fatherFraction.wood -= 500;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target
          );

          this.way = [];

          //console.log(this.fatherFraction.townHolls);
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          4,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.lesopilkas.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === "townHoll") {
      if (this.fatherFraction.control === "comp") {
        let min = [];

        for (let i = 0; i < shahts.length; i++) {
          let a = shahts[i].x - builder.x;
          let b = shahts[i].y - builder.y;

          let c = Math.sqrt(a * a + b * b);

          if ((!min.length || c < min[0]) && shahts[i].gold > 0) {
            min = [c, shahts[i]];
          }
        }

        //console.log(min[1])

        if (min.length) {
          let build = new SablonObj(min[1].horizont, min[1].vertikal);

          let buildCell;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            "townHoll"
          );
          //this.myJoube="i build";

          //console.log(build);

          this.target = new LandObj(
            2,
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction
          );
          this.target.control = this.fatherFraction.control;

          //console.log(builder.target);
          this.fatherFraction.townHolls.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          //if(this.fatherFraction.control==="comp"){

          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;

          //};

          this.fatherFraction.gold -= 1000;
          this.fatherFraction.wood -= 1000;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target
          );

          this.way = [];

          //console.log(this.fatherFraction.townHolls);
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          2,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.townHolls.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
        //console.log(this.target);
      }
    } else if (build === "farm") {
      let build;

      let buildCell;

      let iBornCresteShablonNumber;

      //////////////////////////////////////////////////////////////////////////////////////////////
      if (this.fatherFraction.control === "comp") {
        let objs = [];

        let min_d = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.farms.length;
          i++
        ) {
          let obj =
            gameFielg[this.fatherFraction.createShablon.farms[i].vertikal][
              this.fatherFraction.createShablon.farms[i].horizont
            ];

          let dis = get_distanse_on_lineyka(
            this.fatherFraction.startPoint,
            50,
            obj,
            100
          );

          if (!min_d.length || min_d[0] > dis) {
            min_d = [dis, this.fatherFraction.createShablon.farms[i], i];
          }

          if (
            this.fatherFraction.createShablon.farms[i].iBorn === false &&
            well_cell_for_building(obj, 100)
          ) {
            /*
		this.fatherFraction.createShablon.towers[i].iBorn=true;
		build=this.fatherFraction.createShablon.towers[i];
		iBornCresteShablonNumber=i;
		
		break;
		*/

            let ind = this.fatherFraction.createShablon.farms[i];
            ind.i = i;

            objs.push(ind);
          }
        }

        min = [];

        for (let i = 0; i < objs.length; i++) {
          let obj = gameFielg[objs[i].vertikal][objs[i].horizont];

          let dis = get_distanse_on_lineyka(
            this.fatherFraction.startPoint,
            50,
            obj,
            100
          );

          if (!min.length || min[0] > dis) {
            min = [dis, objs[i]];
          }
        }

        if (min.length) {
          this.fatherFraction.createShablon.farms[min[1].i].iBorn = true;
          build = this.fatherFraction.createShablon.farms[min[1].i];
          iBornCresteShablonNumber = min[1].i;
        } else if (!this.fatherFraction.createShablon.farms.length) {
          return;
        } else {
          this.fatherFraction.createShablon.farms[min_d[2]].iBorn = true;
          build = this.fatherFraction.createShablon.farms[min_d[2]];
          iBornCresteShablonNumber = min_d[2];
        }

        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          "farm"
        );
        //this.myJoube="i build";

        //////////////////////////////////////////////////////////////////////////////////////////////////

        //console.log(build);

        this.target = new LandObj(
          3,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.farms.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === "comp") {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 500;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target
        );

        this.way = [];
        //console.log("ok");
      } else {
        buildCell = player_cell;
        //this.myJoube="i build";

        //console.log(build);

        let obj = new LandObj(
          3,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        //console.log(builder.target);
        this.fatherFraction.farms.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        //this.iGoBuild=true;

        this.fatherFraction.gold -= 500;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    }
  }

  buildingBornAnimysUpdate(this.target, this.cell.unit);

  if (!this.target.my_continent) {
    this.target.my_continent = this.cell.continent;
  }
};

Unit.prototype.myTargetCheck = function () {
  let freeContaktCell = false;

  for (let i = 0; i < this.target.contaktCells.length; i++) {
    if (
      gameFielg[this.target.contaktCells[i].vertikal][
        this.target.contaktCells[i].horizont
      ].free ||
      (this.cell.horizont === this.target.contaktCells[i].horizont &&
        this.cell.vertikal === this.target.contaktCells[i].vertikal)
    ) {
      freeContaktCell = true;
      break;
    }
  }

  if (!freeContaktCell) {
    this.myTargetClosed++;
  } //else{this.myTargetClosed=0;};

  if (!this.cell || this.iGetTarget) {
    this.myTargetClosed = 0;
  }

  if (this.myTargetClosed === 5 && !this.iGetTarget) {
    //this.target=//this.myJoube=0;
    //this.myTargetClosed=0;
    if (this.target.unitName === "townHoll") {
      this.target = getMinDistanse(arg, this.fatherFraction.townHolls);
    }
    if (this.target.unitName === "shahta") {
      this.target = getMinDistanse(arg, shahts);
    }
    if (this.target.unitName === "wood") {
      this.target = getMinDistanse(arg, woods);
    }
    if (this.target.unitName === "farm") {
      this.target = 0;
    }
  }
};

Unit.prototype.checkGetTarget_sweeme = function () {
  let dis = get_distanse_on_lineyka(
    this.cell,
    100,
    this.target.cell,
    this.target.gabarit
  );

  if (dis <= this.seeing && this.target.visible) {
    return true;
  }

  return false;
};

Unit.prototype.checkGetTarget = function () {
  if (this.cell) {
    if (
      this.type === 1 ||
      this.type === 2 ||
      this.type === "rizar" ||
      this.type === "mag"
    ) {
      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          this.cell.iContaktWith[i].father.persolalNumber ===
          this.target.persolalNumber
        ) {
          this.moveVektor = this.cell.iContaktWith[i].moveVektor;

          return true;
        }
      }
    } else if (
      this.type === 3 ||
      this.type === "ballista" ||
      this.type === "dragoon"
    ) {
      let a = this.target.damagePointX - this.damagePointX;
      let b = this.target.damagePointY - this.damagePointY;

      let c = Math.sqrt(a * a + b * b);

      if (c <= this.seeing) {
        return true;
      }
    }
  }

  return false;
};

Unit.prototype.checkGetHandTarget_sweeme = function () {
  let a = this.damagePointX - this.handTarget.damagePointX;
  let b = this.damagePointY - this.handTarget.damagePointY;

  let dis = Math.sqrt(a * a + b * b); //get_distanse_on_lineyka(this.cell.unit,100,this.handTarget.cell,this.handTarget.gabarit);

  if (dis <= this.seeing) {
    return true;
  }

  return false;
};

Unit.prototype.checkGetHandTarget = function () {
  if (this.type === 2 || this.type === "rizar" || this.type === "mag") {
    for (let i = 0; i < this.cell.iContaktWith.length; i++) {
      if (
        this.cell.iContaktWith[i].father.persolalNumber ===
        this.handTarget.persolalNumber
      ) {
        return true;
      }
    }
  } else if (
    this.type === 3 ||
    this.type === "ballista" ||
    this.type === "dragoon"
  ) {
    if (
      !this.handTarget.neitral &&
      this.handTarget.fatherFraction.union !== this.fatherFraction.union
    ) {
      //zhivie vragy

      let a = this.handTarget.damagePointX - this.damagePointX;
      let b = this.handTarget.damagePointY - this.damagePointY;

      let c = Math.sqrt(a * a + b * b);

      //if(10-(this.cell.x+25)===10-this.cell.x+25){console.log("ok")};
      //console.log(c);

      if (c <= this.seeing) {
        return true;
      }
    } else if (
      this.handTarget.neitral ||
      this.handTarget.fatherFraction.union === this.fatherFraction.union
    ) {
      //ne vragy

      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          this.cell.iContaktWith[i].father.persolalNumber ===
          this.handTarget.persolalNumber
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

////////////////////////////////////////////////////////////////////////   new new new!!!!!!!!!!!!!!!!!!!!!!

Unit.prototype.checkValideTarget = function () {
  if (!this.target) {
    return;
  }

  if (
    this.target.unitName === "barack" ||
    this.target.unitName === "kuznya" ||
    this.target.unitName === "ogreBase" ||
    this.target.unitName === "altar" ||
    this.target.unitName === "port" ||
    this.target.unitName === "oil_Ref" ||
    this.target.unitName === "foundry" ||
    this.target.unitName === "dragon_roost" ||
    this.target.unitName === "temple"
  ) {
    if (
      this.target.hp <= 0 ||
      (this.target.hp >= this.target.hpfull &&
        this.target.buildready >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } else if (this.target.unitName === "lesopilka") {
    if (
      this.target.hp <= 0 ||
      (this.iGoBuild &&
        this.target.buildready >= this.target.hpfull &&
        this.target.hp >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } else if (this.target.unitName === "wood") {
    if (
      this.target.lesorub &&
      (this.target.lesorub.hp <= 0 ||
        !this.target.lesorub.cell ||
        !this.target.lesorub.target ||
        (this.target.lesorub.target &&
          this.target.lesorub.target.persolalNumber !==
            this.target.persolalNumber))
    ) {
      this.target.lesorub = 0;
    }

    if (
      this.target.hp <= 0 ||
      this.target.lesorub ||
      this.target.isBlocked(this.cell.unit)
    ) {
      return false;
    }

    return true;
  } else if (this.target.unitName === "shahta") {
    if (this.target.hp <= 0 || this.target.gold <= 0) {
      return false;
    }

    return true;
  } else if (this.target.unitName === "townHoll") {
    if (
      this.target.hp <= 0 ||
      (this.iGoBuild &&
        this.target.buildready >= this.target.hpfull &&
        this.target.hp >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } else if (
    this.target.unitName === "farm" ||
    this.target.unitName === "tower"
  ) {
    if (
      this.target.hp <= 0 ||
      (this.target.hp >= this.target.hpfull &&
        this.target.buildready >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  }
};

Unit.prototype.getWayToTargetAndCheckGetting = function (arg) {
  if (this.target && this.cell) {
    let optimalContaktCell = this.getOptimalContaktCell();

    //console.log(this.target);
    this.finish = optimalContaktCell; //this.target.cell;
    this.sosFin = optimalContaktCell; //this.target.cell;

    if (!this.finish) {
      this.finish = this.target.cell;
      this.sosFin = this.target.cell;
    }

    this.potentialTarget = 0;
    this.potentialWay = [];

    getWay(arg, this.iSee, 10000, this.target);

    ///////////////////////////////////////////////////////

    //console.log(this.potentialWay);

    if (this.way.length) {
      for (let i = 0; i < this.target.contaktCells.length; i++) {
        if (
          this.way[0].vertikal === this.target.contaktCells[i].vertikal &&
          this.way[0].horizont === this.target.contaktCells[i].horizont
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

Unit.prototype.isBlockedShip = function () {
  let block = 0;

  if (
    !gameFielg[this.vertikal] ||
    !gameFielg[this.vertikal][this.horizont - 1] ||
    !gameFielg[this.vertikal - 1][this.horizont - 1] ||
    gameFielg[this.vertikal][this.horizont - 1].unit ||
    gameFielg[this.vertikal][this.horizont - 1].vossalObj ||
    gameFielg[this.vertikal - 1][this.horizont - 1].unit ||
    gameFielg[this.vertikal - 1][this.horizont - 1].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal - 2] ||
    !gameFielg[this.vertikal - 2][this.horizont] ||
    !gameFielg[this.vertikal - 2][this.horizont + 1] ||
    gameFielg[this.vertikal - 2][this.horizont].unit ||
    gameFielg[this.vertikal - 2][this.horizont].vossalObj ||
    gameFielg[this.vertikal - 2][this.horizont + 1].unit ||
    gameFielg[this.vertikal - 2][this.horizont + 1].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal] ||
    !gameFielg[this.vertikal][this.horizont + 2] ||
    !gameFielg[this.vertikal - 1][this.horizont + 2] ||
    gameFielg[this.vertikal][this.horizont + 2].unit ||
    gameFielg[this.vertikal][this.horizont + 2].vossalObj ||
    gameFielg[this.vertikal - 1][this.horizont + 2].unit ||
    gameFielg[this.vertikal - 1][this.horizont + 2].vossalObj
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal + 1] ||
    !gameFielg[this.vertikal + 1][this.horizont] ||
    !gameFielg[this.vertikal + 1][this.horizont + 1] ||
    gameFielg[this.vertikal + 1][this.horizont].unit ||
    gameFielg[this.vertikal + 1][this.horizont].vossalObj ||
    gameFielg[this.vertikal + 1][this.horizont + 1].unit ||
    gameFielg[this.vertikal + 1][this.horizont + 1].vossalObj
  ) {
    block++;
  }

  if (block === 4) {
    return true;
  }

  return false;
};

Unit.prototype.isBlockedDrag = function () {
  let block = 0;

  if (
    !gameFielg[this.vertikal] ||
    !gameFielg[this.vertikal][this.horizont - 1] ||
    !gameFielg[this.vertikal - 1][this.horizont - 1] ||
    gameFielg[this.vertikal][this.horizont - 1].dragoon ||
    gameFielg[this.vertikal - 1][this.horizont - 1].dragoon
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal - 2] ||
    !gameFielg[this.vertikal - 2][this.horizont] ||
    !gameFielg[this.vertikal - 2][this.horizont + 1] ||
    gameFielg[this.vertikal - 2][this.horizont].dragoon ||
    gameFielg[this.vertikal - 2][this.horizont + 1].dragoon
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal] ||
    !gameFielg[this.vertikal][this.horizont + 2] ||
    !gameFielg[this.vertikal - 1][this.horizont + 2] ||
    gameFielg[this.vertikal][this.horizont + 2].dragoon ||
    gameFielg[this.vertikal - 1][this.horizont + 2].dragoon
  ) {
    block++;
  }

  if (
    !gameFielg[this.vertikal + 1] ||
    !gameFielg[this.vertikal + 1][this.horizont] ||
    !gameFielg[this.vertikal + 1][this.horizont + 1] ||
    gameFielg[this.vertikal + 1][this.horizont].dragoon ||
    gameFielg[this.vertikal + 1][this.horizont + 1].dragoon
  ) {
    block++;
  }

  if (block === 4) {
    return true;
  }

  return false;
};

Unit.prototype.checkValideFreeCell = function () {
  if (this.cell.iContaktWith.length && this.gabarit === 50) {
    //this.way[this.way.length-1].free

    if (
      this.way[this.way.length - 1].vertikal === this.vertikal - 1 &&
      this.way[this.way.length - 1].horizont === this.horizont - 1
      //||
      //(this.way[this.way.length-1].vertikal===this.vertikal-1&&this.way[this.way.length-1].horizont===this.horizont+1)||
      //(this.way[this.way.length-1].vertikal===this.vertikal+1&&this.way[this.way.length-1].horizont===this.horizont-1)||
      //(this.way[this.way.length-1].vertikal===this.vertikal+1&&this.way[this.way.length-1].horizont===this.horizont+1)
    ) {
      if (
        (gameFielg[this.vertikal - 1] &&
          gameFielg[this.vertikal - 1][this.horizont] &&
          gameFielg[this.vertikal - 1][this.horizont].unit &&
          gameFielg[this.vertikal - 1][this.horizont].unit.cell &&
          gameFielg[this.vertikal - 1][this.horizont].unit.gabarit === 50 &&
          gameFielg[this.vertikal - 1][this.horizont].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.vertikal ===
            this.vertikal &&
          gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.horizont ===
            this.horizont - 1) ||
        (gameFielg[this.vertikal] &&
          gameFielg[this.vertikal][this.horizont - 1] &&
          gameFielg[this.vertikal][this.horizont - 1].unit &&
          gameFielg[this.vertikal][this.horizont - 1].unit.cell &&
          gameFielg[this.vertikal][this.horizont - 1].unit.gabarit === 50 &&
          gameFielg[this.vertikal][this.horizont - 1].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.vertikal ===
            this.vertikal - 1 &&
          gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.horizont ===
            this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal - 1 &&
      this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      if (
        (gameFielg[this.vertikal - 1] &&
          gameFielg[this.vertikal - 1][this.horizont] &&
          gameFielg[this.vertikal - 1][this.horizont].unit &&
          gameFielg[this.vertikal - 1][this.horizont].unit.cell &&
          gameFielg[this.vertikal - 1][this.horizont].unit.gabarit === 50 &&
          gameFielg[this.vertikal - 1][this.horizont].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.vertikal ===
            this.vertikal &&
          gameFielg[this.vertikal - 1][this.horizont].unit.hotCell.horizont ===
            this.horizont + 1) ||
        (gameFielg[this.vertikal] &&
          gameFielg[this.vertikal][this.horizont + 1] &&
          gameFielg[this.vertikal][this.horizont + 1].unit &&
          gameFielg[this.vertikal][this.horizont + 1].unit.cell &&
          gameFielg[this.vertikal][this.horizont + 1].unit.gabarit === 50 &&
          gameFielg[this.vertikal][this.horizont + 1].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.vertikal ===
            this.vertikal - 1 &&
          gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.horizont ===
            this.horizont)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1 &&
      this.way[this.way.length - 1].horizont === this.horizont - 1
    ) {
      if (
        (gameFielg[this.vertikal] &&
          gameFielg[this.vertikal][this.horizont - 1] &&
          gameFielg[this.vertikal][this.horizont - 1].unit &&
          gameFielg[this.vertikal][this.horizont - 1].unit.cell &&
          gameFielg[this.vertikal][this.horizont - 1].unit.gabarit === 50 &&
          gameFielg[this.vertikal][this.horizont - 1].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.vertikal ===
            this.vertikal + 1 &&
          gameFielg[this.vertikal][this.horizont - 1].unit.hotCell.horizont ===
            this.horizont) ||
        (gameFielg[this.vertikal + 1] &&
          gameFielg[this.vertikal + 1][this.horizont] &&
          gameFielg[this.vertikal + 1][this.horizont].unit &&
          gameFielg[this.vertikal + 1][this.horizont].unit.cell &&
          gameFielg[this.vertikal + 1][this.horizont].unit.gabarit === 50 &&
          gameFielg[this.vertikal + 1][this.horizont].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.vertikal ===
            this.vertikal &&
          gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.horizont ===
            this.horizont - 1)
      ) {
        return false;
      }
    } else if (
      this.way[this.way.length - 1].vertikal === this.vertikal + 1 &&
      this.way[this.way.length - 1].horizont === this.horizont + 1
    ) {
      if (
        (gameFielg[this.vertikal + 1] &&
          gameFielg[this.vertikal + 1][this.horizont] &&
          gameFielg[this.vertikal + 1][this.horizont].unit &&
          gameFielg[this.vertikal + 1][this.horizont].unit.cell &&
          gameFielg[this.vertikal + 1][this.horizont].unit.gabarit === 50 &&
          gameFielg[this.vertikal + 1][this.horizont].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.vertikal ===
            this.vertikal &&
          gameFielg[this.vertikal + 1][this.horizont].unit.hotCell.horizont ===
            this.horizont + 1) ||
        (gameFielg[this.vertikal] &&
          gameFielg[this.vertikal][this.horizont + 1] &&
          gameFielg[this.vertikal][this.horizont + 1].unit &&
          gameFielg[this.vertikal][this.horizont + 1].unit.cell &&
          gameFielg[this.vertikal][this.horizont + 1].unit.gabarit === 50 &&
          gameFielg[this.vertikal][this.horizont + 1].unit.unitStatus ===
            "life" &&
          gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.vertikal ===
            this.vertikal + 1 &&
          gameFielg[this.vertikal][this.horizont + 1].unit.hotCell.horizont ===
            this.horizont)
      ) {
        return false;
      }
    }
  }

  return true;
};

Unit.prototype.getOptimalContaktCell = function () {
  let min = [];

  for (let i = 0; i < this.target.contaktCells.length; i++) {
    let a = this.target.contaktCells[i].x - this.x;
    let b = this.target.contaktCells[i].y - this.y;

    let c = Math.sqrt(a * a + b * b);

    if (
      (!min.length || c < min[0]) &&
      (gameFielg[this.target.contaktCells[i].vertikal][
        this.target.contaktCells[i].horizont
      ].free ||
        this.type === 1)
    ) {
      min = [c, this.target.contaktCells[i]];
    }
  }

  if (min.length) {
    return gameFielg[min[1].vertikal][min[1].horizont];
  }
};

Unit.prototype.updateSpeed = function () {
  this.rightVSP = Math.sin((0 * Math.PI) / 180) * this.speed;
  this.rightGSP = Math.cos((0 * Math.PI) / 180) * this.speed;

  this.right_DownVSP = Math.sin((45 * Math.PI) / 180) * this.speed;
  this.right_DownGSP = Math.cos((45 * Math.PI) / 180) * this.speed;

  this.downVSP = Math.sin((90 * Math.PI) / 180) * this.speed;
  this.downGSP = Math.cos((90 * Math.PI) / 180) * this.speed;

  this.down_LeftVSP = Math.sin((135 * Math.PI) / 180) * this.speed;
  this.down_LeftGSP = Math.cos((135 * Math.PI) / 180) * this.speed;

  this.leftVSP = Math.sin((180 * Math.PI) / 180) * this.speed;
  this.leftGSP = Math.cos((180 * Math.PI) / 180) * this.speed;

  this.left_UpVSP = Math.sin((225 * Math.PI) / 180) * this.speed;
  this.left_UpGSP = Math.cos((225 * Math.PI) / 180) * this.speed;

  this.upVSP = Math.sin((270 * Math.PI) / 180) * this.speed;
  this.upGSP = Math.cos((270 * Math.PI) / 180) * this.speed;

  this.up_RightVSP = Math.sin((315 * Math.PI) / 180) * this.speed;
  this.up_RightGSP = Math.cos((315 * Math.PI) / 180) * this.speed;
};

Unit.prototype.getTownH_or_Lesopilka = function () {
  let min = [];

  for (let i = 0; i < this.fatherFraction.lesopilkas.length; i++) {
    let a = this.fatherFraction.lesopilkas[i].x - this.x;
    let b = this.fatherFraction.lesopilkas[i].y - this.y;

    let c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, this.fatherFraction.lesopilkas[i]];
    }
  }

  for (let i = 0; i < this.fatherFraction.townHolls.length; i++) {
    let a = this.fatherFraction.townHolls[i].x - this.x;
    let b = this.fatherFraction.townHolls[i].y - this.y;

    let c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, this.fatherFraction.townHolls[i]];
    }
  }

  if (min.length) {
    return min[1];
  }

  return 0;
};

Unit.prototype.getFightVector = function (target) {
  let a = target.damagePointX - this.damagePointX;
  let b = target.damagePointY - this.damagePointY;

  let conor = ((Math.atan2(b, a) + (180 / 180) * Math.PI) / Math.PI) * 180;

  if (this.type === "distroer") {
    conor += 90;
  }

  if (conor > 360) {
    conor = conor - 360;
  }

  let vector;

  if (conor >= 67.5 && conor < 112.5) {
    vector = "up";
  } else if (conor >= 112.5 && conor < 157.5) {
    vector = "up_Right";
  } else if (conor >= 157.5 && conor < 202.5) {
    vector = "right";
  } else if (conor >= 202.5 && conor < 247.5) {
    vector = "right_Down";
  } else if (conor >= 247.5 && conor < 292.5) {
    vector = "down";
  } else if (conor >= 292.5 && conor < 337.5) {
    vector = "down_Left";
  } else if ((conor >= 337.5 && conor <= 360) || (conor >= 0 && conor < 22.5)) {
    vector = "left";
  } else if (conor >= 22.5 && conor < 67.5) {
    vector = "left_Up";
  }

  //console.log(vector);

  return vector;
};

Unit.prototype.peonGo = function (target) {
  ////////////////////////////////////////////////////////////peon

  if (
    target.unitStatus === "life" &&
    target.type === 1 &&
    target.fatherFraction.union !== this.fatherFraction.union &&
    target.cell &&
    !target.way.length &&
    target.stepTakt === 0 &&
    target.myJoube !== "i build" &&
    !target.isBlocked() &&
    !target.clickSave &&
    target.waitTime === 30
  ) {
    let max = [];

    for (let i = target.vertikal - 5; i <= target.vertikal + 5; i++) {
      for (let k = target.horizont - 5; k <= target.horizont + 5; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          let a = this.x - gameFielg[i][k].x;
          let b = this.y - gameFielg[i][k].y;

          let c = Math.sqrt(a * a + b * b);

          if (gameFielg[i][k].free && (!max.length || c > max[0])) {
            max = [c, gameFielg[i][k]];
          }
        }
      }
    }

    if (max.length) {
      target.clickSave = new ClickSave(0, max[1]);

      if (target.fatherFraction.activeUnits.indexOf(target) === -1) {
        target.fatherFraction.activeUnits.push(target);
      }

      //console.log("karaul");
    }

    //console.log("karaul");
  }

  ////////////////////////////////////////////////////////////peon
};

Unit.prototype.getFirePoint = function () {
  /*	
if(conor>=67.5&&conor<112.5){
	vector="up";////////////////////////////////////////////////////
	}
else if(conor>=112.5&&conor<157.5){
	vector="up_Right";////////////////////////////////////////////
}
else if(conor>=157.5&&conor<202.5){
	vector="right";//////////////////////////////////////////
}
else if(conor>=202.5&&conor<247.5){
	vector="right_Down";//////////////////////////////////
}
else if(conor>=247.5&&conor<292.5){
	vector="down";/////////////////////////////
}
else if(conor>=292.5&&conor<337.5){
	vector="down_Left";///////////////////////////////
}
else if((conor>=337.5&&conor<=360)||(conor>=0&&conor<22.5)){
	vector="left";//////////////////////////////////////////////
}
else if(conor>=22.5&&conor<67.5){
	vector="left_Up";////////////////////////////////////////
}	
*/
  if (this.type === "distroer") {
    this.firePoint = { x: this.damagePointX, y: this.damagePointY };
  } else if (this.type === "dragoon") {
    //this.firePoint={x:this.x+50,y:this.y};
    if (this.moveVektor === "up") {
      this.firePoint = { x: this.x + 50, y: this.y - 90 };
    } else if (this.moveVektor === "up_Right") {
      this.firePoint = { x: this.x + 70, y: this.y - 95 };
    } else if (this.moveVektor === "left_Up") {
      this.firePoint = { x: this.x + 45, y: this.y - 95 };
    } else if (this.moveVektor === "right") {
      this.firePoint = { x: this.x + 90, y: this.y - 50 };
    } else if (this.moveVektor === "left") {
      this.firePoint = { x: this.x + 30, y: this.y - 55 };
    } else if (this.moveVektor === "right_Down") {
      this.firePoint = { x: this.x + 95, y: this.y - 15 };
    } else if (this.moveVektor === "down") {
      this.firePoint = { x: this.x + 50, y: this.y };
    } else if (this.moveVektor === "down_Left") {
      this.firePoint = { x: this.x + 10, y: this.y - 10 };
    }
  } else if (this.type === 3) {
    if (this.moveVektor === "up") {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === "up_Right") {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === "left_Up") {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === "right") {
      this.firePoint = { x: this.x + 35, y: this.y };
    } else if (this.moveVektor === "left") {
      this.firePoint = { x: this.x + 10, y: this.y };
    } else if (this.moveVektor === "right_Down") {
      this.firePoint = { x: this.x + 35, y: this.y + 10 };
    } else if (this.moveVektor === "down") {
      this.firePoint = { x: this.x + 20, y: this.y + 20 };
    } else if (this.moveVektor === "down_Left") {
      this.firePoint = { x: this.x + 20, y: this.y + 20 };
    }
  } else if (this.type === "ballista") {
    if (this.moveVektor === "up") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((270 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((270 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "up_Right") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((315 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((315 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "left_Up") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((225 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((225 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "right") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((0 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((0 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "left") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((180 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((180 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "right_Down") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((45 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((45 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "down") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((90 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((90 * Math.PI) / 180) * 50,
      };
    } else if (this.moveVektor === "down_Left") {
      this.firePoint = {
        x: this.damagePointX + Math.cos((135 * Math.PI) / 180) * 50,
        y: this.damagePointY + Math.sin((135 * Math.PI) / 180) * 50,
      };
    }
  }
};

Unit.prototype.axeInitialization = function (target, type, father) {
  if (type === "ballista") {
    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    a = target.damagePointX - this.firePoint.x;
    b = target.damagePointY - this.firePoint.y;

    c = Math.sqrt(a * a + b * b);

    conor = Math.atan2(b, a);

    //x,y,type,target,attack,father,conor,xy

    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    let attack = this.attack * rage;

    let axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      "ballista",
      undefined,
      attack,
      this.cell.unit,
      conor
    );

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === "luk") {
    let a = target.damagePointX - father.damagePointX;
    let b = target.damagePointY - father.damagePointY;

    let c = Math.sqrt(a * a + b * b);

    //x,y,type,target,attack,father

    let conor = Math.atan2(b, a);

    let axe = new Axes(
      father.damagePointX,
      father.damagePointY,
      "luk",
      undefined,
      father.attack,
      father,
      conor
    );

    axe.takt = Math.floor(c / 24);

    ////////////////////////

    axe.dopGabKoof = 40 / axe.takt;

    /////////////////////////////

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    //axe.attack=this.attack;
    //x,y,type,target,attack,father,conor

    axesFly.push(axe);

    //console.log(axe); pausa=1
  } else if (type === "turtle") {
    let a = target.damagePointX - father.damagePointX;
    let b = target.damagePointY - father.damagePointY;

    let c = Math.sqrt(a * a + b * b);

    //x,y,type,target,attack,father

    let conor = Math.atan2(b, a);

    let axe = new Axes(
      father.damagePointX,
      father.damagePointY,
      "turtle",
      undefined,
      father.attack,
      father,
      conor
    );

    axe.takt = Math.floor(c / 24);

    ////////////////////////

    axe.dopGabKoof = 40 / axe.takt;

    /////////////////////////////

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    //axe.attack=this.attack;
    //x,y,type,target,attack,father,conor

    axesFly.push(axe);

    //console.log(axe); pausa=1
  } else if (type === "linkor") {
    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    a = target.damagePointX - this.damagePointX;
    b = target.damagePointY - this.damagePointY;

    c = Math.sqrt(a * a + b * b);

    conor = Math.atan2(b, a);

    //x,y,type,target,attack,father,conor,xy

    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    let attack = this.attack;

    let axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      "orc_ballista",
      undefined,
      attack,
      this.cell.unit,
      conor
    );

    axe.inviz = 5;

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === "distroer_canon") {
    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    //if(this.target.unitStatus==="life"){

    let damagePointX;
    let damagePointY;

    damagePointX = target.damagePointX;
    damagePointY = target.damagePointY;

    //console.log(target)

    a = damagePointX - this.damagePointX;
    b = damagePointY - this.damagePointY;

    c = Math.sqrt(a * a + b * b);

    a2 = damagePointX - this.damagePointX;
    b2 = damagePointY - this.damagePointY;

    //x,y,type,target,attack,father

    conor = Math.atan2(b2, a2);
    conor2 = Math.atan2(b, a);

    if (c >= 125) {
      xy = { x: damagePointX, y: damagePointY };
    } else {
      xy = {
        x: this.damagePointX + Math.cos(conor2) * 125,
        y: this.damagePointY + Math.sin(conor2) * 125,
      };

      a = xy.x - this.damagePointX;
      b = xy.y - this.damagePointY;

      c = Math.sqrt(a * a + b * b);

      //console.log(c);

      a2 = xy.x - this.damagePointX;
      b2 = xy.y - this.damagePointY;
    }

    //};

    //x,y,type,target,attack,father,conor,xy

    let axe = new Axes(
      this.damagePointX,
      this.damagePointY,
      "distroer_canon",
      undefined,
      this.attack,
      this.cell.unit,
      conor,
      xy
    );

    axe.takt = Math.floor(c / 10);

    ////////////////////////

    axe.dopGabKoof = 10 / axe.takt;

    /////////////////////////////

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axe.stopDraw = 2;

    axe.target = target;
    //axe.attack=this.attack;
    //x,y,type,target,attack,father,conor

    axesFly.push(axe);

    //console.log(axe);	pausa=1;
  } else if (type === "dragoonFire") {
    //pausa=1;

    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    a = target.damagePointX - this.damagePointX; //this.firePoint.x;
    b = target.damagePointY - this.damagePointY; //this.firePoint.y;

    c = Math.sqrt(a * a + b * b) + 50;

    a2 = target.damagePointX - this.firePoint.x;
    b2 = target.damagePointY - this.firePoint.y;

    conor = Math.atan2(b2, a2);

    //console.log("c : "+c);

    //x,y,type,target,attack,father,conor,xy

    let attack = this.attack;

    let axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      "dragoonFire",
      target,
      attack,
      this.cell.dragoon,
      Math.atan2(b, a)
    );

    axe.conorAnim = conor;

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axesFly.push(axe);
  } else if (type === "orc_ballista") {
    let c;

    let a2;
    let b2;

    let a;
    let b;

    let conor;
    let conor2;

    let xy;

    a = target.damagePointX - this.firePoint.x;
    b = target.damagePointY - this.firePoint.y;

    c = Math.sqrt(a * a + b * b);

    conor = Math.atan2(b, a);

    //x,y,type,target,attack,father,conor,xy

    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    let attack = this.attack * rage;

    let axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      "orc_ballista",
      undefined,
      attack,
      this.cell.unit,
      conor
    );

    axe.takt = Math.floor(c / 10);

    axe.boo_point = { x: target.damagePointX, y: target.damagePointY };

    axe.gSp = a / axe.takt;
    axe.vSp = b / axe.takt;

    axesFly.push(axe);
  } else if (type === "topor" && this.firePoint) {
    //ok x,y,type,target,attack,father
    let rage = 1;

    if (father.rage) {
      rage = 1.5;
    }

    let attack = this.attack * rage;

    //console.log(attack);

    let axe = new Axes(
      this.firePoint.x,
      this.firePoint.y,
      "topor",
      undefined,
      attack,
      father
    );

    let a;
    let b;

    let a2;
    let b2;

    if (!target.fly) {
      a = target.damagePointX - this.damagePointX;
      b = target.damagePointY - this.damagePointY;

      a2 = target.damagePointX - this.firePoint.x;
      b2 = target.damagePointY - this.firePoint.y;
    } else {
      a = target.damagePointX - this.damagePointX;
      b = target.damagePointY - 30 - this.damagePointY;

      a2 = target.damagePointX - this.firePoint.x;
      b2 = target.damagePointY - 30 - this.firePoint.y;
    }

    let c = Math.sqrt(a * a + b * b);

    axe.takt = Math.floor(c / 20);

    /*
if(target.fly){
 a2=(target.damagePointX)-(this.damagePointX);
 b2=(target.damagePointY-30)-(this.damagePointY);	
// console.log("drdrdrd");
};
*/

    axe.gSp = a2 / axe.takt;
    axe.vSp = b2 / axe.takt;

    axe.target = target;
    //axe.attack=this.attack;
    //console.log(axe.takt);

    axesFly.push(axe);
  }
};

Unit.prototype.comeWithMee = function (min) {
  return;

  if (!this.target) {
    for (let i = this.vertikal - 5; i <= this.vertikal + 5; i++) {
      for (let k = this.horizont - 5; k <= this.horizont + 5; k++) {
        let cell;

        if (gameFielg[i] && gameFielg[i][k]) {
          cell = gameFielg[i][k];
        }

        if (
          cell &&
          cell.unit &&
          !cell.unit.neitral &&
          cell.unit.warrior &&
          cell.unit.unitStatus === "life" &&
          cell.unit.fatherFraction.fraction === this.fatherFraction.fraction &&
          cell.unit.hp > 0 &&
          !cell.unit.iFight &&
          !cell.unit.handTarget &&
          !cell.unit.target &&
          !cell.ii_strike &&
          cell.unit.persolalNumber !== this.persolalNumber &&
          (cell.unit.type !== "mag" || cell.unit.mana === 100)
          //&&!gameFielg[i][k].unit.ii_saveCell
        ) {
          let a = new Strike(cell.unit, min, min.cell);
          this.fatherFraction.ii_warriors_on_strike.push(a);
          cell.unit.ii_strike = true;

          //let wait=false;

          //if(!gameFielg[i][k].unit.ii_saveCell){wait=true;};

          //	gameFielg[i][k].unit.clickSave=new ClickSave(min,0,wait);

          //if(!gameFielg[i][k].unit.ii_saveCell){
          //	gameFielg[i][k].unit.ii_saveCell=gameFielg[i][k].unit.cell;
          //};

          //if(gameFielg[i][k].unit.fatherFraction.activeUnits.indexOf(gameFielg[i][k].unit)===-1){
          //gameFielg[i][k].unit.fatherFraction.activeUnits.push(gameFielg[i][k].unit);
          //};

          //console.log("ok");
        }
      }
    }
  }
};