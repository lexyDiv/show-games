/* eslint-disable max-len */
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

const map_initialization = function () {
  // console.log("ini")

  let map_shahts_cells = [];
  let map_oil_cells = [];

  let basick_tem = [[], [], [], []];

  gameFielgMas = gameFielgMap.length;

  for (let i = 0; i < gameFielgMas; i++) {
    gameFielg.push([]);
  }

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielgMas; k++) {
      persNmbr++;

      let cell = new Obj(gameFielgMap[i][k], i, k, persNmbr);

      if (gameFielgMap[i][k] === "basick_tem") {
        basick_tem[0].push(cell);
      }

      cell.imageToDraw = new Image();
      cell.imageToDraw.src = `wc/grunt/${season}/basick.png`;
      cell.animX = Math.floor(Math.random() * 30) * 100;

      cell.sloy = 4;

      if (gameFielgMap[i][k] === 9) {
        // gameFielgMap[i][k]=w;
        cell.type = "water";
        map_oil_cells.push(cell);
      } else if (gameFielgMap[i][k] === "shahta") {
        // gameFielgMap[i][k]=0;

        map_shahts_cells.push(cell);
        // cell.animX=Math.floor(Math.random()*12)*100;

        // cell.sloy=0;
        // cell.sw=true;
        // console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === 1) {
        // gameFielgMap[i][k]=0;

        freeLandObjects.push(new LandObj("wood", k, i));

        woods.push(freeLandObjects[freeLandObjects.length - 1]);
        cell.animX = Math.floor(Math.random() * 12) * 100;

        // cell.sloy=0;
        // cell.sw=true;
        // console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === "gora") {
        // gameFielgMap[i][k]=0;

        let obj = new LandObj("gora", k, i);

        gory.push(obj);
        cell.gora = true;

        cell.animX = Math.floor(Math.random() * 12) * 100;

        // cell.sloy=4;
        // cell.sw=true;
        // console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === "stena") {
        // gameFielgMap[i][k]=0;

        let obj = new LandObj("stena", k, i);

        obj.cell = cell;
        cell.free = false;
        cell.unit = obj;
        obj.neitral = true;
        steny.push(obj);
        cell.stena = true;

        // cell.animX=Math.floor(Math.random()*12)*100;

        // cell.sloy=4;
        // cell.sw=true;
        // console.log(freeLandObjects[0]);
      }

      gameFielg[i].push(cell);
    }
  }

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      // console.log("ok");
      const fieldCell = gameFielg[i][k];
      fieldCell.aroundCells = [];

      for (let v = i - 1; v <= i + 1; v++) {
        for (let g = k - 1; g <= k + 1; g++) {
          // console.log("ok");
          const cellData = gameFielg[v] && gameFielg[v][g];
          cellData && fieldCell.aroundCells.push(cellData);
          if (cellData && !(i === v && k === g)) {
            fieldCell.contact_map_cells.push(cellData);

            let cell = new SablonObj(g, v, fieldCell, null, cellData);

            fieldCell.contaktCells.push(cell);

            cell.contaktCellsGetVektors(fieldCell, "cell");
            // console.log("ok");
          }
        }
      }

      fieldCell.cellsForUnitCellUpdate = [];
      
      for (let ver = fieldCell.vertikal - 11; ver <= fieldCell.vertikal + 11; ver++) {
        fieldCell.cellsForUnitCellUpdate.push([]);
        for (let hor = fieldCell.horizont - 11; hor <= fieldCell.horizont + 11; hor++) {
          const cellForUCU = gameFielg[ver] && gameFielg[ver][hor];

          if (cellForUCU) {
            fieldCell.cellsForUnitCellUpdate[fieldCell.cellsForUnitCellUpdate.length - 1].push(cellForUCU);
          }
        }
      }
    }
  }

  /// /////////////////////////////////////////////////////////////////////////////////////////////

  /// //////////////////////////////////////////////////////// basick_tem

  // console.log(basick_tem)

  for (let j = 0; j < basick_tem.length - 1; j++) {
    for (let i = 0; i < basick_tem[j].length; i++) {
      let cell = basick_tem[j][i];

      for (let k = 0; k < cell.contact_map_cells.length; k++) {
        let obj = cell.contact_map_cells[k];

        // console.log(obj); pausa=1; return

        if (
          !obj.water
          && !obj.water_line
          && !obj.under_wood
          && (!obj.basick_tem || obj.basick_tem > j + 1)
        ) {
          if (j < 2 || !Math.floor(Math.random() * 3)) {
            basick_tem[j + 1].push(obj);
            obj.imageToDraw = new Image();
            obj.imageToDraw.src = `wc/grunt/summer/basick_tem${String(1)}.png`; // img[j];
            obj.basick_tem = j + 1;
            obj.sloy = 7;
            // obj.sw=true;
            obj.animX = Math.floor(Math.random() * 12) * 100; // 12
          }
        }
      }

      // cell.contact_map_cells=[];
    }
  }

  /// ////////////////////////////////////////////////////////////

  let under_wood = [];

  let bereg = water_initialization();

  let round_pesok_1 = [];
  let round_pesok_2 = [];
  let round_pesok_3 = [];

  let round_stown_1 = [];
  let round_stown_2 = [];
  let round_stown_3 = [];

  let alter_grunt = [];

  /// ////////////////////////// new

  let rw = [[], [], [], []];

  /// //////////////////////////////

  for (let i = 0; i < woods.length; i++) {
    let cell = gameFielg[woods[i].vertikal][woods[i].horizont];

    // console.log(cell);

    cell.imageToDraw = new Image();
    cell.imageToDraw.src = "wc/grunt/summer/under_wood.png";
    cell.under_wood = true;
    cell.sloy = 6;
    rw[0].push(cell);
    cell.animX = Math.floor(Math.random() * 60) * 100; // 60
  }

  for (let j = 0; j < rw.length - 1; j++) {
    for (let i = 0; i < rw[j].length; i++) {
      let cell = rw[j][i];

      for (let k = 0; k < cell.contact_map_cells.length; k++) {
        let obj = cell.contact_map_cells[k];

        // console.log(obj); pausa=1; return

        if (
          !obj.water
          && !obj.water_line
          && !obj.under_wood
          && (!obj.round_wood || obj.round_wood > j + 1)
        ) {
          rw[j + 1].push(obj);
          obj.imageToDraw = new Image();
          obj.imageToDraw.src = `wc/grunt/summer/round_wood_${String(j + 1)}.png`; // img[j];
          obj.round_wood = j + 1;
          obj.sloy = 4 + j;
          // obj.sw=true;
          obj.animX = Math.floor(Math.random() * 12) * 100; // 12
        }
      }

      // cell.contact_map_cells=[];
    }
  }

  /// //////////////////////////////////////////////////////////////////  bereg

  for (let i = 0; i < bereg.length; i++) {
    let cell = bereg[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (!obj.water && !obj.water_line) {
        round_pesok_1.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_pesok_1.png";
        obj.round_pesok_1 = true;
        obj.sloy = 2;
        obj.animX = Math.floor(Math.random() * 5) * 100;

        // obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_pesok_1.length; i++) {
    let cell = round_pesok_1[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (!obj.water && !obj.water_line && !obj.round_pesok_1) {
        round_pesok_2.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_pesok_2.png";
        obj.round_pesok_2 = true;
        obj.sloy = 3;
        obj.animX = Math.floor(Math.random() * 7) * 100;
        // obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_pesok_2.length; i++) {
    let cell = round_pesok_2[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water
        && !obj.water_line
        && !obj.round_pesok_1
        && !obj.round_pesok_2
        && !obj.under_wood
        && !obj.round_wood_1
        && !obj.round_wood_2
        && !Math.floor(Math.random() * 100)
      ) {
        round_pesok_3.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_pesok_3.png";
        obj.round_pesok_3 = true;
        obj.sloy = 2;
        obj.animX = Math.floor(Math.random() * 1) * 100;
        // obj.sw=true;
      }
    }
  }

  /// //////////////////////////////////////////////////////////////////  gory

  let g_c = [];

  for (let i = 0; i < gory.length; i++) {
    g_c.push(gameFielg[gory[i].vertikal][gory[i].horizont]);
    g_c.push(gameFielg[gory[i].vertikal + 1][gory[i].horizont]);
    g_c.push(gameFielg[gory[i].vertikal + 1][gory[i].horizont + 1]);
    g_c.push(gameFielg[gory[i].vertikal][gory[i].horizont + 1]);
  }

  for (let i = 0; i < g_c.length; i++) {
    let cell = g_c[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water
        && !obj.water_line
        && !obj.round_pesok_1
        // &&
        //! obj.round_pesok_2
        // &&
        //! obj.round_pesok_3
        // &&
        //! obj.round_wood_1
        // &&
        //! obj.round_wood_2
        // &&
        //! obj.round_wood_3
      ) {
        round_stown_1.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_1.png";
        obj.round_stown_1 = true;
        obj.sloy = 2;
        obj.animX = Math.floor(Math.random() * 30) * 100;
        // obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_stown_1.length; i++) {
    let cell = round_stown_1[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water
        && !obj.water_line
        && !obj.round_pesok_1
        && !obj.round_pesok_2
        // &&
        //! obj.round_pesok_3
        // &&
        //! obj.round_wood_1
        // &&
        //! obj.round_wood_2
        // &&
        //! obj.round_wood_3
        && !obj.round_stown_1
      ) {
        round_stown_2.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_2.png";
        obj.round_stown_2 = true;
        obj.sloy = 1;
        obj.animX = Math.floor(Math.random() * 12) * 100;
        // obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_stown_2.length; i++) {
    let cell = round_stown_2[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water
        && !obj.water_line
        // &&
        //! obj.round_pesok_1
        // &&
        //! obj.round_pesok_2
        // &&
        //! obj.round_pesok_3
        // &&
        //! obj.round_wood_1
        // &&
        //! obj.round_wood_2
        // &&
        //! obj.round_wood_3
        && !obj.round_stown_1
        && !obj.round_stown_2
        && !Math.floor(Math.random() * 10)
      ) {
        round_stown_3.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_3.png";
        obj.round_stown_3 = true;
        obj.sloy = 0;
        obj.animX = Math.floor(Math.random() * 12) * 100;
        // obj.sw=true;
      }
    }
  }

  for (let i = 0; i < map_shahts_cells.length; i++) {
    let obj = map_shahts_cells[i];

    let shahta = new LandObj(1, obj.horizont, obj.vertikal);

    get_map_gold(shahta, i);

    freeLandObjects.push(shahta);
  }

  map_shahts_cells = [];

  for (let i = 0; i < map_oil_cells.length; i++) {
    let obj = map_oil_cells[i];

    let oil = new LandObj("oil", obj.horizont, obj.vertikal);

    get_map_oil(oil, i);

    freeLandObjects.push(oil);
    // shahts.push(shahta);
  }

  map_oil_cells = [];

  /// *

  //* /
};
