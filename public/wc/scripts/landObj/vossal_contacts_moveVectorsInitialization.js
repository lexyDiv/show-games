/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
LandObj.prototype.vossal_contacts_moveVectorsInitialization = function (obj) {
  if (this.type === 'oil') {
    // console.log(this.cell);
    this.cells = [];

    for (let v = this.cell.vertikal - 1; v <= this.cell.vertikal; v++) {
      for (let h = this.cell.horizont; h <= this.cell.horizont + 1; h++) {
        const cell = gameFielg[v][h];

        cell.oil = obj;

        this.cells.push(cell);
      }
    }

    // console.log(allSeas);

    oils.push(obj);
    allSeas[gameFielg[obj.vertikal][obj.horizont].sea].oils.push(obj);
  } else if (
    this.type === 1
    || this.type === 2
    || this.type === 4
    || this.type === 5
    || this.type === 'kuznya'
    || this.type === 'ogreBase'
    || this.type === 'altar'
    || this.type === 'port'
    || this.type === 'oil_Ref'
    || this.type === 'foundry'
    || this.type === 'dragon_roost'
    || this.type === 'temple'
  ) {
    gameFielg[this.vertikal][this.horizont].unit = obj;

    for (let k = this.cell.vertikal - 2; k < this.cell.vertikal - 2 + 5; k++) {
      for (
        let j = this.cell.horizont - 2;
        j < this.cell.horizont - 2 + 5;
        j++
      ) {
        if (
          gameFielg[k]
          && gameFielg[k][j]
          && k > this.cell.vertikal - 2
          && k < this.cell.vertikal - 2 + 4
          && j > this.cell.horizont - 2
          && j < this.cell.horizont - 2 + 4
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
        }
      }
    }

    if (this.type === 1) {
      shahts.push(obj);

      allContinents[
        gameFielg[obj.vertikal][obj.horizont].continent
      ].shahts.push(obj);
    }
  } else if (this.type === 3 || this.type === 'tower') {
    gameFielg[this.vertikal][this.horizont].unit = obj;

    for (let k = this.cell.vertikal - 2; k <= this.cell.vertikal + 1; k++) {
      for (let j = this.cell.horizont - 1; j <= this.cell.horizont + 2; j++) {
        if (
          gameFielg[k]
          && gameFielg[k][j]
          && k > this.cell.vertikal - 2
          && k < this.cell.vertikal + 1
          && j > this.cell.horizont - 1
          && j < this.cell.horizont + 2
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
        }
      }
    }
  } else if (this.type === 'wood') {
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
        }
      }
    }

    allContinents[gameFielg[obj.vertikal][obj.horizont].continent].woods.push(
      obj,
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
