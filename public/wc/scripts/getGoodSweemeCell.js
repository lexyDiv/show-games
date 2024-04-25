const get_good_sweeme_cell = function (vertikal, horizont, mass) {
  cells_on_check = [];

  let go_vertikal = vertikal;
  let go_horizont = horizont;

  //if(horizont<5){go_horizont=5;};

  let cells = [[], [], [], [], [], [], [], [], [], []];

  let go = 0;

  //cells_on_check.push(gameFielg[vertikal][horizont]);

  //cells.push(gameFielg[i][k]);

  //hz[0].push(gameFielg[vertikal][horizont]);
  cells[0].push(gameFielg[vertikal][horizont]);

  for (let j = 0; j < 7; j++) {
    ///*

    if (go) {
      for (let i = go_vertikal - go; i <= go_vertikal + go; i++) {
        //console.log( i );

        let k = go_horizont - go;

        for (let f = 0; f < 2; f++) {
          //console.log( (go_horizont+go) - (go_horizont-go));

          if (
            gameFielg[i] &&
            gameFielg[i][k] &&
            gameFielg[i][k].water &&
            gameFielg[i][k].sea === gameFielg[vertikal][horizont].sea &&
            !gameFielg[i][k].vossalObj &&
            (!gameFielg[i][k].unit || mass.indexOf(gameFielg[i][k].unit) !== -1)
          ) {
            //cells_on_check.push(gameFielg[i][k]);
            //hz[j].push(gameFielg[i][k]);
            cells[j].push(gameFielg[i][k]);
          }

          k = go_horizont + go;
        }
      }
    }

    //*/

    ///*

    let i = go_vertikal - go;

    for (let f = 0; f <= 1; f++) {
      //console.log("go : "+go);

      for (let k = go_horizont - (go - 1); k <= go_horizont + (go - 1); k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          gameFielg[i][k].water &&
          gameFielg[i][k].sea === gameFielg[vertikal][horizont].sea &&
          !gameFielg[i][k].vossalObj &&
          (!gameFielg[i][k].unit || mass.indexOf(gameFielg[i][k].unit) !== -1)
        ) {
          //cells_on_check.push(gameFielg[i][k]);
          //hz[j].push(gameFielg[i][k]);
          cells[j].push(gameFielg[i][k]);
        }
      }

      i = go_vertikal + go;
    }

    //*/

    go++;
  }

  /////////////////////////////////////////////////
  let good = [];
  let used = [];

  for (let j = 0; j < mass.length; j++) {
    let ok = false;

    for (let i = 0; i < cells.length; i++) {
      if (ok) {
        break;
      }

      for (let k = 0; k < cells[i].length; k++) {
        if (ok) {
          break;
        }

        let okSweeme = 0;
        let del = [];

        for (let v = cells[i][k].vertikal - 1; v <= cells[i][k].vertikal; v++) {
          if (ok) {
            break;
          }
          for (
            let h = cells[i][k].horizont;
            h <= cells[i][k].horizont + 1;
            h++
          ) {
            if (ok) {
              break;
            }

            if (
              gameFielg[v] &&
              gameFielg[v][h] &&
              used.indexOf(gameFielg[v][h]) === -1 &&
              gameFielg[v][h].water &&
              !gameFielg[v][h].vossalObj &&
              (!gameFielg[v][h].unit ||
                (gameFielg[v][h].unit &&
                  gameFielg[v][h].unit.persolalNumber ===
                    mass[j].persolalNumber) ||
                mass.indexOf(gameFielg[v][h].unit) !== -1)
            ) {
              okSweeme++;
              del.push(gameFielg[v][h]);
            } else {
              break;
            }
          }
        }

        if (okSweeme === 4) {
          ok = true;
          //console.log(i);
          //cells_on_check.push(cells[i][k]);
          good.push(cells[i][k]);
          cells[i][k].good = true;

          for (let m = 0; m < del.length; m++) {
            used.push(del[m]);
          }
        }

        if (ok) {
          break;
        }
      }
    }
  }

  //for(let i=0)

  return good;
};
