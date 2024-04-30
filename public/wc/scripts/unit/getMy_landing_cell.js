Unit.prototype.getMy_landing_cell = function () {
    let min = [];
  
    let continent = allContinents[this.landing.base_cell.continent];
  
    for (let i = 0; i < continent.conturLine_sea_Cells.length; i++) {
      if (
        continent.conturLine_sea_Cells[i].sea === this.cell.sea &&
        this.checkGoodLandingCell(continent.conturLine_sea_Cells[i])
      ) {
        let dis = get_distanse_on_lineyka(
          this.landing.base_cell,
          50,
          continent.conturLine_sea_Cells[i],
          50
        );
  
        if (!min.length || min[0] > dis) {
          min = [dis, continent.conturLine_sea_Cells[i]];
        }
      }
    }
  
    if (
      !gameFielg[min[1].vertikal - 1][min[1].horizont].water ||
      !gameFielg[min[1].vertikal - 1][min[1].horizont + 1].water
    ) {
      min[1] = gameFielg[min[1].vertikal + 1][min[1].horizont];
    }
  
    ///*
    if (
      !gameFielg[min[1].vertikal][min[1].horizont + 1].water ||
      !gameFielg[min[1].vertikal - 1][min[1].horizont + 1].water
    ) {
      min[1] = gameFielg[min[1].vertikal][min[1].horizont - 2];
      //console.log("ok");
    }
  
    //min[1]=gameFielg[min[1].vertikal][min[1].horizont-2];
  
    return min[1];
  };