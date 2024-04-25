/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */



Fraction.prototype.ii = function (mySelf_ind) {
  // pausa=1; checkAlarms
  // indexOf update_createShablon alarmTimer isBlocked dopFlyAttack lesopilka peon_managmant

  // iCanTownHollLevelUp
  // if(this.stop){pausa=1;};dopNoPanzer_update unterTowers check_resurs_pro dop_towers_control myJoubeTimer_leso

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

    // if(this.fraction==="h_blue"){
    //	console.log(this.alarm_stop_build);
    // };

    // if(this.fraction==="redOrcs"){console.log("ok");};

    /*
  for(let i=0;i<shahts.length;i++){

  for(let k=0;k<shahts[i].workers.length;k++){

      if(shahts[i].workers[k].hp<=0){
          console.log("PIPEZ");
          pausa=1;

      };

  };

  };
  */

    // level

    this.update_createShablon();

    this.ii_oil_control();

    /*
  if(this.kaput){

      for(let i=0;i<this.batraks.length;i++){

          if(this.batraks[i].cell&&this.batraks[i].target){this.batraks[i].hp=0;};

      };

  };
  */

    // levelUpgrade sea

    // console.log("batraks : "+this.batraks.length);

    // console.log("active : "+this.activeUnits.length);

    // console.log("peoples : "+this.peoples.length);

    // console.log("!!!!!!!!!!!!!!!!!!!!!!");

    // console.log("attack : "+this.attack);
    // console.log("revers : "+this.revers.length);
    // console.log(this.objects_on_continents)	;pausa=1;
    /// ////////////////////////////////////////////////////////////////////////////////// !!!!!!!!!!!attack!!!!!!!!!!!!!!!!!

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
        // console.log(this.warriors_on_continents[this.attack.attack_target_fraction_continent].length);

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
            /*
  warrior.clickSave=new ClickSave(
  this.attack.attack_target_fraction.objects_on_continents[this.attack.attack_target_fraction_continent][0],0
  );

  if(!warrior.active){this.activeUnits.push(warrior); warrior.active=true;};
  */
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

    const warriors = this.rizars.length
      + this.mechniks.length
      + this.luchniks.length
      + this.ballistas.length;
    const planWarriors = this.createShablon.rizars
      + this.createShablon.mechniks
      + this.createShablon.luchniks
      + this.createShablon.ballistas;

    // console.log(planWarriors)
    /// ////////////////////////////////////////////////////////////////////////////////////
    /// ///////////////////////////////////////////////////////////////////////////////////

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
          && (!this.baracks.length || this.canBallista)) // (this.canRizar&&this.baracks.length===1)||(this.gold>5000&&this.baracks.length===2)||this.gold>10000
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

    /*
  //if(this.fraction==="lazurOrcs"){

  //console.log(arsisLine+" "+	this.selectLineIndex+" arsisLines : "+arsisLines.length);
  console.log("arsisLine : "+arsisLine);
  console.log("selectLineIndex : "+this.selectLineIndex);
  console.log("arsisLines : "+arsisLines);
  console.log(this.gold);
  console.log("//////////////////////////");

  //};
  // */

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
      /*
  (

  (this.townHolls[0].level===1&&this.canLuchnick&&this.canBallista&&this.canMechnick)
  ||
  (this.townHolls[0].level===2&&this.canLuchnick&&this.canBallista&&this.canMechnick&&this.canRizar)

  )

  */
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
        && (!this.baracks.length || this.canBallista) // (this.canRizar&&this.baracks.length===1)||(this.gold>5000&&this.baracks.length===2)||this.gold>10000
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

      // if(this.fraction==="redOrcs"){
      //	console.log("m : "+m.length+" ran : "+ran);
      // };

      // };
    }

    // console.log("iHaveTownHoll : "+this.iHaveTownHoll);

    /// //////////////////////////////////////////////////////////////////////////////////////
    /// //////////////////////////////////////////////////////////////////////////////////////

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

    /*

  if(prioritetToDo){

      if(prioritetToDo==="townHoll"&&
      (this.gold<1000||this.wood<1000)
      ){

      if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<1000){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="farm"&&
      (this.gold<500||this.wood<300)
      ){

      if(this.gold<500){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="batrak"){

      if(this.gold<400){prioritetToDo="gold";};

      }
      else if(prioritetToDo==="lesopilka"||prioritetToDo==="barack"||prioritetToDo==="kuznya"){

          if(this.gold<700){prioritetToDo="gold";}else if(this.wood<500){prioritetToDo="wood";};

      }
          else if(prioritetToDo==="rizar"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<100){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="mechnick"){

          if(this.gold<600){prioritetToDo="gold";};

      }
      else if(prioritetToDo==="luchnik"){

          if(this.gold<500){prioritetToDo="gold";}else if(this.wood<50){prioritetToDo="wood";};

      }
          else if(prioritetToDo==="ballista"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="tower"){

          if(this.gold<1500){prioritetToDo="gold";}else if(this.wood<500){prioritetToDo="wood";};

      }

      else if(prioritetToDo==="towerOnUpgrade"){

          if(this.gold<500){prioritetToDo="gold";}else if(this.wood<200){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="dopNoFlyAttack_level"||prioritetToDo==="dopNoFlyPanzer_level"||
              prioritetToDo==="dopFlyAttack_level"||prioritetToDo==="dopFlySee_level"
              ||prioritetToDo==="dopBallista"||prioritetToDo==="dopAttack"
      ){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<500){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="levelUpgrade"){

          if(this.gold<2000){prioritetToDo="gold";}else if(this.wood<1000){prioritetToDo="wood";};

      }
      else if(prioritetToDo==="ogreBase"||prioritetToDo==="altar"||prioritetToDo==="dragon_roost"||prioritetToDo==="temple"){

          if(this.gold<2000){prioritetToDo="gold";}else if(this.wood<1000){prioritetToDo="wood";};

      }
          else if(prioritetToDo==="port"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
              else if(prioritetToDo==="transport"||prioritetToDo==="oil_tanker"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
              else if(prioritetToDo==="oil_Ref"||prioritetToDo==="foundry"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
                  else if(prioritetToDo==="distroer"){

          if(this.gold<1000){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
                      else if(prioritetToDo==="linkor"){

          if(this.gold<1500){prioritetToDo="gold";}else if(this.wood<500){prioritetToDo="wood";};

      }
                  else if(prioritetToDo==="turtle"){

          if(this.gold<1200){prioritetToDo="gold";}else if(this.wood<300){prioritetToDo="wood";};

      }
                      else if(prioritetToDo==="mag"){

          if(this.gold<1500){prioritetToDo="gold";};

      }

  };

  */

    prioritetToDo = this.check_resurs_pro(prioritetToDo);

    /*
  //if(){

      //if(this.selectLineIndex===arsisLines.length){this.selectLineIndex=0;};
  //let arsisLine=arsisLines[this.selectLineIndex];

  //prioritetToDo=this.check_resurs_pro(prioritetToDo);

      console.log("///////////////////////////////////");
      console.log("prioritetToDo : "+prioritetToDo);
      console.log("arsisLine : "+arsisLine);
      console.log("arsisLines : "+arsisLines);
      console.log("selectLineIndex : "+this.selectLineIndex);
      //console.log(this.gold);

      //pausa=1;
  //};
  // */

    // dragon_roost

    // console.log(prioritetToDo);

    // console.log(this.gold);
    /*
  if(this.fraction==="lazurOrcs"){
  console.log("prioritetToDo : "+prioritetToDo)
  };
  // */

    // console.log("prioritetToDo : "+prioritetToDo)

    // prioritetToDo="altar";

    if (prioritetToDo === 'mag') {
      // temple_for_mag

      // console.log("here"); pausa=1;

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

      // if(this.activeBuildings.indexOf(this.foundrys[0])===-1){this.activeBuildings.push(this.foundrys[0]);};

      this.selectLineIndex++;
    } else if (prioritetToDo === 'foundry') {
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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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

      // if(this.activeBuildings.indexOf(this.lesopilkas[0])===-1){this.activeBuildings.push(this.lesopilkas[0]);};

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

      // if(this.activeBuildings.indexOf(this.kuznyas[0])===-1){this.activeBuildings.push(this.kuznyas[0]);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

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
        // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
        // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
        // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

        builder.iGoBuild = true;
      }
    }

    /// /
    else if (prioritetToDo === 'gold') {
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

    /*

      let batrak=0;

  //console.log(this.freeBatraks.length)

  if(this.freeBatraks.length){

      //console.log(this.freeBatraks.length);

      for(let i=0;i<this.freeBatraks.length;i++){

      //if(this.freeBatraks[i].persolalNumber===394){console.log(this.freeBatraks.length);};

          let ok=this.freeBatraks[i].isBlocked();

          if(
          !ok
          &&
          !this.freeBatraks[i].target
          &&
          !this.freeBatraks[i].myJoube
          ){
                  //if(this.freeBatraks[i].persolalNumber===394){console.log(this.freeBatraks.length);};
              batrak=this.freeBatraks[i];
              break;
              };

          //break;

      };

  };

  if(batrak){

      let min=getMinDistanse(batrak,shahts);

  if(min){

      //console.log(batrak.persolalNumber)

      batrak.myJoube="shahter";
      batrak.target=gameFielg[min.vertikal][min.horizont].unit;

  if(!batrak.active){this.activeUnits.push(batrak); batrak.active=true;};

  //if(batrak.persolalNumber===394){batrak.ok=true;console.log(batrak.target);};
  }

  };

  */

    /// ////////////////////////
    /// *

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
                // if(this.batraksOnGolg.indexOf(builder)!==-1){this.batraksOnGolg.splice(this.batraksOnGolg.indexOf(builder),1);};
                // if(this.batraksOnWood.indexOf(builder)!==-1){this.batraksOnWood.splice(this.batraksOnWood.indexOf(builder),1);};
                // if(this.freeBatraks.indexOf(builder)!==-1){this.freeBatraks.splice(this.freeBatraks.indexOf(builder),1);};

                builder.iGoBuild = true;
              }
            }
          }
        }
      }
    }

    this.peon_managmant(prioritetToDo);

    //* /

    /// ///////////////////////
    /// ///////////////////////////////////////////////////////////////////////

    /// /////////////////////////////////////////////////////////////////////
  }

  // console.log(this.activeUnits);
};

