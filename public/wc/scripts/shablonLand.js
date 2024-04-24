const buildingBornAnimysUpdate = function (b, nation) {
  if (nation.fatherFraction.control === "player") {
    //console.log(nation.clickSave);
    b = nation.clickSave.handTarget;
  }

  for (let ver = b.vertikal - 12; ver <= b.vertikal + 12; ver++) {
    for (let hor = b.horizont - 12; hor <= b.horizont + 12; hor++) {
      if (gameFielg[ver] && gameFielg[ver][hor]) {
        if (
          gameFielg[ver][hor].dragoon &&
          gameFielg[ver][hor].dragoon.fatherFraction.union !==
            b.fatherFraction.union &&
          (gameFielg[ver][hor].dragoon.fatherFraction.control === "comp" ||
            b.unitName === "tower")
        ) {
          if (gameFielg[ver][hor].dragoon.animys.indexOf(b) === -1) {
            gameFielg[ver][hor].dragoon.animys.push(b);
          }

          if (
            gameFielg[ver][hor].dragoon.fatherFraction.activeUnits.indexOf(
              gameFielg[ver][hor].dragoon
            ) === -1
          ) {
            gameFielg[ver][hor].dragoon.fatherFraction.activeUnits.push(
              gameFielg[ver][hor].dragoon
            );
          }
        }

        if (
          gameFielg[ver][hor].unit &&
          !gameFielg[ver][hor].unit.neitral &&
          gameFielg[ver][hor].unit.unitStatus === "life" &&
          gameFielg[ver][hor].unit.warrior &&
          b.fatherFraction &&
          gameFielg[ver][hor].unit.fatherFraction.union !==
            b.fatherFraction.union &&
          (b.unitName === "tower" ||
            gameFielg[ver][hor].unit.fatherFraction.control === "comp") &&
          (b.unitName !== "oil_platform" ||
            gameFielg[ver][hor].unit.iCanGetSweem)
        ) {
          if (gameFielg[ver][hor].unit.animys.indexOf(b) === -1) {
            gameFielg[ver][hor].unit.animys.push(b);
          }

          if (!gameFielg[ver][hor].unit.active) {
            gameFielg[ver][hor].unit.fatherFraction.activeUnits.push(
              gameFielg[ver][hor].unit
            );
            gameFielg[ver][hor].unit.active = true;
          }
        }
      }
    }
  }
};

