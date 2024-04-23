const Title = function (list) {
  this.active = false;
  this.list = 1;
  this.timer = 0;
  this.can_start = false;

  this.map = all_maps[0];

  this.subjects = [];

  for (let i = 0; i < all_fractions.length + 1; i++) {
    let f = all_fractions[i];

    this.subjects.push({
      num: i,
      f: false,
      nation: "none",
      union: "1", //, position:f.position
    });
  }

  for (let i = 1; i < this.subjects.length; i++) {
    this.subjects[i].control = "comp";

    this.subjects[i].keys = {
      nation: {
        x: 525 + 90,
        y: 280 + i * 50,
        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: true,
        type: "nation",
        animY: 100,
        //kaskad_keys:["None","Orc","Human"],
        txt: "None",
      },

      union: {
        x: 525 + 310,
        y: 280 + i * 50,

        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: false,
        type: "union",
        txt: "1",
        animY: 100,
      },

      position: {
        x: 525 + 200,
        y: 280 + i * 50,
        gabX: 100,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        active: false,
        type: "position",
        animY: 100,
      },
    };

    if (i > 0) {
      let sub = this.subjects[i].keys.nation;

      this.subjects[i].keys.nation.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Bot" + String(i) + " Race:",
        },
      ];

      sub = this.subjects[i].keys.position;

      this.subjects[i].keys.position.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Bot" + String(i) + " Position:",
        },
      ];

      sub = this.subjects[i].keys.union;

      this.subjects[i].keys.union.txt_little = [
        {
          x: sub.x,
          y: sub.y - 30,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Bot" + String(i) + " Union:",
        },
      ];
    }
  }

  this.subjects[0].control = "player";

  this.subjects[0].keys = {
    nation: {
      x: 60,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: true,
      type: "nation",
      animY: 100,
      //kaskad_keys:["None","Orc","Human"],
      txt: "None",

      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Your Race:",
        },
      ],
    },

    union: {
      x: 280,
      y: 330,

      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: "union",
      txt: "1",
      animY: 100,
      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Your Union:",
        },
      ],
    },

    position: {
      x: 170,
      y: 330,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: false,
      type: "position",
      animY: 100,
      txt_little: [
        {
          x: 0,
          y: 0,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Your Position:",
        },
      ],
    },
  };

  this.subjects[0].keys.nation.txt_little[0].x = this.subjects[0].keys.nation.x;
  this.subjects[0].keys.nation.txt_little[0].y =
    this.subjects[0].keys.nation.y - 30;

  this.subjects[0].keys.union.txt_little[0].x = this.subjects[0].keys.union.x;
  this.subjects[0].keys.union.txt_little[0].y =
    this.subjects[0].keys.union.y - 30;

  this.subjects[0].keys.position.txt_little[0].x =
    this.subjects[0].keys.position.x;
  this.subjects[0].keys.position.txt_little[0].y =
    this.subjects[0].keys.position.y - 30;

  this.list_and = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_1 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_2 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_4 = {
    /*	
var video = document.createElement('video');

/// set video elemet size
video.width = 640;
video.height = 360;

/// setup with auto preload and loop
video.preload = 'auto';
video.loop = true;	
*/

    timer: 0,
    //imageToDraw:document.createElement('video'),
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
  };

  //this.list_4.imageToDraw.src="video/all.mp4";

  this.list_5 = {
    timer: 0,
    imageToDraw: false,
    imageToDraw_2: false,
    animX: 0,
    alfa: 1,
    click: false,
  };

  this.list_3 = {
    timer: 0,
    imageToDraw: 0,
    imageToDraw_2: 0,
    animX: 0,
    alfa: 1,
    click: false,
    sx: 0,
    sy: 0,
    list: 0,

    season: {
      x: 200,
      y: 480,
      gabX: 100,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      active: true,
      type: "s",
      animY: 100,
      //kaskad_keys:["None","Orc","Human"],
      txt: season,
      txt_little: [
        {
          x: 200,
          y: 450,
          gabX: 150,
          gabY: 30,
          alfa: 0,
          alfa_shadow: 0,
          text_a: "Season:",
        },
      ],
    },

    map_control: {
      click_up: { x: 520, y: 350, gabX: 20, gabY: 31 },
      click_down: { x: 520, y: 536, gabX: 20, gabY: 31 }, // dif 217

      scroller: {
        x: 520,
        y: 381,
        gabX: 20,
        gabY: 31,
        up_y: 381,
        down_y: 505,
        remove: all_maps.length * 31,
        koof_y: ((all_maps.length - 7) * 31) / 124,
      }, // dif 124
    },

    punkts: [],

    new_base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "New Campaign Game Setup",
      },
    ],
    new_keys: [
      {
        x: 450,
        y: 600,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Previous Menu",
        mas: 1,
        act: "back 1",
        type: 1,
      },
      {
        x: 450,
        y: 300,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Human Campaign",
        mas: 1,
        act: "h",
        type: 1,
      },
      {
        x: 450,
        y: 350,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Orc Campaign",
        mas: 1,
        act: "orc",
        type: 1,
      },
    ],
    base_keys: [
      {
        x: 450,
        y: 300,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "New Campaign",
        mas: 1,
        act: "new",
        type: 1,
      },
      {
        x: 450,
        y: 400,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Custom Game Setup",
        mas: 1,
        act: "custom",
        type: 1,
      },
      {
        x: 450,
        y: 500,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Enter Password",
        mas: 1,
        act: "pass",
        type: 1,
      },
    ],
    base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Game Setup",
        mas: 1,
      },
    ],
    custom_keys: [
      {
        x: 450,
        y: 600,
        gabX: 200,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Previous Menu",
        mas: 1,
        act: "back 1",
        type: 1,
      },
    ],
    custom_base_text: [
      {
        x: 450,
        y: 100,
        gabX: 150,
        gabY: 30,
        alfa: 0,
        alfa_shadow: 0,
        text_a: "Custom Game Setup",
      },
    ],
    start_key_1: {
      x: 450,
      y: 650,
      gabX: 200,
      gabY: 30,
      alfa: 0,
      alfa_shadow: 0,
      text_a: "Start Game",
      mas: 1,
      act: "start_1",
      type: 1,
    },
  };
};

