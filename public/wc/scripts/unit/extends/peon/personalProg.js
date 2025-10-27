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

Unit.prototype.personalProgPeon = function (arg) {
  // cellUpdate

  // console.log(this.target);

  // getMinDistanse union isBlocked

  //*

  // if(this.persolalNumber===394){console.log(this.myJoube);};

  // if(this.iGetTarget&&this.iDoTakt===4&&this.cell&&this.myJoube==="i build"){this.cellUpdate();};

  // if(this.hp<=0){this.hp=0;this.target="dead";};
  // this.target="dead";
  // iStand
  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';

    this.iDoTaktTimer = -1;
    this.iDoTakt = 0;
    this.myJoube = 0;
    this.way = [];
    this.speed = 0;
    this.updateSpeed();

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
      // if(this.fatherFraction.batraks.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraks.splice(this.fatherFraction.batraks.indexOf(this.cell.unit),1)};
      // if(this.fatherFraction.freeBatraks.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeBatraks.splice(this.fatherFraction.freeBatraks.indexOf(this.cell.unit),1)};
      // if(this.fatherFraction.batraksOnGolg.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraksOnGolg.splice(this.fatherFraction.batraksOnGolg.indexOf(this.cell.unit),1)};
      // if(this.fatherFraction.batraksOnWood.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraksOnWood.splice(this.fatherFraction.batraksOnWood.indexOf(this.cell.unit),1)};
      if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
        this.fatherFraction.selectUnits.splice(
          this.fatherFraction.selectUnits.indexOf(this.cell.unit),
          1,
        );
      }
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

  //* /

  if ((this.x === this.cell.x && this.y === this.cell.y) || !this.cell) {
    this.iGetMyCell = true;
  }

  /// //////////////////////////////////////////////////////////////////
  if (!this.cell) {
    this.iGetTarget = false;
    return;
  }

  if (this.waitTime && this.waitTime < 30) {
    this.waitTime--;
    return;
  }
  this.waitTime = 30;
  /// //////////////////////////////////////////////////////////////////

  // if(this.iGetMyCell&&(this.x!==this.cell.x||this.y!==this.cell.y)){console.log("katastrofen!!!");};

  if (this.iDraw > 0) {
    this.iDraw--;
  }

  if (
    this.waitTime < 30
    && this.target
    && (this.target.hp <= 0 || this.target.buildready <= 0)
    && this.cell
  ) {
    this.target = 0;
    // this.fatherFraction

    // console.log("ok");

    this.speed = 2;
    this.updateSpeed();
  }

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    if (
      this.fatherFraction.control === 'player'
      && this.target
      && this.iGetTarget
      && this.target.buildready < this.target.hpfull
      && this.target.buildready + 20 >= this.target.hpfull
      && !this.target.voice_complite
      && this.iDoTaktTimer % 4 === 0
      && this.iDoTakt === 4
    ) {
      this.target.voice_complite = true;

      this.voice = true;

      select_sound(this.cell.unit, 'complite');
    }

    /// ///////////////////////////////////////
    /// //////////////////////////////////////////

    if (this.iDoTakt === 0) {
      if (this.clickSave && this.cell && this.waitTime === 30) {
        if (this.clickSave.handCell) {
          if (
            !this.clickSave.handCell.continent
            || this.clickSave.handCell.continent !== this.cell.continent
          ) {
            this.clickSave = 0;
          } else {
            this.target = 0;
            this.way = 'go';
            this.handCell = this.clickSave.handCell;
            this.iGetTarget = false;
            this.myJoube = 0;
            this.iGoBuild = false;
          }
        } else if (this.clickSave.handTarget) {
          if (
            !this.clickSave.handTarget.cell.continent
            || this.clickSave.handTarget.cell.continent !== this.cell.continent
          ) {
            this.clickSave = 0;
          } else {
            this.target = this.clickSave.handTarget;
            this.iGetTarget = false;
            this.myJoube = 0;
            this.iGoBuild = false;
            this.way = [];
          }
        }

        if (this.target && this.target.unitStatus === 'life') {
          this.target = 0;
          this.way = 'go';
          this.handCell = this.clickSave.handTarget.cell;
          this.iGetTarget = false;
          this.myJoube = 0;
          this.iGoBuild = false;
        }
      }

      this.clickSave = false;
    }

    if (
      this.handCell
      && !this.handCell.free
      && get_distanse_on_lineyka(this.cell, 50, this.handCell, 50) < 100
    ) {
      // console.log(get_distanse_on_lineyka(this.cell,50,this.handCell,50))

      this.handCell = 0;
      this.way = [];

      // this.target=0;
    }

    /// //////////////////////////////////////////
    /// ///////////////////////////////////////////

    // if(	){
    // console.log("ok");
    // };

    if (
      this.saveX === this.x
      && this.saveY === this.y
      && this.myJoube !== 'i build'
      && this.cell
    ) {
      this.crashOut++;
    } else {
      this.crashOut = 0;
    }

    if (this.crashOut === 300) {
      this.target = 0;
      this.way = []; // console.log(this.persolalNumber+" ya otvis");
    }

    // if(this.crashOut>0){console.log("ojo");};

    this.saveX = this.x;
    this.saveY = this.y;

    // if(this.wood){this.target=0;return;};
    this.potentialTarget = 0;
    this.potentialWay = [];

    // if(this.info===10){console.log(arg);};
    // if(this.info){this.info--;};

    if (this.target) {
      if ((this.target.hp <= 0 || this.target.buildready <= 0) && this.cell) {
        this.target = 0;
        this.iGetTarget = false;
        this.iGoBuild = false;
        this.iDoTakt = 0;
        this.way = [];

        return;
        // console.log(this.cell.unit); pausa=1;
      } /// //////////////??????new

      // if(this.holdToGo<10&&this.stepTakt!==0){console.log("ploho");};

      /// ///////////////////////////////////// kostyl protiv zameraniya

      /*

  if(this.iGetTarget){
      this.holdToGo=10;
      }
  else{

      if(this.iStand){this.holdToGoMem++;}else{this.holdToGoMem=0;};

      if(this.holdToGoMem>500){console.log("kuku");this.target=0;this.holdToGoMem=0;return;};

  };
  */

      /// /////////////////////////////////////

      // console.log("ok");

      /// ////////////////////////////////////////////////////////////////////////////////////////
      /// /////////////////////////////////////////////////////////////////////////////////

      // this.myTargetCheck();

      /// /////////////////////////////////////////////////////////////////////////////////////////////////////////
      /// //////////////////////////////////////////////////////////////////////////////////////////////////////////

      // console.log(this.target.unitName);
      // if(this.persolalNumber===1433&&this.wood){console.log(this.target);};

      if (
        this.target.unitName === 'barack'
        || this.target.unitName === 'kuznya'
        || this.target.unitName === 'ogreBase'
        || this.target.unitName === 'altar'
        || this.target.unitName === 'port'
        || this.target.unitName === 'oil_Ref'
        || this.target.unitName === 'foundry'
        || this.target.unitName === 'dragon_roost'
        || this.target.unitName === 'temple'
      ) {
        //

        if (!this.iGetTarget) {
          const valide = this.checkValideTarget();

          if (valide) {
            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              // this.target.lesorub=arg;
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                // console.log("way");

                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  if (this.fatherFraction.control === 'comp') {
                    this.cleared_way_ground();
                  } else {
                    //*
                    this.target.builders = [];

                    this.target = 0;
                    this.myJoube = 0;
                    this.way = [];
                    this.iGoBuild = false;
                    //* /
                  }
                }

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = 0;

            this.way = [];
          }
        }

        if (this.iGetTarget) {
          // this.x=this.cell.x;this.y=this.cell.y;
          this.way = [];
        }

        if (
          (this.iGetTarget && this.iGetMyCell && this.target)
          || this.myJoube === 'i build'
        ) {
          if (
            this.target
            && this.target.fatherFraction.control !== this.fatherFraction.control
          ) {
            this.target = 0;
            this.way = [];
            return;
          }

          if (
            (this.target.buildready < this.target.hpfull
              || this.target.hp < this.target.hpfull)
            && this.target.buildready > 0
            && this.target.hp > 0
          ) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              if (this.target.buildready < this.target.hpfull) {
                this.target.buildready += 20;
              } else if (this.target.hp < this.target.hpfull) {
                this.target.hp += 20;
              }
            }
            this.iDoTaktTimer++;

            // console.log(this.iDoTakt);
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && this.target.hp >= this.target.hpfull
            && this.myJoube === 'i build'
          ) {
            this.target.builders = [];

            this.target.buildready = this.target.hpfull;
            this.target.hp = this.target.hpfull;

            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
          } else {
            this.target.hp = 0;
            this.target.buildready = 0;
            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
          }
        }
      } else if (this.target.unitName === 'lesopilka') {
        // console.log(this.cell.unit.target.unitName);pausa=true;

        if (!this.iGetTarget) {
          const valide = this.checkValideTarget();

          // console.log(valide);return

          if (valide) {
            // console.log(this.cell.unit.target.unitName);pausa=true;

            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              // this.target.lesorub=arg;
              // this.moveVektor=
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                // console.log("way");

                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  if (this.fatherFraction.control === 'comp') {
                    this.cleared_way_ground();
                  } else {
                    /// *
                    if (!this.iGoBuild) {
                      this.target = this.potentialTarget;
                      this.way = this.potentialWay;

                      this.finish = this.target.cell;
                      this.sosFin = this.target.cell;

                      if (this.target) {
                        this.iGetTarget = this.checkGetTarget();
                      }

                      if (this.iGetTarget) {
                        this.way = [];
                        // this.target.lesorub=arg;
                      }
                    } else {
                      this.target.builders = [];

                      this.target = 0;
                      this.myJoube = 0;
                      this.way = [];
                      this.iGoBuild = false;
                    }
                    //* /
                  }
                } //

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = this.getTownH_or_Lesopilka(); // getMinDistanse(this.cell.unit,this.fatherFraction.townHolls);

            this.way = [];

            this.iGetTarget = false;
          }
        }

        if (this.iGetTarget) {
          this.x = this.cell.x;
          this.y = this.cell.y;
        }

        if (this.iGetTarget && this.iGetMyCell && this.target) {
          if (
            this.target.fatherFraction.control !== this.fatherFraction.control
          ) {
            this.target = 0;
            this.way = [];
          }
          // if(this.target.hp<=0||this.target.buildready<=0){this.target=0;this.myJoube=0;};

          if (
            this.target.hp < this.target.hpfull
            && this.target.hp > 0
            && this.cell
            && this.waitTime === 30
            && this.workTimeSahta === 100
          ) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              this.target.hp += 20;
            }
            this.iDoTaktTimer++;

            return;
          }

          if (this.target.hp > this.target.hpfull) {
            this.target.hp = this.target.hpfull;
          }

          if (this.target.buildready < this.target.hpfull) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              this.target.buildready += 20;
            }
            this.iDoTaktTimer++;

            // console.log(this.iDoTakt);
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && this.myJoube === 'i build'
          ) {
            this.target.builders = [];

            this.target.buildready = this.target.hpfull;
            // console.log(this.fatherFraction.buildingsInBuild[0].builders);

            // console.log(this.fatherFraction.buildingsInBuild);

            // if(!this.gold){
            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
            // }
            // else{
            //	this.myJoube="shahter";

            //	};
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && (this.wood || this.myJoube === 'lesorub')

          // this.gold
          ) {
            // console.log(this.myJoube);
            /// ///////////////////////////////////////////////////////////

            if (this.target.workers.indexOf(arg) === -1 && this.hp > 0) {
              this.myJoube = 'lesorub';

              for (let k = 0; k < this.contaktCells.length; k++) {
                // if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
                gameFielg[this.contaktCells[k].vertikal][
                  this.contaktCells[k].horizont
                ].iContaktWith.splice(
                  gameFielg[this.contaktCells[k].vertikal][
                    this.contaktCells[k].horizont
                  ].iContaktWith.indexOf(this.contaktCells[k]),
                  1,
                );
                // };
              }
              this.contaktCells = [];

              this.target.workers.push(arg);
              this.cell.unit = 0;
              this.cell.free = true;
              this.workTimeSahta--;
              this.way = [];
              this.cell = 0;
              // this.target.gold-=100;
              this.in_in = this.target;
              // this.way=[];wood
              // this.gold=0;
              if (
                this.fatherFraction.activeBuildings.indexOf(this.target) === -1
              ) {
                this.fatherFraction.activeBuildings.push(this.target);
              }

              this.wood = 0;

              this.fatherFraction.wood
                += 100 + this.fatherFraction.lesopilkaBonusOnWood;
              this.fatherFraction.all_wood
                += 100 + this.fatherFraction.lesopilkaBonusOnWood;
            } else if (this.workTimeSahta > 0) {
              if (this.target.workers.indexOf(arg) === 0) {
                this.workTimeSahta--;
              }
            } else if (!this.workTimeSahta && this.waitTime === 30) {
              // console.log(this.townHolls[0]);
              // this.target.cellToOut

              let outCell = this.target.getOutCell();

              // console.log(this.waitTime);

              if (!outCell) {
                outCell = this.target.extreamGetOutCell();
              }

              if (outCell) {
                this.waitTime--;

                // console.log(outCell.outPrioritet+" "+outCell.horizont);

                this.cell = gameFielg[outCell.vertikal][outCell.horizont];

                this.horizont = this.cell.horizont;
                this.vertikal = this.cell.vertikal;
                this.x = this.cell.x;
                this.y = this.cell.y;
                this.cell.unit = arg;
                this.cell.free = false;

                this.cellUpdate();
                // this.animY=0;

                this.moveVektor = outCell.moveVektorOut;

                if (!this.moveVektor) {
                  this.moveVektor = 'up';
                }
              }
              // console.log(this.)

              // console.log(arg.horizont+" "+this.horizont)	;
            } else if (!this.workTimeSahta && this.waitTime < 30) {
              this.waitTime--;

              if (this.waitTime === 0) {
                if (this.target.workers.length > 1) {
                  this.target.workers[
                    this.target.workers.indexOf(arg) + 1
                  ].workTimeSahta = 30; /// ///////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }

                this.target.workers.splice(this.target.workers.indexOf(arg), 1);

                this.target = getMinDistanse(
                  arg,
                  allContinents[this.fatherFraction.continent].woods,
                );
                this.myJoube = 'lesorub';
                this.iGetTarget = false;
                this.workTimeSahta = 100;
                this.waitTime = 30;
                this.speed = 2;
                this.updateSpeed();

                // console.log(this.fatherFraction.gold);
                // console.log(batrak.target);

                // this.activeUnits.push(batrak);/////////////////////////////
                // console.log(this.activeUnits[0]);

                // console.log(this.freeBatraks.indexOf(batrak));

                // if(this.freeBatraks.indexOf(batrak)!==-1){
                //	this.freeBatraks.splice(this.freeBatraks.indexOf(batrak),1);
                // };
              }
            }

            /// /////////////////////////////////////////////////////
          }
        }
      } else if (this.target.unitName === 'wood') {
        // cellUpdate

        // console.log("ok");

        if (this.wood) {
          // this.target=getMinDistanse(arg,this.fatherFraction.townHolls);
          this.target = this.getTownH_or_Lesopilka();
          this.myJoube = 'lesorub';
          this.way = [];

          // this.prog(arg);

          return;
        }

        if (!this.iGetTarget) {
          const valide = this.checkValideTarget();

          // console.log(valide);

          if (valide) {
            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              this.target.lesorub = arg;
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  // console.log("way");

                  this.target = this.potentialTarget;
                  this.way = this.potentialWay;

                  this.finish = this.target.cell;
                  this.sosFin = this.target.cell;

                  if (this.target) {
                    this.iGetTarget = this.checkGetTarget();
                  }
                  // if(this.persolalNumber===1507){console.log(arg);console.log(this.way);console.log(this.target.isBlocked());console.log("tik "+tik);pausa=1;};

                  if (this.iGetTarget) {
                    this.way = [];
                    this.target.lesorub = arg;
                  }
                  // return;
                }

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = getMinDistanse(
              this.cell.unit,
              allContinents[this.cell.continent].woods,
            );

            this.way = [];

            this.iGetTarget = false;

            // this.prog(arg);

            // return;

            /// ///////////////////////////////

            /// //////////////////////
          }
        }

        if (this.iGetTarget) {
          this.x = this.cell.x;
          this.y = this.cell.y;
        }

        if (
          (this.iGetTarget && this.iGetMyCell && this.target)
          || this.myJoube === 'i build'
        ) {
          if (freeLandObjects.indexOf(this.target) === -1) {
            freeLandObjects.push(this.target);
          }

          // if(this.myJoube!=="i build"){this.holdToGoMem++;}else{this.holdToGoMem=0;};
          // if(this.holdToGoMem>=2){this.holdToGoMem=0;console.log(arg);};

          // this.target.lesorub=arg;

          if (this.gold) {
            this.gold = 0;
          }

          this.myJoube = 'i build';
          // this.moveVektor=this.saveMoveVektor;

          if (this.iDoTaktTimer === 100000) {
            this.iDoTaktTimer = 0;
          }

          // iStand
          // console.log(this.iDoTakt);

          if (this.iDoTaktTimer % 4 === 0) {
            if (this.iDoTakt === 3) {
              this.tyuk = true;
            }

            this.iDoTakt++;
          }

          if (this.iDoTakt === 5) {
            // this.tyuk=true;

            this.iDoTakt = 0;

            this.target.hp -= 20;

            this.target.vibro = 10;

            if (activeFreeLandObjects.indexOf(this.target) === -1) {
              activeFreeLandObjects.push(this.target);
            }
          }
          this.iDoTaktTimer++;

          // console.log(this.target.hp);

          if (this.target.hp <= 0) {
            this.target.cell.pen.push(this.target); // dlya otrisovki

            this.target.hp = 0;

            woods.splice(woods.indexOf(this.target), 1);

            // if(activeFreeLandObjects.indexOf(this.target)===-1){activeFreeLandObjects.push(this.target);};

            this.wood = 100;

            this.target = this.getTownH_or_Lesopilka(); // getMinDistanse(arg,this.fatherFraction.townHolls);/// poka tak

            this.myJoube = 'lesorub';
            this.iGetTarget = false;
            this.workTimeSahta = 100;
            this.waitTime = 30;
            this.speed = 1.7;
            this.updateSpeed();

            // console.log(this.target);

            // return;
          }
        }
      } else if (
        this.target.unitName === 'farm'
        || this.target.unitName === 'tower'
      ) {
        if (!this.iGetTarget) {
          const valide = this.checkValideTarget();

          // console.log(valide);

          if (valide) {
            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              // this.target.lesorub=arg;
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                // console.log("way");

                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  if (this.fatherFraction.control === 'comp') {
                    this.cleared_way_ground();
                  } else {
                    this.target.builders = [];

                    this.target = 0;
                    this.myJoube = 0;
                    this.way = [];
                    this.iGoBuild = false;
                  }
                }

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = 0;

            this.way = [];
          }
        }

        if (this.iGetTarget) {
          // this.x=this.cell.x;this.y=this.cell.y;
          this.way = [];
        }

        if (
          (this.iGetTarget && this.iGetMyCell && this.target)
          || this.myJoube === 'i build'
        ) {
          if (
            this.target
            && this.target.fatherFraction.control !== this.fatherFraction.control
          ) {
            this.target = 0;
            this.way = [];
          }

          if (
            this.target
            && (this.target.buildready < this.target.hpfull
              || this.target.hp < this.target.hpfull)
            && this.target.buildready > 0
            && this.target.hp > 0
          ) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              if (this.target.buildready < this.target.hpfull) {
                this.target.buildready += 20;
              } else if (this.target.hp < this.target.hpfull) {
                this.target.hp += 20;
              }
            }
            this.iDoTaktTimer++;

            // console.log(this.iDoTakt);
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && this.target.hp >= this.target.hpfull
            && this.myJoube === 'i build'
          ) {
            this.target.builders = [];

            this.target.buildready = this.target.hpfull;
            this.target.hp = this.target.hpfull;

            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
          } else {
            this.target.hp = 0;
            this.target.buildready = 0;
            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
          }
        }
      } else if (this.target.unitName === 'townHoll') {
        // if(this.persolalNumber===1433&&this.wood){console.log(this.cell.unit);};
        // if(this.iSee===0){console.log("ok");};

        if (!this.iGetTarget) {
          // if(!this.way.length){console.log("here");};

          const valide = this.checkValideTarget();

          // console.log(valide);

          if (valide) {
            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              // this.target.lesorub=arg;
              // this.moveVektor=
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                // console.log("way");

                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  if (this.fatherFraction.control === 'comp') {
                    this.cleared_way_ground();
                  } else {
                    if (!this.iGoBuild) {
                      this.target = this.potentialTarget;
                      this.way = this.potentialWay;

                      this.finish = this.target.cell;
                      this.sosFin = this.target.cell;

                      if (this.target) {
                        this.iGetTarget = this.checkGetTarget();
                      }

                      if (this.iGetTarget) {
                        this.way = [];
                        // this.target.lesorub=arg;
                      }
                    } else {
                      this.target.builders = [];

                      this.target = 0;
                      this.myJoube = 0;
                      this.way = [];
                      this.iGoBuild = false;
                    }
                  }
                } //

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = getMinDistanse(
              this.cell.unit,
              this.fatherFraction.townHolls,
            );

            this.way = [];

            this.iGetTarget = false;
          }
        }

        if (this.iGetTarget) {
          this.x = this.cell.x;
          this.y = this.cell.y;
        }

        if (this.iGetTarget && this.iGetMyCell && this.target) {
          if (
            this.target.fatherFraction.fraction !== this.fatherFraction.fraction
          ) {
            this.target = 0;
            this.way = [];
          }
          // if(this.target.hp<=0||this.target.buildready<=0){this.target=0;this.myJoube=0;};

          if (
            this.target.hp < this.target.hpfull
            && this.target.hp > 0
            && this.cell
            && this.waitTime === 30
            && this.workTimeSahta === 100
          ) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              this.target.hp += 20;
            }
            this.iDoTaktTimer++;

            return;
          }

          if (this.target.hp > this.target.hpfull) {
            this.target.hp = this.target.hpfull;
          }

          if (this.target.buildready < this.target.hpfull) {
            this.myJoube = 'i build';
            // this.moveVektor=this.saveMoveVektor;

            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }

            // iStand
            // console.log(this.iDoTakt);

            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }

            if (this.iDoTakt === 5) {
              this.iDoTakt = 0;

              this.target.buildready += 20;
            }
            this.iDoTaktTimer++;

            // console.log(this.iDoTakt);
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && this.myJoube === 'i build'
          ) {
            this.target.builders = [];

            this.target.buildready = this.target.hpfull;
            // console.log(this.fatherFraction.buildingsInBuild[0].builders);

            // console.log(this.fatherFraction.buildingsInBuild);

            // if(!this.gold){
            this.target = 0;
            this.myJoube = 0;
            this.iDoTakt = 0;
            this.iDoTaktTimer = -1;
            this.iGetTarget = false;
            this.animTimer = 0;
            this.iGoBuild = false;
            // }
            // else{
            //	this.myJoube="shahter";

            //	};
          } else if (
            this.target
            && this.target.buildready >= this.target.hpfull
            && (this.gold || this.wood)

          // this.gold
          ) {
            // console.log(this.myJoube);
            /// ///////////////////////////////////////////////////////////

            if (this.target.workers.indexOf(arg) === -1 && this.hp > 0) {
              for (let k = 0; k < this.contaktCells.length; k++) {
                // if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
                gameFielg[this.contaktCells[k].vertikal][
                  this.contaktCells[k].horizont
                ].iContaktWith.splice(
                  gameFielg[this.contaktCells[k].vertikal][
                    this.contaktCells[k].horizont
                  ].iContaktWith.indexOf(this.contaktCells[k]),
                  1,
                );
                // };
              }
              this.contaktCells = [];

              this.target.workers.push(arg);
              this.cell.unit = 0;
              this.cell.free = true;
              this.workTimeSahta--;
              this.way = [];
              this.cell = 0;
              this.in_in = this.target;
              // this.target.gold-=100;
              if (
                this.fatherFraction.activeBuildings.indexOf(this.target) === -1
              ) {
                this.fatherFraction.activeBuildings.push(this.target);
              }
              // this.way=[];

              if (this.wood) {
                this.fatherFraction.wood
                  += 100 + this.fatherFraction.lesopilkaBonusOnWood;
                this.fatherFraction.all_wood
                  += 100 + this.fatherFraction.lesopilkaBonusOnWood;
                this.wood = 0;
                this.myJoube = 'lesorub';
              } else {
                this.gold = 0;
                this.fatherFraction.gold
                  += 100 + this.fatherFraction.fractionLevelBonusOnGold;
                this.fatherFraction.all_gold
                  += 100 + this.fatherFraction.fractionLevelBonusOnGold;
                this.myJoube = 'shahter';
              }
            } else if (this.workTimeSahta > 0) {
              if (this.target.workers.indexOf(arg) === 0) {
                this.workTimeSahta--;
              }
            } else if (!this.workTimeSahta && this.waitTime === 30) {
              // console.log(this.townHolls[0]);return
              // this.target.cellToOut

              let outCell = this.target.getOutCell();

              // console.log(this.waitTime);

              if (!outCell) {
                outCell = this.target.extreamGetOutCell();
              }

              if (outCell) {
                this.waitTime--;

                // console.log(outCell.outPrioritet+" "+outCell.horizont);

                this.cell = gameFielg[outCell.vertikal][outCell.horizont];

                this.horizont = this.cell.horizont;
                this.vertikal = this.cell.vertikal;
                this.x = this.cell.x;
                this.y = this.cell.y;
                this.cell.unit = arg;
                this.cell.free = false;

                this.cellUpdate();
                // this.animY=0;

                this.moveVektor = outCell.moveVektorOut;

                if (!this.moveVektor) {
                  this.moveVektor = 'up';
                }
              }
              // console.log(this.)

              // console.log(arg.horizont+" "+this.horizont)	;
            } else if (!this.workTimeSahta && this.waitTime < 30) {
              this.waitTime--;

              if (this.waitTime === 0) {
                if (this.target.workers.length > 1) {
                  this.target.workers[
                    this.target.workers.indexOf(arg) + 1
                  ].workTimeSahta = 30; /// ///////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                }

                this.target.workers.splice(this.target.workers.indexOf(arg), 1);

                if (this.myJoube === 'shahter') {
                  this.myJoube = 'shahter';
                  this.target = getMinDistanse(
                    arg,
                    allContinents[this.fatherFraction.continent].shahts,
                  );
                  this.iGetTarget = false;
                  this.workTimeSahta = 100;
                  this.waitTime = 30;
                  this.speed = 2;
                  this.updateSpeed();
                  this.iSee = 'no';
                } else {
                  this.target = getMinDistanse(
                    arg,
                    allContinents[this.fatherFraction.continent].woods,
                  );
                  this.myJoube = 'lesorub';
                  this.iGetTarget = false;
                  this.workTimeSahta = 100;
                  this.waitTime = 30;
                  this.speed = 2;
                  this.updateSpeed();
                }

                //

                // console.log(this.fatherFraction.gold);
                // console.log(batrak.target);

                // this.activeUnits.push(batrak);/////////////////////////////
                // console.log(this.activeUnits[0]);

                // console.log(this.freeBatraks.indexOf(batrak));

                // if(this.freeBatraks.indexOf(batrak)!==-1){
                //	this.freeBatraks.splice(this.freeBatraks.indexOf(batrak),1);
                // };
              }
            }

            /// /////////////////////////////////////////////////////
          }
        }
      } else if (this.target.unitName === 'shahta') {
        // if(this.hp<=0){console.log("huynya");return};

        if (
          this.gold
          && this.workTimeSahta === 100
          && this.waitTime === 30
          && this.cell
        ) {
          this.target = getMinDistanse(arg, this.fatherFraction.townHolls);
          this.myJoube = 'shahter';
          this.way = [];

          // this.prog(arg);

          return;
        }

        if (!this.iGetTarget) {
          const valide = this.checkValideTarget();

          // console.log(valide);

          if (valide) {
            this.iGetTarget = this.checkGetTarget();

            if (this.iGetTarget) {
              this.way = [];
              // this.target.lesorub=arg;
            } else {
              if (!this.way.length || !this.way[this.way.length - 1].free) {
                // console.log("way");
                this.potentialTarget = 0;
                this.potentialWay = [];

                const iCanGet = this.getWayToTargetAndCheckGetting(arg);

                if (!iCanGet) {
                  if (this.fatherFraction.control === 'comp') {
                    this.cleared_way_ground();
                  } else {
                    this.target = this.potentialTarget;
                    this.way = this.potentialWay;

                    this.finish = this.target.cell;
                    this.sosFin = this.target.cell;

                    if (this.target) {
                      this.iGetTarget = this.checkGetTarget();
                    }

                    if (this.iGetTarget) {
                      this.way = [];
                      // this.target.lesorub=arg;
                    }
                  }
                }

                this.potentialTarget = 0;
                this.potentialWay = [];
              }
            }
          } else {
            this.target = getMinDistanse(
              this.cell.unit,
              allContinents[this.fatherFraction.continent].shahts,
            );

            this.way = [];

            this.iGetTarget = false;
          }
        }

        /*
  if(this.target.unitName!=="shahta"){/////////////////////////  kostyl

      console.log(this.target);

      this.iGetTarget=false;
      this.target=getMinDistanse(this.cell.unit,shahts);

  this.way=[];

  //this.prog(arg);

      return;

      };///////////////////////////////////////////////////////////////////
      */

        if (this.iGetTarget) {
          this.x = this.cell.x;
          this.y = this.cell.y;
        }

        if (this.iGetTarget && this.iGetMyCell && this.target) {
          if (!this.target.gold && this.target.workers.indexOf(arg) === -1) {
            this.target = 0;
            this.iGetTarget = false;
            // console.log("stop");

            return;
          }

          // console.log(this.workTimeSahta);

          if (this.target.workers.indexOf(arg) === -1 && this.target.gold > 0) {
            for (let k = 0; k < this.contaktCells.length; k++) {
              // if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
              gameFielg[this.contaktCells[k].vertikal][
                this.contaktCells[k].horizont
              ].iContaktWith.splice(
                gameFielg[this.contaktCells[k].vertikal][
                  this.contaktCells[k].horizont
                ].iContaktWith.indexOf(this.contaktCells[k]),
                1,
              );
              // };
            }
            this.contaktCells = [];

            this.target.workers.push(arg);
            this.cell.unit = 0;
            this.cell.free = true;
            this.workTimeSahta--;
            this.target.gold -= 100;
            this.gold = 100;
            this.wood = 0;
            this.way = [];
            this.cell = 0;
            this.in_in = this.target;

            if (activeFreeLandObjects.indexOf(this.target) === -1) {
              activeFreeLandObjects.push(this.target);
            }

            return;

            // this.etHome=true;

            // if(activeFreeLandObjects.indexOf(this.target)===-1){

            //	activeFreeLandObjects.push(this.target);

            // };
          }
          /// *
          if (this.workTimeSahta > 0) {
            if (this.target.workers.indexOf(arg) === 0) {
              this.workTimeSahta--;
            }
          } else if (!this.workTimeSahta && this.waitTime === 30) {
            // console.log(this.townHolls[0]);
            // this.target.cellToOut

            let outCell = this.target.getOutCell();

            // console.log(this.waitTime);
            if (!outCell) {
              outCell = this.target.extreamGetOutCell();
            }

            if (outCell) {
              this.waitTime--;

              // console.log(outCell.outPrioritet+" "+outCell.horizont);

              this.cell = gameFielg[outCell.vertikal][outCell.horizont];

              this.horizont = this.cell.horizont;
              this.vertikal = this.cell.vertikal;
              this.x = this.cell.x;
              this.y = this.cell.y;
              this.cell.unit = arg;
              this.cell.free = false;

              this.cellUpdate();
              // this.animY=525;

              this.moveVektor = outCell.moveVektorOut;

              if (!this.moveVektor) {
                this.moveVektor = 'up';
              }
            }
            // console.log(this.moveVektor)

            // console.log(arg.horizont+" "+this.horizont)	;
          } else if (!this.workTimeSahta && this.waitTime < 30) {
            this.waitTime--;

            if (this.waitTime === 0) {
              if (
                this.target.gold === 0
                && this.target.workers.length === 1
                && this.target.hp > 0
              ) {
                this.target.hp = 0;
                activeFreeLandObjects.push(this.target);
                // freeLandObjects.splice(freeLandObjects.indexOf(this.target),1);
                // console.log("nononon");
              }

              if (this.target.workers.length > 1) {
                this.target.workers[
                  this.target.workers.indexOf(arg) + 1
                ].workTimeSahta = 30; /// ////////////////////////////////////!!!!!!!!!!!!!!!!!!
              }

              this.target.workers.splice(this.target.workers.indexOf(arg), 1);

              this.target = getMinDistanse(arg, this.fatherFraction.townHolls); // this.fatherFraction.townHolls[0];
              this.iGetTarget = false;
              this.workTimeSahta = 100;
              this.waitTime = 30;
              this.speed = 1.7;
              this.updateSpeed();
              this.iSee = 'no';
            }
          }

          //* /
          // this.workTimeSahta--;
          // console.log(this.target.workers[0]);
        }
      } // shahta
    }

    this.nockNokc = false;
  }
};
