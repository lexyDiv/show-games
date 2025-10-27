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

Unit.prototype.personalProgRizar = function (arg, rage) {
  // magickTarget
  // animY
  // iStand
  // hp
  /// ////////////////////////////////////////////////////////////////////////////////////////
  // this.attack=this.baseAttack*this.fatherFraction.dopNoFlyAttack;
  // this.panzer=this.basePanzer*this.fatherFraction.dopNoFlyPanzer;

  // this.level=1+(this.fatherFraction.dopNoFlyAttack_level)+
  // (this.fatherFraction.dopNoFlyPanzer_level);

  /*
  if(this.fatherFraction.canMagick){
          this.mana=(floorGlobalTimer-this.manaTimer)*25;
          }
          else{this.mana=0;};
  */

  // if(this.mana>100){this.mana=100;};

  /// ////////////////////////////////////////////////////////////////////////////////////////

  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';
  }
  // this.target="dead";
  // iStand
  if (this.target === 'dead') {
    this.magickTarget = false;
    this.iDoTaktTimer = -1;
    this.iDoTakt = 0;
    // this.myJoube=0;
    this.iFight = false;
    this.way = [];
    this.speed = 0;
    this.updateSpeed();
    this.target = 0;
    this.handTarget = 0;
    this.animys = [];

    this.distroyTimer--;

    if (this.distroyTimer === 992) {
      for (let k = 0; k < this.contaktCells.length; k++) {
        gameFielg[this.contaktCells[k].vertikal][
          this.contaktCells[k].horizont
        ].iContaktWith.splice(
          gameFielg[this.contaktCells[k].vertikal][
            this.contaktCells[k].horizont
          ].iContaktWith.indexOf(this.contaktCells[k]),
          1,
        );
      }

      // if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
      // if(this.fatherFraction.rizars.indexOf(this.cell.unit)!==-1){this.fatherFraction.rizars.splice(this.fatherFraction.rizars.indexOf(this.cell.unit),1)};
      if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
        this.fatherFraction.selectUnits.splice(
          this.fatherFraction.selectUnits.indexOf(this.cell.unit),
          1,
        );
      }
      // if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1)};
      this.readyToOut = true;

      this.cell.pen.push(this.cell.unit);
      this.cell.free = true;
      this.cell.unit = 0;
    }

    if (this.distroyTimer === 0) {
      this.cell.pen.splice(this.cell.pen.indexOf(arg), 1);
      this.cell = 0;
      this.target = 0;
      this.stepTakt = 0;
    }

    // console.log("pizdez");

    return;
  }

  // console.log(!this.iFight&&!this.isBlocked()&&this.stopGetTarget===true);

  if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
    if (this.target && (this.target.hp <= 0 || !this.target.cell)) {
      this.target = 0;
      // this.iFight=false;
      this.iDoTakt = 0;

      // this.handCell=this.target.cell;
      // this.way="go";
    } else if (
      this.handTarget
      && (this.handTarget.hp <= 0 || !this.handTarget.cell)
    ) {
      /// *

      if (this.fatherFraction.control === 'comp') {
        this.handCell = this.handTarget.cell;
        this.way = 'go';

        this.handTarget = 0;
        // this.iFight=false;
        this.iDoTakt = 0;
      } else {
        if (
          this.memHT
          && this.memHT.persolalNumber === this.handTarget.persolalNumber
        ) {
          this.handTarget = 0;
          this.way = [];
          this.clickSave = false;
          this.iDoTakt = 0;
        } else {
          this.handCell = this.handTarget.cell;
          this.way = 'go';

          this.handTarget = 0;
          // this.iFight=false;
          this.iDoTakt = 0;
        }
      }
    }
  }

  // this.memHT=false;

  if (this.fatherFraction.control === 'comp') {
    this.dash = 1000;
  } // ii

  /// ///////////////////////////////////////
  /// ////////////////////////////////////////////

  // if(this.fatherFraction.control==="comp"&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

  // if(this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1);};

  // };
  // else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

  // if(this.fatherFraction.freeMechniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeMechniks.push(this.cell.unit);};

  // };

  const isBlocked = this.isBlocked();

  /// *

  if (this.magickTarget) {
    // pausa=1;

    // if(!this.fatherFraction.attack){console.log(this.magickTarget.timer);pausa=1;};//

    this.magickTarget.timer--;

    this.iFight = true;

    if (this.magickTarget.timer <= 30) {
      if (this.iDoTaktTimer === 100000) {
        this.iDoTaktTimer = 0;
      }

      if (this.iDoTaktTimer % 4 === 0 && this.iDoTakt <= 3) {
        this.iDoTakt++;
      }

      if (this.iDoTakt === 3 && this.magickTarget.target.hp > 0) {
        this.moveVektor = this.getFightVector(this.magickTarget.target);

        if (this.fatherFraction.nation === 'orc') {
          this.magickTarget.target.rage = 1500;
        } else {
          this.magickTarget.target.hp = this.magickTarget.target.hpfull;

          this.magickTarget.target.hp_up.push({ timer: 20, animX: 0 });

          this.tyuk_rage = true;
        }

        this.mana = 0;
        if (this.doMagick) {
          this.magick = false;
          this.way = [];
          this.doMagick = false;
          this.handTarget = 0;
        }

        if (!this.magickTarget.target.active) {
          this.fatherFraction.activeUnits.push(this.magickTarget.target);
          this.magickTarget.target.active = true;
        }
        // if(this.fatherFraction.activeUnits.indexOf(this.magickTarget)===-1){
        //	this.fatherFraction.activeUnits.push(this.magickTarget.target);
        //	this.magickTarget.active=true;
        //	}
        // indexOf

        // console.log(this.magickTarget.timer);
        // pausa=1;
      }
      // console.log(this.iDoTakt);//pausa=1;

      this.iDoTaktTimer++;
    } else {
      if (this.magickTarget.timer <= 45) {
        this.iDoTakt = 1;
      }
    }

    if (!this.magickTarget.timer) {
      this.magickTarget = false;
      // this.manaTimer=floorGlobalTimer;
      this.iFight = false;
      this.iDoTakt = 0;
      this.doMagick = false;
      // console.log("l,l,l,l,l,l");
    }

    // console.log(this.magickTarget.timer);
    return;
  }

  //* /

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && this.iDoTakt === 0
    && !this.iFight
  ) {
    // isBlocked=this.isBlocked();

    /// //////////////////////////////
    /// //////////////////////////////

    if (this.doMagick && !this.magickTarget) {
      if (
        !this.doMagick.cell
        || this.doMagick.hp <= 0
        || !this.magick
        || this.target
        || (!this.handTarget
          && get_distanse_on_lineyka(this.cell, 50, this.doMagick.cell, 50)
            > 150)
        || this.hold_position
        || (this.handTarget
          && this.handTarget.persolalNumber !== this.doMagick.persolalNumber)
      ) {
        this.doMagick = false;
      }
    }

    /// *

    if (this.mana >= 100) {
      if (
        (this.fatherFraction.control === 'comp' && this.animys.length)
        || this.doMagick
      ) {
        if (this.fatherFraction.nation === 'orc') {
          if (this.fatherFraction.control === 'comp') {
            for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
              for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
                let cell;

                if (gameFielg[i] && gameFielg[i][k]) {
                  cell = gameFielg[i][k];
                }

                if (
                  cell
                  && cell.unit
                  && cell.unit.gabarit
                  && cell.unit.gabarit === 50
                  && cell.unit.persolalNumber !== this.persolalNumber
                  && !cell.unit.neitral
                  && cell.unit.fatherFraction.fraction
                    === this.fatherFraction.fraction
                  && cell.unit.warrior
                  && cell.unit.unitStatus === 'life'
                  && cell.unit.hp > 0
                  && !cell.unit.rage
                ) {
                  this.magickTarget = {
                    target: gameFielg[i][k].unit,
                    timer: 50,
                  };
                  this.tyuk_rage = true;
                  // this.iDoTakt=0;

                  // console.log(this.magickTarget.target)//
                  // pausa=1;
                  break;
                }
              }
            }
          } else if (this.doMagick) {
            if (
              get_distanse_on_lineyka(this.cell, 50, this.doMagick.cell, 50)
              <= 150
            ) {
              this.magickTarget = { target: this.doMagick, timer: 50 };

              this.tyuk_rage = true;
              // console.log("here");
            }
          }
        } else {
          if (this.fatherFraction.nation === 'h') {
            if (this.fatherFraction.control === 'comp') {
              for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
                for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
                  let cell;

                  if (gameFielg[i] && gameFielg[i][k]) {
                    cell = gameFielg[i][k];
                  }

                  if (
                    cell
                    && cell.unit
                    && cell.unit.gabarit
                    && cell.unit.gabarit === 50
                    && cell.unit.persolalNumber !== this.persolalNumber
                    && !cell.unit.neitral
                    && cell.unit.fatherFraction.fraction
                      === this.fatherFraction.fraction
                    // &&gameFielg[i][k].unit.warrior
                    && cell.unit.unitStatus === 'life'
                    && cell.unit.hp > 0
                    // &&!gameFielg[i][k].unit.rage
                    && (cell.unit.hp * 100) / cell.unit.hpfull <= 33
                  ) {
                    this.magickTarget = {
                      target: cell.unit,
                      timer: 50,
                    };
                    // this.iDoTakt=0;

                    // console.log(this.magickTarget.target)//
                    // pausa=1;
                    break;
                  }
                }
              }
            } else if (this.doMagick) {
              if (
                get_distanse_on_lineyka(
                  this.cell,
                  50,
                  this.doMagick.cell,
                  50,
                ) <= 150
              ) {
                this.magickTarget = {
                  target: this.doMagick,
                  timer: 50,
                };
              }
            }
          }
        }

        if (this.magickTarget) {
          this.x = this.cell.x;
          this.y = this.cell.y;

          this.iStand = true; // ?

          this.moveVektor = this.getFightVector(this.magickTarget.target);

          // pausa=1;

          return;
        }
      }
    }

    // this.doMagick=false;

    this.magickTarget = false;

    // ddd

    //* /
    /// /////////////////////////////
    /// //////////////////////////////

    let hDis2 = false;

    if (this.clickSave.handTarget) {
      const a = this.clickSave.handTarget.x - this.x;
      const b = this.clickSave.handTarget.y - this.y;

      hDis2 = Math.sqrt(a * a + b * b);
    }

    // console.log(isBlocked)

    if (this.clickSave && (!isBlocked || (isBlocked && hDis2 && hDis2 < 80))) {
      if (this.clickSave.handCell) {
        this.target = 0;
        this.handTarget = 0;
        this.iDoTakt = 0;
        this.stepTakt = 0;
        this.handCell = this.clickSave.handCell;
        this.way = 'go';

        this.stopGetTarget = 50;

        if (this.ii_back) {
          this.stopGetTarget = this.ii_back;
        }

        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
        // if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
      } else if (
        this.clickSave.handTarget
        && (!this.handTarget
          || this.clickSave.handTarget.persolalNumber
            !== this.handTarget.persolalNumber)
      ) {
        this.target = 0;
        this.handTarget = this.clickSave.handTarget;
        this.iDoTakt = 0;
        this.stepTakt = 0;
        this.handCell = 0;
        this.stopGetTarget = 50;

        if (this.fatherFraction.control === 'player') {
          if (this.magick && this.magick_ok(this.clickSave.handTarget)) {
            // this.magickTarget=this.clickSave.handTarget;

            this.doMagick = this.handTarget;
          }
        }

        // if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
      }

      /*

      if(this.target){

          if(this.clickSave.handCell&&!isBlocked){

              this.stopGetTarget=50;
              this.target=0;
              this.handCell=this.clickSave.handCell;
              this.way="go";

              }
              else if(this.clickSave.handTarget){//console.log("ok");

              this.stopGetTarget=50;
              this.target=0;
              this.handTarget=this.clickSave.handTarget;
              this.way=[];
              //this.handCell=0;
              this.targetCell=false;
              };

      }
  else if(this.handTarget){

      //if(this.persolalNumber===10532&&this.clickSave&&this.clickSave.handCell){console.log("hm?");};

  if(this.clickSave.handCell&&!isBlocked){

              this.stopGetTarget=50;
              this.handTarget=0;
              this.handCell=this.clickSave.handCell;
              this.way="go";

              }
              else if(this.clickSave.handTarget&&this.clickSave.handTarget.persolalNumber!==this.handTarget.persolalNumber
              ){//console.log("ok");

              this.stopGetTarget=50;
              //this.handTarget=0;
              this.handTarget=this.clickSave.handTarget;
              this.way=[];
              //this.handCell=0;
              this.targetCell=false;
              };

  }
  else{

  if(this.clickSave.handTarget){

  this.stopGetTarget=50;
              //this.handTarget=0;
              this.handTarget=this.clickSave.handTarget;
              this.way=[];
           this.handCell=0;
           this.targetCell=false;

  }
  else if(this.clickSave.handCell){

      //if(this.persolalNumber===10532){console.log("hm?");};

              this.stopGetTarget=50;
              //this.handTarget=0;
              this.handCell=this.clickSave.handCell;
              this.way="go";

              };

  };

  //console.log(this.handTarget.unitName);
  */
    }

    let del = false;

    if (this.fatherFraction.control === 'player' && this.clickSave.handTarget) {
      const a = this.handTarget.damagePointX - this.damagePointX;
      const b = this.handTarget.damagePointY - this.damagePointY;

      const c = Math.sqrt(a * a + b * b);

      if (c <= 250) {
        del = true;
      }
    }

    if (this.clickSave && this.clickSave.hold) {
      this.clickSave.hold--;
    }

    if ((this.clickSave && !this.clickSave.hold) || del) {
      this.clickSave = false;
    }

    /// //////////////////////////////////////////////
    /// //////////////////////////////////////////////

    let hDis = false;

    if (this.handTarget) {
      hDis = this.checkGetHandTarget(true);
    }

    //

    if (
      this.stopGetTarget === 0
      && this.stepTakt < 1
      && this.stepTakt >= 0
      && (!this.target || (this.target && !this.checkGetTarget()))
      && !hDis //! !!!!!!!!!?????????????
    ) {
      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          !this.cell.iContaktWith[i].father.neitral
          && this.cell.iContaktWith[i].father.fatherFraction.union
            !== this.fatherFraction.union
          && this.cell.iContaktWith[i].father.warrior
          && this.cell.iContaktWith[i].father.hp > 0
        ) {
          this.handTarget = 0; // gameFielg[i][k].unit;
          this.handCell = 0;
          this.target = this.cell.iContaktWith[i].father;
          this.way = [];
          this.targetCell = false;
          this.clickSave = false;

          // if(this.fatherFraction.control==="comp"){console.log("act");};
        }
      }
    }
  }

  //
  // if(this.stopGetTarget===50){console.log("vot");};
  if (this.stopGetTarget) {
    this.stopGetTarget--;
  }
  // if(this.iGoBack){this.iGoBack--;};

  /// ///////////////////////////////////////////////////////////////////////////// new!!!!
  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && !this.iFight // &&!this.iGoBack
  ) {
    for (let i = 0; i < this.animys.length; i++) {
      const u = this.animys[i];

      let c;
      if (u && u.damagePointX) {
        const a = u.damagePointX - this.damagePointX;
        const b = u.damagePointY - this.damagePointY;

        c = Math.sqrt(a * a + b * b);
      }
      /*
  if(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target){

      this.handCell=0;
      this.handTarget=0;
      this.way=[];
      //console.log("oklll");
  };
  // */
      if (
        !c
        || c > this.dash
        || !u.cell
        || u.hp <= 0
        || !u.cell.continent
        || u.cell.continent !== this.cell.continent
        || u.sweeme
      ) {
        this.animys.splice(i, 1);
        i--;
      }
    }
  }
  /// //////////////////////////////////////////////////////////////////////////////////

  // ii

  if (
    this.fatherFraction.control === 'comp'
    && this.animys.length
    && !this.stopGetTarget
  ) {
    this.handCell = 0;
    this.handTarget = 0;
  }

  // ii

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && ((!this.handCell && !this.handTarget) || this.iNeedTarget)
    && this.stopGetTarget === 0
  ) {
    // if(this.fatherFraction.control==="comp"&&!this.target&&this.animys.length){console.log("kkkkk");	};

    let min = [];

    // if(this.fatherFraction.fraction==="redOrcs"){console.log(this.iFight);};

    let dis;

    if (this.target) {
      const a = this.target.damagePointX - this.damagePointX;
      const b = this.target.damagePointY - this.damagePointY;

      dis = Math.sqrt(a * a + b * b);
    }

    if (
      !this.iFight
      && (!this.target || (this.target && dis > 120) || !this.target.warrior)
    ) {
      /// ///////////////////////

      // let min=[];

      let basickMass;

      const life = [];
      const warrior = [];
      const tower = [];
      const els = [];

      for (let i = 0; i < this.animys.length; i++) {
        const u = this.animys[i];

        if (!u.isBlocked(this.cell.unit)) {
          if (u.type === 'tower') {
            tower.push(this.animys[i]);
          } else if (u.warrior) {
            warrior.push(u);
          } else if (u.unitStatus === 'life') {
            life.push(u);
          } else {
            els.push(u);
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

        if (
          (!min.length || c < min[0])
          && c <= this.dash
          && basickMass[i].hp > 0
          && basickMass[i].cell
        ) {
          min = [c, basickMass[i]];
        }
      }

      /// //////////////////////

      /*

  for(let i=0;i<this.animys.length;i++){

      let a=this.animys[i].damagePointX-this.damagePointX;
      let b=this.animys[i].damagePointY-this.damagePointY;

      let c=Math.sqrt(a*a+b*b);

      //this.target=this.animys[i];

      if((!min.length||c<min[0])&&c<=this.dash&&this.animys[i].hp>0&&this.animys[i].cell&&
      !this.animys[i].isBlocked(this.cell.unit)

  ){
          min=[c,this.animys[i]];
          };

  };

  */

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
          this.ii_saveCell = this.cell;
          this.comeWithMee(min[1]);
        }

        this.target = min[1];
        this.handCell = 0;
        this.handTarget = 0;
        // this.way=[];
        this.clickSave = false;
      } else {
        this.target = 0;
      }
    }

    // console.log(this.iGetTarget);
    if (this.target) {
      // this.targetCell=this.target.cell.persolalNumber;

      if (!this.target.warrior) {
        for (let i = 0; i < this.cell.iContaktWith.length; i++) {
          if (
            !this.cell.iContaktWith[i].father.neitral
            && this.cell.iContaktWith[i].father.fatherFraction.union
              !== this.fatherFraction.union
            && this.cell.iContaktWith[i].father.warrior
            && this.cell.iContaktWith[i].father.hp > 0
          ) {
            this.handTarget = 0; // gameFielg[i][k].unit;
            this.handCell = 0;
            this.target = this.cell.iContaktWith[i].father;
            this.way = [];
            this.targetCell = false;
            this.clickSave = false;
          }
        }

        // this.target=gameFielg[i][k].unit;
        // this.targetCell=false;/////////////////////////////////////////////////////////??????????????????????????????????
      }

      // let a=this.target.x-this.x;
      // let b=this.target.y-this.y;

      // let c=Math.sqrt(a*a+b*b);

      // if(c<=Math.sqrt(50*50+50*50)){
      if (!this.iFight && this.target.hp > 0 && this.target.cell) {
        this.iGetTarget = this.checkGetTarget();
      }
      // };

      if (this.iGetTarget) {
        /// /////////////////////////////////////////////////////////peon

        this.peonGo(this.target);

        /// /////////////////////////////////////////////////////////peon

        this.clickSave = false;

        this.moveVektor = this.getFightVector(this.target);

        // console.log(this.moveVektor);

        this.way = [];
        // };

        // if(this.iGetMyCell){
        this.iFight = true;

        // };
      } else if (
        !this.hold_position
        && !isBlocked
        && !this.iFight
        && this.target
        && !this.target.isBlocked(this.cell.unit)
        && (this.targetCell !== this.target.cell.persolalNumber
          || !this.way.length
          || (this.way.length && !this.way[this.way.length - 1].free))
      ) {
        /*
  let alienWay=[];

  if(
  this.way.length&&!this.way[this.way.length-1].free
  &&this.way[this.way.length-1].unit
  &&this.way[this.way.length-1].unit.fatherFraction.union===this.fatherFraction.union
  &&this.way[this.way.length-1].unit.way.length>=3
  ){

  for(let i=this.way[this.way.length-1].unit.way.length-1;i>0;i--){

  gameFielg[this.way[this.way.length-1].unit.way[i].vertikal][this.way[this.way.length-1].unit.way[i].horizont].free=false;

  alienWay.push(gameFielg[this.way[this.way.length-1].unit.way[i].vertikal][this.way[this.way.length-1].unit.way[i].horizont]);

  if(alienWay.length>=5){break;};
  };

  };

  */

        this.targetCell = this.target.cell.persolalNumber;

        const noFree = 1000;

        this.finish = this.target.cell;
        this.sosFin = this.target.cell;
        // getWay(this.cell.unit,noFree,2000);

        /*
  let deep;

  if(dis<=150){deep=10;}

      else if(dis<=300){
          deep=20;
          }
  else if(dis>300&&deep<500){
      deep=30;
  }
  else{

      deep=50;

  };
      deep=1000;

  */
        const deep = 10000;

        getWay(arg, noFree, deep, this.target);

        /*
      for(let i=0;i<alienWay.length;i++){

      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };

  };
      */
        // console.log("???");
      }

      this.iGetTarget = false;

      if (this.iFight) {
        if (this.iGetMyCell) {
          if (this.iDoTaktTimer === 100000) {
            this.iDoTaktTimer = 0;
          }

          // iStand
          // console.log(this.iDoTakt);

          if (this.iDoTaktTimer % 4 === 0) {
            this.iDoTakt++;
          }

          let strike;

          if (this.fatherFraction.nation === 'orc') {
            if (this.iDoTakt === 3) {
              strike = true;
            }
          } else {
            if (this.iDoTakt === 4) {
              strike = true;
            }
          }

          if (strike && !this.bom) {
            // pausa=1;
            let hp;

            const attack = this.attack * rage;
            this.tyuk = true;

            if (
              this.target.unitStatus === 'building'
              && this.target.buildready < this.target.hpfull
              && this.target.buildready > 0
            ) {
              hp = this.target.buildready;

              this.target.buildready
                -= attack - (attack * this.target.panzer) / 100;
            } else if (this.target.hp > 0 && this.target.cell) {
              hp = this.target.hp;

              this.target.hp -= attack - (attack * this.target.panzer) / 100;

              // console.log(this.attack-((this.attack*this.target.panzer)/100));
            }
            // indexOf
            if (this.target.unitStatus === 'life') {
              /// /////////////////
              if (title.style && hp && hp > 0 && this.target.hp <= 0) {
                this.fatherFraction.kills++;
              }
              /// ////////////////////

              if (!this.target.warrior && !this.target.alarmTimer) {
                this.target.alarmTimer = 500;
                this.target.agressor = this.cell.unit;
              }

              if (this.target && !this.target.active) {
                this.target.fatherFraction.activeUnits.push(this.target);
                this.target.active = true;
              }
            }
            if (this.target.unitStatus === 'building') {
              /// /////////////////
              if (
                title.style
                && hp
                && hp > 0
                && (this.target.hp <= 0 || this.target.buildready <= 0)
              ) {
                this.fatherFraction.razings++;
              }
              /// ////////////////////

              if (!this.target.alarmTimer) {
                this.target.alarmTimer = 500;
                this.target.agressor = this.cell.unit;
              }

              if (
                this.target
                && this.target.fatherFraction.activeBuildings.indexOf(
                  this.target,
                ) === -1
              ) {
                this.target.fatherFraction.activeBuildings.push(this.target);
              }
            }

            this.bom = true;
            // pausa=1;
          }

          if (this.iDoTakt === 5) {
            this.iFight = false;
            this.animTimer = 100;
            this.bom = false;
            // this.cellUpdate();

            this.iDoTakt = 0;

            // pausa=1
          }
          this.iDoTaktTimer++;

          return;
        }
      }
    }
  } else if (this.handTarget && this.stepTakt < 1 && this.stepTakt >= 0) {
    // this.target=0;

    // console.log("hand");

    // this.target=this.handTarget;

    //	if(this.persolalNumber===1433&&this.handTarget.unitStatus==="building"){
    //	console.log(this.handTarget.buildready);
    //	}

    /*
  if((this.handTarget.hp<=0||!this.handTarget.cell||this.handTarget.buildready<=0||
  !this.handTarget)&&!this.iFight
  ){this.handTarget=0;this.way=[];this.clickSave=false;};
  */

    /// *
    // console.log(this.handTarget.unitName);

    if (!this.iFight && this.handTarget) {
      this.iGetTarget = this.checkGetHandTarget();
    }
    // };

    // if(this.handTarget.unitName==="townHoll"){
    // pausa=1;

    // console.log(this.iGetTarget);
    // };
    //* /

    if (this.iGetTarget) {
      this.memHT = this.handTarget;

      /// /////////////////////////////////////////////////////////peon

      this.peonGo(this.handTarget);

      /// /////////////////////////////////////////////////////////peon

      this.clickSave = false;

      this.moveVektor = this.getFightVector(this.handTarget);

      // console.log(this.moveVektor);

      // this.stopGetTarget=0;

      if (
        this.handTarget.neitral
        || this.handTarget.fatherFraction.union === this.fatherFraction.union
      ) {
        this.handTarget = 0;
        this.way = [];
        this.clickSave = false;
        // console.log("ok");
      } else {
        // if(!this.iFight){
        this.way = [];
        // };

        // if(this.iGetMyCell){
        this.iFight = true;
        // this.stopGetTarget=2;
        // };
        this.clickSave = false;
      }
    } else if (
      !this.iFight
      && this.handTarget
      && (this.targetCell !== this.handTarget.cell.persolalNumber
        || (this.way.length && !this.way[this.way.length - 1].free)
        || !this.way.length)
    ) {
      // console.log("ok");
      /*
  let alienWay=[];

  if(
  this.way.length&&!this.way[this.way.length-1].free
  &&this.way[this.way.length-1].unit
  &&this.way[this.way.length-1].unit.fatherFraction.union===this.fatherFraction.union
  &&this.way[this.way.length-1].unit.way.length>=3
  ){

  for(let i=this.way[this.way.length-1].unit.way.length-1;i>0;i--){

  gameFielg[this.way[this.way.length-1].unit.way[i].vertikal][this.way[this.way.length-1].unit.way[i].horizont].free=false;

  alienWay.push(gameFielg[this.way[this.way.length-1].unit.way[i].vertikal][this.way[this.way.length-1].unit.way[i].horizont]);

  if(alienWay.length>=5){break;};
  };

  };

  */

      this.targetCell = this.handTarget.cell.persolalNumber;

      noFree = 1000;

      // if(this.fatherFraction.control==="comp"){noFree=6000;};

      // let optimalContaktCell=this.getOptimalContaktCell();

      // console.log(this.target);
      this.finish = this.handTarget.cell; // this.target.cell;
      this.sosFin = this.handTarget.cell; // this.target.cell;

      this.iCanGet = false;
      // deep

      getWay(arg, noFree, glob_deep, this.handTarget);

      // console.log("way")

      /*
  for(let i=0;i<alienWay.length;i++){

      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };

  };
  */

      /// *

      /*
  for(let i=0;i<this.handTarget.contaktCells.length;i++){

      if(this.way.length&&this.way[0].horizont===this.handTarget.contaktCells[i].horizont&&
      this.way[0].vertikal===this.handTarget.contaktCells[i].vertikal
      ){

      iCanGet=true;
      break;
      };

  };
  */
      // console.log(this.handTarget)
      // console.log(this.way.length)

      if (!this.iCanGet) {
        if (this.fatherFraction.control === 'player') {
          if (!this.way.length) {
            this.handCell = this.handTarget.cell;

            this.clickSave = false;
            this.handTarget = 0;
            // this.target=0;
            this.targetCell = false;
          } else {
            this.handCell = this.way[0];
            this.handTarget = 0;
            // this.target=0;
            this.targetCell = false;

            if (this.way.length > 1) {
              this.clickSave = false;
            }
          }
        }

        // console.log("neeee");
      } else {
        this.iGetTarget = this.checkGetHandTarget();

        if (this.iGetTarget) {
          if (
            this.handTarget.neitral
            || this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.way = [];
            this.clickSave = false;
            // console.log("ok");
          } else {
            this.way = [];
            this.iFight = true;
            this.iGetTarget = false;
            this.clickSave = false;
            // this.stopGetTarget=2;
          }
        }
      }

      //* /

      // console.log("ok");
      /*
                       let noFree=[];

  for(let l=this.vertikal-7;l<this.vertikal+7;l++){

      for(let m=this.horizont-7;m<this.horizont+7;m++){

  if(gameFielg[l]&&gameFielg[l][m]&&!gameFielg[l][m].free){
          noFree.push(gameFielg[l][m]);
  };

      };

  };

      this.finish=this.handTarget.cell;
          getWay(this.cell.unit,noFree,2000);

      */
    }

    //	*/
  }

  // if(this.fatherFraction.fraction==="blackOrcs"&&this.target){console.log("okokok");};

  this.iGetTarget = 0;

  if (this.iFight) {
    if (this.iGetMyCell) {
      if (this.iDoTaktTimer === 100000) {
        this.iDoTaktTimer = 0;
      }

      // iStand
      // console.log(this.iDoTakt);

      if (this.iDoTaktTimer % 4 === 0) {
        this.iDoTakt++;
      }

      let strike;

      if (this.fatherFraction.nation === 'orc') {
        if (this.iDoTakt === 3) {
          strike = true;
        }
      } else {
        if (this.iDoTakt === 4) {
          strike = true;
        }
      }

      if (strike && !this.bom) {
        let hp;

        const attack = this.attack * rage;
        this.tyuk = true;

        if (
          this.handTarget.unitStatus === 'building'
          && this.handTarget.buildready < this.handTarget.hpfull
          && this.handTarget.buildready > 0
        ) {
          hp = this.handTarget.buildready;

          this.handTarget.buildready
            -= attack - (attack * this.handTarget.panzer) / 100;
        } else if (this.handTarget.hp > 0 && this.handTarget.cell) {
          hp = this.handTarget.hp;

          this.handTarget.hp
            -= attack - (attack * this.handTarget.panzer) / 100;
        }
        // indexOf
        if (this.handTarget.unitStatus === 'life') {
          /// /////////////////
          if (title.style && hp && hp > 0 && this.handTarget.hp <= 0) {
            this.fatherFraction.kills++;
          }
          /// ////////////////////

          if (!this.handTarget.warrior && !this.handTarget.alarmTimer) {
            this.handTarget.alarmTimer = 500;
            this.handTarget.agressor = this.cell.unit;
          }

          if (this.handTarget && !this.handTarget.active) {
            this.handTarget.fatherFraction.activeUnits.push(this.handTarget);
            this.handTarget.active = true;
          }
        }
        if (
          this.handTarget.unitStatus === 'building'
          && !this.handTarget.neitral
        ) {
          /// /////////////////
          if (
            title.style
            && hp
            && hp > 0
            && (this.handTarget.hp <= 0 || this.handTarget.buildready <= 0)
          ) {
            this.fatherFraction.razings++;
          }
          /// ////////////////////

          if (!this.handTarget.alarmTimer) {
            this.handTarget.alarmTimer = 500;
            this.handTarget.agressor = this.cell.unit;
          }

          if (
            this.handTarget
            && this.handTarget.fatherFraction.activeBuildings.indexOf(
              this.handTarget,
            ) === -1
          ) {
            this.handTarget.fatherFraction.activeBuildings.push(
              this.handTarget,
            );
          }
        }
        this.bom = true;
      }

      if (this.iDoTakt === 5) {
        this.iFight = false;
        this.animTimer = 100;
        this.bom = false;
        // this.cellUpdate();

        this.iDoTakt = 0;
      }
      this.iDoTaktTimer++;

      return;
    }
  }

  /// *

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && this.fatherFraction.control === 'comp'
    && !this.iFight
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

    if (c > 50) {
      this.clickSave = new ClickSave(0, this.ii_saveCell);

      // console.log(this.persolalNumber);
    }

    if (c <= 250) {
      this.ii_saveCell = 0;
    }

    // console.log(this.persolalNumber);
  }

  this.iNeedTarget = false;

  //* /
};
