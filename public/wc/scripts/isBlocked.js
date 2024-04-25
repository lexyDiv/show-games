const isBlocked = function (arg) {
  //if(this.hp<=0){return true;};
  //console.log(this.contaktCells[0]);

  for (let i = 0; i < this.contaktCells.length; i++) {
    if (
      gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .free ||
      (arg &&
        arg.horizont === this.contaktCells[i].horizont &&
        arg.vertikal === this.contaktCells[i].vertikal)
    ) {
      return false;
    }
  }

  return true;
};

Unit.prototype.isBlocked = isBlocked;
LandObj.prototype.isBlocked = isBlocked;
