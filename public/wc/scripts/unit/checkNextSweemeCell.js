Unit.prototype.checkNextSweemeCell = function (cell) {
    let nextCell_ok = 0;
  
    //let alienWay=[];
  
    if (this.way.length) {
      let vertikal = this.way[this.way.length - 1].vertikal;
      let horizont = this.way[this.way.length - 1].horizont;
  
      for (let v = vertikal - 1; v <= vertikal; v++) {
        let brc;
  
        for (let h = horizont; h <= horizont + 1; h++) {
          if (
            gameFielg[v] &&
            gameFielg[v][h] &&
            gameFielg[v][h].water &&
            !gameFielg[v][h].vossalObj &&
            (!gameFielg[v][h].unit ||
              (gameFielg[v][h].unit &&
                gameFielg[v][h].unit.persolalNumber === this.persolalNumber))
          ) {
            nextCell_ok++;
          } else {
            brc = true;
            break;
          }
        }
  
        if (brc) {
          break;
        }
      }
    }
  
    return nextCell_ok;
  };