SablonObj.prototype.contaktCellsGetVektors = function (obj, cell) {
  if (!cell) {
    if (
      obj.type === 2 ||
      obj.type === 4 ||
      obj.type === 5 ||
      obj.type === "kuznya" ||
      obj.type === "ogreBase" ||
      obj.type === "altar" ||
      obj.type === "port" ||
      obj.type === "oil_Ref" ||
      obj.type === "foundry" ||
      obj.type === "dragon_roost" ||
      obj.type === "temple"
    ) {
      if (obj.vertikal - 2 === this.vertikal) {
        this.outPrioritet = 8;

        if (
          obj.horizont - 2 === this.horizont ||
          obj.horizont - 1 === this.horizont
        ) {
          this.moveVektor = "right_Down";
          this.moveVektorOut = "left_Up";
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = "down";
          this.moveVektorOut = "up";
        }

        if (
          obj.horizont + 1 === this.horizont ||
          obj.horizont + 2 === this.horizont
        ) {
          this.moveVektor = "down_Left";
          this.moveVektorOut = "up_Right";
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        this.outPrioritet = 7;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = "right_Down";
          this.moveVektorOut = "left_Up";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "down_Left";
          this.moveVektorOut = "up_Right";
        }
      } else if (obj.vertikal === this.vertikal) {
        this.outPrioritet = 6;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = "right";
          this.moveVektorOut = "left";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "left";
          this.moveVektorOut = "right";
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 2 === this.horizont) {
          this.moveVektor = "up_Right";
          this.moveVektorOut = "down_Left";
          if (obj.type === 2) {
            this.outPrioritet = 5;
          } else if (obj.type === 4 || obj.type === 5) {
            this.outPrioritet = 1;
          }
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "left_Up";
          this.moveVektorOut = "right_Down";
          this.outPrioritet = 5;
        }
      }
      if (obj.vertikal + 2 === this.vertikal) {
        if (
          obj.horizont - 2 === this.horizont ||
          obj.horizont - 1 === this.horizont
        ) {
          this.moveVektor = "up_Right";
          this.moveVektorOut = "down_Left";
          this.outPrioritet = 4;
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = "up";
          this.moveVektorOut = "down";
          this.outPrioritet = 3;
        }

        if (
          obj.horizont + 1 === this.horizont ||
          obj.horizont + 2 === this.horizont
        ) {
          if (obj.horizont + 1 === this.horizont) {
            if (obj.type === 2) {
              this.outPrioritet = 1;
            } else if (obj.type === 4 || obj.type === 5) {
              this.outPrioritet = 5;
            }
          } else {
            this.outPrioritet = 2;
          }

          this.moveVektor = "left_Up";
          this.moveVektorOut = "right_Down";

          //console.log(obj.contaktCells);
        }
      }
    } else if (obj.type === 1) {
      if (obj.vertikal - 2 === this.vertikal) {
        this.outPrioritet = 7;

        if (
          obj.horizont - 2 === this.horizont ||
          obj.horizont - 1 === this.horizont
        ) {
          this.moveVektorOut = "left_Up";
        }

        if (obj.horizont === this.horizont) {
          this.moveVektorOut = "up";
        }

        if (
          obj.horizont + 1 === this.horizont ||
          obj.horizont + 2 === this.horizont
        ) {
          this.moveVektorOut = "up_Right";
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        this.outPrioritet = 6;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = "left_Up";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = "up_Right";
        }
      } else if (obj.vertikal === this.vertikal) {
        this.outPrioritet = 5;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = "left";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = "right";
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        this.outPrioritet = 4;

        if (obj.horizont - 2 === this.horizont) {
          this.moveVektorOut = "down_Left";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektorOut = "right_Down";
        }
      }
      if (obj.vertikal + 2 === this.vertikal) {
        this.outPrioritet = 3;

        if (
          obj.horizont - 2 === this.horizont ||
          obj.horizont - 1 === this.horizont
        ) {
          this.moveVektorOut = "down_Left";

          if (obj.horizont - 2 === this.horizont) {
            this.outPrioritet = 1;

            // console.log("huynya");
          } else {
            this.outPrioritet = 2;
          }
        }

        if (obj.horizont === this.horizont) {
          this.moveVektorOut = "down";
        }

        if (
          obj.horizont + 1 === this.horizont ||
          obj.horizont + 2 === this.horizont
        ) {
          this.moveVektorOut = "right_Down";

          //console.log(obj.contaktCells);
          if (obj.horizont + 1 === this.horizont) {
            obj.cellToOut = obj.contaktCells[obj.contaktCells.length - 1];
          }
        }
      }
    } else if (obj.type === 3 || obj.type === "tower") {
      if (obj.vertikal - 2 === this.vertikal) {
        if (
          obj.horizont - 1 === this.horizont ||
          obj.horizont === this.horizont
        ) {
          this.moveVektor = "right_Down";
        }

        if (
          obj.horizont + 1 === this.horizont ||
          obj.horizont + 2 === this.horizont
        ) {
          this.moveVektor = "down_Left";
        }
      } else if (obj.vertikal - 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "right_Down";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "down_Left";
        }
      } else if (obj.vertikal === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "up_Right";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "left_Up";
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "up_Right";
        }
        if (obj.horizont === this.horizont) {
          this.moveVektor = "up_Right";
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = "left_Up";
        }
        if (obj.horizont + 2 === this.horizont) {
          this.moveVektor = "left_Up";
        }
      }
    } else if (obj.type === "wood") {
      //console.log("ok");

      if (obj.vertikal - 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "right_Down";
        }

        if (obj.horizont === this.horizont) {
          this.moveVektor = "down";
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = "down_Left";
        }
      } else if (obj.vertikal === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "right";
        }
        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = "left";
        }
      } else if (obj.vertikal + 1 === this.vertikal) {
        if (obj.horizont - 1 === this.horizont) {
          this.moveVektor = "up_Right";
        }
        if (obj.horizont === this.horizont) {
          this.moveVektor = "up";
        }

        if (obj.horizont + 1 === this.horizont) {
          this.moveVektor = "left_Up";
        }
      }
    }
  } else {
    if (obj.vertikal - 1 === this.vertikal) {
      if (obj.horizont - 1 === this.horizont) {
        this.moveVektor = "right_Down";
      }

      if (obj.horizont === this.horizont) {
        this.moveVektor = "down";
      }

      if (obj.horizont + 1 === this.horizont) {
        this.moveVektor = "down_Left";
      }
    } else if (obj.vertikal === this.vertikal) {
      if (obj.horizont - 1 === this.horizont) {
        this.moveVektor = "right";
      }
      if (obj.horizont + 1 === this.horizont) {
        this.moveVektor = "left";
      }
    } else if (obj.vertikal + 1 === this.vertikal) {
      if (obj.horizont - 1 === this.horizont) {
        this.moveVektor = "up_Right";
      }
      if (obj.horizont === this.horizont) {
        this.moveVektor = "up";
      }

      if (obj.horizont + 1 === this.horizont) {
        this.moveVektor = "left_Up";
      }
    }
  }
};

