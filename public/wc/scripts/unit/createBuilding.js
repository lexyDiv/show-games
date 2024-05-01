/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-tabs */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.createBuilding = function (build, builder, player_cell) {
  if (this.type === 1) {
    // myCells

    ///
    // this.fatherFraction.freeBatraks.splice(this.fatherFraction.freeBatraks.indexOf(builder),1);

    /// farms

    // console.log(build)

    if (build === 'temple') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        /// /////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === 'comp') {
          for (
            let i = 0;
            i < this.fatherFraction.createShablon.temples.length;
            i++
          ) {
            if (this.fatherFraction.createShablon.temples[i].iBorn === false) {
              this.fatherFraction.createShablon.temples[i].iBorn = true;
              build = this.fatherFraction.createShablon.temples[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'temple',
          );
          // this.myJoube="i build";
        }
        /// /////////////////////////////////////////////////////////////////////////////

        // console.log(build);

        this.target = new LandObj(
          'temple',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.temples.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'temple',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.temples.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'dragon_roost') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        /// /////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === 'comp') {
          for (
            let i = 0;
            i < this.fatherFraction.createShablon.dragon_roosts.length;
            i++
          ) {
            if (
              this.fatherFraction.createShablon.dragon_roosts[i].iBorn === false
            ) {
              this.fatherFraction.createShablon.dragon_roosts[i].iBorn = true;
              build = this.fatherFraction.createShablon.dragon_roosts[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'dragon_roost',
          );
          // this.myJoube="i build";
        }
        /// /////////////////////////////////////////////////////////////////////////////

        // console.log(build);

        this.target = new LandObj(
          'dragon_roost',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.dragon_roosts.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'dragon_roost',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.dragon_roosts.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'foundry') {
      if (this.fatherFraction.control === 'comp') {
        let cell;

        // cell=allContinents[this.cell.continent].conturLineCells;

        // console.log() my_continent

        // let ot=this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          const dis = get_distanse_on_lineyka(
            this.fatherFraction.ports[0].cell,
            100,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            150,
          );

          if (
            (!min.length || min[0] > dis)
            && allContinents[this.cell.continent].conturLine_sea_Cells[i].sea
              === this.fatherFraction.sea
            && good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            )
            && dis >= 250
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        /// ////////////////////////////////////////////////////////////////
        let buildCell;

        buildCell = cell;
        // this.myJoube="i build";

        // console.log(build);

        this.target = new LandObj(
          'foundry',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        const tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          'guard',
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        // console.log(builder.target);
        this.fatherFraction.foundrys.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'foundry',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        obj.cell.continent = this.cell.continent;

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.foundrys.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      // console.log(nnn)

      // return;
    } else if (build === 'oil_Ref') {
      if (this.fatherFraction.control === 'comp') {
        let cell;

        // cell=allContinents[this.cell.continent].conturLineCells;

        // console.log() my_continent

        // let ot=this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          const dis = get_distanse_on_lineyka(
            this.fatherFraction.ports[0].cell,
            100,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            150,
          );

          if (
            (!min.length || min[0] > dis)
            && allContinents[this.cell.continent].conturLine_sea_Cells[i].sea
              === this.fatherFraction.sea
            && good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            )
            && dis >= 250
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        /// ////////////////////////////////////////////////////////////////
        let buildCell;

        buildCell = cell;
        // this.myJoube="i build";

        // console.log(build);

        this.target = new LandObj(
          'oil_Ref',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        const tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          'guard',
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        // console.log(builder.target);
        this.fatherFraction.oil_Refs.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'oil_Ref',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        obj.cell.continent = this.cell.continent;
        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.oil_Refs.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      // console.log(nnn)

      // return;
    } else if (build === 'port') {
      if (this.fatherFraction.control === 'comp') {
        let cell;

        // cell=allContinents[this.cell.continent].conturLineCells;

        const ot = this.fatherFraction.startPoint;

        let min = [];

        for (
          let i = 0;
          i < allContinents[this.cell.continent].conturLine_sea_Cells.length;
          i++
        ) {
          const dis = get_distanse_on_lineyka(
            ot,
            50,
            allContinents[this.cell.continent].conturLine_sea_Cells[i],
            50,
          );

          if (
            (!min.length || min[0] > dis)
            && allContinents[this.cell.continent].conturLine_sea_Cells[i].sea
              === this.fatherFraction.sea
            && good_sea_build_cell(
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            )
          ) {
            min = [
              dis,
              allContinents[this.cell.continent].conturLine_sea_Cells[i],
            ];
          }
        }

        cell = min[1];

        /// ////////////////////////////////////////////////////////////////
        let buildCell;
        buildCell = cell;
        // this.myJoube="i build";

        // console.log(build);

        this.target = new LandObj(
          'port',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        const tow = new SablonObj(
          this.target.horizont,
          this.target.vertikal,
          undefined,
          'guard',
        );
        tow.para = true;
        this.fatherFraction.createShablon.towers.push(tow);

        this.target.my_continent = this.cell.continent;

        this.target.control = this.fatherFraction.control;
        this.target.save_sea = this.target.cell.sea;
        this.target.cell.sea = false;
        this.target.cell.continent = this.cell.continent;

        // console.log(builder.target);
        this.fatherFraction.ports.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'port',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        obj.cell.continent = this.cell.continent;
        obj.save_sea = buildCell.sea;
        obj.cell.sea = false;
        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.ports.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }

      // console.log(nnn)

      // return;
    } else if (build === 'altar') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        /// /////////////////////////////////////////////////////////////////////////////////////
        if (this.fatherFraction.control === 'comp') {
          for (
            let i = 0;
            i < this.fatherFraction.createShablon.altars.length;
            i++
          ) {
            if (this.fatherFraction.createShablon.altars[i].iBorn === false) {
              this.fatherFraction.createShablon.altars[i].iBorn = true;
              build = this.fatherFraction.createShablon.altars[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'altar',
          );
          // this.myJoube="i build";
        }
        /// /////////////////////////////////////////////////////////////////////////////

        // console.log(build);

        this.target = new LandObj(
          'altar',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.altars.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'altar',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.altars.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'ogreBase') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        if (this.fatherFraction.control === 'comp') {
          for (
            let i = 0;
            i < this.fatherFraction.createShablon.ogreBases.length;
            i++
          ) {
            if (
              this.fatherFraction.createShablon.ogreBases[i].iBorn === false
            ) {
              this.fatherFraction.createShablon.ogreBases[i].iBorn = true;
              build = this.fatherFraction.createShablon.ogreBases[i];
              iBornCresteShablonNumber = i;

              break;
            }
          }

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'ogreBase',
          );
          // this.myJoube="i build";
        }

        // console.log(build);

        this.target = new LandObj(
          'ogreBase',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.ogreBases.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        //	console.log("okhhhhh");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'ogreBase',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.ogreBases.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 2000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'kuznya') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.kuznyas.length;
          i++
        ) {
          if (this.fatherFraction.createShablon.kuznyas[i].iBorn === false) {
            this.fatherFraction.createShablon.kuznyas[i].iBorn = true;
            build = this.fatherFraction.createShablon.kuznyas[i];
            iBornCresteShablonNumber = i;

            break;
          }
        }

        if (!build) {
          return;
        }
        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          'kuznya',
        );
        // this.myJoube="i build";

        // console.log(build);

        this.target = new LandObj(
          'kuznya',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.kuznyas.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        // console.log("ok");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'kuznya',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.kuznyas.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'tower') {
      // unterTowers
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        let min = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.towers.length;
          i++
        ) {
          const obj = this.fatherFraction.createShablon.towers[i];

          if (!obj.iBorn && obj.para) {
            min = [0, obj, i];
            break;
          }

          let dis;

          if (
            !obj.iBorn
            && (gameFielg[obj.vertikal][obj.horizont].free
              || gameFielg[obj.vertikal][obj.horizont].vossalObj
              || gameFielg[obj.vertikal][obj.horizont].unit.unitName !== 'wood')
          ) {
            dis = get_distanse_on_lineyka(
              this.fatherFraction.startPoint,
              50,
              gameFielg[obj.vertikal][obj.horizont],
              100,
            );

            if (!min.length || min[0] > dis || min[1].para) {
              min = [dis, obj, i];
            }
          }
        }

        if (min.length) {
          build = min[1];
          build.iBorn = true;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'tower',
          );
          iBornCresteShablonNumber = min[2];
        } else {
          return;
        }
        if (buildCell) {
          this.target = new LandObj(
            'tower',
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction,
          );

          this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

          this.target.control = this.fatherFraction.control;

          // console.log(builder.target);
          this.fatherFraction.towers.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          if (this.fatherFraction.control === 'comp') {
            this.fatherFraction.activeBuildings.push(this.target);
            this.target.builders.push(builder);
            this.iGoBuild = true;
            this.fatherFraction.unterTowers.push(this.target);
            this.target.iBee = this.fatherFraction.createShablon.towers[
              iBornCresteShablonNumber
            ].tower;
          }

          this.fatherFraction.gold -= 1500;
          this.fatherFraction.wood -= 500;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target,
          );

          this.way = [];
          // console.log("ok");
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          'tower',
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.towers.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 1500;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'barack') {
      if (this.fatherFraction.control === 'comp') {
        let build;

        let buildCell;

        let iBornCresteShablonNumber;

        let min = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.baracks.length;
          i++
        ) {
          if (this.fatherFraction.createShablon.baracks[i].iBorn === false) {
            /*
          this.fatherFraction.createShablon.baracks[i].iBorn=true;
          build=this.fatherFraction.createShablon.baracks[i];
          iBornCresteShablonNumber=i;
          */

            const dis = get_distanse_on_lineyka(
              this.fatherFraction.startPoint,
              50,
              gameFielg[this.fatherFraction.createShablon.baracks[i].vertikal][
                this.fatherFraction.createShablon.baracks[i].horizont
              ],
              150,
            );

            if (!min.length || min[0] > dis) {
              min = [dis, this.fatherFraction.createShablon.baracks[i], i];
            }
          }
        }

        this.fatherFraction.createShablon.baracks[min[2]].iBorn = true;
        build = min[1];
        iBornCresteShablonNumber = min[2];

        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          'barack',
        );
        // this.myJoube="i build";
        if (!buildCell) {
          return;
        }

        // console.log(build);

        this.target = new LandObj(
          5,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.baracks.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        // if(this.fatherFraction.control==="comp"){

        this.fatherFraction.activeBuildings.push(this.target);
        this.target.builders.push(builder);
        this.iGoBuild = true;

        // };

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        // console.log("ok");
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          5,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.baracks.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'lesopilka') {
      if (this.fatherFraction.control === 'comp') {
        let min = [];

        for (let i = 0; i < woods.length; i++) {
          const a = woods[i].x - this.fatherFraction.startPoint.x;
          const b = woods[i].y - this.fatherFraction.startPoint.y;

          const c = Math.sqrt(a * a + b * b);

          if (
            (!min.length || c < min[0])
            && woods[i].hp > 0
            && c < 5000
            && woods[i].cell.continent === this.cell.continent
          ) {
            min = [c, woods[i]];
          }
        }

        // console.log(min[1])

        if (!min.length) {
          min = [0, this.cell];
        }

        if (min.length) {
          const build = new SablonObj(min[1].horizont, min[1].vertikal);

          let buildCell;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'lesopilka',
          );
          // this.myJoube="i build";

          // console.log(build);

          this.target = new LandObj(
            4,
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction,
          );
          this.target.control = this.fatherFraction.control;

          const tow = new SablonObj(
            this.target.horizont,
            this.target.vertikal,
            undefined,
            'guard',
          );
          tow.para = true;
          this.fatherFraction.createShablon.towers.push(tow);

          this.fatherFraction.lesopilkas.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          // if(this.fatherFraction.control==="comp"){

          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;

          // };

          this.fatherFraction.gold -= 700;
          this.fatherFraction.wood -= 500;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target,
          );

          this.way = [];

          // console.log(this.fatherFraction.townHolls);
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          4,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.lesopilkas.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 700;
        this.fatherFraction.wood -= 500;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    } else if (build === 'townHoll') {
      if (this.fatherFraction.control === 'comp') {
        let min = [];

        for (let i = 0; i < shahts.length; i++) {
          const a = shahts[i].x - builder.x;
          const b = shahts[i].y - builder.y;

          const c = Math.sqrt(a * a + b * b);

          if ((!min.length || c < min[0]) && shahts[i].gold > 0) {
            min = [c, shahts[i]];
          }
        }

        // console.log(min[1])

        if (min.length) {
          const build = new SablonObj(min[1].horizont, min[1].vertikal);

          let buildCell;

          buildCell = this.getBuildPosition(
            build.horizont,
            build.vertikal,
            'townHoll',
          );
          // this.myJoube="i build";

          // console.log(build);

          this.target = new LandObj(
            2,
            buildCell.horizont,
            buildCell.vertikal,
            0,
            this.fatherFraction,
          );
          this.target.control = this.fatherFraction.control;

          // console.log(builder.target);
          this.fatherFraction.townHolls.push(this.target);
          this.fatherFraction.buildings.push(this.target);

          // if(this.fatherFraction.control==="comp"){

          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;

          // };

          this.fatherFraction.gold -= 1000;
          this.fatherFraction.wood -= 1000;

          builder.target.vossal_contacts_moveVectorsInitialization(
            builder.target,
          );

          this.way = [];

          // console.log(this.fatherFraction.townHolls);
        }
      } else {
        let buildCell;

        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          2,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.townHolls.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 1000;
        this.fatherFraction.wood -= 1000;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
        // console.log(this.target);
      }
    } else if (build === 'farm') {
      let build;

      let buildCell;

      let iBornCresteShablonNumber;

      if (this.fatherFraction.control === 'comp') {
        const objs = [];

        let min_d = [];

        for (
          let i = 0;
          i < this.fatherFraction.createShablon.farms.length;
          i++
        ) {
          const obj = gameFielg[this.fatherFraction.createShablon.farms[i].vertikal][
            this.fatherFraction.createShablon.farms[i].horizont
          ];

          const dis = get_distanse_on_lineyka(
            this.fatherFraction.startPoint,
            50,
            obj,
            100,
          );

          if (!min_d.length || min_d[0] > dis) {
            min_d = [dis, this.fatherFraction.createShablon.farms[i], i];
          }

          if (
            this.fatherFraction.createShablon.farms[i].iBorn === false
            && well_cell_for_building(obj, 100)
          ) {
            /*
          this.fatherFraction.createShablon.towers[i].iBorn=true;
          build=this.fatherFraction.createShablon.towers[i];
          iBornCresteShablonNumber=i;

          break;
          */

            const ind = this.fatherFraction.createShablon.farms[i];
            ind.i = i;

            objs.push(ind);
          }
        }

        min = [];

        for (let i = 0; i < objs.length; i++) {
          const obj = gameFielg[objs[i].vertikal][objs[i].horizont];

          const dis = get_distanse_on_lineyka(
            this.fatherFraction.startPoint,
            50,
            obj,
            100,
          );

          if (!min.length || min[0] > dis) {
            min = [dis, objs[i]];
          }
        }

        if (min.length) {
          this.fatherFraction.createShablon.farms[min[1].i].iBorn = true;
          build = this.fatherFraction.createShablon.farms[min[1].i];
          iBornCresteShablonNumber = min[1].i;
        } else if (!this.fatherFraction.createShablon.farms.length) {
          return;
        } else {
          this.fatherFraction.createShablon.farms[min_d[2]].iBorn = true;
          build = this.fatherFraction.createShablon.farms[min_d[2]];
          iBornCresteShablonNumber = min_d[2];
        }

        buildCell = this.getBuildPosition(
          build.horizont,
          build.vertikal,
          'farm',
        );

        this.target = new LandObj(
          3,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
        );

        this.target.iBornCresteShablonNumber = iBornCresteShablonNumber;

        this.target.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.farms.push(this.target);
        this.fatherFraction.buildings.push(this.target);

        if (this.fatherFraction.control === 'comp') {
          this.fatherFraction.activeBuildings.push(this.target);
          this.target.builders.push(builder);
          this.iGoBuild = true;
        }

        this.fatherFraction.gold -= 500;
        this.fatherFraction.wood -= 300;

        builder.target.vossal_contacts_moveVectorsInitialization(
          builder.target,
        );

        this.way = [];
        // console.log("ok");
      } else {
        buildCell = player_cell;
        // this.myJoube="i build";

        // console.log(build);

        const obj = new LandObj(
          3,
          buildCell.horizont,
          buildCell.vertikal,
          0,
          this.fatherFraction,
          this.nation,
        );

        this.clickSave = new ClickSave(obj, 0);

        obj.control = this.fatherFraction.control;

        // console.log(builder.target);
        this.fatherFraction.farms.push(obj);
        this.fatherFraction.buildings.push(obj);

        this.fatherFraction.activeBuildings.push(obj);
        // this.iGoBuild=true;

        this.fatherFraction.gold -= 500;
        this.fatherFraction.wood -= 300;

        obj.vossal_contacts_moveVectorsInitialization(obj);

        this.way = [];
      }
    }
  }

  buildingBornAnimysUpdate(this.target, this.cell.unit);

  if (!this.target.my_continent) {
    this.target.my_continent = this.cell.continent;
  }
};
