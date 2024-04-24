const map_initialization = function () {
  //console.log("ini")

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
      cell.imageToDraw.src = "wc/grunt/" + season + "/basick.png";
      cell.animX = Math.floor(Math.random() * 30) * 100;

      cell.sloy = 4;

      if (gameFielgMap[i][k] === 9) {
        //gameFielgMap[i][k]=w;
        cell.type = "water";
        map_oil_cells.push(cell);
      } else if (gameFielgMap[i][k] === "shahta") {
        //gameFielgMap[i][k]=0;

        map_shahts_cells.push(cell);
        //cell.animX=Math.floor(Math.random()*12)*100;

        //cell.sloy=0;
        //cell.sw=true;
        //console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === 1) {
        //gameFielgMap[i][k]=0;

        freeLandObjects.push(new LandObj("wood", k, i));

        woods.push(freeLandObjects[freeLandObjects.length - 1]);
        cell.animX = Math.floor(Math.random() * 12) * 100;

        //cell.sloy=0;
        //cell.sw=true;
        //console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === "gora") {
        //gameFielgMap[i][k]=0;

        let obj = new LandObj("gora", k, i);

        gory.push(obj);
        cell.gora = true;

        cell.animX = Math.floor(Math.random() * 12) * 100;

        //cell.sloy=4;
        //cell.sw=true;
        //console.log(freeLandObjects[0]);
      } else if (gameFielgMap[i][k] === "stena") {
        //gameFielgMap[i][k]=0;

        let obj = new LandObj("stena", k, i);

        obj.cell = cell;
        cell.free = false;
        cell.unit = obj;
        obj.neitral = true;
        steny.push(obj);
        cell.stena = true;

        //cell.animX=Math.floor(Math.random()*12)*100;

        //cell.sloy=4;
        //cell.sw=true;
        //console.log(freeLandObjects[0]);
      }

      gameFielg[i].push(cell);
    }
  }

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      //console.log("ok");

      for (let v = i - 1; v <= i + 1; v++) {
        for (let g = k - 1; g <= k + 1; g++) {
          //console.log("ok");

          if (gameFielg[v] && gameFielg[v][g] && !(i === v && k === g)) {
            gameFielg[i][k].contact_map_cells.push(gameFielg[v][g]);

            let cell = new SablonObj(g, v, gameFielg[i][k]);

            gameFielg[i][k].contaktCells.push(cell);

            cell.contaktCellsGetVektors(gameFielg[i][k], "cell");
            //console.log("ok");
          }
        }
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////// basick_tem

  //console.log(basick_tem)

  for (let j = 0; j < basick_tem.length - 1; j++) {
    for (let i = 0; i < basick_tem[j].length; i++) {
      let cell = basick_tem[j][i];

      for (let k = 0; k < cell.contact_map_cells.length; k++) {
        let obj = cell.contact_map_cells[k];

        //console.log(obj); pausa=1; return

        if (
          !obj.water &&
          !obj.water_line &&
          !obj.under_wood &&
          (!obj.basick_tem || obj.basick_tem > j + 1)
        ) {
          if (j < 2 || !Math.floor(Math.random() * 3)) {
            basick_tem[j + 1].push(obj);
            obj.imageToDraw = new Image();
            obj.imageToDraw.src =
              "wc/grunt/summer/basick_tem" + String(1) + ".png"; //img[j];
            obj.basick_tem = j + 1;
            obj.sloy = 7;
            //obj.sw=true;
            obj.animX = Math.floor(Math.random() * 12) * 100; //12
          }
        }
      }

      //cell.contact_map_cells=[];
    }
  }

  ///////////////////////////////////////////////////////////////

  let under_wood = [];

  let bereg = water_initialization();

  let round_pesok_1 = [];
  let round_pesok_2 = [];
  let round_pesok_3 = [];

  let round_stown_1 = [];
  let round_stown_2 = [];
  let round_stown_3 = [];

  let alter_grunt = [];

  ///////////////////////////// new

  let rw = [[], [], [], []];

  /////////////////////////////////

  for (let i = 0; i < woods.length; i++) {
    let cell = gameFielg[woods[i].vertikal][woods[i].horizont];

    //console.log(cell);

    cell.imageToDraw = new Image();
    cell.imageToDraw.src = "wc/grunt/summer/under_wood.png";
    cell.under_wood = true;
    cell.sloy = 6;
    rw[0].push(cell);
    cell.animX = Math.floor(Math.random() * 60) * 100; //60
  }

  for (let j = 0; j < rw.length - 1; j++) {
    for (let i = 0; i < rw[j].length; i++) {
      let cell = rw[j][i];

      for (let k = 0; k < cell.contact_map_cells.length; k++) {
        let obj = cell.contact_map_cells[k];

        //console.log(obj); pausa=1; return

        if (
          !obj.water &&
          !obj.water_line &&
          !obj.under_wood &&
          (!obj.round_wood || obj.round_wood > j + 1)
        ) {
          rw[j + 1].push(obj);
          obj.imageToDraw = new Image();
          obj.imageToDraw.src =
            "wc/grunt/summer/round_wood_" + String(j + 1) + ".png"; //img[j];
          obj.round_wood = j + 1;
          obj.sloy = 4 + j;
          //obj.sw=true;
          obj.animX = Math.floor(Math.random() * 12) * 100; //12
        }
      }

      //cell.contact_map_cells=[];
    }
  }

  /////////////////////////////////////////////////////////////////////  bereg

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

        //obj.sw=true;
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
        //obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_pesok_2.length; i++) {
    let cell = round_pesok_2[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water &&
        !obj.water_line &&
        !obj.round_pesok_1 &&
        !obj.round_pesok_2 &&
        !obj.under_wood &&
        !obj.round_wood_1 &&
        !obj.round_wood_2 &&
        !Math.floor(Math.random() * 100)
      ) {
        round_pesok_3.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_pesok_3.png";
        obj.round_pesok_3 = true;
        obj.sloy = 2;
        obj.animX = Math.floor(Math.random() * 1) * 100;
        //obj.sw=true;
      }
    }
  }

  /////////////////////////////////////////////////////////////////////  gory

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
        !obj.water &&
        !obj.water_line &&
        !obj.round_pesok_1
        //&&
        //!obj.round_pesok_2
        //&&
        //!obj.round_pesok_3
        //&&
        //!obj.round_wood_1
        //&&
        //!obj.round_wood_2
        //&&
        //!obj.round_wood_3
      ) {
        round_stown_1.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_1.png";
        obj.round_stown_1 = true;
        obj.sloy = 2;
        obj.animX = Math.floor(Math.random() * 30) * 100;
        //obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_stown_1.length; i++) {
    let cell = round_stown_1[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water &&
        !obj.water_line &&
        !obj.round_pesok_1 &&
        !obj.round_pesok_2 &&
        //&&
        //!obj.round_pesok_3
        //&&
        //!obj.round_wood_1
        //&&
        //!obj.round_wood_2
        //&&
        //!obj.round_wood_3
        !obj.round_stown_1
      ) {
        round_stown_2.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_2.png";
        obj.round_stown_2 = true;
        obj.sloy = 1;
        obj.animX = Math.floor(Math.random() * 12) * 100;
        //obj.sw=true;
      }
    }
  }

  for (let i = 0; i < round_stown_2.length; i++) {
    let cell = round_stown_2[i];

    for (let k = 0; k < cell.contact_map_cells.length; k++) {
      let obj = cell.contact_map_cells[k];

      if (
        !obj.water &&
        !obj.water_line &&
        //&&
        //!obj.round_pesok_1
        //&&
        //!obj.round_pesok_2
        //&&
        //!obj.round_pesok_3
        //&&
        //!obj.round_wood_1
        //&&
        //!obj.round_wood_2
        //&&
        //!obj.round_wood_3
        !obj.round_stown_1 &&
        !obj.round_stown_2 &&
        !Math.floor(Math.random() * 10)
      ) {
        round_stown_3.push(obj);
        obj.imageToDraw = new Image();
        obj.imageToDraw.src = "wc/grunt/summer/round_stown_3.png";
        obj.round_stown_3 = true;
        obj.sloy = 0;
        obj.animX = Math.floor(Math.random() * 12) * 100;
        //obj.sw=true;
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
    //shahts.push(shahta);
  }

  map_oil_cells = [];

  ///*

  //*/
};

const water_initialization = function () {
  let contur = [];

  for (let ver = 0; ver < gameFielg.length; ver++) {
    for (let hor = 0; hor < gameFielg[ver].length; hor++) {
      if (gameFielg[ver][hor].type === "water") {
        gameFielg[ver][hor].sloy = 3;

        let ran = Math.floor(Math.random() * 5);

        gameFielg[ver][hor].free = false;
        gameFielg[ver][hor].water = true;

        gameFielg[ver][hor].imageToDraw = ocean;

        gameFielg[ver][hor].animX = Math.floor(Math.random() * 8) * 100;
        gameFielg[ver][hor].animY = 0; //Math.floor(Math.random()*2)*100;;

        gameFielg[ver][hor].animX_2 = Math.floor(Math.random() * 8) * 100;
        gameFielg[ver][hor].animY_2 = 0; //Math.floor(Math.random()*2)*100;;

        gameFielg[ver][hor].freeWater = true;
        //gameFielg[ver][hor].gabX=80+ran;
        //gameFielg[ver][hor].gabY=80+ran;

        gameFielg[ver][hor].gabarit = 80 + ran;

        gameFielg[ver][hor].vector = Math.floor(Math.random() * 2);

        for (let i = ver - 1; i <= ver + 1; i++) {
          for (let k = hor - 1; k <= hor + 1; k++) {
            if (
              gameFielg[i] &&
              gameFielg[i][k] &&
              gameFielg[i][k].type !== "water"
            ) {
              gameFielg[i][k].water_line = true;

              gameFielg[i][k].sloy = 1;
              gameFielg[i][k].imageToDraw = pesok;

              gameFielg[i][k].stopBuild = true;
              contur.push(gameFielg[i][k]);

              gameFielg[ver][hor].priboy_line = true;

              gameFielg[ver][hor].sloy = 2;
              //console.log("water_line");
              gameFielg[ver][hor].imageToDraw = ocean;
            }
          }
        }
      }

      //if(gameFielg[ver][hor].type!=="water")	{console.log(!gameFielg[ver][hor].type==="water")};
    }
  }

  return contur;
};

//water_initialization();

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
                gameFielg[v] &&
                gameFielg[v][h] &&
                !gameFielg[v][h].water &&
                !gameFielg[v][h].stop_block &&
                !gameFielg[v][h].continent
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
            //console.log("water");
            if (
              allContinents[i].conturLineCells.indexOf(
                allContinents[i].cells[k]
              ) === -1
            ) {
              allContinents[i].conturLineCells.push(allContinents[i].cells[k]);
            }

            if (
              allContinents[i].conturLine_sea_Cells.indexOf(gameFielg[j][l]) ===
              -1
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

    ///*
    for (let k = 1; k < allSeas.length; k++) {
      ///*
      if (my_seas.indexOf(allSeas[k].number) !== -1) {
        allContinents[i].my_seas[allSeas[k].number] = [];

        //console.log("ok");
      }
      //*/
      //console.log(allSeas[k].number);
    }

    //*/

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

    //obj.imageToDraw=new Image();
    //obj.imageToDraw.src="grunt/summer/gora_1.png";

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

  //console.log(allContinents);
};

const check_seas = function () {
  let seas = 0;
  let cells = [];

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      let cell = gameFielg[i][k];

      if (
        cell.type === "water" &&
        //&&
        // !cell.stop_block
        !cell.sea
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
                gameFielg[v] &&
                gameFielg[v][h] &&
                gameFielg[v][h].water &&
                //&&
                //!gameFielg[v][h].stop_block
                !gameFielg[v][h].sea
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

  ///*

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
            //console.log("water");
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

  //allContinents.unshift("luft");
  allSeas.unshift("luft");

  //*/
  //	console.log(allSeas);
};
