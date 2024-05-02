/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-lonely-if */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-undef */

Unit.prototype.personalProgTurtle = function (arg, rage) {
  /// ////////////////////////////////////////////////////////////////////////////////////////
  // this.attack=this.baseAttack*this.fatherFraction.dopAttack;
  // this.seeing=this.baseSeeing+this.fatherFraction.dopFlySee;

  // this.level=1+(this.fatherFraction.dopAttack_level)

  /// ////////////////////////////////////////////////////////////////////////////////////////

  // if(this.iDoTakt!==4){this.axe=false;};

  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';
  }
  // this.target="dead"; ii_saveCell
  // iStand
  if (this.target === 'dead') {
    if (!this.bul_bul) {
      this.bul_bul = true;
      this.imageToDraw = bul_bul;
      this.animX = 0;
      this.animY = 0;
    }

    this.readyToOut = true;

    this.iDoTaktTimer = -1;
    this.iDoTakt = 0;
    // this.myJoube=0;

    this.way = [];
    this.speed = 0;
    this.updateSpeed();
    this.target = 0;
    this.handTarget = 0;
    this.animys = [];
    this.landing = false;
    this.rage = 0;

    this.distroyTimer--;

    if (!this.dopAnim) {
      this.dopAnim = 0;
    }

    if (this.distroyTimer % 3 === 0) {
      this.animX += 100;
    }

    if (this.distroyTimer === 0) {
      // if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
      // if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
      if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
        this.fatherFraction.selectIsSweem.splice(
          this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
          1,
        );
      }
      // if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = 0;
        }
      }
    }

    if (this.distroyTimer === 0) {
      this.cell = 0;
      this.target = 0;
      this.stepTakt = 0;
    }

    // console.log("pizdez");

    this.visible = true;
    this.draw_visible = true;

    return;
  }

  // blackBoock
  // this.visible=false;

  if (this.fatherFraction.control === 'comp') {
    this.dash = 1000;
  } // ii

  /*
  for(let i=0;i<this.animys.length;i++){

  if(this.animys[i].type===1){console.log("east");};

  };
  */

  const step_ok = this.stepTakt < 1 && this.stepTakt >= 0;

  if (this.stopTroll) {
    this.stopTroll--;
    this.iFight = false;
    return;
  }

  /// ///////////////////////////////////////
  /// ////////////////////////////////////////////

  /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};

  };
  */
  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let isBlocked = false;

  if (step_ok && !this.iFight) {
    // if(!this.axe_time){

    if (
      this.target
      && (this.target.hp <= 0 || !this.target.cell || this.target.buildready <= 0)
    ) {
      this.target = 0;
      this.iFight = false;
      this.iDoTakt = 0;
      this.way = [];
    } else if (
      this.handTarget
      && (this.handTarget.hp <= 0
        || !this.handTarget.cell
        || this.handTarget.buildready <= 0)
    ) {
      this.handCell = this.handTarget.cell;

      this.handTarget = 0;
      this.iFight = false;
      this.iDoTakt = 0;
      // this.way=[];
    }

    // };

    /*
  for(let i=0;i<this.animys.length;i++){

      if(this.animys[i].hp<=0){
          this.animys.splice(i,1);
          i--;
      };

  };

  */

    isBlocked = this.isBlockedShip();

    // console.log(isBlocked);

    /// *
    let hDis2 = false;

    if (this.clickSave.handTarget && isBlocked) {
      if (
        !this.clickSave.handTarget.neitral
        && this.clickSave.handTarget.fatherFraction.union
          !== this.fatherFraction.union
      ) {
        const a = this.clickSave.handTarget.damagePointX - this.damagePointX;
        const b = this.clickSave.handTarget.damagePointY - this.damagePointY;

        hDis2 = Math.sqrt(a * a + b * b);
      }
    }
    //* /

    // if(this.clickSave
    // &&(!isBlocked||(isBlocked&&hDis2&&hDis2<=this.seeing))

    // ){
    // console.log(this.clickSave);

    if (this.clickSave.handCell) {
      if (
        !this.clickSave.handCell.sea
        || this.clickSave.handCell.sea !== this.cell.sea
      ) {
        this.clickSave = false;
      } else {
        this.handTarget = 0;
        this.target = 0;
        this.handCell = this.clickSave.handCell;
        this.way = 'go';
        this.stopGetTarget = 50;
        this.spe = this.handCell;
        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
        // if(this.fatherFraction.control==="player"&&this.handCell){console.log("here");};
      }
    } else if (
      this.clickSave.handTarget
      && (!this.handTarget
        || this.clickSave.handTarget.persolalNumber
          !== this.handTarget.persolalNumber)
    ) {
      /// //////////

      if (
        (this.clickSave.handTarget.cell.sea
          && this.clickSave.handTarget.cell.sea === this.cell.sea)
        || checkAliens_sea(this.cell.unit, this.clickSave.handTarget)
      ) {
        /*
  if(

  //(
  (

  !this.clickSave.handTarget.cell.continent
  ||
  ( this.clickSave.handTarget .cell.continent &&  this.clickSave.handTarget.cell.continent!==this.cell.continent  )
  )

  &&  !checkAliens(this.cell.unit,this.clickSave.handTarget)
  //)

  ){
      this.clickSave=0;
  }
  */

        /// //////////

        this.handTarget = this.clickSave.handTarget;
        this.target = 0;
        this.handCell = 0;
        this.stopGetTarget = 50;
        this.way = [];
        this.targetCell = this.handTarget.cell.persolalNumber;
        this.hold_position = false;
        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};

        // console.log("ok");
      }
    }

    // };

    let del = false;
    /// *
    if (this.fatherFraction.control === 'player' && this.clickSave.handTarget) {
      const a = this.handTarget.damagePointX - this.damagePointX;
      const b = this.handTarget.damagePointY - this.damagePointY;

      const c = Math.sqrt(a * a + b * b);

      if (c <= 250) {
        del = true;
      }
    }
    //* /

    if (this.clickSave && this.clickSave.hold) {
      this.clickSave.hold--;
    }

    if ((this.clickSave && !this.clickSave.hold) || del) {
      this.clickSave = false;
      // console.log("out");
    }

    /// //////////////////////////////////////////////
    /// //////////////////////////////////////////////
  }

  //

  // if(this.handTarget){console.log("ok");}; handCell

  if (this.stopGetTarget) {
    this.stopGetTarget--;
  }

  /// //////////////////////////////////////////////// new!!!

  if (step_ok && !this.iFight) {
    this.iDoTakt = 0;
    this.animY = 0;

    let thc;

    if (this.handTarget) {
      const hta = this.handTarget.damagePointX - this.damagePointX;
      const htb = this.handTarget.damagePointY - this.damagePointY;

      thc = Math.sqrt(hta * hta + htb * htb);
    }

    for (let i = 0; i < this.animys.length; i++) {
      // if(!this.animys[i]){console.log(this.animys); pausa=1;};

      let c;

      if (this.animys[i] && this.animys[i].cell) {
        c = get_distanse_on_lineyka(
          this.cell,
          this.gabarit,
          this.animys[i].cell,
          this.animys[i].gabarit,
        );
      }

      if (
        !c
        || !this.animys[i]
        || c > 1000 // this.dash
        || !this.animys[i].cell
        || this.animys[i].hp <= 0
        || ((!this.animys[i].cell.sea
          || (this.animys[i].cell.sea
            && this.animys[i].cell.sea !== this.cell.sea))
          && !checkAliens_sea(this.cell.unit, this.animys[i]))
      ) {
        this.animys.splice(i, 1);
        i--;

        // console.log("dell");
      } else {
        if (
          // (this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
          this.fatherFraction.control === 'player'
          && ((this.handCell
            && c <= this.seeing
            && this.animys[i].warrior
            && this.animys[i].hp > 0)
            || (thc
              && thc > this.seeing
              && c <= this.seeing
              && this.animys[i].warrior
              && this.animys[i].hp > 0))
          && !this.stopGetTarget
        ) {
          // let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);

          // console.log("ok"); pausa=1;
          // warrior=true;
          this.handTarget = 0;
          this.handCell = 0;
          this.way = [];
        }

        /// blackBoock

        // if(dlt){console.log("doloy");};

        // console.log(checkAliens(this.cell.unit,this.animys[i]))

        if (
          this.target
          && this.animys[i].persolalNumber === this.target.persolalNumber
          && c > this.dash
        ) {
          this.target = 0;
          this.way = [];
        }
      }
    }

    if (this.fatherFraction.control === 'comp' && this.animys.length) {
      this.handCell = 0;
      this.handTarget = 0;
      this.hold_position = false;
    }
  }

  // ii
  /// *

  // let stopBack=false;

  //* /

  // ii

  /// ////////////////////////////////////////////////////

  if (
    step_ok
    && ((!this.handCell && !this.handTarget) || this.iNeedTarget)
    // ||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)

    && this.stopGetTarget === 0
  ) {
    // iDoTakt

    /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0

    if (!this.iFight) {
      /// //////////////////////

      let min = [];

      let basickMass;

      const life = [];
      const warrior = [];
      const tower = [];
      const els = [];

      for (let i = 0; i < this.animys.length; i++) {
        if (
          !this.animys[i].fly
          && get_distanse_on_lineyka(
            this.cell,
            this.gabarit,
            this.animys[i].cell,
            this.animys[i].gabarit,
          ) <= this.dash
        ) {
          if (this.animys[i].type === 'tower') {
            tower.push(this.animys[i]);
          } else if (this.animys[i].warrior) {
            warrior.push(this.animys[i]);
          } else if (this.animys[i].unitStatus === 'life') {
            life.push(this.animys[i]);
          } else {
            els.push(this.animys[i]);
          }
        }
      }

      if (tower.length) {
        basickMass = tower;
      } else if (warrior.length) {
        basickMass = warrior;
      } else if (life.length) {
        basickMass = life;
      } else {
        basickMass = els;
      }

      for (let i = 0; i < basickMass.length; i++) {
        const a = basickMass[i].damagePointX - this.damagePointX;
        const b = basickMass[i].damagePointY - this.damagePointY;

        const c = Math.sqrt(a * a + b * b);

        // console.log(basickMass[i].unitName);
        if (
          (!min.length || c < min[0])
          && c <= this.dash
          && basickMass[i].hp > 0
          && basickMass[i].cell
        ) {
          min = [c, basickMass[i]];
        }
      }

      if (
        (this.target
          && min.length
          && this.target.persolalNumber !== min[1].persolalNumber)
        || !this.target
      ) {
        this.targetCell = false;
      } /// !!!!!!!!!!!!!!!!?????????????????

      if (min.length) {
        if (
          this.fatherFraction.control === 'comp'
          && !this.ii_attack
          && !this.handCell
          && !this.handTarget
          && !this.way.length
          && !this.ii_saveCell
        ) {
          // this.ii_saveCell=this.cell;
          this.comeWithMee(min[1]);
        }

        this.target = min[1];
        this.handCell = 0;
        this.handTarget = 0;
        // this.way=[];
        this.clickSave = false;
        // this.targetCell=this.target.cell;
        this.hold_position = false;
        this.goGroop_sweeme = false;
      } else {
        this.target = 0;
      }
    } else if (this.iFight) {
      if (this.iGetMyCell && !this.stopTroll) {
        if (this.iDoTaktTimer === 100000) {
          this.iDoTaktTimer = 0;
        }

        // iStand
        // console.log(this.iDoTakt);

        if (this.iDoTaktTimer % 10 === 0) {
          this.iDoTakt++;
        }

        if (this.iDoTakt === 1) {
          // pausa=1;

          this.axe_time++;

          // x,y,type,target,power

          if (!this.axe && this.axe_time === 9) {
            // console.log("axe");
            this.tyuk = true;
            this.axe_time = -1;

            this.axeInitialization(this.target, 'turtle', this.cell.unit);
            this.axe = true;

            if (this.target.unitStatus === 'building' || !this.target.warrior) {
              if (!this.target.alarmTimer) {
                this.target.alarmTimer = 500;
                this.target.agressor = this.cell.unit;
              }
            }
            // console.log("firte");

            if (
              this.target
              && this.target.fatherFraction.control === 'comp'
              && !this.target.sweeme
              && !this.target.iCanGetSweem
              && this.target.gabarit === 50
              && !this.target.active
            ) {
              this.target.panick_peoples(this.cell.unit);
            }
          }
        }

        if (this.iDoTakt === 5) {
          this.axe = false;
          // this.iFight=false;
          this.animTimer = 100;
          this.stopTroll = this.holdTroll;
          // this.cellUpdate();

          this.iDoTakt = 0;

          // if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
          // this.target.buildready-=15;
          // }

          // else  if(this.target.hp>0&&this.target.cell){
          // this.target.hp-=15;

          ///			};

          // if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
          // if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
        }
        this.iDoTaktTimer++;

        return;
      }
    }

    if (!this.iFight && this.target && this.target.hp > 0 && this.target.cell) {
      this.iGetTarget = this.checkGetTarget_sweeme();
    }

    // console.log("do target : "+get_distanse_on_lineyka(this.cell,100,this.target,this.target.gabarit));
    // console.log(" target seeing : "+this.target.seeing);

    if (this.iGetTarget) {
      this.peonGo(this.target);

      this.iFight = true;
      this.iGetTarget = false;

      this.moveVektor = this.getFightVector(this.target);
      this.getFirePoint();
      // console.log(this.moveVektor);
      this.way = [];
      this.clickSave = false;
    } else {
      if (
      //! this.hold_position
      // &&

        !isBlocked
        && !this.iFight
        && this.target
        && this.target.cell
        && (this.targetCell !== this.target.cell.persolalNumber
          || !this.way.length)
      ) {
        this.targetCell = this.target.cell.persolalNumber;

        // console.log("here");

        this.way = 'go';

        this.spe = this.target.cell;
        this.hold_position = false;
      }
    }
  } else if (step_ok && !this.handCell && !this.target && this.handTarget) {
    // console.log(this.handTarget);

    if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
      this.iGetTarget = this.checkGetHandTarget_sweeme();

      // console.log("ok");
    }

    if (this.iGetTarget) {
      if (
        !this.handTarget.neitral
        && this.handTarget.fatherFraction.union !== this.fatherFraction.union
      ) {
        this.peonGo(this.handTarget);

        this.iFight = true;
        this.clickSave = false;

        this.iGetTarget = false;

        this.moveVektor = this.getFightVector(this.handTarget);

        this.getFirePoint();
        // console.log(this.firePoint);
        this.way = [];
      } else {
        this.handTarget = 0;
        this.way = [];
        this.handCell = 0;
      }

      this.clickSave = false;
    } else {
      // console.log(this.handTarget);

      if (
        !isBlocked
        && !this.iFight
        && this.handTarget.cell
        && (!this.way.length
          || (this.targetCell
            && this.targetCell !== this.handTarget.cell.persolalNumber))
      ) {
        this.targetCell = this.handTarget.cell.persolalNumber;

        this.spe = this.handTarget.cell;

        this.way = 'go';
      }
    }

    // console.log(this.iFight);

    if (this.iFight) {
      if (
        this.handTarget.neitral
        || this.handTarget.fatherFraction.union === this.fatherFraction.union
      ) {
        this.handTarget = 0;
        this.iFight = false;
      }

      if (this.iGetMyCell && !this.stopTroll) {
        if (this.iDoTaktTimer === 100000) {
          this.iDoTaktTimer = 0;
        }

        // iStand
        // console.log(this.iDoTakt);

        if (this.iDoTaktTimer % 10 === 0) {
          this.iDoTakt++;
        }

        if (this.iDoTakt === 1) {
          // pausa=1;

          this.axe_time++;

          // x,y,type,target,power

          if (!this.axe && this.axe_time === 9) {
            // console.log("axe");
            this.tyuk = true;
            this.axe_time = -1;

            this.axeInitialization(this.handTarget, 'turtle', this.cell.unit);
            this.axe = true;

            if (
              this.handTarget.unitStatus === 'building'
              || !this.handTarget.warrior
            ) {
              if (!this.handTarget.alarmTimer) {
                this.handTarget.alarmTimer = 500;
                this.handTarget.agressor = this.cell.unit;
              }
            }
            // console.log("firte");

            if (
              this.handTarget.fatherFraction.control === 'comp'
              && !this.handTarget.sweeme
              && !this.handTarget.iCanGetSweem
              && this.handTarget.gabarit === 50
              && !this.handTarget.active
            ) {
              this.handTarget.panick_peoples(this.cell.unit);
            }
          }
        }

        if (this.iDoTakt === 5) {
          this.axe = false;
          // this.iFight=false;
          this.animTimer = 100;
          this.stopTroll = this.holdTroll;
          // this.cellUpdate();

          this.iDoTakt = 0;

          //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
          // this.handTarget.buildready-=15;
          //	}

          // else  if(this.handTarget.hp>0&&this.handTarget.cell){
          // this.handTarget.hp-=15;

          //			};

          // if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
          // if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
        }
        this.iDoTaktTimer++;

        return;
      }
    }

    if (isBlocked && step_ok && !this.iFight && this.handTarget) {
      this.handTarget = 0;
      this.way = [];
      this.handCell = 0;
    } /// ///new!!!!?????
  }

  if (step_ok && this.fatherFraction.control === 'comp') {
    if (
      !this.iFight
      && !this.target
      // this.readyToOut&&
      && this.ii_saveCell
      && !this.handTarget
      && !this.way.length
      && !this.handCell
    ) {
      const a = this.ii_saveCell.x - this.cell.x;
      const b = this.ii_saveCell.y - this.cell.y;

      const c = Math.sqrt(a * a + b * b);

      if (c > 0) {
        this.clickSave = new ClickSave(0, this.ii_saveCell);

        // console.log(this.persolalNumber);
      }

      if (c <= 1000) {
        this.ii_saveCell = 0;
        this.handCell = 0;
        this.way = [];
      }

      // console.log(this.persolalNumber);
    }
  }

  this.iNeedTarget = false;

  this.go = false;

  let way_unit;
  let way_cell;

  if (this.way.length && this.stepTakt < 1 && this.stepTakt >= 0) {
    way_cell = this.way[this.way.length - 1];

    // let ran=Math.floor(Math.random()*11);

    for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
      for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
        if (
          gameFielg[v]
          && gameFielg[v][h]
          && gameFielg[v][h].unit
          && gameFielg[v][h].unit.persolalNumber !== this.persolalNumber
          && gameFielg[v][h].unit.active // (gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
          && gameFielg[v][h].unit.hold_position
          && this.hold_position
          && this.hold_position === gameFielg[v][h].unit.hold_position
          // &&
          // this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
          && this.terpenie < this.terpenie_ran
        ) {
          // if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand

          this.terpenie++;

          this.x = this.cell.x;
          this.y = this.cell.y;

          // console.log("ok");

          return;
        }
      }
    }
  }

  if (this.terpenie === this.terpenie_ran) {
    // this.hold_position=false;
    // this.goGroop_sweeme=false;

    // console.log("!!!!!!!!!!!!!");
    this.go = true;
    this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
  }

  this.terpenie = 0;

  this.goWaySweeme(this.cell.unit);
};
