/* eslint-disable no-undef */
LandObj.prototype.check_steny = function () {
  let left = 'n';
  let right = 'n';
  let up = 'n';
  let down = 'n';

  const vert = this.cell.vertikal;
  const hor = this.cell.horizont;

  if (
    gameFielg[vert - 1]
    && gameFielg[vert - 1][hor]
    && gameFielg[vert - 1][hor].stena
  ) {
    up = 'y';
  }
  if (
    gameFielg[vert + 1]
    && gameFielg[vert + 1][hor]
    && gameFielg[vert + 1][hor].stena
  ) {
    down = 'y';
  }

  if (
    gameFielg[vert]
    && gameFielg[vert][hor - 1]
    && gameFielg[vert][hor - 1].stena
  ) {
    left = 'y';
  }
  if (
    gameFielg[vert]
    && gameFielg[vert][hor + 1]
    && gameFielg[vert][hor + 1].stena
  ) {
    right = 'y';
  }

  let vc;
  let hc;

  if (vert % 2 === 0) {
    vc = 'chet';
  } else {
    vc = 'nechet';
  }
  if (hor % 2 === 0) {
    hc = 'chet/';
  } else {
    hc = 'nechet/';
  }

  this.imageToDraw = new Image();
  this.imageToDraw.src = `wc/grunt/stena/${vc}${hc}${left}${right}${up}${down}.png`;
};

LandObj.prototype.check_gory = function () {
  let left;
  let right;

  this.animX = Math.floor(Math.random() * 5) * 200;

  if (
    !gameFielg[this.vertikal][this.horizont - 1]
    || gameFielg[this.vertikal][this.horizont - 1].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal][this.horizont + 2]
    || gameFielg[this.vertikal][this.horizont + 2].gora
  ) {
    right = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont]
    || gameFielg[this.vertikal - 1][this.horizont].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont + 1]
    || gameFielg[this.vertikal - 1][this.horizont + 1].gora
  ) {
    right = true;
  }

  if (!left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_free.png`;
  } else if (left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_closed.png`;
  } else if (!left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_left_free.png`;
  } else if (left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_right_free.png`;
  }
};

LandObj.prototype.player_pro_draw = function () {
  //console.log(this.type);

  ctx.globalAlpha = 0.5;

  this.buildready = this.hpfull;

  if (this.type === 2) {
    ctx.drawImage(
      this.imageToDraw,
      0,
      0,
      100,
      100,
      this.x + removeX - 60,
      this.y + removeY - 125,
      this.pro_x,
      this.pro_y
    );
  } else {
    //ctx.drawImage(this.imageToDraw,0,0,100,100,this.x+removeX,this.y+removeY-50,this.pro_x,this.pro_y);
    this.draw();
  }

  ctx.globalAlpha = 1;

  if (mig_vector) {
    mig += 0.02;
  } else {
    mig -= 0.02;
  }

  if (mig >= 0.6) {
    mig_vector = 0;
  }
  if (mig <= 0.2) {
    mig_vector = 1;
  }

  ctx.globalAlpha = mig;

  for (let i = 0; i < cells_player_building_pro.length; i++) {
    if (cells_player_building_pro[i]) {
      let x = cells_player_building_pro[i].x;
      let y = cells_player_building_pro[i].y;

      ctx.fillStyle = "red";
      ctx.fillRect(x + removeX, y + removeY, 50, 50);
    }
  }

  ctx.globalAlpha = 1;
};

