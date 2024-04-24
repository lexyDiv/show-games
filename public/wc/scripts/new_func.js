//restart_map music

const global_obnul = function () {
  //timer_do_start title

  win_or_loose = false;
  //pausa=0;

  mem_active = false;
  mem_hz = false;

  mem = [[], [], [], [], [], [], [], [], []];

  click_to_iden = false;

  player_pro_building = false;
  key = false;

  //x=false;
  //y=false; gameFielg

  removeX = 0;
  removeY = 0;

  gameFielgMas = false;
  gameFielgMap = castome_map_1;

  humansPeople = [];

  go = 0;

  onDraw = [];
  onDrawUnits = [];

  vektors = [];
  basick = 0;
  father = 0;
  gameFielg = [];
  fractions = [];
  freeLandObjects = [];
  allVektors = [];

  player = 0;
  iLoockTo = 0;
  allUnits = 0;
  activeFreeLandObjects = [];
  shahts = [];
  oils = [];
  woods = [];

  menu_unit_for_update = false;
  radar = new Radar(735, 55, 130);
  gory = [];
  steny = [];
  persNmbr = 0;
  allContinents = [];
  allSeas = [];
  od = [];
  od_grunt = [];
  onDrawSpecial = [];
  onDrawTrups = [];

  groupe = false;
  menu_click = false;
  player_pro_building_click = false;
  pausa_click = false;
  drawPanel = false;

  unit_dop_menu = [];
  in_unit_menu = false;

  groop_mem = false;
  groop_mem_unit = false;

  dop_ok = false;
  myJoube_face_animY = false;
  click_click = [];

  mig2 = 0.4;
  mig_vector2 = 1;

  all_units = false;
  all_units_start = false;

  tik = 0;

  cells_player_building_pro = [];

  mig = 0.2;
  mig_vector = 1;

  axesFly = [];
  fly = [];
  dragoonDamages = [];

  waters = [];
  water_lines = [];
  pribiy_lines = [];
  water_sleds_onDraw = [];
  water_sleds = [];

  globalTimer = 0;
  floorGlobalTimer = false;

  //timer_do_start=0;
  wrm = [];
  test = 0;
  temp = 30;
  y_n_magick = false;
  sounds = [];
  sounds_fight = [];
  sounds_fly = [];

  // global_start;

  in_pausa_menu_obj_in = [];

  //////////////////////////////////////////// zast menu v urvne
  zst_obj = { x: 350, y: 350, gabarit: 500, alfa: 0, imageToDraw: zst };
  ///////////////////////////////////////////

  forCheck = -100000000000;
  turtles_mass = [];
  glob_deep = 50000;
  per = false;
  ww = [];

  // restart_map;

  crateZoonMouse = {
    x: undefined,
    y: undefined,

    conorX: undefined,
    conorY: undefined,

    active: false,
  };

  shablon = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  if (level === "castome_map_1") {
    gameFielgMap = castome_map_1;
  }

  /*
const obj=new Obj(x,y);
const centerDrawPoint=new Obj();
const cenX=50*7+25;
const cenY=height/2+25;
const in_game_menu_obj={x:800,y:21,gabX:80,gabY:20};

const global_zanaves={
	active:true,
	alfa:1,
	go_to:"day",
	timer:150,
	alfa_step:0.025
	};

*/
};

let global_zanaves_prog_draw = function () {
  //console.log(global_zanaves.go_to);

  if (global_zanaves.timer) {
    global_zanaves.timer--;
  } else {
    if (global_zanaves.go_to === "day") {
      global_zanaves.alfa -= global_zanaves.alfa_step;

      if (global_zanaves.alfa <= 0) {
        global_zanaves.alfa = 0;
        global_zanaves.active = false;
      }
    } else if (global_zanaves.go_to === "night") {
      global_zanaves.alfa += global_zanaves.alfa_step;

      if (global_zanaves.alfa >= 1) {
        global_zanaves.alfa = 1;
        //global_zanaves.active=false;
      }
    }
  }

  ctx3.globalAlpha = global_zanaves.alfa;
  ctx3.fillStyle = "black";
  ctx3.fillRect(0, 0, width, height);
  ctx3.globalAlpha = 1;
};