Fraction.prototype.lesopilka = function () {
  if (this.myJoubeTimer_leso) {
    this.myJoubeTimer_leso--;
  }

  // console.log(this.myJoubeTimer_leso)

  if (this.myJoubeTimer_leso === 0) {
    if (this.myJoube_leso === 'dopFlySee_level') {
      this.dopFlySee_level++;
      this.dopFlySee += 50;
    } else if (this.myJoube_leso === 'dopFlyAttack_level') {
      this.dopFlyAttack_level++;
      this.dopFlyAttack += 0.2;
    }

    this.myJoube_leso = false;
    this.myJoubeTimer_leso = false;
  }
};

Fraction.prototype.kuznya = function () {
  if (this.myJoubeTimer_kuz) {
    this.myJoubeTimer_kuz--;
  }

  // console.log(this.myJoubeTimer_kuz)

  if (this.myJoubeTimer_kuz === 0) {
    if (this.myJoube_kuz === 'dopNoFlyPanzer_level') {
      this.dopNoFlyPanzer_level++;
      this.dopNoFlyPanzer += 0.2;
    } else if (this.myJoube_kuz === 'dopNoFlyAttack_level') {
      this.dopNoFlyAttack_level++;
      this.dopNoFlyAttack += 0.2;
    } else if (this.myJoube_kuz === 'dopBallista') {
      this.dopBallista_level++;
      this.dopBallista += 0.2;
    }

    this.myJoube_kuz = false;
    this.myJoubeTimer_kuz = false;
  }
};

Fraction.prototype.foundry = function () {
  if (this.myJoubeTimer_fou) {
    this.myJoubeTimer_fou--;
  }

  // console.log(this.myJoubeTimer_kuz)

  if (this.myJoubeTimer_fou === 0) {
    this.dopAttack_level++;
    this.dopAttack += 0.2;

    this.myJoube_fou = false;
    this.myJoubeTimer_fou = false;
  }
};

