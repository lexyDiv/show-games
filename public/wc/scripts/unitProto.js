








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