const restart_map_prog = function () {
  if (!restart_map) {
    return;
  } else {
    restart_map--;
  }

  if (restart_map === 50) {
    global_obnul();

    if (!title.style) {
      fractionsCrate();
    } else {
      start_game = false;
    }
  }

  if (!restart_map) {
    pausa = 0;

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 1;
    global_zanaves.go_to = "day";
    global_zanaves.active = true;

    if (title.style) {
      global_zanaves.alfa_step = 0.02;
      global_zanaves.timer = 50;
      global_zanaves.go_to = "day";
      global_zanaves.active = true;

      title.active = true;
      title.list = 5;
      title.list_5.timer = 0;
    }
  }
};

///////////////////////////////////// fractions

for (let i = 0; i < all_fractions.length; i++) {
  let fraction = all_fractions[i];

  if (fraction.nation === "h") {
    h_fractions.push(fraction);
  } else {
    orc_fractions.push(fraction);
    //console.log("here")
  }
}

const click_to_iden_prog = function () {
  if (click_to_iden) {
    //console.log("ok");

    if (click_to_iden.timer) {
      click_to_iden.timer--;
    } else {
      if (
        !click_to_iden.active &&
        click_to_iden.unit.cell &&
        click_to_iden.unit.hp > 0
      ) {
        if (!click_to_iden.unit.fly && click_to_iden.unit.gabarit === 50) {
          player.selectUnits.push(click_to_iden.unit);
        } else if (
          !click_to_iden.unit.fly &&
          click_to_iden.unit.gabarit === 100
        ) {
          player.selectIsSweem.push(click_to_iden.unit);
        } else {
          player.selectDragons.push(click_to_iden.unit);
        }
      } else if (
        click_to_iden.active &&
        click_to_iden.unit.cell &&
        click_to_iden.unit.hp > 0
      ) {
        let vertikal = click_to_iden.unit.vertikal;
        let horizont = click_to_iden.unit.horizont;

        let units = [];

        for (let i = vertikal - 20; i < vertikal + 20; i++) {
          for (let k = horizont + 20; k > horizont - 20; k--) {
            if (gameFielg[i] && gameFielg[i][k]) {
              let cell = gameFielg[i][k];

              if (!click_to_iden.unit.fly) {
                if (
                  cell.unit &&
                  !cell.unit.neitral &&
                  cell.unit.fatherFraction.control === "player" &&
                  cell.unit.type === click_to_iden.unit.type &&
                  cell.unit.unitStatus === "life" &&
                  cell.unit.cell &&
                  cell.unit.hp > 0 &&
                  units.indexOf(cell.unit) === -1
                ) {
                  units.push(cell.unit);
                }
              } else {
                if (
                  cell.dragoon &&
                  cell.dragoon.type === click_to_iden.unit.type &&
                  cell.dragoon.fatherFraction.control === "player" &&
                  cell.dragoon.cell &&
                  cell.dragoon.hp > 0 &&
                  units.indexOf(cell.dragoon) === -1
                ) {
                  units.push(cell.dragoon);
                }
              }
            }
          }
        }

        let mass = [];

        while (true) {
          let min = [];

          for (let i = 0; i < units.length; i++) {
            let u = units[i];

            let dis = get_distanse_on_lineyka(
              u.cell,
              u.gabarit,
              click_to_iden.unit.cell,
              click_to_iden.unit.gabarit
            );

            if (!min.length || dis < min[0]) {
              min = [dis, u];
            }
          }

          if (min.length) {
            mass.push(min[1]);
            units.splice(units.indexOf(min[1]), 1);
          }

          if (!units.length || mass.length === 9) {
            break;
          }
        } // while

        if (!click_to_iden.unit.fly && click_to_iden.unit.gabarit === 50) {
          player.selectUnits = mass;
        } else if (
          !click_to_iden.unit.fly &&
          click_to_iden.unit.gabarit === 100
        ) {
          player.selectIsSweem = mass;
        } else {
          player.selectDragons = mass;
        }
      }

      click_to_iden = false;
    }
  }
};