Fraction.prototype.globalUpdate = function () {
  // console.log(this.maxUnits); fractionLevelBonusOnGold checkAlarms

  // iCanTownHollLevelUp myJoubeTimer_leso lesopilka canBallista iCanTownHollLevelUp

  this.lesopilkaBonusOnWood = 0;
  this.fractionLevelBonusOnGold = 0;
  this.iCanTownHollLevelUp = 0;
  this.fractionLevel = 1;
  this.iHaveTownHoll = false;
  this.canMechnick = false;
  this.canLuchnick = false;
  this.canFarm = false;
  this.canLesopilka = false;
  this.canBarack = false;
  this.canTower = false;
  this.canGuardTower = false;
  this.canCannonTower = false;
  this.canKuznya = false;
  this.canBallista = false;
  this.canOgreBase = false;
  this.canRizar = false;
  this.canAltar = false;
  // this.canMagTower=false;
  this.canDragon_roost = false;
  this.canMagick = false;
  this.canTransport = false;
  this.canDistroer = false;
  this.canOilTanker = false;
  this.canOilRef = false;
  this.canFoundry = false;
  this.canLinkor = false;
  this.canDragoon = false;
  this.canTemple = false;
  this.canPort = false;

  for (let i = 0; i < this.dragon_roosts.length; i++) {
    if (
      this.dragon_roosts[i].buildready >= this.dragon_roosts[i].hpfull
      && this.dragon_roosts[i].hp > 0
    ) {
      this.canDragoon = true;
    }
  }

  for (let i = 0; i < this.oil_Refs.length; i++) {
    if (
      this.oil_Refs[i].buildready >= this.oil_Refs[i].hpfull
      && this.oil_Refs[i].hp > 0
    ) {
      this.canOilTanker = true;
      this.canFoundry = true;
    }
  }

  for (let i = 0; i < this.ports.length; i++) {
    if (
      this.ports[i].buildready >= this.ports[i].hpfull
      && this.ports[i].hp > 0
    ) {
      this.canTransport = true;
      this.canDistroer = true;
      this.canOilRef = true;
    }
  }

  for (let i = 0; i < this.lesopilkas.length; i++) {
    if (
      this.lesopilkas[i].hp > 0
      && this.lesopilkas[i].buildready >= this.lesopilkas[i].hpfull
    ) {
      this.lesopilkaBonusOnWood = 100;
      this.canGuardTower = true;
      this.canTower = true;
      this.canPort = true;
      this.canLuchnick = true;

      break;
    }
  }

  this.lesopilka();

  for (let i = 0; i < this.baracks.length; i++) {
    if (
      this.baracks[i].hp > 0
      && this.baracks[i].buildready >= this.baracks[i].hpfull
    ) {
      this.canMechnick = true;

      // console.log(this.canMechnick);
    }
  }

  for (let i = 0; i < this.kuznyas.length; i++) {
    if (
      this.kuznyas[i].hp > 0
      && this.kuznyas[i].buildready >= this.kuznyas[i].hpfull
    ) {
      // if(this.iCanTownHollLevelUp===false){this.iCanTownHollLevelUp=1;};

      // if(this.canMechnick){
      this.canBallista = true;
      // };
    }
  }

  this.kuznya();

  for (let i = 0; i < this.townHolls.length; i++) {
    if (this.townHolls[i].hp > 0) {
      if (
        this.townHolls[i].buildready >= this.townHolls[i].hpfull
        && this.canTower
        && this.canBallista
        && this.canMechnick
      ) {
        this.iCanTownHollLevelUp = 1;
      }

      if (this.townHolls[i].level > this.fractionLevel) {
        this.fractionLevel = this.townHolls[i].level;
      }

      if (this.townHolls[i].buildready >= this.townHolls[i].hpfull) {
        this.iHaveTownHoll = true;

        this.canFarm = true;
        this.canLesopilka = true;
        this.canBarack = true;
        this.canKuznya = true;

        this.townHolls[i].panzer = 30 * this.townHolls[i].level;
      }
    }
  }

  for (let i = 0; i < this.foundrys.length; i++) {
    if (
      this.foundrys[i].hp > 0
      && this.foundrys[i].buildready >= this.foundrys[i].hpfull
    ) {
      // if(this.iCanTownHollLevelUp===false){this.iCanTownHollLevelUp=1;};

      this.canLinkor = true;
    }
  }

  this.foundry();

  if (!this.canLinkor) {
    this.myJoube_fou = false;
    this.myJoubeTimer_fou = false;

    this.dopAttack = 1;
    this.dopAttack_update = false;
    this.dopAttack_level = 0;
  }

  if (!this.canBallista) {
    this.dopNoFlyAttack = 1;
    this.dopNoFlyAttack_update = false;
    this.dopNoFlyAttack_level = 0;

    this.dopNoFlyPanzer = 1;
    this.dopNoPanzer_update = false;
    this.dopNoFlyPanzer_level = 0;

    this.dopBallista_level = 0;
    this.dopBallista = 1;

    this.myJoube_kuz = 0;
    this.myJoubeTimer_kuz = false;
  }

  if (!this.lesopilkaBonusOnWood) {
    this.dopFlyAttack = 1;
    this.dopFlyAttack_update = false;
    this.dopFlyAttack_level = 0;

    this.dopFlySee = 0;
    this.dopFlySee_update = false;
    this.dopFlySee_level = 0;

    this.myJoubeTimer_leso = 0;
    this.myJoube_leso = false;
  }

  // console.log(this.fractionLevel);

  // if(this.fractionLevel>1){this.canOgreBase=true;};

  for (let i = 0; i < this.ogreBases.length; i++) {
    if (
      this.ogreBases[i].hp > 0
      && this.ogreBases[i].buildready >= this.ogreBases[i].hpfull
    ) {
      this.canRizar = true;
    }
  }

  for (let i = 0; i < this.altars.length; i++) {
    if (
      this.altars[i].hp > 0
      && this.altars[i].buildready >= this.altars[i].hpfull
    ) {
      this.canMagick = true;
    }
  }

  /// //////////////////////////////////

  if (!this.canMagick) {
    this.manaTimer = false;
  } else if (this.manaTimer === false) {
    this.manaTimer = floorGlobalTimer;

    for (let i = 0; i < this.peoples.length; i++) {
      if (this.peoples[i].type === 'rizar') {
        this.peoples[i].manaTimer = this.manaTimer;
      }
    }
  }

  /// /////////////////////////////////////////

  if (this.canRizar && this.iCanTownHollLevelUp === 1) {
    this.iCanTownHollLevelUp = 2;
  }

  if (this.fractionLevel === 2) {
    this.lesopilkaBonusOnWood += 50;
    this.fractionLevelBonusOnGold = 100;

    if (this.canMechnick && this.canBallista && this.canLuchnick) {
      this.canOgreBase = true;
    }
  } else if (this.fractionLevel === 3) {
    this.lesopilkaBonusOnWood += 100;
    this.fractionLevelBonusOnGold = 200;

    if (this.canMechnick && this.canBallista && this.canLuchnick) {
      this.canOgreBase = true;

      this.canAltar = true;
      this.canMagTower = true;
      this.canDragon_roost = true;
      this.canTemple = true;
    }
  }

  /// //////////////////////////////////////////////

  // console.log(this.fractionLevelBonusOnGold);
  // console.log(this.persolalNumber)
  // this.canMagick=true;

  if (title.style) {
    if (level === 1) {
      // this.canLesopilka=false;
      this.canTower = false;
      this.canGuardTower = false;
      this.canCannonTower = false;
      this.canKuznya = false;
      this.canBallista = false;
      this.canOgreBase = false;
      this.canRizar = false;
      this.canAltar = false;
      // this.canMagTower=false;
      this.canDragon_roost = false;
      this.canMagick = false;
      this.canTransport = false;
      this.canDistroer = false;
      this.canOilTanker = false;
      this.canOilRef = false;
      this.canFoundry = false;
      this.canLinkor = false;
      this.canDragoon = false;
      this.canTemple = false;
      this.canPort = false;
    }
  }

  if (
    player
    && unit_dop_menu.length
    && this.persolalNumber === player.persolalNumber
  ) {
    this.unit_dop_menu_create();
  }
};

