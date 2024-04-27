/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

LandObj.prototype.player_pro_building_position = function () {
  const vertikal = Math.floor((obj.y - removeY) / 50);
  const horizont = Math.floor((obj.x - removeX) / 50);

  this.horizont = horizont;
  this.vertikal = vertikal;

  this.x = this.horizont * 50;
  this.y = this.vertikal * 50;

  let sound = false;

  if (this.type === 'oil_platform') {
    let ok;

    if (
      gameFielg[this.vertikal]
      && gameFielg[this.vertikal][this.horizont]
      && gameFielg[this.vertikal - 1]
      && gameFielg[this.vertikal - 1][this.horizont]
      && gameFielg[this.vertikal - 1][this.horizont + 1]
      && gameFielg[this.vertikal][this.horizont + 1]
      && gameFielg[this.vertikal][this.horizont].oil
      && gameFielg[this.vertikal - 1][this.horizont].oil
      && gameFielg[this.vertikal - 1][this.horizont + 1].oil
      && gameFielg[this.vertikal][this.horizont + 1].oil
    ) {
      ok = true;
    } else if (
      gameFielg[this.vertikal]
      && gameFielg[this.vertikal][this.horizont]
      && gameFielg[this.vertikal - 1]
      && gameFielg[this.vertikal - 1][this.horizont]
      && gameFielg[this.vertikal - 1][this.horizont + 1]
      && gameFielg[this.vertikal][this.horizont + 1]
    ) {
      cells_player_building_pro.push(gameFielg[this.vertikal][this.horizont]);

      cells_player_building_pro.push(
        gameFielg[this.vertikal - 1][this.horizont],
      );

      cells_player_building_pro.push(
        gameFielg[this.vertikal - 1][this.horizont + 1],
      );

      cells_player_building_pro.push(
        gameFielg[this.vertikal][this.horizont + 1],
      );
    }

    if (ok && player_pro_building_click) {
      // sound=true;

      const obj = new LandObj(
        'oil_platform',
        this.horizont,
        this.vertikal,
        0,
        this.fatherFraction,
      );

      // console.log(gameFielg[this.vertikal][this.horizont])

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
    this.type === 'port'
    || this.type === 'oil_Ref'
    || this.type === 'foundry'
  ) {
    const cont_cells = [];
    const sea_cells = [];

    const cells = [];

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
        const c = cont_cells[i];

        if (!c.free || c.continent !== in_unit_menu.cell.continent) {
          cells_player_building_pro.push(c);
        }
      }

      for (let i = 0; i < sea_cells.length; i++) {
        const c = sea_cells[i];

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

      /// *
      player_pro_building_click = false;

      // console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont],
      );

      if (!in_unit_menu.active) {
        in_unit_menu.fatherFraction.activeUnits.push(in_unit_menu);
        in_unit_menu.active = true;
      }

      in_unit_menu.list = 1;
      player_pro_building = false;
      player.selectUnits = [];
      //* /

      // console.log("ok");
    }

    // if(ok&&gameFielg[this.vertikal][this.horizont].sea){console.log("ok")};
  } else if (this.type === 2) {
    let ok = 0;

    for (let i = this.vertikal - 1; i <= this.vertikal + 1; i++) {
      for (let k = this.horizont - 1; k <= this.horizont + 1; k++) {
        if (
          gameFielg[i]
          && gameFielg[i][k]
          && gameFielg[i][k].free
          && !gameFielg[i][k].stopTownHoll.length
          && !gameFielg[i][k].stopBuild
          && gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          const obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    // console.log(ok);

    if (ok === 9 && player_pro_building_click) {
      player_pro_building_click = false;

      sound = true;

      // console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont],
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
          gameFielg[i]
          && gameFielg[i][k]
          && gameFielg[i][k].free
          // &&
          //! gameFielg[i][k].stopTownHoll.length
          && !gameFielg[i][k].stopBuild
          && gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          const obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    // console.log(ok);

    if (ok === 9 && player_pro_building_click) {
      player_pro_building_click = false;

      sound = true;

      // console.log(this.unitName)
      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont],
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
          gameFielg[i]
          && gameFielg[i][k]
          && gameFielg[i][k].free
          // &&
          //! gameFielg[i][k].stopTownHoll.length
          && !gameFielg[i][k].stopBuild
          && gameFielg[i][k].continent === in_unit_menu.cell.continent
        ) {
          ok++;
        } else if (gameFielg[i] && gameFielg[i][k]) {
          const obj = { x: gameFielg[i][k].x, y: gameFielg[i][k].y };

          cells_player_building_pro.push(obj);
        }
      }
    }

    // console.log(ok);

    if (ok === 4 && player_pro_building_click) {
      player_pro_building_click = false;

      // console.log(this.unitName)
      sound = true;

      in_unit_menu.createBuilding(
        this.unitName,
        in_unit_menu,
        gameFielg[this.vertikal][this.horizont],
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

      select_sound(in_unit_menu, 'build_sound');
    }
  }
};