const mem_prog = function (kc) {
  if (!player) {
    return;
  }

  if (kc >= 49 && kc <= 57) {
    let ind = Math.abs(49 - kc);

    if (mem_active && all_units && all_units.length) {
      for (let i = 0; i < mem[ind].length; i++) {
        mem[ind][i].ind = false;
      }

      mem[ind] = [];

      for (let i = 0; i < all_units.length; i++) {
        let u = all_units[i];

        if (u.ind !== ind) {
          if (u.ind || u.ind === 0) {
            mem[u.ind].splice(mem[u.ind].indexOf(u), 1);
          }
        }
      }

      for (let i = 0; i < all_units.length; i++) {
        let u = all_units[i];

        u.ind = ind;

        mem[u.ind].push(u);
      }
    } else {
      all_units = [];
      player.selectUnits = [];
      player.selectDragons = [];
      player.selectBuildings = [];
      player.selectIsSweem = [];

      mem_hz = { ind: ind, timer: 1 };
      //console.log(mem[ind])
      /*
for(let i=0;i<mem[ind].length;i++){
	
let u=mem[ind][i];	

if(u.hp<=0){
	mem[ind].splice(i,1);
}
else{



if(u.cell){
if(u.gabarit===50){
	player.selectUnits.push(u);
	
}
else if(u.fly){
	player.selectDragons.push(u);
}
else if(u.sweeme){
	player.selectIsSweem.push(u);
}
else if(u.unitStatus!=="life"){
	 player.selectBuildings.push(u);
};

//all_units.push(u);

};



};	
};
*/
    }
  }
};

const mem_prog_load = function () {
  if (!mem_hz) {
    return;
  }

  if (mem_hz.timer) {
    mem_hz.timer--;
  } else {
    let ind = mem_hz.ind;

    for (let i = 0; i < mem[ind].length; i++) {
      let u = mem[ind][i];

      if (u.hp <= 0) {
        mem[ind].splice(i, 1);
      } else {
        if (u.cell) {
          if (u.gabarit === 50) {
            player.selectUnits.push(u);
          } else if (u.fly) {
            player.selectDragons.push(u);
          } else if (u.sweeme) {
            player.selectIsSweem.push(u);
          } else if (u.unitStatus !== "life") {
            player.selectBuildings.push(u);
          }

          //all_units.push(u);
        }
      }
    }

    mem_hz = false;
  }
};

const music_prog = function () {
  if (music) {
    //console.log(music.melody.currentTime)

    if (music.pausa_command) {
      music.go_command = false;
    }

    if (music.melody.currentTime >= music.max || music.stop_command) {
      music.go_command = false;
      music.pausa_command = false;
    }

    if (!music.start && !pausa) {
      music.melody.volume = 1;
      music.melody.currentTime = music.min;
      music.melody.play();
      music.start = true;

      //console.log("go")
    }

    ////////////////////////////////////////////////////////////////////

    if (music.go_command) {
      if (music.go_command === 1) {
        music.melody.play();
        music.go_command = 2;
      }

      if (music.melody.volume < 0.95) {
        music.melody.volume += 0.03;
      } else {
        music.melody.volume = 1;
        music.go_command = false;
      }
    }

    ////////////////////////////////////////////////////////////////// pausa_command music.go_command

    if (
      music.melody.volume >= 0.03 &&
      (music.melody.currentTime >= music.max ||
        music.stop_command ||
        music.pausa_command)
    ) {
      music.melody.volume -= 0.03;
    }

    if (
      music.melody.volume <= 0.3 &&
      (music.melody.currentTime >= music.max ||
        music.stop_command ||
        music.pausa_command)
    ) {
      music.melody.volume = 0;
      music.melody.pause();
      music.pausa_command = false;
    }

    //console.log(music.melody.currentTime)

    if (
      music.melody.volume === 0 &&
      (music.melody.currentTime >= music.max || music.stop_command)
    ) {
      music = false;
      console.log("ok");
    }
  }
};