Fraction.prototype.unit_dop_menu_create = function () {
  //	check_resurs
  // this.canMagick=true;
  // menu_unit_for_update.mana=100 stop hold position

  if (groop_mem_unit === true) {
    groop_mem_unit = false;

    let ok = true;

    let all_free = true;
    let all_hold = true;

    for (let i = 0; i < all_units.length; i++) {
      const obj = all_units[i];

      if (obj.hold_position) {
        all_free = false;
      } else {
        all_hold = false;
      }

      if (!obj.canHold) {
        ok = false;
      }
    }

    if (ok) {
      /// ///////////////////////////////////	HOLD

      ind = 1;

      unit_dop_menu[ind].can = true;

      if (this.nation === 'h') {
        unit_dop_menu[ind].face_animY = 10000;
        unit_dop_menu[ind].menu_name = 'Free';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      } else {
        unit_dop_menu[ind].face_animY = 10100;
        unit_dop_menu[ind].menu_name = 'Free';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      }

      unit_dop_menu[ind].name = 'hold_stop groop';

      unit_dop_menu[ind].resurs = !all_free; // true;//menu_unit_for_update.hold_position//this.check_resurs_pro(unit_dop_menu[ind].name)===unit_dop_menu[ind].name;

      // console.log(unit_dop_menu[0].resurs)check_resurs

      // unit_dop_menu[ind].gold=1500;
      // unit_dop_menu[ind].wood=500;
      // unit_dop_menu[ind].oil=0;

      /// /////////////////////////////////////

      /// ///////////////////////////////////	HOLD

      ind = 0;

      unit_dop_menu[ind].can = true;

      if (this.nation === 'h') {
        unit_dop_menu[ind].face_animY = 9800;
        unit_dop_menu[ind].menu_name = 'Hold position';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      } else {
        unit_dop_menu[ind].face_animY = 9900;
        unit_dop_menu[ind].menu_name = 'Hold position';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      }

      unit_dop_menu[ind].name = 'hold groop';

      unit_dop_menu[ind].resurs = !all_hold; // true;//!menu_unit_for_update.hold_position//this.check_resurs_pro(unit_dop_menu[ind].name)===unit_dop_menu[ind].name;

      // console.log(unit_dop_menu[0].resurs)check_resurs

      // unit_dop_menu[ind].gold=1500;
      // unit_dop_menu[ind].wood=500;
      // unit_dop_menu[ind].oil=0;

      /// /////////////////////////////////////
    }
  } else {
    all_units = false;

    if (menu_unit_for_update && menu_unit_for_update.cell) {
      /// *
      unit_dop_menu[0].can = false;
      unit_dop_menu[1].can = false;
      unit_dop_menu[2].can = false;
      unit_dop_menu[3].can = false;
      unit_dop_menu[4].can = false;
      unit_dop_menu[5].can = false;
      unit_dop_menu[6].can = false;
      unit_dop_menu[7].can = false;
      unit_dop_menu[8].can = false;
      unit_dop_menu[9].can = false;
      unit_dop_menu[10].can = false;
      unit_dop_menu[11].can = false;
      unit_dop_menu[12].can = false;
      unit_dop_menu[13].can = false;
      unit_dop_menu[14].can = false;
      unit_dop_menu[15].can = false;
      unit_dop_menu[16].can = false;
      unit_dop_menu[17].can = false;
      unit_dop_menu[18].can = false;
      unit_dop_menu[19].can = false;
      unit_dop_menu[20].can = false;
      unit_dop_menu[21].can = false;
      unit_dop_menu[22].can = false;
      unit_dop_menu[23].can = false;
      // unit_dop_menu[24].can=false;
      //* /

      if (menu_unit_for_update.type === 'transport') {
        // console.log("here");

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 12300;
          unit_dop_menu[ind].menu_name = 'Passagers out';
          // unit_dop_menu[ind].name="nar";
        } else {
          unit_dop_menu[ind].face_animY = 12400;
          unit_dop_menu[ind].menu_name = 'Passagers out';
          // unit_dop_menu[ind].name="z";
        }

        unit_dop_menu[ind].name = 'passagers out';

        unit_dop_menu[ind].resurs = menu_unit_for_update.landing && menu_unit_for_update.passagers.length;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=5000;
        // unit_dop_menu[ind].wood=0;
        //	unit_dop_menu[ind].oil=0;
        // unit_dop_menu[ind].mana=100;
        // unit_dop_menu[ind].doo=["dragoon",myJoube_time("dragoon")];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.type === 'mag') {
        // menu_unit_for_update.mana=100;

        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 11;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10800;
          unit_dop_menu[ind].menu_name = 'Freeze';
          unit_dop_menu[ind].name = 'nar';
        } else {
          unit_dop_menu[ind].face_animY = 10900;
          unit_dop_menu[ind].menu_name = 'Dead';
          unit_dop_menu[ind].name = 'z';
        }

        // unit_dop_menu[ind].name="z";

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=5000;
        // unit_dop_menu[ind].wood=0;
        //	unit_dop_menu[ind].oil=0;
        unit_dop_menu[ind].mana = 100;
        // unit_dop_menu[ind].doo=["dragoon",myJoube_time("dragoon")];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 10;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10700;
          unit_dop_menu[ind].menu_name = 'Tornado';
        } else {
          unit_dop_menu[ind].face_animY = 10700;
          unit_dop_menu[ind].menu_name = 'Tornado';
        }

        unit_dop_menu[ind].name = 'tor';

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;

        unit_dop_menu[ind].mana = 100;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=5000;
        // unit_dop_menu[ind].wood=0;
        //	unit_dop_menu[ind].oil=0;
        // unit_dop_menu[ind].foot=1;
        // unit_dop_menu[ind].doo=["dragoon",myJoube_time("dragoon")];

        /// ////////////////////////////////////////////////////////////////////////////

        if (
          menu_unit_for_update.magick
          && !menu_unit_for_update.anim_magick_timer
        ) {
          unit_dop_menu[24].can = true;
          unit_dop_menu[24].face_animY = 900;
          unit_dop_menu[24].resurs = true;
          unit_dop_menu[24].name = 'out';
          unit_dop_menu[24].menu_name = 'Stop magick';
        } else {
          unit_dop_menu[24].can = false;
          // unit_dop_menu[24].face_animY=900;
          // unit_dop_menu[24].resurs=true;
          // unit_dop_menu[24].name="out";
          // unit_dop_menu[24].menu_name="stop magick";
        }
      }

      if (menu_unit_for_update.type === 'rizar' && this.canMagick) {
        // console.log("here");

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 10;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10600;
          unit_dop_menu[ind].menu_name = 'Cure';
          unit_dop_menu[ind].name = 'cure';
        } else {
          unit_dop_menu[ind].face_animY = 11000;
          unit_dop_menu[ind].menu_name = 'Rage';
          unit_dop_menu[ind].name = 'rage';
        }

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;

        unit_dop_menu[ind].mana = 100;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=5000;
        // unit_dop_menu[ind].wood=0;
        //	unit_dop_menu[ind].oil=0;
        // unit_dop_menu[ind].foot=1;
        // unit_dop_menu[ind].doo=["dragoon",myJoube_time("dragoon")];

        /// ////////////////////////////////////////////////////////////////////////////

        if (menu_unit_for_update.magick && !menu_unit_for_update.magickTarget) {
          unit_dop_menu[24].can = true;
          unit_dop_menu[24].face_animY = 900;
          unit_dop_menu[24].resurs = true;
          unit_dop_menu[24].name = 'out';
          unit_dop_menu[24].menu_name = 'Stop magick';
        } else {
          unit_dop_menu[24].can = false;
          // unit_dop_menu[24].face_animY=900;
          // unit_dop_menu[24].resurs=true;
          // unit_dop_menu[24].name="out";
          // unit_dop_menu[24].menu_name="stop magick";
        }
      }

      if (menu_unit_for_update.type === 'oil_tanker') {
        let ind;

        // console.log(this.canGuardTower);

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 11300;
          unit_dop_menu[ind].menu_name = 'Oil platform';
        } else {
          unit_dop_menu[ind].face_animY = 11400;
          unit_dop_menu[ind].menu_name = 'Oil platform';
        }

        unit_dop_menu[ind].name = 'oil_platform';

        unit_dop_menu[ind].resurs = this.gold >= 1000 && this.wood >= 300;
        // &&
        // menu_unit_for_update.fatherFraction.maxUnits>menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        // unit_dop_menu[ind].doo=["oil_platform",myJoube_time("towerOnUpgrade")];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        let ok;

        for (let i = 0; i < this.oil_platforms.length; i++) {
          if (this.oil_platforms[i].hp > 0 && this.oil_platforms[i].iComplite) {
            ok = true;
            break;
          }
        }

        ind = 20;

        unit_dop_menu[ind].can = this.canFoundry && ok;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 11900;
          unit_dop_menu[ind].menu_name = 'Get oil';
        } else {
          unit_dop_menu[ind].face_animY = 12000;
          unit_dop_menu[ind].menu_name = 'Get oil';
        }

        unit_dop_menu[ind].name = 'get oil';

        unit_dop_menu[ind].resurs = true;
        // &&
        // menu_unit_for_update.fatherFraction.maxUnits>menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=1000;
        // unit_dop_menu[ind].wood=300;
        // unit_dop_menu[ind].oil=0;
        // unit_dop_menu[ind].foot=1;
        // unit_dop_menu[ind].doo=["oil_platform",myJoube_time("towerOnUpgrade")];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.canHold) {
        let ind;

        /// ///////////////////////////////////	HOLD

        ind = 1;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10000;
          unit_dop_menu[ind].menu_name = 'Free';
        } else {
          unit_dop_menu[ind].face_animY = 10100;
          unit_dop_menu[ind].menu_name = 'Free';
        }

        unit_dop_menu[ind].name = 'hold_stop';

        unit_dop_menu[ind].resurs = menu_unit_for_update.hold_position; // this.check_resurs_pro(unit_dop_menu[ind].name)===unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=1500;
        // unit_dop_menu[ind].wood=500;
        // unit_dop_menu[ind].oil=0;

        /// /////////////////////////////////////

        /// ///////////////////////////////////	HOLD

        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9800;
          unit_dop_menu[ind].menu_name = 'Hold position';
        } else {
          unit_dop_menu[ind].face_animY = 9900;
          unit_dop_menu[ind].menu_name = 'Hold position';
        }

        unit_dop_menu[ind].name = 'hold';

        unit_dop_menu[ind].resurs = !menu_unit_for_update.hold_position; // this.check_resurs_pro(unit_dop_menu[ind].name)===unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=1500;
        // unit_dop_menu[ind].wood=500;
        // unit_dop_menu[ind].oil=0;

        /// /////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'tower') {
        let ind;

        // console.log(this.canGuardTower);

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canGuardTower && !menu_unit_for_update.iBee;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10200;
          unit_dop_menu[ind].menu_name = 'Guard tower';
        } else {
          unit_dop_menu[ind].face_animY = 10400;
          unit_dop_menu[ind].menu_name = 'Guard tower';
        }

        unit_dop_menu[ind].name = 'guard';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;
        // &&
        // menu_unit_for_update.fatherFraction.maxUnits>menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 200;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        unit_dop_menu[ind].doo = ['guard', myJoube_time('towerOnUpgrade')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canGuardTower && !menu_unit_for_update.iBee;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10300;
          unit_dop_menu[ind].menu_name = 'Cannon tower';
        } else {
          unit_dop_menu[ind].face_animY = 10500;
          unit_dop_menu[ind].menu_name = 'Cannon tower';
        }

        unit_dop_menu[ind].name = 'cannon';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 200;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        unit_dop_menu[ind].doo = ['cannon', myJoube_time('towerOnUpgrade')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'dragon_roost') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canDragoon;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9500;
          unit_dop_menu[ind].menu_name = 'Gryphon rider';
        } else {
          unit_dop_menu[ind].face_animY = 9600;
          unit_dop_menu[ind].menu_name = 'Dragon';
        }

        unit_dop_menu[ind].name = 'dragoon';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 5000;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['dragoon', myJoube_time('dragoon')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'temple') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.temples.length;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9300;
          unit_dop_menu[ind].menu_name = 'Mag';
        } else {
          unit_dop_menu[ind].face_animY = 9400;
          unit_dop_menu[ind].menu_name = 'Death knight';
        }

        unit_dop_menu[ind].name = 'mag';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['mag', myJoube_time('mag')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'port') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canTransport;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8300;
          unit_dop_menu[ind].menu_name = 'Transport';
        } else {
          unit_dop_menu[ind].face_animY = 8400;
          unit_dop_menu[ind].menu_name = 'Transport';
        }

        unit_dop_menu[ind].name = 'transport';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['transport', myJoube_time('transport')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canOilTanker;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8500;
          unit_dop_menu[ind].menu_name = 'Oil tanker';
        } else {
          unit_dop_menu[ind].face_animY = 8600;
          unit_dop_menu[ind].menu_name = 'Oil tanker';
        }

        unit_dop_menu[ind].name = 'oil_tanker';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['oil_tanker', myJoube_time('oil_tanker')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 5;

        unit_dop_menu[ind].can = this.canDistroer;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8700;
          unit_dop_menu[ind].menu_name = 'Elven destroyer';
        } else {
          unit_dop_menu[ind].face_animY = 8800;
          unit_dop_menu[ind].menu_name = 'Troll destroyer';
        }

        unit_dop_menu[ind].name = 'distroer';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['distroer', myJoube_time('distroer')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 6;

        unit_dop_menu[ind].can = this.canLinkor;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9100;
          unit_dop_menu[ind].menu_name = 'Gnomish submarine';
        } else {
          unit_dop_menu[ind].face_animY = 9200;
          unit_dop_menu[ind].menu_name = 'Giant turtle';
        }

        unit_dop_menu[ind].name = 'turtle';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1200;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['turtle', myJoube_time('turtle')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 7;

        unit_dop_menu[ind].can = this.canLinkor;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8900;
          unit_dop_menu[ind].menu_name = 'Battleship';
        } else {
          unit_dop_menu[ind].face_animY = 9000;
          unit_dop_menu[ind].menu_name = 'Ogre juggernaught';
        }

        unit_dop_menu[ind].name = 'linkor';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 500;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['linkor', myJoube_time('linkor')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (
        menu_unit_for_update.unitName === 'foundry'
        && !this.myJoubeTimer_fou
      ) {
        let ind;

        /// //////////////////////////////////////////////////

        /*
  this.dopNoFlyAttack_level<5
  ||
  this.dopNoFlyPanzer_level<5
  ||
  this.dopBallista_level<3
  */

        ind = 0;

        unit_dop_menu[ind].can = this.canLinkor
        // &&
        //! this.myJoubeTimer_kuz

          && this.dopAttack_level < 5;

        // console.log(this.dopNoFlyAttack_level);

        if (this.dopAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 7700;
            } else if (this.dopAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 7800;
            } else if (this.dopAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 7900;
            }

            unit_dop_menu[ind].menu_name = `Ships fire up + ${String(20)}%`;
          } else {
            if (this.dopAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 8000;
            } else if (this.dopAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 8100;
            } else if (this.dopAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 8200;
            }

            unit_dop_menu[ind].menu_name = `Ships fire up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopAttack';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      } else if (
        menu_unit_for_update.unitName === 'kuznya'
        && !this.myJoubeTimer_kuz
      ) {
        let ind;

        /// //////////////////////////////////////////////////

        /*
  this.dopNoFlyAttack_level<5
  ||
  this.dopNoFlyPanzer_level<5
  ||
  this.dopBallista_level<3
  */

        ind = 0;

        unit_dop_menu[ind].can = this.canBallista
        // &&
        //! this.myJoubeTimer_kuz

          && this.dopNoFlyAttack_level < 5;
        // ||
        // this.dopFlySee_level<3

        // console.log(this.dopNoFlyAttack_level);

        if (this.dopNoFlyAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopNoFlyAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 6400;
            } else if (this.dopNoFlyAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 6500;
            } else if (this.dopNoFlyAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 6600;
            }

            unit_dop_menu[ind].menu_name = `Swords up + ${String(20)}%`;
          } else {
            if (this.dopNoFlyAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 11600;
            } else if (this.dopNoFlyAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 11700;
            } else if (this.dopNoFlyAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 11800;
            }

            unit_dop_menu[ind].menu_name = `Axes up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopNoFlyAttack_level';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }

        if (this.dopNoFlyPanzer_level < 5) {
          ind = 1;

          unit_dop_menu[ind].can = this.canBallista;
          // &&
          //! this.myJoubeTimer_kuz;

          if (this.nation === 'h') {
            if (this.dopNoFlyPanzer_level < 2) {
              unit_dop_menu[ind].face_animY = 6700;
            } else if (this.dopNoFlyPanzer_level < 4) {
              unit_dop_menu[ind].face_animY = 6800;
            } else if (this.dopNoFlyPanzer_level === 4) {
              unit_dop_menu[ind].face_animY = 6900;
            }

            unit_dop_menu[ind].menu_name = `Shilds up + ${String(20)}%`;
          } else {
            if (this.dopNoFlyPanzer_level < 2) {
              unit_dop_menu[ind].face_animY = 7000;
            } else if (this.dopNoFlyPanzer_level < 4) {
              unit_dop_menu[ind].face_animY = 7100;
            } else if (this.dopNoFlyPanzer_level === 4) {
              unit_dop_menu[ind].face_animY = 7200;
            }

            unit_dop_menu[ind].menu_name = `Shilds up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopNoFlyPanzer_level';
          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;
        }

        /// //////////////////////////////////////////////////////////////////////////////////////////

        if (this.dopBallista_level < 3) {
          ind = 2;

          unit_dop_menu[ind].can = this.canBallista;
          // &&
          //! this.myJoubeTimer_kuz;

          if (this.nation === 'h') {
            if (this.dopBallista_level < 2) {
              unit_dop_menu[ind].face_animY = 7300;
            } else {
              unit_dop_menu[ind].face_animY = 7400;
            }

            unit_dop_menu[ind].menu_name = 'Ballista bolt up';
            unit_dop_menu[ind].menu_name_2 = ` + ${String(20)}%`;
          } else {
            if (this.dopBallista_level < 2) {
              unit_dop_menu[ind].face_animY = 7500;
            } else {
              unit_dop_menu[ind].face_animY = 7600;
            }

            unit_dop_menu[ind].menu_name = 'Catapult carnel up';
            unit_dop_menu[ind].menu_name_2 = ` + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopBallista';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      } else if (menu_unit_for_update.unitName === 'barack') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 3;

        unit_dop_menu[ind].can = this.canRizar;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 6200;
          unit_dop_menu[ind].menu_name = 'Knight';
        } else {
          unit_dop_menu[ind].face_animY = 6300;
          unit_dop_menu[ind].menu_name = 'Ogre';
        }

        unit_dop_menu[ind].name = 'rizar';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 100;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['rizar', myJoube_time('rizar')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canMechnick;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5600;
          unit_dop_menu[ind].menu_name = 'Footman';
        } else {
          unit_dop_menu[ind].face_animY = 5700;
          unit_dop_menu[ind].menu_name = 'Grunt';
        }

        unit_dop_menu[ind].name = 'mechnick';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 600;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['mechnick', myJoube_time('mechnick')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canLuchnick;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5800;
          unit_dop_menu[ind].menu_name = 'Elven archer';
        } else {
          unit_dop_menu[ind].face_animY = 5900;
          unit_dop_menu[ind].menu_name = 'Troll axethrower';
        }

        unit_dop_menu[ind].name = 'luchnik';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 50;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['luchnik', myJoube_time('luchnik')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 2;

        unit_dop_menu[ind].can = this.canBallista;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 6000;
          unit_dop_menu[ind].menu_name = 'Ballista';
        } else {
          unit_dop_menu[ind].face_animY = 6100;
          unit_dop_menu[ind].menu_name = 'Catapult';
        }

        unit_dop_menu[ind].name = 'ballista';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['ballista', myJoube_time('ballista')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'peon') {
        let ind;

        /// ///////////////////////////////////	gold

        unit_dop_menu[20].can = !player_pro_building;

        if (this.nation === 'h') {
          unit_dop_menu[20].face_animY = 1100;
        } else {
          unit_dop_menu[20].face_animY = 1000;
        }

        unit_dop_menu[20].name = 'gold';

        unit_dop_menu[20].menu_name = 'Get gold';

        if (
          menu_unit_for_update.gold
          && menu_unit_for_update.fatherFraction.canFarm
        ) {
          unit_dop_menu[20].resurs = true;
        } else if (
          menu_unit_for_update.gold
          && !menu_unit_for_update.fatherFraction.canFarm
        ) {
          unit_dop_menu[20].resurs = false;
        } else if (
          !menu_unit_for_update.gold
          && !allContinents[menu_unit_for_update.cell.continent].shahts.length
        ) {
          unit_dop_menu[20].resurs = false;
        } else {
          unit_dop_menu[20].resurs = true;
        }

        /// /////////////////////////////////////

        /// ///////////////////////////////////	wood

        unit_dop_menu[21].can = !player_pro_building;

        if (this.nation === 'h') {
          unit_dop_menu[21].face_animY = 1200;
        } else {
          unit_dop_menu[21].face_animY = 1200;
        }

        unit_dop_menu[21].name = 'wood';

        unit_dop_menu[21].menu_name = 'Get wood';

        if (
          menu_unit_for_update.wood
          && (menu_unit_for_update.fatherFraction.canFarm
            || menu_unit_for_update.fatherFraction.canLuchnick)
        ) {
          unit_dop_menu[21].resurs = true;
        } else if (
          menu_unit_for_update.wood
          && !menu_unit_for_update.fatherFraction.canFarm
          && !menu_unit_for_update.fatherFraction.canLuchnick
        ) {
          unit_dop_menu[21].resurs = false;
        } else if (
          !menu_unit_for_update.wood
          && !allContinents[menu_unit_for_update.cell.continent].woods.length
        ) {
          unit_dop_menu[21].resurs = false;
        } else {
          unit_dop_menu[21].resurs = true;
        }

        /// /////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 9;

        unit_dop_menu[ind].can = this.canTower;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5400;
          unit_dop_menu[ind].menu_name = 'Scout tower';
        } else {
          unit_dop_menu[ind].face_animY = 5500;
          unit_dop_menu[ind].menu_name = 'Watch tower';
        }

        unit_dop_menu[ind].name = 'tower';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 500;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[0].face_animY = 400;
          unit_dop_menu[0].menu_name = 'Town hall';
        } else {
          unit_dop_menu[0].face_animY = 500;
          unit_dop_menu[0].menu_name = 'Great hall';
        }

        unit_dop_menu[0].name = 'townHoll';

        unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
          === unit_dop_menu[0].name;

        // console.log(unit_dop_menu[0].resurs) check_resurs

        unit_dop_menu[0].gold = 1000;
        unit_dop_menu[0].wood = 1000;
        unit_dop_menu[0].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[1].can = this.canFarm;

        if (this.nation === 'h') {
          unit_dop_menu[1].face_animY = 700;
          unit_dop_menu[1].menu_name = 'Farm';
        } else {
          unit_dop_menu[1].face_animY = 800;
          unit_dop_menu[1].menu_name = 'Pig farm';
        }

        unit_dop_menu[1].name = 'farm';

        unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
          === unit_dop_menu[1].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[1].gold = 500;
        unit_dop_menu[1].wood = 300;
        unit_dop_menu[1].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[2].can = this.canLesopilka;

        if (this.nation === 'h') {
          unit_dop_menu[2].face_animY = 2400;
          unit_dop_menu[2].menu_name = 'Elven lumber mill';
        } else {
          unit_dop_menu[2].face_animY = 2500;
          unit_dop_menu[2].menu_name = 'Troll lumber mill';
        }

        unit_dop_menu[2].name = 'lesopilka';

        unit_dop_menu[2].resurs = this.check_resurs_pro(unit_dop_menu[2].name)
          === unit_dop_menu[2].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[2].gold = 700;
        unit_dop_menu[2].wood = 500;
        unit_dop_menu[2].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        // Great hall

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[3].can = this.canBarack;

        if (this.nation === 'h') {
          unit_dop_menu[3].face_animY = 2600;
          unit_dop_menu[3].menu_name = 'Barracks';
        } else {
          unit_dop_menu[3].face_animY = 2700;
          unit_dop_menu[3].menu_name = 'Barracks';
        }

        unit_dop_menu[3].name = 'barack';

        unit_dop_menu[3].resurs = this.check_resurs_pro(unit_dop_menu[3].name)
          === unit_dop_menu[3].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[3].gold = 700;
        unit_dop_menu[3].wood = 500;
        unit_dop_menu[3].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[4].can = this.canKuznya;

        if (this.nation === 'h') {
          unit_dop_menu[4].face_animY = 3800;
        } else {
          unit_dop_menu[4].face_animY = 3900;
        }

        unit_dop_menu[4].name = 'kuznya';
        unit_dop_menu[4].menu_name = 'Blacksmith';

        unit_dop_menu[4].resurs = this.check_resurs_pro(unit_dop_menu[4].name)
          === unit_dop_menu[4].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[4].gold = 700;
        unit_dop_menu[4].wood = 500;
        unit_dop_menu[4].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 17;

        unit_dop_menu[ind].can = this.canPort;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4000;
        } else {
          unit_dop_menu[ind].face_animY = 4100;
        }

        unit_dop_menu[ind].name = 'port';
        unit_dop_menu[ind].menu_name = 'Shipyard';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 18;

        unit_dop_menu[ind].can = this.canOilRef;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4200;
        } else {
          unit_dop_menu[ind].face_animY = 4300;
        }

        unit_dop_menu[ind].name = 'oil_Ref';
        unit_dop_menu[ind].menu_name = 'Refinary';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 19;

        // console.log(this.canFoundry);

        unit_dop_menu[ind].can = this.canFoundry;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4400;
        } else {
          unit_dop_menu[ind].face_animY = 4500;
        }

        unit_dop_menu[ind].name = 'foundry';
        unit_dop_menu[ind].menu_name = 'Foundry';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 5;

        unit_dop_menu[ind].can = this.canOgreBase;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4600;
          unit_dop_menu[ind].menu_name = 'Stables';
        } else {
          unit_dop_menu[ind].face_animY = 4700;
          unit_dop_menu[ind].menu_name = 'Ogre mound';
        }

        unit_dop_menu[ind].name = 'ogreBase';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 10;

        unit_dop_menu[ind].can = this.canAltar;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4800;
          unit_dop_menu[ind].menu_name = 'Church';
        } else {
          unit_dop_menu[ind].face_animY = 4900;
          unit_dop_menu[ind].menu_name = 'Altar of storms';
        }

        unit_dop_menu[ind].name = 'altar';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 11;

        unit_dop_menu[ind].can = this.canTemple;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5000;
          unit_dop_menu[ind].menu_name = 'Mage tower';
        } else {
          unit_dop_menu[ind].face_animY = 5100;
          unit_dop_menu[ind].menu_name = 'Temple of the damned';
        }

        unit_dop_menu[ind].name = 'temple';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 12;

        unit_dop_menu[ind].can = this.canDragon_roost;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5200;
          unit_dop_menu[ind].menu_name = 'Gryphon aviary';
        } else {
          unit_dop_menu[ind].face_animY = 5300;
          unit_dop_menu[ind].menu_name = 'Dragon roost';
        }

        unit_dop_menu[ind].name = 'dragon_roost';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
          === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'townHoll') {
        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[0].face_animY = 0;
          unit_dop_menu[0].menu_name = 'Batrak';
        } else {
          unit_dop_menu[0].face_animY = 600;
          unit_dop_menu[0].menu_name = 'Peon';
        }

        unit_dop_menu[0].name = 'batrak';

        unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
            === unit_dop_menu[0].name
          && menu_unit_for_update.fatherFraction.maxUnits
            > menu_unit_for_update.fatherFraction.peoples.length;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[0].gold = 400;
        unit_dop_menu[0].wood = 0;
        unit_dop_menu[0].oil = 0;
        unit_dop_menu[0].foot = 1;

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[1].can = (menu_unit_for_update.level === 1
            && this.canLuchnick
            && this.canBallista
            && this.canMechnick)
          || (menu_unit_for_update.level === 2
            && this.canLuchnick
            && this.canBallista
            && this.canMechnick
            && this.canRizar);
        // this.iCanTownHollLevelUp===this.fractionLevel;

        if (this.nation === 'h') {
          if (menu_unit_for_update.level === 1) {
            unit_dop_menu[1].face_animY = 2200;
          } else {
            unit_dop_menu[1].face_animY = 2300;
          }
        } else if (menu_unit_for_update.level === 1) {
          unit_dop_menu[1].face_animY = 2000;
        } else {
          unit_dop_menu[1].face_animY = 2100;
        }

        unit_dop_menu[1].name = 'levelUpgrade';
        unit_dop_menu[1].menu_name = `Level up ${String(menu_unit_for_update.level)}`;

        unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
          === unit_dop_menu[1].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[1].gold = 2000;
        unit_dop_menu[1].wood = 1000;
        unit_dop_menu[1].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'lesopilka') {
        // console.log("here");

        /*
  this.dopFlyAttack_level<5
  ||
  this.dopFlySee_level<3
  */

        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = this.canLuchnick
          && !this.myJoubeTimer_leso
          && this.dopFlyAttack_level < 5;
        // ||
        // this.dopFlySee_level<3

        // 24

        // console.log(this.dopFlyAttack_level);

        if (this.dopFlyAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopFlyAttack_level < 2) {
              unit_dop_menu[0].face_animY = 2800;
            } else if (this.dopFlyAttack_level < 4) {
              unit_dop_menu[0].face_animY = 3000;
            } else if (this.dopFlyAttack_level === 4) {
              unit_dop_menu[0].face_animY = 3200;
            }

            unit_dop_menu[0].menu_name = 'Elven archers';
            unit_dop_menu[0].menu_name_2 = `attack + ${String(20)}%`;
          } else {
            if (this.dopFlyAttack_level < 2) {
              unit_dop_menu[0].face_animY = 2900;
            } else if (this.dopFlyAttack_level < 4) {
              unit_dop_menu[0].face_animY = 3100;
            } else if (this.dopFlyAttack_level === 4) {
              unit_dop_menu[0].face_animY = 3300;
            }

            unit_dop_menu[0].menu_name = 'Troll axethrower';
            unit_dop_menu[0].menu_name_2 = `attack + ${String(20)}%`;
          }

          unit_dop_menu[0].name = 'dopFlyAttack_level';

          unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
            === unit_dop_menu[0].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[0].gold = 1000;
          unit_dop_menu[0].wood = 500;
          unit_dop_menu[0].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }

        if (this.dopFlySee_level < 3) {
          unit_dop_menu[1].can = this.canLuchnick
            && !this.myJoubeTimer_leso
            // this.dopFlyAttack_level<5
            // ||
            && this.dopFlySee_level < 3;

          if (this.nation === 'h') {
            unit_dop_menu[1].face_animY = 3500;

            unit_dop_menu[1].menu_name = 'Elven archers';
            unit_dop_menu[1].menu_name_2 = `sight+${String(50)}`;
          } else {
            unit_dop_menu[1].face_animY = 3600;

            unit_dop_menu[1].menu_name = 'Troll axethrower';
            unit_dop_menu[1].menu_name_2 = `sight+${String(50)}`;
          }

          unit_dop_menu[1].name = 'dopFlySee_level';

          unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
            === unit_dop_menu[1].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[1].gold = 1000;
          unit_dop_menu[1].wood = 500;
          unit_dop_menu[1].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      }
    }
  }
};

