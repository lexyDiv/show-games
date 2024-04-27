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

const check_seas = function () {
  let seas = 0;
  let cells = [];

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      let cell = gameFielg[i][k];

      if (
        cell.type === "water"
        // &&
        // !cell.stop_block
        && !cell.sea
      ) {
        seas++;

        let con = new Sea(seas);

        allSeas.push(con);

        cell.sea = seas;
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
                && gameFielg[v][h].water
                // &&
                //! gameFielg[v][h].stop_block
                && !gameFielg[v][h].sea
              ) {
                let c = gameFielg[v][h];

                c.sea = seas;

                cells.push(c);
                allSeas[allSeas.length - 1].cells.push(c);
              }
            }
          }
        }
      }
    }
  }

  /// *

  for (let i = 0; i < allSeas.length; i++) {
    for (let k = 0; k < allSeas[i].cells.length; k++) {
      for (
        let j = allSeas[i].cells[k].vertikal - 1;
        j <= allSeas[i].cells[k].vertikal + 1;
        j++
      ) {
        for (
          let l = allSeas[i].cells[k].horizont - 1;
          l <= allSeas[i].cells[k].horizont + 1;
          l++
        ) {
          if (gameFielg[j] && gameFielg[j][l] && !gameFielg[j][l].water) {
            // console.log("water");
            if (
              allSeas[i].conturLineCells.indexOf(allSeas[i].cells[k]) === -1
            ) {
              allSeas[i].conturLineCells.push(allSeas[i].cells[k]);
            }
          }
        }
      }
    }
  }

  // allContinents.unshift("luft");
  allSeas.unshift("luft");
};
