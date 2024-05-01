Unit.prototype.myTargetCheck = function () {
    let freeContaktCell = false;
  
    for (let i = 0; i < this.target.contaktCells.length; i++) {
      if (
        gameFielg[this.target.contaktCells[i].vertikal][
          this.target.contaktCells[i].horizont
        ].free ||
        (this.cell.horizont === this.target.contaktCells[i].horizont &&
          this.cell.vertikal === this.target.contaktCells[i].vertikal)
      ) {
        freeContaktCell = true;
        break;
      }
    }
  
    if (!freeContaktCell) {
      this.myTargetClosed++;
    } //else{this.myTargetClosed=0;};
  
    if (!this.cell || this.iGetTarget) {
      this.myTargetClosed = 0;
    }
  
    if (this.myTargetClosed === 5 && !this.iGetTarget) {
      //this.target=//this.myJoube=0;
      //this.myTargetClosed=0;
      if (this.target.unitName === "townHoll") {
        this.target = getMinDistanse(arg, this.fatherFraction.townHolls);
      }
      if (this.target.unitName === "shahta") {
        this.target = getMinDistanse(arg, shahts);
      }
      if (this.target.unitName === "wood") {
        this.target = getMinDistanse(arg, woods);
      }
      if (this.target.unitName === "farm") {
        this.target = 0;
      }
    }
  };