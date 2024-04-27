Unit.prototype.prog = function (arg) {
    //this.mana=100;
    //if(this.type!=="transport"){console.log(this.active);}; return target handTarget
    //iin ii_saveCell hand alive_warriors
    //ii_abort continent speed born_cell clickSave target oil_tanker way
  
    //if(!this.fatherFraction.attack&&this.magickTarget){console.log(this.persolalNumber);}; clickSave
  
    //if(this.warrior&&this.handTarget){this.handTarget.hp=0;};
  
    //if(this.ii_attack){this.ii_saveCell=false;}; get_distanse_on_lineyka
  
    /////////////////////////// ii_way_reset revers
  
    ////////////////////////
  
    this.tyuk = false;
    this.tyuk_rage = false;
    //this.tyuk_magick=false;
  
    if (this.hp <= 0 && !this.zero) {
      this.zero = true;
  
      this.ii_saveCell = false;
      this.magickTarget = false;
      this.rage = 0;
      this.doMagick = false;
      this.landing = false;
      this.transport = false;
      this.stopTroll = 0;
      this.nar = 0;
      this.iFight = false;
      this.clickSave = false;
      this.hp = 0;
    }
  
    if (this.nar) {
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.cell &&
        this.hp > 0 &&
        !this.iFight &&
        !this.anim_magick_timer
      ) {
        this.stepTakt = 0;
        this.x = this.cell.x;
        this.y = this.cell.y;
  
        this.way = [];
  
        if (this.stopTroll) {
          this.stopTroll--;
        }
  
        return;
      }
  
      this.way = [];
    }
  
    if (this.type === 1 && this.hp > 0) {
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        if (!this.target) {
          this.iDoTakt = 0;
        }
  
        if (
          this.clickSave &&
          this.clickSave.handTarget &&
          this.clickSave.handTarget.sweeme &&
          this.clickSave.handTarget.fatherFraction.fraction ===
            this.fatherFraction.fraction &&
          this.clickSave.handTarget.type === "transport" &&
          this.clickSave.handTarget.landing &&
          this.clickSave.handTarget.landing.landCells.length &&
          this.clickSave.handTarget.landing.landCells[0].continent ===
            this.cell.continent &&
          this.clickSave.handTarget.passagers.length < 9 &&
          this.clickSave.handTarget.hp > 0
        ) {
          let ran = Math.floor(Math.random() * 2);
  
          let cell = this.clickSave.handTarget.landing.landCells[ran];
  
          if (this.fatherFraction.control === "player") {
            this.p_transport = this.clickSave.handTarget;
            this.clickSave = new ClickSave(0, cell, undefined, 1000);
            this.iin = false;
          } else {
            this.clickSave = new ClickSave(0, cell);
            this.iin = false;
          }
        }
      }
  
      if (this.iGetTarget) {
        this.way = [];
      }
  
      if (!this.target || !this.cell) {
        this.iGoBuild = false;
      }
  
      if (this.target) {
        if (
          this.target.neitral ||
          this.target.buildready >= this.target.hpfull ||
          this.target.hp <= 0
        ) {
          this.iGoBuild = false;
        }
  
        if (this.target.unitName && this.target.unitName === "wood") {
          this.mw = this.target;
        }
      }
  
      if (this.hp <= 0 && this.mw && this.mw.hp > 0) {
        if (
          this.mw.lesorub &&
          this.mw.lesorub.persolalNumber === this.persolalNumber
        ) {
          this.mw.lesorub = 0;
          this.mw = false;
  
          //console.log("!!!!!!!!!!!!!!!!!");
        }
      }
  
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        if (this.way.length && this.cell && this.peon_s < 150) {
          if (
            !this.way[this.way.length - 1].free &&
            this.way[this.way.length - 1].unit &&
            this.way[this.way.length - 1].unit.type === 1 &&
            this.way[this.way.length - 1].unit.unitStatus === "life" &&
            this.way[this.way.length - 1].unit.fatherFraction.fraction ===
              this.fatherFraction.fraction &&
            this.way[this.way.length - 1].unit.way.length &&
            this.target &&
            this.way[this.way.length - 1].unit.target &&
            this.way[this.way.length - 1].unit.target.persolalNumber ===
              this.target.persolalNumber
          ) {
            this.x = this.cell.x;
            this.y = this.cell.y;
  
            this.stepTakt = 0;
  
            this.peon_s++;
  
            return;
          }
        } else {
          this.peon_s = 0;
        }
      }
    }
  
    if (this.alarmTimer) {
      if (this.alarmTimer === 500) {
        //console.log(this.agressor);
  
        this.fatherFraction.alarms.push(
          new Alarm(this.agressor, 1500, this.cell.unit)
        );
  
        this.agressor = 0;
      }
  
      this.alarmTimer--; //console.log("alarm");
    }
  
    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
  
    this.active = true;
  
    //indexOf
  
    this.iCanGet = false;
  
    let rage = 1;
  
    this.saveFinish = this.sosFin;
  
    if (this.goGroop) {
      this.goGroop--;
    }
    if (this.rage) {
      this.rage--;
      rage = 1.5;
    }
  
    	
  if(this.type===1
  &&(this.iGoBuild||this.fatherFraction.control==="player")
  &&this.target&&this.target.hp===this.target.hpfull
  //&&this.iGetTarget
  ){
      this.target.buildready=this.target.hpfull;
      this.target=0;
  this.iGoBuild=false;
  this.iGetTarget=false;
  
  };	
  
  
    if (this.gabarit === 50 && this.cell) {
      this.damagePointX = this.cell.x + 25;
      this.damagePointY = this.cell.y + 25;
    } else if (this.gabarit === 100) {
      this.damagePointX = this.cell.x + 50;
      this.damagePointY = this.cell.y;
    }
  
    //fatherFraction
    //console.log(this.smotr);
    //myReset
  
    if (this.myReset >= 20) {
      this.way = [];
    }
    if (!this.way.length) {
      this.handCell = 0;
    }
    if ((this.x === this.cell.x && this.y === this.cell.y) || !this.cell) {
      this.iGetMyCell = true;
    }
  
    ///////////////////////////////////// fly!!!!!!!!!!!!!!!
    ///*
  
    if (this.warrior) {
      if (!this.cell) {
        this.way = [];
        this.handCell = 0;
        this.handTarget = 0;
        this.clickSave = false;
        this.animys = [];
        this.target = 0;
        this.stepTakt = 0;
        //console.log("need out");
        return;
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.clickSave &&
        this.clickSave.handTarget &&
        this.clickSave.handTarget.sweeme &&
        this.clickSave.handTarget.fatherFraction.fraction ===
          this.fatherFraction.fraction &&
        this.clickSave.handTarget.type === "transport" &&
        this.clickSave.handTarget.landing &&
        this.clickSave.handTarget.landing.landCells.length &&
        this.clickSave.handTarget.landing.landCells[0].continent ===
          this.cell.continent &&
        this.clickSave.handTarget.passagers.length < 9 &&
        this.clickSave.handTarget.hp > 0
      ) {
        let ran = Math.floor(Math.random() * 2);
  
        let cell = this.clickSave.handTarget.landing.landCells[ran];
  
        if (this.fatherFraction.control === "player") {
          this.p_transport = this.clickSave.handTarget;
          this.clickSave = new ClickSave(0, cell, undefined, 1000);
          this.iin = false;
  
          //console.log("here");
        } else {
          this.clickSave = new ClickSave(0, cell);
          this.iin = false;
        }
      }
    }
  
    if (!this.iCanGetFly) {
      if (
        this.clickSave &&
        this.clickSave.handTarget &&
        this.clickSave.handTarget.fly
      ) {
        this.clickSave = 0;
      }
    }
  
    if (!this.iCanGetSweem && this.type !== "oil_tanker") {
      if (
        this.clickSave &&
        this.clickSave.handTarget &&
        this.clickSave.handTarget.sweeme
      ) {
        this.clickSave = 0;
      }
    }
  
    if (
      this.type !== "ballista" &&
      this.type !== 3 &&
      this.gabarit === 50 &&
      this.clickSave &&
      ((this.clickSave.handTarget &&
        this.clickSave.handTarget.cell &&
        ((this.clickSave.handTarget.cell.continent &&
          this.clickSave.handTarget.cell.continent !== this.cell.continent) ||
          (this.clickSave.handTarget.my_continent &&
            this.clickSave.handTarget.my_continent !== this.cell.continent))) ||
        (this.clickSave.handCell && this.clickSave.handCell.sea))
      //&&
      //(this.clickSave.handTarget.cell.continent!==this.cell.continent)
    ) {
      this.clickSave = 0;
    }
  
    //*/
    ////////////////////////////////////
  
    //indexOf
  
    if (this.fatherFraction.control === "player" && this.hp > 0) {
      //hold_position
  
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        if (
          !this.fly &&
          this.clickSave &&
          this.clickSave.handTarget &&
          (this.clickSave.handTarget.type === "gora" ||
            this.clickSave.handTarget.cell.stena)
        ) {
          let cells = [];
  
          for (
            let i = this.clickSave.handTarget.vertikal - 4;
            i <= this.clickSave.handTarget.vertikal + 4;
            i++
          ) {
            for (
              let k = this.clickSave.handTarget.horizont - 4;
              k <= this.clickSave.handTarget.horizont + 4;
              k++
            ) {
              if (gameFielg[i] && gameFielg[i][k]) {
                let cell = gameFielg[i][k];
  
                if (cell.free && cell.continent === this.cell.continent) {
                  cells.push(cell);
                }
              }
            }
          }
  
          if (!cells.length) {
            this.clickSave = false;
          } else {
            let min = [];
  
            for (let i = 0; i < cells.length; i++) {
              let a = this.clickSave.handTarget.damagePointX - (cells[i].x + 25);
              let b = this.clickSave.handTarget.damagePointY - (cells[i].y + 25);
  
              let c = Math.sqrt(a * a + b * b);
  
              if (!min.length || min[0] > c) {
                min = [c, cells[i]];
              }
            }
  
            this.clickSave = new ClickSave(0, min[1]);
          }
        }
  
        /*
  if(this.fatherFraction.control==="player"&&this.hold_position){
  
  if(this.clickSave&&this.clickSave.handTarget){	
  this.clickSave=false;
  }
  
  //console.log(this.way.length);	
  };
  */
  
        if (this.handTarget && !this.handTarget.cell) {
          this.handTarget = 0;
          this.way = [];
        }
  
        if (this.canHold && this.hold_position) {
          if (this.animys.length && !this.stopGetTarget) {
            this.way = [];
          }
  
          if (this.clickSave && this.clickSave.handTarget) {
            this.clickSave = false;
            this.handTarget = 0;
          }
        }
        //////////////////////////////////////////
  
        if (this.canHold && (this.handCell || this.handTarget)) {
          let cell = this.handCell;
  
          if (this.handTarget && this.handTarget.cell) {
            cell = this.handTarget.cell;
          }
  
          let way;
  
          if (
            !this.hold_position &&
            this.way.length &&
            this.way[this.way.length - 1].unit &&
            this.way[this.way.length - 1].unit.way.length &&
            this.way[this.way.length - 1].unit.fatherFraction.union ===
              this.fatherFraction.union
          ) {
            way = this.way[this.way.length - 1].unit.way;
          }
  
          if (
            way &&
            this.way[this.way.length - 1].unit.speed >= this.speed &&
            this.way.length > 10 &&
            get_distanse_on_lineyka(this.way[0], 50, way[0], 50) <= 150
          ) {
            this.need_return = true;
  
            //console.log("stp");
            //return;
          }
        }
  
        //////////////////////////////////////////////////////////////
  
        if (this.p_transport) {
          if (
            (this.clickSave &&
              this.clickSave.handTarget &&
              this.clickSave.handTarget.type !== "transport") ||
            (this.clickSave &&
              this.clickSave.handCell &&
              this.p_transport.landing &&
              this.p_transport.landing.landCells.length &&
              this.clickSave.handCell.persolalNumber !==
                this.p_transport.landing.landCells[0].persolalNumber &&
              this.clickSave.handCell.persolalNumber !==
                this.p_transport.landing.landCells[1].persolalNumber) ||
            (this.handCell &&
              this.p_transport.landing &&
              this.p_transport.landing.landCells.length &&
              this.handCell.persolalNumber !==
                this.p_transport.landing.landCells[0].persolalNumber &&
              this.handCell.persolalNumber !==
                this.p_transport.landing.landCells[1].persolalNumber) ||
            this.handTarget ||
            this.target
          ) {
            this.p_transport = false;
          }
  
          if (
            !this.iFight &&
            this.cell &&
            !this.stopTroll &&
            !this.anim_magick_timer &&
            !this.magickTarget &&
            this.p_transport.landing &&
            this.p_transport.hp > 0 &&
            this.p_transport.landing.landCells.length &&
            this.p_transport.passagers.length < 9 &&
            this.p_transport.landing.landCells[0].continent ===
              this.cell.continent
          ) {
            if (
              this.cell.persolalNumber ===
                this.p_transport.landing.landCells[0].persolalNumber ||
              this.cell.persolalNumber ===
                this.p_transport.landing.landCells[1].persolalNumber
            ) {
              for (let k = 0; k < this.contaktCells.length; k++) {
                if (
                  gameFielg[this.contaktCells[k].vertikal][
                    this.contaktCells[k].horizont
                  ].iContaktWith.indexOf(this.contaktCells[k]) !== -1
                ) {
                  gameFielg[this.contaktCells[k].vertikal][
                    this.contaktCells[k].horizont
                  ].iContaktWith.splice(
                    gameFielg[this.contaktCells[k].vertikal][
                      this.contaktCells[k].horizont
                    ].iContaktWith.indexOf(this.contaktCells[k]),
                    1
                  );
                }
              }
  
              this.p_transport.passagers.push(this.cell.unit);
  
              this.iin = false;
  
              this.cell.free = true;
              this.cell.unit = 0;
              this.cell = 0;
  
              //console.log(unit);
              this.p_transport = false;
              this.handCell = 0;
              this.target = false;
              this.handTarget = false;
              this.clickSave = false;
              this.way = [];
  
              this.vertikal = false;
              this.horizont = false;
              this.x = false;
              this.y = false;
              this.stepTakt = 0;
              this.rage = 0;
              this.transport = false;
              this.handTarget = 0;
              this.animys = [];
              this.pas = true;
  
              return;
            }
          } else {
            this.p_transport = false;
            this.clickSave = false;
          }
        }
      }
  
      this.iNeedFreeWay = false;
  
      if (this.iWaitMyBrosReset >= 30) {
        this.iWaitMyBrosReset++;
        this.iNeedFreeWay = true;
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        //&&
        //this.fatherFraction.attack
        !this.fly &&
        !this.sweeme &&
        this.warrior &&
        //&&
        //!this.animys.length
        this.hold_position &&
        this.way.length &&
        !this.way[this.way.length - 1].free &&
        this.way[this.way.length - 1].unit &&
        !this.way[this.way.length - 1].unit.neitral &&
        this.way[this.way.length - 1].unit.fatherFraction.union ===
          this.fatherFraction.union &&
        ((this.way[this.way.length - 1].unit.way.length &&
          this.way[this.way.length - 1].unit.hold_position &&
          this.way[this.way.length - 1].unit.hold_position ===
            this.hold_position) ||
          (!this.way[this.way.length - 1].unit.way.length &&
            this.way[this.way.length - 1].unit.hold_position &&
            this.way[this.way.length - 1].unit.hold_position ===
              this.hold_position)) &&
        this.way[this.way.length - 1].unit.warrior &&
        //&&
        //this.way[this.way.length-1].unit.ii_attack
        this.iWaitMyBrosReset < 30
  
        //&&
        //this.way[this.way.length-1].unit.way[this.way[this.way.length-1].unit.way.length-1].persolalNumber!==this.cell.persolalNumber
      ) {
        if (!this.way[this.way.length - 1].unit.way.length) {
          this.iNeedFreeWay = true;
          this.iWaitMyBrosReset = 31;
        }
  
        //console.log("stop");
  
        //this.x=this.cell.x;
        //this.y=this.cell.y;
  
        this.iWaitMyBrosReset++;
  
        //return;
  
        this.need_return = true;
      } else {
        this.iWaitMyBrosReset = 0;
      }
    }
  
    if (this.fatherFraction.control === "comp") {
      let takt_ok = this.stepTakt < 1 && this.stepTakt >= 0;
  
      if (takt_ok) {
        if (this.warrior && !this.stopTroll && this.gabarit === 50 && this.cell) {
          if (
            this.cell.fraction &&
            this.cell.fraction === this.fatherFraction.fraction &&
            !this.revers
          ) {
            this.ii_saveCell = false;
          }
  
          if (!this.stopGetTarget || this.ii_attack) {
            this.ii_back = false;
            this.stopGetTarget = 0;
          }
          ///////////////////////////	BACK
  
          if (this.stopGetTarget > 2) {
            this.animys = [];
          }
  
          if (
            !this.ii_attack &&
            this.type !== "mag" &&
            this.target &&
            !this.iFight &&
            this.cell.continent === this.born_cell.continent
          ) {
            if (this.target.type === "tower" && this.type !== "ballista") {
              this.target = 0;
              //this.handTarget=0;
              this.way = [];
              this.stopGetTarget = 2;
              //this.clickSave=new ClickSave(0,this.born_cell,0,0,1000);
              this.ii_saveCell = this.born_cell;
              this.ii_back = 400;
              //this.console=true;
  
              //this.ii_saveCell=false;
            } else {
              //*
  
              if (
                !this.fatherFraction.stop_back &&
                !this.target.fly &&
                this.target.warrior &&
                this.target.type !== "ballista" &&
                /////////////////////////////////////////////////
  
                (!this.target.target || this.target.target.warrior) &&
                /////////////////////////////////////////////////
  
                this.target.cell &&
                this.target.unitStatus === "life" &&
                !this.target.hold_position &&
                get_distanse_on_lineyka(this.cell, 50, this.born_cell, 50) >
                  150 &&
                (!this.target.cell.fraction ||
                  this.target.cell.fraction !== this.fatherFraction.fraction)
              ) {
                //console.log("here");
  
                let ran = Math.floor(Math.random() * 7);
  
                if (!ran) {
                  //this.clickSave=new ClickSave(0,this.born_cell);
  
                  this.way = [];
                  this.stopGetTarget = 2;
                  //this.clickSave=new ClickSave(0,this.born_cell,0,0,1000);
                  this.ii_saveCell = this.born_cell;
  
                  this.target = 0;
                  this.way = [];
                  this.ii_back = 150 + Math.floor(Math.random() * 150);
                }
              }
  
              //*/
            }
          }
  
          ///////////////////////////
  
          if (
            this.way.length &&
            !this.animys.length &&
            !this.iWaitMyBrosReset &&
            this.iStand
          ) {
            this.ii_way_reset++;
          } else {
            this.ii_way_reset = 0;
          }
  
          if (this.ii_way_reset >= 240) {
            this.way = [];
            //console.log(this.type+" GOGOGOGOGOGOGOGOGOG");
          }
        }
  
        if (
          this.revers &&
          this.cell &&
          this.cell.fraction === this.fatherFraction.fraction
        ) {
          this.revers = false;
        }
  
        ///////////////////////////////////
  
        if (
          this.sweeme
          //&&this.type!=="transport"
        ) {
          if (!this.animys.length) {
            this.hold_position = this.fatherFraction.fraction;
            this.goGroop_sweeme = true;
          } else {
            this.hold_position = false;
            this.goGroop_sweeme = false;
          }
        }
  
        /////////////////////////////////////////////////
  
        if (!this.born_cell) {
          this.born_cell = this.cell;
        }
  
        if (
          !this.ii_attack &&
          (this.target || this.stopTroll) &&
          this.warrior &&
          !this.ii_saveCell
        ) {
          this.ii_saveCell = this.born_cell;
        }
  
        //if(!this.animys.length){this.magickTarget=0;};
  
        //if(this.type!==1&&this.born_cell&&!this.ii_attack&&this.cell.continent&&this.cell.continent===this.born_cell.continent){this.ii_saveCell=this.born_cell;};
  
        if (
          //takt_ok
          //&&
          this.transport &&
          //&&
          //this.handCell
          this.cell &&
          (this.transport.passagers.length === 9 ||
            this.transport.hp <= 0 ||
            (this.transport.landing && !this.transport.landing.iGetLand) ||
            this.target)
        ) {
          this.handCell = 0;
          this.way = [];
          this.transport = false;
          this.ii_saveCell = this.born_cell;
          this.iin = false;
          this.ii_attack = false;
  
          //this.fatherFraction.attack.warriors_flot_reserv--;
        }
      }
  
      /*
  if(this.ii_saveCell){
  
  if(!this.ii_attack){this.ii_saveCell=this.born_cell;};
  
  if(this.ii_saveCell.continent&&this.ii_saveCell.continent!==this.cell.continent&&!this.fly){this.ii_saveCell=false;};
  
  
  };
  */
  
      this.iNeedFreeWay = false;
  
      if (this.iWaitMyBrosReset >= 200) {
        this.iWaitMyBrosReset++;
        this.iNeedFreeWay = true;
      }
  
      if (
        takt_ok &&
        (this.type !== "mag" || this.mana === 100) &&
        !this.fly &&
        !this.sweeme &&
        this.warrior &&
        !this.animys.length &&
        !this.magickTarget &&
        //&&
        //!this.ii_saveCell
        //&&
        //this.ii_attack
        this.way.length &&
        !this.way[this.way.length - 1].free &&
        this.way[this.way.length - 1].unit &&
        !this.way[this.way.length - 1].unit.neitral &&
        this.way[this.way.length - 1].unit.fatherFraction.union ===
          this.fatherFraction.union &&
        this.way[this.way.length - 1].unit.way &&
        (this.way[this.way.length - 1].unit.way === "go" ||
          this.way[this.way.length - 1].unit.way.length) &&
        this.way[this.way.length - 1].unit.warrior &&
        this.way[this.way.length - 1].unit.speed > 1 && //!!!!!!!!!!!!!!!!!!!!!!
        //&&
        //this.way[this.way.length-1].unit.ii_attack
        this.iWaitMyBrosReset < 200 &&
        this.way[this.way.length - 1].unit.way[
          this.way[this.way.length - 1].unit.way.length - 1
        ].persolalNumber !== this.cell.persolalNumber
      ) {
        this.x = this.cell.x;
        this.y = this.cell.y;
  
        this.stepTakt = 0;
  
        this.iWaitMyBrosReset++;
  
        return;
      } else {
        this.iWaitMyBrosReset = 0;
      }
  
      ///////////////////////////////////////////////////////////////////////////////////////////////////// WAY
  
      if (takt_ok && this.ii_index && this.cell && this.cell.ii_fractions_way) {
        let index =
          this.cell.ii_fractions_way[this.fatherFraction.persolalNumber].index;
  
        //console.log(this.ii_index); pausa=1;
  
        if (index && index <= this.ii_index) {
          this.ii_index = index - 1;
  
          if (this.ii_index < 0) {
            this.ii_index = 0;
          }
  
          this.clickSave = new ClickSave(
            0,
            this.fatherFraction.attack.ii_way[this.ii_index]
          );
  
          //console.log("here");
        }
      }
  
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
    }
  
    if (this.hp <= 0) {
      this.ii_saveCell = false;
    }
  
    if (this.type === "mag") {
      //magickTarget
      //animY
      //iStand
      //hp
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      this.level = 1; //+(this.fatherFraction.dopNoFlyAttack_level)+
      //(this.fatherFraction.dopNoFlyPanzer_level);
  
      /*
  if(this.fatherFraction.canMagick_mag){
          this.mana=(floorGlobalTimer-this.manaTimer)*25;
          }
          else{this.mana=0;};
  */
  
      if (this.mana > 100) {
        this.mana = 100;
      }
  
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.magickTarget = false;
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
        this.iFight = false;
        this.way = [];
        this.speed = 0;
        //this.updateSpeed();
        this.target = 0;
        this.handTarget = 0;
        this.animys = [];
        //this.animY=900;
  
        if (this.distroyTimer === 1020) {
          this.animY = 900;
        }
  
        this.distroyTimer--;
  
        if (this.distroyTimer % 4 === 0) {
          this.animY += 100;
        }
  
        //this.distroyTimer--;
  
        if (this.distroyTimer === 992) {
          for (let k = 0; k < this.contaktCells.length; k++) {
            gameFielg[this.contaktCells[k].vertikal][
              this.contaktCells[k].horizont
            ].iContaktWith.splice(
              gameFielg[this.contaktCells[k].vertikal][
                this.contaktCells[k].horizont
              ].iContaktWith.indexOf(this.contaktCells[k]),
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.rizars.indexOf(this.cell.unit)!==-1){this.fatherFraction.rizars.splice(this.fatherFraction.rizars.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1)};
          this.readyToOut = true;
  
          //this.cell.pen.push(this.cell.unit);
          this.cell.free = true;
          this.cell.unit = 0;
        }
  
        if (this.distroyTimer === 0) {
          //this.cell.pen.splice(this.cell.pen.indexOf(arg),1);
          this.cell = 0;
          this.target = 0;
          this.stepTakt = 0;
        }
  
        //console.log("pizdez");
  
        return;
      }
  
      //console.log(!this.iFight&&!this.isBlocked()&&this.stopGetTarget===true); iCanGetSweem
  
      //if(this.mag_back){this.mag_back--; this.animys=[]; this.target=0; this.handTarget=0; };
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (this.target && (this.target.hp <= 0 || !this.target.cell)) {
          this.target = 0;
          //this.iFight=false;
          this.iDoTakt = 0;
          this.magickTarget = false;
          //this.handCell=this.target.cell;
          //this.way="go";
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 || !this.handTarget.cell)
        ) {
          ///*
  
          if (this.fatherFraction.control === "comp") {
            this.handCell = this.handTarget.cell;
            this.way = "go";
  
            this.handTarget = 0;
            //this.iFight=false;
            this.iDoTakt = 0;
          } else {
            if (
              this.memHT &&
              this.memHT.persolalNumber === this.handTarget.persolalNumber
            ) {
              this.handTarget = 0;
              this.way = [];
              this.clickSave = false;
              this.iDoTakt = 0;
            } else {
              this.handCell = this.handTarget.cell;
              this.way = "go";
  
              this.handTarget = 0;
              //this.iFight=false;
              this.iDoTakt = 0;
            }
          }
        }
      }
  
      //this.memHT=false;
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } else {
        this.dash = 200;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      //if(this.fatherFraction.control==="comp"&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
  
      // if(this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1);};
  
      //};
      //else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
  
      // if(this.fatherFraction.freeMechniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeMechniks.push(this.cell.unit);};
  
      //};
  
      let isBlocked = this.isBlocked();
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.iDoTakt === 0 &&
        !this.iFight
      ) {
        //isBlocked=this.isBlocked();
  
        /////////////////////////////////
        /////////////////////////////////
  
        ///*
  
        if (
          this.ii_attack &&
          this.mana < 100 &&
          this.cell.continent === this.fatherFraction.continent &&
          !this.anim_magick_timer &&
          this.cell &&
          this.cell.fraction !== this.fatherFraction.fraction
        ) {
          ///*
          this.ii_attack = false;
          this.ii_saveCell = this.born_cell;
          this.stopGetTarget = 700;
          this.target = 0;
          this.clickSave = new ClickSave(0, this.born_cell);
          this.animys = [];
          this.ii_index = false;
          //*/
          ///console.log("here");
        }
  
        /*
  if(this.handTarget){
  pausa	
      this.magickTarget=this.handTarget;
      this.magick="tor";
      
  };
  */
        //this.mana=100;
  
        if (this.fatherFraction.control === "comp") {
          //if(this.stopGetTarget){this.animys=[];};
  
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
            if (this.fatherFraction.nation === "orc") {
              if (this.target.gabarit === 50 || this.target.fly) {
                this.magickTarget = this.target;
                this.magick = "z";
              } else {
                this.magickTarget = this.target;
                this.magick = "tor";
              }
            } else {
              if (this.target.gabarit === 50 || this.target.fly) {
                this.magickTarget = this.target;
                this.magick = "nar";
              } else {
                this.magickTarget = this.target;
                this.magick = "tor";
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
              !this.anim_magick_timer &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              this.animys.length &&
              !this.stopGetTarget &&
              !this.clickSave
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
  
        //if(this.animys.length){console.log("in"); pausa=1;};
        //if(this.target.fly){console.log(this.magickTarget); console.log(this.magick); pausa=1;};
  
        if (this.magickTarget || this.anim_magick_timer) {
          if (
            !this.anim_magick_timer &&
            ((this.fatherFraction.control === "player" &&
              (!this.handTarget ||
                this.handTarget.persolalNumber !==
                  this.magickTarget.persolalNumber)) ||
              !this.magickTarget.cell ||
              this.magickTarget.hp <= 0 ||
              !checkAliens(this.cell.unit, this.magickTarget) ||
              this.mana < 100 ||
              !this.magick ||
              (this.magickTarget.nar &&
                this.fatherFraction.nation === "h" &&
                this.magick === "nar"))
  
            //||
            //(this.magickTarget.gabarit>50&&this.magick==="z")
          ) {
            this.target = 0;
            this.handTarget = 0;
  
            if (!this.ii_saveCell) {
              this.way = [];
            }
  
            this.magickTarget = false;
  
            //console.log("here");
          }
  
          //console.log(this.magickTarget);
          //console.log(this.magick);
          //pausa=1;
  
          if (
            (this.magickTarget &&
              get_distanse_on_lineyka(
                this.cell,
                50,
                this.magickTarget.cell,
                this.magickTarget.gabarit
              ) <= this.seeing) ||
            this.anim_magick_timer
          ) {
            //console.log("get"); pausa=1;
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
              //console.log("z");
              if (this.magick === "z") {
                let targets = [];
  
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
                        gameFielg[i][k].unit &&
                        !gameFielg[i][k].unit.neitral &&
                        gameFielg[i][k].unit.fatherFraction.union !==
                          this.fatherFraction.union &&
                        gameFielg[i][k].unit.gabarit === 50 &&
                        gameFielg[i][k].unit.hp > 0 &&
                        gameFielg[i][k].unit.cell
                      ) {
                        targets.push(gameFielg[i][k].unit);
  
                        if (targets.length === 4) {
                          break;
                        }
                      }
  
                      if (
                        gameFielg[i][k].dragoon &&
                        gameFielg[i][k].dragoon.fatherFraction.union !==
                          this.fatherFraction.union &&
                        targets.indexOf(gameFielg[i][k].dragoon) === -1
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
                  let target = targets[i];
  
                  /////////////////////////
  
                  this.firePointX = this.damagePointX;
                  this.firePointY = this.damagePointY;
  
                  let a = target.damagePointX - this.damagePointX;
                  let b = target.damagePointY - this.damagePointY;
  
                  let c = Math.sqrt(a * a + b * b);
  
                  let a2 = target.damagePointX - this.firePointX;
                  let b2 = target.damagePointY - this.firePointY;
  
                  //x,y,type,target,attack,father
  
                  let conor = Math.atan2(b, a);
  
                  this.tyuk_rage = this.magick;
  
                  let axe = new Axes(
                    this.firePointX,
                    this.firePointY,
                    "z",
                    undefined,
                    this.attack,
                    this.cell.unit,
                    conor
                  );
  
                  axe.takt = Math.floor(c / 24);
  
                  ////////////////////////
  
                  axe.dopGabKoof = 40 / axe.takt;
  
                  /////////////////////////////
  
                  let a3 = a2; //this.target.damagePointX-this.firePointX;
                  let b3 = b2; //(this.target.damagePointY-30)-this.firePointY;
  
                  if (target.fly) {
                    a3 = target.damagePointX - this.firePointX;
                    b3 = target.damagePointY - 30 - this.firePointY;
                    //console.log("drdrdrdrdr");
                  }
  
                  axe.gSp = a3 / axe.takt;
                  axe.vSp = b3 / axe.takt;
  
                  axe.stopDraw = 2;
  
                  axe.target = target;
                  //axe.attack=this.attack;
                  //x,y,type,target,attack,father,conor
  
                  axesFly.push(axe);
  
                  //console.log("!!!!!!!!!!!");pausa=1
  
                  //////////////////////////////
  
                  if (this.fatherFraction.control === "player") {
                    this.clickSave = new ClickSave(0, "stop");
                  }
                }
              } else if (this.magick === "tor") {
                let axe = new Axes(
                  this.magickTarget.damagePointX,
                  this.magickTarget.damagePointY,
                  "tor",
                  undefined,
                  50,
                  this.cell.unit,
                  0
                );
  
                axe.life_timer = 2000;
  
                axe.cells = [];
  
                axesFly.push(axe);
  
                this.tyuk_rage = this.magick;
  
                ///*
                if (this.fatherFraction.control === "player") {
                  this.clickSave = new ClickSave(0, "stop");
                }
                //*/
  
                //console.log(this.magickTarget);	pausa=1;
              } else if (this.magick === "nar") {
                this.tyuk_rage = this.magick;
  
                let targets = [];
  
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
                        gameFielg[i][k].unit &&
                        !gameFielg[i][k].unit.neitral &&
                        gameFielg[i][k].unit.fatherFraction.union !==
                          this.fatherFraction.union &&
                        gameFielg[i][k].unit.gabarit === 50 &&
                        gameFielg[i][k].unit.hp > 0 &&
                        gameFielg[i][k].unit.cell &&
                        !gameFielg[i][k].unit.nar
                      ) {
                        targets.push(gameFielg[i][k].unit);
  
                        if (targets.length === 10) {
                          break;
                        }
                      }
  
                      if (
                        gameFielg[i][k].dragoon &&
                        gameFielg[i][k].dragoon.fatherFraction.union !==
                          this.fatherFraction.union &&
                        targets.indexOf(gameFielg[i][k].dragoon) === -1
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
                  let target = targets[i];
  
                  target.nar = 500;
                }
  
                if (this.fatherFraction.control === "player") {
                  this.clickSave = new ClickSave(0, "stop");
                }
              }
  
              //	pausa=1;
            }
  
            if (!this.anim_magick_timer) {
              this.magickTarget = false;
              this.magick = false;
              this.mana = 0;
              this.tyuk_rage = this.magick;
  
              if (this.fatherFraction.control === "comp") {
                ///*
                this.ii_attack = false;
                this.ii_saveCell = this.born_cell;
                this.stopGetTarget = 700;
                this.target = 0;
                this.clickSave = new ClickSave(0, this.born_cell);
                this.animys = [];
                this.ii_index = false;
                //*/
                //console.log("here 2");
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
  
        //&&
        //checkAliens(this.cell.unit,this.clickSave.handTarget)
  
        if (this.clickSave.handTarget && this.clickSave.handTarget === "stop") {
          this.magick = false;
          this.magickTarget = false;
          this.handTarget = 0;
          this.way = [];
          this.clickSave = false;
        }
  
        //*/
        ////////////////////////////////
        /////////////////////////////////
  
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
          //&&(!isBlocked||(isBlocked&&hDis2&&hDis2<80))
        ) {
          if (this.clickSave.handCell) {
            this.target = 0;
            this.handTarget = 0;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
  
            this.stopGetTarget = 50;
  
            if (this.handCell.persolalNumber === this.born_cell.persolalNumber) {
              this.stopGetTarget = 700;
            }
  
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
            //if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber) &&
            checkAliens(this.cell.unit, this.clickSave.handTarget)
          ) {
            this.target = 0;
            this.handTarget = this.clickSave.handTarget;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = 0;
            this.stopGetTarget = 50000000;
  
            if (this.fatherFraction.control === "comp") {
              this.stopGetTarget = 0;
            } else {
              if (this.magick && this.magick_ok(this.handTarget)) {
                this.magickTarget = this.handTarget;
                this.clickSave = false;
                //console.log("here");// ok
              }
            }
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
          }
        }
  
        let del = false;
  
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
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
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
  
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
      //if(this.stopGetTarget===50){console.log("vot");};
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
      //if(this.iGoBack){this.iGoBack--;};
  
      //////////////////////////////////////////////////////////////////////////////// new!!!!
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.iFight //&&!this.iGoBack
      ) {
        for (let i = 0; i < this.animys.length; i++) {
          let c;
          if (this.animys[i] && this.animys[i].damagePointX) {
            let a = this.animys[i].damagePointX - this.damagePointX;
            let b = this.animys[i].damagePointY - this.damagePointY;
  
            c = Math.sqrt(a * a + b * b);
          }
          /*
  if(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target){
      
      this.handCell=0;
      this.handTarget=0;
      this.way=[];
      //console.log("oklll");
  };	
  //*/
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
  
            //(
  
            //this.fatherFraction.control==="comp"
            //&&
            //(
            !c ||
            !this.animys[i] ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            !this.animys[i].visible ||
            ((!this.animys[i].cell.continent ||
              (this.animys[i].cell.continent &&
                this.animys[i].cell.continent !== this.cell.continent)) &&
              !checkAliens(this.cell.unit, this.animys[i]))
            //)
  
            //)
          ) {
            this.animys.splice(i, 1);
            i--;
          }
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////
  
      // ii
  
      if (
        this.fatherFraction.control === "comp" &&
        this.animys.length &&
        this.mana === 100 &&
        !this.stopGetTarget
      ) {
        this.handCell = 0;
        this.handTarget = 0;
      }
  
      // ii
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        this.stopGetTarget === 0
      ) {
        //if(this.fatherFraction.control==="comp"&&!this.target&&this.animys.length){console.log("kkkkk");	};
  
        let min = [];
  
        //if(this.fatherFraction.fraction==="redOrcs"){console.log(this.iFight);};
  
        let dis;
  
        if (this.target) {
          let a = this.target.damagePointX - this.damagePointX;
          let b = this.target.damagePointY - this.damagePointY;
  
          dis = Math.sqrt(a * a + b * b);
        }
  
        if (
          !this.iFight &&
          (!this.target || this.ii_attack) &&
          (this.fatherFraction.control === "player" || this.mana === 100)
        ) {
          //////////////////////////
  
          //let min=[];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            //if(!this.animys[i].isBlocked(this.cell.unit)){
  
            if (this.animys[i].type === "tower") {
              tower.push(this.animys[i]);
            } else if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
              life.push(this.animys[i]);
            } else {
              els.push(this.animys[i]);
            }
  
            //};
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell &&
              (!basickMass[i].nar ||
                this.fatherFraction.nation === "orc" ||
                this.fatherFraction.control === "player")
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          /////////////////////////
  
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.ii_saveCell
            ) {
              this.ii_saveCell = this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
          } else {
            this.target = 0;
          }
        }
  
        //console.log(this.iGetTarget);
        if (this.target) {
          // this.targetCell=this.target.cell.persolalNumber;
  
          if (!this.target.warrior) {
            for (let i = 0; i < this.cell.iContaktWith.length; i++) {
              if (
                !this.cell.iContaktWith[i].father.neitral &&
                this.cell.iContaktWith[i].father.fatherFraction.union !==
                  this.fatherFraction.union &&
                this.cell.iContaktWith[i].father.warrior &&
                this.cell.iContaktWith[i].father.hp > 0
              ) {
                this.handTarget = 0; //gameFielg[i][k].unit;
                this.handCell = 0;
                this.target = this.cell.iContaktWith[i].father;
                this.way = [];
                this.targetCell = false;
                this.clickSave = false;
              }
            }
  
            //this.target=gameFielg[i][k].unit;
            //this.targetCell=false;/////////////////////////////////////////////////////////??????????????????????????????????
          }
  
          //let a=this.target.x-this.x;
          //let b=this.target.y-this.y;
  
          //let c=Math.sqrt(a*a+b*b);
  
          //if(c<=Math.sqrt(50*50+50*50)){
          if (!this.iFight && this.target.hp > 0 && this.target.cell) {
            this.iGetTarget = this.checkGetTarget();
          }
          //};
  
          if (this.iGetTarget) {
            ////////////////////////////////////////////////////////////peon
  
            this.peonGo(this.target);
  
            ////////////////////////////////////////////////////////////peon
  
            this.clickSave = false;
  
            this.moveVektor = this.getFightVector(this.target);
  
            //console.log(this.moveVektor);
  
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
  
            //};
          } else if (
            !isBlocked &&
            !this.iFight &&
            this.target &&
            !this.target.isBlocked(this.cell.unit) &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && !this.way[this.way.length - 1].free)) &&
            (this.fatherFraction.control === "player" || this.mana === 100)
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
  
            let noFree = 1000;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
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
            let deep = 2000;
  
            getWay(arg, noFree, glob_deep, this.target);
  
            /*		 
      for(let i=0;i<alienWay.length;i++){
      
      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };
      
  };	 
      */
            //console.log("???");
          }
  
          this.iGetTarget = false;
  
          if (this.iFight) {
            if (this.iGetMyCell) {
              if (this.iDoTaktTimer === 100000) {
                this.iDoTaktTimer = 0;
              }
  
              //iStand
              //console.log(this.iDoTakt);
  
              if (this.iDoTaktTimer % 4 === 0) {
                this.iDoTakt++;
              }
  
              if (this.iDoTakt === 3 && !this.bom) {
                //pausa=1;
  
                let hp;
  
                let attack = this.attack * rage;
                this.tyuk = true;
  
                if (
                  this.target.unitStatus === "building" &&
                  this.target.buildready < this.target.hpfull &&
                  this.target.buildready > 0
                ) {
                  hp = this.target.buildready;
  
                  this.target.buildready -=
                    attack - (attack * this.target.panzer) / 100;
                } else if (this.target.hp > 0 && this.target.cell) {
                  hp = this.target.hp;
  
                  this.target.hp -= attack - (attack * this.target.panzer) / 100;
  
                  //console.log(this.attack-((this.attack*this.target.panzer)/100));
                }
                //indexOf
                if (this.target.unitStatus === "life") {
                  if (!this.target.warrior && !this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (this.target && !this.target.active) {
                    this.target.fatherFraction.activeUnits.push(this.target);
                    this.target.active = true;
                  }
  
                  ////////////////////
                  if (title.style && hp && hp > 0 && this.target.hp <= 0) {
                    this.fatherFraction.kills++;
                  }
                  ///////////////////////
                } else if (this.target.unitStatus === "building") {
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (
                    this.target &&
                    this.target.fatherFraction.activeBuildings.indexOf(
                      this.target
                    ) === -1
                  ) {
                    this.target.fatherFraction.activeBuildings.push(this.target);
                  }
  
                  ////////////////////
                  if (
                    title.style &&
                    hp &&
                    hp > 0 &&
                    (this.target.hp <= 0 || this.target.buildready <= 0)
                  ) {
                    this.fatherFraction.razings++;
                  }
                  ///////////////////////
                }
  
                this.bom = true;
                //pausa=1;
              }
  
              if (this.iDoTakt === 5) {
                this.iFight = false;
                this.animTimer = 100;
                this.bom = false;
                //this.cellUpdate();
  
                this.iDoTakt = 0;
  
                //pausa=1
              }
              this.iDoTaktTimer++;
  
              return;
            }
          }
        }
      } else if (this.handTarget && this.stepTakt < 1 && this.stepTakt >= 0) {
        //this.target=0;
  
        //console.log("hand");
  
        //this.target=this.handTarget;
  
        //	if(this.persolalNumber===1433&&this.handTarget.unitStatus==="building"){
        //	console.log(this.handTarget.buildready);
        //	}
  
        /*	
  if((this.handTarget.hp<=0||!this.handTarget.cell||this.handTarget.buildready<=0||
  !this.handTarget)&&!this.iFight
  ){this.handTarget=0;this.way=[];this.clickSave=false;};	
  */
  
        ///*
        //console.log(this.handTarget.unitName);
  
        if (!this.iFight && this.handTarget) {
          this.iGetTarget = this.checkGetHandTarget();
        }
        //};
  
        //if(this.handTarget.unitName==="townHoll"){
        //pausa=1;
  
        //console.log(this.iGetTarget);
        //};
        //*/
  
        if (this.iGetTarget) {
          this.memHT = this.handTarget;
  
          ////////////////////////////////////////////////////////////peon
  
          this.peonGo(this.handTarget);
  
          ////////////////////////////////////////////////////////////peon
  
          this.clickSave = false;
  
          this.moveVektor = this.getFightVector(this.handTarget);
  
          //console.log(this.moveVektor);
  
          //this.stopGetTarget=0;
  
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.way = [];
            this.clickSave = false;
            //console.log("ok");
          } else {
            //if(!this.iFight){
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
            //this.stopGetTarget=2;
            //};
            this.clickSave = false;
          }
        }
  
        ///*
        else if (
          !this.iFight &&
          this.handTarget &&
          (this.targetCell !== this.handTarget.cell.persolalNumber ||
            (this.way.length && !this.way[this.way.length - 1].free) ||
            !this.way.length)
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
  
          if (this.fatherFraction.control === "comp") {
            noFree = 6000;
          }
  
          //let optimalContaktCell=this.getOptimalContaktCell();
  
          //console.log(this.target);
          this.finish = this.handTarget.cell; //this.target.cell;
          this.sosFin = this.handTarget.cell; //this.target.cell;
  
          //deep
  
          getWay(arg, noFree, glob_deep, this.handTarget);
  
          //console.log("way")
  
          /*
  for(let i=0;i<alienWay.length;i++){
      
      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };
      
  };
  */
  
          ///*
          let iCanGet = this.iCanGet;
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
          //console.log(this.handTarget)
          //console.log(this.way.length)
          if (!iCanGet) {
            if (
              this.fatherFraction.control === "player" &&
              !this.handTarget.fly &&
              !this.handTarget.sweeme
            ) {
              if (!this.way.length) {
                this.handCell = this.handTarget.cell;
  
                this.clickSave = false;
                this.handTarget = 0;
                //this.target=0;
                this.targetCell = false;
              } else {
                this.handCell = this.way[0];
                this.handTarget = 0;
                //this.target=0;
                this.targetCell = false;
  
                if (this.way.length > 1) {
                  this.clickSave = false;
                }
              }
            }
  
            //console.log("neeee");
          } else {
            this.iGetTarget = this.checkGetHandTarget();
  
            if (this.iGetTarget) {
              if (
                this.handTarget.neitral ||
                this.handTarget.fatherFraction.union === this.fatherFraction.union
              ) {
                this.handTarget = 0;
                this.way = [];
                this.clickSave = false;
                //console.log("ok");
              } else {
                this.way = [];
                this.iFight = true;
                this.iGetTarget = false;
                this.clickSave = false;
                //this.stopGetTarget=2;
              }
            }
          }
  
          //*/
  
          //console.log("ok");
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
  
      //if(this.fatherFraction.fraction==="blackOrcs"&&this.target){console.log("okokok");};
  
      this.iGetTarget = 0;
  
      if (this.iFight) {
        if (this.iGetMyCell) {
          if (this.iDoTaktTimer === 100000) {
            this.iDoTaktTimer = 0;
          }
  
          //iStand
          //console.log(this.iDoTakt);
  
          if (this.iDoTaktTimer % 4 === 0) {
            this.iDoTakt++;
          }
  
          if (this.iDoTakt === 3 && !this.bom) {
            let hp;
  
            let attack = this.attack * rage;
            this.tyuk = true;
  
            if (
              this.handTarget.unitStatus === "building" &&
              this.handTarget.buildready < this.handTarget.hpfull &&
              this.handTarget.buildready > 0
            ) {
              hp = this.handTarget.buildready;
  
              this.handTarget.buildready -=
                attack - (attack * this.handTarget.panzer) / 100;
            } else if (this.handTarget.hp > 0 && this.handTarget.cell) {
              hp = this.handTarget.hp;
  
              this.handTarget.hp -=
                attack - (attack * this.handTarget.panzer) / 100;
            }
            //indexOf
            if (this.handTarget.unitStatus === "life") {
              if (!this.handTarget.warrior && !this.handTarget.alarmTimer) {
                this.handTarget.alarmTimer = 500;
                this.handTarget.agressor = this.cell.unit;
              }
              ////////////////////
              if (title.style && hp && hp > 0 && this.handTarget.hp <= 0) {
                this.fatherFraction.kills++;
              }
              ///////////////////////
  
              if (this.handTarget && !this.handTarget.active) {
                this.handTarget.fatherFraction.activeUnits.push(this.handTarget);
                this.handTarget.active = true;
              }
            }
            if (
              this.handTarget.unitStatus === "building" &&
              !this.handTarget.neitral
            ) {
              ////////////////////
              if (
                title.style &&
                hp &&
                hp > 0 &&
                (this.handTarget.hp <= 0 || this.handTarget.buildready <= 0)
              ) {
                this.fatherFraction.razings++;
              }
              ///////////////////////
  
              if (!this.handTarget.alarmTimer) {
                this.handTarget.alarmTimer = 500;
                this.handTarget.agressor = this.cell.unit;
              }
  
              if (
                this.handTarget &&
                this.handTarget.fatherFraction.activeBuildings.indexOf(
                  this.handTarget
                ) === -1
              ) {
                this.handTarget.fatherFraction.activeBuildings.push(
                  this.handTarget
                );
              }
            }
            this.bom = true;
          }
  
          if (this.iDoTakt === 5) {
            this.iFight = false;
            this.animTimer = 100;
            this.bom = false;
            //this.cellUpdate();
  
            this.iDoTakt = 0;
          }
          this.iDoTaktTimer++;
  
          return;
        }
      }
  
      ///*
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp" &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 50) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
  
      //*/
    } else if (this.type === "turtle") {
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopAttack;
      //this.seeing=this.baseSeeing+this.fatherFraction.dopFlySee;
  
      //this.level=1+(this.fatherFraction.dopAttack_level)
  
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      //if(this.iDoTakt!==4){this.axe=false;};
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead"; ii_saveCell
      //iStand
      if (this.target === "dead") {
        if (!this.bul_bul) {
          this.bul_bul = true;
          this.imageToDraw = bul_bul;
          this.animX = 0;
          this.animY = 0;
        }
  
        this.readyToOut = true;
  
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
  
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
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectIsSweem.splice(
              this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
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
  
        //console.log("pizdez");
  
        this.visible = true;
        this.draw_visible = true;
  
        return;
      }
  
      //blackBoock
      //this.visible=false;
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
  
      let step_ok = this.stepTakt < 1 && this.stepTakt >= 0;
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (step_ok && !this.iFight) {
        //if(!this.axe_time){
  
        if (
          this.target &&
          (this.target.hp <= 0 ||
            !this.target.cell ||
            this.target.buildready <= 0)
        ) {
          this.target = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          this.way = [];
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 ||
            !this.handTarget.cell ||
            this.handTarget.buildready <= 0)
        ) {
          this.handCell = this.handTarget.cell;
  
          this.handTarget = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          //this.way=[];
        }
  
        //};
  
        /*
  for(let i=0;i<this.animys.length;i++){
      
      if(this.animys[i].hp<=0){
          this.animys.splice(i,1);
          i--;
      };
      
  };
  
  */
  
        isBlocked = this.isBlockedShip();
  
        //console.log(isBlocked);
  
        ///*
        let hDis2 = false;
  
        if (this.clickSave.handTarget && isBlocked) {
          if (
            !this.clickSave.handTarget.neitral &&
            this.clickSave.handTarget.fatherFraction.union !==
              this.fatherFraction.union
          ) {
            let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
            let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
            hDis2 = Math.sqrt(a * a + b * b);
          }
        }
        //*/
  
        //if(this.clickSave
        //&&(!isBlocked||(isBlocked&&hDis2&&hDis2<=this.seeing))
  
        //){
        //console.log(this.clickSave);
  
        if (this.clickSave.handCell) {
          if (
            !this.clickSave.handCell.sea ||
            this.clickSave.handCell.sea !== this.cell.sea
          ) {
            this.clickSave = false;
          } else {
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            this.stopGetTarget = 50;
            this.spe = this.handCell;
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
            //if(this.fatherFraction.control==="player"&&this.handCell){console.log("here");};
          }
        } else if (
          this.clickSave.handTarget &&
          (!this.handTarget ||
            this.clickSave.handTarget.persolalNumber !==
              this.handTarget.persolalNumber)
        ) {
          /////////////
  
          if (
            (this.clickSave.handTarget.cell.sea &&
              this.clickSave.handTarget.cell.sea === this.cell.sea) ||
            checkAliens_sea(this.cell.unit, this.clickSave.handTarget)
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
  
            /////////////
  
            this.handTarget = this.clickSave.handTarget;
            this.target = 0;
            this.handCell = 0;
            this.stopGetTarget = 50;
            this.way = [];
            this.targetCell = this.handTarget.cell.persolalNumber;
            this.hold_position = false;
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
            //console.log("ok");
          }
        }
  
        //};
  
        let del = false;
        ///*
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c <= 250) {
            del = true;
          }
        }
        //*/
  
        if (this.clickSave && this.clickSave.hold) {
          this.clickSave.hold--;
        }
  
        if ((this.clickSave && !this.clickSave.hold) || del) {
          this.clickSave = false;
          //console.log("out");
        }
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
      }
  
      //
  
      //if(this.handTarget){console.log("ok");}; handCell
  
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
  
      /////////////////////////////////////////////////// new!!!
  
      if (step_ok && !this.iFight) {
        this.iDoTakt = 0;
        this.animY = 0;
  
        let thc;
  
        if (this.handTarget) {
          let hta = this.handTarget.damagePointX - this.damagePointX;
          let htb = this.handTarget.damagePointY - this.damagePointY;
  
          thc = Math.sqrt(hta * hta + htb * htb);
        }
  
        for (let i = 0; i < this.animys.length; i++) {
          //if(!this.animys[i]){console.log(this.animys); pausa=1;};
  
          let c;
  
          if (this.animys[i] && this.animys[i].cell) {
            c = get_distanse_on_lineyka(
              this.cell,
              this.gabarit,
              this.animys[i].cell,
              this.animys[i].gabarit
            );
          }
  
          if (
            !c ||
            !this.animys[i] ||
            c > 1000 || //this.dash
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            ((!this.animys[i].cell.sea ||
              (this.animys[i].cell.sea &&
                this.animys[i].cell.sea !== this.cell.sea)) &&
              !checkAliens_sea(this.cell.unit, this.animys[i]))
          ) {
            this.animys.splice(i, 1);
            i--;
  
            //console.log("dell");
          } else {
            if (
              //(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
              this.fatherFraction.control === "player" &&
              ((this.handCell &&
                c <= this.seeing &&
                this.animys[i].warrior &&
                this.animys[i].hp > 0) ||
                (thc &&
                  thc > this.seeing &&
                  c <= this.seeing &&
                  this.animys[i].warrior &&
                  this.animys[i].hp > 0)) &&
              !this.stopGetTarget
            ) {
              //let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);
  
              //console.log("ok"); pausa=1;
              //warrior=true;
              this.handTarget = 0;
              this.handCell = 0;
              this.way = [];
            }
  
            ///blackBoock
  
            //if(dlt){console.log("doloy");};
  
            //console.log(checkAliens(this.cell.unit,this.animys[i]))
  
            if (
              this.target &&
              this.animys[i].persolalNumber === this.target.persolalNumber &&
              c > this.dash
            ) {
              this.target = 0;
              this.way = [];
            }
          }
        }
  
        if (this.fatherFraction.control === "comp" && this.animys.length) {
          this.handCell = 0;
          this.handTarget = 0;
          this.hold_position = false;
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        step_ok &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  
        this.stopGetTarget === 0
      ) {
        //iDoTakt
  
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (
              !this.animys[i].fly &&
              get_distanse_on_lineyka(
                this.cell,
                this.gabarit,
                this.animys[i].cell,
                this.animys[i].gabarit
              ) <= this.dash
            ) {
              if (this.animys[i].type === "tower") {
                tower.push(this.animys[i]);
              } else if (this.animys[i].warrior) {
                warrior.push(this.animys[i]);
              } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            //console.log(basickMass[i].unitName);
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          if (
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.ii_saveCell
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
            //this.targetCell=this.target.cell;
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
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 10 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 1) {
              //pausa=1;
  
              this.axe_time++;
  
              //x,y,type,target,power
  
              if (!this.axe && this.axe_time === 9) {
                //console.log("axe");
                this.tyuk = true;
                this.axe_time = -1;
  
                this.axeInitialization(this.target, "turtle", this.cell.unit);
                this.axe = true;
  
                if (
                  this.target.unitStatus === "building" ||
                  !this.target.warrior
                ) {
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
                }
                //console.log("firte");
  
                if (
                  this.target &&
                  this.target.fatherFraction.control === "comp" &&
                  !this.target.sweeme &&
                  !this.target.iCanGetSweem &&
                  this.target.gabarit === 50 &&
                  !this.target.active
                ) {
                  this.target.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget_sweeme();
        }
  
        //console.log("do target : "+get_distanse_on_lineyka(this.cell,100,this.target,this.target.gabarit));
        //console.log(" target seeing : "+this.target.seeing);
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          if (
            //!this.hold_position
            // &&
  
            !isBlocked &&
            !this.iFight &&
            this.target &&
            this.target.cell &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length)
          ) {
            this.targetCell = this.target.cell.persolalNumber;
  
            //console.log("here");
  
            this.way = "go";
  
            this.spe = this.target.cell;
            this.hold_position = false;
          }
        }
      } else if (step_ok && !this.handCell && !this.target && this.handTarget) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget_sweeme();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          if (
            !isBlocked &&
            !this.iFight &&
            this.handTarget.cell &&
            (!this.way.length ||
              (this.targetCell &&
                this.targetCell !== this.handTarget.cell.persolalNumber))
          ) {
            this.targetCell = this.handTarget.cell.persolalNumber;
  
            this.spe = this.handTarget.cell;
  
            this.way = "go";
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 10 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 1) {
              //pausa=1;
  
              this.axe_time++;
  
              //x,y,type,target,power
  
              if (!this.axe && this.axe_time === 9) {
                //console.log("axe");
                this.tyuk = true;
                this.axe_time = -1;
  
                this.axeInitialization(this.handTarget, "turtle", this.cell.unit);
                this.axe = true;
  
                if (
                  this.handTarget.unitStatus === "building" ||
                  !this.handTarget.warrior
                ) {
                  if (!this.handTarget.alarmTimer) {
                    this.handTarget.alarmTimer = 500;
                    this.handTarget.agressor = this.cell.unit;
                  }
                }
                //console.log("firte");
  
                if (
                  this.handTarget.fatherFraction.control === "comp" &&
                  !this.handTarget.sweeme &&
                  !this.handTarget.iCanGetSweem &&
                  this.handTarget.gabarit === 50 &&
                  !this.handTarget.active
                ) {
                  this.handTarget.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (isBlocked && step_ok && !this.iFight && this.handTarget) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (step_ok && this.fatherFraction.control === "comp") {
        if (
          !this.iFight &&
          !this.target &&
          //this.readyToOut&&
          this.ii_saveCell &&
          !this.handTarget &&
          !this.way.length &&
          !this.handCell
        ) {
          let a = this.ii_saveCell.x - this.cell.x;
          let b = this.ii_saveCell.y - this.cell.y;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c > 0) {
            this.clickSave = new ClickSave(0, this.ii_saveCell);
  
            //console.log(this.persolalNumber);
          }
  
          if (c <= 1000) {
            this.ii_saveCell = 0;
            this.handCell = 0;
            this.way = [];
          }
  
          //console.log(this.persolalNumber);
        }
      }
  
      this.iNeedTarget = false;
  
      this.go = false;
  
      let way_unit;
      let way_cell;
  
      if (this.way.length && this.stepTakt < 1 && this.stepTakt >= 0) {
        way_cell = this.way[this.way.length - 1];
  
        //let ran=Math.floor(Math.random()*11);
  
        for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
          for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
            if (
              gameFielg[v] &&
              gameFielg[v][h] &&
              gameFielg[v][h].unit &&
              gameFielg[v][h].unit.persolalNumber !== this.persolalNumber &&
              gameFielg[v][h].unit.active && //(gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
              gameFielg[v][h].unit.hold_position &&
              this.hold_position &&
              this.hold_position === gameFielg[v][h].unit.hold_position &&
              //&&
              //this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
              this.terpenie < this.terpenie_ran
            ) {
              //if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand
  
              this.terpenie++;
  
              this.x = this.cell.x;
              this.y = this.cell.y;
  
              //console.log("ok");
  
              return;
            }
          }
        }
      }
  
      if (this.terpenie === this.terpenie_ran) {
        //this.hold_position=false;
        //this.goGroop_sweeme=false;
  
        //console.log("!!!!!!!!!!!!!");
        this.go = true;
        this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
      }
  
      this.terpenie = 0;
  
      this.goWaySweeme(this.cell.unit);
  
      return;
    } else if (this.type === "linkor") {
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopAttack;
      //this.seeing=this.baseSeeing+this.fatherFraction.dopFlySee;
  
      //this.level=1+(this.fatherFraction.dopAttack_level)
  
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.iDoTakt !== 4) {
        this.axe = false;
      }
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead"; ii_saveCell
      //iStand
      if (this.target === "dead") {
        this.readyToOut = true;
  
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
  
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
  
        if (this.distroyTimer % 10 === 0) {
          this.animY += 100;
        }
  
        if (this.distroyTimer === 0) {
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectIsSweem.splice(
              this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //blackBoock
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (
          this.target &&
          (this.target.hp <= 0 ||
            !this.target.cell ||
            this.target.buildready <= 0)
        ) {
          this.target = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          this.way = [];
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 ||
            !this.handTarget.cell ||
            this.handTarget.buildready <= 0)
        ) {
          this.handCell = this.handTarget.cell;
  
          this.handTarget = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          //this.way=[];
        }
  
        /*
  for(let i=0;i<this.animys.length;i++){
      
      if(this.animys[i].hp<=0){
          this.animys.splice(i,1);
          i--;
      };
      
  };
  
  */
  
        isBlocked = this.isBlockedShip();
  
        //console.log(isBlocked);
  
        ///*
        let hDis2 = false;
  
        if (this.clickSave.handTarget && isBlocked) {
          if (
            !this.clickSave.handTarget.neitral &&
            this.clickSave.handTarget.fatherFraction.union !==
              this.fatherFraction.union
          ) {
            let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
            let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
            hDis2 = Math.sqrt(a * a + b * b);
          }
        }
        //*/
  
        //if(this.clickSave
        //&&(!isBlocked||(isBlocked&&hDis2&&hDis2<=this.seeing))
  
        //){
        //console.log(this.clickSave);
  
        if (this.clickSave.handCell) {
          if (
            !this.clickSave.handCell.sea ||
            this.clickSave.handCell.sea !== this.cell.sea
          ) {
            this.clickSave = false;
          } else {
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            this.stopGetTarget = 50;
            this.spe = this.handCell;
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
            //if(this.fatherFraction.control==="player"&&this.handCell){console.log("here");};
          }
        } else if (
          this.clickSave.handTarget &&
          (!this.handTarget ||
            this.clickSave.handTarget.persolalNumber !==
              this.handTarget.persolalNumber)
        ) {
          /////////////
  
          if (
            (this.clickSave.handTarget.cell.sea &&
              this.clickSave.handTarget.cell.sea === this.cell.sea) ||
            checkAliens_sea(this.cell.unit, this.clickSave.handTarget)
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
  
            /////////////
  
            this.handTarget = this.clickSave.handTarget;
            this.target = 0;
            this.handCell = 0;
            this.stopGetTarget = 50;
            this.way = [];
            this.targetCell = this.handTarget.cell.persolalNumber;
            this.hold_position = false;
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
            //console.log("ok");
          }
        }
  
        //};
  
        let del = false;
        ///*
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c <= 250) {
            del = true;
          }
        }
        //*/
  
        if (this.clickSave && this.clickSave.hold) {
          this.clickSave.hold--;
        }
  
        if ((this.clickSave && !this.clickSave.hold) || del) {
          this.clickSave = false;
          //console.log("out");
        }
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
      }
  
      //
  
      //if(this.handTarget){console.log("ok");}; handCell
  
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
  
      /////////////////////////////////////////////////// new!!!
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        let thc;
  
        if (this.handTarget) {
          let hta = this.handTarget.damagePointX - this.damagePointX;
          let htb = this.handTarget.damagePointY - this.damagePointY;
  
          thc = Math.sqrt(hta * hta + htb * htb);
        }
  
        for (let i = 0; i < this.animys.length; i++) {
          //if(!this.animys[i]){console.log(this.animys); pausa=1;};
          let c;
  
          if (this.animys[i] && this.animys[i].cell) {
            c = get_distanse_on_lineyka(
              this.cell,
              this.gabarit,
              this.animys[i].cell,
              this.animys[i].gabarit
            );
          }
  
          if (
            !c ||
            !this.animys[i] ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            ((!this.animys[i].cell.sea ||
              (this.animys[i].cell.sea &&
                this.animys[i].cell.sea !== this.cell.sea)) &&
              !checkAliens_sea(this.cell.unit, this.animys[i]))
          ) {
            this.animys.splice(i, 1);
            i--;
  
            //console.log("dell");
          } else {
            if (
              //(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
              this.fatherFraction.control === "player" &&
              ((this.handCell &&
                c <= this.seeing &&
                this.animys[i].warrior &&
                this.animys[i].hp > 0) ||
                (thc &&
                  thc > this.seeing &&
                  c <= this.seeing &&
                  this.animys[i].warrior &&
                  this.animys[i].hp > 0)) &&
              !this.stopGetTarget
            ) {
              //let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);
  
              //console.log("ok"); pausa=1;
              //warrior=true;
              this.handTarget = 0;
              this.handCell = 0;
              this.way = [];
            }
  
            ///blackBoock
  
            //if(dlt){console.log("doloy");};
  
            //console.log(checkAliens(this.cell.unit,this.animys[i]))
  
            if (
              this.target &&
              this.animys[i].persolalNumber === this.target.persolalNumber &&
              c > this.dash
            ) {
              this.target = 0;
              this.way = [];
            }
          }
        }
  
        if (this.fatherFraction.control === "comp" && this.animys.length) {
          this.handCell = 0;
          this.handTarget = 0;
          this.hold_position = false;
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  
        this.stopGetTarget === 0
      ) {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (this.animys[i].type === "tower") {
              tower.push(this.animys[i]);
            } else if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          if (
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.ii_saveCell
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
            //this.targetCell=this.target.cell;
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
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                //
  
                this.axeInitialization(this.target, "linkor", this.cell.unit);
                this.axe = true;
                if (
                  this.target.unitStatus === "building" ||
                  !this.target.warrior
                ) {
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
                }
  
                if (
                  this.target &&
                  !this.target.neitral &&
                  this.target.fatherFraction.control === "comp" &&
                  !this.target.sweeme &&
                  !this.target.iCanGetSweem &&
                  this.target.gabarit === 50 &&
                  !this.target.active
                ) {
                  this.target.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.tyuk = true;
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget_sweeme();
        }
  
        //console.log("do target : "+get_distanse_on_lineyka(this.cell,100,this.target,this.target.gabarit));
        //console.log(" target seeing : "+this.target.seeing);
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          if (
            //!this.hold_position
            // &&
  
            !isBlocked &&
            !this.iFight &&
            this.target &&
            this.target.cell &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length)
          ) {
            this.targetCell = this.target.cell.persolalNumber;
  
            //console.log("here");
  
            this.way = "go";
  
            this.spe = this.target.cell;
            this.hold_position = false;
          }
        }
      } else if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.handCell &&
        !this.target &&
        this.handTarget
      ) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget_sweeme();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          if (
            !isBlocked &&
            !this.iFight &&
            this.handTarget.cell &&
            (!this.way.length ||
              (this.targetCell &&
                this.targetCell !== this.handTarget.cell.persolalNumber))
          ) {
            this.targetCell = this.handTarget.cell.persolalNumber;
  
            this.spe = this.handTarget.cell;
  
            this.way = "go";
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                this.axeInitialization(this.handTarget, "linkor", this.cell.unit);
                this.axe = true;
  
                if (
                  this.handTarget.unitStatus === "building" ||
                  !this.handTarget.warrior
                ) {
                  if (!this.handTarget.alarmTimer) {
                    this.handTarget.alarmTimer = 500;
                    this.handTarget.agressor = this.cell.unit;
                  }
                }
                //console.log("firte");
  
                if (
                  this.handTarget.fatherFraction.control === "comp" &&
                  !this.handTarget.sweeme &&
                  !this.handTarget.iCanGetSweem &&
                  this.handTarget.gabarit === 50 &&
                  !this.handTarget.active
                ) {
                  this.handTarget.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.tyuk = true;
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          isBlocked &&
          this.stepTakt < 1 &&
          this.stepTakt >= 0 &&
          !this.iFight &&
          this.handTarget
        ) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp"
      ) {
        if (
          !this.iFight &&
          !this.target &&
          //this.readyToOut&&
          this.ii_saveCell &&
          !this.handTarget &&
          !this.way.length &&
          !this.handCell
        ) {
          let a = this.ii_saveCell.x - this.cell.x;
          let b = this.ii_saveCell.y - this.cell.y;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c > 0) {
            this.clickSave = new ClickSave(0, this.ii_saveCell);
  
            //console.log(this.persolalNumber);
          }
  
          if (c <= 1000) {
            this.ii_saveCell = 0;
            this.handCell = 0;
            this.way = [];
          }
  
          //console.log(this.persolalNumber);
        }
      }
  
      this.iNeedTarget = false;
  
      this.go = false;
  
      let way_unit;
      let way_cell;
  
      if (this.way.length && this.stepTakt < 1 && this.stepTakt >= 0) {
        way_cell = this.way[this.way.length - 1];
  
        //let ran=Math.floor(Math.random()*11);
  
        for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
          for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
            if (
              gameFielg[v] &&
              gameFielg[v][h] &&
              gameFielg[v][h].unit &&
              gameFielg[v][h].unit.persolalNumber !== this.persolalNumber &&
              gameFielg[v][h].unit.active && //(gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
              gameFielg[v][h].unit.hold_position &&
              this.hold_position &&
              this.hold_position === gameFielg[v][h].unit.hold_position &&
              //&&
              //this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
              this.terpenie < this.terpenie_ran
            ) {
              //if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand
  
              this.terpenie++;
  
              this.x = this.cell.x;
              this.y = this.cell.y;
  
              //console.log("ok");
  
              return;
            }
          }
        }
      }
  
      if (this.terpenie === this.terpenie_ran) {
        //this.hold_position=false;
        //this.goGroop_sweeme=false;
  
        //console.log("!!!!!!!!!!!!!");
        this.go = true;
        this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
      }
  
      this.terpenie = 0;
  
      this.goWaySweeme(this.cell.unit);
  
      return;
    } else if (this.type === "distroer") {
      //this.hold_position=false;
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopAttack;
      //this.seeing=this.baseSeeing+this.fatherFraction.dopFlySee;
  
      //this.level=1+(this.fatherFraction.dopAttack_level)
  
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.iDoTakt !== 4) {
        this.axe = false;
      }
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead"; ii_saveCell
      //iStand
      if (this.target === "dead") {
        this.readyToOut = true;
  
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
  
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
  
        if (this.distroyTimer % 10 === 0) {
          this.animY += 100;
        }
  
        if (this.distroyTimer === 0) {
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectIsSweem.splice(
              this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //blackBoock
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
  
      let step_ok = this.stepTakt < 1 && this.stepTakt >= 0;
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (step_ok) {
        if (!this.iFight) {
          if (
            this.target &&
            (this.target.hp <= 0 ||
              !this.target.cell ||
              this.target.buildready <= 0)
          ) {
            this.target = 0;
            this.iFight = false;
            this.iDoTakt = 0;
            this.way = [];
          } else if (
            this.handTarget &&
            (this.handTarget.hp <= 0 ||
              !this.handTarget.cell ||
              this.handTarget.buildready <= 0)
          ) {
            this.handCell = this.handTarget.cell;
  
            this.handTarget = 0;
            this.iFight = false;
            this.iDoTakt = 0;
            //this.way=[];
          }
          /*
  for(let i=0;i<this.animys.length;i++){
      
      if(this.animys[i].hp<=0){
          this.animys.splice(i,1);
          i--;
      };
      
  };
  
  */
  
          isBlocked = this.isBlockedShip();
  
          //console.log(isBlocked);
  
          ///*
          let hDis2 = false;
  
          if (this.clickSave.handTarget && isBlocked) {
            if (
              !this.clickSave.handTarget.neitral &&
              this.clickSave.handTarget.fatherFraction.union !==
                this.fatherFraction.union
            ) {
              let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
              let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
              hDis2 = Math.sqrt(a * a + b * b);
            }
          }
          //*/
  
          //if(this.clickSave
          //&&(!isBlocked||(isBlocked&&hDis2&&hDis2<=this.seeing))
  
          //){
          //console.log(this.clickSave);
  
          if (this.clickSave.handCell) {
            if (
              !this.clickSave.handCell.sea ||
              this.clickSave.handCell.sea !== this.cell.sea
            ) {
              this.clickSave = false;
            } else {
              this.handTarget = 0;
              this.target = 0;
              this.handCell = this.clickSave.handCell;
              this.way = "go";
              this.stopGetTarget = 50;
              this.spe = this.handCell;
              //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
              //if(this.fatherFraction.control==="player"&&this.handCell){console.log("here");};
            }
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            /////////////
  
            if (
              (this.clickSave.handTarget.cell.sea &&
                this.clickSave.handTarget.cell.sea === this.cell.sea) ||
              checkAliens_sea(this.cell.unit, this.clickSave.handTarget)
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
  
              /////////////
  
              this.handTarget = this.clickSave.handTarget;
              this.target = 0;
              this.handCell = 0;
              this.stopGetTarget = 50;
              this.way = [];
              this.targetCell = this.handTarget.cell.persolalNumber;
              this.hold_position = false;
              //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
              //console.log("ok");
            }
          }
  
          //};
  
          let del = false;
          ///*
          if (
            this.fatherFraction.control === "player" &&
            this.clickSave.handTarget
          ) {
            let a = this.handTarget.damagePointX - this.damagePointX;
            let b = this.handTarget.damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (c <= 250) {
              del = true;
            }
          }
          //*/
  
          if (this.clickSave && this.clickSave.hold) {
            this.clickSave.hold--;
          }
  
          if ((this.clickSave && !this.clickSave.hold) || del) {
            this.clickSave = false;
            //console.log("out");
          }
  
          /////////////////////////////////////////////////
          /////////////////////////////////////////////////
        } // iFight
      }
      //
  
      //if(this.handTarget){console.log("ok");}; handCell
  
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
  
      /////////////////////////////////////////////////// new!!!
  
      if (step_ok && !this.iFight) {
        let thc;
  
        if (this.handTarget) {
          let hta = this.handTarget.damagePointX - this.damagePointX;
          let htb = this.handTarget.damagePointY - this.damagePointY;
  
          thc = Math.sqrt(hta * hta + htb * htb);
        }
  
        for (let i = 0; i < this.animys.length; i++) {
          //if(!this.animys[i]){console.log(this.animys); pausa=1;};
  
          let c;
  
          if (this.animys[i] && this.animys[i].cell) {
            c = get_distanse_on_lineyka(
              this.cell,
              this.gabarit,
              this.animys[i].cell,
              this.animys[i].gabarit
            );
          }
  
          if (
            !c ||
            !this.animys[i] ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            ((!this.animys[i].cell.sea ||
              (this.animys[i].cell.sea &&
                this.animys[i].cell.sea !== this.cell.sea)) &&
              !checkAliens_sea(this.cell.unit, this.animys[i]))
          ) {
            this.animys.splice(i, 1);
            i--;
  
            //console.log("dell");
          } else {
            if (
              //(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
              this.fatherFraction.control === "player" &&
              ((this.handCell &&
                c <= this.seeing &&
                this.animys[i].warrior &&
                this.animys[i].hp > 0) ||
                (thc &&
                  thc > this.seeing &&
                  c <= this.seeing &&
                  this.animys[i].warrior &&
                  this.animys[i].hp > 0)) &&
              !this.stopGetTarget
            ) {
              //let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);
  
              //console.log("ok"); pausa=1;
              //warrior=true;
              this.handTarget = 0;
              this.handCell = 0;
              this.way = [];
            }
  
            ///blackBoock
  
            //if(dlt){console.log("doloy");};
  
            //console.log(checkAliens(this.cell.unit,this.animys[i]))
  
            if (
              this.target &&
              this.animys[i].persolalNumber === this.target.persolalNumber &&
              c > this.dash
            ) {
              this.target = 0;
              this.way = [];
            }
          }
        }
  
        if (this.fatherFraction.control === "comp" && this.animys.length) {
          this.handCell = 0;
          this.handTarget = 0;
          this.hold_position = false;
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        step_ok &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  
        this.stopGetTarget === 0
      ) {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (this.animys[i].type === "tower") {
              tower.push(this.animys[i]);
            } else if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          if (
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.ii_saveCell
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
            //this.targetCell=this.target.cell;
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
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                //
  
                this.tyuk = true;
  
                this.axeInitialization(
                  this.target,
                  "distroer_canon",
                  this.cell.unit
                );
                this.axe = true;
                if (
                  this.target.unitStatus === "building" ||
                  !this.target.warrior
                ) {
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
                }
  
                if (
                  this.target &&
                  !this.target.neitral &&
                  this.target.fatherFraction.control === "comp" &&
                  !this.target.sweeme &&
                  !this.target.iCanGetSweem &&
                  this.target.gabarit === 50 &&
                  !this.target.active
                ) {
                  this.target.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget_sweeme();
        }
  
        //console.log("do target : "+get_distanse_on_lineyka(this.cell,100,this.target,this.target.gabarit));
        //console.log(" target seeing : "+this.target.seeing);
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          if (
            //!this.hold_position
            // &&
  
            !isBlocked &&
            !this.iFight &&
            this.target &&
            this.target.cell &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length)
          ) {
            this.targetCell = this.target.cell.persolalNumber;
  
            //console.log("here");
  
            this.way = "go";
  
            this.spe = this.target.cell;
            this.hold_position = false;
          }
        }
      } else if (step_ok && !this.handCell && !this.target && this.handTarget) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget_sweeme();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          if (
            !isBlocked &&
            !this.iFight &&
            this.handTarget.cell &&
            (!this.way.length ||
              (this.targetCell &&
                this.targetCell !== this.handTarget.cell.persolalNumber))
          ) {
            this.targetCell = this.handTarget.cell.persolalNumber;
  
            this.spe = this.handTarget.cell;
  
            this.way = "go";
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                this.tyuk = true;
  
                this.axeInitialization(
                  this.handTarget,
                  "distroer_canon",
                  this.cell.unit
                );
                this.axe = true;
  
                if (
                  this.handTarget.unitStatus === "building" ||
                  !this.handTarget.warrior
                ) {
                  if (!this.handTarget.alarmTimer) {
                    this.handTarget.alarmTimer = 500;
                    this.handTarget.agressor = this.cell.unit;
                  }
                }
                //console.log("firte");
  
                if (
                  this.handTarget.fatherFraction.control === "comp" &&
                  !this.handTarget.sweeme &&
                  !this.handTarget.iCanGetSweem &&
                  this.handTarget.gabarit === 50 &&
                  !this.handTarget.active
                ) {
                  this.handTarget.panick_peoples(this.cell.unit);
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (isBlocked && step_ok && !this.iFight && this.handTarget) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (step_ok && this.fatherFraction.control === "comp") {
        if (
          !this.iFight &&
          !this.target &&
          //this.readyToOut&&
          this.ii_saveCell &&
          !this.handTarget &&
          !this.way.length &&
          !this.handCell
        ) {
          let a = this.ii_saveCell.x - this.cell.x;
          let b = this.ii_saveCell.y - this.cell.y;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c > 0) {
            this.clickSave = new ClickSave(0, this.ii_saveCell);
  
            //console.log(this.persolalNumber);
          }
  
          if (c <= 1000) {
            this.ii_saveCell = 0;
            this.handCell = 0;
            this.way = [];
          }
  
          //console.log(this.persolalNumber);
        }
      }
  
      this.iNeedTarget = false;
  
      this.go = false;
  
      let way_unit;
      let way_cell;
  
      if (this.way.length && step_ok) {
        way_cell = this.way[this.way.length - 1];
  
        //let ran=Math.floor(Math.random()*11);
  
        for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
          for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
            if (
              gameFielg[v] &&
              gameFielg[v][h] &&
              gameFielg[v][h].unit &&
              gameFielg[v][h].unit.persolalNumber !== this.persolalNumber &&
              gameFielg[v][h].unit.active && //(gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
              gameFielg[v][h].unit.hold_position &&
              this.hold_position &&
              this.hold_position === gameFielg[v][h].unit.hold_position &&
              //&&
              //this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
              this.terpenie < this.terpenie_ran
            ) {
              //if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand
  
              this.terpenie++;
  
              this.x = this.cell.x;
              this.y = this.cell.y;
  
              //console.log("ok");
  
              return;
            }
          }
        }
      }
  
      if (this.terpenie === this.terpenie_ran) {
        //this.hold_position=false;
        //this.goGroop_sweeme=false;
  
        //console.log("!!!!!!!!!!!!!");
        this.go = true;
        this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
      }
  
      this.terpenie = 0;
  
      this.goWaySweeme(this.cell.unit);
  
      return;
    } else if (this.type === "oil_tanker") {
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead"; tanker_iCanGet
      //iStand
      if (this.target === "dead") {
        this.readyToOut = true;
  
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
  
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
  
        if (this.distroyTimer % 10 === 0) {
          this.animY += 100;
        }
  
        if (this.distroyTimer === 0) {
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectIsSweem.splice(
              this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      if (this.handTarget && this.handTarget.hp <= 0) {
        this.handTarget = 0;
        this.way = [];
      }
  
      this.damagePointX = this.cell.x + 50;
      this.damagePointY = this.cell.y;
  
      //&&!isBlocked
  
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        this.go = false;
  
        let way_unit;
        let way_cell;
  
        if (this.way.length) {
          way_cell = this.way[this.way.length - 1];
  
          //let ran=Math.floor(Math.random()*11);
  
          for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
            for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
              if (
                gameFielg[v] &&
                gameFielg[v][h] &&
                gameFielg[v][h].unit &&
                gameFielg[v][h].unit.persolalNumber !== this.persolalNumber &&
                gameFielg[v][h].unit.active && //(gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
                gameFielg[v][h].unit.hold_position &&
                this.hold_position &&
                this.hold_position === gameFielg[v][h].unit.hold_position &&
                //&&
                //this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
                this.terpenie < this.terpenie_ran
              ) {
                //if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand
  
                this.terpenie++;
  
                this.x = this.cell.x;
                this.y = this.cell.y;
  
                //console.log("ok");
  
                return;
              }
            }
          }
        }
  
        if (this.terpenie === this.terpenie_ran) {
          //this.hold_position=false;
          //this.goGroop_sweeme=false;
  
          //console.log("!!!!!!!!!!!!!");
          this.go = true;
          this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
        }
  
        this.terpenie = 0;
  
        //if(this.terpenie>=150){this.terpenie=0;};
  
        //console.log(this.clickSave);
        //pausa=1
  
        //if(this.jobe){this.myJoube=this.jobe;};
  
        if (this.clickSave) {
          //console.log(this.clickSave);
          //this.jobe=false;
  
          if (this.clickSave.handCell) {
            //console.log("ok");
            if (
              this.clickSave.handCell.sea &&
              this.clickSave.handCell.sea === this.cell.sea
            ) {
              this.handTarget = 0;
              this.target = 0;
              this.handCell = this.clickSave.handCell;
              this.way = "go";
              //this.myJoube=false;
              this.active_status = false;
            } else if (this.clickSave.handCell.continent) {
              this.clickSave = false;
              //this.myJoube=false;
              this.active_status = false;
            }
          } else if (this.clickSave.handTarget) {
            if (
              this.clickSave.handTarget.type === "oil_platform" &&
              this.clickSave.handTarget.fatherFraction.fraction ===
                this.fatherFraction.fraction &&
              this.clickSave.handTarget.buildready ===
                this.clickSave.handTarget.hpfull &&
              ((this.clickSave.handTarget.hp > 0 &&
                this.clickSave.handTarget.cell.oil.oil) ||
                this.oil)
            ) {
              //this.myJoube="get oil";
              this.active_status = "get oil";
            } else if (
              this.clickSave.handTarget.type === "oil_Ref" &&
              this.clickSave.handTarget.fatherFraction.fraction ===
                this.fatherFraction.fraction &&
              this.clickSave.handTarget.buildready ===
                this.clickSave.handTarget.hpfull &&
              this.clickSave.handTarget.hp > 0
            ) {
              //this.myJoube="get oil";
              this.active_status = "get oil";
            } else {
              this.handCell = 0;
              this.way = "go";
              this.handTarget = this.clickSave.handTarget;
              //this.myJoube=false;
              this.active_status = false;
            }
  
            //console.log(this.myJoube);
          }
        }
  
        //myJoube
  
        if (this.active_status === "get oil") {
          if (
            !this.oil &&
            // &&
            // !this.handTarget
            this.clickSave.handTarget &&
            this.clickSave.handTarget.type !== "oil_platform"
          ) {
            let min = [];
  
            for (let i = 0; i < this.fatherFraction.oil_platforms.length; i++) {
              if (
                this.fatherFraction.oil_platforms[i].buildready ===
                  this.fatherFraction.oil_platforms[i].hpfull &&
                this.fatherFraction.oil_platforms[i].hp > 0 &&
                this.fatherFraction.oil_platforms[i].cell.oil.oil
              ) {
                let dis = get_distanse_on_lineyka(
                  this.cell,
                  100,
                  this.fatherFraction.oil_platforms[i].cell,
                  100
                );
  
                if (!min.length || min[0] > dis) {
                  min = [dis, this.fatherFraction.oil_platforms[i]];
                }
              }
            }
  
            if (min.length) {
              this.handCell = 0;
              this.way = "go";
              this.handTarget = min[1];
            } else {
              this.handCell = 0;
              this.way = "go";
              this.handTarget = this.clickSave.handTarget;
            }
          } else if (
            !this.oil &&
            //&&
            //!this.handTarget
            this.clickSave.handTarget &&
            this.clickSave.handTarget.type === "oil_platform"
          ) {
            this.handCell = 0;
            this.way = "go";
            this.handTarget = this.clickSave.handTarget;
          } else if (
            this.oil &&
            !this.handTarget &&
            this.clickSave.handTarget &&
            this.clickSave.handTarget.type !== "oil_Ref"
          ) {
            //console.log("here");
  
            let min = [];
  
            for (let i = 0; i < this.fatherFraction.oil_Refs.length; i++) {
              if (
                this.fatherFraction.oil_Refs[i].buildready ===
                  this.fatherFraction.oil_Refs[i].hpfull &&
                this.fatherFraction.oil_Refs[i].hp > 0
              ) {
                let dis = get_distanse_on_lineyka(
                  this.cell,
                  100,
                  this.fatherFraction.oil_Refs[i].cell,
                  150
                );
  
                if (!min.length || min[0] > dis) {
                  min = [dis, this.fatherFraction.oil_Refs[i]];
                }
              }
            }
  
            if (min.length) {
              this.handCell = 0;
              this.way = "go";
              this.handTarget = min[1];
            } else {
              this.handCell = 0;
              this.way = "go";
              this.handTarget = this.clickSave.handTarget;
            }
          } else if (
            this.oil &&
            //&&
            //!this.handTarget
            this.clickSave.handTarget &&
            this.clickSave.handTarget.type === "oil_Ref"
          ) {
            this.handCell = 0;
            this.way = "go";
            this.handTarget = this.clickSave.handTarget;
          }
        }
  
        this.clickSave = false;
  
        if (this.handTarget) {
          /*
  if(
  this.check_way
  &&
  !this.tanker_iCanGet
  
  ){
  this.handTarget=0;
  this.active_status=false;
  this.way=[];	
  }
  
      
      else 
      */
          if (
            this.active_status === "get oil" &&
            //!this.oil
            //&&
            //this.handTarget.type==="oil_platform"
            //&&
            (this.handTarget.hp <= 0 ||
              (this.handTarget.type === "oil_platform" &&
                !this.handTarget.cell.oil.oil))
          ) {
            this.handTarget = 0;
            //this.myJoube=false;
            this.active_status = false;
            this.iGetTarget = false;
            this.way = [];
  
            //console.log("okokoko");
          } else if (
            ((this.handTarget.gabarit === 150 &&
              get_distanse_on_lineyka(
                this.cell,
                100,
                this.handTarget.cell,
                this.handTarget.gabarit
              ) <= 177) ||
              (this.handTarget.gabarit === 100 &&
                get_distanse_on_lineyka(
                  this.cell,
                  100,
                  this.handTarget.cell,
                  this.handTarget.gabarit
                ) <= 141.5)) &&
            this.iGetMyCell
          ) {
            this.iGetTarget = true;
  
            if (this.active_status !== "get oil") {
              this.handTarget = 0;
              this.iGetTarget = false;
              this.handCell = 0;
              this.way = [];
              //console.log("fin");
            }
          }
  
          if (!this.iGetTarget && this.handTarget) {
            if (!this.way.length && this.iGetMyCell) {
              this.way = "go";
            }
          } else {
            //console.log(this.handTarget.cell.oil.oil); myJoube
  
            if (this.active_status === "get oil") {
              if (
                this.oil &&
                this.handTarget.type === "oil_Ref" &&
                this.handTarget.fatherFraction.fraction ===
                  this.fatherFraction.fraction &&
                this.handTarget.buildready === this.handTarget.hpfull &&
                this.handTarget.hp > 0
              ) {
                //console.log("?????????????");//pausa=1;
  
                this.handTarget.fatherFraction.oil += 100;
                this.oil = false;
  
                this.handTarget.tankers.push(this.cell.unit);
                this.handTarget.timers.push({ time: 200 });
  
                if (
                  this.handTarget.fatherFraction.activeBuildings.indexOf(
                    this.handTarget
                  ) === -1
                ) {
                  this.handTarget.fatherFraction.activeBuildings.push(
                    this.handTarget
                  );
                }
  
                for (
                  let i = this.cell.vertikal - 1;
                  i <= this.cell.vertikal;
                  i++
                ) {
                  for (
                    let k = this.cell.horizont;
                    k <= this.cell.horizont + 1;
                    k++
                  ) {
                    gameFielg[i][k].unit = 0;
                  }
                }
  
                this.cell = 0;
  
                //console.log("okay");
                this.iGetTarget = false;
                this.handTarget = 0;
              } else if (
                !this.oil &&
                this.handTarget.type === "oil_platform" &&
                this.handTarget.fatherFraction.fraction ===
                  this.fatherFraction.fraction &&
                this.handTarget.buildready === this.handTarget.hpfull &&
                this.handTarget.hp > 0 &&
                this.handTarget.cell.oil.oil
              ) {
                this.handTarget.cell.oil.oil -= 100;
  
                this.handTarget.tankers.push(this.cell.unit);
                this.handTarget.timers.push({ time: 200 });
  
                for (
                  let i = this.cell.vertikal - 1;
                  i <= this.cell.vertikal;
                  i++
                ) {
                  for (
                    let k = this.cell.horizont;
                    k <= this.cell.horizont + 1;
                    k++
                  ) {
                    gameFielg[i][k].unit = 0;
                  }
                }
  
                this.cell = 0;
  
                //console.log("okay");
                this.iGetTarget = false;
                this.handTarget = 0;
              } else if (this.oil && this.handTarget.type === "oil_platform") {
                this.iGetTarget = false;
                this.handTarget = 0;
              }
              //*
              else if (!this.oil && this.handTarget.type === "oil_Ref") {
                this.iGetTarget = false;
                this.handTarget = 0;
              }
              //*/
            } // get oil
          }
        }
      } //   stepTakt
  
      this.tanker_iCanGet = false;
      this.check_way = false;
  
      this.goWaySweeme(this.cell.unit);
  
      //console.log(this.way);
  
      if (this.handCell) {
        this.goGroop_sweeme = false;
      }
  
      return;
    } else if (this.type === "transport") {
      //ii_abort landCells animys
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.readyToOut = true;
  
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
  
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
  
        if (this.distroyTimer % 10 === 0) {
          this.animY += 100;
        }
  
        if (this.distroyTimer === 0) {
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectIsSweem.splice(
              this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
          for (let m = 0; m < this.passagers.length; m++) {
            this.passagers[m].readyToOut = true;
            this.passagers[m].katastrofa = true;
            this.passagers[m].hp = 0;
          }
  
          this.passagers = [];
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //console.log(this.animys.length)
  
      this.damagePointX = this.cell.x + 50;
      this.damagePointY = this.cell.y;
  
      //&&!isBlocked
  
      if (this.ii_aliss) {
        this.ii_aliss--;
      }
  
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        if (
          this.animys.length &&
          this.passagers.length &&
          this.fatherFraction.attack &&
          !this.ii_aliss &&
          this.way.length
          //&&
          //this.fatherFraction.fraction==="blackOrcs"
        ) {
          this.ii_aliss = 100;
  
          for (let i = this.vertikal - 10; i <= this.vertikal + 10; i++) {
            let br;
  
            for (let k = this.horizont - 10; k <= this.horizont + 10; k++) {
              let obj;
  
              if (gameFielg[i] && gameFielg[i][k]) {
                obj = gameFielg[i][k];
              }
  
              if (
                obj &&
                obj.continent &&
                obj.continent ===
                  this.fatherFraction.attack.finish_cell.continent &&
                obj.free
              ) {
                this.clickSave = new ClickSave(0, obj);
                this.passagers_out = true;
                br = true;
  
                //console.log("okkokokokoko");
  
                break;
              }
            }
  
            if (br) {
              break;
            }
          }
        }
  
        this.animys = []; //////////////!!!!!!!!!!!!!!!!!
  
        /*
      if(!this.passagers.length){this.ii_abort=false;};
      if(this.way.length&&this.landing){this.landing.iGetLand=false;};
      if(this.fatherFraction.control==="comp"&&this.fatherFraction.attack){
          //if(!this.iGetLand){this.ii_abort=this.fatherFraction.attack.attack_target_fraction_continent;};
      };
  */
  
        this.go = false;
  
        let way_unit;
        let way_cell;
  
        if (this.way.length) {
          way_cell = this.way[this.way.length - 1];
  
          //let ran=Math.floor(Math.random()*11);
  
          for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
            for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
              if (
                gameFielg[v] &&
                gameFielg[v][h] &&
                gameFielg[v][h].unit &&
                gameFielg[v][h].unit.persolalNumber !== this.persolalNumber &&
                gameFielg[v][h].unit.active && //(gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
                gameFielg[v][h].unit.hold_position &&
                gameFielg[v][h].unit.fatherFraction.fraction ===
                  this.fatherFraction.fraction &&
                this.hold_position &&
                this.hold_position === gameFielg[v][h].unit.hold_position &&
                //&&
                //this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
                this.terpenie < this.terpenie_ran
              ) {
                //if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand
  
                this.terpenie++;
  
                this.x = this.cell.x;
                this.y = this.cell.y;
  
                //console.log("ok");
  
                return;
              }
            }
          }
        }
  
        if (this.terpenie === this.terpenie_ran) {
          //this.hold_position=false;
          //this.goGroop_sweeme=false;
  
          //console.log("!!!!!!!!!!!!!");
          this.go = true;
          this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
        }
  
        this.terpenie = 0;
  
        //if(this.terpenie>=150){this.terpenie=0;};
  
        //pausa=1
  
        if (this.clickSave && this.clickSave.handCell) {
          this.spe = this.clickSave.handCell;
  
          //console.log("ok");
          if (
            this.clickSave.handCell.sea &&
            this.clickSave.handCell.sea === this.cell.sea &&
            this.spe.persolalNumber !== this.cell.persolalNumber
          ) {
            this.landing = false;
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            this.tardetLandCell = false;
          } else if (this.clickSave.handCell.continent) {
            if (
              allContinents[this.clickSave.handCell.continent].my_seas[
                this.cell.sea
              ]
            ) {
              //console.log(allContinents[this.clickSave.handCell.continent])
              //console.log(allSeas[this.cell.sea])
  
              /////////////
  
              this.landing = {
                base_cell: this.clickSave.handCell,
                landCells: [],
                passagers_out_cells: [],
              };
  
              this.way = [];
              this.tardetLandCell = false;
              //console.log("land");
  
              ///////////////
            } else {
              this.clickSave = 0;
            }
          }
        }
  
        this.clickSave = false;
  
        if (this.landing) {
          if (
            !this.tardetLandCell ||
            !this.checkGoodLandingCell(this.tardetLandCell)
          ) {
            this.tardetLandCell = this.getMy_landing_cell();
  
            this.way = [];
  
            //console.log(!this.checkGoodLandingCell(this.tardetLandCell))
            //if(this.persolalNumber===143){console.log(!this.checkGoodLandingCell(this.tardetLandCell));};
          } else {
            if (
              this.cell.persolalNumber !== this.tardetLandCell.persolalNumber &&
              !this.way.length
              //||(this.way[this.way.length-1].persolalNumber!==this.tardetLandCell.persolalNumber)
            ) {
              this.handTarget = 0;
              this.target = 0;
              this.handCell = this.tardetLandCell;
              this.spe = this.tardetLandCell;
              this.way = "go";
              this.iCanGet = false;
            } else if (
              this.cell.persolalNumber === this.tardetLandCell.persolalNumber &&
              this.iGetMyCell &&
              !this.landing.iGetLand
            ) {
              //console.log("i get");
              //this.landing=false;
              this.landing.iGetLand = this.landing.base_cell.continent;
            } else if (this.landing.iGetLand) {
              if (!this.landing.landCells.length) {
                let cells = [];
                let dis = [];
  
                for (
                  let i = this.cell.vertikal - 10;
                  i <= this.cell.vertikal + 10;
                  i++
                ) {
                  for (
                    let k = this.cell.horizont - 10;
                    k <= this.cell.horizont + 10;
                    k++
                  ) {
                    if (
                      gameFielg[i] &&
                      gameFielg[i][k] &&
                      gameFielg[i][k].continent &&
                      gameFielg[i][k].continent ===
                        this.landing.base_cell.continent
                    ) {
                      this.landing.passagers_out_cells.push(gameFielg[i][k]);
  
                      if (
                        //gameFielg[i]&&gameFielg[i][k]
                        //&&
                        //gameFielg[i][k].continent
                        //&&
                        //gameFielg[i][k].continent===this.landing.base_cell.continent
                        //&&
                        gameFielg[i][k].water_line
                      ) {
                        cells.push(gameFielg[i][k]);
                        dis.push(
                          get_distanse_on_lineyka(
                            this.cell,
                            100,
                            gameFielg[i][k],
                            50
                          )
                        );
                      }
                    }
                  }
                }
  
                //pausa=1
                for (let k = 0; k < 2; k++) {
                  let min = [];
                  for (let i = 0; i < dis.length; i++) {
                    if ((!min.length || min[0] > dis[i]) && !cells[i].vossalObj) {
                      min = [dis[i], cells[i], i];
                    }
                  }
  
                  this.landing.landCells.push(min[1]);
                  cells.splice(min[2], 1);
                  dis.splice(min[2], 1);
                }
              } else {
                if (this.passagers.length < 9) {
                  for (let i = 0; i < this.landing.landCells.length; i++) {
                    if (this.passagers.length === 9) {
                      break;
                    }
  
                    if (
                      this.fatherFraction.control === "comp" &&
                      this.landing.landCells[i].unit.transport &&
                      this.landing.landCells[i].unit.fatherFraction.fraction ===
                        this.fatherFraction.fraction &&
                      this.landing.landCells[i].unit.hp > 0
                      //&&
  
                      //(this.fatherFraction.attack&&this.fatherFraction.attack.transports.indexOf(this.cell.unit)!==-1)
                    ) {
                      this.landing.landCells[i].unit.way = [];
                      this.landing.landCells[i].unit.iin = true;
  
                      if (!this.landing.landCells[i].unit.born_cell) {
                        this.landing.landCells[i].unit.born_cell =
                          this.landing.landCells[i].unit.cell;
                      }
                    } else if (this.fatherFraction.control !== "comp") {
                    }
  
                    if (
                      this.landing.landCells[i].unit.iin &&
                      ((this.landing.landCells[i].unit.stepTakt < 1 &&
                        this.landing.landCells[i].unit.stepTakt >= 0) ||
                        this.landing.landCells[i].unit.iGetMyCell)
                      //&&
                      //(
                      //this.landing.landCells[i].unit.handCell.persolalNumber===this.landing.landCells[0].persolalNumber
                      //||
                      //this.landing.landCells[i].unit.handCell.persolalNumber===this.landing.landCells[1].persolalNumber
  
                      //)
                    ) {
                      for (
                        let k = 0;
                        k < this.landing.landCells[i].unit.contaktCells.length;
                        k++
                      ) {
                        gameFielg[
                          this.landing.landCells[i].unit.contaktCells[k].vertikal
                        ][
                          this.landing.landCells[i].unit.contaktCells[k].horizont
                        ].iContaktWith.splice(
                          gameFielg[
                            this.landing.landCells[i].unit.contaktCells[k]
                              .vertikal
                          ][
                            this.landing.landCells[i].unit.contaktCells[k]
                              .horizont
                          ].iContaktWith.indexOf(
                            this.landing.landCells[i].unit.contaktCells[k]
                          ),
                          1
                        );
                      }
  
                      this.landing.landCells[i].unit.contaktCells = [];
  
                      if (
                        this.passagers.indexOf(this.landing.landCells[i].unit) ===
                        -1
                      ) {
                        this.passagers.push(this.landing.landCells[i].unit);
                      }
  
                      let unit = this.landing.landCells[i].unit;
  
                      if (unit.transport) {
                        let ind = unit.transport.ii_passagers.indexOf(unit);
  
                        if (ind !== -1) {
                          unit.transport.ii_passagers.splice(ind, 1);
                        }
  
                        unit.transport = this.cell.unit;
                      }
  
                      this.landing.landCells[i].unit.iin = false;
  
                      unit.cell.free = true;
                      unit.cell.unit = 0;
                      unit.cell = 0;
  
                      //console.log(unit);
  
                      unit.handCell = 0;
                      unit.way = [];
                      unit.vertikal = false;
                      unit.horizont = false;
                      unit.x = false;
                      unit.y = false;
                      unit.stepTakt = 0;
                      unit.rage = 0;
                      unit.transport = false;
                      unit.handTarget = 0;
                      unit.animys = [];
                      unit.pas = true;
  
                      ////////////////// ii
                      //this.attack.warriors_in_active=0;
                      //this.attack.alive_warriors=[];
                      if (unit.ii_attack && unit.fatherFraction.attack) {
                        unit.fatherFraction.attack.alive_warriors.push(unit);
                        unit.fatherFraction.attack.warriors_in_active++;
                      }
  
                      /////////////////
  
                      //unit.ii_saveCell=false;
                    }
                    //else{this.landing.landCells[i].unit.iin=false;};
                  }
                }
  
                /*
  if(
  this.ii_abort
  //&&
  //this.ii_abort===this.landing.base_cell.continent
  
  ){
      this.ii_abort=false;
      this.passagers_out=true;
      };
  */
  
                if (this.passagers_out) {
                  //console.log("out");
  
                  this.passagers_out = false;
  
                  for (let i = 0; i < this.passagers.length; i++) {
                    let min = [];
  
                    for (
                      let k = 0;
                      k < this.landing.passagers_out_cells.length;
                      k++
                    ) {
                      if (this.landing.passagers_out_cells[k].free) {
                        let dis = get_distanse_on_lineyka(
                          this.landing.passagers_out_cells[k],
                          50,
                          this.landing.landCells[0],
                          50
                        );
  
                        if (!min.length || min[0] > dis) {
                          min = [dis, this.landing.passagers_out_cells[k]];
                        }
                      }
                    }
  
                    let cell = min[1];
  
                    if (cell) {
                      this.passagers[i].cell =
                        gameFielg[min[1].vertikal][min[1].horizont];
  
                      this.passagers[i].horizont =
                        this.passagers[i].cell.horizont;
                      this.passagers[i].vertikal =
                        this.passagers[i].cell.vertikal;
                      this.passagers[i].x = this.passagers[i].cell.x;
                      this.passagers[i].y = this.passagers[i].cell.y;
                      this.passagers[i].cell.unit = this.passagers[i];
                      this.passagers[i].cell.free = false;
                      this.passagers[i].ii_saveCell = false;
                      this.passagers[i].handCell = 0;
                      this.passagers[i].transport = false; // ii
                      this.passagers[i].stepTakt = 0;
                      this.passagers[i].pas = false;
                      this.passagers[i].animys = [];
                      this.passagers[i].cellUpdate();
                      this.passagers[i].p_transport = false;
  
                      let obj = this.passagers[i];
  
                      let ind = this.fatherFraction.activeUnits.indexOf(obj);
  
                      if (ind === -1) {
                        this.fatherFraction.activeUnits.push(obj);
                        obj.active = true;
                      }
  
                      this.passagers.shift();
                      i--;
                    }
                  }
  
                  this.ii_ajackt = true;
                }
              }
            }
          }
        }
      } //   stepTakt
  
      this.goWaySweeme(this.cell.unit);
  
      if (this.handCell) {
        this.goGroop_sweeme = false;
      }
  
      return;
    } else if (this.type === "dragoon") {
      //console.log(this.axe);
  
      //if(this.iDoTakt!==4){this.axe=false;};
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
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
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
          //if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
          if (
            this.fatherFraction.selectDragons.indexOf(this.cell.dragoon) !== -1
          ) {
            this.fatherFraction.selectDragons.splice(
              this.fatherFraction.selectDragons.indexOf(this.cell.dragoon),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //console.log(this.ii_saveCell);
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
      //console.log(this.clickSave);
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      //indexOf
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (
          this.target &&
          (this.target.hp <= 0 ||
            !this.target.cell ||
            this.target.buildready <= 0)
        ) {
          this.target = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          this.way = [];
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 ||
            !this.handTarget.cell ||
            this.handTarget.buildready <= 0)
        ) {
          this.handCell = this.handTarget.cell;
  
          this.handTarget = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          //this.way=[];
        }
  
        isBlocked = this.isBlockedDrag();
  
        //console.log(isBlocked);
  
        ///*
        let hDis2 = false;
  
        if (this.clickSave.handTarget && isBlocked) {
          let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
          let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
          hDis2 = Math.sqrt(a * a + b * b);
        }
        //*/
  
        if (
          this.clickSave &&
          (!isBlocked || (isBlocked && hDis2 && hDis2 <= this.seeing))
        ) {
          if (this.clickSave.handCell && !isBlocked) {
            //console.log("gogogog");
  
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            //this.stopGetTarget=50;
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            this.handTarget = this.clickSave.handTarget;
            this.target = 0;
            this.handCell = 0;
            //this.stopGetTarget=50;
            this.way = [];
            this.targetCell = false;
  
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
            //console.log("ok");
          }
        }
  
        if (this.clickSave && this.clickSave.hold) {
          this.clickSave.hold--;
        }
  
        if (this.clickSave && !this.clickSave.hold) {
          this.clickSave = false; ////////////////////////////////////////////////////////////////////////!!!!!!!!!!
          //console.log("????");
        }
        ///*/
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
      }
      //console.log(this.clickSave);
      //
  
      //if(this.handTarget){console.log("ok");};
  
      //if(this.stopGetTarget){this.stopGetTarget--;};
      //if(this.iStand){this.stopGetTarget=0;};
  
      //console.log(this.stopGetTarget);
      /////////////////////////////////////////////////// new!!!
  
      let warrior = false;
  
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
            let a = this.animys[i].damagePointX - this.damagePointX;
            let b = this.animys[i].damagePointY - this.damagePointY;
  
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
            this.animys[i] &&
            this.target &&
            this.animys[i].persolalNumber === this.target.persolalNumber &&
            c > this.dash
          ) {
            this.target = 0;
            this.way = [];
          }
  
          if (
            !this.animys[i] ||
            (!c && c !== 0) ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0
            //||
            //(this.damagePointX===this.animys[i].damagePointX&&this.damagePointY===this.animys[i].damagePointY)
          ) {
            /*
      if(this.animys[i].type===1){
          console.log("delete");
      console.log("dash : "+this.dash);
      console.log("c : "+c);
      pausa=1;
      };
      */
  
            //if(this.fatherFraction.selectUnits.indexOf(this.cell.unit)!==-1&&c>this.dash){console.log("c : "+c);};
  
            this.animys.splice(i, 1);
            i--;
          }
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      if (this.fatherFraction.control === "comp" && this.animys.length) {
        this.handCell = 0;
        this.handTarget = 0;
        //stopBack=true;
        this.stopGetTarget = 0;
        //this.way=[];
      }
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.handCell &&
        !this.handTarget
        //&&!this.way.length
  
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
      ) {
        //console.log("i seee");
  
        if (
          this.fatherFraction.control === "comp" &&
          !this.ii_saveCell &&
          !this.ii_attack
        ) {
          this.ii_saveCell = this.born_cell;
        }
  
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (this.animys[i].iCanGetFly) {
              tower.push(this.animys[i]);
            } else if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
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
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              if (!this.iDoTakt) {
                this.tyuk = true;
              }
  
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 6) {
              //pausa=1;
              //console.log("fffff");
              //x,y,type,target,power
  
              if (!this.axe) {
                //pausa=1
                this.axeInitialization(
                  this.target,
                  "dragoonFire",
                  this.cell.unit
                );
                //this.axeInitialization(this.target,"topor",this.cell.unit);
                //this.axeInitialization(this.target,"orc_ballista",this.cell.unit);
                //console.log("here");
  
                this.axe = true;
  
                if (
                  this.target.unitStatus === "life" &&
                  !this.target.warrior &&
                  !this.target.alarmTimer
                ) {
                  this.target.alarmTimer = 500;
                  this.target.agressor = this.cell.dragoon;
                }
              }
            }
  
            if (this.iDoTakt === 7) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget();
  
          //console.log(this.target.unitName);
        }
  
        //console.log(this.iGetTarget);control
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          let nextCell_ok = this.checkNextDragCell();
  
          //console.log(isBlocked);
  
          if (
            !isBlocked &&
            !this.iFight &&
            this.target &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && nextCell_ok < 4))
          ) {
            this.targetCell = this.target.cell.persolalNumber;
  
            let noFree = 1000;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
            let dis;
  
            if (this.target) {
              let a = this.target.damagePointX - this.damagePointX;
              let b = this.target.damagePointY - this.damagePointY;
  
              dis = Math.sqrt(a * a + b * b);
            }
  
            //console.log("dis : "+dis);
  
            let deep;
  
            if (dis <= 300) {
              deep = 400;
            } else if (dis > 300 && deep < 500) {
              deep = 600;
            } else {
              deep = 1000;
            }
  
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //dlya luchnik
            /*
  let luchnik=undefined;
  
  
  if(this.target.unitStatus==="life"){luchnik=1;};
  */
  
            let luchnik = 3; //undefined;
  
            /*
  if(!this.target.myCells||!this.target.myCells.length){
          
      luchnik=1;
          
      }
  
      else if(this.target.myCells&&this.target.myCells.length){
      luchnik=3;
      //console.log(this.handTarget);
      }
      */
  
            //console.log(luchnik);
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            getWay(arg, noFree, 500, this.target, luchnik);
  
            //console.log(this.way.length)
          }
        }
      } else if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.handCell &&
        !this.target &&
        this.handTarget
      ) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          //console.log(this.iGetTarget)
  
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          let nextCell_ok = this.checkNextDragCell();
  
          if ((!this.way.length || nextCell_ok < 4) && !this.iFight) {
            let luchnik = 3;
  
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
  
            //console.log(luchnik);
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            this.finish = this.handTarget.cell;
            this.sosFin = this.handTarget.cell;
  
            getWay(arg, 350, 500, this.handTarget, luchnik);
  
            let iCanGet = this.iCanGet;
            this.iCanGet = false;
  
            //console.log(iCanGet);
  
            if (
              !iCanGet ||
              ((!luchnik || luchnik === 2) && this.handTarget.isBlocked())
            ) {
              //console.log("nenenene");
  
              if (this.way.length) {
                this.handCell = this.way[0]; //console.log("go")
  
                if (this.way.length > 3) {
                  this.clickSave = false;
                }
              } else {
                this.handCell = this.handTarget.cell;
  
                this.clickSave = false;
              }
  
              this.handTarget = 0;
              //console.log("oh");
              //console.log(iCanGet);
            }
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                this.axeInitialization(
                  this.handTarget,
                  "dragoonFire",
                  this.cell.unit
                );
                //pausa=1
                //	this.axeInitialization(this.handTarget,"orc_ballista",this.cell.unit);
                //let axe=new Axes(this.firePointX,this.firePointY,"cannon_tower",undefined,this.attack,this.cell.unit,conor,xy);
                this.axe = true;
                this.tyuk = true;
  
                if (
                  this.handTarget.unitStatus === "life" &&
                  !this.handTarget.warrior &&
                  !this.handTarget.alarmTimer
                ) {
                  this.handTarget.alarmTimer = 500;
                  this.handTarget.agressor = this.cell.dragoon;
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          isBlocked &&
          this.stepTakt < 1 &&
          this.stepTakt >= 0 &&
          !this.iFight &&
          this.handTarget
        ) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp" &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 0) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
  
      //console.log(this.persolalNumber);
  
      //console.log(this.finish);
      //pausa=1;
      //console.log(this.animys);
  
      this.goWayDrag(this.cell.dragoon);
  
      //console.log(this.x);
      //console.log(this.cell.x);
  
      return;
    } else if (this.type === "rizar") {
      //magickTarget
      //animY
      //iStand
      //hp
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopNoFlyAttack;
      //this.panzer=this.basePanzer*this.fatherFraction.dopNoFlyPanzer;
  
      //this.level=1+(this.fatherFraction.dopNoFlyAttack_level)+
      //(this.fatherFraction.dopNoFlyPanzer_level);
  
      /*
  if(this.fatherFraction.canMagick){
          this.mana=(floorGlobalTimer-this.manaTimer)*25;
          }
          else{this.mana=0;};
  */
  
      //if(this.mana>100){this.mana=100;};
  
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.magickTarget = false;
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
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
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.rizars.indexOf(this.cell.unit)!==-1){this.fatherFraction.rizars.splice(this.fatherFraction.rizars.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1)};
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //console.log(!this.iFight&&!this.isBlocked()&&this.stopGetTarget===true);
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (this.target && (this.target.hp <= 0 || !this.target.cell)) {
          this.target = 0;
          //this.iFight=false;
          this.iDoTakt = 0;
  
          //this.handCell=this.target.cell;
          //this.way="go";
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 || !this.handTarget.cell)
        ) {
          ///*
  
          if (this.fatherFraction.control === "comp") {
            this.handCell = this.handTarget.cell;
            this.way = "go";
  
            this.handTarget = 0;
            //this.iFight=false;
            this.iDoTakt = 0;
          } else {
            if (
              this.memHT &&
              this.memHT.persolalNumber === this.handTarget.persolalNumber
            ) {
              this.handTarget = 0;
              this.way = [];
              this.clickSave = false;
              this.iDoTakt = 0;
            } else {
              this.handCell = this.handTarget.cell;
              this.way = "go";
  
              this.handTarget = 0;
              //this.iFight=false;
              this.iDoTakt = 0;
            }
          }
        }
      }
  
      //this.memHT=false;
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      //if(this.fatherFraction.control==="comp"&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
  
      // if(this.fatherFraction.freeRizzars.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeRizzars.splice(this.fatherFraction.freeRizzars.indexOf(this.cell.unit),1);};
  
      //};
      //else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
  
      // if(this.fatherFraction.freeMechniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeMechniks.push(this.cell.unit);};
  
      //};
  
      let isBlocked = this.isBlocked();
  
      ///*
  
      if (this.magickTarget) {
        //pausa=1;
  
        //if(!this.fatherFraction.attack){console.log(this.magickTarget.timer);pausa=1;};//
  
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
  
            if (this.fatherFraction.nation === "orc") {
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
            //if(this.fatherFraction.activeUnits.indexOf(this.magickTarget)===-1){
            //	this.fatherFraction.activeUnits.push(this.magickTarget.target);
            //	this.magickTarget.active=true;
            //	}
            //indexOf
  
            //console.log(this.magickTarget.timer);
            //pausa=1;
          }
          //console.log(this.iDoTakt);//pausa=1;
  
          this.iDoTaktTimer++;
        } else {
          if (this.magickTarget.timer <= 45) {
            this.iDoTakt = 1;
          }
        }
  
        if (!this.magickTarget.timer) {
          this.magickTarget = false;
          //this.manaTimer=floorGlobalTimer;
          this.iFight = false;
          this.iDoTakt = 0;
          this.doMagick = false;
          //console.log("l,l,l,l,l,l");
        }
  
        //console.log(this.magickTarget.timer);
        return;
      }
  
      //*/
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.iDoTakt === 0 &&
        !this.iFight
      ) {
        //isBlocked=this.isBlocked();
  
        /////////////////////////////////
        /////////////////////////////////
  
        if (this.doMagick && !this.magickTarget) {
          if (
            !this.doMagick.cell ||
            this.doMagick.hp <= 0 ||
            !this.magick ||
            this.target ||
            (!this.handTarget &&
              get_distanse_on_lineyka(this.cell, 50, this.doMagick.cell, 50) >
                150) ||
            this.hold_position ||
            (this.handTarget &&
              this.handTarget.persolalNumber !== this.doMagick.persolalNumber)
          ) {
            this.doMagick = false;
          }
        }
  
        ///*
  
        if (this.mana >= 100) {
          if (
            (this.fatherFraction.control === "comp" && this.animys.length) ||
            this.doMagick
          ) {
            if (this.fatherFraction.nation === "orc") {
              if (this.fatherFraction.control === "comp") {
                for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
                  for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
                    let cell;
  
                    if (gameFielg[i] && gameFielg[i][k]) {
                      cell = gameFielg[i][k];
                    }
  
                    if (
                      cell &&
                      cell.unit &&
                      cell.unit.gabarit &&
                      cell.unit.gabarit === 50 &&
                      cell.unit.persolalNumber !== this.persolalNumber &&
                      !cell.unit.neitral &&
                      cell.unit.fatherFraction.fraction ===
                        this.fatherFraction.fraction &&
                      cell.unit.warrior &&
                      cell.unit.unitStatus === "life" &&
                      cell.unit.hp > 0 &&
                      !cell.unit.rage
                    ) {
                      this.magickTarget = {
                        target: gameFielg[i][k].unit,
                        timer: 50,
                      };
                      this.tyuk_rage = true;
                      //this.iDoTakt=0;
  
                      //console.log(this.magickTarget.target)//
                      //pausa=1;
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
                    50
                  ) <= 150
                ) {
                  this.magickTarget = { target: this.doMagick, timer: 50 };
  
                  this.tyuk_rage = true;
                  //console.log("here");
                }
              }
            } else {
              if (this.fatherFraction.nation === "h") {
                if (this.fatherFraction.control === "comp") {
                  for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
                    for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
                      let cell;
  
                      if (gameFielg[i] && gameFielg[i][k]) {
                        cell = gameFielg[i][k];
                      }
  
                      if (
                        cell &&
                        cell.unit &&
                        cell.unit.gabarit &&
                        cell.unit.gabarit === 50 &&
                        cell.unit.persolalNumber !== this.persolalNumber &&
                        !cell.unit.neitral &&
                        cell.unit.fatherFraction.fraction ===
                          this.fatherFraction.fraction &&
                        // &&gameFielg[i][k].unit.warrior
                        cell.unit.unitStatus === "life" &&
                        cell.unit.hp > 0 &&
                        // &&!gameFielg[i][k].unit.rage
                        (cell.unit.hp * 100) / cell.unit.hpfull <= 33
                      ) {
                        this.magickTarget = {
                          target: cell.unit,
                          timer: 50,
                        };
                        //this.iDoTakt=0;
  
                        //console.log(this.magickTarget.target)//
                        //pausa=1;
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
                      50
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
  
              this.iStand = true; //?
  
              this.moveVektor = this.getFightVector(this.magickTarget.target);
  
              //pausa=1;
  
              return;
            }
          }
        }
  
        //this.doMagick=false;
  
        this.magickTarget = false;
  
        //ddd
  
        //*/
        ////////////////////////////////
        /////////////////////////////////
  
        let hDis2 = false;
  
        if (this.clickSave.handTarget) {
          let a = this.clickSave.handTarget.x - this.x;
          let b = this.clickSave.handTarget.y - this.y;
  
          hDis2 = Math.sqrt(a * a + b * b);
        }
  
        //console.log(isBlocked)
  
        if (
          this.clickSave &&
          (!isBlocked || (isBlocked && hDis2 && hDis2 < 80))
        ) {
          if (this.clickSave.handCell) {
            this.target = 0;
            this.handTarget = 0;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
  
            this.stopGetTarget = 50;
  
            if (this.ii_back) {
              this.stopGetTarget = this.ii_back;
            }
  
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
            //if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            this.target = 0;
            this.handTarget = this.clickSave.handTarget;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = 0;
            this.stopGetTarget = 50;
  
            if (this.fatherFraction.control === "player") {
              if (this.magick && this.magick_ok(this.clickSave.handTarget)) {
                //this.magickTarget=this.clickSave.handTarget;
  
                this.doMagick = this.handTarget;
              }
            }
  
            //if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
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
  
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
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
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
  
        let hDis = false;
  
        if (this.handTarget) {
          hDis = this.checkGetHandTarget(true);
        }
  
        //
  
        if (
          this.stopGetTarget === 0 &&
          this.stepTakt < 1 &&
          this.stepTakt >= 0 &&
          (!this.target || (this.target && !this.checkGetTarget())) &&
          !hDis //!!!!!!!!!!?????????????
        ) {
          for (let i = 0; i < this.cell.iContaktWith.length; i++) {
            if (
              !this.cell.iContaktWith[i].father.neitral &&
              this.cell.iContaktWith[i].father.fatherFraction.union !==
                this.fatherFraction.union &&
              this.cell.iContaktWith[i].father.warrior &&
              this.cell.iContaktWith[i].father.hp > 0
            ) {
              this.handTarget = 0; //gameFielg[i][k].unit;
              this.handCell = 0;
              this.target = this.cell.iContaktWith[i].father;
              this.way = [];
              this.targetCell = false;
              this.clickSave = false;
  
              //if(this.fatherFraction.control==="comp"){console.log("act");};
            }
          }
        }
      }
  
      //
      //if(this.stopGetTarget===50){console.log("vot");};
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
      //if(this.iGoBack){this.iGoBack--;};
  
      //////////////////////////////////////////////////////////////////////////////// new!!!!
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.iFight //&&!this.iGoBack
      ) {
        for (let i = 0; i < this.animys.length; i++) {
          let u = this.animys[i];
  
          let c;
          if (u && u.damagePointX) {
            let a = u.damagePointX - this.damagePointX;
            let b = u.damagePointY - this.damagePointY;
  
            c = Math.sqrt(a * a + b * b);
          }
          /*
  if(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target){
      
      this.handCell=0;
      this.handTarget=0;
      this.way=[];
      //console.log("oklll");
  };	
  //*/
          if (
            !c ||
            c > this.dash ||
            !u.cell ||
            u.hp <= 0 ||
            !u.cell.continent ||
            u.cell.continent !== this.cell.continent ||
            u.sweeme
          ) {
            this.animys.splice(i, 1);
            i--;
          }
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////
  
      // ii
  
      if (
        this.fatherFraction.control === "comp" &&
        this.animys.length &&
        !this.stopGetTarget
      ) {
        this.handCell = 0;
        this.handTarget = 0;
      }
  
      // ii
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        this.stopGetTarget === 0
      ) {
        //if(this.fatherFraction.control==="comp"&&!this.target&&this.animys.length){console.log("kkkkk");	};
  
        let min = [];
  
        //if(this.fatherFraction.fraction==="redOrcs"){console.log(this.iFight);};
  
        let dis;
  
        if (this.target) {
          let a = this.target.damagePointX - this.damagePointX;
          let b = this.target.damagePointY - this.damagePointY;
  
          dis = Math.sqrt(a * a + b * b);
        }
  
        if (
          !this.iFight &&
          (!this.target || (this.target && dis > 120) || !this.target.warrior)
        ) {
          //////////////////////////
  
          //let min=[];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            let u = this.animys[i];
  
            if (!u.isBlocked(this.cell.unit)) {
              if (u.type === "tower") {
                tower.push(this.animys[i]);
              } else if (u.warrior) {
                warrior.push(u);
              } else if (u.unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          /////////////////////////
  
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.ii_saveCell
            ) {
              this.ii_saveCell = this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
          } else {
            this.target = 0;
          }
        }
  
        //console.log(this.iGetTarget);
        if (this.target) {
          // this.targetCell=this.target.cell.persolalNumber;
  
          if (!this.target.warrior) {
            for (let i = 0; i < this.cell.iContaktWith.length; i++) {
              if (
                !this.cell.iContaktWith[i].father.neitral &&
                this.cell.iContaktWith[i].father.fatherFraction.union !==
                  this.fatherFraction.union &&
                this.cell.iContaktWith[i].father.warrior &&
                this.cell.iContaktWith[i].father.hp > 0
              ) {
                this.handTarget = 0; //gameFielg[i][k].unit;
                this.handCell = 0;
                this.target = this.cell.iContaktWith[i].father;
                this.way = [];
                this.targetCell = false;
                this.clickSave = false;
              }
            }
  
            //this.target=gameFielg[i][k].unit;
            //this.targetCell=false;/////////////////////////////////////////////////////////??????????????????????????????????
          }
  
          //let a=this.target.x-this.x;
          //let b=this.target.y-this.y;
  
          //let c=Math.sqrt(a*a+b*b);
  
          //if(c<=Math.sqrt(50*50+50*50)){
          if (!this.iFight && this.target.hp > 0 && this.target.cell) {
            this.iGetTarget = this.checkGetTarget();
          }
          //};
  
          if (this.iGetTarget) {
            ////////////////////////////////////////////////////////////peon
  
            this.peonGo(this.target);
  
            ////////////////////////////////////////////////////////////peon
  
            this.clickSave = false;
  
            this.moveVektor = this.getFightVector(this.target);
  
            //console.log(this.moveVektor);
  
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
  
            //};
          } else if (
            !this.hold_position &&
            !isBlocked &&
            !this.iFight &&
            this.target &&
            !this.target.isBlocked(this.cell.unit) &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && !this.way[this.way.length - 1].free))
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
  
            let noFree = 1000;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
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
            let deep = 10000;
  
            getWay(arg, noFree, deep, this.target);
  
            /*		 
      for(let i=0;i<alienWay.length;i++){
      
      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };
      
  };	 
      */
            //console.log("???");
          }
  
          this.iGetTarget = false;
  
          if (this.iFight) {
            if (this.iGetMyCell) {
              if (this.iDoTaktTimer === 100000) {
                this.iDoTaktTimer = 0;
              }
  
              //iStand
              //console.log(this.iDoTakt);
  
              if (this.iDoTaktTimer % 4 === 0) {
                this.iDoTakt++;
              }
  
              let strike;
  
              if (this.fatherFraction.nation === "orc") {
                if (this.iDoTakt === 3) {
                  strike = true;
                }
              } else {
                if (this.iDoTakt === 4) {
                  strike = true;
                }
              }
  
              if (strike && !this.bom) {
                //pausa=1;
                let hp;
  
                let attack = this.attack * rage;
                this.tyuk = true;
  
                if (
                  this.target.unitStatus === "building" &&
                  this.target.buildready < this.target.hpfull &&
                  this.target.buildready > 0
                ) {
                  hp = this.target.buildready;
  
                  this.target.buildready -=
                    attack - (attack * this.target.panzer) / 100;
                } else if (this.target.hp > 0 && this.target.cell) {
                  hp = this.target.hp;
  
                  this.target.hp -= attack - (attack * this.target.panzer) / 100;
  
                  //console.log(this.attack-((this.attack*this.target.panzer)/100));
                }
                //indexOf
                if (this.target.unitStatus === "life") {
                  ////////////////////
                  if (title.style && hp && hp > 0 && this.target.hp <= 0) {
                    this.fatherFraction.kills++;
                  }
                  ///////////////////////
  
                  if (!this.target.warrior && !this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (this.target && !this.target.active) {
                    this.target.fatherFraction.activeUnits.push(this.target);
                    this.target.active = true;
                  }
                }
                if (this.target.unitStatus === "building") {
                  ////////////////////
                  if (
                    title.style &&
                    hp &&
                    hp > 0 &&
                    (this.target.hp <= 0 || this.target.buildready <= 0)
                  ) {
                    this.fatherFraction.razings++;
                  }
                  ///////////////////////
  
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (
                    this.target &&
                    this.target.fatherFraction.activeBuildings.indexOf(
                      this.target
                    ) === -1
                  ) {
                    this.target.fatherFraction.activeBuildings.push(this.target);
                  }
                }
  
                this.bom = true;
                //pausa=1;
              }
  
              if (this.iDoTakt === 5) {
                this.iFight = false;
                this.animTimer = 100;
                this.bom = false;
                //this.cellUpdate();
  
                this.iDoTakt = 0;
  
                //pausa=1
              }
              this.iDoTaktTimer++;
  
              return;
            }
          }
        }
      } else if (this.handTarget && this.stepTakt < 1 && this.stepTakt >= 0) {
        //this.target=0;
  
        //console.log("hand");
  
        //this.target=this.handTarget;
  
        //	if(this.persolalNumber===1433&&this.handTarget.unitStatus==="building"){
        //	console.log(this.handTarget.buildready);
        //	}
  
        /*	
  if((this.handTarget.hp<=0||!this.handTarget.cell||this.handTarget.buildready<=0||
  !this.handTarget)&&!this.iFight
  ){this.handTarget=0;this.way=[];this.clickSave=false;};	
  */
  
        ///*
        //console.log(this.handTarget.unitName);
  
        if (!this.iFight && this.handTarget) {
          this.iGetTarget = this.checkGetHandTarget();
        }
        //};
  
        //if(this.handTarget.unitName==="townHoll"){
        //pausa=1;
  
        //console.log(this.iGetTarget);
        //};
        //*/
  
        if (this.iGetTarget) {
          this.memHT = this.handTarget;
  
          ////////////////////////////////////////////////////////////peon
  
          this.peonGo(this.handTarget);
  
          ////////////////////////////////////////////////////////////peon
  
          this.clickSave = false;
  
          this.moveVektor = this.getFightVector(this.handTarget);
  
          //console.log(this.moveVektor);
  
          //this.stopGetTarget=0;
  
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.way = [];
            this.clickSave = false;
            //console.log("ok");
          } else {
            //if(!this.iFight){
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
            //this.stopGetTarget=2;
            //};
            this.clickSave = false;
          }
        }
  
        ///*
        else if (
          !this.iFight &&
          this.handTarget &&
          (this.targetCell !== this.handTarget.cell.persolalNumber ||
            (this.way.length && !this.way[this.way.length - 1].free) ||
            !this.way.length)
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
  
          //if(this.fatherFraction.control==="comp"){noFree=6000;};
  
          //let optimalContaktCell=this.getOptimalContaktCell();
  
          //console.log(this.target);
          this.finish = this.handTarget.cell; //this.target.cell;
          this.sosFin = this.handTarget.cell; //this.target.cell;
  
          this.iCanGet = false;
          //deep
  
          getWay(arg, noFree, glob_deep, this.handTarget);
  
          //console.log("way")
  
          /*
  for(let i=0;i<alienWay.length;i++){
      
      if(!gameFielg[alienWay[i].vertikal][alienWay[i].horizont].unit){
          gameFielg[alienWay[i].vertikal][alienWay[i].horizont].free=true;
      };
      
  };
  */
  
          ///*
  
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
          //console.log(this.handTarget)
          //console.log(this.way.length)
  
          if (!this.iCanGet) {
            if (this.fatherFraction.control === "player") {
              if (!this.way.length) {
                this.handCell = this.handTarget.cell;
  
                this.clickSave = false;
                this.handTarget = 0;
                //this.target=0;
                this.targetCell = false;
              } else {
                this.handCell = this.way[0];
                this.handTarget = 0;
                //this.target=0;
                this.targetCell = false;
  
                if (this.way.length > 1) {
                  this.clickSave = false;
                }
              }
            }
  
            //console.log("neeee");
          } else {
            this.iGetTarget = this.checkGetHandTarget();
  
            if (this.iGetTarget) {
              if (
                this.handTarget.neitral ||
                this.handTarget.fatherFraction.union === this.fatherFraction.union
              ) {
                this.handTarget = 0;
                this.way = [];
                this.clickSave = false;
                //console.log("ok");
              } else {
                this.way = [];
                this.iFight = true;
                this.iGetTarget = false;
                this.clickSave = false;
                //this.stopGetTarget=2;
              }
            }
          }
  
          //*/
  
          //console.log("ok");
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
  
      //if(this.fatherFraction.fraction==="blackOrcs"&&this.target){console.log("okokok");};
  
      this.iGetTarget = 0;
  
      if (this.iFight) {
        if (this.iGetMyCell) {
          if (this.iDoTaktTimer === 100000) {
            this.iDoTaktTimer = 0;
          }
  
          //iStand
          //console.log(this.iDoTakt);
  
          if (this.iDoTaktTimer % 4 === 0) {
            this.iDoTakt++;
          }
  
          let strike;
  
          if (this.fatherFraction.nation === "orc") {
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
  
            let attack = this.attack * rage;
            this.tyuk = true;
  
            if (
              this.handTarget.unitStatus === "building" &&
              this.handTarget.buildready < this.handTarget.hpfull &&
              this.handTarget.buildready > 0
            ) {
              hp = this.handTarget.buildready;
  
              this.handTarget.buildready -=
                attack - (attack * this.handTarget.panzer) / 100;
            } else if (this.handTarget.hp > 0 && this.handTarget.cell) {
              hp = this.handTarget.hp;
  
              this.handTarget.hp -=
                attack - (attack * this.handTarget.panzer) / 100;
            }
            //indexOf
            if (this.handTarget.unitStatus === "life") {
              ////////////////////
              if (title.style && hp && hp > 0 && this.handTarget.hp <= 0) {
                this.fatherFraction.kills++;
              }
              ///////////////////////
  
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
              this.handTarget.unitStatus === "building" &&
              !this.handTarget.neitral
            ) {
              ////////////////////
              if (
                title.style &&
                hp &&
                hp > 0 &&
                (this.handTarget.hp <= 0 || this.handTarget.buildready <= 0)
              ) {
                this.fatherFraction.razings++;
              }
              ///////////////////////
  
              if (!this.handTarget.alarmTimer) {
                this.handTarget.alarmTimer = 500;
                this.handTarget.agressor = this.cell.unit;
              }
  
              if (
                this.handTarget &&
                this.handTarget.fatherFraction.activeBuildings.indexOf(
                  this.handTarget
                ) === -1
              ) {
                this.handTarget.fatherFraction.activeBuildings.push(
                  this.handTarget
                );
              }
            }
            this.bom = true;
          }
  
          if (this.iDoTakt === 5) {
            this.iFight = false;
            this.animTimer = 100;
            this.bom = false;
            //this.cellUpdate();
  
            this.iDoTakt = 0;
          }
          this.iDoTaktTimer++;
  
          return;
        }
      }
  
      ///*
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp" &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 50) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
  
      //*/
    } else if (this.type === "ballista") {
      //ii_attack
  
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopBallista;
  
      //this.level=1+(this.fatherFraction.dopBallista_level);
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.iDoTakt !== 4) {
        this.axe = false;
      }
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
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
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.ballistas.indexOf(this.cell.unit)!==-1){this.fatherFraction.ballistas.splice(this.fatherFraction.ballistas.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeBallistas.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeBallistas.splice(this.fatherFraction.freeBallistas.indexOf(this.cell.unit),1)};
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
  
        //console.log("pizdez");
  
        return;
      }
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      if (!this.stopTakt && !this.iDoTakt) {
        this.animY = 0;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (
          this.target &&
          (this.target.hp <= 0 ||
            !this.target.cell ||
            this.target.buildready <= 0 ||
            !this.target.visible)
        ) {
          this.target = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          this.way = [];
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 ||
            !this.handTarget.cell ||
            this.handTarget.buildready <= 0 ||
            !this.handTarget.visible)
        ) {
          if (this.handTarget.visible) {
            this.handCell = this.handTarget.cell;
          }
  
          this.handTarget = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          //this.way=[];
        }
  
        isBlocked = this.isBlocked();
  
        //console.log(isBlocked);
  
        ///*
        let hDis2 = false;
  
        if (this.clickSave.handTarget && isBlocked) {
          if (
            !this.clickSave.handTarget.neitral &&
            this.clickSave.handTarget.fatherFraction.union !==
              this.fatherFraction.union
          ) {
            let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
            let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
            hDis2 = Math.sqrt(a * a + b * b);
          }
        }
        //*/
  
        if (
          this.clickSave &&
          (!isBlocked || (isBlocked && hDis2 && hDis2 <= this.seeing))
        ) {
          if (this.clickSave.handCell && !isBlocked) {
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            this.stopGetTarget = 50;
  
            if (this.ii_back) {
              this.stopGetTarget = this.ii_back;
            }
  
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            if (
              (this.clickSave.handTarget.cell.continent &&
                this.clickSave.handTarget.cell.continent ===
                  this.cell.continent) ||
              (!this.clickSave.handTarget.neitral &&
                this.clickSave.handTarget.fatherFraction.union !==
                  this.fatherFraction.union &&
                checkAliens(this.cell.unit, this.clickSave.handTarget) &&
                this.clickSave.handTarget.visible)
            ) {
              this.handTarget = this.clickSave.handTarget;
              this.target = 0;
              this.handCell = 0;
              this.stopGetTarget = 50;
              this.way = [];
              this.targetCell = false;
  
              //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
              //console.log("ok");
            }
  
            //console.log("ok");
          }
  
          /*	
      if(this.target){
          
          if(this.clickSave.handCell&&!isBlocked){
              
              this.stopGetTarget=50;
              this.target=0;
              this.handCell=this.clickSave.handCell;
              this.way="go";
              
              console.log("i gooooo");
              
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
      
  //this.stopGetTarget=50;
              //this.handTarget=0;
              this.handTarget=this.clickSave.handTarget;
              this.way=[];	
           this.handCell=0;
           this.targetCell=false;
  };	
      
      
      
  //console.log(this.handTarget.unitName);	
  */
        }
  
        let del = false;
        ///*
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c <= 250) {
            del = true;
          }
        }
        //*/
  
        if (this.clickSave && this.clickSave.hold) {
          this.clickSave.hold--;
        }
  
        if ((this.clickSave && !this.clickSave.hold) || del) {
          this.clickSave = false;
        }
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
      }
  
      //
  
      //if(this.handTarget){console.log("ok");};
  
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
  
      /////////////////////////////////////////////////// new!!!
  
      let warrior = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        /*
  let thc;
  
  if(this.handTarget){
      
      let hta=this.handTarget.damagePointX-this.damagePointX;
      let htb=this.handTarget.damagePointY-this.damagePointY;	
  
  thc=Math.sqrt(hta*hta+htb*htb);
  
  };
  */
  
        for (let i = 0; i < this.animys.length; i++) {
          let c;
  
          if (this.animys[i] && this.animys[i].damagePointX) {
            let a = this.animys[i].damagePointX - this.damagePointX;
            let b = this.animys[i].damagePointY - this.damagePointY;
  
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
            c &&
            this.target &&
            this.animys[i].persolalNumber === this.target.persolalNumber &&
            c > this.dash
          ) {
            this.target = 0;
            this.way = [];
          }
  
          /*
      if(this.animys[i].type===1){
          console.log("delete");
      console.log("dash : "+this.dash);
      console.log("c : "+c);
      pausa=1;
      };
      */
          if (
            !c ||
            !this.animys[i] ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            !this.animys[i].visible ||
            ((!this.animys[i].cell.continent ||
              (this.animys[i].cell.continent &&
                this.animys[i].cell.continent !== this.cell.continent)) &&
              !checkAliens(this.cell.unit, this.animys[i]))
          ) {
            //if(this.fatherFraction.selectUnits.indexOf(this.cell.unit)!==-1&&c>this.dash){console.log("c : "+c);};
  
            this.animys.splice(i, 1);
            i--;
          }
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      if (
        this.fatherFraction.control === "comp" &&
        this.animys.length &&
        !this.ii_back
      ) {
        this.handCell = 0;
        this.handTarget = 0;
        //stopBack=true;
      }
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  
        this.stopGetTarget === 0
      ) {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (this.animys[i].type === "tower") {
              tower.push(this.animys[i]);
            } else if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.target
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
          } else {
            this.target = 0;
          }
        } else if (this.iFight) {
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
              //console.log("fffff");
              //x,y,type,target,power
  
              if (!this.axe) {
                this.tyuk = true;
  
                if (this.fatherFraction.nation === "orc") {
                  this.axeInitialization(
                    this.target,
                    "orc_ballista",
                    this.cell.unit
                  );
                } else {
                  this.axeInitialization(this.target, "ballista", this.cell.unit);
                }
  
                this.axe = true;
  
                if (
                  this.target.unitStatus === "life" &&
                  !this.target.warrior &&
                  !this.target.alarmTimer
                ) {
                  this.target.alarmTimer = 500;
                  this.target.agressor = this.cell.unit;
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget();
        }
  
        //console.log(this.iGetTarget);
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          //console.log(isBlocked);
  
          if (
            !this.hold_position &&
            !isBlocked &&
            !this.iFight &&
            this.target &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && !this.way[this.way.length - 1].free))
          ) {
            this.targetCell = this.target.cell.persolalNumber;
  
            let noFree = 1000;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
            /*	
      
       let dis;
   
  if(this.target){	
      let a=this.target.damagePointX-this.damagePointX;
      let b=this.target.damagePointY-this.damagePointY;
      
      dis=Math.sqrt(a*a+b*b);
  };
  
  
      
          
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
  
            let deep = 10000;
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //dlya luchnik
            /*
  let luchnik=undefined;
  
  
  if(this.target.unitStatus==="life"){luchnik=1;};
  */
  
            let luchnik = undefined;
  
            if (!this.target.myCells || !this.target.myCells.length) {
              luchnik = 1;
            } else if (this.target.myCells && this.target.myCells.length) {
              luchnik = 3;
              //console.log(this.handTarget);
            }
  
            //console.log(luchnik);
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            //if(this.target.sweeme){deep=1000;};
  
            getWay(arg, noFree, deep, this.target, luchnik);
          }
        }
      } else if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.handCell &&
        !this.target &&
        this.handTarget
      ) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          //console.log(this.iGetTarget)
  
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          if (
            (!this.way.length || !this.way[this.way.length - 1].free) &&
            !this.iFight
          ) {
            let luchnik = undefined;
  
            if (
              (!this.handTarget.myCells || !this.handTarget.myCells.length) &&
              !this.handTarget.neitral &&
              this.handTarget.fatherFraction.union !== this.fatherFraction.union
            ) {
              luchnik = 1;
            } else if (
              (!this.handTarget.myCells || !this.handTarget.myCells.length) &&
              (this.handTarget.neitral ||
                this.handTarget.fatherFraction.union ===
                  this.fatherFraction.union)
            ) {
              luchnik = 2;
              //console.log(this.handTarget);
            } else if (
              this.handTarget.myCells &&
              this.handTarget.myCells.length &&
              (this.handTarget.neitral ||
                this.handTarget.fatherFraction.union ===
                  this.fatherFraction.union)
            ) {
              luchnik = undefined;
              //console.log(this.handTarget);
            } else if (
              this.handTarget.myCells &&
              this.handTarget.myCells.length &&
              !this.handTarget.neitral &&
              this.handTarget.fatherFraction.union !== this.fatherFraction.union
            ) {
              luchnik = 3;
              //console.log(this.handTarget);
            }
  
            //console.log(luchnik);
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            this.finish = this.handTarget.cell;
            this.sosFin = this.handTarget.cell;
  
            /*		
          let a=this.handTarget.damagePointX-this.damagePointX;
          let b=this.handTarget.damagePointY-this.damagePointY;
          
          let c=Math.sqrt(a*a+b*b);
          
          
      let deep=2000;
  
  ///*
   if(c<500){
       deep=500;
       }
  else if(c<=1000){
      deep=1000;
  }
  //*/
  
            let deep = 10000;
            //console.log(deep);
  
            getWay(arg, 350, glob_deep, this.handTarget, luchnik);
  
            let iCanGet = this.iCanGet;
            this.iCanGet = false;
  
            //console.log(iCanGet);
  
            if (
              !iCanGet ||
              ((!luchnik || luchnik === 2) && this.handTarget.isBlocked())
            ) {
              //console.log("nenenene");
  
              if (this.way.length) {
                this.handCell = this.way[0]; //console.log("go")
  
                if (this.way.length > 3) {
                  this.clickSave = false;
                }
              } else {
                this.handCell = this.handTarget.cell;
  
                this.clickSave = false;
              }
  
              this.handTarget = 0;
              //console.log("oh");
              //console.log(iCanGet);
            }
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                this.tyuk = true;
  
                if (this.fatherFraction.nation === "orc") {
                  this.axeInitialization(
                    this.handTarget,
                    "orc_ballista",
                    this.cell.unit
                  );
                } else {
                  this.axeInitialization(
                    this.handTarget,
                    "ballista",
                    this.cell.unit
                  );
                }
  
                //this.axeInitialization(this.handTarget,"orc_ballista",this.cell.unit);
                //let axe=new Axes(this.firePointX,this.firePointY,"cannon_tower",undefined,this.attack,this.cell.unit,conor,xy);
                this.axe = true;
  
                if (
                  !this.handTarget.warrior &&
                  this.handTarget.unitStatus === "life" &&
                  !this.handTarget.alarmTimer
                ) {
                  this.handTarget.alarmTimer = 500;
                  this.handTarget.agressor = this.cell.unit;
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          isBlocked &&
          this.stepTakt < 1 &&
          this.stepTakt >= 0 &&
          !this.iFight &&
          this.handTarget
        ) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp" &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 0) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
    } else if (this.type === 3) {
      //luchnik checkAliens
  
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopFlyAttack;
      //this.seeing=this.baseSeeing+this.fatherFraction.dopFlySee;
  
      //this.level=1+(this.fatherFraction.dopFlyAttack_level)+
      //(this.fatherFraction.dopFlySee_level);
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.iDoTakt !== 4) {
        this.axe = false;
      }
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
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
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.luchniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.luchniks.splice(this.fatherFraction.luchniks.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeLuchniks.splice(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit),1)};
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //blackBoock
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      /*
  for(let i=0;i<this.animys.length;i++){
  
  if(this.animys[i].type===1){console.log("east");};	
      
  };
  */
  
      if (this.stopTroll) {
        this.stopTroll--;
        this.iFight = false;
        return;
      }
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      /*
  else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
      
    if(this.fatherFraction.freeLuchniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeLuchniks.push(this.cell.unit);};	
      
  };
  */
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      let isBlocked = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        /*
  if(this.fatherFraction.control==="player"&&this.hold_position){
  
  if(this.clickSave&&this.clickSave.handTarget){	
  this.clickSave=false;
  }
  
  //console.log(this.way.length);	
  };
  */
  
        if (
          this.target &&
          (this.target.hp <= 0 ||
            !this.target.cell ||
            this.target.buildready <= 0 ||
            !this.target.visible)
        ) {
          this.target = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          this.way = [];
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 ||
            !this.handTarget.cell ||
            this.handTarget.buildready <= 0 ||
            !this.handTarget.visible)
        ) {
          this.handCell = this.handTarget.cell;
  
          this.handTarget = 0;
          this.iFight = false;
          this.iDoTakt = 0;
          //this.way=[];
        }
  
        isBlocked = this.isBlocked();
  
        //console.log(isBlocked);
  
        ///*
        let hDis2 = false;
  
        if (this.clickSave.handTarget && isBlocked) {
          if (
            !this.clickSave.handTarget.neitral &&
            this.clickSave.handTarget.fatherFraction.union !==
              this.fatherFraction.union
          ) {
            let a = this.clickSave.handTarget.damagePointX - this.damagePointX;
            let b = this.clickSave.handTarget.damagePointY - this.damagePointY;
  
            hDis2 = Math.sqrt(a * a + b * b);
          }
        }
        //*/
  
        if (
          this.clickSave &&
          (!isBlocked || (isBlocked && hDis2 && hDis2 <= this.seeing))
        ) {
          if (this.clickSave.handCell && !isBlocked) {
            this.handTarget = 0;
            this.target = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
            this.stopGetTarget = 50;
  
            if (this.ii_back) {
              this.stopGetTarget = this.ii_back;
            }
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            /////////////
  
            if (
              this.clickSave.handTarget.visible &&
              ((this.clickSave.handTarget.cell.continent &&
                this.clickSave.handTarget.cell.continent ===
                  this.cell.continent) ||
                (!this.clickSave.handTarget.neitral &&
                  this.clickSave.handTarget.fatherFraction.union !==
                    this.fatherFraction.union &&
                  checkAliens(this.cell.unit, this.clickSave.handTarget)))
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
  
              /////////////
  
              this.handTarget = this.clickSave.handTarget;
              this.target = 0;
              this.handCell = 0;
              this.stopGetTarget = 50;
              this.way = [];
              this.targetCell = false;
  
              //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
  
              //console.log("ok");
            }
          }
  
          /*	
      if(this.target){
          
          if(this.clickSave.handCell&&!isBlocked){
              
              this.stopGetTarget=50;
              this.target=0;
              this.handCell=this.clickSave.handCell;
              this.way="go";
              
              console.log("i gooooo");
              
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
      
  //this.stopGetTarget=50;
              //this.handTarget=0;
              this.handTarget=this.clickSave.handTarget;
              this.way=[];	
           this.handCell=0;
           this.targetCell=false;
  };	
      
      
      
  //console.log(this.handTarget.unitName);	
  */
        }
  
        let del = false;
        ///*
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
          if (c <= 250) {
            del = true;
          }
        }
        //*/
  
        if (this.clickSave && this.clickSave.hold) {
          this.clickSave.hold--;
        }
  
        if ((this.clickSave && !this.clickSave.hold) || del) {
          this.clickSave = false;
        }
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
      }
  
      //
  
      //if(this.handTarget){console.log("ok");};
  
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
  
      /////////////////////////////////////////////////// new!!!
  
      let warrior = false;
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        let thc;
  
        if (this.handTarget) {
          let hta = this.handTarget.damagePointX - this.damagePointX;
          let htb = this.handTarget.damagePointY - this.damagePointY;
  
          thc = Math.sqrt(hta * hta + htb * htb);
        }
  
        for (let i = 0; i < this.animys.length; i++) {
          //if(!this.animys[i]){console.log(this.animys); pausa=1;};
  
          let c;
  
          if (this.animys[i] && this.animys[i].damagePointX) {
            let a = this.animys[i].damagePointX - this.damagePointX;
            let b = this.animys[i].damagePointY - this.damagePointY;
  
            c = Math.sqrt(a * a + b * b);
          }
  
          let animy;
  
          if (c) {
            animy = this.animys[i];
          }
  
          if (
            !animy ||
            c > this.dash ||
            !animy.cell ||
            animy.hp <= 0 ||
            !animy.visible ||
            ((!animy.cell.continent ||
              (animy.cell.continent &&
                animy.cell.continent !== this.cell.continent) ||
              (animy.fly && animy.cell.unit)) &&
              !checkAliens(this.cell.unit, animy))
          ) {
            /*
      if(this.animys[i].type===1){
          console.log("delete");
      console.log("dash : "+this.dash);
      console.log("c : "+c);
      pausa=1;
      };
      */
            //console.log("doloy");
            //if(this.fatherFraction.selectUnits.indexOf(this.cell.unit)!==-1&&c>this.dash){console.log("c : "+c);};
  
            this.animys.splice(i, 1);
            i--;
          } else {
            if (
              //(this.fatherFraction.control==="comp"&&c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&(this.handCell||this.handTarget))||(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell)
              this.fatherFraction.control === "player" &&
              ((this.handCell &&
                c <= this.seeing &&
                this.animys[i].warrior &&
                this.animys[i].hp > 0) ||
                (thc &&
                  thc > this.seeing &&
                  c <= this.seeing &&
                  this.animys[i].warrior &&
                  this.animys[i].hp > 0)) &&
              !this.stopGetTarget
            ) {
              //let oh=(c<=this.dash&&this.animys[i].warrior&&!this.target&&this.animys[i].hp>0&&this.handCell);
  
              //console.log("ok");
              warrior = true;
              this.handTarget = 0;
              this.handCell = 0;
              this.way = [];
            }
  
            ///blackBoock
  
            //if(dlt){console.log("doloy");};
  
            //console.log(checkAliens(this.cell.unit,this.animys[i]))
  
            if (
              c &&
              this.target &&
              this.animys[i].persolalNumber === this.target.persolalNumber &&
              c > this.dash
            ) {
              this.target = 0;
              this.way = [];
            }
          }
        }
  
        if (
          this.fatherFraction.control === "comp" &&
          this.animys.length &&
          !this.stopGetTarget
        ) {
          this.handCell = 0;
          this.handTarget = 0;
        }
      }
  
      // ii
      ///*
  
      //let stopBack=false;
  
      //*/
  
      // ii
  
      ///////////////////////////////////////////////////////
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        //||(this.fatherFraction.control==="comp"&&(this.handCell||this.handTarget)&&!this.iFight)
  
        this.stopGetTarget === 0
      ) {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
        //this.stepTakt<1&&this.stepTakt>=0&&!this.handCell&&!this.handTarget&&this.stopGetTarget===0
  
        if (!this.iFight) {
          /////////////////////////
  
          let min = [];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            /*
      if(this.animys[i].type==="tower"){
          tower.push(this.animys[i]);
      }
      else
  */
            if (this.animys[i].warrior) {
              warrior.push(this.animys[i]);
            } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.target
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
          } else {
            this.target = 0;
          }
        } else if (this.iFight) {
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                if (this.fatherFraction.nation === "h") {
                  this.axeInitialization(this.target, "luk", this.cell.unit);
                } else {
                  this.axeInitialization(this.target, "topor", this.cell.unit);
                }
  
                this.tyuk = true;
                this.axe = true;
  
                if (
                  !this.target.warrior &&
                  this.target.unitStatus === "life" &&
                  !this.target.alarmTimer
                ) {
                  this.target.alarmTimer = 500;
                  this.target.agressor = this.cell.unit;
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //if(this.target.unitStatus==="building"&&this.target.buildready<this.target.hpfull&&this.target.buildready>0){
              //this.target.buildready-=15;
              //}
  
              //else  if(this.target.hp>0&&this.target.cell){
              //this.target.hp-=15;
  
              ///			};
  
              //if(this.target.unitStatus==="life"){	if(this.target&&this.target.fatherFraction.activeUnits.indexOf(this.target)===-1){this.target.fatherFraction.activeUnits.push(this.target);};};
              //if(this.target.unitStatus==="building"){	if(this.target&&this.target.fatherFraction.activeBuildings.indexOf(this.target)===-1){this.target.fatherFraction.activeBuildings.push(this.target);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          !this.iFight &&
          this.target &&
          this.target.hp > 0 &&
          this.target.cell
        ) {
          this.iGetTarget = this.checkGetTarget();
        }
  
        //console.log(this.iGetTarget);
  
        if (this.iGetTarget) {
          this.peonGo(this.target);
  
          this.iFight = true;
          this.iGetTarget = false;
  
          this.moveVektor = this.getFightVector(this.target);
          this.getFirePoint();
          //console.log(this.moveVektor);
          this.way = [];
          this.clickSave = false;
        } else {
          if (
            !this.hold_position &&
            !isBlocked &&
            !this.iFight &&
            this.target &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && !this.way[this.way.length - 1].free))
          ) {
            //console.log(this.hold_position);
  
            this.targetCell = this.target.cell.persolalNumber;
  
            let noFree = 1000;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
            /*	
      
       let dis;
   
  if(this.target){	
      let a=this.target.damagePointX-this.damagePointX;
      let b=this.target.damagePointY-this.damagePointY;
      
      dis=Math.sqrt(a*a+b*b);
  };
  */
  
            /*		
  let deep;
  
      if(dis<=300){
          deep=300;
          }
  else if(dis>300&&deep<500){
      deep=500;
  }
  else{
      
      deep=1000;
      
  };		
  
  
  if(!this.target.cell.continent||(this.target.cell.continent&&this.target.cell.continent!==this.cell.continent)){
      deep=100;
      //console.log("ok");
  };
  */
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //dlya luchnik
            /*
  let luchnik=undefined;
  
  
  if(this.target.unitStatus==="life"){luchnik=1;};
  */
            let deep = 10000;
  
            let luchnik = undefined;
  
            if (!this.target.myCells || !this.target.myCells.length) {
              luchnik = 1;
            } else if (this.target.myCells && this.target.myCells.length) {
              luchnik = 3;
              //console.log(this.handTarget);
            }
  
            //console.log(luchnik);
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            getWay(arg, noFree, deep, this.target, luchnik);
          }
        }
      } else if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.handCell &&
        !this.target &&
        this.handTarget
      ) {
        // console.log(this.handTarget);
  
        if (!this.iFight && this.handTarget.hp > 0 && this.handTarget.cell) {
          this.iGetTarget = this.checkGetHandTarget();
  
          //console.log("ok");
        }
  
        if (this.iGetTarget) {
          if (
            !this.handTarget.neitral &&
            this.handTarget.fatherFraction.union !== this.fatherFraction.union
          ) {
            this.peonGo(this.handTarget);
  
            this.iFight = true;
            this.clickSave = false;
  
            this.iGetTarget = false;
  
            this.moveVektor = this.getFightVector(this.handTarget);
  
            this.getFirePoint();
            //console.log(this.firePoint);
            this.way = [];
          } else {
            this.handTarget = 0;
            this.way = [];
            this.handCell = 0;
          }
  
          this.clickSave = false;
        } else {
          //console.log(this.handTarget);
  
          if (
            (!this.way.length || !this.way[this.way.length - 1].free) &&
            !this.iFight
          ) {
            let luchnik = undefined;
  
            if (
              (!this.handTarget.myCells || !this.handTarget.myCells.length) &&
              !this.handTarget.neitral &&
              this.handTarget.fatherFraction.union !== this.fatherFraction.union
            ) {
              luchnik = 1;
            } else if (
              (!this.handTarget.myCells || !this.handTarget.myCells.length) &&
              (this.handTarget.neitral ||
                this.handTarget.fatherFraction.union ===
                  this.fatherFraction.union)
            ) {
              luchnik = 2;
              //console.log(this.handTarget);
            } else if (
              this.handTarget.myCells &&
              this.handTarget.myCells.length &&
              (this.handTarget.neitral ||
                this.handTarget.fatherFraction.union ===
                  this.fatherFraction.union)
            ) {
              luchnik = undefined;
              //console.log(this.handTarget);
            } else if (
              this.handTarget.myCells &&
              this.handTarget.myCells.length &&
              !this.handTarget.neitral &&
              this.handTarget.fatherFraction.union !== this.fatherFraction.union
            ) {
              luchnik = 3;
              //console.log(this.handTarget);
            }
  
            //console.log("go");
  
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
            this.finish = this.handTarget.cell;
            this.sosFin = this.handTarget.cell;
  
            /*		
          let a=this.handTarget.damagePointX-this.damagePointX;
          let b=this.handTarget.damagePointY-this.damagePointY;
          
          let c=Math.sqrt(a*a+b*b);
          
          
      let deep=2000;
  
  ///*
   if(c<500){
       deep=500;
       }
  else if(c<=1000){
      deep=1000;
  }
  //*/
            let deep = 10000;
  
            //console.log(deep);
  
            getWay(arg, 350, glob_deep, this.handTarget, luchnik);
  
            let iCanGet = this.iCanGet;
            this.iCanGet = false;
  
            //console.log(iCanGet);
  
            if (
              !iCanGet ||
              ((!luchnik || luchnik === 2) && this.handTarget.isBlocked())
            ) {
              //console.log("nenenene");
  
              if (this.way.length) {
                this.handCell = this.way[0]; //console.log("go")
  
                if (this.way.length > 3) {
                  this.clickSave = false;
                }
              } else {
                this.handCell = this.handTarget.cell;
                this.clickSave = false;
              }
  
              this.handTarget = 0;
              //console.log("oh");
              //console.log(iCanGet);
            }
          }
        }
  
        //console.log(this.iFight);
  
        if (this.iFight) {
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.iFight = false;
          }
  
          if (this.iGetMyCell && !this.stopTroll) {
            if (this.iDoTaktTimer === 100000) {
              this.iDoTaktTimer = 0;
            }
  
            //iStand
            //console.log(this.iDoTakt);
  
            if (this.iDoTaktTimer % 4 === 0) {
              this.iDoTakt++;
            }
  
            if (this.iDoTakt === 4) {
              //pausa=1;
  
              //x,y,type,target,power
  
              if (!this.axe) {
                //this.axeInitialization(this.handTarget,"topor",this.cell.unit);
  
                if (this.fatherFraction.nation === "h") {
                  this.axeInitialization(this.handTarget, "luk", this.cell.unit);
                } else {
                  this.axeInitialization(
                    this.handTarget,
                    "topor",
                    this.cell.unit
                  );
                }
  
                this.tyuk = true;
                this.axe = true;
  
                if (
                  !this.handTarget.warrior &&
                  this.handTarget.unitStatus === "life" &&
                  !this.handTarget.alarmTimer
                ) {
                  this.handTarget.alarmTimer = 500;
                  this.handTarget.agressor = this.cell.unit;
                }
              }
            }
  
            if (this.iDoTakt === 5) {
              this.axe = false;
              //this.iFight=false;
              this.animTimer = 100;
              this.stopTroll = this.holdTroll;
              //this.cellUpdate();
  
              this.iDoTakt = 0;
  
              //	if(this.handTarget.unitStatus==="building"&&this.handTarget.buildready<this.handTarget.hpfull&&this.handTarget.buildready>0){
              //this.handTarget.buildready-=15;
              //	}
  
              //else  if(this.handTarget.hp>0&&this.handTarget.cell){
              //this.handTarget.hp-=15;
  
              //			};
  
              //if(this.handTarget.unitStatus==="life"){	if(this.handTarget&&this.handTarget.fatherFraction.activeUnits.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeUnits.push(this.handTarget);};};
              //if(this.handTarget.unitStatus==="building"){	if(this.handTarget&&this.handTarget.fatherFraction.activeBuildings.indexOf(this.handTarget)===-1){this.handTarget.fatherFraction.activeBuildings.push(this.handTarget);};};
            }
            this.iDoTaktTimer++;
  
            return;
          }
        }
  
        if (
          isBlocked &&
          this.stepTakt < 1 &&
          this.stepTakt >= 0 &&
          !this.iFight &&
          this.handTarget
        ) {
          this.handTarget = 0;
          this.way = [];
          this.handCell = 0;
        } //////new!!!!?????
      }
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.fatherFraction.control === "comp" &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 0) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
    } else if (this.type === 2) {
      ///////////////////////////////////////////////////////////////////////////////////////////
      //this.attack=this.baseAttack*this.fatherFraction.dopNoFlyAttack;
      //this.panzer=this.basePanzer*this.fatherFraction.dopNoFlyPanzer;
  
      //this.level=1+(this.fatherFraction.dopNoFlyAttack_level)+
      //(this.fatherFraction.dopNoFlyPanzer_level);
      ///////////////////////////////////////////////////////////////////////////////////////////
  
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
      }
      //this.target="dead";
      //iStand
      if (this.target === "dead") {
        this.iDoTaktTimer = -1;
        this.iDoTakt = 0;
        //this.myJoube=0;
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
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.mechniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.mechniks.splice(this.fatherFraction.mechniks.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
            );
          }
          //if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeMechniks.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeMechniks.splice(this.fatherFraction.freeMechniks.indexOf(this.cell.unit),1)};
  
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
  
        //console.log("pizdez");
  
        return;
      }
  
      if (this.stepTakt < 1 && this.stepTakt >= 0 && !this.iFight) {
        if (this.target && (this.target.hp <= 0 || !this.target.cell)) {
          this.target = 0;
          //this.iFight=false;
          this.iDoTakt = 0;
  
          //this.handCell=this.target.cell;
          //this.way="go";
        } else if (
          this.handTarget &&
          (this.handTarget.hp <= 0 || !this.handTarget.cell)
        ) {
          ///*
  
          if (this.fatherFraction.control === "comp") {
            this.handCell = this.handTarget.cell;
            this.way = "go";
  
            this.handTarget = 0;
            //this.iFight=false;
            this.iDoTakt = 0;
          } else {
            if (
              this.memHT &&
              this.memHT.persolalNumber === this.handTarget.persolalNumber
            ) {
              this.handTarget = 0;
              this.way = [];
              this.clickSave = false;
              this.iDoTakt = 0;
            } else {
              this.handCell = this.handTarget.cell;
              this.way = "go";
  
              this.handTarget = 0;
              //this.iFight=false;
              this.iDoTakt = 0;
            }
          }
        }
      }
  
      if (this.fatherFraction.control === "comp") {
        this.dash = 1000;
      } // ii
  
      //////////////////////////////////////////
      ///////////////////////////////////////////////
  
      //else if(this.fatherFraction.control==="comp"&&!this.handCell&&!this.handTarget&&this.stepTakt<1&&this.stepTakt>=0&&this.iDoTakt===0){
  
      // if(this.fatherFraction.freeMechniks.indexOf(this.cell.unit)===-1){this.fatherFraction.freeMechniks.push(this.cell.unit);};
  
      //};
  
      let isBlocked = this.isBlocked();
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        this.iDoTakt === 0 &&
        !this.iFight
      ) {
        //isBlocked=this.isBlocked();
  
        let hDis2 = false;
  
        if (this.clickSave.handTarget) {
          let a = this.clickSave.handTarget.x - this.x;
          let b = this.clickSave.handTarget.y - this.y;
  
          hDis2 = Math.sqrt(a * a + b * b);
        }
  
        if (
          this.clickSave &&
          (!isBlocked || (isBlocked && hDis2 && hDis2 < 80))
        ) {
          if (this.clickSave.handCell) {
            this.target = 0;
            this.handTarget = 0;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = this.clickSave.handCell;
            this.way = "go";
  
            this.stopGetTarget = 50;
  
            if (this.ii_back) {
              this.stopGetTarget = this.ii_back;
            } //
  
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
            //if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
          } else if (
            this.clickSave.handTarget &&
            (!this.handTarget ||
              this.clickSave.handTarget.persolalNumber !==
                this.handTarget.persolalNumber)
          ) {
            this.target = 0;
            this.handTarget = this.clickSave.handTarget;
            this.iDoTakt = 0;
            this.stepTakt = 0;
            this.handCell = 0;
            this.stopGetTarget = 50;
  
            //if(this.fatherFraction.control==="comp"){this.stopGetTarget=50;};
            //if(this.clickSave.wait){this.ii_saveCell=this.cell;};
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
  
        //console.log(this.target);// pausa=1;
  
        let del = false;
  
        if (
          this.fatherFraction.control === "player" &&
          this.clickSave.handTarget
        ) {
          let a = this.handTarget.damagePointX - this.damagePointX;
          let b = this.handTarget.damagePointY - this.damagePointY;
  
          let c = Math.sqrt(a * a + b * b);
  
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
  
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////
  
        if (
          this.stopGetTarget === 0 &&
          (!this.target ||
            (this.target && !this.checkGetTarget()) ||
            !this.target.warrior)
        ) {
          for (let i = 0; i < this.cell.iContaktWith.length; i++) {
            if (
              !this.cell.iContaktWith[i].father.neitral &&
              !this.cell.iContaktWith[i].father.sweeme &&
              this.cell.iContaktWith[i].father.fatherFraction.union !==
                this.fatherFraction.union &&
              this.cell.iContaktWith[i].father.warrior &&
              this.cell.iContaktWith[i].father.hp > 0
            ) {
              this.handTarget = 0; //gameFielg[i][k].unit;
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
      //if(this.stopGetTarget===50){console.log("vot");};
      if (this.stopGetTarget) {
        this.stopGetTarget--;
      }
      //if(this.iGoBack){this.iGoBack--;};
  
      //////////////////////////////////////////////////////////////////////////////// new!!!!
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.iFight //&&!this.iGoBack
      ) {
        for (let i = 0; i < this.animys.length; i++) {
          let c;
  
          if (this.animys[i] && this.animys[i].damagePointX) {
            let a = this.animys[i].damagePointX - this.damagePointX;
            let b = this.animys[i].damagePointY - this.damagePointY;
  
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
            !c ||
            c > this.dash ||
            !this.animys[i].cell ||
            this.animys[i].hp <= 0 ||
            !this.animys[i].cell.continent ||
            this.animys[i].cell.continent !== this.cell.continent
          ) {
            this.animys.splice(i, 1);
            i--;
          }
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////
  
      // ii
  
      if (
        this.fatherFraction.control === "comp" &&
        this.animys.length &&
        !this.ii_back
      ) {
        this.handCell = 0;
        this.handTarget = 0;
      }
  
      // ii
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        ((!this.handCell && !this.handTarget) || this.iNeedTarget) &&
        this.stopGetTarget === 0
      ) {
        let min = [];
  
        //if(this.fatherFraction.fraction==="redOrcs"){console.log(this.iFight);};
  
        let dis;
  
        if (this.target) {
          let a = this.target.damagePointX - this.damagePointX;
          let b = this.target.damagePointY - this.damagePointY;
  
          dis = Math.sqrt(a * a + b * b);
        }
  
        if (
          !this.iFight &&
          (!this.target || (this.target && dis > 120) || !this.target.warrior)
        ) {
          //////////////////////////
  
          //let min=[];
  
          let basickMass;
  
          let life = [];
          let warrior = [];
          let tower = [];
          let els = [];
  
          for (let i = 0; i < this.animys.length; i++) {
            if (!this.animys[i].isBlocked(this.cell.unit)) {
              if (this.animys[i].type === "tower") {
                tower.push(this.animys[i]);
              } else if (this.animys[i].warrior) {
                warrior.push(this.animys[i]);
              } else if (this.animys[i].unitStatus === "life") {
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
            let a = basickMass[i].damagePointX - this.damagePointX;
            let b = basickMass[i].damagePointY - this.damagePointY;
  
            let c = Math.sqrt(a * a + b * b);
  
            if (
              (!min.length || c < min[0]) &&
              c <= this.dash &&
              basickMass[i].hp > 0 &&
              basickMass[i].cell
            ) {
              min = [c, basickMass[i]];
            }
          }
  
          /////////////////////////
  
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
            (this.target &&
              min.length &&
              this.target.persolalNumber !== min[1].persolalNumber) ||
            !this.target
          ) {
            this.targetCell = false;
          } ///!!!!!!!!!!!!!!!!?????????????????
  
          if (min.length) {
            if (
              this.fatherFraction.control === "comp" &&
              !this.ii_attack &&
              !this.handCell &&
              !this.handTarget &&
              !this.way.length &&
              !this.target
            ) {
              //this.ii_saveCell=this.cell;
              this.comeWithMee(min[1]);
            }
  
            this.target = min[1];
            this.handCell = 0;
            this.handTarget = 0;
            //this.way=[];
            this.clickSave = false;
          } else {
            this.target = 0;
          }
        }
  
        //console.log(this.iGetTarget);
        if (this.target) {
          // this.targetCell=this.target.cell.persolalNumber;
  
          if (!this.target.warrior) {
            for (let i = 0; i < this.cell.iContaktWith.length; i++) {
              if (
                !this.cell.iContaktWith[i].father.neitral &&
                this.cell.iContaktWith[i].father.fatherFraction.union !==
                  this.fatherFraction.union &&
                this.cell.iContaktWith[i].father.warrior &&
                this.cell.iContaktWith[i].father.hp > 0
              ) {
                this.handTarget = 0; //gameFielg[i][k].unit;
                this.handCell = 0;
                this.target = this.cell.iContaktWith[i].father;
                this.way = [];
                this.targetCell = false;
                this.clickSave = false;
              }
            }
  
            //this.target=gameFielg[i][k].unit;
            //this.targetCell=false;/////////////////////////////////////////////////////////??????????????????????????????????
          }
  
          //let a=this.target.x-this.x;
          //let b=this.target.y-this.y;
  
          //let c=Math.sqrt(a*a+b*b);
  
          //if(c<=Math.sqrt(50*50+50*50)){
          if (!this.iFight && this.target.hp > 0 && this.target.cell) {
            this.iGetTarget = this.checkGetTarget();
          }
          //};
  
          if (this.iGetTarget) {
            ////////////////////////////////////////////////////////////peon
  
            this.peonGo(this.target);
  
            ////////////////////////////////////////////////////////////peon
  
            this.clickSave = false;
  
            this.moveVektor = this.getFightVector(this.target);
  
            //console.log(this.moveVektor);
  
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
  
            //};
          } else if (
            !this.hold_position &&
            !isBlocked &&
            !this.iFight &&
            this.target &&
            !this.target.isBlocked(this.cell.unit) &&
            (this.targetCell !== this.target.cell.persolalNumber ||
              !this.way.length ||
              (this.way.length && !this.way[this.way.length - 1].free))
          ) {
            //console.log("way");
  
            this.targetCell = this.target.cell.persolalNumber;
  
            let noFree = 350;
  
            this.finish = this.target.cell;
            this.sosFin = this.target.cell;
            //getWay(this.cell.unit,noFree,2000);
  
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
            let deep = 10000;
  
            getWay(arg, noFree, deep, this.target);
          }
  
          this.iGetTarget = false;
  
          if (this.iFight) {
            if (this.iGetMyCell) {
              if (this.iDoTaktTimer === 100000) {
                this.iDoTaktTimer = 0;
              }
  
              //iStand
              //console.log(this.iDoTakt);
  
              if (this.iDoTaktTimer % 4 === 0) {
                this.iDoTakt++;
              }
  
              if (this.iDoTakt === 5) {
                let hp;
  
                this.iFight = false;
                this.animTimer = 100;
  
                //this.cellUpdate();
  
                this.iDoTakt = 0;
  
                let attack = this.attack * rage;
                this.tyuk = true;
  
                if (
                  this.target.unitStatus === "building" &&
                  this.target.buildready < this.target.hpfull &&
                  this.target.buildready > 0
                ) {
                  hp = this.target.buildready;
  
                  this.target.buildready -=
                    attack - (attack * this.target.panzer) / 100;
                } else if (this.target.hp > 0 && this.target.cell) {
                  hp = this.target.hp;
  
                  this.target.hp -= attack - (attack * this.target.panzer) / 100;
                }
                //indexOf
                if (this.target.unitStatus === "life") {
                  ////////////////////
                  if (title.style && hp && hp > 0 && this.target.hp <= 0) {
                    this.fatherFraction.kills++;
                  }
                  ///////////////////////
  
                  if (!this.target.warrior && !this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (this.target && !this.target.active) {
                    this.target.fatherFraction.activeUnits.push(this.target);
                    this.target.active = true;
                  }
                }
                if (this.target.unitStatus === "building") {
                  ////////////////////
                  if (
                    title.style &&
                    hp &&
                    hp > 0 &&
                    (this.target.hp <= 0 || this.target.buildready <= 0)
                  ) {
                    this.fatherFraction.razings++;
                  }
                  ///////////////////////
  
                  if (!this.target.alarmTimer) {
                    this.target.alarmTimer = 500;
                    this.target.agressor = this.cell.unit;
                  }
  
                  if (
                    this.target &&
                    this.target.fatherFraction.activeBuildings.indexOf(
                      this.target
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
        //this.target=0;
  
        //this.target=this.handTarget;
  
        //	if(this.persolalNumber===1433&&this.handTarget.unitStatus==="building"){
        //	console.log(this.handTarget.buildready);
        //	}
        /*
  if((this.handTarget.hp<=0||!this.handTarget.cell||this.handTarget.buildready<=0||
  !this.handTarget)
  &&!this.iFight
  ){this.handTarget=0;this.way=[];};	
      */
  
        ///*
        //console.log(this.handTarget.unitName);
  
        if (!this.iFight && this.handTarget) {
          this.iGetTarget = this.checkGetHandTarget();
        }
        //};
  
        //if(this.handTarget.unitName==="townHoll"){
        //pausa=1;
  
        //console.log(this.iGetTarget);
        //};
        //*/
  
        if (this.iGetTarget) {
          this.memHT = this.handTarget;
  
          ////////////////////////////////////////////////////////////peon
  
          this.peonGo(this.handTarget);
  
          ////////////////////////////////////////////////////////////peon
  
          this.clickSave = false;
  
          this.moveVektor = this.getFightVector(this.handTarget);
  
          //console.log(this.moveVektor);
  
          //this.stopGetTarget=0;
  
          if (
            this.handTarget.neitral ||
            this.handTarget.fatherFraction.union === this.fatherFraction.union
          ) {
            this.handTarget = 0;
            this.way = [];
            this.clickSave = false;
            //console.log("ok");
          } else {
            //if(!this.iFight){
            this.way = [];
            //};
  
            //if(this.iGetMyCell){
            this.iFight = true;
            //this.stopGetTarget=2;
            //};
            this.clickSave = false;
          }
        }
  
        ///*
        else if (
          !this.iFight &&
          this.handTarget &&
          (this.targetCell !== this.handTarget.cell.persolalNumber ||
            (this.way.length && !this.way[this.way.length - 1].free) ||
            !this.way.length)
        ) {
          // console.log("ok");
  
          this.targetCell = this.handTarget.cell.persolalNumber;
  
          noFree = 350;
  
          //deep
  
          //let optimalContaktCell=this.getOptimalContaktCell();
  
          //console.log(this.target);
          this.finish = this.handTarget.cell; //this.target.cell;
          this.sosFin = this.handTarget.cell; //this.target.cell;
  
          getWay(arg, noFree, glob_deep, this.handTarget);
  
          ///*
          let iCanGet = this.iCanGet;
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
              //this.target=0;
              this.targetCell = false;
  
              this.clickSave = false;
            } else {
              this.handCell = this.way[0];
              this.handTarget = 0;
              //this.target=0;
              this.targetCell = false;
  
              if (this.way.length > 3) {
                this.clickSave = false;
              }
            }
  
            //console.log("neeee");
          } else {
            this.iGetTarget = this.checkGetHandTarget();
  
            if (this.iGetTarget) {
              if (
                this.handTarget.neitral ||
                this.handTarget.fatherFraction.union === this.fatherFraction.union
              ) {
                this.handTarget = 0;
                this.way = [];
                this.clickSave = false;
                //console.log("ok");
              } else {
                this.way = [];
                this.iFight = true;
                this.iGetTarget = false;
                this.clickSave = false;
                //this.stopGetTarget=2;
              }
            }
          }
  
          //*/
  
          //console.log("ok");
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
  
      //if(this.fatherFraction.fraction==="blackOrcs"&&this.target){console.log("okokok");};
  
      this.iGetTarget = 0;
  
      if (this.iFight) {
        if (this.iGetMyCell) {
          if (this.iDoTaktTimer === 100000) {
            this.iDoTaktTimer = 0;
          }
  
          //iStand
          //console.log(this.iDoTakt);
  
          if (this.iDoTaktTimer % 4 === 0) {
            this.iDoTakt++;
          }
  
          if (this.iDoTakt === 5) {
            let hp;
  
            this.iFight = false;
            this.animTimer = 100;
  
            //this.cellUpdate();
  
            this.iDoTakt = 0;
  
            let attack = this.attack * rage;
            this.tyuk = true;
  
            if (
              this.handTarget.unitStatus === "building" &&
              this.handTarget.buildready < this.handTarget.hpfull &&
              this.handTarget.buildready > 0
            ) {
              hp = this.handTarget.buildready;
  
              this.handTarget.buildready -=
                attack - (attack * this.handTarget.panzer) / 100;
            } else if (this.handTarget.hp > 0 && this.handTarget.cell) {
              hp = this.handTarget.hp;
  
              this.handTarget.hp -=
                attack - (attack * this.handTarget.panzer) / 100;
            }
            //indexOf
            if (this.handTarget.unitStatus === "life") {
              ////////////////////
              if (title.style && hp && hp > 0 && this.handTarget.hp <= 0) {
                this.fatherFraction.kills++;
              }
              ///////////////////////
  
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
              this.handTarget.unitStatus === "building" &&
              !this.handTarget.neitral
            ) {
              ////////////////////
              if (
                title.style &&
                hp &&
                hp > 0 &&
                (this.handTarget.hp <= 0 || this.handTarget.buildready <= 0)
              ) {
                this.fatherFraction.razings++;
              }
              ///////////////////////
  
              if (!this.handTarget.alarmTimer) {
                this.handTarget.alarmTimer = 500;
                this.handTarget.agressor = this.cell.unit;
              }
  
              if (
                this.handTarget &&
                this.handTarget.fatherFraction.activeBuildings.indexOf(
                  this.handTarget
                ) === -1
              ) {
                this.handTarget.fatherFraction.activeBuildings.push(
                  this.handTarget
                );
              }
            }
          }
          this.iDoTaktTimer++;
  
          return;
        }
      }
  
      ///*
  
      if (
        this.stepTakt < 1 &&
        this.stepTakt >= 0 &&
        !this.iFight &&
        !this.target &&
        //this.readyToOut&&
        this.ii_saveCell &&
        !this.handTarget &&
        !this.way.length &&
        !this.handCell
      ) {
        let a = this.ii_saveCell.x - this.cell.x;
        let b = this.ii_saveCell.y - this.cell.y;
  
        let c = Math.sqrt(a * a + b * b);
  
        if (c > 50) {
          this.clickSave = new ClickSave(0, this.ii_saveCell);
  
          //console.log(this.persolalNumber);
        }
  
        if (c <= 250) {
          this.ii_saveCell = 0;
        }
  
        //console.log(this.persolalNumber);
      }
  
      this.iNeedTarget = false;
  
      //*/
  
      //console.log(this.stopGetTarget);
    } else if (this.type === 1) {
      //cellUpdate
  
      //console.log(this.target);
  
      //getMinDistanse union isBlocked
  
      //*
  
      //if(this.persolalNumber===394){console.log(this.myJoube);};
  
      //if(this.iGetTarget&&this.iDoTakt===4&&this.cell&&this.myJoube==="i build"){this.cellUpdate();};
  
      //if(this.hp<=0){this.hp=0;this.target="dead";};
      //this.target="dead";
      //iStand
      if (this.hp <= 0) {
        this.hp = 0;
        this.target = "dead";
  
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
              1
            );
          }
  
          //if(this.fatherFraction.peoples.indexOf(this.cell.unit)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.batraks.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraks.splice(this.fatherFraction.batraks.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.freeBatraks.indexOf(this.cell.unit)!==-1){this.fatherFraction.freeBatraks.splice(this.fatherFraction.freeBatraks.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.batraksOnGolg.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraksOnGolg.splice(this.fatherFraction.batraksOnGolg.indexOf(this.cell.unit),1)};
          //if(this.fatherFraction.batraksOnWood.indexOf(this.cell.unit)!==-1){this.fatherFraction.batraksOnWood.splice(this.fatherFraction.batraksOnWood.indexOf(this.cell.unit),1)};
          if (this.fatherFraction.selectUnits.indexOf(this.cell.unit) !== -1) {
            this.fatherFraction.selectUnits.splice(
              this.fatherFraction.selectUnits.indexOf(this.cell.unit),
              1
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
  
        //console.log("pizdez");
  
        return;
      }
  
      //*/
  
      if ((this.x === this.cell.x && this.y === this.cell.y) || !this.cell) {
        this.iGetMyCell = true;
      }
  
      /////////////////////////////////////////////////////////////////////
      if (!this.cell) {
        this.iGetTarget = false;
        return;
      }
  
      if (this.waitTime && this.waitTime < 30) {
        this.waitTime--;
        return;
      }
      this.waitTime = 30;
      /////////////////////////////////////////////////////////////////////
  
      //if(this.iGetMyCell&&(this.x!==this.cell.x||this.y!==this.cell.y)){console.log("katastrofen!!!");};
  
      if (this.iDraw > 0) {
        this.iDraw--;
      }
  
      if (
        this.waitTime < 30 &&
        this.target &&
        (this.target.hp <= 0 || this.target.buildready <= 0) &&
        this.cell
      ) {
        this.target = 0;
        //this.fatherFraction
  
        //console.log("ok");
  
        this.speed = 2;
        this.updateSpeed();
      }
  
      if (this.stepTakt < 1 && this.stepTakt >= 0) {
        if (
          this.fatherFraction.control === "player" &&
          this.target &&
          this.iGetTarget &&
          this.target.buildready < this.target.hpfull &&
          this.target.buildready + 20 >= this.target.hpfull &&
          !this.target.voice_complite &&
          this.iDoTaktTimer % 4 === 0 &&
          this.iDoTakt === 4
        ) {
          this.target.voice_complite = true;
  
          this.voice = true;
  
          select_sound(this.cell.unit, "complite");
        }
  
        //////////////////////////////////////////
        /////////////////////////////////////////////
  
        if (this.iDoTakt === 0) {
          if (this.clickSave && this.cell && this.waitTime === 30) {
            if (this.clickSave.handCell) {
              if (
                !this.clickSave.handCell.continent ||
                this.clickSave.handCell.continent !== this.cell.continent
              ) {
                this.clickSave = 0;
              } else {
                this.target = 0;
                this.way = "go";
                this.handCell = this.clickSave.handCell;
                this.iGetTarget = false;
                this.myJoube = 0;
                this.iGoBuild = false;
              }
            } else if (this.clickSave.handTarget) {
              if (
                !this.clickSave.handTarget.cell.continent ||
                this.clickSave.handTarget.cell.continent !== this.cell.continent
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
  
            if (this.target && this.target.unitStatus === "life") {
              this.target = 0;
              this.way = "go";
              this.handCell = this.clickSave.handTarget.cell;
              this.iGetTarget = false;
              this.myJoube = 0;
              this.iGoBuild = false;
            }
          }
  
          this.clickSave = false;
        }
  
        if (
          this.handCell &&
          !this.handCell.free &&
          get_distanse_on_lineyka(this.cell, 50, this.handCell, 50) < 100
        ) {
          //console.log(get_distanse_on_lineyka(this.cell,50,this.handCell,50))
  
          this.handCell = 0;
          this.way = [];
  
          //this.target=0;
        }
  
        /////////////////////////////////////////////
        //////////////////////////////////////////////
  
        //if(	){
        //console.log("ok");
        //};
  
        if (
          this.saveX === this.x &&
          this.saveY === this.y &&
          this.myJoube !== "i build" &&
          this.cell
        ) {
          this.crashOut++;
        } else {
          this.crashOut = 0;
        }
  
        if (this.crashOut === 300) {
          this.target = 0;
          this.way = []; //console.log(this.persolalNumber+" ya otvis");
        }
  
        //if(this.crashOut>0){console.log("ojo");};
  
        this.saveX = this.x;
        this.saveY = this.y;
  
        //if(this.wood){this.target=0;return;};
        this.potentialTarget = 0;
        this.potentialWay = [];
  
        //if(this.info===10){console.log(arg);};
        //if(this.info){this.info--;};
  
        if (this.target) {
          if ((this.target.hp <= 0 || this.target.buildready <= 0) && this.cell) {
            this.target = 0;
            this.iGetTarget = false;
            this.iGoBuild = false;
            this.iDoTakt = 0;
            this.way = [];
  
            return;
            //console.log(this.cell.unit); pausa=1;
          } /////////////////??????new
  
          //if(this.holdToGo<10&&this.stepTakt!==0){console.log("ploho");};
  
          //////////////////////////////////////// kostyl protiv zameraniya
  
          /*
  
  
  if(this.iGetTarget){
      this.holdToGo=10;	
      }
  else{
      
      if(this.iStand){this.holdToGoMem++;}else{this.holdToGoMem=0;};
      
      
      if(this.holdToGoMem>500){console.log("kuku");this.target=0;this.holdToGoMem=0;return;};
      
  };	
  */
  
          ////////////////////////////////////////
  
          //console.log("ok");
  
          ///////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////
  
          //this.myTargetCheck();
  
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
          //console.log(this.target.unitName);
          //if(this.persolalNumber===1433&&this.wood){console.log(this.target);};
  
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
            //
  
            if (!this.iGetTarget) {
              let valide = this.checkValideTarget();
  
              if (valide) {
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  //this.target.lesorub=arg;
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    //console.log("way");
  
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      if (this.fatherFraction.control === "comp") {
                        this.cleared_way_ground();
                      } else {
                        //*
                        this.target.builders = [];
  
                        this.target = 0;
                        this.myJoube = 0;
                        this.way = [];
                        this.iGoBuild = false;
                        //*/
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
              //this.x=this.cell.x;this.y=this.cell.y;
              this.way = [];
            }
  
            if (
              (this.iGetTarget && this.iGetMyCell && this.target) ||
              this.myJoube === "i build"
            ) {
              if (
                this.target &&
                this.target.fatherFraction.control !== this.fatherFraction.control
              ) {
                this.target = 0;
                this.way = [];
                return;
              }
  
              if (
                (this.target.buildready < this.target.hpfull ||
                  this.target.hp < this.target.hpfull) &&
                this.target.buildready > 0 &&
                this.target.hp > 0
              ) {
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
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
  
                //console.log(this.iDoTakt);
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                this.target.hp >= this.target.hpfull &&
                this.myJoube === "i build"
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
          } else if (this.target.unitName === "lesopilka") {
            //console.log(this.cell.unit.target.unitName);pausa=true;
  
            if (!this.iGetTarget) {
              let valide = this.checkValideTarget();
  
              //console.log(valide);return
  
              if (valide) {
                //console.log(this.cell.unit.target.unitName);pausa=true;
  
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  //this.target.lesorub=arg;
                  //this.moveVektor=
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    //console.log("way");
  
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      if (this.fatherFraction.control === "comp") {
                        this.cleared_way_ground();
                      } else {
                        ///*
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
                            //this.target.lesorub=arg;
                          }
                        } else {
                          this.target.builders = [];
  
                          this.target = 0;
                          this.myJoube = 0;
                          this.way = [];
                          this.iGoBuild = false;
                        }
                        //*/
                      }
                    } //
  
                    this.potentialTarget = 0;
                    this.potentialWay = [];
                  }
                }
              } else {
                this.target = this.getTownH_or_Lesopilka(); //getMinDistanse(this.cell.unit,this.fatherFraction.townHolls);
  
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
              //if(this.target.hp<=0||this.target.buildready<=0){this.target=0;this.myJoube=0;};
  
              if (
                this.target.hp < this.target.hpfull &&
                this.target.hp > 0 &&
                this.cell &&
                this.waitTime === 30 &&
                this.workTimeSahta === 100
              ) {
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
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
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
                if (this.iDoTaktTimer % 4 === 0) {
                  this.iDoTakt++;
                }
  
                if (this.iDoTakt === 5) {
                  this.iDoTakt = 0;
  
                  this.target.buildready += 20;
                }
                this.iDoTaktTimer++;
  
                //console.log(this.iDoTakt);
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                this.myJoube === "i build"
              ) {
                this.target.builders = [];
  
                this.target.buildready = this.target.hpfull;
                //console.log(this.fatherFraction.buildingsInBuild[0].builders);
  
                //console.log(this.fatherFraction.buildingsInBuild);
  
                //if(!this.gold){
                this.target = 0;
                this.myJoube = 0;
                this.iDoTakt = 0;
                this.iDoTaktTimer = -1;
                this.iGetTarget = false;
                this.animTimer = 0;
                this.iGoBuild = false;
                //}
                //else{
                //	this.myJoube="shahter";
  
                //	};
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                (this.wood || this.myJoube === "lesorub")
  
                //this.gold
              ) {
                //console.log(this.myJoube);
                //////////////////////////////////////////////////////////////
  
                if (this.target.workers.indexOf(arg) === -1 && this.hp > 0) {
                  this.myJoube = "lesorub";
  
                  for (let k = 0; k < this.contaktCells.length; k++) {
                    //if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
                    gameFielg[this.contaktCells[k].vertikal][
                      this.contaktCells[k].horizont
                    ].iContaktWith.splice(
                      gameFielg[this.contaktCells[k].vertikal][
                        this.contaktCells[k].horizont
                      ].iContaktWith.indexOf(this.contaktCells[k]),
                      1
                    );
                    //};
                  }
                  this.contaktCells = [];
  
                  this.target.workers.push(arg);
                  this.cell.unit = 0;
                  this.cell.free = true;
                  this.workTimeSahta--;
                  this.way = [];
                  this.cell = 0;
                  //this.target.gold-=100;
                  this.in_in = this.target;
                  //this.way=[];wood
                  //this.gold=0;
                  if (
                    this.fatherFraction.activeBuildings.indexOf(this.target) ===
                    -1
                  ) {
                    this.fatherFraction.activeBuildings.push(this.target);
                  }
  
                  this.wood = 0;
  
                  this.fatherFraction.wood +=
                    100 + this.fatherFraction.lesopilkaBonusOnWood;
                  this.fatherFraction.all_wood +=
                    100 + this.fatherFraction.lesopilkaBonusOnWood;
                } else if (this.workTimeSahta > 0) {
                  if (this.target.workers.indexOf(arg) === 0) {
                    this.workTimeSahta--;
                  }
                } else if (!this.workTimeSahta && this.waitTime === 30) {
                  //console.log(this.townHolls[0]);
                  // this.target.cellToOut
  
                  let outCell = this.target.getOutCell();
  
                  //console.log(this.waitTime);
  
                  if (!outCell) {
                    outCell = this.target.extreamGetOutCell();
                  }
  
                  if (outCell) {
                    this.waitTime--;
  
                    //console.log(outCell.outPrioritet+" "+outCell.horizont);
  
                    this.cell = gameFielg[outCell.vertikal][outCell.horizont];
  
                    this.horizont = this.cell.horizont;
                    this.vertikal = this.cell.vertikal;
                    this.x = this.cell.x;
                    this.y = this.cell.y;
                    this.cell.unit = arg;
                    this.cell.free = false;
  
                    this.cellUpdate();
                    //this.animY=0;
  
                    this.moveVektor = outCell.moveVektorOut;
  
                    if (!this.moveVektor) {
                      this.moveVektor = "up";
                    }
                  }
                  //console.log(this.)
  
                  //console.log(arg.horizont+" "+this.horizont)	;
                } else if (!this.workTimeSahta && this.waitTime < 30) {
                  this.waitTime--;
  
                  if (this.waitTime === 0) {
                    if (this.target.workers.length > 1) {
                      this.target.workers[
                        this.target.workers.indexOf(arg) + 1
                      ].workTimeSahta = 30; //////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
  
                    this.target.workers.splice(
                      this.target.workers.indexOf(arg),
                      1
                    );
  
                    this.target = getMinDistanse(
                      arg,
                      allContinents[this.fatherFraction.continent].woods
                    );
                    this.myJoube = "lesorub";
                    this.iGetTarget = false;
                    this.workTimeSahta = 100;
                    this.waitTime = 30;
                    this.speed = 2;
                    this.updateSpeed();
  
                    //console.log(this.fatherFraction.gold);
                    //console.log(batrak.target);
  
                    //this.activeUnits.push(batrak);/////////////////////////////
                    //console.log(this.activeUnits[0]);
  
                    //console.log(this.freeBatraks.indexOf(batrak));
  
                    //if(this.freeBatraks.indexOf(batrak)!==-1){
                    //	this.freeBatraks.splice(this.freeBatraks.indexOf(batrak),1);
                    //};
                  }
                }
  
                ////////////////////////////////////////////////////////
              }
            }
          } else if (this.target.unitName === "wood") {
            //cellUpdate
  
            //console.log("ok");
  
            if (this.wood) {
              //this.target=getMinDistanse(arg,this.fatherFraction.townHolls);
              this.target = this.getTownH_or_Lesopilka();
              this.myJoube = "lesorub";
              this.way = [];
  
              //this.prog(arg);
  
              return;
            }
  
            if (!this.iGetTarget) {
              let valide = this.checkValideTarget();
  
              //console.log(valide);
  
              if (valide) {
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  this.target.lesorub = arg;
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      //console.log("way");
  
                      this.target = this.potentialTarget;
                      this.way = this.potentialWay;
  
                      this.finish = this.target.cell;
                      this.sosFin = this.target.cell;
  
                      if (this.target) {
                        this.iGetTarget = this.checkGetTarget();
                      }
                      //if(this.persolalNumber===1507){console.log(arg);console.log(this.way);console.log(this.target.isBlocked());console.log("tik "+tik);pausa=1;};
  
                      if (this.iGetTarget) {
                        this.way = [];
                        this.target.lesorub = arg;
                      }
                      //return;
                    }
  
                    this.potentialTarget = 0;
                    this.potentialWay = [];
                  }
                }
              } else {
                this.target = getMinDistanse(
                  this.cell.unit,
                  allContinents[this.cell.continent].woods
                );
  
                this.way = [];
  
                this.iGetTarget = false;
  
                //this.prog(arg);
  
                //return;
  
                //////////////////////////////////
  
                /////////////////////////
              }
            }
  
            if (this.iGetTarget) {
              this.x = this.cell.x;
              this.y = this.cell.y;
            }
  
            if (
              (this.iGetTarget && this.iGetMyCell && this.target) ||
              this.myJoube === "i build"
            ) {
              if (freeLandObjects.indexOf(this.target) === -1) {
                freeLandObjects.push(this.target);
              }
  
              //if(this.myJoube!=="i build"){this.holdToGoMem++;}else{this.holdToGoMem=0;};
              //if(this.holdToGoMem>=2){this.holdToGoMem=0;console.log(arg);};
  
              //this.target.lesorub=arg;
  
              if (this.gold) {
                this.gold = 0;
              }
  
              this.myJoube = "i build";
              //this.moveVektor=this.saveMoveVektor;
  
              if (this.iDoTaktTimer === 100000) {
                this.iDoTaktTimer = 0;
              }
  
              //iStand
              //console.log(this.iDoTakt);
  
              if (this.iDoTaktTimer % 4 === 0) {
                if (this.iDoTakt === 3) {
                  this.tyuk = true;
                }
  
                this.iDoTakt++;
              }
  
              if (this.iDoTakt === 5) {
                //this.tyuk=true;
  
                this.iDoTakt = 0;
  
                this.target.hp -= 20;
  
                this.target.vibro = 10;
  
                if (activeFreeLandObjects.indexOf(this.target) === -1) {
                  activeFreeLandObjects.push(this.target);
                }
              }
              this.iDoTaktTimer++;
  
              //console.log(this.target.hp);
  
              if (this.target.hp <= 0) {
                this.target.cell.pen.push(this.target); // dlya otrisovki
  
                this.target.hp = 0;
  
                woods.splice(woods.indexOf(this.target), 1);
  
                //if(activeFreeLandObjects.indexOf(this.target)===-1){activeFreeLandObjects.push(this.target);};
  
                this.wood = 100;
  
                this.target = this.getTownH_or_Lesopilka(); //getMinDistanse(arg,this.fatherFraction.townHolls);/// poka tak
  
                this.myJoube = "lesorub";
                this.iGetTarget = false;
                this.workTimeSahta = 100;
                this.waitTime = 30;
                this.speed = 1.7;
                this.updateSpeed();
  
                //console.log(this.target);
  
                //return;
              }
            }
          } else if (
            this.target.unitName === "farm" ||
            this.target.unitName === "tower"
          ) {
            if (!this.iGetTarget) {
              let valide = this.checkValideTarget();
  
              //console.log(valide);
  
              if (valide) {
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  //this.target.lesorub=arg;
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    //console.log("way");
  
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      if (this.fatherFraction.control === "comp") {
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
              //this.x=this.cell.x;this.y=this.cell.y;
              this.way = [];
            }
  
            if (
              (this.iGetTarget && this.iGetMyCell && this.target) ||
              this.myJoube === "i build"
            ) {
              if (
                this.target &&
                this.target.fatherFraction.control !== this.fatherFraction.control
              ) {
                this.target = 0;
                this.way = [];
              }
  
              if (
                this.target &&
                (this.target.buildready < this.target.hpfull ||
                  this.target.hp < this.target.hpfull) &&
                this.target.buildready > 0 &&
                this.target.hp > 0
              ) {
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
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
  
                //console.log(this.iDoTakt);
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                this.target.hp >= this.target.hpfull &&
                this.myJoube === "i build"
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
          } else if (this.target.unitName === "townHoll") {
            //if(this.persolalNumber===1433&&this.wood){console.log(this.cell.unit);};
            //if(this.iSee===0){console.log("ok");};
  
            if (!this.iGetTarget) {
              //if(!this.way.length){console.log("here");};
  
              let valide = this.checkValideTarget();
  
              //console.log(valide);
  
              if (valide) {
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  //this.target.lesorub=arg;
                  //this.moveVektor=
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    //console.log("way");
  
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      if (this.fatherFraction.control === "comp") {
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
                            //this.target.lesorub=arg;
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
                  this.fatherFraction.townHolls
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
                this.target.fatherFraction.fraction !==
                this.fatherFraction.fraction
              ) {
                this.target = 0;
                this.way = [];
              }
              //if(this.target.hp<=0||this.target.buildready<=0){this.target=0;this.myJoube=0;};
  
              if (
                this.target.hp < this.target.hpfull &&
                this.target.hp > 0 &&
                this.cell &&
                this.waitTime === 30 &&
                this.workTimeSahta === 100
              ) {
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
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
                this.myJoube = "i build";
                //this.moveVektor=this.saveMoveVektor;
  
                if (this.iDoTaktTimer === 100000) {
                  this.iDoTaktTimer = 0;
                }
  
                //iStand
                //console.log(this.iDoTakt);
  
                if (this.iDoTaktTimer % 4 === 0) {
                  this.iDoTakt++;
                }
  
                if (this.iDoTakt === 5) {
                  this.iDoTakt = 0;
  
                  this.target.buildready += 20;
                }
                this.iDoTaktTimer++;
  
                //console.log(this.iDoTakt);
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                this.myJoube === "i build"
              ) {
                this.target.builders = [];
  
                this.target.buildready = this.target.hpfull;
                //console.log(this.fatherFraction.buildingsInBuild[0].builders);
  
                //console.log(this.fatherFraction.buildingsInBuild);
  
                //if(!this.gold){
                this.target = 0;
                this.myJoube = 0;
                this.iDoTakt = 0;
                this.iDoTaktTimer = -1;
                this.iGetTarget = false;
                this.animTimer = 0;
                this.iGoBuild = false;
                //}
                //else{
                //	this.myJoube="shahter";
  
                //	};
              } else if (
                this.target &&
                this.target.buildready >= this.target.hpfull &&
                (this.gold || this.wood)
  
                //this.gold
              ) {
                //console.log(this.myJoube);
                //////////////////////////////////////////////////////////////
  
                if (this.target.workers.indexOf(arg) === -1 && this.hp > 0) {
                  for (let k = 0; k < this.contaktCells.length; k++) {
                    //if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
                    gameFielg[this.contaktCells[k].vertikal][
                      this.contaktCells[k].horizont
                    ].iContaktWith.splice(
                      gameFielg[this.contaktCells[k].vertikal][
                        this.contaktCells[k].horizont
                      ].iContaktWith.indexOf(this.contaktCells[k]),
                      1
                    );
                    //};
                  }
                  this.contaktCells = [];
  
                  this.target.workers.push(arg);
                  this.cell.unit = 0;
                  this.cell.free = true;
                  this.workTimeSahta--;
                  this.way = [];
                  this.cell = 0;
                  this.in_in = this.target;
                  //this.target.gold-=100;
                  if (
                    this.fatherFraction.activeBuildings.indexOf(this.target) ===
                    -1
                  ) {
                    this.fatherFraction.activeBuildings.push(this.target);
                  }
                  //this.way=[];
  
                  if (this.wood) {
                    this.fatherFraction.wood +=
                      100 + this.fatherFraction.lesopilkaBonusOnWood;
                    this.fatherFraction.all_wood +=
                      100 + this.fatherFraction.lesopilkaBonusOnWood;
                    this.wood = 0;
                    this.myJoube = "lesorub";
                  } else {
                    this.gold = 0;
                    this.fatherFraction.gold +=
                      100 + this.fatherFraction.fractionLevelBonusOnGold;
                    this.fatherFraction.all_gold +=
                      100 + this.fatherFraction.fractionLevelBonusOnGold;
                    this.myJoube = "shahter";
                  }
                } else if (this.workTimeSahta > 0) {
                  if (this.target.workers.indexOf(arg) === 0) {
                    this.workTimeSahta--;
                  }
                } else if (!this.workTimeSahta && this.waitTime === 30) {
                  //console.log(this.townHolls[0]);return
                  // this.target.cellToOut
  
                  let outCell = this.target.getOutCell();
  
                  //console.log(this.waitTime);
  
                  if (!outCell) {
                    outCell = this.target.extreamGetOutCell();
                  }
  
                  if (outCell) {
                    this.waitTime--;
  
                    //console.log(outCell.outPrioritet+" "+outCell.horizont);
  
                    this.cell = gameFielg[outCell.vertikal][outCell.horizont];
  
                    this.horizont = this.cell.horizont;
                    this.vertikal = this.cell.vertikal;
                    this.x = this.cell.x;
                    this.y = this.cell.y;
                    this.cell.unit = arg;
                    this.cell.free = false;
  
                    this.cellUpdate();
                    //this.animY=0;
  
                    this.moveVektor = outCell.moveVektorOut;
  
                    if (!this.moveVektor) {
                      this.moveVektor = "up";
                    }
                  }
                  //console.log(this.)
  
                  //console.log(arg.horizont+" "+this.horizont)	;
                } else if (!this.workTimeSahta && this.waitTime < 30) {
                  this.waitTime--;
  
                  if (this.waitTime === 0) {
                    if (this.target.workers.length > 1) {
                      this.target.workers[
                        this.target.workers.indexOf(arg) + 1
                      ].workTimeSahta = 30; //////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
  
                    this.target.workers.splice(
                      this.target.workers.indexOf(arg),
                      1
                    );
  
                    if (this.myJoube === "shahter") {
                      this.myJoube = "shahter";
                      this.target = getMinDistanse(
                        arg,
                        allContinents[this.fatherFraction.continent].shahts
                      );
                      this.iGetTarget = false;
                      this.workTimeSahta = 100;
                      this.waitTime = 30;
                      this.speed = 2;
                      this.updateSpeed();
                      this.iSee = "no";
                    } else {
                      this.target = getMinDistanse(
                        arg,
                        allContinents[this.fatherFraction.continent].woods
                      );
                      this.myJoube = "lesorub";
                      this.iGetTarget = false;
                      this.workTimeSahta = 100;
                      this.waitTime = 30;
                      this.speed = 2;
                      this.updateSpeed();
                    }
  
                    //
  
                    //console.log(this.fatherFraction.gold);
                    //console.log(batrak.target);
  
                    //this.activeUnits.push(batrak);/////////////////////////////
                    //console.log(this.activeUnits[0]);
  
                    //console.log(this.freeBatraks.indexOf(batrak));
  
                    //if(this.freeBatraks.indexOf(batrak)!==-1){
                    //	this.freeBatraks.splice(this.freeBatraks.indexOf(batrak),1);
                    //};
                  }
                }
  
                ////////////////////////////////////////////////////////
              }
            }
          } else if (this.target.unitName === "shahta") {
            //if(this.hp<=0){console.log("huynya");return};
  
            if (
              this.gold &&
              this.workTimeSahta === 100 &&
              this.waitTime === 30 &&
              this.cell
            ) {
              this.target = getMinDistanse(arg, this.fatherFraction.townHolls);
              this.myJoube = "shahter";
              this.way = [];
  
              //this.prog(arg);
  
              return;
            }
  
            if (!this.iGetTarget) {
              let valide = this.checkValideTarget();
  
              //console.log(valide);
  
              if (valide) {
                this.iGetTarget = this.checkGetTarget();
  
                if (this.iGetTarget) {
                  this.way = [];
                  //this.target.lesorub=arg;
                } else {
                  if (!this.way.length || !this.way[this.way.length - 1].free) {
                    //console.log("way");
                    this.potentialTarget = 0;
                    this.potentialWay = [];
  
                    let iCanGet = this.getWayToTargetAndCheckGetting(arg);
  
                    if (!iCanGet) {
                      if (this.fatherFraction.control === "comp") {
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
                          //this.target.lesorub=arg;
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
                  allContinents[this.fatherFraction.continent].shahts
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
                //console.log("stop");
  
                return;
              }
  
              //console.log(this.workTimeSahta);
  
              if (
                this.target.workers.indexOf(arg) === -1 &&
                this.target.gold > 0
              ) {
                for (let k = 0; k < this.contaktCells.length; k++) {
                  //if(gameFielg[this.contaktCells[k].vertikal][this.contaktCells[k].horizont].iContaktWith.indexOf(this.contaktCells[k])!==-1){
                  gameFielg[this.contaktCells[k].vertikal][
                    this.contaktCells[k].horizont
                  ].iContaktWith.splice(
                    gameFielg[this.contaktCells[k].vertikal][
                      this.contaktCells[k].horizont
                    ].iContaktWith.indexOf(this.contaktCells[k]),
                    1
                  );
                  //};
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
  
                //this.etHome=true;
  
                //if(activeFreeLandObjects.indexOf(this.target)===-1){
  
                //	activeFreeLandObjects.push(this.target);
  
                //};
              }
              ///*
              else if (this.workTimeSahta > 0) {
                if (this.target.workers.indexOf(arg) === 0) {
                  this.workTimeSahta--;
                }
              } else if (!this.workTimeSahta && this.waitTime === 30) {
                //console.log(this.townHolls[0]);
                // this.target.cellToOut
  
                let outCell = this.target.getOutCell();
  
                //console.log(this.waitTime);
                if (!outCell) {
                  outCell = this.target.extreamGetOutCell();
                }
  
                if (outCell) {
                  this.waitTime--;
  
                  //console.log(outCell.outPrioritet+" "+outCell.horizont);
  
                  this.cell = gameFielg[outCell.vertikal][outCell.horizont];
  
                  this.horizont = this.cell.horizont;
                  this.vertikal = this.cell.vertikal;
                  this.x = this.cell.x;
                  this.y = this.cell.y;
                  this.cell.unit = arg;
                  this.cell.free = false;
  
                  this.cellUpdate();
                  //this.animY=525;
  
                  this.moveVektor = outCell.moveVektorOut;
  
                  if (!this.moveVektor) {
                    this.moveVektor = "up";
                  }
                }
                //console.log(this.moveVektor)
  
                //console.log(arg.horizont+" "+this.horizont)	;
              } else if (!this.workTimeSahta && this.waitTime < 30) {
                this.waitTime--;
  
                if (this.waitTime === 0) {
                  if (
                    this.target.gold === 0 &&
                    this.target.workers.length === 1 &&
                    this.target.hp > 0
                  ) {
                    this.target.hp = 0;
                    activeFreeLandObjects.push(this.target);
                    //freeLandObjects.splice(freeLandObjects.indexOf(this.target),1);
                    //console.log("nononon");
                  }
  
                  if (this.target.workers.length > 1) {
                    this.target.workers[
                      this.target.workers.indexOf(arg) + 1
                    ].workTimeSahta = 30; ///////////////////////////////////////!!!!!!!!!!!!!!!!!!
                  }
  
                  this.target.workers.splice(this.target.workers.indexOf(arg), 1);
  
                  this.target = getMinDistanse(
                    arg,
                    this.fatherFraction.townHolls
                  ); //this.fatherFraction.townHolls[0];
                  this.iGetTarget = false;
                  this.workTimeSahta = 100;
                  this.waitTime = 30;
                  this.speed = 1.7;
                  this.updateSpeed();
                  this.iSee = "no";
                }
              }
  
              //*/
              //this.workTimeSahta--;
              //console.log(this.target.workers[0]);
            }
          } //shahta
        }
  
        this.nockNokc = false;
      }
    }
  
    //console.log(this.workTimeSahta)
  
    //if(this.info===10){console.log(arg);};
  
    if (this.iSee === 0) {
      this.iSee = 350;
    }
    if (this.iSee === "no") {
      this.iSee = 0;
    }
  
    //console.log("ok");
  
    this.goWay(arg);
    //this.iStand=false;
  
    //if(this.info===10){console.log(arg);};
  
    //if(this.nockNokc){this.iStand=true;};
    //this.nockNokc=false;
    //};
  };