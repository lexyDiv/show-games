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

Unit.prototype.personalProgTransport = function (arg, rage) {
  // ii_abort landCells animys

  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';
  }
  // this.target="dead";
  // iStand
  if (this.target === 'dead') {
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

    if (this.distroyTimer % 10 === 0) {
      this.animY += 100;
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

    // console.log("pizdez");

    return;
  }

  // console.log(this.animys.length)

  this.damagePointX = this.cell.x + 50;
  this.damagePointY = this.cell.y;

  // &&!isBlocked

  if (this.ii_aliss) {
    this.ii_aliss--;
  }

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    if (
      this.animys.length
      && this.passagers.length
      && this.fatherFraction.attack
      && !this.ii_aliss
      && this.way.length
      // &&
      // this.fatherFraction.fraction==="blackOrcs"
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
            obj
            && obj.continent
            && obj.continent
              === this.fatherFraction.attack.finish_cell.continent
            && obj.free
          ) {
            this.clickSave = new ClickSave(0, obj);
            this.passagers_out = true;
            br = true;

            // console.log("okkokokokoko");

            break;
          }
        }

        if (br) {
          break;
        }
      }
    }

    this.animys = []; /// ///////////!!!!!!!!!!!!!!!!!

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
            && gameFielg[v][h].unit.fatherFraction.fraction
              === this.fatherFraction.fraction
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

    // if(this.terpenie>=150){this.terpenie=0;};

    // pausa=1

    if (this.clickSave && this.clickSave.handCell) {
      this.spe = this.clickSave.handCell;

      // console.log("ok");
      if (
        this.clickSave.handCell.sea
        && this.clickSave.handCell.sea === this.cell.sea
        && this.spe.persolalNumber !== this.cell.persolalNumber
      ) {
        this.landing = false;
        this.handTarget = 0;
        this.target = 0;
        this.handCell = this.clickSave.handCell;
        this.way = 'go';
        this.tardetLandCell = false;
      } else if (this.clickSave.handCell.continent) {
        if (
          allContinents[this.clickSave.handCell.continent].my_seas[
            this.cell.sea
          ]
        ) {
          // console.log(allContinents[this.clickSave.handCell.continent])
          // console.log(allSeas[this.cell.sea])

          /// //////////

          this.landing = {
            base_cell: this.clickSave.handCell,
            landCells: [],
            passagers_out_cells: [],
          };

          this.way = [];
          this.tardetLandCell = false;
          // console.log("land");

          /// ////////////
        } else {
          this.clickSave = 0;
        }
      }
    }

    this.clickSave = false;

    if (this.landing) {
      if (
        !this.tardetLandCell
        || !this.checkGoodLandingCell(this.tardetLandCell)
      ) {
        this.tardetLandCell = this.getMy_landing_cell();

        this.way = [];

        // console.log(!this.checkGoodLandingCell(this.tardetLandCell))
        // if(this.persolalNumber===143){console.log(!this.checkGoodLandingCell(this.tardetLandCell));};
      } else {
        if (
          this.cell.persolalNumber !== this.tardetLandCell.persolalNumber
          && !this.way.length
          // ||(this.way[this.way.length-1].persolalNumber!==this.tardetLandCell.persolalNumber)
        ) {
          this.handTarget = 0;
          this.target = 0;
          this.handCell = this.tardetLandCell;
          this.spe = this.tardetLandCell;
          this.way = 'go';
          this.iCanGet = false;
        } else if (
          this.cell.persolalNumber === this.tardetLandCell.persolalNumber
          && this.iGetMyCell
          && !this.landing.iGetLand
        ) {
          // console.log("i get");
          // this.landing=false;
          this.landing.iGetLand = this.landing.base_cell.continent;
        } else if (this.landing.iGetLand) {
          if (!this.landing.landCells.length) {
            const cells = [];
            const dis = [];

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
                  gameFielg[i]
                  && gameFielg[i][k]
                  && gameFielg[i][k].continent
                  && gameFielg[i][k].continent === this.landing.base_cell.continent
                ) {
                  this.landing.passagers_out_cells.push(gameFielg[i][k]);

                  if (
                    // gameFielg[i]&&gameFielg[i][k]
                    // &&
                    // gameFielg[i][k].continent
                    // &&
                    // gameFielg[i][k].continent===this.landing.base_cell.continent
                    // &&
                    gameFielg[i][k].water_line
                  ) {
                    cells.push(gameFielg[i][k]);
                    dis.push(
                      get_distanse_on_lineyka(
                        this.cell,
                        100,
                        gameFielg[i][k],
                        50,
                      ),
                    );
                  }
                }
              }
            }

            // pausa=1
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
                  this.fatherFraction.control === 'comp'
                  && this.landing.landCells[i].unit.transport
                  && this.landing.landCells[i].unit.fatherFraction.fraction
                    === this.fatherFraction.fraction
                  && this.landing.landCells[i].unit.hp > 0
                  // &&

                // (this.fatherFraction.attack&&this.fatherFraction.attack.transports.indexOf(this.cell.unit)!==-1)
                ) {
                  this.landing.landCells[i].unit.way = [];
                  this.landing.landCells[i].unit.iin = true;

                  if (!this.landing.landCells[i].unit.born_cell) {
                    this.landing.landCells[i].unit.born_cell = this.landing.landCells[i].unit.cell;
                  }
                }

                if (
                  this.landing.landCells[i].unit.iin
                  && ((this.landing.landCells[i].unit.stepTakt < 1
                    && this.landing.landCells[i].unit.stepTakt >= 0)
                    || this.landing.landCells[i].unit.iGetMyCell)
                  // &&
                  // (
                  // this.landing.landCells[i].unit.handCell.persolalNumber===this.landing.landCells[0].persolalNumber
                  // ||
                  // this.landing.landCells[i].unit.handCell.persolalNumber===this.landing.landCells[1].persolalNumber

                // )
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
                        this.landing.landCells[i].unit.contaktCells[k].vertikal
                      ][
                        this.landing.landCells[i].unit.contaktCells[k].horizont
                      ].iContaktWith.indexOf(
                        this.landing.landCells[i].unit.contaktCells[k],
                      ),
                      1,
                    );
                  }

                  this.landing.landCells[i].unit.contaktCells = [];

                  if (
                    this.passagers.indexOf(this.landing.landCells[i].unit)
                    === -1
                  ) {
                    this.passagers.push(this.landing.landCells[i].unit);
                  }

                  const unit = this.landing.landCells[i].unit;

                  if (unit.transport) {
                    const ind = unit.transport.ii_passagers.indexOf(unit);

                    if (ind !== -1) {
                      unit.transport.ii_passagers.splice(ind, 1);
                    }

                    unit.transport = this.cell.unit;
                  }

                  this.landing.landCells[i].unit.iin = false;

                  unit.cell.free = true;
                  unit.cell.unit = 0;
                  unit.cell = 0;

                  // console.log(unit);

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

                  /// /////////////// ii
                  // this.attack.warriors_in_active=0;
                  // this.attack.alive_warriors=[];
                  if (unit.ii_attack && unit.fatherFraction.attack) {
                    unit.fatherFraction.attack.alive_warriors.push(unit);
                    unit.fatherFraction.attack.warriors_in_active++;
                  }

                  /// //////////////

                  // unit.ii_saveCell=false;
                }
                // else{this.landing.landCells[i].unit.iin=false;};
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
              // console.log("out");

              this.passagers_out = false;

              for (let i = 0; i < this.passagers.length; i++) {
                let min = [];

                for (
                  let k = 0;
                  k < this.landing.passagers_out_cells.length;
                  k++
                ) {
                  if (this.landing.passagers_out_cells[k].free) {
                    const dis = get_distanse_on_lineyka(
                      this.landing.passagers_out_cells[k],
                      50,
                      this.landing.landCells[0],
                      50,
                    );

                    if (!min.length || min[0] > dis) {
                      min = [dis, this.landing.passagers_out_cells[k]];
                    }
                  }
                }

                const cell = min[1];

                if (cell) {
                  this.passagers[i].cell = gameFielg[min[1].vertikal][min[1].horizont];

                  this.passagers[i].horizont = this.passagers[i].cell.horizont;
                  this.passagers[i].vertikal = this.passagers[i].cell.vertikal;
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

                  const obj = this.passagers[i];

                  const ind = this.fatherFraction.activeUnits.indexOf(obj);

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
};