const Radar = function (x, y, gabarit) {
  this.x = x;
  this.y = y;
  this.gabarit = gabarit;
  this.initialization = false;
  this.tarration = 0;
};

const Panick = function (timer, startCell, agressor) {
  this.timer = timer;
  this.startCell = startCell;
  this.agressor = agressor;
};

const Alarm = function (agressor, timer, terpila) {
  this.agressor = agressor;
  this.timer = timer;
  this.operGroop = [];
  this.terpila = terpila;
};

const Axes = function (x, y, type, target, attack, father, conor, xy) {
  this.x = x;
  this.y = y;

  this.x2 = father.damagePointX;
  this.y2 = father.damagePointY;

  this.type = type;

  this.attack = attack;

  this.animX = 0;
  this.animY = 0;
  this.father = father;
  this.conor = conor;

  this.target = target;

  if (this.type === "dragoonFire") {
    this.gabX = 150;
    this.gabY = 150;

    //this.dopGabX=25;
    //this.dopGabY=25;

    //this.xy_mass=[];
  } else if (this.type === "strela_tower" || this.type === "turtle") {
    this.gabX = 100;
    this.gabY = 100;

    //this.dopGabX=25;
    //this.dopGabY=25;

    //this.xy_mass=[];
  } else if (this.type === "cannon_tower" || this.type === "distroer_canon") {
    this.gabX = 30;
    this.gabY = 30;
    this.xy = xy;
    //this.cannonCell=cannonCell;

    this.stopTakt = false;
    this.animX = 0;
    this.animY = 0;

    this.animX_v = 0;
    this.animY_v = 0;
    //this.dopGabX=25;
    //this.dopGabY=25;

    //this.xy_mass=[];
  }
};

const ClickSave = function (handTarget, handCell, wait, hold, stopGetTarget) {
  this.handTarget = handTarget;
  this.handCell = handCell;

  this.wait = wait;
  this.hold = hold;
  this.stopGetTarget = stopGetTarget;
};

const Obj = function (type, vertikal, horizont, persolalNumber) {
  this.contact_map_cells = [];

  this.field = [];

  this.ii_fractions_way;
  this.ii_cells = [];

  ///////////////////////////////// stopTownHoll

  this.ii_free = true;

  this.stopBuild = false;

  this.w_animX_1 = 0;
  this.w_animY_1 = 0;

  this.w_animX_2 = 0;
  this.w_animY_1 = 0;

  this.glblAlpha = (Math.random() * 70) / 100 + 0.3;
  this.glblAlpha_2 = 1 - this.glblAlpha;

  this.animTimer = 0;

  this.persolalNumber = persolalNumber;

  this.x = horizont * 50;
  this.y = vertikal * 50;

  this.vertikal = vertikal;
  this.horizont = horizont;

  this.free = true;

  this.h = 0;
  this.f = 0;
  this.g = 0;

  this.startFinish = [];

  this.type = type;

  this.unit = 0;
  this.pen = [];
  this.water_sleds = [];

  this.iContaktWith = [];
  this.contaktCells = [];

  this.dragoonDamages = [];

  if (this.type === 1) {
    //this.free=false;

    this.ranX = Math.floor(Math.random() * 25);
    this.ranY = Math.floor(Math.random() * 25);

    let ranX = Math.floor(Math.random() * 2);
    let ranY = Math.floor(Math.random() * 2);

    if (!ranX) {
      this.ranX = -this.ranX;
    }
    if (!ranY) {
      this.ranY = -this.ranY;
    }
  }

  this.animX = Math.floor(Math.random() * 12) * 100;
  //this.animY=Math.floor(Math.random()*4)*200;;
  this.animX_wl = Math.floor(Math.random() * 4) * 200;
  this.animY_w1 = Math.floor(Math.random() * 4) * 200;

  this.inUse = false;

  //if(this.type===20){

  this.way = [];

  this.vektors = [];

  //};
  this.vossalObj = 0;

  this.stopTownHoll = [];
};

const Strike = function (unit, target, cell) {
  this.unit = unit;
  this.target = target;
  this.cell = cell;
};

