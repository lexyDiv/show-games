/* eslint-disable no-lonely-if */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-undef */
Unit.prototype.prog = function (arg) {
  // this.mana=100;
  // if(this.type!=="transport"){console.log(this.active);}; return target handTarget
  // iin ii_saveCell hand alive_warriors
  // ii_abort continent speed born_cell clickSave target oil_tanker way

  // if(!this.fatherFraction.attack&&this.magickTarget){console.log(this.persolalNumber);}; clickSave

  // if(this.warrior&&this.handTarget){this.handTarget.hp=0;};

  // if(this.ii_attack){this.ii_saveCell=false;}; get_distanse_on_lineyka

  /// //////////////////////// ii_way_reset revers

  /// /////////////////////

  this.tyuk = false;
  this.tyuk_rage = false;
  // this.tyuk_magick=false;

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
      this.stepTakt < 1
        && this.stepTakt >= 0
        && this.cell
        && this.hp > 0
        && !this.iFight
        && !this.anim_magick_timer
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
        this.clickSave
          && this.clickSave.handTarget
          && this.clickSave.handTarget.sweeme
          && this.clickSave.handTarget.fatherFraction.fraction
            === this.fatherFraction.fraction
          && this.clickSave.handTarget.type === 'transport'
          && this.clickSave.handTarget.landing
          && this.clickSave.handTarget.landing.landCells.length
          && this.clickSave.handTarget.landing.landCells[0].continent
            === this.cell.continent
          && this.clickSave.handTarget.passagers.length < 9
          && this.clickSave.handTarget.hp > 0
      ) {
        const ran = Math.floor(Math.random() * 2);

        const cell = this.clickSave.handTarget.landing.landCells[ran];

        if (this.fatherFraction.control === 'player') {
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
        this.target.neitral
          || this.target.buildready >= this.target.hpfull
          || this.target.hp <= 0
      ) {
        this.iGoBuild = false;
      }

      if (this.target.unitName && this.target.unitName === 'wood') {
        this.mw = this.target;
      }
    }

    if (this.hp <= 0 && this.mw && this.mw.hp > 0) {
      if (
        this.mw.lesorub
          && this.mw.lesorub.persolalNumber === this.persolalNumber
      ) {
        this.mw.lesorub = 0;
        this.mw = false;

        // console.log("!!!!!!!!!!!!!!!!!");
      }
    }

    if (this.stepTakt < 1 && this.stepTakt >= 0) {
      if (this.way.length && this.cell && this.peon_s < 150) {
        if (
          !this.way[this.way.length - 1].free
            && this.way[this.way.length - 1].unit
            && this.way[this.way.length - 1].unit.type === 1
            && this.way[this.way.length - 1].unit.unitStatus === 'life'
            && this.way[this.way.length - 1].unit.fatherFraction.fraction
              === this.fatherFraction.fraction
            && this.way[this.way.length - 1].unit.way.length
            && this.target
            && this.way[this.way.length - 1].unit.target
            && this.way[this.way.length - 1].unit.target.persolalNumber
              === this.target.persolalNumber
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
      // console.log(this.agressor);

      this.fatherFraction.alarms.push(
        new Alarm(this.agressor, 1500, this.cell.unit),
      );

      this.agressor = 0;
    }

    this.alarmTimer--; // console.log("alarm");
  }

  /// ////////////////////////////////////////////////////////////////////////////////
  /// //////////////////////////////////////////////////////////////////////////////////////////////

  this.active = true;

  // indexOf

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

  if (this.type === 1
  && (this.iGoBuild || this.fatherFraction.control === 'player')
  && this.target && this.target.hp === this.target.hpfull
  // &&this.iGetTarget
  ) {
    this.target.buildready = this.target.hpfull;
    this.target = 0;
    this.iGoBuild = false;
    this.iGetTarget = false;
  }

  if (this.gabarit === 50 && this.cell) {
    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.gabarit === 100) {
    this.damagePointX = this.cell.x + 50;
    this.damagePointY = this.cell.y;
  }

  // fatherFraction
  // console.log(this.smotr);
  // myReset

  if (this.myReset >= 20) {
    this.way = [];
  }
  if (!this.way.length) {
    this.handCell = 0;
  }
  if ((this.x === this.cell.x && this.y === this.cell.y) || !this.cell) {
    this.iGetMyCell = true;
  }

  /// ////////////////////////////////// fly!!!!!!!!!!!!!!!
  /// *

  if (this.warrior) {
    if (!this.cell) {
      this.way = [];
      this.handCell = 0;
      this.handTarget = 0;
      this.clickSave = false;
      this.animys = [];
      this.target = 0;
      this.stepTakt = 0;
      // console.log("need out");
      return;
    }

    if (
      this.stepTakt < 1
        && this.stepTakt >= 0
        && this.clickSave
        && this.clickSave.handTarget
        && this.clickSave.handTarget.sweeme
        && this.clickSave.handTarget.fatherFraction.fraction
          === this.fatherFraction.fraction
        && this.clickSave.handTarget.type === 'transport'
        && this.clickSave.handTarget.landing
        && this.clickSave.handTarget.landing.landCells.length
        && this.clickSave.handTarget.landing.landCells[0].continent
          === this.cell.continent
        && this.clickSave.handTarget.passagers.length < 9
        && this.clickSave.handTarget.hp > 0
    ) {
      const ran = Math.floor(Math.random() * 2);

      const cell = this.clickSave.handTarget.landing.landCells[ran];

      if (this.fatherFraction.control === 'player') {
        this.p_transport = this.clickSave.handTarget;
        this.clickSave = new ClickSave(0, cell, undefined, 1000);
        this.iin = false;

        // console.log("here");
      } else {
        this.clickSave = new ClickSave(0, cell);
        this.iin = false;
      }
    }
  }

  if (!this.iCanGetFly) {
    if (
      this.clickSave
        && this.clickSave.handTarget
        && this.clickSave.handTarget.fly
    ) {
      this.clickSave = 0;
    }
  }

  if (!this.iCanGetSweem && this.type !== 'oil_tanker') {
    if (
      this.clickSave
        && this.clickSave.handTarget
        && this.clickSave.handTarget.sweeme
    ) {
      this.clickSave = 0;
    }
  }

  if (
    this.type !== 'ballista'
      && this.type !== 3
      && this.gabarit === 50
      && this.clickSave
      && ((this.clickSave.handTarget
        && this.clickSave.handTarget.cell
        && ((this.clickSave.handTarget.cell.continent
          && this.clickSave.handTarget.cell.continent !== this.cell.continent)
          || (this.clickSave.handTarget.my_continent
            && this.clickSave.handTarget.my_continent !== this.cell.continent)))
        || (this.clickSave.handCell && this.clickSave.handCell.sea))
      // &&
      // (this.clickSave.handTarget.cell.continent!==this.cell.continent)
  ) {
    this.clickSave = 0;
  }

  //* /
  /// /////////////////////////////////

  // indexOf

  if (this.fatherFraction.control === 'player' && this.hp > 0) {
    // hold_position

    if (this.stepTakt < 1 && this.stepTakt >= 0) {
      if (
        !this.fly
          && this.clickSave
          && this.clickSave.handTarget
          && (this.clickSave.handTarget.type === 'gora'
            || this.clickSave.handTarget.cell.stena)
      ) {
        const cells = [];

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
              const cell = gameFielg[i][k];

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
            const a = this.clickSave.handTarget.damagePointX - (cells[i].x + 25);
            const b = this.clickSave.handTarget.damagePointY - (cells[i].y + 25);

            const c = Math.sqrt(a * a + b * b);

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
      /// ///////////////////////////////////////

      if (this.canHold && (this.handCell || this.handTarget)) {
        let way;

        if (
          !this.hold_position
            && this.way.length
            && this.way[this.way.length - 1].unit
            && this.way[this.way.length - 1].unit.way.length
            && this.way[this.way.length - 1].unit.fatherFraction.union
              === this.fatherFraction.union
        ) {
          way = this.way[this.way.length - 1].unit.way;
        }

        if (
          way
            && this.way[this.way.length - 1].unit.speed >= this.speed
            && this.way.length > 10
            && get_distanse_on_lineyka(this.way[0], 50, way[0], 50) <= 150
        ) {
          this.need_return = true;

          // console.log("stp");
          // return;
        }
      }

      /// ///////////////////////////////////////////////////////////

      if (this.p_transport) {
        if (
          (this.clickSave
              && this.clickSave.handTarget
              && this.clickSave.handTarget.type !== 'transport')
            || (this.clickSave
              && this.clickSave.handCell
              && this.p_transport.landing
              && this.p_transport.landing.landCells.length
              && this.clickSave.handCell.persolalNumber
                !== this.p_transport.landing.landCells[0].persolalNumber
              && this.clickSave.handCell.persolalNumber
                !== this.p_transport.landing.landCells[1].persolalNumber)
            || (this.handCell
              && this.p_transport.landing
              && this.p_transport.landing.landCells.length
              && this.handCell.persolalNumber
                !== this.p_transport.landing.landCells[0].persolalNumber
              && this.handCell.persolalNumber
                !== this.p_transport.landing.landCells[1].persolalNumber)
            || this.handTarget
            || this.target
        ) {
          this.p_transport = false;
        }

        if (
          !this.iFight
            && this.cell
            && !this.stopTroll
            && !this.anim_magick_timer
            && !this.magickTarget
            && this.p_transport.landing
            && this.p_transport.hp > 0
            && this.p_transport.landing.landCells.length
            && this.p_transport.passagers.length < 9
            && this.p_transport.landing.landCells[0].continent
              === this.cell.continent
        ) {
          if (
            this.cell.persolalNumber
                === this.p_transport.landing.landCells[0].persolalNumber
              || this.cell.persolalNumber
                === this.p_transport.landing.landCells[1].persolalNumber
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
                  1,
                );
              }
            }

            this.p_transport.passagers.push(this.cell.unit);

            this.iin = false;

            this.cell.free = true;
            this.cell.unit = 0;
            this.cell = 0;

            // console.log(unit);
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
      this.stepTakt < 1
        && this.stepTakt >= 0
        // &&
        // this.fatherFraction.attack
        && !this.fly
        && !this.sweeme
        && this.warrior
        // &&
        //! this.animys.length
        && this.hold_position
        && this.way.length
        && !this.way[this.way.length - 1].free
        && this.way[this.way.length - 1].unit
        && !this.way[this.way.length - 1].unit.neitral
        && this.way[this.way.length - 1].unit.fatherFraction.union
          === this.fatherFraction.union
        && ((this.way[this.way.length - 1].unit.way.length
          && this.way[this.way.length - 1].unit.hold_position
          && this.way[this.way.length - 1].unit.hold_position
            === this.hold_position)
          || (!this.way[this.way.length - 1].unit.way.length
            && this.way[this.way.length - 1].unit.hold_position
            && this.way[this.way.length - 1].unit.hold_position
              === this.hold_position))
        && this.way[this.way.length - 1].unit.warrior
        // &&
        // this.way[this.way.length-1].unit.ii_attack
        && this.iWaitMyBrosReset < 30

    // &&
    // this.way[this.way.length-1].unit.way[this.way[this.way.length-1].unit.way.length-1].persolalNumber!==this.cell.persolalNumber
    ) {
      if (!this.way[this.way.length - 1].unit.way.length) {
        this.iNeedFreeWay = true;
        this.iWaitMyBrosReset = 31;
      }

      // console.log("stop");

      // this.x=this.cell.x;
      // this.y=this.cell.y;

      this.iWaitMyBrosReset++;

      // return;

      this.need_return = true;
    } else {
      this.iWaitMyBrosReset = 0;
    }
  }

  if (this.fatherFraction.control === 'comp') {
    const takt_ok = this.stepTakt < 1 && this.stepTakt >= 0;

    if (takt_ok) {
      if (this.warrior && !this.stopTroll && this.gabarit === 50 && this.cell) {
        if (
          this.cell.fraction
            && this.cell.fraction === this.fatherFraction.fraction
            && !this.revers
        ) {
          this.ii_saveCell = false;
        }

        if (!this.stopGetTarget || this.ii_attack) {
          this.ii_back = false;
          this.stopGetTarget = 0;
        }
        /// //////////////////////// BACK

        if (this.stopGetTarget > 2) {
          this.animys = [];
        }

        if (
          !this.ii_attack
            && this.type !== 'mag'
            && this.target
            && !this.iFight
            && this.cell.continent === this.born_cell.continent
        ) {
          if (this.target.type === 'tower' && this.type !== 'ballista') {
            this.target = 0;
            // this.handTarget=0;
            this.way = [];
            this.stopGetTarget = 2;
            // this.clickSave=new ClickSave(0,this.born_cell,0,0,1000);
            this.ii_saveCell = this.born_cell;
            this.ii_back = 400;
            // this.console=true;

            // this.ii_saveCell=false;
          } else {
            //*

            if (
              !this.fatherFraction.stop_back
                && !this.target.fly
                && this.target.warrior
                && this.target.type !== 'ballista'
              /// //////////////////////////////////////////////

                && (!this.target.target || this.target.target.warrior)
                /// //////////////////////////////////////////////

                && this.target.cell
                && this.target.unitStatus === 'life'
                && !this.target.hold_position
                && get_distanse_on_lineyka(this.cell, 50, this.born_cell, 50)
                  > 150
                && (!this.target.cell.fraction
                  || this.target.cell.fraction !== this.fatherFraction.fraction)
            ) {
              // console.log("here");

              const ran = Math.floor(Math.random() * 7);

              if (!ran) {
                // this.clickSave=new ClickSave(0,this.born_cell);

                this.way = [];
                this.stopGetTarget = 2;
                // this.clickSave=new ClickSave(0,this.born_cell,0,0,1000);
                this.ii_saveCell = this.born_cell;

                this.target = 0;
                this.way = [];
                this.ii_back = 150 + Math.floor(Math.random() * 150);
              }
            }

            //* /
          }
        }

        /// ////////////////////////

        if (
          this.way.length
            && !this.animys.length
            && !this.iWaitMyBrosReset
            && this.iStand
        ) {
          this.ii_way_reset++;
        } else {
          this.ii_way_reset = 0;
        }

        if (this.ii_way_reset >= 240) {
          this.way = [];
          // console.log(this.type+" GOGOGOGOGOGOGOGOGOG");
        }
      }

      if (
        this.revers
          && this.cell
          && this.cell.fraction === this.fatherFraction.fraction
      ) {
        this.revers = false;
      }

      /// ////////////////////////////////

      if (
        this.sweeme
      // &&this.type!=="transport"
      ) {
        if (!this.animys.length) {
          this.hold_position = this.fatherFraction.fraction;
          this.goGroop_sweeme = true;
        } else {
          this.hold_position = false;
          this.goGroop_sweeme = false;
        }
      }

      /// //////////////////////////////////////////////

      if (!this.born_cell) {
        this.born_cell = this.cell;
      }

      if (
        !this.ii_attack
          && (this.target || this.stopTroll)
          && this.warrior
          && !this.ii_saveCell
      ) {
        this.ii_saveCell = this.born_cell;
      }

      // if(!this.animys.length){this.magickTarget=0;};

      // if(this.type!==1&&this.born_cell&&!this.ii_attack&&this.cell.continent&&this.cell.continent===this.born_cell.continent){this.ii_saveCell=this.born_cell;};

      if (
      // takt_ok
      // &&
        this.transport
          // &&
          // this.handCell
          && this.cell
          && (this.transport.passagers.length === 9
            || this.transport.hp <= 0
            || (this.transport.landing && !this.transport.landing.iGetLand)
            || this.target)
      ) {
        this.handCell = 0;
        this.way = [];
        this.transport = false;
        this.ii_saveCell = this.born_cell;
        this.iin = false;
        this.ii_attack = false;

        // this.fatherFraction.attack.warriors_flot_reserv--;
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
      takt_ok
        && (this.type !== 'mag' || this.mana === 100)
        && !this.fly
        && !this.sweeme
        && this.warrior
        && !this.animys.length
        && !this.magickTarget
        // &&
        //! this.ii_saveCell
        // &&
        // this.ii_attack
        && this.way.length
        && !this.way[this.way.length - 1].free
        && this.way[this.way.length - 1].unit
        && !this.way[this.way.length - 1].unit.neitral
        && this.way[this.way.length - 1].unit.fatherFraction.union
          === this.fatherFraction.union
        && this.way[this.way.length - 1].unit.way
        && (this.way[this.way.length - 1].unit.way === 'go'
          || this.way[this.way.length - 1].unit.way.length)
        && this.way[this.way.length - 1].unit.warrior
        && this.way[this.way.length - 1].unit.speed > 1 //! !!!!!!!!!!!!!!!!!!!!!
        // &&
        // this.way[this.way.length-1].unit.ii_attack
        && this.iWaitMyBrosReset < 200
        && this.way[this.way.length - 1].unit.way[
          this.way[this.way.length - 1].unit.way.length - 1
        ].persolalNumber !== this.cell.persolalNumber
    ) {
      this.x = this.cell.x;
      this.y = this.cell.y;

      this.stepTakt = 0;

      this.iWaitMyBrosReset++;

      return;
    }
    this.iWaitMyBrosReset = 0;

    /// ////////////////////////////////////////////////////////////////////////////////////////////////// WAY

    if (takt_ok && this.ii_index && this.cell && this.cell.ii_fractions_way) {
      const { index } = this.cell.ii_fractions_way[this.fatherFraction.persolalNumber];

      // console.log(this.ii_index); pausa=1;

      if (index && index <= this.ii_index) {
        this.ii_index = index - 1;

        if (this.ii_index < 0) {
          this.ii_index = 0;
        }

        this.clickSave = new ClickSave(
          0,
          this.fatherFraction.attack.ii_way[this.ii_index],
        );

        // console.log("here");
      }
    }

    /// ////////////////////////////////////////////////////////////////////////////////////////////////////
  }

  if (this.hp <= 0) {
    this.ii_saveCell = false;
  }

  // this.personalProg && this.personalProg(arg)

  if (this.type === 'mag') {
    this.personalProgMag(arg, rage);
  } else if (this.type === 'turtle') {
    this.personalProgTurtle(arg, rage);
    return;
  } else if (this.type === 'linkor') {
    this.personalProgLinkor(arg, rage);
    return;
  } else if (this.type === 'distroer') {
    this.personalProgDistroer(arg, rage);
    return;
  } else if (this.type === 'oil_tanker') {
    this.personalProgTanker(arg, rage);
    return;
  } else if (this.type === 'transport') {
    this.personalProgTransport(arg, rage);
    return;
  } else if (this.type === 'dragoon') {
    this.personalProgDragoon(arg, rage);
    return;
  } else if (this.type === 'rizar') {
    this.personalProgRizar(arg, rage);
  } else if (this.type === 'ballista') {
    this.personalProgBallista(arg, rage);
  } else if (this.type === 3) {
    this.personalProgElf(arg, rage);
  } else if (this.type === 2) {
    this.personalProgSwordMan(arg, rage);
  } else if (this.type === 1) {
    this.personalProgPeon(arg, rage);
  }

  // console.log(this.workTimeSahta)

  // if(this.info===10){console.log(arg);};

  if (this.iSee === 0) {
    this.iSee = 350;
  }
  if (this.iSee === 'no') {
    this.iSee = 0;
  }

  // console.log("ok");

  this.goWay(arg);
  // this.iStand=false;

  // if(this.info===10){console.log(arg);};

  // if(this.nockNokc){this.iStand=true;};
  // this.nockNokc=false;
  // };
};
