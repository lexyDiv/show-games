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

Unit.prototype.personalProgMag = function (arg, rage) {
  // magickTarget
  // animY
  // iStand
  // hp
  /// ////////////////////////////////////////////////////////////////////////////////////////

  this.level = 1; // +(this.fatherFraction.dopNoFlyAttack_level)+
  // (this.fatherFraction.dopNoFlyPanzer_level);

  /*
  if(this.fatherFraction.canMagick_mag){
          this.mana=(floorGlobalTimer-this.manaTimer)*25;
          }
          else{this.mana=0;};
  */

  if (this.mana > 100) {
    this.mana = 100;
  }

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
    // this.updateSpeed();
    this.target = 0;
    this.handTarget = 0;
    this.animys = [];
    // this.animY=900;

    if (this.distroyTimer === 1020) {
      this.animY = 900;
    }

    this.distroyTimer--;

    if (this.distroyTimer % 4 === 0) {
      this.animY += 100;
    }

    // this.distroyTimer--;

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

      // this.cell.pen.push(this.cell.unit);
      this.cell.free = true;
      this.cell.unit = 0;
    }

    if (this.distroyTimer === 0) {
      // this.cell.pen.splice(this.cell.pen.indexOf(arg),1);
      this.cell = 0;
      this.target = 0;
      this.stepTakt = 0;
    }

    // console.log("pizdez");

    return;
  }

  // console.log(!this.iFight&&!this.isBlocked()&&this.stopGetTarget===true); iCanGetSweem

  // if(this.mag_back){this.mag_back--; this.animys=[]; this.target=0; this.handTarget=0; };

  if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
    if (this.target && (this.target.hp <= 0 || !this.target.cell)) {
      this.target = 0;
      // this.iFight=false;
      this.iDoTakt = 0;
      this.magickTarget = false;
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
  } else {
    this.dash = 200;
  }

  /// ///////////////////////////////////////
  /// ////////////////////////////////////////////

  // if(this.fatherFraction.control==="comp"&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

  // if(this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1);};

  // };
  // else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

  // if(this.fatherFraction.freeMechniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeMechniks.push(this.cell.unit);};

  // };

  const isBlocked = this.isBlocked();

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && this.iDoTakt === 0
    && !this.iFight
  ) {
    // isBlocked=this.isBlocked();

    /// //////////////////////////////
    /// //////////////////////////////

    /// *

    if (
      this.ii_attack
      && this.mana < 100
      && this.cell.continent === this.fatherFraction.continent
      && !this.anim_magick_timer
      && this.cell
      && this.cell.fraction !== this.fatherFraction.fraction
    ) {
      /// *
      this.ii_attack = false;
      this.ii_saveCell = this.born_cell;
      this.stopGetTarget = 700;
      this.target = 0;
      this.clickSave = new ClickSave(0, this.born_cell);
      this.animys = [];
      this.ii_index = false;
      //* /
      /// console.log("here");
    }

    /*
  if(this.handTarget){
  pausa
      this.magickTarget=this.handTarget;
      this.magick="tor";

  };
  */
    // this.mana=100;

    if (this.fatherFraction.control === 'comp') {
      // if(this.stopGetTarget){this.animys=[];};

      /*
      if(
      this.cell
      &&
      this.cell.fraction===this.fatherFraction.fraction
      ){
          this.iCanGetSweem=false;
      }
      else{
          this.iCanGetSweem=true;
      };
  */

      if (this.target && this.mana === 100) {
        if (this.fatherFraction.nation === 'orc') {
          if (this.target.gabarit === 50 || this.target.fly) {
            this.magickTarget = this.target;
            this.magick = 'z';
          } else {
            this.magickTarget = this.target;
            this.magick = 'tor';
          }
        } else {
          if (this.target.gabarit === 50 || this.target.fly) {
            this.magickTarget = this.target;
            this.magick = 'nar';
          } else {
            this.magickTarget = this.target;
            this.magick = 'tor';
          }
        }
      }
      /*
      else if(this.target&&!this.stopGetTarget&&!this.ii_attack&&!this.handCell&&!this.ii_saveCell){

          this.stopGetTarget=500;

          this.ground_panick(this.target);

          //console.log("in"); pausa=1;

      };
      */

      if (this.mana < 100 && !this.anim_magick_timer) {
        if (
          !this.anim_magick_timer
          && !this.handCell
          && !this.handTarget
          && !this.way.length
          && this.animys.length
          && !this.stopGetTarget
          && !this.clickSave
        ) {
          this.stopGetTarget = 500;

          this.ground_panick(this.animys[0]);
        }

        this.magick = false;
        this.magickTarget = false;
      }

      if (this.mana === 100) {
        this.stopGetTarget = 0;
      }
    }

    // if(this.animys.length){console.log("in"); pausa=1;};
    // if(this.target.fly){console.log(this.magickTarget); console.log(this.magick); pausa=1;};

    if (this.magickTarget || this.anim_magick_timer) {
      if (
        !this.anim_magick_timer
        && ((this.fatherFraction.control === 'player'
          && (!this.handTarget
            || this.handTarget.persolalNumber
              !== this.magickTarget.persolalNumber))
          || !this.magickTarget.cell
          || this.magickTarget.hp <= 0
          || !checkAliens(this.cell.unit, this.magickTarget)
          || this.mana < 100
          || !this.magick
          || (this.magickTarget.nar
            && this.fatherFraction.nation === 'h'
            && this.magick === 'nar'))

      // ||
      // (this.magickTarget.gabarit>50&&this.magick==="z")
      ) {
        this.target = 0;
        this.handTarget = 0;

        if (!this.ii_saveCell) {
          this.way = [];
        }

        this.magickTarget = false;

        // console.log("here");
      }

      // console.log(this.magickTarget);
      // console.log(this.magick);
      // pausa=1;

      if (
        (this.magickTarget
          && get_distanse_on_lineyka(
            this.cell,
            50,
            this.magickTarget.cell,
            this.magickTarget.gabarit,
          ) <= this.seeing)
        || this.anim_magick_timer
      ) {
        // console.log("get"); pausa=1;
        this.x = this.cell.x;
        this.y = this.cell.y;

        this.way = [];

        if (!this.anim_magick_timer) {
          this.anim_magick_timer = 8;
          this.animY = 400;
          this.moveVektor = this.getFightVector(this.magickTarget);
        }

        if (this.anim_magick_timer % 2 === 0) {
          this.animY += 100;
        }

        this.anim_magick_timer--;

        if (this.anim_magick_timer === 3) {
          // console.log("z");
          if (this.magick === 'z') {
            const targets = [];

            for (
              let i = this.magickTarget.vertikal - 5;
              i <= this.magickTarget.vertikal + 5;
              i++
            ) {
              for (
                let k = this.magickTarget.horizont - 5;
                k <= this.magickTarget.horizont + 5;
                k++
              ) {
                if (gameFielg[i] && gameFielg[i][k]) {
                  if (
                    gameFielg[i][k].unit
                    && !gameFielg[i][k].unit.neitral
                    && gameFielg[i][k].unit.fatherFraction.union
                      !== this.fatherFraction.union
                    && gameFielg[i][k].unit.gabarit === 50
                    && gameFielg[i][k].unit.hp > 0
                    && gameFielg[i][k].unit.cell
                  ) {
                    targets.push(gameFielg[i][k].unit);

                    if (targets.length === 4) {
                      break;
                    }
                  }

                  if (
                    gameFielg[i][k].dragoon
                    && gameFielg[i][k].dragoon.fatherFraction.union
                      !== this.fatherFraction.union
                    && targets.indexOf(gameFielg[i][k].dragoon) === -1
                  ) {
                    targets.push(gameFielg[i][k].dragoon);

                    if (targets.length === 4) {
                      break;
                    }
                  }
                }
              }

              if (targets.length === 4) {
                break;
              }
            }

            for (let i = 0; i < targets.length; i++) {
              const target = targets[i];

              /// //////////////////////

              this.firePointX = this.damagePointX;
              this.firePointY = this.damagePointY;

              const a = target.damagePointX - this.damagePointX;
              const b = target.damagePointY - this.damagePointY;

              const c = Math.sqrt(a * a + b * b);

              const a2 = target.damagePointX - this.firePointX;
              const b2 = target.damagePointY - this.firePointY;

              // x,y,type,target,attack,father

              const conor = Math.atan2(b, a);

              this.tyuk_rage = this.magick;

              const axe = new Axes(
                this.firePointX,
                this.firePointY,
                'z',
                undefined,
                this.attack,
                this.cell.unit,
                conor,
              );

              axe.takt = Math.floor(c / 24);

              /// /////////////////////

              axe.dopGabKoof = 40 / axe.takt;

              /// //////////////////////////

              let a3 = a2; // this.target.damagePointX-this.firePointX;
              let b3 = b2; // (this.target.damagePointY-30)-this.firePointY;

              if (target.fly) {
                a3 = target.damagePointX - this.firePointX;
                b3 = target.damagePointY - 30 - this.firePointY;
                // console.log("drdrdrdrdr");
              }

              axe.gSp = a3 / axe.takt;
              axe.vSp = b3 / axe.takt;

              axe.stopDraw = 2;

              axe.target = target;
              // axe.attack=this.attack;
              // x,y,type,target,attack,father,conor

              axesFly.push(axe);

              // console.log("!!!!!!!!!!!");pausa=1

              /// ///////////////////////////

              if (this.fatherFraction.control === 'player') {
                this.clickSave = new ClickSave(0, 'stop');
              }
            }
          } else if (this.magick === 'tor') {
            const axe = new Axes(
              this.magickTarget.damagePointX,
              this.magickTarget.damagePointY,
              'tor',
              undefined,
              50,
              this.cell.unit,
              0,
            );

            axe.life_timer = 2000;

            axe.cells = [];

            axesFly.push(axe);

            this.tyuk_rage = this.magick;

            /// *
            if (this.fatherFraction.control === 'player') {
              this.clickSave = new ClickSave(0, 'stop');
            }
            //* /

            // console.log(this.magickTarget);	pausa=1;
          } else if (this.magick === 'nar') {
            this.tyuk_rage = this.magick;

            const targets = [];

            for (
              let i = this.magickTarget.vertikal - 5;
              i <= this.magickTarget.vertikal + 5;
              i++
            ) {
              for (
                let k = this.magickTarget.horizont - 5;
                k <= this.magickTarget.horizont + 5;
                k++
              ) {
                if (gameFielg[i] && gameFielg[i][k]) {
                  if (
                    gameFielg[i][k].unit
                    && !gameFielg[i][k].unit.neitral
                    && gameFielg[i][k].unit.fatherFraction.union
                      !== this.fatherFraction.union
                    && gameFielg[i][k].unit.gabarit === 50
                    && gameFielg[i][k].unit.hp > 0
                    && gameFielg[i][k].unit.cell
                    && !gameFielg[i][k].unit.nar
                  ) {
                    targets.push(gameFielg[i][k].unit);

                    if (targets.length === 10) {
                      break;
                    }
                  }

                  if (
                    gameFielg[i][k].dragoon
                    && gameFielg[i][k].dragoon.fatherFraction.union
                      !== this.fatherFraction.union
                    && targets.indexOf(gameFielg[i][k].dragoon) === -1
                  ) {
                    targets.push(gameFielg[i][k].dragoon);

                    if (targets.length === 10) {
                      break;
                    }
                  }
                }
              }

              if (targets.length === 10) {
                break;
              }
            }

            for (let i = 0; i < targets.length; i++) {
              const target = targets[i];

              target.nar = 500;
            }

            if (this.fatherFraction.control === 'player') {
              this.clickSave = new ClickSave(0, 'stop');
            }
          }

          //	pausa=1;
        }

        if (!this.anim_magick_timer) {
          this.magickTarget = false;
          this.magick = false;
          this.mana = 0;
          this.tyuk_rage = this.magick;

          if (this.fatherFraction.control === 'comp') {
            /// *
            this.ii_attack = false;
            this.ii_saveCell = this.born_cell;
            this.stopGetTarget = 700;
            this.target = 0;
            this.clickSave = new ClickSave(0, this.born_cell);
            this.animys = [];
            this.ii_index = false;
            //* /
            // console.log("here 2");
          }
        }

        if (!this.ii_saveCell) {
          return;
        }
      }
    }

    if (this.anim_magick_timer) {
      return;
    }

    // &&
    // checkAliens(this.cell.unit,this.clickSave.handTarget)

    if (this.clickSave.handTarget && this.clickSave.handTarget === 'stop') {
      this.magick = false;
      this.magickTarget = false;
      this.handTarget = 0;
      this.way = [];
      this.clickSave = false;
    }

    //* /
    /// /////////////////////////////
    /// //////////////////////////////

    /*
  let hDis2=false;

  if(this.clickSave.handTarget){

  let a=this.clickSave.handTarget.x-this.x;
  let b=this.clickSave.handTarget.y-this.y;

  hDis2=Math.sqrt(a*a+b*b);

  };
  */

    if (
      this.clickSave
      // &&(!isBlocked||(isBlocked&&hDis2&&hDis2<80))
    ) {
      if (this.clickSave.handCell) {
        this.target = 0;
        this.handTarget = 0;
        this.iDoTakt = 0;
        this.stepTakt = 0;
        this.handCell = this.clickSave.handCell;
        this.way = 'go';

        this.stopGetTarget = 50;

        if (this.handCell.persolalNumber === this.born_cell.persolalNumber) {
          this.stopGetTarget = 700;
        }

        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
        // if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
      } else if (
        this.clickSave.handTarget
        && (!this.handTarget
          || this.clickSave.handTarget.persolalNumber
            !== this.handTarget.persolalNumber)
        && checkAliens(this.cell.unit, this.clickSave.handTarget)
      ) {
        this.target = 0;
        this.handTarget = this.clickSave.handTarget;
        this.iDoTakt = 0;
        this.stepTakt = 0;
        this.handCell = 0;
        this.stopGetTarget = 50000000;

        if (this.fatherFraction.control === 'comp') {
          this.stopGetTarget = 0;
        } else {
          if (this.magick && this.magick_ok(this.handTarget)) {
            this.magickTarget = this.handTarget;
            this.clickSave = false;
            // console.log("here");// ok
          }
        }
        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
      }
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

    /*
      if(this.stopGetTarget===0
      &&this.stepTakt<1&&this.stepTakt>=0
      &&(!this.target||(this.target&&!this.checkGetTarget()))
      &&!hDis//!!!!!!!!!!?????????????
      ){

  for(let i=0;i<this.cell.iContaktWith.length;i++){

  if(
  !this.cell.iContaktWith[i].father.neitral&&
  this.cell.iContaktWith[i].father.fatherFraction.union!==this.fatherFraction.union&&
  this.cell.iContaktWith[i].father.warrior&&
  this.cell.iContaktWith[i].father.hp>0
  ){

                  this.handTarget=0//gameFielg[i][k].unit;
                  this.handCell=0;
                  this.target=this.cell.iContaktWith[i].father
                  this.way=[];
                  this.targetCell=false;
                  this.clickSave=false;

      //if(this.fatherFraction.control==="comp"){console.log("act");};

  };

  };

  };
  */
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
      let c;
      if (this.animys[i] && this.animys[i].damagePointX) {
        const a = this.animys[i].damagePointX - this.damagePointX;
        const b = this.animys[i].damagePointY - this.damagePointY;

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
      /*

  (

  (
  this.fatherFraction.control==="player"
  ||
  this.mana<100
  )
  &&

  (
  !c
  ||
  c>this.dash
  ||
  !this.animys[i].cell
  ||
  this.animys[i].hp<=0
  ||
  !this.animys[i].cell.continent
  ||
  this.animys[i].cell.continent!==this.cell.continent
  )

  )

  ||

  */

      // (

        // this.fatherFraction.control==="comp"
        // &&
        // (
        !c
        || !this.animys[i]
        || c > this.dash
        || !this.animys[i].cell
        || this.animys[i].hp <= 0
        || !this.animys[i].visible
        || ((!this.animys[i].cell.continent
          || (this.animys[i].cell.continent
            && this.animys[i].cell.continent !== this.cell.continent))
          && !checkAliens(this.cell.unit, this.animys[i]))
        // )

      // )
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
    && this.mana === 100
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
      && (!this.target || this.ii_attack)
      && (this.fatherFraction.control === 'player' || this.mana === 100)
    ) {
      /// ///////////////////////

      // let min=[];

      let basickMass;

      const life = [];
      const warrior = [];
      const tower = [];
      const els = [];

      for (let i = 0; i < this.animys.length; i++) {
        // if(!this.animys[i].isBlocked(this.cell.unit)){

        if (this.animys[i].type === 'tower') {
          tower.push(this.animys[i]);
        } else if (this.animys[i].warrior) {
          warrior.push(this.animys[i]);
        } else if (this.animys[i].unitStatus === 'life') {
          life.push(this.animys[i]);
        } else {
          els.push(this.animys[i]);
        }

        // };
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
          && (!basickMass[i].nar
            || this.fatherFraction.nation === 'orc'
            || this.fatherFraction.control === 'player')
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
        !isBlocked
        && !this.iFight
        && this.target
        && !this.target.isBlocked(this.cell.unit)
        && (this.targetCell !== this.target.cell.persolalNumber
          || !this.way.length
          || (this.way.length && !this.way[this.way.length - 1].free))
        && (this.fatherFraction.control === 'player' || this.mana === 100)
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
        const deep = 2000;

        getWay(arg, noFree, glob_deep, this.target);

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

          if (this.iDoTakt === 3 && !this.bom) {
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
              if (!this.target.warrior && !this.target.alarmTimer) {
                this.target.alarmTimer = 500;
                this.target.agressor = this.cell.unit;
              }

              if (this.target && !this.target.active) {
                this.target.fatherFraction.activeUnits.push(this.target);
                this.target.active = true;
              }

              /// /////////////////
              if (title.style && hp && hp > 0 && this.target.hp <= 0) {
                this.fatherFraction.kills++;
              }
              /// ////////////////////
            } else if (this.target.unitStatus === 'building') {
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

      if (this.fatherFraction.control === 'comp') {
        noFree = 6000;
      }

      // let optimalContaktCell=this.getOptimalContaktCell();

      // console.log(this.target);
      this.finish = this.handTarget.cell; // this.target.cell;
      this.sosFin = this.handTarget.cell; // this.target.cell;

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
      const iCanGet = this.iCanGet;
      this.iCanGet = false;
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
      if (!iCanGet) {
        if (
          this.fatherFraction.control === 'player'
          && !this.handTarget.fly
          && !this.handTarget.sweeme
        ) {
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

      if (this.iDoTakt === 3 && !this.bom) {
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
          if (!this.handTarget.warrior && !this.handTarget.alarmTimer) {
            this.handTarget.alarmTimer = 500;
            this.handTarget.agressor = this.cell.unit;
          }
          /// /////////////////
          if (title.style && hp && hp > 0 && this.handTarget.hp <= 0) {
            this.fatherFraction.kills++;
          }
          /// ////////////////////

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