/*
  for(let i=0;i<gameFielg.length;i++){
      
      for(let k=0;k<gameFielg[i].length;k++){
          
          
      //console.log("ok");	
          
          
  for(let v=i-1;v<=i+1;v++){
      
  for(let g=k-1;g<=k+1;g++){	
      
      
  //console.log("ok");	
      
  if(gameFielg[v]&&gameFielg[v][g]&&!(i===v&&k===g)){
      
      
      let cell=new SablonObj(g,v,gameFielg[i][k]);
       
       gameFielg[i][k].contaktCells.push(cell);
        
  cell.contaktCellsGetVektors(gameFielg[i][k],"cell"); 
      //console.log("ok"); 
       
   }; 
   
   
  
  };
  };		
          
          
          
          
      };
      
  };
  */

//onsole.log(gameFielg[0][7].horizont);

//Obj.prototype.contaktCellsGetVektors=LandObj.contaktCellsGetVektors;

LandObj.prototype.vossal_contacts_moveVectorsInitialization = function (obj) {
  if (this.type === "oil") {
    //console.log(this.cell);
    this.cells = [];

    for (let v = this.cell.vertikal - 1; v <= this.cell.vertikal; v++) {
      for (let h = this.cell.horizont; h <= this.cell.horizont + 1; h++) {
        let cell = gameFielg[v][h];

        cell.oil = obj;

        this.cells.push(cell);
      }
    }

    //console.log(allSeas);

    oils.push(obj);
    allSeas[gameFielg[obj.vertikal][obj.horizont].sea].oils.push(obj);
  } else if (
    this.type === 1 ||
    this.type === 2 ||
    this.type === 4 ||
    this.type === 5 ||
    this.type === "kuznya" ||
    this.type === "ogreBase" ||
    this.type === "altar" ||
    this.type === "port" ||
    this.type === "oil_Ref" ||
    this.type === "foundry" ||
    this.type === "dragon_roost" ||
    this.type === "temple"
  ) {
    gameFielg[this.vertikal][this.horizont].unit = obj;

    for (let k = this.cell.vertikal - 2; k < this.cell.vertikal - 2 + 5; k++) {
      for (
        let j = this.cell.horizont - 2;
        j < this.cell.horizont - 2 + 5;
        j++
      ) {
        if (
          gameFielg[k] &&
          gameFielg[k][j] &&
          k > this.cell.vertikal - 2 &&
          k < this.cell.vertikal - 2 + 4 &&
          j > this.cell.horizont - 2 &&
          j < this.cell.horizont - 2 + 4
        ) {
          gameFielg[k][j].vossalObj = obj;
          gameFielg[k][j].free = false;
          this.myCells.push(gameFielg[k][j]);
        } else if (gameFielg[k] && gameFielg[k][j]) {
          // gameFielg[k][j].contaktWith=freeLandObjects[i];
          // freeLandObjects[i].contaktCells.push(gameFielg[k][j]);
          this.contaktCells.push(new SablonObj(j, k, obj));

          this.contaktCells[
            this.contaktCells.length - 1
          ].contaktCellsGetVektors(obj);

          //console.log(freeLandObjects[i].contaktCells[freeLandObjects[i].contaktCells.length-1].moveVektorOut);
        }
      }
    }

    if (this.type === 1) {
      shahts.push(obj);

      allContinents[
        gameFielg[obj.vertikal][obj.horizont].continent
      ].shahts.push(obj);
    }
  } else if (this.type === 3 || this.type === "tower") {
    gameFielg[this.vertikal][this.horizont].unit = obj;

    for (let k = this.cell.vertikal - 2; k <= this.cell.vertikal + 1; k++) {
      for (let j = this.cell.horizont - 1; j <= this.cell.horizont + 2; j++) {
        if (
          gameFielg[k] &&
          gameFielg[k][j] &&
          k > this.cell.vertikal - 2 &&
          k < this.cell.vertikal + 1 &&
          j > this.cell.horizont - 1 &&
          j < this.cell.horizont + 2
        ) {
          gameFielg[k][j].vossalObj = obj;
          gameFielg[k][j].free = false;
          this.myCells.push(gameFielg[k][j]);
        } else if (gameFielg[k] && gameFielg[k][j]) {
          // gameFielg[k][j].contaktWith=freeLandObjects[i];
          // freeLandObjects[i].contaktCells.push(gameFielg[k][j]);
          this.contaktCells.push(new SablonObj(j, k, obj));

          this.contaktCells[
            this.contaktCells.length - 1
          ].contaktCellsGetVektors(obj);

          //console.log(freeLandObjects[i].contaktCells[freeLandObjects[i].contaktCells.length-1].moveVektorOut);
        }
      }
    }
  } else if (this.type === "wood") {
    gameFielg[this.vertikal][this.horizont].unit = obj;

    gameFielg[this.vertikal][this.horizont].free = false;
    this.cell = gameFielg[this.vertikal][this.horizont];

    for (let k = this.cell.vertikal - 1; k <= this.cell.vertikal + 1; k++) {
      for (let j = this.cell.horizont - 1; j <= this.cell.horizont + 1; j++) {
        if (gameFielg[k] && gameFielg[k][j]) {
          // gameFielg[k][j].contaktWith=freeLandObjects[i];
          // freeLandObjects[i].contaktCells.push(gameFielg[k][j]);
          this.contaktCells.push(new SablonObj(j, k, obj));

          this.contaktCells[
            this.contaktCells.length - 1
          ].contaktCellsGetVektors(obj);

          //console.log(freeLandObjects[i].contaktCells[freeLandObjects[i].contaktCells.length-1].moveVektorOut);
        }
      }
    }

    allContinents[gameFielg[obj.vertikal][obj.horizont].continent].woods.push(
      obj
    );
  }

  for (let i = 0; i < this.contaktCells.length; i++) {
    gameFielg[this.contaktCells[i].vertikal][
      this.contaktCells[i].horizont
    ].iContaktWith.push(this.contaktCells[i]);
  }

  allUnits++;
  this.persolalNumber = allUnits;
};