Fraction.prototype.check_resurs_pro = function (prioritetToDo) {
  // levelUpgrade

  if (prioritetToDo) {
    if (
      prioritetToDo === 'townHoll'
      && (this.gold < 1000 || this.wood < 1000)
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'farm'
      && (this.gold < 500 || this.wood < 300)
    ) {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'batrak') {
      if (this.gold < 400) {
        prioritetToDo = 'gold';
      }
    } else if (
      prioritetToDo === 'lesopilka'
      || prioritetToDo === 'barack'
      || prioritetToDo === 'kuznya'
    ) {
      if (this.gold < 700) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'rizar') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 100) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'mechnick') {
      if (this.gold < 600) {
        prioritetToDo = 'gold';
      }
    } else if (prioritetToDo === 'luchnik') {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 50) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'ballista') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'tower') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'towerOnUpgrade') {
      if (this.gold < 500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 200) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'dopNoFlyAttack_level'
      || prioritetToDo === 'dopNoFlyPanzer_level'
      || prioritetToDo === 'dopFlyAttack_level'
      || prioritetToDo === 'dopFlySee_level'
      || prioritetToDo === 'dopBallista'
      || prioritetToDo === 'dopAttack'
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'levelUpgrade') {
      if (this.gold < 2000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'ogreBase'
      || prioritetToDo === 'altar'
      || prioritetToDo === 'dragon_roost'
      || prioritetToDo === 'temple'
    ) {
      if (this.gold < 2000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 1000) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'port') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (
      prioritetToDo === 'transport'
      || prioritetToDo === 'oil_tanker'
    ) {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'oil_Ref' || prioritetToDo === 'foundry') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'distroer') {
      if (this.gold < 1000) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'linkor') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      } else if (this.wood < 500) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'turtle') {
      if (this.gold < 1200) {
        prioritetToDo = 'gold';
      } else if (this.wood < 300) {
        prioritetToDo = 'wood';
      }
    } else if (prioritetToDo === 'mag') {
      if (this.gold < 1500) {
        prioritetToDo = 'gold';
      }
    } else if (prioritetToDo === 'dragoon') {
      if (this.gold < 5000) {
        prioritetToDo = 'gold';
      }
    }
  }

  // console.log("gold : "+this.gold)
  // console.log(prioritetToDo)

  // if(this.gold<0){pausa=1;};

  return prioritetToDo;
};

