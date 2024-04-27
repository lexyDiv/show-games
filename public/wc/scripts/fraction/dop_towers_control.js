/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
Fraction.prototype.dop_towers_control = function (mySelf_ind) {
  if (!this.canTower || this.alarm_stop_build) {
    return;
  }

  if (this.gold >= 5000 && this.wood >= 1000) {
    let dop_tower;

    for (let i = 0; i < this.ii_dop_towers.length; i++) {
      const obj = this.ii_dop_towers[i];

      if (well_cell_for_building(gameFielg[obj.vertikal][obj.horizont], 100)) {
        dop_tower = new LandObj(
          'tower',
          obj.horizont,
          obj.vertikal,
          0,
          fractions[mySelf_ind],
        );
        dop_tower.dop = true;

        break;
      }
    }

    if (dop_tower) {
      for (let i = 0; i < this.batraks.length; i++) {
        const obj = this.batraks[i];

        if (
          obj.cell
            && !obj.isBlocked()
            && obj.waitTime === 30
            && !obj.iGoBuild
            && !obj.iGetTarget
        ) {
          obj.target = dop_tower;

          obj.target.control = this.control;

          // console.log(builder.target);
          this.towers.push(obj.target);
          this.buildings.push(obj.target);

          this.activeBuildings.push(obj.target);
          obj.target.builders.push(obj);
          obj.iGoBuild = true;
          this.unterTowers.push(obj.target);
          obj.target.iBee = 'guard'; // this.fatherFraction.createShablon.towers[iBornCresteShablonNumber].tower;

          this.gold -= 1500;
          this.wood -= 500;

          obj.target.vossal_contacts_moveVectorsInitialization(obj.target);

          if (this.activeBuildings.indexOf(obj.target) === -1) {
            this.activeBuildings.push(obj.target);
          }

          if (!obj.active) {
            this.activeUnits.push(obj);
            obj.active = true;
          }

          obj.way = [];

          /*
    if(this.fraction==="redOrcs"){
    console.log("here : "+this.ii_dop_towers.length);
    };
    */

          break;
        }
      }
    }
  }
};
