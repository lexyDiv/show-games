Unit.prototype.cellUpdate = function () {
  //if(this.type==="turtle"){console.log("!!!!!!!!!!!!!!!!");}; iContaktWith

  if (this.gabarit === 50 && this.cell) {
    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.gabarit === 100) {
    this.damagePointX = this.cell.x + 50;
    this.damagePointY = this.cell.y;
  }

  //indexOf animys

  //if(this.type===1){console.log("ok");};
  if (!this.fly && !this.sweeme) {
    if (!this.hotCell) {
      this.hotCell = this.cell;
    }

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

    this.contaktCells = this.cell.contaktCells;

    for (let i = 0; i < this.contaktCells.length; i++) {
      this.contaktCells[i].father = this.cell.unit;
    }

    for (let i = 0; i < this.contaktCells.length; i++) {
      gameFielg[this.contaktCells[i].vertikal][
        this.contaktCells[i].horizont
      ].iContaktWith.push(this.contaktCells[i]);
    }

    if (this.initialization) {
      for (let i = this.vertikal - 11; i <= this.vertikal + 11; i++) {
        for (let k = this.horizont - 11; k <= this.horizont + 11; k++) {
          let cell;

          if (gameFielg[i] && gameFielg[i][k]) {
            cell = gameFielg[i][k];

            if (
              cell.dragoon &&
              cell.dragoon.fatherFraction.union !== this.fatherFraction.union &&
              cell.dragoon.hp > 0
            ) {
              if (this.iCanGetFly || this.type === "turtle") {
                if (this.animys.indexOf(cell.dragoon) === -1) {
                  this.animys.push(cell.dragoon);
                }

                if (!this.cell.unit.active) {
                  this.fatherFraction.activeUnits.push(this.cell.unit);
                  this.cell.unit.active = true;
                }

                //console.log(gameFielg[i][k].dragoon.fatherFraction.union)
              }

              if (!cell.dragoon.active) {
                cell.dragoon.fatherFraction.activeUnits.push(cell.dragoon);
                cell.dragoon.active = true;
              }

              if (cell.dragoon.animys.indexOf(this.cell.unit) === -1) {
                cell.dragoon.animys.push(this.cell.unit);
              }
            }

            if (
              cell.unit &&
              (cell.unit.unitStatus === "life" ||
                cell.unit.unitName === "tower" ||
                (this.warrior && this.fatherFraction.control === "comp")) &&
              //gameFielg[i][k].unit.fatherFraction.fraction!==this.fatherFraction.fraction
              //gameFielg[i][k].unit.fatherFraction&&
              //gameFielg[i][k].unit.fatherFraction.union&&
              !cell.unit.neitral &&
              //&&
              //(!gameFielg[i][k].unit.type==="oil_platform"||this.iCanGetSweem)
              cell.unit.fatherFraction.union !== this.fatherFraction.union &&
              cell.unit.hp > 0 &&
              cell.unit.cell
            ) {
              if (
                cell.unit.warrior &&
                cell.unit.unitName !== "tower" &&
                (cell.unit.type !== "transport" || this.iCanGetSweem)
              ) {
                if (!cell.unit.active) {
                  cell.unit.fatherFraction.activeUnits.push(cell.unit);
                  cell.unit.active = true;
                }

                if (cell.unit.animys.indexOf(this.cell.unit) === -1) {
                  cell.unit.animys.push(this.cell.unit);
                }
              } else if (cell.unit.unitName === "tower") {
                if (
                  cell.unit.fatherFraction.activeBuildings.indexOf(
                    cell.unit
                  ) === -1
                ) {
                  cell.unit.fatherFraction.activeBuildings.push(cell.unit);
                }

                if (cell.unit.animys.indexOf(this.cell.unit) === -1) {
                  cell.unit.animys.push(this.cell.unit);
                }
              }

              if (
                this.warrior &&
                (!cell.unit.sweeme || (cell.unit.sweeme && this.iCanGetSweem))
              ) {
                if (this.animys.indexOf(cell.unit) === -1) {
                  this.animys.push(cell.unit);
                }

                if (!this.cell.unit.active) {
                  this.fatherFraction.activeUnits.push(this.cell.unit);
                  this.cell.unit.active = true;
                }
              }
            }
          }
        }
      } ////////////////////////////////////////////////////for 1
    }
  } else if (this.fly) {
    //console.log("upgrade");

    for (let i = this.vertikal - 11; i <= this.vertikal + 11; i++) {
      for (let k = this.horizont - 11; k <= this.horizont + 11; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          if (
            gameFielg[i][k].dragoon &&
            gameFielg[i][k].dragoon.fatherFraction.union !==
              this.fatherFraction.union &&
            gameFielg[i][k].dragoon.hp > 0
          ) {
            if (this.animys.indexOf(gameFielg[i][k].dragoon) === -1) {
              this.animys.push(gameFielg[i][k].dragoon);
            }
            if (!this.cell.dragoon.active) {
              this.fatherFraction.activeUnits.push(this.cell.dragoon);
              this.cell.dragoon.active = true;
            }

            if (!gameFielg[i][k].dragoon.active) {
              gameFielg[i][k].dragoon.fatherFraction.activeUnits.push(
                gameFielg[i][k].dragoon
              );
              gameFielg[i][k].dragoon.active = true;
            }
            if (
              gameFielg[i][k].dragoon.animys.indexOf(this.cell.dragoon) === -1
            ) {
              gameFielg[i][k].dragoon.animys.push(this.cell.dragoon);
            }
          }

          if (
            gameFielg[i][k].unit &&
            !gameFielg[i][k].unit.neitral &&
            gameFielg[i][k].unit.fatherFraction.union !==
              this.fatherFraction.union &&
            gameFielg[i][k].unit.hp > 0 &&
            gameFielg[i][k].unit.cell
            //&&
            //(
            //gameFielg[i][k].unit.warrior
            //||
            //this.fatherFraction.control==="comp"
            //)
          ) {
            if (
              this.animys.indexOf(gameFielg[i][k].unit) === -1 &&
              (gameFielg[i][k].unit.warrior ||
                this.fatherFraction.control === "comp" ||
                gameFielg[i][k].unit.unitStatus === "life")
            ) {
              this.animys.push(gameFielg[i][k].unit);
              if (!this.cell.dragoon.active) {
                this.fatherFraction.activeUnits.push(this.cell.dragoon);
                this.cell.dragoon.active = true;
              }
            }

            if (
              gameFielg[i][k].unit.iCanGetFly ||
              gameFielg[i][k].unit.type === "turtle"

              //||
              //gameFielg[i][k].unit.warrior
              /*
  ||
  (
  gameFielg[i][k].unit.unitName==="tower"
  &&
  gameFielg[i][k].unit.upgrade==="guard"
  )
  */
            ) {
              if (gameFielg[i][k].unit.unitStatus === "life") {
                if (!gameFielg[i][k].unit.active) {
                  gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                    gameFielg[i][k].unit
                  );
                  gameFielg[i][k].unit.active = true;
                }
                if (
                  gameFielg[i][k].unit.animys.indexOf(this.cell.dragoon) === -1
                ) {
                  gameFielg[i][k].unit.animys.push(this.cell.dragoon);
                }
              } else if (gameFielg[i][k].unit.unitStatus === "building") {
                if (
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.indexOf(
                    gameFielg[i][k].unit
                  ) === -1
                ) {
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.push(
                    gameFielg[i][k].unit
                  );
                }
                if (
                  gameFielg[i][k].unit.animys.indexOf(this.cell.dragoon) === -1
                ) {
                  gameFielg[i][k].unit.animys.push(this.cell.dragoon);
                }
              }

              //console.log("fly");
            }
          }
        }
      }
    }
  } else if (this.sweeme) {
    for (let i = this.vertikal - 11; i <= this.vertikal + 11; i++) {
      for (let k = this.horizont - 11; k <= this.horizont + 11; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          if (
            gameFielg[i][k].dragoon &&
            gameFielg[i][k].dragoon.fatherFraction.union !==
              this.fatherFraction.union &&
            gameFielg[i][k].dragoon.hp > 0
          ) {
            if (this.iCanGetFly || this.type === "transport") {
              if (this.animys.indexOf(gameFielg[i][k].dragoon) === -1) {
                this.animys.push(gameFielg[i][k].dragoon);
              }
              if (!this.cell.unit.active) {
                this.fatherFraction.activeUnits.push(this.cell.unit);
                this.cell.unit.active = true;
              }
            }

            if (!gameFielg[i][k].dragoon.active) {
              gameFielg[i][k].dragoon.fatherFraction.activeUnits.push(
                gameFielg[i][k].dragoon
              );
              gameFielg[i][k].dragoon.active = true;
            }
            if (gameFielg[i][k].dragoon.animys.indexOf(this.cell.unit) === -1) {
              gameFielg[i][k].dragoon.animys.push(this.cell.unit);
            }
          }

          if (
            gameFielg[i][k].unit &&
            !gameFielg[i][k].unit.neitral &&
            gameFielg[i][k].unit.fatherFraction.union !==
              this.fatherFraction.union &&
            gameFielg[i][k].unit.hp > 0 &&
            gameFielg[i][k].unit.cell
            //&&
            //(
            //gameFielg[i][k].unit.warrior
            //||
            //this.fatherFraction.control==="comp"
            //)
          ) {
            if (
              (this.warrior || (this.passagers && this.passagers.length)) &&
              this.animys.indexOf(gameFielg[i][k].unit) === -1 &&
              (gameFielg[i][k].unit.warrior ||
                this.fatherFraction.control === "comp" ||
                gameFielg[i][k].unit.unitStatus === "life")
              //&&

              //(gameFielg[i][k].unit.iCanGetSweem)

              //&&
              //checkAliens_sea(this.cell.unit,gameFielg[i][k].unit)
            ) {
              //gameFielg[i][k].unit.isMee="ffffffffffffffffff";

              this.animys.push(gameFielg[i][k].unit);

              if (!this.cell.unit.active) {
                this.fatherFraction.activeUnits.push(this.cell.unit);
                this.cell.unit.active = true;
              }
            }

            if (
              gameFielg[i][k].unit.iCanGetSweem

              //||
              //gameFielg[i][k].unit.warrior
              /*
  ||
  (
  gameFielg[i][k].unit.unitName==="tower"
  &&
  gameFielg[i][k].unit.upgrade==="guard"
  )
  */
            ) {
              //console.log("go");
              if (gameFielg[i][k].unit.unitStatus === "life") {
                if (!gameFielg[i][k].unit.active) {
                  gameFielg[i][k].unit.fatherFraction.activeUnits.push(
                    gameFielg[i][k].unit
                  );
                  gameFielg[i][k].unit.active = true;
                }
                if (
                  gameFielg[i][k].unit.animys.indexOf(this.cell.unit) === -1
                ) {
                  gameFielg[i][k].unit.animys.push(this.cell.unit);
                }
              } else if (gameFielg[i][k].unit.unitStatus === "building") {
                if (
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.indexOf(
                    gameFielg[i][k].unit
                  ) === -1
                ) {
                  gameFielg[i][k].unit.fatherFraction.activeBuildings.push(
                    gameFielg[i][k].unit
                  );
                }
                if (
                  gameFielg[i][k].unit.animys.indexOf(this.cell.unit) === -1
                ) {
                  gameFielg[i][k].unit.animys.push(this.cell.unit);
                }
              }

              //console.log("fly");
            }
          }
        }
      }
    }
  }
};
