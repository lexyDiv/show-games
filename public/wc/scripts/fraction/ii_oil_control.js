/* eslint-disable func-names */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
Fraction.prototype.ii_oil_control = function () {
  // myJoube

  if (!this.my_favarit_oil && this.sea) {
    // console.log(allSeas[this.sea]);
    let min = [];

    for (let i = 0; i < allSeas[this.sea].oils.length; i++) {
      /*
    let ok=0;

    for(let k=0;k<allSeas[this.sea].oils[i].cells.length;k++){

        if(!allSeas[this.sea].oils[i].cells[k].unit){ok++;};

    };
    */

      const dis = get_distanse_on_lineyka(
        this.startPoint,
        50,
        allSeas[this.sea].oils[i].cell,
        100,
      );

      if (allSeas[this.sea].oils[i].oil && (!min.length || min[0] > dis)) {
        min = [dis, allSeas[this.sea].oils[i]];
      }
    }

    if (min.length) {
      this.my_favarit_oil = min[1];
    }
  }

  /// //////////////////////////

  if (
    this.my_favarit_oil_status === 'need attack'
      && this.sea
      && !this.ships_for_clear.length
  ) {
    // console.log(this.warriors_on_seas)

    for (let i = 0; i < this.warriors_on_seas[this.sea].length; i++) {
      const obj = this.warriors_on_seas[this.sea][i];

      if (obj.hp > 0 && !obj.animys.length && !obj.isBlockedShip()) {
        this.ships_for_clear.push(obj);
      }
    }
    // console.log(this.my_favarit_oil_status);
  }

  for (let i = 0; i < this.ships_for_clear.length; i++) {
    const obj = this.ships_for_clear[i];

    if (
      obj.hp <= 0
        || this.my_favarit_oil_status !== 'need attack'
        || obj.animys.length
    ) {
      this.ships_for_clear.splice(i, 1);
      i--;
    } else if (this.my_favarit_oil_status === 'need attack') {
      obj.clickSave = new ClickSave(0, this.my_favarit_oil.cell);

      if (!obj.active) {
        this.activeUnits.push(obj);
        obj.active = true;
      }
      // console.log("go");
    }
  }

  /// ////////////////////////////

  if (this.my_favarit_oil) {
    if (!this.my_favarit_oil.oil) {
      this.my_favarit_oil = false;
    } else if (
      this.my_favarit_oil.cell.unit
          && this.my_favarit_oil.cell.unit.type === 'oil_platform'
          && this.my_favarit_oil.cell.unit.fatherFraction.fraction === this.fraction
    ) {
      this.my_favarit_oil_status = 'in act';
    } else {
      for (let i = 0; i < this.my_favarit_oil.cells.length; i++) {
        if (
          this.my_favarit_oil.cells[i].unit
              && this.my_favarit_oil.cells[i].unit.fatherFraction.union
                !== this.union
        ) {
          this.my_favarit_oil_status = 'need attack';

          break;
        } else if (
          this.my_favarit_oil.cells[i].unit
              && this.my_favarit_oil.cells[i].unit.fatherFraction.union
                === this.union
              && this.my_favarit_oil.cells[i].unit.fatherFraction.fraction
                !== this.fraction
        ) {
          this.my_favarit_oil_status = 'closed';

          break;
        } else if (
          this.my_favarit_oil.cells[i].unit
              && this.my_favarit_oil.cells[i].unit.fatherFraction.union
                === this.union
              && this.my_favarit_oil.cells[i].unit.fatherFraction.fraction
                === this.fraction
        ) {
          this.my_favarit_oil_status = 'need clear';

          break;
        } else {
          this.my_favarit_oil_status = 'clear';
        }
      }
    }
  }

  // console.log(this.my_favarit_oil_status);

  if (this.oil_tankers.length) {
    if (this.oil_Refs.length && this.oil_platforms.length) {
      for (let i = 0; i < this.oil_tankers.length; i++) {
        const obj = this.oil_tankers[i];

        if (!obj.way.length && !obj.iGetTarget && obj.cell && obj.iGetMyCell) {
          let min = [];

          for (let k = 0; k < this.oil_platforms.length; k++) {
            if (
              this.oil_platforms[k].hp > 0
                && this.oil_platforms[k].buildready
                  === this.oil_platforms[k].hpfull
                && this.oil_platforms[k].cell.oil.oil
            ) {
              const dis = get_distanse_on_lineyka(
                obj.cell,
                100,
                this.oil_platforms[k],
                100,
              );

              if (!min.length || min[0] > dis) {
                min = [dis, this.oil_platforms[k]];
              }
            }
            // console.log(this.oil_platforms[k].hp);
          }

          if (min.length && !obj.active) {
            obj.clickSave = new ClickSave(this.oil_Refs[0], 0);

            this.activeUnits.push(obj);
            obj.active = true;

            obj.hold_position = obj.fatherFraction.persolalNumber;
            // obj.goGroop_sweeme=true;
            // console.log("!!!!!!!!!!!!!!!!!");
          }
        }
      } // tanker for
    }

    if (
      (!this.oil_platforms.length
          || (this.my_favarit_oil && this.my_favarit_oil_status === 'clear'))
        && this.gold > 1000
        && this.wood > 300
    ) {
      let oil_platform;

      let min = [];

      if (this.my_favarit_oil && this.my_favarit_oil_status === 'clear') {
        min = [0, this.my_favarit_oil];

        // console.log("here");
      } else {
        for (let i = 0; i < allSeas[this.sea].oils.length; i++) {
          let ok = 0;

          for (let k = 0; k < allSeas[this.sea].oils[i].cells.length; k++) {
            if (!allSeas[this.sea].oils[i].cells[k].unit) {
              ok++;
            }
          }

          if (ok === 4) {
            const dis = get_distanse_on_lineyka(
              this.startPoint,
              50,
              allSeas[this.sea].oils[i].cell,
              100,
            );

            if (
              allSeas[this.sea].oils[i].oil
                && (!min.length || min[0] > dis)
            ) {
              min = [dis, allSeas[this.sea].oils[i]];
            }
          }
        }
      }

      if (min.length) {
        oil_platform = min[1];

        const obj = new LandObj(
          'oil_platform',
          oil_platform.horizont,
          oil_platform.vertikal,
          0,
          this.oil_tankers[0].fatherFraction,
        );

        obj.cells = oil_platform.cells;
        obj.cell = gameFielg[oil_platform.vertikal][oil_platform.horizont];

        for (let i = 0; i < obj.cells.length; i++) {
          obj.cells[i].unit = obj;
        }

        this.buildings.push(obj);
        this.oil_platforms.push(obj);
        this.activeBuildings.push(obj);

        this.gold -= 1000;
        this.wood -= 300;
      }

      // console.log(oil_platform); pausa=1;
    }
    // console.log(this.oil_tankers[0].clickSave);
  }
};
