/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
class Unit {
  constructor(type, horizont, vertikal, speed, fraction, nation) {
  // cell speed

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

    // this.animTimer=Math.floor(Math.random()*50)+10;

    this.moveVektor = 0;
    this.moveTimer = 0;
    // console.log(this.rightGSP);
    // this.panzer=1;

    this.visible = true;

    this.terpenie_ran = 50 + Math.floor(Math.random() * 20);

    if (this.type === 'mag') {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = mag_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = mag_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = mag_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = mag_h_blue;
      }

      this.speed = 4;

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 9300;
        this.menu_name = 'Mag';
        this.dop_menu = true;
      } else {
        this.face_animY = 9400;
        this.menu_name = 'Death knight';
        this.dop_menu = true;
      }
      this.list_1_y = 11100;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      // magickTarget

      // this.canHold=true;

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'mag';
      this.distroyTimer = 1020;

      this.hpfull = 100;

      this.hp = 100;

      this.warrior = true;
      this.animys = [];
      this.iFight = false;
      this.handTarget = 0;
      this.manaTimer = false;
      this.mana = 0;
      // this.gold=100;
      this.gabarit = 50;
      this.magick = false;
      this.iCanGetFly = true;
      this.iCanGetSweem = true;

      this.baseAttack = 5;
      this.basePanzer = 0;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;