LandObj.prototype.player_pro_building_position = function () {
  let vertikal = Math.floor((obj.y - removeY) / 50);
  let horizont = Math.floor((obj.x - removeX) / 50);

  this.horizont = horizont;
  this.vertikal = vertikal;

  this.x = this.horizont * 50;
  this.y = this.vertikal * 50;

  let sound = false;

  if (this.type === "oil_platform") {
    let ok;

    if (
      gameFielg[this.vertikal] &&
      gameFielg[this.vertikal][this.horizont] &&
      gameFielg[this.vertikal - 1] &&
      gameFielg[this.vertikal - 1][this.horizont] &&
      gameFielg[this.vertikal - 1][this.horizont + 1] &&
      gameFielg[this.vertikal][this.horizont + 1] &&
      gameFielg[this.vertikal][this.horizont].oil &&
      gameFielg[this.vertikal - 1][this.horizont].oil &&
      gameFielg[this.vertikal - 1][this.horizont + 1].oil &&
      gameFielg[this.vertikal][this.horizont + 1].oil
    ) {
      ok = true;
    } else if (
      gameFielg[this.vertikal] &&
      gameFielg[this.vertikal][this.horizont] &&
      gameFielg[this.vertikal - 1] &&
      gameFielg[this.vertikal - 1][this.horizont] &&
      gameFielg[this.vertikal - 1][this.horizont + 1] &&
      gameFielg[this.vertikal][this.horizont + 1]
    ) {
      cells_player_building_pro.push(gameFielg[this.vertikal][this.horizont]);

      cells_player_building_pro.push(
        gameFielg[this.vertikal - 1][this.horizont]
      );

      cells_player_building_pro.push(
        gameFielg[this.vertikal - 1][this.horizont + 1]
      );

      cells_player_building_pro.push(
        gameFielg[this.vertikal][this.horizont + 1]
      );
    }

    if (ok && player_pro_building_click) {
      //sound=true;

      let obj = new LandObj(
        "oil_platform",
        this.horizont,
        this.vertikal,
        0,
        this.fatherFraction
      );

      //console.log(gameFielg[this.vertikal][this.horizont])

      obj.cells = gameFielg[this.vertikal][this.horizont].oil.cells;
      obj.cell = gameFielg[this.vertikal][this.horizont];

      for (let i = 0; i < obj.cells.length; i++) {
        obj.cells[i].unit = obj;
      }

      this.fatherFraction.buildings.push(obj);
      this.fatherFraction.oil_platforms.push(obj);
      this.fatherFraction.activeBuildings.push(obj);

      player_pro_building = false;
      player.selectIsSweem = [];

      this.fatherFraction.gold -= 1000;
      this.fatherFraction.wood -= 300;
    }
  } else if (
    this.type === "port" ||
    this.type === "oil_Ref" ||
    this.type === "foundry"
  ) {
    let ok = true;

    let cont_cells = [];
    let sea_cells = [];

    let cells = [];

    for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
      for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          cells.push(gameFielg[i][k]);

          if (gameFielg[i][k].continent) {
            cont_cells.push(gameFielg[i][k]);
          } else if (gameFielg[i][k].sea) {
            sea_cells.push(gameFielg[i][k]);
          }

          if (!gameFielg[this.vertikal][this.horizont].sea) {
            cells_player_building_pro.push(gameFielg[i][k]);
          }
        }
      }
    }

    if (!cells_player_building_pro.length) {
      for (let i = 0; i < cont_cells.length; i++) {
        let c = cont_cells[i];

        if (!c.free || c.continent !== in_unit_menu.cell.continent) {
          cells_player_building_pro.push(c);
        }
      }

      for (let i = 0; i < sea_cells.length; i++) {
        let c = sea_cells[i];

        if (c.unit || c.vossalObj) {
          cells_player_building_pro.push(c);
        }
      }

      if (!cont_cells.length) {
        cells_player_building_pro = cells;
      }
    }

    if (!cells_player_building_pro.length && player_pro_building_click) {
      sound = true;

      ///*
      player_pro_building_click = false;

      //console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont]
      );

      if (!in_unit_menu.active) {
        in_unit_menu.fatherFraction.activeUnits.push(in_unit_menu);
        in_unit_menu.active = true;
      }

      in_unit_menu.list = 1;
      player_pro_building = false;
      player.selectUnits = [];
      //*/

      //console.log("ok");
    }

    //if(ok&&gameFielg[this.vertikal][this.horizont].sea){console.log("ok")};
  } else if (this.type === 2) {
    let ok = 0;

    for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
      for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          gameFielg[i][k].free &&
          !gameFielg[i][k].stopTownHoll.length &&
          !gameFielg[i][k].stopBuild &&
          gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          //ctx.fillStyle="red"	;
          //ctx.fillRect(gameFielg[i][k].x+removeX,gameFielg[i][k].y+removeY,50,50);

          let obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    //console.log(ok);

    if (ok === 9 && player_pro_building_click) {
      player_pro_building_click = false;

      sound = true;

      //console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont]
      );

      if (!in_unit_menu.active) {
        in_unit_menu.fatherFraction.activeUnits.push(in_unit_menu);
        in_unit_menu.active = true;
      }

      player_pro_building = false;
      player.selectUnits = [];
    }
  } else if (this.gabarit === 150) {
    let ok = 0;

    for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
      for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          gameFielg[i][k].free &&
          // &&
          //!gameFielg[i][k].stopTownHoll.length
          !gameFielg[i][k].stopBuild &&
          gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          //ctx.fillStyle="red"	;
          //ctx.fillRect(gameFielg[i][k].x+removeX,gameFielg[i][k].y+removeY,50,50);

          let obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    //console.log(ok);

    if (ok === 9 && player_pro_building_click) {
      player_pro_building_click = false;

      sound = true;

      //console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont]
      );

      if (!in_unit_menu.active) {
        in_unit_menu.fatherFraction.activeUnits.push(in_unit_menu);
        in_unit_menu.active = true;
      }

      player_pro_building = false;
      player.selectUnits = [];
    }
  } else if (this.gabarit === 100) {
    let ok = 0;

    for (let i = this.vertikal - 1; i <= this.vertikal; i++) {
      for (let k = this.horizont; k <= this.horizont + 1; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          gameFielg[i][k].free &&
          // &&
          //!gameFielg[i][k].stopTownHoll.length
          !gameFielg[i][k].stopBuild &&
          gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          //ctx.fillStyle="red"	;
          //ctx.fillRect(gameFielg[i][k].x+removeX,gameFielg[i][k].y+removeY,50,50);

          let obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    //console.log(ok);

    if (ok === 4 && player_pro_building_click) {
      player_pro_building_click = false;

      //console.log(this.unitName)
      sound = true;

      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont]
      );

      if (!in_unit_menu.active) {
        in_unit_menu.fatherFraction.activeUnits.push(in_unit_menu);
        in_unit_menu.active = true;
      }

      player_pro_building = false;
      player.selectUnits = [];
    }
  }

  if (sound) {
    if (!in_unit_menu.voice) {
      in_unit_menu.voice = true;

      select_sound(in_unit_menu, "build_sound");
    }
  }
};

LandObj.prototype.extreamGetOutCell = function () {
  let free = [];

  for (let i = 0; i < gameFielg.length; i++) {
    for (let k = 0; k < gameFielg[i].length; k++) {
      if (gameFielg[i][k].free) {
        free.push(gameFielg[i][k]);
      }
    }
  }

  let min = [];

  for (let i = 0; i < free.length; i++) {
    let a = free[i].x - this.x;
    let b = free[i].y - this.y;

    let c = Math.sqrt(a * a + b * b);

    if (!min.length || c < min[0]) {
      min = [c, free[i]];
    }
  }

  return min[1];
};

LandObj.prototype.getOutCell = function () {
  let free = [];

  for (let i = 0; i < this.contaktCells.length; i++) {
    if (
      gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .free === true &&
      !gameFielg[this.contaktCells[i].vertikal][this.contaktCells[i].horizont]
        .timer
    ) {
      free.push(this.contaktCells[i]);
    }
  }

  let min = 0;

  for (let i = 0; i < free.length; i++) {
    if (!min || free[i].outPrioritet < min.outPrioritet) {
      min = free[i];
    }
  }

  //console.log(min.outPrioritet);

  return min;
};