const Fraction = function (
  fraction,
  control,
  peoples,
  union,
  persolalNumber,
  nation,
  bld
) {
  //maxUnits startPoint oil_tankers

  //iCanTownHollLevelUp ii_attack_number

  if (nation === "orc") {
    this.cursorOk = orc_cursor_ok;
  }
  if (nation === "h") {
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

  this.control = control; //chelovek,comp oil_Ref

  this.peoples = peoples;

  this.manaTimer = false;

  this.attackTimer = 0;
  this.activeUnits = [];

  this.alarms = [];

  this.selectUnits = [];
  this.selectDragons = [];
  this.selectIsSweem = [];
  ///////////////////////////////////////// upgrade topor mech
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

  /////////////////////////////////////////

  this.level = 0;

  this.timer = 0;

  this.batraks = [];
  this.mechniks = [];
  this.rizars = [];
  this.luchniks = [];
  this.dragons = [];
  this.mags = [];

  //this.warriors_on_seas=[0];

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

  ///////////////////////// sea
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
  ////////////////////

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
	//*/

  this.buildings = [];

  //console.log(this.peoples);
  //console.log(this.batraks.length);

  this.activeBuildings = [];

  this.selectBuildings = [];

  //if(this.control==="comp"){

  this.freeBatraks = [];
  this.freeRizzars = [];
  this.freeLuchniks = [];
  this.freeMechniks = [];

  this.buildingsInBuild = [];
  this.noMoreGolg = false;

  this.inPanick = [];

  //};

  this.maxUnits = 0;
  this.maxShips = 0;
};

const II_attack = function () {
  this.can_ground = false;
  this.can_sea = false;
  this.transports = [];
  this.units = [];
  this.warriors_in_active = 0;
  this.alive_warriors = [];
  this.warriors_flot_reserv = 0;
  this.ii_way = [];
};

const Water_sled = function (type, cell, conor, x, y, gabarit) {
  this.type = type;
  this.cell = cell;
  this.conor = conor;
  this.x = x;
  this.y = y;
  this.animX = 0;
  this.animY = 0;
  this.timer = 0;
  this.gabarit = gabarit;
};

const SablonObj = function (horizont, vertikal, father, tower) {
  this.horizont = horizont;
  this.vertikal = vertikal;

  this.x = horizont * 50;
  this.y = vertikal * 50;

  this.father = father;

  this.iBorn = false;

  this.tower = tower;
};

const LandObj = function (
  type,
  horizont,
  vertikal,
  gold,
  fatherFraction,
  nation
) {
  this.hotCells = [];

  this.level = 1;

  this.nation = nation;

  this.x = horizont * 50;
  this.y = vertikal * 50;

  this.type = type;
  this.vertikal = vertikal;
  this.horizont = horizont;
  this.gold = gold;
  this.units = [];
  this.cell;
  this.contaktCells = [];
  this.myCells = [];

  this.distroyTimer = 501;

  this.panzer = 40;

  this.fatherFraction = fatherFraction;

  this.visible = true;

  if (this.type === "stena") {
    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;
    this.s = true;

    //this.animX=Math.floor(Math.random()*1)*100;
    //this.draw_naw=true;
  } else if (this.type === "gora") {
    this.animX = Math.floor(Math.random() * 1) * 100;
    this.draw_naw = true;
    this.neitral = true;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y + 50;
  } else if (this.type === "temple") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = temple_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = temple_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = temple_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = mag_tower_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 5000;
      this.menu_name = "Mage tower";
      this.dop_menu = true;
    } else {
      this.face_animY = 5100;
      this.menu_name = "Temple of damned";
      this.dop_menu = true;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "temple";
    this.unitWoodOut = false;

    this.ii_timer = 0;
    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "dragon_roost") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = dragon_roost_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = dragon_roost_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = dragon_roost_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = gryph_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 5200;
      this.menu_name = "Gryphon aviary";
      this.dop_menu = true;
    } else {
      this.face_animY = 5300;
      this.menu_name = "Dragon roost";
      this.dop_menu = true;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "dragon_roost";
    this.unitWoodOut = false;

    this.ii_timer = 0;
    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "foundry") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = foundry_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = foundry_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = foundry_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = sea_zavod_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 4400;
      this.menu_name = "Foundry";
      this.dop_menu = true;
    } else {
      this.face_animY = 4500;
      this.menu_name = "Foundry";
      this.dop_menu = true;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "foundry";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////

    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    this.myJoubeTimer = 0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "oil_platform") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = oil_platform_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = oil_platform_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = oil_platform_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = oil_plat_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 11400;
      this.menu_name = "Oil platform";
      //this.dop_menu=true;
    } else {
      this.face_animY = 11300;
      this.menu_name = "Oil platform";
      //this.dop_menu=true;
    }

    ////////////////

    this.sweeme = true;
    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "oil_platform";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.gabarit = 100;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;

    this.animX = 0;
    this.animY = 0;

    this.tankers = [];
    this.timers = [];

    //this.myJoube=0;//"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;
  } else if (this.type === "oil_Ref") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = oil_ref_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = oil_ref_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = oil_ref_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = foundry_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 4200;
      this.menu_name = "refinary";
      this.dop_menu = false;
    } else {
      this.face_animY = 4300;
      this.menu_name = "refinary";
      this.dop_menu = false;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "oil_Ref";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.tankers = [];
    this.timers = [];
    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    //this.myJoube=0;//"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "oil") {
    ///////////////////

    this.face_animY = 11500;
    this.menu_name = "Oil";
    this.dop_menu = false;

    ////////////////

    this.hpfull = 100000;

    this.neitral = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "oil";

    this.workers = [];
    this.hp = 100000;
    this.buildready = 100000;
    this.iComplite = true;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;

    this.animX = 0;
    this.animY = 0;

    this.gabarit = 100;
    this.oil = this.gold;
  } else if (this.type === "port") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = port_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = port_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = port_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = port_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 4000;
      this.menu_name = "Shipyard";
      this.dop_menu = true;
    } else {
      this.face_animY = 4100;
      this.menu_name = "Shipyard";
      this.dop_menu = true;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "port";
    this.unitWoodOut = false;

    this.ii_timer = 0;
    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    //this.myJoube=0;//"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "altar") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = altar_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = altar_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = altar_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = altar_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 4800;
      this.menu_name = "Church";
      this.dop_menu = false;
    } else {
      this.face_animY = 4900;
      this.menu_name = "Altar of storms";
      this.dop_menu = false;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "altar";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////
    this.gabarit = 150;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    //this.myJoube=0;//"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "ogreBase") {
    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = ogreBase_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = ogreBase_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = ogreBase_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = konushnya_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 4600;
      this.menu_name = "Stables";
      this.dop_menu = true;
    } else {
      this.face_animY = 4700;
      this.menu_name = "Ogre mound";
      this.dop_menu = true;
    }

    ////////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "ogreBase";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    //this.myJoube=0;//"new basick";
    //this.myJoubeTimer=0;
    //this.gabarit=50;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "kuznya") {
    //kuznya

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 3800;
      this.menu_name = "Blacksmith";
      this.dop_menu = true;
    } else {
      this.face_animY = 3900;
      this.menu_name = "Blacksmith";
      this.dop_menu = true;
    }

    ////////////////

    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = kuznya_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = kuznya_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = kuznya_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = kuznya_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "kuznya";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;
    /////////////////////////////////////upgrade topor
    //this.dopNoFlyAttack=1;
    //this.dopNoFlyAttack_level=0;

    //  this.dopNoFlyPanzer=1;
    //	this.dopNoFlyPanzer_level=0;

    ///////////////////////////////////////////

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    this.myJoubeTimer = 0;
    //this.gabarit=50;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 5) {
    //barack
    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 2600;
      this.menu_name = "Barack";
      this.dop_menu = true;
    } else {
      this.face_animY = 2700;
      this.menu_name = "Barack";
      this.dop_menu = true;
    }

    ////////////////

    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = leso;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = leso_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = leso_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = leso_h_blue;
    }

    this.no_voice = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "barack";
    this.unitWoodOut = false;

    //this.workers=[];
    //this.hp=1500;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    this.myJoubeTimer = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 4) {
    //lesopilka

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 2400;
      this.menu_name = "Elven lumber mill";
      this.dop_menu = true;
    } else {
      this.face_animY = 2500;
      this.menu_name = "Troll lumber mill";
      this.dop_menu = true;
    }

    ////////////////

    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = orcbildsum;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = orcbildsum_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = orcbildsum_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = lesopilka_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "lesopilka";
    this.unitWoodOut = true;

    this.workers = [];
    //this.hp=1500;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.myJoube = 0; //"new basick";
    this.myJoubeTimer = 0;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === "tower") {
    if (
      this.fatherFraction.fraction === "redOrcs" &&
      this.imageToDraw !== watch_tower_orc_red
    ) {
      this.imageToDraw = watch_tower_orc_red;
      this.imageToDraw_2 = guard_tower_orc_red;
      this.imageToDraw_3 = cannon_tower_orc_red;
    } else if (
      this.fatherFraction.fraction === "blackOrcs" &&
      this.imageToDraw !== watch_tower_orc_black
    ) {
      this.imageToDraw = watch_tower_orc_black;
      this.imageToDraw_2 = guard_tower_orc_black;
      this.imageToDraw_3 = cannon_tower_orc_black;
    } else if (
      this.fatherFraction.fraction === "lazurOrcs" &&
      this.imageToDraw !== watch_tower_orc_lazur
    ) {
      this.imageToDraw = watch_tower_orc_lazur;
      this.imageToDraw_2 = guard_tower_orc_lazur;
      this.imageToDraw_3 = cannon_tower_orc_lazur;
    } else if (
      this.fatherFraction.fraction === "h_blue" &&
      this.imageToDraw !== tower_h_blue
    ) {
      this.imageToDraw = tower_h_blue;
      this.imageToDraw_2 = tower_gu_h_blue;
      this.imageToDraw_3 = tower_can_h_blue;
    }

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 5400;
      this.menu_name = "Scout tower";
      this.dop_menu = true;
    } else {
      this.face_animY = 5500;
      this.menu_name = "Watch tower";
      this.dop_menu = true;
    }

    ////////////////

    this.no_voice = true;

    this.seeing = 500;

    this.light = true;

    this.iCanGetSweem = true;

    this.panzer = 60;

    this.animys = [];

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "tower";
    this.fraction;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 50;
    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];

    this.upgradeTimer = 0;

    //this.workers=[];

    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.gabX = 20;
    this.gabY = 20;

    this.animTimer = 0;

    // this.myJoube=0;//"new basick";
    this.gabarit = 100;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;
    this.warrior = true;

    this.upgrade = "watch";

    this.firePointX = this.cell.x + 50;
    this.firePointY = this.cell.y - 75;

    this.alarmTimer = 0;
  } else if (this.type === 1) {
    this.face_animY = 300;
    this.menu_name = "Gold shaht";
    this.dop_menu = false;

    this.iComplite = true;

    for (let i = this.vertikal - 5; i <= this.vertikal + 5; i++) {
      for (let k = this.horizont - 5; k <= this.horizont + 5; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          gameFielg[i][k].stopTownHoll.push(
            gameFielg[this.vertikal][this.horizont].unit
          );
        }
      }
    }

    this.neitral = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "shahta";

    this.workers = [];
    this.hp = 100000;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;

    this.gabarit = 150;
  } else if (this.type === 2) {
    //townHoll

    this.pro_x = 170;
    this.pro_y = 250;

    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = townHoll_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = townHoll_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = townHoll_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = townHoll_h_blue;
    }

    this.no_voice = true;

    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 400;
      this.menu_name = "Town holl";
      this.dop_menu = true;
    } else {
      this.face_animY = 500;
      this.menu_name = "Great hall";
      this.dop_menu = true;
    }

    ////////////////

    this.level = 1;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "townHoll";
    this.fraction;
    this.unitWoodOut = true;

    this.hpfull = 2000;
    this.hp = 2000;
    this.buildready = 20;

    this.builders = [];
    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.animX2 = 0;
    this.animY2 = 0;
    this.workers = [];

    this.animX = 0;
    this.animY = 0;

    this.myJoube = 0; //"new basick";
    this.myJoubeTimer = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 3) {
    ///////////////////
    if (this.nation === "h") {
      this.face_animY = 700;
      this.menu_name = "Farm";
      //this.dop_menu=true;
    } else {
      this.face_animY = 800;
      this.menu_name = "Pig farm";
      //this.dop_menu=true;
    }

    ////////////////

    this.pro_x = 100;
    this.pro_y = 100;

    if (this.fatherFraction.fraction === "redOrcs") {
      this.imageToDraw = farm_orc_red;
    } else if (this.fatherFraction.fraction === "blackOrcs") {
      this.imageToDraw = farm_orc_black;
    } else if (this.fatherFraction.fraction === "lazurOrcs") {
      this.imageToDraw = farm_orc_lazur;
    } else if (this.fatherFraction.fraction === "h_blue") {
      this.imageToDraw = farm_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "farm";
    this.fraction;

    this.hpfull = 500;
    this.hp = 500;
    this.buildready = 50;
    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];

    //this.workers=[];

    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.gabX = 20;
    this.gabY = 20;

    this.animTimer = 0;

    // this.myJoube=0;//"new basick";
    this.gabarit = 100;

    this.damagePointX = this.cell.x + 50;
    this.damagePointY = this.cell.y;
  } else if (this.type === "wood") {
    this.neitral = true;

    this.vibro = 0;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = "building";
    this.unitName = "wood";
    //this.fraction;

    this.distroyTimer = 20;
    //this.hpfull=500;
    this.hp = 800;
    this.lesorub = 0;
    //this.buildready=50;
    this.wood = true;
    //this.builders=[];

    //this.workers=[];

    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = Math.floor(Math.random() * 4) * 200;

    //this.randomType=Math.floor(Math.random);
    this.animTimer = Math.floor(Math.random() * 6);
    //console.log(this.cell);
    this.ranX = Math.floor(Math.random() * 15);
    this.ranY = Math.floor(Math.random() * 5);

    let ranX = Math.floor(Math.random() * 2);
    let ranY = Math.floor(Math.random() * 2);

    if (!ranX) {
      this.ranX = -this.ranX;
    }
    if (!ranY) {
      this.ranY = -this.ranY;
    }

    this.ranGabX = Math.floor(Math.random() * 10);
    this.ranGabY = Math.floor(Math.random() * 20);
    this.gabarit = 50;

    let imageRand = Math.floor(Math.random() * 2);

    this.drawX = this.x + this.ranX + this.ranGabX / 2;
    this.drawY = this.y - 80 + this.ranY + this.ranGabY / 2;

    if (!imageRand) {
      this.imageToDraw = trees;
      this.imageToDrawTrup = treesTrup;
    } else {
      this.imageToDraw = trees2;
      this.imageToDrawTrup = trees2Trup;
    }
  }

  this.animTimer = 0;

  if (fatherFraction) {
    this.fatherFraction = fatherFraction;
    this.myJoubeTimer = false;
  }

  if (!this.pro_x) {
    this.pro_x = this.gabarit;
    this.pro_y = this.gabarit;
  }
};