      this.dash = 200;
      this.seeing = 700; // 250 300
      this.holdTroll = 30;
      this.speed = 4;
    } else if (this.type === 'turtle') {
    // this.firePoint={x:this.x+50,y:this.y}; animys
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = turtle_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = turtle_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = turtle_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = submarine_h_blue;
      }
      // axe_time

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 9100;
        this.menu_name = 'Gnomish submarine';
      // this.dop_menu=true;
      } else {
        this.face_animY = 9200;
        this.menu_name = 'Giant turtle';
      // this.dop_menu=true;
      }
      // this.list_1_y=10600;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.axe_time = 0;

      this.light = true;

      this.speed = 3;

      this.terpenie = 0;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'turtle';
      this.distroyTimer = 30;
      this.hp = 300;
      this.hpfull = this.hp;
      this.warrior = true;

      this.handTarget = 0;
      this.holdTroll = 80;
      this.fly = false;
      this.iCanGetFly = false;
      this.sweeme = true;
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 100;
      this.basePanzer = 20;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

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
      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;

      this.visible = false;

      this.draw_visible = false;
    } else if (this.type === 'linkor') {
    // this.firePoint={x:this.x+50,y:this.y}; animys
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = linkor_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = linkor_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = linkor_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = linkor_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 8900;
        this.menu_name = 'Battleship';
      // this.dop_menu=true;
      } else {
        this.face_animY = 9000;
        this.menu_name = 'Ogre juggernaught';
      // this.dop_menu=true;
      }
      // this.list_1_y=10600;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.light = true;

      this.speed = 1.5;

      this.terpenie = 0;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'linkor';
      this.distroyTimer = 30;
      this.hp = 1000;
      this.hpfull = this.hp;
      this.warrior = true;

      this.handTarget = 0;
      this.holdTroll = 400;
      this.fly = false;
      this.iCanGetFly = false;
      this.sweeme = true;
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 400;
      this.basePanzer = 40;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

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
      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;
    } else if (this.type === 'distroer') {
    // this.firePoint={x:this.x+50,y:this.y}; animys
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = distroer_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = distroer_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = distroer_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = distroer_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 8700;
        this.menu_name = 'Elven destroyer';
      // this.dop_menu=true;
      } else {
        this.face_animY = 8800;
        this.menu_name = 'Troll destroyer';
      // this.dop_menu=true;
      }
      // this.list_1_y=10600;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.light = true;

      this.speed = 3;

      this.terpenie = 0;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'distroer';
      this.distroyTimer = 30;
      this.hp = 500;
      this.hpfull = this.hp;
      this.warrior = true;

      this.handTarget = 0;
      this.holdTroll = 200;
      this.fly = false;
      this.iCanGetFly = true;
      this.sweeme = true;
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 150;
      this.basePanzer = 30;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

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
      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;
    } else if (this.type === 'oil_tanker') {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = oil_tanker_empty_orc_red;
        this.imageToDraw_2 = oil_tanker_full_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = oil_tanker_empty_orc_black;
        this.imageToDraw_2 = oil_tanker_full_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = oil_tanker_empty_orc_lazur;
        this.imageToDraw_2 = oil_tanker_full_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = tanker_h_blue;
        this.imageToDraw_2 = tanker_oil_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 8500;
        this.menu_name = 'Oil tanker';
        this.dop_menu = true;
      } else {
        this.face_animY = 8600;
        this.menu_name = 'Oil tanker';
        this.dop_menu = true;
      }
      this.list_1_y = 11200;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.oil = false;

      this.speed = 3;

      this.terpenie = 0;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'oil_tanker';
      this.distroyTimer = 30;
      this.hp = 300;
      this.hpfull = this.hp;
      this.warrior = false;

      this.handTarget = 0;

      this.fly = false;
      this.iCanGetFly = false;
      this.sweeme = true;
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 0;
      this.basePanzer = 30;

      // this.attack=this.baseAttack//*this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;
      this.seeing = 500;
      // this.dash=450;
      this.drawGabarit = 95 + Math.random() * 11;

      if (this.drawGabarit === 100) {
        this.drawGabarit = 97;
      }

      this.gabaritVector = Math.random() * 2;
      this.drawConor = 0;
      this.conorVektor = Math.random() * 2;
      this.gabaritKoof = 0;

      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;
    } else if (this.type === 'transport') {
    // this.firePoint={x:this.x+50,y:this.y};

      if (this.fraction === 'redOrcs') {
        this.imageToDraw = transport_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = transport_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = transport_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = transport_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 8300;
        this.menu_name = 'Transport';
        this.dop_menu = true;
        this.list_1_y = 12100;
      } else {
        this.face_animY = 8400;
        this.menu_name = 'Transport';
        this.dop_menu = true;
        this.list_1_y = 12200;
      }

      // this.list_1_y=10600;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.speed = 7;
      this.passagers_out = false;

      this.ii_passagers = [];
      this.passagers = [];

      this.terpenie = 0;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'transport';
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
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 0;
      this.basePanzer = 30;

      // this.attack=this.baseAttack//*this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;
      this.seeing = 500;
      // this.dash=450;
      this.drawGabarit = 95 + Math.random() * 11;

      if (this.drawGabarit === 100) {
        this.drawGabarit = 97;
      }

      this.gabaritVector = Math.random() * 2;
      this.drawConor = 0;
      this.conorVektor = Math.random() * 2;
      this.gabaritKoof = 0;

      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;
    } else if (this.type === 'dragoon') {
      this.firePoint = { x: this.x + 50, y: this.y };

      if (this.fraction === 'redOrcs') {
        if (this.imageToDraw !== dragoon_orc_red) {
          this.imageToDraw = dragoon_orc_red;
        }
      } else if (this.fraction === 'blackOrcs') {
        if (this.imageToDraw !== dragoon_orc_black) {
          this.imageToDraw = dragoon_orc_black;
        }
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = dragoon_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = gri_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 9500;
        this.menu_name = 'Gryphon rider';
      // this.dop_menu=true;
      } else {
        this.face_animY = 9600;
        this.menu_name = 'Dragon';
      // this.dop_menu=true;
      }
      // this.list_1_y=9700;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.light = true;

      this.damagePointX = this.x + 50;
      this.damagePointY = this.y;

      this.unitStatus = 'life';
      this.unitName = 'dragoon';
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
      // this.gold=100;
      // this.gabarit=100;
      this.dopAnim = 0;

      this.baseAttack = 100;
      this.basePanzer = 30;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;
      this.seeing = 300;
      this.dash = 450;

      // this.horizont=horizont;
      // this.vertikal=vertikal-1;

      this.gabarit = 100;
    } else if (this.type === 'rizar') {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = rizar_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = rizar_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = rizar_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = rizar_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 6200;
        this.menu_name = 'Knight';
        this.dop_menu = true;
      } else {
        this.face_animY = 6300;
        this.menu_name = 'Ogre';
        this.dop_menu = true;
      }
      this.list_1_y = 9700;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.speed = 5;
      // magickTarget

      this.canHold = true;

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'rizar';
      this.distroyTimer = 1001;
      this.hp = 150;
      this.hpfull = this.hp;
      this.warrior = true;
      this.animys = [];
      this.iFight = false;
      this.handTarget = 0;
      this.manaTimer = false;
      this.mana = 0;
      // this.gold=100;
      this.gabarit = 50;

      this.baseAttack = 25;

      if (this.nation === 'orc') {
        this.baseAttack = 30;
      }

      this.basePanzer = 40;
      if (this.nation === 'h') {
        this.basePanzer = 45;
      }

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;

      this.dash = 400;
    } else if (this.type === 'ballista') {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = ballista_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = ballista_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = ballista_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = ballista_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 6000;
        this.menu_name = 'Ballista';
        this.dop_menu = true;
      } else {
        this.face_animY = 6100;
        this.menu_name = 'Catapult';
        this.dop_menu = true;
      }
      this.list_1_y = 9700;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.speed = 1;

      this.canHold = true;

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'ballista';
      this.distroyTimer = 501;
      this.hp = 50;
      this.hpfull = this.hp;
      this.warrior = true;
      this.animys = [];
      this.iFight = false;
      this.handTarget = 0;
      // this.gold=100;
      this.gabarit = 50;
      this.iCanGetSweem = true;
      this.seeing = 550; // 250 300
      this.axe = false;

      this.attack = 300; // 20
      this.baseAttack = 300;
      this.baseSeeing = 550;

      this.holdTroll = 500;

      this.panzer = 0;
      this.dash = 600; // 410;//350 400
    } else if (this.type === 3) {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = troll_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = troll_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = troll_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = luchnik_h_blue;
      }

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 5800;
        this.menu_name = 'Elven archer';
        this.dop_menu = true;
      } else {
        this.face_animY = 5900;
        this.menu_name = 'Troll axethrower';
        this.dop_menu = true;
      }
      this.list_1_y = 9700;
      // this.list_1_stop_y=3700;
      /// /////////////////////////
      this.speed = 2.5;
      // speed

      this.canHold = true;

      this.blackBoock = [];

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'luchnik';
      this.distroyTimer = 501;
      this.hp = 90;
      this.hpfull = this.hp;
      this.warrior = true;
      this.animys = [];
      this.iFight = false;
      this.handTarget = 0;
      // this.gold=100;
      this.gabarit = 50;
      this.iCanGetSweem = true;
      this.seeing = 200; // 250 300
      this.axe = false;

      this.attack = 10; // 20

      this.baseAttack = 10;

      this.baseSeeing = 200;

      this.holdTroll = 25;

      this.panzer = 0;
      this.dash = 350; // 410;//350 400

      this.iCanGetFly = true;
    } else if (this.type === 1) {
    /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 0;
        this.menu_name = 'Batrak';
        this.dop_menu = true;
      } else {
        this.face_animY = 600;
        this.menu_name = 'Peon';
        this.dop_menu = true;
      }
      this.list_1_y = 3400;
      this.list_1_stop_y = 3700;
      /// /////////////////////////
      this.speed = 2;

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'peon';
      this.workTimeSahta = 100;
      this.waitTime = 30;
      this.distroyTimer = 501;
      this.hp = 80;
      this.hpfull = this.hp;
      // this.gold=100;
      this.gabarit = 50;
      this.basePanzer = 0;
      this.panzer = this.basePanzer;
      this.ii_personalFree = true;
      this.peon_i_can_get = false;
    } else if (this.type === 2) {
      if (this.fraction === 'redOrcs') {
        this.imageToDraw = mechnick_orc_red;
      } else if (this.fraction === 'blackOrcs') {
        this.imageToDraw = mechnick_orc_black;
      } else if (this.fraction === 'lazurOrcs') {
        this.imageToDraw = mechnick_orc_lazur;
      } else if (this.fraction === 'h_blue') {
        this.imageToDraw = mechnik_h_blue;
      }

      this.speed = 3;

      /// ////////////////////////
      if (this.nation === 'h') {
        this.face_animY = 5600;
        this.menu_name = 'Footman';
        this.dop_menu = true;
      } else {
        this.face_animY = 5700;
        this.menu_name = 'Grunt';
        this.dop_menu = true;
      }
      this.list_1_y = 9700;
      // this.list_1_stop_y=3700;
      /// /////////////////////////

      this.canHold = true;

      this.damagePointX = this.x + 25;
      this.damagePointY = this.y + 25;

      this.unitStatus = 'life';
      this.unitName = 'mechnick';
      this.distroyTimer = 501;
      this.hp = 100;
      this.hpfull = 100;
      this.warrior = true;
      this.animys = [];
      this.iFight = false;
      this.handTarget = 0;
      // this.gold=100;
      this.gabarit = 50;

      this.baseAttack = 15;

      if (this.nation === 'orc') {
        this.baseAttack = 20;
      }

      this.basePanzer = 30;

      this.attack = this.baseAttack; //* this.fatherFraction.dopNoFlyAttack;

      this.panzer = this.basePanzer;

      this.dash = 400;
    }

    this.target = 0;
    this.iDoTakt = 0;
    this.iDoTaktTimer = -1;
    this.animKorrektorY = 0;

    this.iStand = true;

    // gameFielg[this.vertikal][this.horizont].
    this.nockNokc = true;
    this.iGoBuild = false;
    this.myTargetClosed = 0;

    /// ///////////////////////////
    this.animTimer = Math.floor(Math.random() * 150) + 30;

    // this.animX=Math.floor(Math.random()*5)*51;
    this.randomMoveVektor = Math.floor(Math.random() * 8);

    if (this.randomMoveVektor === 0) {
      this.moveVektor = 'right';
    } else if (this.randomMoveVektor === 1) {
      this.moveVektor = 'up_Right';
    } else if (this.randomMoveVektor === 2) {
      this.moveVektor = 'right_Down';
    } else if (this.randomMoveVektor === 3) {
      this.moveVektor = 'down';
    } else if (this.randomMoveVektor === 4) {
      this.moveVektor = 'down_Left';
    } else if (this.randomMoveVektor === 5) {
      this.moveVektor = 'left_Up';
    } else if (this.randomMoveVektor === 6) {
      this.moveVektor = 'up';
    } else if (this.randomMoveVektor === 7) {
      this.moveVektor = 'left';
    }
    // this.myReset=0;

    this.holdToGoMem = 0;

    /// //////////////////////////////////

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

  /// //////////////////////////////////////////////
  }
}
