/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const check_continents = function () {
  let continents = 0;
  let cells = [];

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      let cell = gameFielg[i][k];

      if (cell.type !== "water" && !cell.stop_block && !cell.continent) {
        continents++;

        let con = new Continent(continents);

        allContinents.push(con);

        cell.continent = continents;
        cells.push(cell);
        con.cells.push(cell);

        for (let j = cells.length - 1; j < cells.length; j++) {
          for (let v = cells[j].vertikal - 1; v <= cells[j].vertikal + 1; v++) {
            for (
              let h = cells[j].horizont - 1;
              h <= cells[j].horizont + 1;
              h++
            ) {
              if (
                gameFielg[v]
                && gameFielg[v][h]
                && !gameFielg[v][h].water
                && !gameFielg[v][h].stop_block
                && !gameFielg[v][h].continent
              ) {
                let c = gameFielg[v][h];

                c.continent = continents;

                cells.push(c);
                allContinents[allContinents.length - 1].cells.push(c);
              }
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < allContinents.length; i++) {
    let my_seas = [];

    for (let k = 0; k < allContinents[i].cells.length; k++) {
      for (
        let j = allContinents[i].cells[k].vertikal - 1;
        j <= allContinents[i].cells[k].vertikal + 1;
        j++
      ) {
        for (
          let l = allContinents[i].cells[k].horizont - 1;
          l <= allContinents[i].cells[k].horizont + 1;
          l++
        ) {
          if (gameFielg[j] && gameFielg[j][l] && gameFielg[j][l].water) {
            // console.log("water");
            if (
              allContinents[i].conturLineCells.indexOf(
                allContinents[i].cells[k],
              ) === -1
            ) {
              allContinents[i].conturLineCells.push(allContinents[i].cells[k]);
            }

            if (
              allContinents[i].conturLine_sea_Cells.indexOf(gameFielg[j][l])
              === -1
            ) {
              allContinents[i].conturLine_sea_Cells.push(gameFielg[j][l]);
            }

            if (my_seas.indexOf(gameFielg[j][l].sea) === -1) {
              my_seas.push(gameFielg[j][l].sea);
            }
          }
        }
      }
    }

    for (let y = 1; y < allSeas.length; y++) {
      allContinents[i].my_seas.push(0);
    }

    /// *
    for (let k = 1; k < allSeas.length; k++) {
      /// *
      if (my_seas.indexOf(allSeas[k].number) !== -1) {
        allContinents[i].my_seas[allSeas[k].number] = [];

        // console.log("ok");
      }
      //* /
      // console.log(allSeas[k].number);
    }

    //* /

    for (let k = 0; k < allContinents[i].conturLine_sea_Cells.length; k++) {
      let cell = allContinents[i].conturLine_sea_Cells[k];

      allContinents[i].my_seas[cell.sea].push(cell);
    }
  }

  /*
    for(let v=cell.vertikal-1;v<=cell.vertikal+1;v++){
        for(let h=cell.horizont-1;h<=cell.horizont+1;h++){

        if(
    indexOf()
        )

    };
    };
    */

  allContinents.unshift("luft");

  for (let i = 0; i < gory.length; i++) {
    let obj = gory[i];

    obj.cell = gameFielg[obj.vertikal][obj.horizont];
    obj.cell.unit = obj;
    obj.cell.free = false;
    obj.cell.continent = false;
    obj.cell.gora = true;
    obj.neitral = true;

    // obj.imageToDraw=new Image();
    // obj.imageToDraw.src="grunt/summer/gora_1.png";

    gameFielg[obj.vertikal + 1][obj.horizont].free = false;
    gameFielg[obj.vertikal + 1][obj.horizont].unit = obj;
    gameFielg[obj.vertikal + 1][obj.horizont].continent = false;
    gameFielg[obj.vertikal + 1][obj.horizont].gora = true;

    gameFielg[obj.vertikal][obj.horizont + 1].free = false;
    gameFielg[obj.vertikal][obj.horizont + 1].unit = obj;
    gameFielg[obj.vertikal][obj.horizont + 1].continent = false;
    gameFielg[obj.vertikal][obj.horizont + 1].gora = true;

    gameFielg[obj.vertikal + 1][obj.horizont + 1].free = false;
    gameFielg[obj.vertikal + 1][obj.horizont + 1].unit = obj;
    gameFielg[obj.vertikal + 1][obj.horizont + 1].continent = false;
    gameFielg[obj.vertikal + 1][obj.horizont + 1].gora = true;

    obj.check_gory();
  }

  for (let i = 0; i < steny.length; i++) {
    steny[i].check_steny();
  }

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      let obj = gameFielg[i][k];

      obj.contact_map_cells = [];
    }
  }

  gory = [];
  steny = [];

  // console.log(allContinents);
};
