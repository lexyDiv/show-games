/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.unitsUpdate = function () {
  this.batraks = [];
  this.mechniks = [];
  this.rizars = [];
  this.luchniks = [];
  this.dragons = [];
  this.mags = [];
  this.freeBatraks = [];
  this.ballistas = [];
  this.freeBallistas = [];
  this.freeDragons = [];

  this.freeBatraks = [];
  this.freeRizzars = [];
  this.freeLuchniks = [];
  this.freeMechniks = [];
  this.transports = [];
  this.oil_tankers = [];
  this.freeTransports = [];
  this.ships = [];
  this.warriors = [];
  this.distroers = [];
  this.linkors = [];
  this.turtles = [];

  this.war_ships = [];

  // if(!this.objects_on_continents){
  /// ///////////////////////////////////////////// continents
  this.objects_on_continents = [0];
  this.warriors_on_continents = [0];
  this.batraks_on_continents = [0];

  for (let i = 1; i < allContinents.length; i++) {
    this.objects_on_continents.push([]);
    this.warriors_on_continents.push([]);
  }
  /// //////////////////////////////////////////////
  // };

  /// ///////////////////////////////////////////// seas
  this.objects_on_seas = [0];
  this.warriors_on_seas = [0];

  for (let i = 1; i < allSeas.length; i++) {
    this.objects_on_seas.push([]);
    this.warriors_on_seas.push([]);
  }
  /// //////////////////////////////////////////////

  // console.log(this.objects_on_continents); pausa=1;

  for (let i = 0; i < this.buildings.length; i++) {
    if (
      !this.buildings[i]
        || this.buildings[i].hp <= 0
        || this.buildings[i].buildready <= 0
    ) {
      // console.log(this.buildings[i].unitName); pausa=1;

      this.buildings.splice(i, 1);
      i--;
    } else if (this.buildings[i].cell.continent) {
      this.objects_on_continents[this.buildings[i].cell.continent].push(
        this.buildings[i],
      );
    } else if (
      this.buildings[i].cell.sea
          && !this.buildings[i].my_continent
    ) {
      this.objects_on_seas[this.buildings[i].cell.sea].push(
        this.buildings[i],
      );
    } else {
      this.objects_on_continents[this.buildings[i].my_continent].push(
        this.buildings[i],
      );
    }
  }

  for (let i = 0; i < this.peoples.length; i++) {
    const unit = this.peoples[i];

    // if(!unit){pausa=1;};

    if (!unit || unit.readyToOut) {
      this.peoples.splice(i, 1);
      i--;
    } else {
      if (unit.cell && unit.cell.continent) {
        if (!unit.fly) {
          this.objects_on_continents[unit.cell.continent].push(unit);
        }
      }

      for (let i = 0; i < unit.hp_up.length; i++) {
        if (unit.hp_up[i].timer) {
          unit.hp_up[i].timer--;
        }

        if (unit.hp_up[i].timer % 4 === 0) {
          unit.hp_up[i].animX += 100;
        }
        if (!unit.hp_up[i].timer) {
          unit.hp_up.splice(i, 1);
          i--;
        }
      }

      if (unit.nar) {
        unit.nar--;
      }

      if (unit.type === 1) {
        this.batraks.push(unit);
        this.batraks_on_continents.push(unit);

        if (!unit.active) {
          this.freeBatraks.push(unit);
        }
        // if(unit.myJoube==="shahter"){this.batraksOnGolg.push(unit);};
        // if(unit.myJoube==="lesorub"){this.batraksOnWood.push(unit);};
      } else if (unit.unitName === 'mag') {
        unit.mana += 0.02;
        if (unit.mana > 100) {
          unit.mana = 100;
        }

        this.warriors.push(unit);
        this.mags.push(unit);
        if (unit.cell) {
          this.warriors_on_continents[unit.cell.continent].push(unit);
        }
        // if(!unit.active){this.freeMechniks.push(unit);};
      } else if (unit.unitName === 'mechnick') {
        unit.attack = Math.round(unit.baseAttack * this.dopNoFlyAttack);
        unit.panzer = Math.round(unit.basePanzer * this.dopNoFlyPanzer);

        unit.level = 1 + this.dopNoFlyAttack_level + this.dopNoFlyPanzer_level;

        this.warriors.push(unit);
        this.mechniks.push(unit);
        if (unit.cell) {
          this.warriors_on_continents[unit.cell.continent].push(unit);
        }
        if (!unit.active) {
          this.freeMechniks.push(unit);
        }
      } else if (unit.unitName === 'luchnik') {
        if (this.nation === 'orc' && unit.hp > 0) {
          unit.hp += 0.015;

          if (unit.hp > unit.hpfull) {
            unit.hp = unit.hpfull;
          }
        }

        unit.attack = Math.round(unit.baseAttack * this.dopFlyAttack);
        unit.seeing = unit.baseSeeing + this.dopFlySee;

        unit.level = 1 + this.dopFlyAttack_level + this.dopFlySee_level;

        this.warriors.push(unit);
        this.luchniks.push(unit);
        if (unit.cell) {
          this.warriors_on_continents[unit.cell.continent].push(unit);
        }
        if (!unit.active) {
          this.freeLuchniks.push(unit);
        }
      } else if (unit.unitName === 'ballista') {
        unit.attack = Math.round(unit.baseAttack * this.dopBallista);

        unit.level = 1 + this.dopBallista_level;

        this.warriors.push(unit);
        this.ballistas.push(unit);
        if (unit.cell) {
          this.warriors_on_continents[unit.cell.continent].push(unit);
        }
        if (!unit.active) {
          this.freeBallistas.push(unit);
        }
      } else if (unit.unitName === 'rizar') {
        /*
                    if(
                    !unit.cell&&!unit.pas

                    ||
                    (unit.cell&&unit.cell.vossalObj)
                    ||
                    (unit.cell&&unit.cell.unit.persolalNumber!==unit.persolalNumber)
                    ){console.log(unit);pausa=1;};
                    */

        unit.attack = Math.round(unit.baseAttack * this.dopNoFlyAttack);
        unit.panzer = Math.round(unit.basePanzer * this.dopNoFlyPanzer);

        unit.level = 1 + this.dopNoFlyAttack_level + this.dopNoFlyPanzer_level;

        if (this.canMagick) {
          unit.mana += 0.06;
        }
        if (unit.mana > 100) {
          unit.mana = 100;
        }

        this.warriors.push(unit);
        this.rizars.push(unit);
        if (unit.cell) {
          this.warriors_on_continents[unit.cell.continent].push(unit);
        }
        if (!unit.active) {
          this.freeRizzars.push(unit);
        }
      } else if (unit.unitName === 'dragoon') {
        this.dragons.push(unit);
        // this.warriors_on_continents[unit.cell.continent].push(unit);
        if (!unit.active) {
          this.freeDragons.push(unit);
        }
      } else if (unit.unitName === 'transport') {
        this.ships.push(unit);
        this.transports.push(unit);
        this.objects_on_seas[unit.cell.sea].push(unit);

        if (
          !unit.way.length
            && !unit.clickSave
            && !unit.handCell
            && !unit.handTarget
        ) {
          this.freeTransports.push(unit);
          // this.objects_on_seas.push(unit);
        }
      } else if (unit.unitName === 'oil_tanker') {
        this.ships.push(unit);
        this.oil_tankers.push(unit);

        if (unit.cell) {
          this.objects_on_seas[unit.cell.sea].push(unit);
        }
      } else if (unit.unitName === 'distroer') {
        unit.attack = Math.round(unit.baseAttack * this.dopAttack);
        unit.level = 1 + this.dopAttack_level;

        this.ships.push(unit);
        this.distroers.push(unit);

        // if(unit.cell){
        this.objects_on_seas[unit.cell.sea].push(unit);
        this.warriors_on_seas[unit.cell.sea].push(unit);
        this.war_ships.push(unit);
        // };
      } else if (unit.unitName === 'linkor') {
        unit.attack = Math.round(unit.baseAttack * this.dopAttack);

        unit.level = 1 + this.dopAttack_level;

        this.ships.push(unit);
        this.linkors.push(unit);

        // if(unit.cell){
        this.objects_on_seas[unit.cell.sea].push(unit);
        this.warriors_on_seas[unit.cell.sea].push(unit);
        this.war_ships.push(unit);
        // };
      } else if (unit.unitName === 'turtle') {
        // unit.visible=false;
        // unit.draw_visible=false;

        unit.attack = Math.round(unit.baseAttack * this.dopAttack);

        unit.level = 1 + this.dopAttack_level;

        turtles_mass.push(unit);

        this.ships.push(unit);
        this.turtles.push(unit);

        // if(unit.cell){
        this.objects_on_seas[unit.cell.sea].push(unit);
        this.warriors_on_seas[unit.cell.sea].push(unit);
        this.war_ships.push(unit);
        // };
      }
    }
  }
};
