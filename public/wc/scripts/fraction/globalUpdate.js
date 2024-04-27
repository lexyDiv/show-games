/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.globalUpdate = function () {
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
