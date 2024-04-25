/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.createShablon_reposition = function (arg) {
  const cells = [];
  let brc = 0;

  let radius = 0;

  for (let i = 0; i < this.base_cells.length; i++) {
    const dis = get_distanse_on_lineyka(
      this.startPoint,
      50,
      this.base_cells[i],
      50,
    );

    if (radius < dis) {
      radius = dis;
    }
  }

  if (arg.gabarit === 100) {
    for (let i = 0; i < this.base_cells.length; i++) {
      const obj = this.base_cells[i];

      const dis = get_distanse_on_lineyka(obj, 100, this.startPoint, 50);

      if (
      // dis>500&&dis<1400
        dis > radius / 3
          && dis < radius / 1.5
          && this.conturLineCells.indexOf(obj) === -1
      ) {
        cells.push(obj);
        // cc.push(obj);
      }
    }

    brc = 0;

    while (true) {
      brc++;

      const ran = Math.floor(Math.random() * cells.length);

      const farm_cells = [];

      let ok = 0;

      for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal; v++) {
        for (let h = cells[ran].horizont; h <= cells[ran].horizont + 1; h++) {
          if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].free) {
            ok++;
            farm_cells.push(gameFielg[v][h]);
          }
        }
      }

      if (ok === 4) {
        // cc.push(cells[ran]);

        // this.createShablon.farms.push(new SablonObj(cells[ran].horizont,cells[ran].vertikal));
        return new SablonObj(cells[ran].horizont, cells[ran].vertikal);
        // brc=1000;

        /*
    for(let i=cells[ran].vertikal-2;i<=cells[ran].vertikal+1;i++){
    for(let k=cells[ran].horizont;k<=cells[ran].horizont+1;k++){

        if(gameFielg[i]&&gameFielg[i][k]){gameFielg[i][k].ii_free=false;};

    };
    };
    */
        /*
    for(let i=0;i<farm_cells.length;i++){
        farm_cells[i].ii_free=false;
    };
    */
      }

      if (brc >= 1000) {
        break;
      }
    }
  } else {
    let brc = 0;
    const cells = [];

    for (let i = 0; i < this.base_cells.length; i++) {
      const obj = this.base_cells[i];

      const dis = get_distanse_on_lineyka(obj, 50, this.startPoint, 50);

      if (
      // dis>500&&dis<1400
        dis > radius / 4
          && dis < radius / 1.5
          && this.conturLineCells.indexOf(obj) === -1
      ) {
        cells.push(obj);
        // cc.push(obj);
      }
    }

    while (true) {
      brc++;

      const ran = Math.floor(Math.random() * cells.length);

      const farm_cells = [];

      let ok = 0;

      for (let v = cells[ran].vertikal - 1; v <= cells[ran].vertikal + 1; v++) {
        for (
          let h = cells[ran].horizont - 1;
          h <= cells[ran].horizont + 1;
          h++
        ) {
          if (gameFielg[v] && gameFielg[v][h] && gameFielg[v][h].free) {
            ok++;
            farm_cells.push(gameFielg[v][h]);
          }
        }
      }

      if (ok === 9) {
        return new SablonObj(cells[ran].horizont, cells[ran].vertikal);

        // brc=1000;

        /*
    for(let i=0;i<farm_cells.length;i++){
        farm_cells[i].ii_free=false;
    };
    */
      }

      if (brc >= 1000) {
        break;
      }
    }
  }
};
