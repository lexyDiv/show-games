/* eslint-disable no-empty */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
Fraction.prototype.ii = function (mySelf_ind) {
  this.timer++;

  if (this.timer === 10) {
    for (let i = 0; i < this.warriors.length; i++) {
      const unit = this.warriors[i];

      if (!unit.active && unit.gabarit === 50) {
        if (
          unit.cell
            && !unit.ii_attack
            && unit.cell.continent === this.continent
            && !unit.revers
            && unit.born_cell
            && unit.born_cell.fraction
            && (!unit.cell.fraction || unit.cell.fraction !== this.fraction)
        ) {
          unit.ii_saveCell = unit.born_cell;
          this.activeUnits.push(unit);
          unit.active = true;
          // unit.stopGetTarget=50;
          // unit.ii_back=50;
        }
      }
    }

    if (!this.peoples.length && !this.buildings.length) {
      return;
    }
    if (this.alarmTimer) {
      this.alarmTimer--;
    }

    if (this.alarm_stop_build) {
      this.alarm_stop_build--;
    }

    this.update_createShablon();

    this.ii_oil_control();

    if (!this.startPoint) {
      let min = [];

      for (
        let i = 0;
        i
          < allContinents[this.peoples[this.peoples.length - 1].cell.continent]
            .shahts.length;
        i++
      ) {
        const dis = get_distanse_on_lineyka(
          this.peoples[this.peoples.length - 1].cell,
          50,
          allContinents[this.peoples[this.peoples.length - 1].cell.continent]
            .shahts[i].cell,
          150,
        );

        if (!min.length || min[0] > dis) {
          min = [
            dis,
            allContinents[this.peoples[this.peoples.length - 1].cell.continent]
              .shahts[i].cell,
          ];
        }
      }

      this.startPoint = min[1];
      this.continent = this.startPoint.continent;

      min = [];

      if (!this.master_shablon) {
        for (let i = 1; i < allContinents[this.continent].my_seas.length; i++) {
          for (let k = 0; k < allSeas[i].oils.length; k++) {
            const obj = allSeas[i].oils[k];

            const dis = get_distanse_on_lineyka(obj, 100, this.startPoint, 50);

            if (!min.length || min[0] > dis) {
              min = [dis, obj];
            }
          }

          /*

    if(allSeas[i].oils.length){

    this.sea=i;

    //break;

    };

    // */

          // batrak
        }

        if (min.length) {
          if (min[0] <= 3500) {
            this.sea = min[1].cell.sea;
          }
        }
      } else {
        this.sea = this.createShablon.sea;
      }
    }

    if (!this.check_create) {
      this.check_create = true;

      this.check_create_shablon();

      // console.log(this.startPoint);

      // pausa=1;
      this.timer = 0;

      return;
    }

    // return;

    // console.log(this.sea); dop_towers_control

    if (!this.revers.length && this.createShablon.attack) {
      // if(this.fraction!=="h_blue"){
      this.ii_attack(mySelf_ind);
      // };

      /// *
      if (this.attack && this.attack.attack_target_fraction_continent) {
        const istukans = [];

        for (
          let i = 0;
          i
            < this.warriors_on_continents[
              this.attack.attack_target_fraction_continent
            ].length;
          i++
        ) {
          const obj = this.warriors_on_continents[
            this.attack.attack_target_fraction_continent
          ][i];

          if (
            obj
              && !obj.active
              && obj.hp > 0
              && obj.cell
              && obj.cell.continent
              && obj.cell.continent !== this.continent
              && obj.type !== 'mag'
          ) {
            // console.log(obj); console.log(this.attack);// pausa=1;

            istukans.push(obj);
          }
        }

        for (let i = 0; i < istukans.length; i++) {
          if (this.attack) {
            const warrior = istukans[i];

            // console.log(this.attack.alive_warriors.indexOf(istukans[i]));

            this.attack.warriors_in_active++;
            this.attack.alive_warriors.push(warrior);

            warrior.ii_attack = true;
          }

          // istukans[i].clickSave=new ClickSave(0,gameFielg[140][140]);

          // this.activeUnits.push(istukans[i]);
        }

        //* /
      }
    }

    this.attack_revers();

    this.ii_panick();

    this.checkAlarms();

    this.strike_control();

    this.timer = 0;

    // if(this.fraction==="redOrcs"){return;};
    this.dop_towers_control(mySelf_ind);

    let prioritetToDo = false;

    const townHollsIsBlocked = false;
    let townHollToUpgrade = false;
    let townHollToBatrack = false;
    let portToShip = false;

    /*
    for(let i=0;i<this.townHolls.length;i++){

    townHollsIsBlocked=this.townHolls[i].isBlocked();

    if(townHollsIsBlocked===false){break;};

    };
    */

    let barackOnJobe = 0;
    let towerOnUpgrade = 0;

    const arsisLines = [];

    for (let i = 0; i < this.baracks.length; i++) {
      if (
        this.baracks[i].hp > 0
          && this.baracks[i].buildready >= this.baracks[i].hpfull
          && !this.baracks[i].myJoubeTimer
      ) {
        // prioritetToDo="batrak";
        barackOnJobe = this.baracks[i];
        break;
      }
    }

    for (let i = 0; i < this.townHolls.length; i++) {
      if (
        this.townHolls[i].hp > 0
          && this.townHolls[i].buildready >= this.townHolls[i].hpfull
          && !this.townHolls[i].myJoubeTimer
      ) {
        // prioritetToDo="batrak";
        townHollToBatrack = this.townHolls[i];
        break;
      }
    }

    for (let i = 0; i < this.ports.length; i++) {
      if (
        this.ports[i].hp > 0
          && this.ports[i].buildready >= this.ports[i].hpfull
          && !this.ports[i].myJoubeTimer
      ) {
        // prioritetToDo="batrak";
        portToShip = this.ports[i];
        break;
      }
    }

    if (
      this.canLinkor
        && this.peoples.length < this.maxUnits
        && this.canLuchnick
        && !this.myJoubeTimer_fou
        && this.distroers.length >= this.createShablon.distroers / 4
        && this.dopAttack_level < 5
    ) {
      arsisLines.push('dopAttack');
    } else {
      arsisLines.push(0);
    }

    /// //////////////////////////////////       mag
    /// *

    for (let i = 0; i < this.mags.length; i++) {
      if (
        !this.mags[i].active
          && !this.mags[i].ii_attack
          && this.mags[i].cell
          && (!this.mags[i].cell.fraction
            || this.mags[i].cell.fraction !== this.fraction)
          && this.mags[i].cell.continent === this.continent
      ) {
        this.mags[i].clickSave = new ClickSave(0, this.mags[i].born_cell);

        this.activeUnits.push(this.mags[i]);
        this.mags[i].active = true;

        // console.log("back");
      }
    }

    let temple_for_mag;

    for (let i = 0; i < this.temples.length; i++) {
      const obj = this.temples[i];

      if (!obj.myJoubeTimer && obj.hp > 0 && obj.iComplite) {
        temple_for_mag = obj;
      }
    }

    // console.log(this.maxUnits>this.peoples.length)
    // console.log(temple_for_mag)
    // console.log(this.createShablon.mags>this.mags.length);
    // console.log("!!!!!!!!!!!!!!!!!!!!");

    if (
      this.maxUnits > this.peoples.length
        && temple_for_mag
        && this.createShablon.mags > this.mags.length
    ) {
      arsisLines.push('mag_line');
      // console.log("here");
    } else {
      arsisLines.push(0);
    }

    //* /

    /// ///////////////////////////////////

    /// //////////////////////////////////       drg

    this.dragons_attack();

    let dragon_roost_for_dragoon;

    if (this.canDragoon) {
      for (let i = 0; i < this.dragon_roosts.length; i++) {
        const obj = this.dragon_roosts[i];

        if (!obj.myJoubeTimer) {
          dragon_roost_for_dragoon = obj;
        }
      }
    }

    if (
    // this.gold>=10000
    // &&
      this.canDragoon
        && dragon_roost_for_dragoon
        && this.maxUnits > this.peoples.length
        && this.dragons.length < this.createShablon.dragons
    ) {
      arsisLines.push('dragoon_line');
    } else {
      arsisLines.push(0);
    }

    /// ///////////////////////////////////

    /// ///////////////////////////////////////////////   sea

    if (this.sea) {
      if (
        (this.canTransport
            && this.maxUnits > this.peoples.length
            && portToShip
            && this.transports.length < this.createShablon.transports)
        // oil&&

          || (this.canOilTanker
            && this.maxUnits > this.peoples.length
            && portToShip
            && this.oil_tankers.length < this.createShablon.oil_tankers)
          // oil&&

          || (this.canDistroer
            && this.maxUnits > this.peoples.length
            && portToShip
            && this.distroers.length < this.createShablon.distroers)
          // oil&&
          || (this.canLinkor
            && this.canDistroer
            && this.maxUnits > this.peoples.length
            && portToShip
            && this.linkors.length < this.createShablon.linkors)
          // oil&&
          || (this.canLinkor
            && this.canOilTanker
            && this.maxUnits > this.peoples.length
            && portToShip
            && this.turtles.length < this.createShablon.turtles)
      ) {
        arsisLines.push('transport_line');

        // console.log("here");
      } else {
        arsisLines.push(0);
      }

      if (
        this.createShablon.flot
          && !this.alarm_stop_build
          && this.iHaveTownHoll
          && this.canLuchnick
          && (!this.ports.length
            || (this.ports.length < this.createShablon.p_ports
              && this.oil_Refs.length
              && this.foundrys.length)
            || (!this.oil_Refs.length && this.canOilRef)
            || (!this.foundrys.length && this.canFoundry))
      ) {
        // "jobePowerLine"
        arsisLines.push('base_sea_line');
      } else {
        arsisLines.push(0);
      }
    }

    /// /////////////////////////////////////////////////

    if (
      this.iHaveTownHoll
        && this.batraks.length < this.createShablon.batraks
        && townHollToBatrack
        && this.peoples.length < this.maxUnits
    ) {
      // "jobePowerLine"
      arsisLines.push(
        'jobePowerLine',
        'jobePowerLine',
        'jobePowerLine',
        'jobePowerLine',
      );
    } else {
      arsisLines.push(0, 0, 0, 0);
    }

    if (
    // this.peoples.length<=this.maxUnits
      this.fractionLevel < this.createShablon.level
        && this.iHaveTownHoll
        && townHollToBatrack
        // &&
        // (this.peoples.length>=planWarriors/5||this.gold>10000)//
        // (this.fractionLevel<2&&this.iCanTownHollLevelUp===1)
        // ||
        // (this.fractionLevel<3&&this.iCanTownHollLevelUp===2)
        && ((townHollToBatrack.level === 1
          && this.canLuchnick
          && this.canBallista
          && this.canMechnick)
          || (townHollToBatrack.level === 2
            && this.canLuchnick
            && this.canBallista
            && this.canMechnick
            && this.canRizar))
    ) {
      arsisLines.push('townhollLevelUp');
    } else {
      arsisLines.push(0);
    }

    if (
      this.peoples.length < this.maxUnits
        && this.canLuchnick
        && !this.myJoubeTimer_leso
        && this.luchniks.length >= this.createShablon.luchniks / 4
        && (this.dopFlyAttack_level < 5 || this.dopFlySee_level < 3)
    ) {
      arsisLines.push('dopFlyAttack');
    } else {
      arsisLines.push(0);
    }

    if (
      this.canBallista
        && !this.myJoubeTimer_kuz
        && this.peoples.length < this.maxUnits
        && this.rizars.length + this.mechniks.length + this.ballistas.length
          >= (this.createShablon.rizars
            + this.createShablon.mechniks
            + this.createShablon.ballistas)
            / 5
        && (this.dopNoFlyAttack_level < 5
          || this.dopNoFlyPanzer_level < 5
          || this.dopBallista_level < 3)
    ) {
      arsisLines.push('dopNoFlyAttack');
    } else {
      arsisLines.push(0);
    }

    if (
      !this.alarm_stop_build
        && this.canFarm // this.gold>=5000
        // &&
        // this.wood>=2000
        // &&
        && ((this.canDragon_roost
          && this.dragon_roosts.length < this.createShablon.dragon_roosts.length)
          // this.gold>=3000
          // &&
          // this.wood>=1000
          // &&
          || (this.canTemple
            && this.temples.length < this.createShablon.temples.length)
          || (this.farms.length < this.createShablon.farms.length
            && this.peoples.length >= this.maxUnits)
          || (this.farms.length < this.createShablon.farms.length
            && this.gold >= 10000
            && this.wood >= 1000)
          || (this.baracks.length < this.createShablon.baracks.length
            // &&
            // this.canRizar
            && this.canBarack
            && (!this.baracks.length || this.canBallista))
          || !this.lesopilkas.length
          || (this.kuznyas.length < this.createShablon.kuznyas.length
            && this.canKuznya)
          // &&
          // (this.rizars.length+this.mechniks.length+this.ballistas.length)>=5
          || (this.ogreBases.length < this.createShablon.ogreBases.length
            && this.canOgreBase)
          || (this.altars.length < this.createShablon.altars.length
            && this.canAltar))
    ) {
      arsisLines.push('baseBuildLine');
    } else {
      arsisLines.push(0);
    }

    let need_tower;

    for (let i = 0; i < this.createShablon.towers.length; i++) {
      if (!this.createShablon.towers[i].iBorn) {
        need_tower = true;
        break;
      }
    }

    /*
    if(this.fraction==="redOrcs"){

        console.log(this.createShablon.towers.length)
        console.log(this.towers.length)
        console.log(need_tower)
    };
    // */

    if (
      (!this.alarm_stop_build || this.unterTowers.length)
        && this.canTower
        && (need_tower || this.unterTowers.length)
    ) {
      arsisLines.push('difanseLine', 'difanseLine');
    } else {
      arsisLines.push(0, 0);
    }

    if (
      this.canMechnick
        && barackOnJobe
        && this.peoples.length < this.maxUnits
        && ((this.rizars.length < this.createShablon.rizars && this.canRizar)
          || (this.mechniks.length < this.createShablon.mechniks
            && this.canMechnick)
          || (this.luchniks.length < this.createShablon.luchniks
            && this.canLuchnick)
          || (this.ballistas.length < this.createShablon.ballistas
            && this.canBallista))
    ) {
      arsisLines.push('attack', 'attack', 'attack');
    } else {
      arsisLines.push(0, 0, 0);
    }
    // this.selectLineIndex=0;

    if (this.selectLineIndex >= arsisLines.length) {
      this.selectLineIndex = 0;
    }

    let arsisLine = arsisLines[this.selectLineIndex];

    if (!arsisLine) {
      for (let i = this.selectLineIndex; i < arsisLines.length; i++) {
        if (arsisLines[i]) {
          // arsisLine=arsisLines[i];
          this.selectLineIndex = i;
          break;
        }
      }
    }

    arsisLine = arsisLines[this.selectLineIndex];

    if (!arsisLine) {
      for (let i = 0; i < arsisLines.length; i++) {
        if (arsisLines[i]) {
          // arsisLine=arsisLines[i];
          this.selectLineIndex = i;
          break;
        }
      }
    }

    arsisLine = arsisLines[this.selectLineIndex];

    if (this.arsisLine_attack) {
      prioritetToDo = this.arsisLine_attack;
    }

    if (arsisLine === 'mag_line') {
      prioritetToDo = 'mag';
    } else if (arsisLine === 'dragoon_line') {
      prioritetToDo = 'dragoon';
    } else if (arsisLine === 'dopAttack') {
      prioritetToDo = 'dopAttack';
    } else if (arsisLine === 'transport_line') {
      const m = [];

      if (
        this.canTransport
          && this.transports.length < this.createShablon.transports
      ) {
        m.push('transport');
      }

      if (
        this.canOilTanker
          && this.oil_tankers.length < this.createShablon.oil_tankers
      ) {
        m.push('oil_tanker');
      }

      if (
        this.canDistroer
          && this.distroers.length < this.createShablon.distroers
      ) {
        m.push('distroer');
      }

      if (
        this.canLinkor
          && this.canDistroer
          && this.linkors.length < this.createShablon.linkors
      ) {
        m.push('linkor');
      }

      if (this.canLinkor && this.turtles.length < this.createShablon.turtles) {
        m.push('turtle');
      }

      const ran = Math.floor(Math.random() * m.length);

      prioritetToDo = m[ran];

      if (!this.oil_tankers.length) {
        prioritetToDo = 'oil_tanker';
      }

      if (
        this.canTransport
          && this.transports.length < this.createShablon.transports
      ) {
        prioritetToDo = 'transport';
      }

      // prioritetToDo="transport"; oil_tankers

      // prioritetToDo="oil_tanker";

      // console.log(ran);
      // console.log(prioritetToDo);
    } else if (arsisLine === 'base_sea_line') {
      if (
        !this.ports.length
          || (this.ports.length < this.createShablon.p_ports
            && this.oil_Refs.length
            && this.foundrys.length)
      ) {
        prioritetToDo = 'port';
      } else if (!this.oil_Refs.length) {
        prioritetToDo = 'oil_Ref';
      } else if (!this.foundrys.length) {
        prioritetToDo = 'foundry';
      }
    } else if (arsisLine === 'dopNoFlyAttack') {
      if (
        (this.dopNoFlyAttack_level < 5
            || this.dopNoFlyPanzer_level < 5
            || this.dopBallista_level < 3)
          && this.canBallista
          && !this.kuznyas[0].myJoubeTimer
      ) {
        if (this.dopNoFlyAttack_level > this.dopNoFlyPanzer_level) {
          prioritetToDo = 'dopNoFlyPanzer_level';
        } else if (this.dopNoFlyPanzer_level < 5) {
          prioritetToDo = 'dopNoFlyAttack_level';
        } else if (this.dopBallista < 3) {
          prioritetToDo = 'dopBallista';
        }
      }
    } else if (arsisLine === 'dopFlyAttack') {
      if (
        (this.dopFlyAttack_level < 5 || this.dopFlySee_level < 3)
          && this.canLuchnick
          && !this.myJoubeTimer_leso
      ) {
        if (this.dopFlyAttack_level < 5) {
          prioritetToDo = 'dopFlyAttack_level';
        } else if (this.dopFlySee_level < 3) {
          prioritetToDo = 'dopFlySee_level';
        }
      }
    } else if (
      arsisLine === 'townhollLevelUp'
        && this.fractionLevel < this.createShablon.level
    ) {
      if (
        townHollToBatrack.level === 1
          && this.canLuchnick
          && this.canBallista
          && this.canMechnick
      ) {
        townHollToUpgrade = townHollToBatrack;
        prioritetToDo = 'levelUpgrade';
      } else if (
        townHollToBatrack.level === 2
          && this.canLuchnick
          && this.canBallista
          && this.canMechnick
          && this.canRizar
      ) {
        townHollToUpgrade = townHollToBatrack;
        prioritetToDo = 'levelUpgrade';
      }
    } else if (arsisLine === 'baseBuildLine') {
      if (
      // this.gold>=5000
      // &&
      // this.wood>=2000
      // &&
        this.canDragon_roost
          && this.dragon_roosts.length < this.createShablon.dragon_roosts.length
      ) {
        prioritetToDo = 'dragon_roost';
      }

      if (
      // this.gold>=3000
      // &&
      // this.wood>=1000
      // &&
        this.canTemple
          && this.temples.length < this.createShablon.temples.length
      ) {
        prioritetToDo = 'temple';
      }

      if (
        this.farms.length < this.createShablon.farms.length
          && this.gold >= 10000
          && this.wood >= 1000
          && this.canFarm
      ) {
        prioritetToDo = 'farm';
      }

      if (
        this.canAltar
          && this.altars.length < this.createShablon.altars.length
      ) {
        prioritetToDo = 'altar';
      }

      if (
        this.canOgreBase
          && this.ogreBases.length < this.createShablon.ogreBases.length
      ) {
        prioritetToDo = 'ogreBase';
      }

      if (
        this.canKuznya
          && this.kuznyas.length < this.createShablon.kuznyas.length
          // &&
          // (this.rizars.length+this.mechniks.length+this.ballistas.length)>=5
      ) {
        prioritetToDo = 'kuznya';
      }

      if (
        this.canBarack
          && this.baracks.length < this.createShablon.baracks.length
          && (!this.baracks.length || this.canBallista)
      ) {
        prioritetToDo = 'barack';
      }

      if (
        this.peoples.length >= this.maxUnits
          && this.farms.length < this.createShablon.farms.length
          && this.canFarm
      ) {
        prioritetToDo = 'farm';
      }

      if (!this.lesopilkas.length && this.canLesopilka) {
        prioritetToDo = 'lesopilka';
      }

      // console.log(prioritetToDo);
    } else if (arsisLine === 'difanseLine') {
      if (need_tower) {
        prioritetToDo = 'tower';
      }

      if (this.canGuardTower || this.canCannonTower) {
        for (let i = 0; i < this.unterTowers.length; i++) {
          if (
            this.unterTowers[i].hp > 0
              && this.unterTowers[i].buildready >= this.unterTowers[i].hpfull
          ) {
            prioritetToDo = 'towerOnUpgrade';
            towerOnUpgrade = this.unterTowers[i];
          }
        } // prioritetToDo="tower";
      }
    } else if (arsisLine === 'jobePowerLine') {
      prioritetToDo = 'batrak';
    } else if (arsisLine === 'attack' && !this.arsisLine_attack) {
      const m = [];

      if (
        this.canLuchnick
          && this.luchniks.length < this.createShablon.luchniks
      ) {
        m.push('luchnik', 'luchnik', 'luchnik');
      }

      if (
        this.canBallista
          && this.ballistas.length < this.createShablon.ballistas
      ) {
        m.push('ballista');
      }

      if (
        this.canMechnick
          && this.mechniks.length < this.createShablon.mechniks
      ) {
        m.push('mechnick', 'mechnick');
      }

      if (this.canRizar && this.rizars.length < this.createShablon.rizars) {
        m.push('rizar', 'rizar', 'rizar', 'rizar');
      }

      const ran = Math.floor(Math.random() * m.length);

      // if(!prioritetToDo){
      prioritetToDo = m[ran];

      this.arsisLine_attack = prioritetToDo;
    }

    if (this.farms.length < 1 && this.canFarm) {
      prioritetToDo = 'farm';
    }

    if (
      this.batraks.length < this.createShablon.batraks / 1.5
        && this.peoples.length < this.maxUnits
    ) {
      for (let i = 0; i < this.townHolls.length; i++) {
        if (
          this.townHolls[i].hp > 0
            && this.townHolls[i].buildready >= this.townHolls[i].hpfull
            && !this.townHolls[i].myJoubeTimer
        ) {
          prioritetToDo = 'batrak';
          townHollToBatrack = this.townHolls[i];
          break;
        }
      }
    }

    /// *

    if (
      this.fractionLevel < this.createShablon.level
        && this.iHaveTownHoll
        && !this.townHolls[0].myJoubeTimer
        // &&
        // (this.peoples.length>=planWarriors/5||this.gold>10000)
        && ((this.fractionLevel < 2 && this.iCanTownHollLevelUp === 1)
          || (this.fractionLevel < 3 && this.iCanTownHollLevelUp === 2))
    ) {
      if (this.fractionLevel < 2 && this.iCanTownHollLevelUp === 1) {
        for (let i = 0; i < this.townHolls.length; i++) {
          if (
            this.townHolls[i].level === 1
              && !this.townHolls[i].myJoubeTimer
          ) {
            townHollToUpgrade = this.townHolls[i];
            prioritetToDo = 'levelUpgrade';
            break;
          }
        }
      } else if (this.fractionLevel < 3 && this.iCanTownHollLevelUp === 2) {
        for (let i = 0; i < this.townHolls.length; i++) {
          if (
            this.townHolls[i].level === 2
              && !this.townHolls[i].myJoubeTimer
          ) {
            townHollToUpgrade = this.townHolls[i];
            prioritetToDo = 'levelUpgrade';
            break;
          }
        }
      }
    }

    //* /

    if (!this.townHolls.length) {
      prioritetToDo = 'townHoll';
    }
    prioritetToDo = this.check_resurs_pro(prioritetToDo);

    if (prioritetToDo === 'mag') {
      const time = 1000;

      // if(this.fraction==="redOrcs"){time=2000;};

      this.selectLineIndex++;

      temple_for_mag.myJoube = true;
      temple_for_mag.myJoubeTimer = time;

      if (this.activeBuildings.indexOf(temple_for_mag) === -1) {
        this.activeBuildings.push(temple_for_mag);
      }

      this.gold -= 1500;
    } else if (prioritetToDo === 'temple') {
      /// *

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('temple', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }

        builder.iGoBuild = true;
      }

      //* /
    } else if (prioritetToDo === 'dragoon') {
      const time = 2000;

      // if(this.fraction==="redOrcs"){time=2000;};

      this.selectLineIndex++;

      dragon_roost_for_dragoon.myJoube = true;
      dragon_roost_for_dragoon.myJoubeTimer = time;

      if (this.activeBuildings.indexOf(dragon_roost_for_dragoon) === -1) {
        this.activeBuildings.push(dragon_roost_for_dragoon);
      }

      this.gold -= 5000;
    } else if (prioritetToDo === 'dragon_roost') {
      /// *

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('dragon_roost', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }

        builder.iGoBuild = true;
      }

      //* /
    } else if (prioritetToDo === 'turtle') {
      // console.log("turtle");

      this.gold -= 1200;
      this.wood -= 300;

      this.selectLineIndex++;

      portToShip.myJoubeTimer = 500;
      portToShip.myJoube = 'turtle';

      if (this.activeBuildings.indexOf(portToShip) === -1) {
        this.activeBuildings.push(portToShip);
      }
    } else if (prioritetToDo === 'dopAttack') {
      this.myJoubeTimer_fou = 500;
      this.myJoube_fou = 'dopAttack';
      this.selectLineIndex++;
    } else if (prioritetToDo === 'foundry') {
      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('foundry', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }

        builder.iGoBuild = true;
      }

      //* /
    } else if (prioritetToDo === 'linkor') {
      this.gold -= 1500;
      this.wood -= 500;

      this.selectLineIndex++;

      portToShip.myJoubeTimer = 1000;
      portToShip.myJoube = 'linkor';

      if (this.activeBuildings.indexOf(portToShip) === -1) {
        this.activeBuildings.push(portToShip);
      }
    } else if (prioritetToDo === 'distroer') {
      this.gold -= 1000;
      this.wood -= 300;

      this.selectLineIndex++;

      portToShip.myJoubeTimer = 500;
      portToShip.myJoube = 'distroer';

      if (this.activeBuildings.indexOf(portToShip) === -1) {
        this.activeBuildings.push(portToShip);
      }
    } else if (prioritetToDo === 'oil_tanker') {
      this.gold -= 1000;
      this.wood -= 300;

      this.selectLineIndex++;

      portToShip.myJoubeTimer = 300;
      portToShip.myJoube = 'oil_tanker';

      if (this.activeBuildings.indexOf(portToShip) === -1) {
        this.activeBuildings.push(portToShip);
      }
    } else if (prioritetToDo === 'oil_Ref') {
      /// *

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('oil_Ref', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }

        builder.iGoBuild = true;
      }

      //* /
    } else if (prioritetToDo === 'transport') {
      this.gold -= 1000;
      this.wood -= 300;

      this.selectLineIndex++;

      portToShip.myJoubeTimer = 500;
      portToShip.myJoube = 'transport';

      if (this.activeBuildings.indexOf(portToShip) === -1) {
        this.activeBuildings.push(portToShip);
      }
    } else if (prioritetToDo === 'port') {
      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('port', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }
    } else if (prioritetToDo === 'altar') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('altar', builder);
        // indexOf
        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
      // this.gold-=700;
      // this.wood-=500;
    } else if (prioritetToDo === 'rizar') {
      this.arsisLine_attack = false;
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      barackOnJobe.myJoubeTimer = 500;
      barackOnJobe.myJoube = 'rizar';

      if (this.activeBuildings.indexOf(barackOnJobe) === -1) {
        this.activeBuildings.push(barackOnJobe);
      }

      this.gold -= 1000;
      this.wood -= 100;

      // console.log("ok");
    } else if (prioritetToDo === 'ogreBase') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('ogreBase', builder);

        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
      // this.gold-=700;
      // this.wood-=500;
    } else if (prioritetToDo === 'ballista') {
      this.arsisLine_attack = false;
      /// console.log(prioritetToDo);

      this.selectLineIndex++;

      barackOnJobe.myJoubeTimer = 350;
      barackOnJobe.myJoube = 'ballista';

      if (this.activeBuildings.indexOf(barackOnJobe) === -1) {
        this.activeBuildings.push(barackOnJobe);
      }

      this.gold -= 1000;
      this.wood -= 300;

      // console.log("ok");
    } else if (prioritetToDo === 'levelUpgrade') {
      // console.log("typnyak");

      // console.log(prioritetToDo);

      this.selectLineIndex++;

      townHollToUpgrade.myJoube = 'levelUpgrade';
      townHollToUpgrade.myJoubeTimer = 1500;

      this.gold -= 2000;
      this.wood -= 1000;

      if (this.activeBuildings.indexOf(townHollToUpgrade) === -1) {
        this.activeBuildings.push(townHollToUpgrade);
      }
    } else if (
      prioritetToDo === 'dopFlyAttack_level'
        || prioritetToDo === 'dopFlySee_level'
    ) {
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      this.myJoubeTimer_leso = 1500;

      if (prioritetToDo === 'dopFlyAttack_level') {
        this.myJoube_leso = 'dopFlyAttack_level';
      }

      if (prioritetToDo === 'dopFlySee_level') {
        this.myJoube_leso = 'dopFlySee_level';
      }

      this.gold -= 1000;
      this.wood -= 500;
    } else if (
      prioritetToDo === 'dopNoFlyAttack_level'
        || prioritetToDo === 'dopNoFlyPanzer_level'
        || prioritetToDo === 'dopBallista'
    ) {
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      this.myJoubeTimer_kuz = 1500;

      if (prioritetToDo === 'dopNoFlyAttack_level') {
        this.myJoube_kuz = 'dopNoFlyAttack_level';
      }

      if (prioritetToDo === 'dopNoFlyPanzer_level') {
        this.myJoube_kuz = 'dopNoFlyPanzer_level';
      }

      if (prioritetToDo === 'dopBallista') {
        this.myJoube_kuz = 'dopBallista';
      }

      this.gold -= 1000;
      this.wood -= 500;
    } else if (prioritetToDo === 'kuznya') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('kuznya', builder);

        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
      // this.gold-=700;
      // this.wood-=500;
    } else if (prioritetToDo === 'towerOnUpgrade') {
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      // console.log("upgrade");
      towerOnUpgrade.upgradeTimer = 500;
      towerOnUpgrade.upgrade = towerOnUpgrade.iBee;

      this.unterTowers.splice(this.unterTowers.indexOf(towerOnUpgrade), 1);

      if (this.activeBuildings.indexOf(towerOnUpgrade) === -1) {
        this.activeBuildings.push(towerOnUpgrade);
      }

      this.gold -= 500;
      this.wood -= 200;
    } else if (prioritetToDo === 'tower') {
      // console.log(this.freeBatraks.length);
      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }

      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);
        // console.log("++++++++++")

        this.selectLineIndex++;

        builder.createBuilding('tower', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }
    } else if (prioritetToDo === 'luchnik') {
      this.arsisLine_attack = false;
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      barackOnJobe.myJoubeTimer = 250;
      barackOnJobe.myJoube = 'luchnik';

      if (this.activeBuildings.indexOf(barackOnJobe) === -1) {
        this.activeBuildings.push(barackOnJobe);
      }

      this.gold -= 500;
      this.wood -= 50;

      // console.log("ok");
    } else if (prioritetToDo === 'mechnick') {
      this.arsisLine_attack = false;
      // console.log(prioritetToDo);

      this.selectLineIndex++;

      barackOnJobe.myJoubeTimer = 250;
      barackOnJobe.myJoube = 'mechnick';

      if (this.activeBuildings.indexOf(barackOnJobe) === -1) {
        this.activeBuildings.push(barackOnJobe);
      }

      this.gold -= 600;
      // console.log("ok");
    } else if (prioritetToDo === 'barack') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('barack', builder);

        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
    } else if (prioritetToDo === 'lesopilka') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('lesopilka', builder);

        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
    } else if (prioritetToDo === 'townHoll') {
      // console.log(this.freeBatraks);

      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('townHoll', builder);

        // this.activeUnits.push(builder);
        // this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);
        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }

      // console.log("ok");

      // console.log(this.freeBatraks.length+" too");
    } else if (prioritetToDo === 'farm' && this.batraks.length) {
      // console.log(this.freeBatraks.length);
      let builder = 0;

      if (this.freeBatraks.length) {
        for (let i = 0; i < this.freeBatraks.length; i++) {
          const ok = this.freeBatraks[i].isBlocked();

          if (!ok) {
            builder = this.freeBatraks[i];
            break;
          }

          // break;
        }
      }
      if (!builder) {
        for (let i = 0; i < this.batraks.length; i++) {
          // console.log(this.batraks[i].iGoBuild)

          if (
            this.batraks[i].workTimeSahta === 100
              && this.batraks[i].waitTime === 30
              && this.batraks[i].iGoBuild === false
              && !this.batraks[i].iGetTarget
              && this.batraks[i].cell
          ) {
            const ok = this.batraks[i].isBlocked();

            if (!ok) {
              builder = this.batraks[i];
              break;
            }

            // builder=this.batraks[i];

            // break;
          }
        }
      }

      // if(!builder){console.log("this.farm no builder");};

      if (builder) {
        // console.log(prioritetToDo);

        this.selectLineIndex++;

        builder.createBuilding('farm', builder);

        if (!builder.active) {
          this.activeUnits.push(builder);
          builder.active = true;
        }
        builder.iGoBuild = true;
      }
    } else if (prioritetToDo === 'gold') {
    } else if (
      prioritetToDo === 'batrak'
        && !townHollsIsBlocked
        && this.townHolls.length
    ) {
      this.selectLineIndex++;

      // console.log(prioritetToDo);

      // console.log(this.selectLineIndex);pausa=1;

      townHollToBatrack.myJoube = 'batrak';
      townHollToBatrack.myJoubeTimer = 100;

      if (this.activeBuildings.indexOf(townHollToBatrack) === -1) {
        this.activeBuildings.push(townHollToBatrack);
      }

      this.gold -= 400;
    } else if (prioritetToDo === 'wood') {
    } // woods

    if (this.batraks.length >= 4) {
      for (let i = 0; i < this.activeBuildings.length; i++) {
        if (
          this.activeBuildings[i].type !== 'oil_platform'
            && (this.activeBuildings[i].buildready
              < this.activeBuildings[i].hpfull
              || this.activeBuildings[i].hp < this.activeBuildings[i].hpfull)
            && this.activeBuildings[i].hp > 0
            && this.activeBuildings[i].buildready > 0
        ) {
          if (
            !this.activeBuildings[i].builders.length
              || !this.activeBuildings[i].builders[0].target
              || this.activeBuildings[i].builders[0].target.persolalNumber
                !== this.activeBuildings[i].persolalNumber
          ) {
            let min = [];

            for (let k = 0; k < this.batraks.length; k++) {
              if (
                this.batraks[k].workTimeSahta === 100
                  && this.batraks[k].waitTime === 30
                  && !this.batraks[k].iGoBuild
                  && !this.batraks[k].iGetTarget
                  && this.batraks[k].cell
              ) {
                const ok = this.batraks[k].isBlocked();

                // if(!ok){builder=this.batraks[i];break;};

                if (!ok) {
                  const a = this.batraks[k].x - this.activeBuildings[i].x;
                  const b = this.batraks[k].y - this.activeBuildings[i].y;

                  const c = Math.sqrt(a * a + b * b);

                  if (!min.length || c < min[0]) {
                    min = [c, this.batraks[k]];
                  }
                }
              }
            }

            if (min.length) {
              const builder = min[1];

              if (builder) {
                builder.target = this.activeBuildings[i];
                this.activeBuildings[i].builders = [];
                this.activeBuildings[i].builders.push(builder);

                if (!builder.active) {
                  this.activeUnits.push(builder);
                  builder.active = true;
                }
                builder.iGoBuild = true;
              }
            }
          }
        }
      }
    }

    this.peon_managmant(prioritetToDo);
  }

  // console.log(this.activeUnits);
};
