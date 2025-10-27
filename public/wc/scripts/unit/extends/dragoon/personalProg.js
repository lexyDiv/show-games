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

Unit.prototype.personalProgDragoon = function (arg) {
  // console.log(this.axe);

  // if(this.iDoTakt!==4){this.axe=false;};

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

    if (!this.dopAnim) {
      this.dopAnim = 0;
    }

    if (this.distroyTimer % 6 === 0) {
      this.dopAnim += 100;
    }

    if (this.distroyTimer === 0) {
      this.readyToOut = true;

      // if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
      // if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
      if (this.fatherFraction.selectDragons.indexOf(this.cell.dragoon) !== -1) {
        this.fatherFraction.selectDragons.splice(
          this.fatherFraction.selectDragons.indexOf(this.cell.dragoon),
          1,
        );
      }
      // if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].dragoon = false;
        }
      }
    }

    if (this.distroyTimer === 0) {
      this.cell = 0;
      this.target = 0;
      this.stepTakt = 0;
    }

    // console.log("pizdez");

    return;
  }

  // console.log(this.ii_saveCell);

  if (this.fatherFraction.control === 'comp') {
    this.dash = 1000;
  } // ii

  /*
  for(let i=0;i<this.animys.length;i++){

  if(this.animys[i].type===1){console.log("east");};

  };
  */
  // console.log(this.clickSave);

  if (this.stopTroll) {
    this.stopTroll--;
    this.iFight = false;
    return;
  }

  /// ///////////////////////////////////////
  /// ////////////////////////////////////////////

  // indexOf
  /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){

    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};

  };
  */
  /// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let isBlocked = false;

  if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
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

    isBlocked = this.isBlockedDrag();

    // console.log(isBlocked);

    /// *
    let hDis2 = false;

    if (this.clickSave.handTarget && isBlocked) {
      const a = this.clickSave.handTarget.damagePointX - this.damagePointX;
      const b = this.clickSave.handTarget.damagePointY - this.damagePointY;

      hDis2 = Math.sqrt(a * a + b * b);
    }
    //* /

    if (
      this.clickSave
      && (!isBlocked || (isBlocked && hDis2 && hDis2 <= this.seeing))
    ) {
      if (this.clickSave.handCell && !isBlocked) {
        // console.log("gogogog");

        this.handTarget = 0;
        this.target = 0;
        this.handCell = this.clickSave.handCell;
        this.way = 'go';
        // this.stopGetTarget=50;
        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};
      } else if (
        this.clickSave.handTarget
        && (!this.handTarget
          || this.clickSave.handTarget.persolalNumber
            !== this.handTarget.persolalNumber)
      ) {
        this.handTarget = this.clickSave.handTarget;
        this.target = 0;
        this.handCell = 0;
        // this.stopGetTarget=50;
        this.way = [];
        this.targetCell = false;

        // if(this.clickSave.wait){this.ii_saveCell=this.cell;};

        // console.log("ok");
      }
    }

    if (this.clickSave && this.clickSave.hold) {
      this.clickSave.hold--;
    }

    if (this.clickSave && !this.clickSave.hold) {
      this.clickSave = false; /// /////////////////////////////////////////////////////////////////////!!!!!!!!!!
      // console.log("????");
    }
    /// */
    /// //////////////////////////////////////////////
    /// //////////////////////////////////////////////
  }
  // console.log(this.clickSave);
  //

  // if(this.handTarget){console.log("ok");};

  // if(this.stopGetTarget){this.stopGetTarget--;};
  // if(this.iStand){this.stopGetTarget=0;};

  // console.log(this.stopGetTarget);
  /// //////////////////////////////////////////////// new!!!

  const warrior = false;

  if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
    /*
  let thc;

  if(this.handTarget){

      let hta=this.handTarget.damagePointX-this.damagePointX;
      let htb=this.handTarget.damagePointY-this.damagePointY;

  thc=Math.sqrt(hta*hta+htb*htb);

  };
  */

    let c;

    for (let i = 0; i < this.animys.length; i++) {
      if (this.animys[i] && this.animys[i].damagePointX) {
        const a = this.animys[i].damagePointX - this.damagePointX;
        const b = this.animys[i].damagePointY - this.damagePointY;

        c = Math.sqrt(a * a + b * b);
      }
      /*
  if(
  //(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
  this.fatherFraction.control==="player"&&
  (
  (this.handCell&&c<=this.seeing&&this.animys[i].warrior&&this.animys[i].hp>0)
  ||
  (thc&&thc>this.seeing&&c<=this.seeing&&this.animys[i].warrior&&this.animys[i].hp>0)
  )

  ){

      //let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);

      //console.log("ok");
      warrior=true;
      this.handTarget=0;
      this.handCell=0;
      this.way=[];

      };
  */
      if (
        this.animys[i]
        && this.target
        && this.animys[i].persolalNumber === this.target.persolalNumber
        && c > this.dash
      ) {
        this.target = 0;
        this.way = [];
      }

      if (
        !this.animys[i]
        || (!c && c !== 0)
        || c > this.dash
        || !this.animys[i].cell
        || this.animys[i].hp <= 0
        // ||
        // (this.damagePointX===this.animys[i].damagePointX&&this.damagePointY===this.animys[i].damagePointY)
      ) {
        /*
      if(this.animys[i].type===1){
          console.log("delete");
      console.log("dash : "+this.dash);
      console.log("c : "+c);
      pausa=1;
      };
      */

        // if(this.fatherFraction.selectUnits.indexOf(this.cell.unit)!==-1&&c>this.dash){console.log("c : "+c);};

        this.animys.splice(i, 1);
        i--;
      }
    }
  }

  // ii
  /// *

  // let stopBack=false;

  if (this.fatherFraction.control === 'comp' && this.animys.length) {
    this.handCell = 0;
    this.handTarget = 0;
    // stopBack=true;
    this.stopGetTarget = 0;
    // this.way=[];
  }
  //* /

  // ii

  /// ////////////////////////////////////////////////////

  if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && !this.handCell
    && !this.handTarget
    // &&!this.way.length

  // ||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  ) {
    // console.log("i seee");

    if (
      this.fatherFraction.control === 'comp'
      && !this.ii_saveCell
      && !this.ii_attack
    ) {
      this.ii_saveCell = this.born_cell;
    }

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
        if (this.animys[i].iCanGetFly) {
          tower.push(this.animys[i]);
        } else if (this.animys[i].warrior) {
          warrior.push(this.animys[i]);
        } else if (this.animys[i].unitStatus === 'life') {
          life.push(this.animys[i]);
        } else {
          els.push(this.animys[i]);
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

      /*

  for(let i=0;i<this.animys.length;i++){

      let a=this.animys[i].damagePointX-this.damagePointX;
      let b=this.animys[i].damagePointY-this.damagePointY;

      let c=Math.sqrt(a*a+b*b);

      //this.target=this.animys[i];
      ///*
      if((!min.length||c<min[0])&&
      ((c<=this.dash&&this.animys[i].hp>0&&this.animys[i].cell&&!warrior)||(warrior&&c<=this.dash&&this.animys[i].hp>0&&this.animys[i].warrior))

      //&&!this.animys[i].isBlocked(this.cell.unit)

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
        /*
  if(this.fatherFraction.control==="comp"&&!this.ii_attack&&!this.handCell&&!this.handTarget&&!this.way.length&&!this.ii_saveCell){
      this.ii_saveCell=this.cell;
      this.comeWithMee(min[1]);
      };
      */

        this.target = min[1];
        this.handCell = 0;
        this.handTarget = 0;
        this.way = [];
        this.clickSave = false;
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

        if (this.iDoTaktTimer % 4 === 0) {
          if (!this.iDoTakt) {
            this.tyuk = true;
          }

          this.iDoTakt++;
        }

        if (this.iDoTakt === 6) {
          // pausa=1;
          // console.log("fffff");
          // x,y,type,target,power

          if (!this.axe) {
            // pausa=1
            this.axeInitialization(this.target, 'dragoonFire', this.cell.unit);
            // this.axeInitialization(this.target,"topor",this.cell.unit);
            // this.axeInitialization(this.target,"orc_ballista",this.cell.unit);
            // console.log("here");

            this.axe = true;

            if (
              this.target.unitStatus === 'life'
              && !this.target.warrior
              && !this.target.alarmTimer
            ) {
              this.target.alarmTimer = 500;
              this.target.agressor = this.cell.dragoon;
            }
          }
        }

        if (this.iDoTakt === 7) {
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
      this.iGetTarget = this.checkGetTarget();

      // console.log(this.target.unitName);
    }

    // console.log(this.iGetTarget);control

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
      const nextCell_ok = this.checkNextDragCell();

      // console.log(isBlocked);

      if (
        !isBlocked
        && !this.iFight
        && this.target
        && (this.targetCell !== this.target.cell.persolalNumber
          || !this.way.length
          || (this.way.length && nextCell_ok < 4))
      ) {
        this.targetCell = this.target.cell.persolalNumber;

        const noFree = 1000;

        this.finish = this.target.cell;
        this.sosFin = this.target.cell;
        // getWay(this.cell.unit,noFree,2000);

        let dis;

        if (this.target) {
          const a = this.target.damagePointX - this.damagePointX;
          const b = this.target.damagePointY - this.damagePointY;

          dis = Math.sqrt(a * a + b * b);
        }

        // console.log("dis : "+dis);

        let deep;

        if (dis <= 300) {
          deep = 400;
        } else if (dis > 300 && deep < 500) {
          deep = 600;
        } else {
          deep = 1000;
        }

        /// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dlya luchnik
        /*
  let luchnik=undefined;

  if(this.target.unitStatus==="life"){luchnik=1;};
  */

        const luchnik = 3; // undefined;

        /*
  if(!this.target.myCells||!this.target.myCells.length){

      luchnik=1;

      }

      else if(this.target.myCells&&this.target.myCells.length){
      luchnik=3;
      //console.log(this.handTarget);
      }
      */

        // console.log(luchnik);

        /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        getWay(arg, noFree, 500, this.target, luchnik);

        // console.log(this.way.length)
      }
    }
  } else if (
    this.stepTakt < 1
    && this.stepTakt >= 0
    && !this.handCell
    && !this.target
    && this.handTarget
  ) {
    // console.log(this.handTarget);

    if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
      this.iGetTarget = this.checkGetHandTarget();

      // console.log("ok");
    }

    if (this.iGetTarget) {
      // console.log(this.iGetTarget)

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

      const nextCell_ok = this.checkNextDragCell();

      if ((!this.way.length || nextCell_ok < 4) && !this.iFight) {
        const luchnik = 3;

        /*
  if((!this.handTarget.myCells||!this.handTarget.myCells.length)&&(!this.handTarget.neitral&&this.handTarget.fatherFraction.union!==this.fatherFraction.union)){

      luchnik=1;

      }
      else if((!this.handTarget.myCells||!this.handTarget.myCells.length)&&(this.handTarget.neitral||this.handTarget.fatherFraction.union===this.fatherFraction.union)){
      luchnik=2;
      //console.log(this.handTarget);
      }
      else if((this.handTarget.myCells&&this.handTarget.myCells.length)&&(this.handTarget.neitral||this.handTarget.fatherFraction.union===this.fatherFraction.union)){
      luchnik=undefined;
      //console.log(this.handTarget);
      }
      else if((this.handTarget.myCells&&this.handTarget.myCells.length)&&(!this.handTarget.neitral&&this.handTarget.fatherFraction.union!==this.fatherFraction.union)){
      luchnik=3;
      //console.log(this.handTarget);
      }
  */

        // console.log(luchnik);

        /// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        this.finish = this.handTarget.cell;
        this.sosFin = this.handTarget.cell;

        getWay(arg, 350, 500, this.handTarget, luchnik);

        const iCanGet = this.iCanGet;
        this.iCanGet = false;

        // console.log(iCanGet);

        if (
          !iCanGet
          || ((!luchnik || luchnik === 2) && this.handTarget.isBlocked())
        ) {
          // console.log("nenenene");

          if (this.way.length) {
            this.handCell = this.way[0]; // console.log("go")

            if (this.way.length > 3) {
              this.clickSave = false;
            }
          } else {
            this.handCell = this.handTarget.cell;

            this.clickSave = false;
          }

          this.handTarget = 0;
          // console.log("oh");
          // console.log(iCanGet);
        }
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

        if (this.iDoTaktTimer % 4 === 0) {
          this.iDoTakt++;
        }

        if (this.iDoTakt === 4) {
          // pausa=1;

          // x,y,type,target,power

          if (!this.axe) {
            this.axeInitialization(
              this.handTarget,
              'dragoonFire',
              this.cell.unit,
            );
            // pausa=1
            //	this.axeInitialization(this.handTarget,"orc_ballista",this.cell.unit);
            // let axe=new Axes(this.firePointX,this.firePointY,"cannon_tower",undefined,this.attack,this.cell.unit,conor,xy);
            this.axe = true;
            this.tyuk = true;

            if (
              this.handTarget.unitStatus === 'life'
              && !this.handTarget.warrior
              && !this.handTarget.alarmTimer
            ) {
              this.handTarget.alarmTimer = 500;
              this.handTarget.agressor = this.cell.dragoon;
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

    if (
      isBlocked
      && this.stepTakt < 1
      && this.stepTakt >= 0
      && !this.iFight
      && this.handTarget
    ) {
      this.handTarget = 0;
      this.way = [];
      this.handCell = 0;
    } /// ///new!!!!?????
  }

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

    if (c > 0) {
      this.clickSave = new ClickSave(0, this.ii_saveCell);

      // console.log(this.persolalNumber);
    }

    if (c <= 250) {
      this.ii_saveCell = 0;
    }

    // console.log(this.persolalNumber);
  }

  this.iNeedTarget = false;

  // console.log(this.persolalNumber);

  // console.log(this.finish);
  // pausa=1;
  // console.log(this.animys);

  this.goWayDrag(this.cell.dragoon);

  // console.log(this.x);
  // console.log(this.cell.x);
};
