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

Unit.prototype.personalProgSwordMan = function (arg, rage) {
  /// ////////////////////////////////////////////////////////////////////////////////////////
  // this.attack=this.baseAttack*this.fatherFraction.dopNoFlyAttack;
  // this.panzer=this.basePanzer*this.fatherFraction.dopNoFlyPanzer;

  // this.level=1+(this.fatherFraction.dopNoFlyAttack_level)+
  // (this.fatherFraction.dopNoFlyPanzer_level);
  /// ////////////////////////////////////////////////////////////////////////////////////////

  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';
  }
  // this.target="dead";
  // iStand
  if (this.target === 'dead') {
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

    if (this.distroyTimer === 492) {
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
      // if(this.fatherFraction.mechniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.mechniks.splice(this.fatherFraction.mechniks.indexOf(this.cell.unit),1)};
      if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
        this.fatherFraction.selectUnits.splice(
          this.fatherFraction.selectUnits.indexOf(this.cell.unit),
          1,
        );
      }
      // if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeMechniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeMechniks.splice(this.fatherFraction.freeMechniks.indexOf(this.cell.unit),1)};

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

  if (this.fatherFraction.control === 'comp') {
    this.dash = 1000;
  } // ii

  /// ///////////////////////////////////////
  /// ////////////////////////////////////////////

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

    let hDis2 = false;

    if (this.clickSave.handTarget) {
      const a = this.clickSave.handTarget.x - this.x;
      const b = this.clickSave.handTarget.y - this.y;

      hDis2 = Math.sqrt(a * a + b * b);
    }

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
        } //

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

    // console.log(this.target);// pausa=1;

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

    if (
      this.stopGetTarget === 0
      && (!this.target
        || (this.target && !this.checkGetTarget())
        || !this.target.warrior)
    ) {
      for (let i = 0; i < this.cell.iContaktWith.length; i++) {
        if (
          !this.cell.iContaktWith[i].father.neitral
          && !this.cell.iContaktWith[i].father.sweeme
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
      //console.log("ok");
  };
  */
      if (
        !c
        || c > this.dash
        || !this.animys[i].cell
        || this.animys[i].hp <= 0
        || !this.animys[i].cell.continent
        || this.animys[i].cell.continent !== this.cell.continent
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
    && !this.ii_back
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
        if (!this.animys[i].isBlocked(this.cell.unit)) {
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
          && !this.target
        ) {
          // this.ii_saveCell=this.cell;
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
        // console.log("way");

        this.targetCell = this.target.cell.persolalNumber;

        const noFree = 350;

        this.finish = this.target.cell;
        this.sosFin = this.target.cell;
        // getWay(this.cell.unit,noFree,2000);

        /*
  let deep;

      if(dis<=300){
          deep=400;
          }
  else if(dis>300&&deep<500){
      deep=600;
  }
  else{

      deep=1000;

  };
      */
        const deep = 10000;

        getWay(arg, noFree, deep, this.target);
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

          if (this.iDoTakt === 5) {
            let hp;

            this.iFight = false;
            this.animTimer = 100;

            // this.cellUpdate();

            this.iDoTakt = 0;

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
          }
          this.iDoTaktTimer++;

          return;
        }
      }
    }
  } else if (this.handTarget && this.stepTakt < 1 && this.stepTakt >= 0) {
    // this.target=0;

    // this.target=this.handTarget;

    //	if(this.persolalNumber===1433&&this.handTarget.unitStatus==="building"){
    //	console.log(this.handTarget.buildready);
    //	}
    /*
  if((this.handTarget.hp<=0||!this.handTarget.cell||this.handTarget.buildready<=0||
  !this.handTarget)
  &&!this.iFight
  ){this.handTarget=0;this.way=[];};
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

      this.targetCell = this.handTarget.cell.persolalNumber;

      noFree = 350;

      // deep

      // let optimalContaktCell=this.getOptimalContaktCell();

      // console.log(this.target);
      this.finish = this.handTarget.cell; // this.target.cell;
      this.sosFin = this.handTarget.cell; // this.target.cell;

      getWay(arg, noFree, glob_deep, this.handTarget);

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
      if (!iCanGet) {
        if (!this.way.length) {
          this.handCell = this.handTarget.cell;

          this.handTarget = 0;
          // this.target=0;
          this.targetCell = false;

          this.clickSave = false;
        } else {
          this.handCell = this.way[0];
          this.handTarget = 0;
          // this.target=0;
          this.targetCell = false;

          if (this.way.length > 3) {
            this.clickSave = false;
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

      if (this.iDoTakt === 5) {
        let hp;

        this.iFight = false;
        this.animTimer = 100;

        // this.cellUpdate();

        this.iDoTakt = 0;

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

          if (!this.target.warrior && !this.target.alarmTimer) {
            this.target.alarmTimer = 500;
            this.target.agressor = this.cell.unit;
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
      }
      this.iDoTaktTimer++;

      return;
    }
  }

  /// *

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
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

  // console.log(this.stopGetTarget);
};