const DragoonDamage = function (
  x,
  y,
  timer,
  dragoon,
  cell,
  vertikal,
  horizont
) {
  this.x = x;
  this.y = y;

  this.horizont = horizont;
  this.vertikal = vertikal;

  this.timer = timer;
  this.dragoon = dragoon;
  this.cell = cell;

  this.animX = -100;
  this.animY = 0;
};

//cell

const Unit = function (type, horizont, vertikal, speed, fraction, nation) {
  //cell speed

  this.ii_way_reset = 0;

  this.peon_s = 0;
  this.peon_s_flg = 0;

  this.foot = 1;
  this.iComplite = true;

  this.nation = nation;

  this.seeing = 1;
  this.attack = 0;
  this.dash = 0;
  this.mana = 0;

  this.animys = [];
  this.hp_up = [];
  this.ii_saveCell_reset = 0;

  this.active = false;

  this.iWaitMyBrosReset = 0;

  this.iSee = 350;
  this.clickSave = false;

  this.crashOut = 0;

  this.myReset = 0;
  this.iGetMyCell = true;

  this.handCell = 0;
  this.handCellNewWay = true;
  this.stopGetTarget = 0;
  this.info = 0;

  this.level = 1;

  this.fraction = fraction;

  this.type = type;

  this.vertikal = vertikal;
  this.horizont = horizont;

  this.x = horizont * 50;
  this.y = vertikal * 50;
  this.saveX = this.x;
  this.saveY = this.y;

  this.q_animX = 0;
  this.q_animY = 0;
  this.q_timer = 0;

  this.way = [];

  this.potentialWay = [];
  this.potentialTarget = 0;

  this.speed = speed;

  this.contaktCells = [];

  this.gSp = 0;
  this.vSp = 0;

  this.stepTakt = 0;

  this.holdToGo = 10;

  this.moveVektor = false;

  this.iInUse = false;

  this.animX = 0;
  this.animY = 0;

  this.animX2 = 0;
  this.animY2 = 0;

  //this.animTimer=Math.floor(Math.random()*50)+10;

  this.moveVektor = 0;
  this.moveTimer = 0;
  //console.log(this.rightGSP);
  //this.panzer=1;

  this.visible = true;

  this.terpenie_ran = 50 + Math.floor(Math.random() * 20);

  if (this.type === "mag") {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = mag_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = mag_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = mag_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = mag_h_blue;
    }

    this.speed = 4;

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 9300;
      this.menu_name = "Mag";
      this.dop_menu = true;
    } else {
      this.face_animY = 9400;
      this.menu_name = "Death knight";
      this.dop_menu = true;
    }
    this.list_1_y = 11100;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    //magickTarget

    //this.canHold=true;

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "mag";
    this.distroyTimer = 1020;

    this.hpfull = 100;

    this.hp = 100;

    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    this.manaTimer = false;
    this.mana = 0;
    //this.gold=100;
    this.gabarit = 50;
    this.magick = false;
    this.iCanGetFly = true;
    this.iCanGetSweem = true;

    this.baseAttack = 5;
    this.basePanzer = 0;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;

    this.dash = 200;
    this.seeing = 700; //250 300
    this.holdTroll = 30;
    this.speed = 4;
  } else if (this.type === "turtle") {
    //this.firePoint={x:this.x+50,y:this.y}; animys
    if (this.fraction === "redOrcs") {
      this.imageToDraw = turtle_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = turtle_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = turtle_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = submarine_h_blue;
    }
    //axe_time

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 9100;
      this.menu_name = "Gnomish submarine";
      //this.dop_menu=true;
    } else {
      this.face_animY = 9200;
      this.menu_name = "Giant turtle";
      //this.dop_menu=true;
    }
    //this.list_1_y=10600;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.axe_time = 0;

    this.light = true;

    this.speed = 3;

    this.terpenie = 0;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "turtle";
    this.distroyTimer = 30;
    this.hp = 300;
    this.hpfull = this.hp;
    this.warrior = true;

    this.handTarget = 0;
    this.holdTroll = 80;
    this.fly = false;
    this.iCanGetFly = false;
    this.sweeme = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 100;
    this.basePanzer = 20;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 460;
    this.dash = 550;
    this.drawGabarit = 95 + Math.random() * 11;

    if (this.drawGabarit === 100) {
      this.drawGabarit = 97;
    }

    this.gabaritVector = Math.random() * 2;
    this.drawConor = 0;
    this.conorVektor = Math.random() * 2;
    this.gabaritKoof = 0;
    this.iCanGetSweem = true;
    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;

    this.visible = false;

    this.draw_visible = false;
  } else if (this.type === "linkor") {
    //this.firePoint={x:this.x+50,y:this.y}; animys
    if (this.fraction === "redOrcs") {
      this.imageToDraw = linkor_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = linkor_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = linkor_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = linkor_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 8900;
      this.menu_name = "Battleship";
      //this.dop_menu=true;
    } else {
      this.face_animY = 9000;
      this.menu_name = "Ogre juggernaught";
      //this.dop_menu=true;
    }
    //this.list_1_y=10600;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.light = true;

    this.speed = 1.5;

    this.terpenie = 0;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "linkor";
    this.distroyTimer = 30;
    this.hp = 1000;
    this.hpfull = this.hp;
    this.warrior = true;

    this.handTarget = 0;
    this.holdTroll = 400;
    this.fly = false;
    this.iCanGetFly = false;
    this.sweeme = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 400;
    this.basePanzer = 40;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 300;
    this.dash = 400;
    this.drawGabarit = 95 + Math.random() * 11;

    if (this.drawGabarit === 100) {
      this.drawGabarit = 97;
    }

    this.gabaritVector = Math.random() * 2;
    this.drawConor = 0;
    this.conorVektor = Math.random() * 2;
    this.gabaritKoof = 0;
    this.iCanGetSweem = true;
    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;
  } else if (this.type === "distroer") {
    //this.firePoint={x:this.x+50,y:this.y}; animys
    if (this.fraction === "redOrcs") {
      this.imageToDraw = distroer_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = distroer_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = distroer_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = distroer_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 8700;
      this.menu_name = "Elven destroyer";
      //this.dop_menu=true;
    } else {
      this.face_animY = 8800;
      this.menu_name = "Troll destroyer";
      //this.dop_menu=true;
    }
    //this.list_1_y=10600;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.light = true;

    this.speed = 3;

    this.terpenie = 0;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "distroer";
    this.distroyTimer = 30;
    this.hp = 500;
    this.hpfull = this.hp;
    this.warrior = true;

    this.handTarget = 0;
    this.holdTroll = 200;
    this.fly = false;
    this.iCanGetFly = true;
    this.sweeme = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 150;
    this.basePanzer = 30;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 300;
    this.dash = 400;
    this.drawGabarit = 95 + Math.random() * 11;

    if (this.drawGabarit === 100) {
      this.drawGabarit = 97;
    }

    this.gabaritVector = Math.random() * 2;
    this.drawConor = 0;
    this.conorVektor = Math.random() * 2;
    this.gabaritKoof = 0;
    this.iCanGetSweem = true;
    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;
  } else if (this.type === "oil_tanker") {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = oil_tanker_empty_orc_red;
      this.imageToDraw_2 = oil_tanker_full_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = oil_tanker_empty_orc_black;
      this.imageToDraw_2 = oil_tanker_full_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = oil_tanker_empty_orc_lazur;
      this.imageToDraw_2 = oil_tanker_full_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = tanker_h_blue;
      this.imageToDraw_2 = tanker_oil_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 8500;
      this.menu_name = "Oil tanker";
      this.dop_menu = true;
    } else {
      this.face_animY = 8600;
      this.menu_name = "Oil tanker";
      this.dop_menu = true;
    }
    this.list_1_y = 11200;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.oil = false;

    this.speed = 3;

    this.terpenie = 0;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "oil_tanker";
    this.distroyTimer = 30;
    this.hp = 300;
    this.hpfull = this.hp;
    this.warrior = false;

    this.handTarget = 0;

    this.fly = false;
    this.iCanGetFly = false;
    this.sweeme = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 0;
    this.basePanzer = 30;

    //this.attack=this.baseAttack//*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 500;
    //this.dash=450;
    this.drawGabarit = 95 + Math.random() * 11;

    if (this.drawGabarit === 100) {
      this.drawGabarit = 97;
    }

    this.gabaritVector = Math.random() * 2;
    this.drawConor = 0;
    this.conorVektor = Math.random() * 2;
    this.gabaritKoof = 0;

    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;
  } else if (this.type === "transport") {
    //this.firePoint={x:this.x+50,y:this.y};

    if (this.fraction === "redOrcs") {
      this.imageToDraw = transport_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = transport_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = transport_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = transport_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 8300;
      this.menu_name = "Transport";
      this.dop_menu = true;
      this.list_1_y = 12100;
    } else {
      this.face_animY = 8400;
      this.menu_name = "Transport";
      this.dop_menu = true;
      this.list_1_y = 12200;
    }

    //this.list_1_y=10600;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.speed = 7;
    this.passagers_out = false;

    this.ii_passagers = [];
    this.passagers = [];

    this.terpenie = 0;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "transport";
    this.distroyTimer = 30;
    this.hp = 500;
    this.hpfull = this.hp;
    this.warrior = false;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    this.holdTroll = 200;
    this.fly = false;
    this.iCanGetFly = false;
    this.sweeme = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 0;
    this.basePanzer = 30;

    //this.attack=this.baseAttack//*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 500;
    //this.dash=450;
    this.drawGabarit = 95 + Math.random() * 11;

    if (this.drawGabarit === 100) {
      this.drawGabarit = 97;
    }

    this.gabaritVector = Math.random() * 2;
    this.drawConor = 0;
    this.conorVektor = Math.random() * 2;
    this.gabaritKoof = 0;

    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;
  } else if (this.type === "dragoon") {
    this.firePoint = { x: this.x + 50, y: this.y };

    if (this.fraction === "redOrcs") {
      if (this.imageToDraw !== dragoon_orc_red) {
        this.imageToDraw = dragoon_orc_red;
      }
    } else if (this.fraction === "blackOrcs") {
      if (this.imageToDraw !== dragoon_orc_black) {
        this.imageToDraw = dragoon_orc_black;
      }
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = dragoon_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = gri_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 9500;
      this.menu_name = "Gryphon rider";
      //this.dop_menu=true;
    } else {
      this.face_animY = 9600;
      this.menu_name = "Dragon";
      //this.dop_menu=true;
    }
    //this.list_1_y=9700;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.light = true;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;

    this.unitStatus = "life";
    this.unitName = "dragoon";
    this.distroyTimer = 30;
    this.hp = 2000;
    this.hpfull = this.hp;
    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    this.holdTroll = 200;
    this.fly = true;
    this.iCanGetFly = true;
    this.iCanGetSweem = true;
    //this.gold=100;
    //this.gabarit=100;
    this.dopAnim = 0;

    this.baseAttack = 100;
    this.basePanzer = 30;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;
    this.seeing = 300;
    this.dash = 450;

    //this.horizont=horizont;
    //this.vertikal=vertikal-1;

    this.gabarit = 100;
  } else if (this.type === "rizar") {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = rizar_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = rizar_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = rizar_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = rizar_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 6200;
      this.menu_name = "Knight";
      this.dop_menu = true;
    } else {
      this.face_animY = 6300;
      this.menu_name = "Ogre";
      this.dop_menu = true;
    }
    this.list_1_y = 9700;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.speed = 5;
    //magickTarget

    this.canHold = true;

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "rizar";
    this.distroyTimer = 1001;
    this.hp = 150;
    this.hpfull = this.hp;
    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    this.manaTimer = false;
    this.mana = 0;
    //this.gold=100;
    this.gabarit = 50;

    this.baseAttack = 25;

    if (this.nation === "orc") {
      this.baseAttack = 30;
    }

    this.basePanzer = 40;
    if (this.nation === "h") {
      this.basePanzer = 45;
    }

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;

    this.dash = 400;
  } else if (this.type === "ballista") {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = ballista_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = ballista_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = ballista_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = ballista_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 6000;
      this.menu_name = "Ballista";
      this.dop_menu = true;
    } else {
      this.face_animY = 6100;
      this.menu_name = "Catapult";
      this.dop_menu = true;
    }
    this.list_1_y = 9700;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.speed = 1;

    this.canHold = true;

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "ballista";
    this.distroyTimer = 501;
    this.hp = 50;
    this.hpfull = this.hp;
    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    //this.gold=100;
    this.gabarit = 50;
    this.iCanGetSweem = true;
    this.seeing = 550; //250 300
    this.axe = false;

    this.attack = 300; //20
    this.baseAttack = 300;
    this.baseSeeing = 550;

    this.holdTroll = 500;

    this.panzer = 0;
    this.dash = 600; //410;//350 400
  } else if (this.type === 3) {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = troll_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = troll_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = troll_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = luchnik_h_blue;
    }

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 5800;
      this.menu_name = "Elven archer";
      this.dop_menu = true;
    } else {
      this.face_animY = 5900;
      this.menu_name = "Troll axethrower";
      this.dop_menu = true;
    }
    this.list_1_y = 9700;
    //this.list_1_stop_y=3700;
    ////////////////////////////
    this.speed = 2.5;
    //speed

    this.canHold = true;

    this.blackBoock = [];

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "luchnik";
    this.distroyTimer = 501;
    this.hp = 90;
    this.hpfull = this.hp;
    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    //this.gold=100;
    this.gabarit = 50;
    this.iCanGetSweem = true;
    this.seeing = 200; //250 300
    this.axe = false;

    this.attack = 10; //20

    this.baseAttack = 10;

    this.baseSeeing = 200;

    this.holdTroll = 25;

    this.panzer = 0;
    this.dash = 350; //410;//350 400

    this.iCanGetFly = true;
  } else if (this.type === 1) {
    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 0;
      this.menu_name = "Batrak";
      this.dop_menu = true;
    } else {
      this.face_animY = 600;
      this.menu_name = "Peon";
      this.dop_menu = true;
    }
    this.list_1_y = 3400;
    this.list_1_stop_y = 3700;
    ////////////////////////////
    this.speed = 2;

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "peon";
    this.workTimeSahta = 100;
    this.waitTime = 30;
    this.distroyTimer = 501;
    this.hp = 80;
    this.hpfull = this.hp;
    //this.gold=100;
    this.gabarit = 50;
    this.basePanzer = 0;
    this.panzer = this.basePanzer;
    this.ii_personalFree = true;
    this.peon_i_can_get = false;
  } else if (this.type === 2) {
    if (this.fraction === "redOrcs") {
      this.imageToDraw = mechnick_orc_red;
    } else if (this.fraction === "blackOrcs") {
      this.imageToDraw = mechnick_orc_black;
    } else if (this.fraction === "lazurOrcs") {
      this.imageToDraw = mechnick_orc_lazur;
    } else if (this.fraction === "h_blue") {
      this.imageToDraw = mechnik_h_blue;
    }

    this.speed = 3;

    ///////////////////////////
    if (this.nation === "h") {
      this.face_animY = 5600;
      this.menu_name = "Footman";
      this.dop_menu = true;
    } else {
      this.face_animY = 5700;
      this.menu_name = "Grunt";
      this.dop_menu = true;
    }
    this.list_1_y = 9700;
    //this.list_1_stop_y=3700;
    ////////////////////////////

    this.canHold = true;

    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;

    this.unitStatus = "life";
    this.unitName = "mechnick";
    this.distroyTimer = 501;
    this.hp = 100;
    this.hpfull = 100;
    this.warrior = true;
    this.animys = [];
    this.iFight = false;
    this.handTarget = 0;
    //this.gold=100;
    this.gabarit = 50;

    this.baseAttack = 15;

    if (this.nation === "orc") {
      this.baseAttack = 20;
    }

    this.basePanzer = 30;

    this.attack = this.baseAttack; //*this.fatherFraction.dopNoFlyAttack;

    this.panzer = this.basePanzer;

    this.dash = 400;
  }

  this.target = 0;
  this.iDoTakt = 0;
  this.iDoTaktTimer = -1;
  this.animKorrektorY = 0;

  this.iStand = true;

  //gameFielg[this.vertikal][this.horizont].
  this.nockNokc = true;
  this.iGoBuild = false;
  this.myTargetClosed = 0;

  //////////////////////////////
  this.animTimer = Math.floor(Math.random() * 150) + 30;

  //this.animX=Math.floor(Math.random()*5)*51;
  this.randomMoveVektor = Math.floor(Math.random() * 8);

  if (this.randomMoveVektor === 0) {
    this.moveVektor = "right";
  } else if (this.randomMoveVektor === 1) {
    this.moveVektor = "up_Right";
  } else if (this.randomMoveVektor === 2) {
    this.moveVektor = "right_Down";
  } else if (this.randomMoveVektor === 3) {
    this.moveVektor = "down";
  } else if (this.randomMoveVektor === 4) {
    this.moveVektor = "down_Left";
  } else if (this.randomMoveVektor === 5) {
    this.moveVektor = "left_Up";
  } else if (this.randomMoveVektor === 6) {
    this.moveVektor = "up";
  } else if (this.randomMoveVektor === 7) {
    this.moveVektor = "left";
  }
  //this.myReset=0;

  this.holdToGoMem = 0;

  /////////////////////////////////////

  this.rightVSP = Math.sin((0 * Math.PI) / 180) * this.speed;
  this.rightGSP = Math.cos((0 * Math.PI) / 180) * this.speed;

  this.right_DownVSP = Math.sin((45 * Math.PI) / 180) * this.speed;
  this.right_DownGSP = Math.cos((45 * Math.PI) / 180) * this.speed;

  this.downVSP = Math.sin((90 * Math.PI) / 180) * this.speed;
  this.downGSP = Math.cos((90 * Math.PI) / 180) * this.speed;

  this.down_LeftVSP = Math.sin((135 * Math.PI) / 180) * this.speed;
  this.down_LeftGSP = Math.cos((135 * Math.PI) / 180) * this.speed;

  this.leftVSP = Math.sin((180 * Math.PI) / 180) * this.speed;
  this.leftGSP = Math.cos((180 * Math.PI) / 180) * this.speed;

  this.left_UpVSP = Math.sin((225 * Math.PI) / 180) * this.speed;
  this.left_UpGSP = Math.cos((225 * Math.PI) / 180) * this.speed;

  this.upVSP = Math.sin((270 * Math.PI) / 180) * this.speed;
  this.upGSP = Math.cos((270 * Math.PI) / 180) * this.speed;

  this.up_RightVSP = Math.sin((315 * Math.PI) / 180) * this.speed;
  this.up_RightGSP = Math.cos((315 * Math.PI) / 180) * this.speed;

  /////////////////////////////////////////////////
};

