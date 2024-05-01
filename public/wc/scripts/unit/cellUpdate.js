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

      // this.contaktCells[k].cell !== this.cell.aroundCells[k] ||
      // gameFielg[this.contaktCells[k].vertikal][
      //   this.contaktCells[k].horizont
      // ] !== this.contaktCells[k].cell
      //  && console.log('BUG') // ok

      const cellData = this.contaktCells[k].cell;

      // cellData !== gameFielg[this.contaktCells[k].vertikal][
      //   this.contaktCells[k].horizont
      // ] && console.log('BUG - 1 a')

      if (
        cellData.iContaktWith.indexOf(this.contaktCells[k]) !== -1
      ) {
        cellData.iContaktWith.splice(
          cellData.iContaktWith.indexOf(this.contaktCells[k]),
          1
        );
      }
    }

    this.contaktCells = this.cell.contaktCells;

    for (let i = 0; i < this.contaktCells.length; i++) {
      this.contaktCells[i].father = this.cell.unit;
    }

    for (let i = 0; i < this.contaktCells.length; i++) {

      // this.contaktCells[i].cell !== this.cell.aroundCells[i] ||
      // gameFielg[this.contaktCells[i].vertikal][
      //   this.contaktCells[i].horizont
      // ] !== this.contaktCells[i].cell
      //  && console.log('BUG - 2') ok

      const cellData = this.cell.contaktCells[i].cell

      //  cellData !== gameFielg[this.contaktCells[i].vertikal][
      //    this.contaktCells[i].horizont
      //  ] && console.log('BUG - 2 a')


      cellData.iContaktWith.push(this.contaktCells[i]);
    }

    if (this.initialization) {

     // let index = 0

      
        for (let k = 0; k < this.cell.cellsForUnitCellUpdate.length; k++) {

          const cell = this.cell.cellsForUnitCellUpdate[k];

        
            
            // cell !== this.cell.cellsForUnitCellUpdate[index] && console.log('BUG') // ok
            //   index++
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

                //console.log(cell.dragoon.fatherFraction.union)
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
              //cell.unit.fatherFraction.fraction!==this.fatherFraction.fraction
              //cell.unit.fatherFraction&&
              //cell.unit.fatherFraction.union&&
              !cell.unit.neitral &&
              //&&
              //(!cell.unit.type==="oil_platform"||this.iCanGetSweem)
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

                if (cell.unit.animys.indexOf(this) === -1) {
                  cell.unit.animys.push(this);
                }
              } else if (cell.unit.unitName === "tower") {
                if (
                  cell.unit.fatherFraction.activeBuildings.indexOf(
                    cell.unit
                  ) === -1
                ) {
                  cell.unit.fatherFraction.activeBuildings.push(cell.unit);
                }

                if (cell.unit.animys.indexOf(this) === -1) {
                  cell.unit.animys.push(this);
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
                  this.fatherFraction.activeUnits.push(this);
                  this.cell.unit.active = true;
                }
              }
            }
          
        }
       ////////////////////////////////////////////////////for 1
    }
  } else if (this.fly) {
    //console.log("upgrade");

    
      for (let k = 0; k < this.cell.cellsForUnitCellUpdate.length; k++) {

        const cell = this.cell.cellsForUnitCellUpdate[k]

          if (
            cell.dragoon &&
            cell.dragoon.fatherFraction.union !==
              this.fatherFraction.union &&
            cell.dragoon.hp > 0
          ) {
            if (this.animys.indexOf(cell.dragoon) === -1) {
              this.animys.push(cell.dragoon);
            }
            if (!this.cell.dragoon.active) {
              this.fatherFraction.activeUnits.push(this.cell.dragoon);
              this.cell.dragoon.active = true;
            }

            if (!cell.dragoon.active) {
              cell.dragoon.fatherFraction.activeUnits.push(
                cell.dragoon
              );
              cell.dragoon.active = true;
            }
            if (
              cell.dragoon.animys.indexOf(this.cell.dragoon) === -1
            ) {
              cell.dragoon.animys.push(this.cell.dragoon);
            }
          }

          if (
            cell.unit &&
            !cell.unit.neitral &&
            cell.unit.fatherFraction.union !==
              this.fatherFraction.union &&
            cell.unit.hp > 0 &&
            cell.unit.cell
            //&&
            //(
            //cell.unit.warrior
            //||
            //this.fatherFraction.control==="comp"
            //)
          ) {
            if (
              this.animys.indexOf(cell.unit) === -1 &&
              (cell.unit.warrior ||
                this.fatherFraction.control === "comp" ||
                cell.unit.unitStatus === "life")
            ) {
              this.animys.push(cell.unit);
              if (!this.cell.dragoon.active) {
                this.fatherFraction.activeUnits.push(this.cell.dragoon);
                this.cell.dragoon.active = true;
              }
            }

            if (
              cell.unit.iCanGetFly ||
              cell.unit.type === "turtle"

              //||
              //cell.unit.warrior
              /*
  ||
  (
  cell.unit.unitName==="tower"
  &&
  cell.unit.upgrade==="guard"
  )
  */
            ) {
              if (cell.unit.unitStatus === "life") {
                if (!cell.unit.active) {
                  cell.unit.fatherFraction.activeUnits.push(
                    cell.unit
                  );
                  cell.unit.active = true;
                }
                if (
                  cell.unit.animys.indexOf(this.cell.dragoon) === -1
                ) {
                  cell.unit.animys.push(this.cell.dragoon);
                }
              } else if (cell.unit.unitStatus === "building") {
                if (
                  cell.unit.fatherFraction.activeBuildings.indexOf(
                    cell.unit
                  ) === -1
                ) {
                  cell.unit.fatherFraction.activeBuildings.push(
                    cell.unit
                  );
                }
                if (
                  cell.unit.animys.indexOf(this.cell.dragoon) === -1
                ) {
                  cell.unit.animys.push(this.cell.dragoon);
                }
              }

              //console.log("fly");
            }
          }
        
      }
    
  } else if (this.sweeme) {
    
      for (let k = 0; k < this.cell.cellsForUnitCellUpdate.length; k++) {

        const cell = this.cell.cellsForUnitCellUpdate[k]

     
          if (
            cell.dragoon &&
            cell.dragoon.fatherFraction.union !==
              this.fatherFraction.union &&
            cell.dragoon.hp > 0
          ) {
            if (this.iCanGetFly || this.type === "transport") {
              if (this.animys.indexOf(cell.dragoon) === -1) {
                this.animys.push(cell.dragoon);
              }
              if (!this.cell.unit.active) {
                this.fatherFraction.activeUnits.push(this.cell.unit);
                this.cell.unit.active = true;
              }
            }

            if (!cell.dragoon.active) {
              cell.dragoon.fatherFraction.activeUnits.push(
                cell.dragoon
              );
              cell.dragoon.active = true;
            }
            if (cell.dragoon.animys.indexOf(this.cell.unit) === -1) {
              cell.dragoon.animys.push(this.cell.unit);
            }
          }

          if (
            cell.unit &&
            !cell.unit.neitral &&
            cell.unit.fatherFraction.union !==
              this.fatherFraction.union &&
            cell.unit.hp > 0 &&
            cell.unit.cell
            //&&
            //(
            //cell.unit.warrior
            //||
            //this.fatherFraction.control==="comp"
            //)
          ) {
            if (
              (this.warrior || (this.passagers && this.passagers.length)) &&
              this.animys.indexOf(cell.unit) === -1 &&
              (cell.unit.warrior ||
                this.fatherFraction.control === "comp" ||
                cell.unit.unitStatus === "life")
              //&&

              //(cell.unit.iCanGetSweem)

              //&&
              //checkAliens_sea(this.cell.unit,cell.unit)
            ) {
              //cell.unit.isMee="ffffffffffffffffff";

              this.animys.push(cell.unit);

              if (!this.cell.unit.active) {
                this.fatherFraction.activeUnits.push(this.cell.unit);
                this.cell.unit.active = true;
              }
            }

            if (
              cell.unit.iCanGetSweem

              //||
              //cell.unit.warrior
              /*
  ||
  (
  cell.unit.unitName==="tower"
  &&
  cell.unit.upgrade==="guard"
  )
  */
            ) {
              //console.log("go");
              if (cell.unit.unitStatus === "life") {
                if (!cell.unit.active) {
                  cell.unit.fatherFraction.activeUnits.push(
                    cell.unit
                  );
                  cell.unit.active = true;
                }
                if (
                  cell.unit.animys.indexOf(this.cell.unit) === -1
                ) {
                  cell.unit.animys.push(this.cell.unit);
                }
              } else if (cell.unit.unitStatus === "building") {
                if (
                  cell.unit.fatherFraction.activeBuildings.indexOf(
                    cell.unit
                  ) === -1
                ) {
                  cell.unit.fatherFraction.activeBuildings.push(
                    cell.unit
                  );
                }
                if (
                  cell.unit.animys.indexOf(this.cell.unit) === -1
                ) {
                  cell.unit.animys.push(this.cell.unit);
                }
              }

              //console.log("fly");
            }
          }
        
      }
    
  }
};