Fraction.prototype.update_createShablon = function (terpila_cell) {
  if (this.ii_crash) {
    // console.log("here");

    // console.log(this.ii_crash.terpila.hp);

    if (
      this.ii_crash.terpila
      && this.ii_crash.terpila.unitStatus === 'building'
      && this.ii_crash.terpila.hp <= 300
      && this.towers.length < Math.floor(this.createShablon.towers.length) * 1.5
    ) {
      // console.log("crash "+this.ii_crash.terpila.hp);	pausa=1;

      const { cell } = this.ii_crash.terpila;

      const farm_cells = [];

      const ok = 0;

      // let cells=[];

      let min = [];

      const cells = [];

      for (let i = cell.vertikal - 8; i <= cell.vertikal + 8; i++) {
        for (let k = cell.horizont - 8; k <= cell.horizont + 8; k++) {
          let ok = 0;

          for (let v = i - 2; v <= i + 1; v++) {
            for (let h = k - 1; h <= k + 2; h++) {
              if (
                gameFielg[v]
                && gameFielg[v][h]
                && gameFielg[v][h].ii_free
                && gameFielg[v][h].persolalNumber !== cell.persolalNumber
                && !gameFielg[v][h].vossalObj
                && !gameFielg[v][h].water_line
                && gameFielg[v][h].continent === this.continent
                // &&
                // well_cell_for_building(gameFielg[i][k],100)
              ) {
                // cells.push(gameFielg[i][k]);
                ok++;
              }
            }
          }

          if (ok === 16) {
            cells.push(gameFielg[i][k]);
          }
        }
      }

      for (let i = 0; i < cells.length; i++) {
        const dis = get_distanse_on_lineyka(this.startPoint, 50, cells[i], 100);

        if (!min.length || min[0] > dis) {
          min = [dis, cells[i]];
        }
      }

      if (min.length) {
        const obj = min[1];

        this.ii_dop_towers.push(
          new SablonObj(obj.horizont, obj.vertikal, undefined, 'guard'),
        );

        console.log('here tower');
        /*
  if(this.fraction==="redOrcs"){
      console.log("!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(this.ii_dop_towers.length);

      //pausa=1;

      //if(!this.kaput){this.kaput=true;};

  };
  */
      }

      this.ii_crash = false;
    } // else{this.ii_crash=false;};
  }

  if (!this.alarmTimer) {
    this.ii_crash = false;
  }
};

