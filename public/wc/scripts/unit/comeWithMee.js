/* eslint-disable no-unreachable */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.comeWithMee = function (min) {
  return;

  if (!this.target) {
    for (let i = this.vertikal - 5; i <= this.vertikal + 5; i++) {
      for (let k = this.horizont - 5; k <= this.horizont + 5; k++) {
        let cell;

        if (gameFielg[i] && gameFielg[i][k]) {
          cell = gameFielg[i][k];
        }

        if (
          cell
          && cell.unit
          && !cell.unit.neitral
          && cell.unit.warrior
          && cell.unit.unitStatus === 'life'
          && cell.unit.fatherFraction.fraction === this.fatherFraction.fraction
          && cell.unit.hp > 0
          && !cell.unit.iFight
          && !cell.unit.handTarget
          && !cell.unit.target
          && !cell.ii_strike
          && cell.unit.persolalNumber !== this.persolalNumber
          && (cell.unit.type !== 'mag' || cell.unit.mana === 100)
          // &&!gameFielg[i][k].unit.ii_saveCell
        ) {
          const a = new Strike(cell.unit, min, min.cell);
          this.fatherFraction.ii_warriors_on_strike.push(a);
          cell.unit.ii_strike = true;

          // let wait=false;

          // if(!gameFielg[i][k].unit.ii_saveCell){wait=true;};

          // gameFielg[i][k].unit.clickSave=new ClickSave(min,0,wait);

          // if(!gameFielg[i][k].unit.ii_saveCell){
          // gameFielg[i][k].unit.ii_saveCell=gameFielg[i][k].unit.cell;
          // };

          // if(gameFielg[i][k].unit.fatherFraction.activeUnits.indexOf(gameFielg[i][k].unit)===-1){
          // gameFielg[i][k].unit.fatherFraction.activeUnits.push(gameFielg[i][k].unit);
          // };

          // console.log("ok");
        }
      }
    }
  }
};