const create_level = function () {
  if (level === 1) {
    if (title.style === "orc") {
      gameFielgMap = level_1_orc;

      map_initialization();
      check_seas();
      check_continents();

      let fr = new Fraction(
        "redOrcs",
        "player",
        [
          new Unit(1, 23, 20, 2, "redOrcs", "orc"),
          new Unit(2, 22, 22, 3, "redOrcs", "orc"),
          new Unit(3, 19, 25, 3, "redOrcs", "orc"),
          new Unit(3, 18, 27, 3, "redOrcs", "orc"),
        ],
        1,
        1,
        "orc",

        [
          { h: 20, v: 28, type: 2 },
          { h: 26, v: 26, type: 3 },
        ]
      );

      fr.gold = 0;
      fr.wood = 0;
      fr.oil = 0;

      fractions.push(fr);

      //////////////////////////////////////////////////

      fr = new Fraction(
        "h_blue",
        "comp",
        [
          new Unit(3, 8, 8, 3, "h_blue", "h"),
          new Unit(2, 1, 15, 3, "h_blue", "h"),
          new Unit(2, 19, 3, 3, "h_blue", "h"),
          new Unit(3, 1, 30, 3, "h_blue", "h"),
        ],
        2,
        2,
        "h",
        []
      );

      fr.createShablon = {
        flot: false,
        base_cells: 0,
        level: 1,
        attack: false,

        farms: [],

        towers: [],

        baracks: [],

        kuznyas: [],

        ogreBases: [],

        altars: [],

        dragon_roosts: [],

        temples: [],
      };

      fr.stop_back = true;

      fractions.push(fr);
    }
  }
};

Fraction.prototype.check_and = function () {
  let result;

  if (level === 1) {
    if (title.style === "orc") {
      let ok_1;
      let ok_2 = 0;

      for (let i = 0; i < this.baracks.length; i++) {
        if (this.baracks[i].iComplite && this.baracks[i].hp > 0) {
          ok_1 = true;
        }
      }

      for (let i = 0; i < this.farms.length; i++) {
        if (this.farms[i].iComplite && this.farms[i].hp > 0) {
          ok_2++;
        }
      }

      if (
        (!this.peoples.length && !this.buildings.length) ||
        (this.gold < 400 && !this.batraks.length) ||
        (!this.townHolls.length &&
          (!this.batraks.length || this.gold < 1000 || this.wood < 1000))
      ) {
        result = "loose";
      }

      if (ok_1 && ok_2 >= 4) {
        result = "win";
      }
    } else {
      if (!this.peoples.length && !this.buildings.length) {
        result = "loose";
      }

      if (ok_1 && ok_2 >= 4) {
        result = "win";
      }
    }
  } else if (level === 2) {
  }

  if (result) {
    if (music) {
      music.stop_command = true;
    }

    global_zanaves.alfa_step = 0.03;
    global_zanaves.timer = 10;
    global_zanaves.go_to = "night";
    global_zanaves.active = true;

    win_or_loose = result;

    title.active = true;
    title.list = "and";
  }
};

const game_music_control = function () {
  if (
    player &&
    !pausa &&
    gameFielg.length &&
    global_zanaves.go_to !== "night"
  ) {
    if (!music) {
      if (player) {
        let ran = Math.floor(Math.random() * 5);

        let m = new Audio();
        m.src = "wc/music/" + player.nation + "/" + String(ran + 1) + ".mp3";

        music = { melody: m, min: 0, max: game_musics_h[ran].max };
      }
    }
  }
};

////////////////////////////////////////