Fraction.prototype.alarm_mor_warriors = function () {
  for (let i = 0; i < this.baracks.length; i++) {
    if (
      this.gold >= 2000
      && this.wood >= 1000
      && this.oil >= 500
      && this.peoples.length < this.maxUnits
    ) {
      const barack = this.baracks[i];

      if (!barack.myJoubeTimer) {
        const ran = Math.floor(Math.random() * 3);

        if (!ran && this.canLuchnick) {
          barack.myJoubeTimer = myJoube_time('luchnik');
          barack.myJoube = 'luchnik';

          this.gold -= 500;
          this.wood -= 50;
        } else if (this.canRizar) {
          barack.myJoubeTimer = myJoube_time('rizar');
          barack.myJoube = 'rizar';

          this.gold -= 1000;
          this.wood -= 100;
        } else {
          barack.myJoubeTimer = myJoube_time('mechnick');
          barack.myJoube = 'mechnick';

          this.gold -= 600;
        }

        if (this.activeBuildings.indexOf(barack) === -1) {
          this.activeBuildings.push(barack);
        }
      }
    } else {
      break;
    }
  }
};

Fraction.prototype.checkAlarms_player = function () {
  if (this.player_alarm_timer) {
    this.player_alarm_timer--;
  }

  if (this.alarms.length) {
    if (this.alarms[0].terpila) {
      if (!this.player_alarm_timer) {
        this.player_alarm_timer = 500;

        if (this.nation === 'h') {
          select_sound_fly(undefined, 'alarm_h', 1);
        } else {
          select_sound_fly(undefined, 'alarm_orc', 1);
        }
      }

      const a = {
        obj: this.alarms[0].terpila,
        timer: 10,
        list: 1,
        gabarit: 0,
        alfa: 1,
        drawGabaritRadar: 130 / gameFielgMap.length,
        radarX:
          radar.x
          + this.alarms[0].terpila.horizont * (130 / gameFielgMap.length),
        radarY:
          radar.y
          + this.alarms[0].terpila.vertikal * (130 / gameFielgMap.length),
        drawImage: new Image(),
      };

      a.drawImage.src = 'wc/menu/star.png';

      this.radar_alarms.push(a);
    }

    // zst=new Image();
    // zst.src="menu/zst.png";

    this.alarms.shift();
  }
};

