/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const LandObj = function (
  type,
  horizont,
  vertikal,
  gold,
  fatherFraction,
  nation,
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

  if (this.type === 'stena') {
    this.damagePointX = this.x + 25;
    this.damagePointY = this.y + 25;
    this.s = true;

    // this.animX=Math.floor(Math.random()*1)*100;
    // this.draw_naw=true;
  } else if (this.type === 'gora') {
    this.animX = Math.floor(Math.random() * 1) * 100;
    this.draw_naw = true;
    this.neitral = true;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y + 50;
  } else if (this.type === 'temple') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = temple_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = temple_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = temple_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = mag_tower_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 5000;
      this.menu_name = 'Mage tower';
      this.dop_menu = true;
    } else {
      this.face_animY = 5100;
      this.menu_name = 'Temple of damned';
      this.dop_menu = true;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'temple';
    this.unitWoodOut = false;

    this.ii_timer = 0;

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

    this.myJoube = 0; // "new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'dragon_roost') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = dragon_roost_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = dragon_roost_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = dragon_roost_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = gryph_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 5200;
      this.menu_name = 'Gryphon aviary';
      this.dop_menu = true;
    } else {
      this.face_animY = 5300;
      this.menu_name = 'Dragon roost';
      this.dop_menu = true;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'dragon_roost';
    this.unitWoodOut = false;

    this.ii_timer = 0;

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

    this.myJoube = 0; // "new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'foundry') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = foundry_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = foundry_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = foundry_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = sea_zavod_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 4400;
      this.menu_name = 'Foundry';
      this.dop_menu = true;
    } else {
      this.face_animY = 4500;
      this.menu_name = 'Foundry';
      this.dop_menu = true;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'foundry';
    this.unitWoodOut = false;

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

    this.myJoube = 0; // "new basick";
    this.myJoubeTimer = 0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'oil_platform') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = oil_platform_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = oil_platform_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = oil_platform_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = oil_plat_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 11400;
      this.menu_name = 'Oil platform';
      // this.dop_menu=true;
    } else {
      this.face_animY = 11300;
      this.menu_name = 'Oil platform';
      // this.dop_menu=true;
    }

    /// /////////////

    this.sweeme = true;
    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'oil_platform';
    this.unitWoodOut = false;

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

    // this.myJoube=0;//"new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.x + 50;
    this.damagePointY = this.y;
  } else if (this.type === 'oil_Ref') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = oil_ref_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = oil_ref_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = oil_ref_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = foundry_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 4200;
      this.menu_name = 'refinary';
      this.dop_menu = false;
    } else {
      this.face_animY = 4300;
      this.menu_name = 'refinary';
      this.dop_menu = false;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'oil_Ref';
    this.unitWoodOut = false;

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

    // this.myJoube=0;//"new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'oil') {
    /// ////////////////

    this.face_animY = 11500;
    this.menu_name = 'Oil';
    this.dop_menu = false;

    /// /////////////

    this.hpfull = 100000;

    this.neitral = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'oil';

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
  } else if (this.type === 'port') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = port_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = port_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = port_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = port_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 4000;
      this.menu_name = 'Shipyard';
      this.dop_menu = true;
    } else {
      this.face_animY = 4100;
      this.menu_name = 'Shipyard';
      this.dop_menu = true;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'port';
    this.unitWoodOut = false;

    this.ii_timer = 0;

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

    // this.myJoube=0;//"new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'altar') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = altar_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = altar_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = altar_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = altar_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 4800;
      this.menu_name = 'Church';
      this.dop_menu = false;
    } else {
      this.face_animY = 4900;
      this.menu_name = 'Altar of storms';
      this.dop_menu = false;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'altar';
    this.unitWoodOut = false;

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

    // this.myJoube=0;//"new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'ogreBase') {
    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = ogreBase_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = ogreBase_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = ogreBase_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = konushnya_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 4600;
      this.menu_name = 'Stables';
      this.dop_menu = true;
    } else {
      this.face_animY = 4700;
      this.menu_name = 'Ogre mound';
      this.dop_menu = true;
    }

    /// /////////////

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'ogreBase';
    this.unitWoodOut = false;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    // this.myJoube=0;//"new basick";
    // this.myJoubeTimer=0;
    // this.gabarit=50;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'kuznya') {
    // kuznya

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 3800;
      this.menu_name = 'Blacksmith';
      this.dop_menu = true;
    } else {
      this.face_animY = 3900;
      this.menu_name = 'Blacksmith';
      this.dop_menu = true;
    }

    /// /////////////

    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = kuznya_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = kuznya_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = kuznya_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = kuznya_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'kuznya';
    this.unitWoodOut = false;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; // "new basick";
    this.myJoubeTimer = 0;
    // this.gabarit=50;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 5) {
    // barack
    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 2600;
      this.menu_name = 'Barack';
      this.dop_menu = true;
    } else {
      this.face_animY = 2700;
      this.menu_name = 'Barack';
      this.dop_menu = true;
    }

    /// /////////////

    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = leso;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = leso_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = leso_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = leso_h_blue;
    }

    this.no_voice = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'barack';
    this.unitWoodOut = false;

    // this.workers=[];
    // this.hp=1500;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.myJoube = 0; // "new basick";
    this.myJoubeTimer = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 4) {
    // lesopilka

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 2400;
      this.menu_name = 'Elven lumber mill';
      this.dop_menu = true;
    } else {
      this.face_animY = 2500;
      this.menu_name = 'Troll lumber mill';
      this.dop_menu = true;
    }

    /// /////////////

    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = orcbildsum;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = orcbildsum_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = orcbildsum_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = lesopilka_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'lesopilka';
    this.unitWoodOut = true;

    this.workers = [];
    // this.hp=1500;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 20;

    this.distroyTimer = 501;

    this.myJoube = 0; // "new basick";
    this.myJoubeTimer = 0;

    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];
    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 'tower') {
    if (
      this.fatherFraction.fraction === 'redOrcs'
      && this.imageToDraw !== watch_tower_orc_red
    ) {
      this.imageToDraw = watch_tower_orc_red;
      this.imageToDraw_2 = guard_tower_orc_red;
      this.imageToDraw_3 = cannon_tower_orc_red;
    } else if (
      this.fatherFraction.fraction === 'blackOrcs'
      && this.imageToDraw !== watch_tower_orc_black
    ) {
      this.imageToDraw = watch_tower_orc_black;
      this.imageToDraw_2 = guard_tower_orc_black;
      this.imageToDraw_3 = cannon_tower_orc_black;
    } else if (
      this.fatherFraction.fraction === 'lazurOrcs'
      && this.imageToDraw !== watch_tower_orc_lazur
    ) {
      this.imageToDraw = watch_tower_orc_lazur;
      this.imageToDraw_2 = guard_tower_orc_lazur;
      this.imageToDraw_3 = cannon_tower_orc_lazur;
    } else if (
      this.fatherFraction.fraction === 'h_blue'
      && this.imageToDraw !== tower_h_blue
    ) {
      this.imageToDraw = tower_h_blue;
      this.imageToDraw_2 = tower_gu_h_blue;
      this.imageToDraw_3 = tower_can_h_blue;
    }

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 5400;
      this.menu_name = 'Scout tower';
      this.dop_menu = true;
    } else {
      this.face_animY = 5500;
      this.menu_name = 'Watch tower';
      this.dop_menu = true;
    }

    /// /////////////

    this.no_voice = true;

    this.seeing = 500;

    this.light = true;

    this.iCanGetSweem = true;

    this.panzer = 60;

    this.animys = [];

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'tower';
    this.fraction;

    this.hpfull = 1500;
    this.hp = 1500;
    this.buildready = 50;
    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];

    this.upgradeTimer = 0;

    // this.workers=[];

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

    this.upgrade = 'watch';

    this.firePointX = this.cell.x + 50;
    this.firePointY = this.cell.y - 75;

    this.alarmTimer = 0;
  } else if (this.type === 1) {
    this.face_animY = 300;
    this.menu_name = 'Gold shaht';
    this.dop_menu = false;

    this.iComplite = true;

    for (let i = this.vertikal - 5; i <= this.vertikal + 5; i++) {
      for (let k = this.horizont - 5; k <= this.horizont + 5; k++) {
        if (gameFielg[i] && gameFielg[i][k]) {
          gameFielg[i][k].stopTownHoll.push(
            gameFielg[this.vertikal][this.horizont].unit,
          );
        }
      }
    }

    this.neitral = true;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'shahta';

    this.workers = [];
    this.hp = 100000;

    this.distroyTimer = 501;

    this.animX_2 = 0;
    this.animY_2 = 0;

    this.gabarit = 150;
  } else if (this.type === 2) {
    // townHoll

    this.pro_x = 170;
    this.pro_y = 250;

    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = townHoll_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = townHoll_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = townHoll_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = townHoll_h_blue;
    }

    this.no_voice = true;

    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 400;
      this.menu_name = 'Town holl';
      this.dop_menu = true;
    } else {
      this.face_animY = 500;
      this.menu_name = 'Great hall';
      this.dop_menu = true;
    }

    /// /////////////

    this.level = 1;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'townHoll';
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

    this.myJoube = 0; // "new basick";
    this.myJoubeTimer = 0;
    this.gabarit = 150;

    this.damagePointX = this.cell.x + 25;
    this.damagePointY = this.cell.y + 25;
  } else if (this.type === 3) {
    /// ////////////////
    if (this.nation === 'h') {
      this.face_animY = 700;
      this.menu_name = 'Farm';
      // this.dop_menu=true;
    } else {
      this.face_animY = 800;
      this.menu_name = 'Pig farm';
      // this.dop_menu=true;
    }

    /// /////////////

    this.pro_x = 100;
    this.pro_y = 100;

    if (this.fatherFraction.fraction === 'redOrcs') {
      this.imageToDraw = farm_orc_red;
    } else if (this.fatherFraction.fraction === 'blackOrcs') {
      this.imageToDraw = farm_orc_black;
    } else if (this.fatherFraction.fraction === 'lazurOrcs') {
      this.imageToDraw = farm_orc_lazur;
    } else if (this.fatherFraction.fraction === 'h_blue') {
      this.imageToDraw = farm_h_blue;
    }

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'farm';
    this.fraction;

    this.hpfull = 500;
    this.hp = 500;
    this.buildready = 50;
    this.animX_2 = 0;
    this.animY_2 = 0;
    this.builders = [];

    // this.workers=[];

    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = 0;

    this.gabX = 20;
    this.gabY = 20;

    this.animTimer = 0;

    // this.myJoube=0;//"new basick";
    this.gabarit = 100;

    this.damagePointX = this.cell.x + 50;
    this.damagePointY = this.cell.y;
  } else if (this.type === 'wood') {
    this.neitral = true;

    this.vibro = 0;

    this.cell = gameFielg[this.vertikal][this.horizont];
    this.unitStatus = 'building';
    this.unitName = 'wood';
    // this.fraction;

    this.distroyTimer = 20;
    // this.hpfull=500;
    this.hp = 800;
    this.lesorub = 0;
    // this.buildready=50;
    this.wood = true;
    // this.builders=[];

    // this.workers=[];

    this.animX = Math.floor(Math.random() * 4) * 200;
    this.animY = Math.floor(Math.random() * 4) * 200;

    // this.randomType=Math.floor(Math.random);
    this.animTimer = Math.floor(Math.random() * 6);
    // console.log(this.cell);
    this.ranX = Math.floor(Math.random() * 15);
    this.ranY = Math.floor(Math.random() * 5);

    const ranX = Math.floor(Math.random() * 2);
    const ranY = Math.floor(Math.random() * 2);

    if (!ranX) {
      this.ranX = -this.ranX;
    }
    if (!ranY) {
      this.ranY = -this.ranY;
    }

    this.ranGabX = Math.floor(Math.random() * 10);
    this.ranGabY = Math.floor(Math.random() * 20);
    this.gabarit = 50;

    const imageRand = Math.floor(Math.random() * 2);

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
