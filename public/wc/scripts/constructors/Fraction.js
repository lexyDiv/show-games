/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const Fraction = function (
  fraction,
  control,
  peoples,
  union,
  persolalNumber,
  nation,
  bld,
) {
  // maxUnits startPoint oil_tankers

  // iCanTownHollLevelUp ii_attack_number

  if (nation === 'orc') {
    this.cursorOk = orc_cursor_ok;
  }
  if (nation === 'h') {
    this.cursorOk = human_cursor_ok;
  }

  this.kills = 0;
  this.razings = 0;
  this.all_gold = 0;
  this.all_wood = 0;
  this.all_oil = 0;

  this.bld = bld;

  this.alarm_stop_build = 0;
  this.radar_alarms = [];
  this.player_alarm_timer;

  this.ii_warriors_on_strike = [];

  this.ii_attack_number = 4 + Math.floor(Math.random() * 10);
  this.ii_crash;
  this.dragoon_attack = [];
  this.ii_dop_towers = [];

  this.attack = false;

  this.selectLineIndex = 0;
  this.woods_ok = true;
  this.revers = [];

  this.ships_for_clear = [];
  this.attackUnits = [];
  this.frandly_fractions = [];
  this.animy_fractions = [];

  this.persolalNumber = persolalNumber;

  this.union = union;

  this.nation = nation;

  this.fraction = fraction;

  this.control = control; // chelovek,comp oil_Ref

  this.peoples = peoples;

  this.manaTimer = false;

  this.attackTimer = 0;
  this.activeUnits = [];

  this.alarms = [];

  this.selectUnits = [];
  this.selectDragons = [];
  this.selectIsSweem = [];
  /// ////////////////////////////////////// upgrade topor mech
  this.dopNoFlyAttack = 1;
  this.dopNoFlyAttack_update = false;
  this.dopNoFlyAttack_level = 0;

  this.dop_sea_Attack_level = 0;
  this.dop_sea_Attack = 1;
  this.dop_sea_Attack_update = false;

  this.dopNoFlyPanzer = 1;
  this.dopNoPanzer_update = false;
  this.dopNoFlyPanzer_level = 0;

  this.dopFlyAttack = 1;
  this.dopFlyAttack_update = false;
  this.dopFlyAttack_level = 0;

  this.dopFlySee = 0;
  this.dopFlySee_update = false;
  this.dopFlySee_level = 0;

  this.dopBallista = 1;
  this.dopBallista_update = false;
  this.dopBallista_level = 0;

  this.dopAttack = 1;
  this.dopAttack_update = false;
  this.dopAttack_level = 0;

  /// //////////////////////////////////////

  this.level = 0;

  this.timer = 0;

  this.batraks = [];
  this.mechniks = [];
  this.rizars = [];
  this.luchniks = [];
  this.dragons = [];
  this.mags = [];

  // this.warriors_on_seas=[0];

  this.ogreBases = [];
  this.townHolls = [];
  this.baracks = [];
  this.lesopilkas = [];
  this.batraksOnGolg = [];
  this.batraksOnWood = [];
  this.freeBatraks = [];
  this.towers = [];
  this.kuznyas = [];
  this.altars = [];
  this.unterTowers = [];
  this.ballistas = [];
  this.freeBallistas = [];
  this.freeDragons = [];
  this.dragon_roosts = [];
  this.temples = [];

  /// ////////////////////// sea
  this.ports = [];
  this.sea_powers = [];
  this.oil_Refs = [];
  this.foundrys = [];
  this.oil_platforms = [];
  this.oil_tankers = [];
  this.war_ships = [];

  this.ships = [];
  this.transports = [];
  this.freeTransports = [];
  this.distroers = [];
  this.linkors = [];
  this.turtles = [];

  this.base_cells = [];
  this.conturLineCells = [];
  /// /////////////////

  this.farms = [];

  this.aponents = [];
  this.wayToAponents = [];

  /*
      for(let i=0;i<this.peoples.length;i++){

          this.peoples[i].cell=gameFielg[this.peoples[i].vertikal][this.peoples[i].horizont];
          this.peoples[i].cell.unit=this.peoples[i];
          this.peoples[i].cell.free=false;

          if(this.peoples[i].type===1){

              this.batraks.push(this.peoples[i]);

          };

          //this.peoples[i].fraction=this.fraction;
          //this.peoples[i].control=this.control;
      };
      // */

  this.buildings = [];

  // console.log(this.peoples);
  // console.log(this.batraks.length);

  this.activeBuildings = [];

  this.selectBuildings = [];

  // if(this.control==="comp"){

  this.freeBatraks = [];
  this.freeRizzars = [];
  this.freeLuchniks = [];
  this.freeMechniks = [];

  this.buildingsInBuild = [];
  this.noMoreGolg = false;

  this.inPanick = [];

  // };

  this.maxUnits = 0;
  this.maxShips = 0;
};