Fraction.prototype.checkAlarms = function () {
  if (this.alarms.length) {
    this.alarm_stop_build = 10;

    this.alarm_mor_warriors();

    /// ////////////////////////////////////// sea
    // console.log(this.alarmTimer); pausa=1;

    if (
      !this.alarmTimer
      && this.alarms[0].terpila
      && this.alarms[0].terpila.unitStatus === 'building'
    ) {
      this.alarmTimer = 300;

      this.ii_crash = {
        terpila: this.alarms[0].terpila,
        agressor: this.alarms[0].agressor,
      };
      // if(this.fraction==="redOrcs"){
      //	console.log("here");
      // };
    }

    if (this.alarms[0].agressor) {
      if (this.alarms[0].agressor.sweeme && this.sea) {
        const { agressor } = this.alarms[0];

        // console.log(agressor);
        let agressors = 0;

        for (let i = agressor.vertikal - 5; i < agressor.vertikal + 5; i++) {
          for (let k = agressor.horizont - 5; k < agressor.horizont + 5; k++) {
            let cell;

            if (gameFielg[i] && gameFielg[i][k]) {
              cell = gameFielg[i][k];
            }

            if (
              cell
              && cell.unit
              && !cell.unit.neitral
              && cell.unit.warrior
              && cell.unit.fatherFraction.union !== this.union
            ) {
              agressors++;
            }
          }
        }

        agressors /= 2;

        // console.log(agressors)

        for (let i = 0; i < this.ballistas.length; i++) {
          const obj = this.ballistas[i];

          if (
            !obj.target
            && !obj.handTarget
            && !obj.isBlocked()
            && !obj.ii_strike
          ) {
            if (!obj.born_cell) {
              obj.born_cell = obj.cell;
            }

            // obj.clickSave=new ClickSave(agressor,0);

            // if(!obj.active){
            // this.activeUnits.push(obj);
            // obj.active=true;
            obj.ii_saveCell = obj.born_cell;

            // console.log(obj.born_cell)

            // };

            const a = new Strike(obj, agressor, agressor.cell);
            this.ii_warriors_on_strike.push(a);
            obj.ii_strike = true;
          }
        }

        for (let i = 0; i < this.warriors_on_seas[this.sea].length; i++) {
          if (!agressors) {
            break;
          }

          if (
            !this.warriors_on_seas[this.sea][i].target
            && !this.warriors_on_seas[this.sea][i].handTarget
            && !this.warriors_on_seas[this.sea][i].isBlockedShip()
            && !this.warriors_on_seas[this.sea][i].ii_strike
          ) {
            // this.warriors_on_seas[this.sea][i].clickSave=new ClickSave(agressor,0);

            // if(!this.warriors_on_seas[this.sea][i].active){
            // this.activeUnits.push(this.warriors_on_seas[this.sea][i]);
            // this.warriors_on_seas[this.sea][i].active=true;
            this.warriors_on_seas[this.sea][i].ii_saveCell = this.warriors_on_seas[this.sea][i].cell;

            const a = new Strike(
              this.warriors_on_seas[this.sea][i],
              agressor,
              agressor.cell,
            );
            this.ii_warriors_on_strike.push(a);
            this.warriors_on_seas[this.sea][i].ii_strike = true;

            // };

            agressors--;
          }
        }
      }

      /// //////////////////////////////////////////

      let adeqvate = 0;

      for (
        let v = this.alarms[0].agressor.vertikal - 10;
        v <= this.alarms[0].agressor.vertikal + 10;
        v++
      ) {
        for (
          let h = this.alarms[0].agressor.horizont - 10;
          h <= this.alarms[0].agressor.horizont + 10;
          h++
        ) {
          if (gameFielg[v] && gameFielg[v][h]) {
            const cell = gameFielg[v][h];

            if (
              cell.unit
              && !cell.unit.neitral
              && cell.unit.fatherFraction.union !== this.union
              && cell.unit.warrior
            ) {
              adeqvate++;
            }

            if (
              cell.dragoon
              && cell.dragoon.fatherFraction.union !== this.union
            ) {
              adeqvate += 2;
            }
          }
        }
      }

      // adeqvate=adeqvate*3;///////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      // console.log(adeqvate);pausa=1;

      const units = [];

      for (
        let i = 0;
        i < this.warriors_on_continents[this.continent].length;
        i++
      ) {
        const warrior = this.warriors_on_continents[this.continent][i];

        if (!adeqvate) {
          break;
        }

        if (
          !warrior.active
          && !warrior.isBlocked()
          && !warrior.ii_strike
          // &&
          // warrior.type!=="ballista"
          && (warrior.type !== 'mag' || warrior.mana === 100)
        ) {
          const a = new Strike(
            warrior,
            this.alarms[0].agressor,
            this.alarms[0].agressor.cell,
          );
          this.ii_warriors_on_strike.push(a);
          warrior.ii_strike = true;

          // warrior.clickSave=new ClickSave(this.alarms[0].agressor,0);

          // this.activeUnits.push(warrior);
          // warrior.active=true;

          if (!warrior.born_cell) {
            warrior.born_cell = warrior.cell;
          }
          warrior.ii_saveCell = warrior.born_cell;

          adeqvate--;
        }
      }
    }

    this.alarms.splice(0, 1);

    // console.log("alarm");
  }
};