Continent = function (number) {
  this.cells = [];
  this.conturLineCells = [];
  this.number = number;
  this.conturLine_sea_Cells = [];
  this.my_seas = ["luft"];
  this.shahts = [];
  this.woods = [];
};

const Sound = function (sound, start_time, out_time, unit, sound_type) {
  this.sound = sound;

  this.sound.currentTime = start_time;

  this.out_time = out_time;

  this.start = false;

  this.unit = unit;

  this.sound_type = sound_type;
};

Sea = function (number) {
  this.cells = [];
  this.conturLineCells = [];
  this.number = number;
  this.oils = [];
};

/*   /////////// obrazez

{
			flot:false,
			base_cells:300,
			level:1,
			///*
			//townHoll :[], //new SablonObj(10,10),// adres startovoy shahty
			farms : [
			new SablonObj(6,3),new SablonObj(8,1),new SablonObj(10,1),new SablonObj(6,5),
			
			
			
			],// adres tochki dlya ferm
			
			
			towers:[
			new SablonObj(5,20,undefined,"guard"),
			new SablonObj(7,20,undefined,"guard"),
			new SablonObj(9,20,undefined,"cannon")
			
			//new SablonObj(6,50,undefined,"guard"),
			//new SablonObj(6,85,undefined,"cannon"),
			//new SablonObj(0,60,undefined,"cannon"),
			//new SablonObj(30,60,undefined,"cannon"),
			//new SablonObj(33,60,undefined,"guard"),
			],
			
			
			baracks:[
			//new SablonObj(10,16),//10,16
			//new SablonObj(14,20)
			],
			
			kuznyas:[
			//new SablonObj(6,15)
			],
			
			ogreBases:[
			//new SablonObj(6,10)
			],
			
			altars:[
			//new SablonObj(7,10)
			],
			
			dragon_roosts:[
			//new SablonObj(7,13)
			],
			
				temples:[
			//new SablonObj(7,13)
			],
			
			
			
			
			batraks:10,

			mechniks:30,
			luchniks:30,
			ballistas:0,
			rizars:30,
			transports:5,
			oil_tankers:0,
			distroers:3,
			linkors:2,
			turtles:5
			
			
			
		};


*/
