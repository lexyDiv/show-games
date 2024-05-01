//gameFielg timer_do_start

document.body.style.cursor = "none";

//document.body.style.cursor = 'crosshair';keys_menu

//console.log(document.body.style.cursor)

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width = canvas.width;
var height = canvas.height;

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width2 = canvas2.width;
var height2 = canvas2.height;

var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width3 = canvas3.width;
var height3 = canvas3.height;

// $("#canvas").css({ position: "absolute", left: 0, top: 0 });
// $("#canvas2").css({ position: "absolute", left: 0, top: 0 });
// $("#canvas3").css({ position: "absolute", left: 0, top: 0 });

//glob_deep

let level = "castome_map_1";

let vid;
//let cccc=[]; intro

//sounds keys_menu_2 timer_do_start start_game

let game_musics_h = [
  { melody: 1, min: 0, max: 205 },
  { melody: 2, min: 0, max: 205 },
  { melody: 3, min: 0, max: 205 },
  { melody: 4, min: 0, max: 205 },
  { melody: 5, min: 0, max: 205 },
];

let game_musics_orc = [
  { melody: 1, min: 0, max: 208 },
  { melody: 2, min: 0, max: 205 },
  { melody: 3, min: 0, max: 203 },
  { melody: 4, min: 0, max: 200 },
  { melody: 5, min: 0, max: 205 },
];

let win_or_loose;

let uu;

let music;

let mem_active;
let mem_hz;

let mem = [[], [], [], [], [], [], [], [], []];

let click_to_iden;

let exit_timer = 0;

let season = "summer";

let kick_start;

let start_game = false;

let pausa = 0;

let player_pro_building;
let key;

let x;
let y;

let removeX = 0;
let removeY = 0;

let gameFielgMas;

let humansPeople = [];

let go = 0;

let onDraw = [];
let onDrawUnits = [];

let vektors = [];
let basick = 0;
let father = 0;
let gameFielg = [];
let fractions = [];
let freeLandObjects = [];
let allVektors = [];

let player = 0;
let iLoockTo = 0;
let allUnits = 0;
let activeFreeLandObjects = [];
let shahts = [];
let oils = [];
let woods = [];

let menu_unit_for_update;
let radar = new Radar(735, 55, 130);
let gory = [];
let steny = [];
let persNmbr = 0;
let allContinents = [];
let allSeas = [];
let od = [];
let od_grunt = [];
let onDrawSpecial = [];
let onDrawTrups = [];

let groupe = false;
let menu_click = false;
let player_pro_building_click = false;
let pausa_click = false;
let drawPanel = false;

let unit_dop_menu = [];
let in_unit_menu = false;

let groop_mem;
let groop_mem_unit;

let dop_ok = false;
let myJoube_face_animY;
let click_click = [];

let mig2 = 0.4;
let mig_vector2 = 1;

let all_units;
let all_units_start = false;

let tik = 0;

let cells_player_building_pro = [];

let mig = 0.2;
let mig_vector = 1;

let axesFly = [];
let fly = [];
let dragoonDamages = [];

let waters = [];
let water_lines = [];
let pribiy_lines = [];
let water_sleds_onDraw = [];
let water_sleds = [];

let globalTimer = 0;
let floorGlobalTimer;

let timer_do_start = 400;
let wrm = [];
let test = 0;
let temp = 3;
let y_n_magick = false;
let sounds = [];
let sounds_fight = [];
let sounds_fly = [];
let sounds_menu = [];

let global_start;

let in_pausa_menu_obj_in = [];

//////////////////////////////////////////// zast menu v urvne
let zst_obj = { x: 350, y: 350, gabarit: 500, alfa: 0, imageToDraw: zst };
///////////////////////////////////////////

let forCheck = -100000000000;
let turtles_mass = [];
let glob_deep = 50000;
let per;
let ww = [];

let menu_long_click = false;
let click_up = false;

let restart_map;

let click_key;
let menu_kursor;
let keys_menu = [];
let keys_nation = [];
let kaskad_key;

let keys_kaskad = [];
let keys_strel = [];
let selected;
let strel_q = [];
let long_punkt;

let crateZoonMouse = {
  x: undefined,
  y: undefined,

  conorX: undefined,
  conorY: undefined,

  active: false,
};

let shablon = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let orc = [];
let h = [];
let positions = [];

const obj = new Obj(x, y);
const centerDrawPoint = new Obj();
const cenX = 50 * 7 + 25;
const cenY = height / 2 + 25;
const in_game_menu_obj = { x: 800, y: 21, gabX: 80, gabY: 20 };

const global_zanaves = {
  active: true,
  alfa: 1,
  go_to: "day",
  timer: 150,
  alfa_step: 0.025,
};

const h_fractions = [];
const orc_fractions = [];

const all_fractions = [
  {
    nation: "orc",
    ii_name: "redOrcs",
    color: "red",
    clan: "rivers of blood",
    menu_nation: "Orc",
    union: "1",
    position: 0,
  },
  {
    nation: "orc",
    ii_name: "blackOrcs",
    color: "black",
    clan: "black stone",
    menu_nation: "Orc",
    union: "1",
    position: 0,
  },
  {
    nation: "orc",
    ii_name: "lazurOrcs",
    color: "lazur",
    clan: "storm",
    menu_nation: "Orc",
    union: "1",
    position: 0,
  },
  {
    nation: "h",
    ii_name: "h_blue",
    color: "blue",
    clan: "blue europeans",
    menu_nation: "Human",
    union: "1",
    position: 0,
  },

  ////////////////////////////////
  /*
,
{
nation:"h",
ii_name:"h_blue",
color:"blue",
clan:"blue europeans",
menu_nation:"Human",
union:"1",
position:0
}
,
{
nation:"h",
ii_name:"h_blue",
color:"blue",
clan:"blue europeans",
menu_nation:"Human",
union:"1",
position:0
}
,
{
nation:"h",
ii_name:"h_blue",
color:"blue",
clan:"blue europeans",
menu_nation:"Human",
union:"1",
position:0
}
*/
];

let remove_map_y = 0;

let all_maps = [
  {
    type: "castom",
    ii_name: "castome_map_1",
    name: "two banks 65x65",
    map: castome_map_1,
    size: 65,
    apponents: 1,
    animX: 0,
    reserv: false,
    positions: [
      {
        x: 8,
        y: 4,
        reserv: false,
        num: "1",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: 400,
          level: 3,
          attack: true,

          //peoples:70,// trebuetsya dla vvedeniya kollichestva zhivih unitov!!!!!!!!
          //batraks:20,
          //mechniks:10,
          //luchniks:10,
          //ballistas:5,
          //rizars:1,
          //dragons:10,

          //p_dragon_roosts:10,
          //p_ports:5,

          farms: [
            //new SablonObj(6,3),new SablonObj(8,1),new SablonObj(10,1),new SablonObj(6,5),
          ],

          towers: [
            //new SablonObj(5,20,undefined,"guard"),
            //new SablonObj(7,20,undefined,"guard"),
            //new SablonObj(9,20,undefined,"cannon")
          ],

          baracks: [
            //new SablonObj(10,16),//10,16
            //new SablonObj(14,20)
          ],

          kuznyas: [
            //new SablonObj(6,15)
          ],

          ogreBases: [
            //new SablonObj(6,10)
          ],

          altars: [
            //new SablonObj(7,10)
          ],

          dragon_roosts: [
            //new SablonObj(7,13)
          ],

          temples: [
            //new SablonObj(7,13)
          ],

          //*/
          //batraks:10,
          /*	
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
		//	*/
        },
      },

      {
        x: 3,
        y: 53,
        reserv: false,
        num: "2",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: 400,
          level: 3,
          attack: true,

          farms: [],

          towers: [],

          baracks: [],

          kuznyas: [],

          ogreBases: [],

          altars: [],

          dragon_roosts: [],

          temples: [],

          //peoples:70,// trebuetsya dla vvedeniya kollichestva zhivih unitov!!!!!!!!
          //batraks:20,
          //dragons:0,
          //transports:5,
          //oil_tankers:3,
          //rizars:10,
          //luchniks:10,
          //mechniks:10,

          /*	
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
		//	*/
        },
      },
    ],
  },
  /*
castome_map_2[25][10]=S;
castome_map_2[35][130]=S;
castome_map_2[25][240]=S;
castome_map_2[200][10]=S;
castome_map_2[200][130]=S;
castome_map_2[200][245]=S;
*/

  //p_dragon_roosts

  {
    type: "castom",
    ii_name: "castome_map_2",
    name: "Qatro 250x250",
    map: castome_map_2,
    size: 65,
    apponents: 1,
    animX: 100,
    reserv: false,
    positions: [
      {
        x: 15,
        y: 25,
        reserv: false,
        num: "1",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,

          farms: [
            //new SablonObj(6,3),new SablonObj(8,1),new SablonObj(10,1),new SablonObj(6,5),
          ],

          towers: [
            //new SablonObj(5,20,undefined,"guard"),
            //new SablonObj(7,20,undefined,"guard"),
            //new SablonObj(9,20,undefined,"cannon")
          ],

          baracks: [
            //new SablonObj(10,16),//10,16
            //new SablonObj(14,20)
          ],

          kuznyas: [
            //new SablonObj(6,15)
          ],

          ogreBases: [
            //new SablonObj(6,10)
          ],

          altars: [
            //new SablonObj(7,10)
          ],

          dragon_roosts: [
            //new SablonObj(7,13)
          ],

          temples: [
            //new SablonObj(7,13)
          ],

          //*/
          //batraks:10,
          /*	
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
		//	*/
        },
      },
      {
        x: 135,
        y: 35,
        reserv: false,
        num: "2",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,
          farms: [],
          towers: [],
          baracks: [],
          kuznyas: [],
          ogreBases: [],
          altars: [],
          dragon_roosts: [],
          temples: [],
        },
      },
      {
        x: 245,
        y: 25,
        reserv: false,
        num: "3",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,
          farms: [],
          towers: [],
          baracks: [],
          kuznyas: [],
          ogreBases: [],
          altars: [],
          dragon_roosts: [],
          temples: [],
        },
      },
      {
        x: 15,
        y: 200,
        reserv: false,
        num: "4",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,
          farms: [],
          towers: [],
          baracks: [],
          kuznyas: [],
          ogreBases: [],
          altars: [],
          dragon_roosts: [],
          temples: [],
        },
      },
      {
        x: 135,
        y: 200,
        reserv: false,
        num: "5",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,
          farms: [],
          towers: [],
          baracks: [],
          kuznyas: [],
          ogreBases: [],
          altars: [],
          dragon_roosts: [],
          temples: [],
        },
      },
      {
        x: 249,
        y: 200,
        reserv: false,
        num: "6",
        master_shablon: false,

        createShablon: {
          flot: true,
          base_cells: false,
          level: 3,
          attack: true,
          farms: [],
          towers: [],
          baracks: [],
          kuznyas: [],
          ogreBases: [],
          altars: [],
          dragon_roosts: [],
          temples: [],
        },
      },
    ],
  },
];

//thank you very much,
//blizzard,
//for the idea,
// for the art
//and
//for my happy youth

let do_global_start = {
  imageToDraw: new Image(),
  imageToDraw_2: new Image(),
  strings: [
    { txt: "Thank you very much", alfa_step: 0.01, alfa: 0, timer: 0 },
    { txt: '"BLIZZARD",', alfa_step: 0.01 * 0.8, alfa: 0, timer: 2 },
    { txt: "for the idea,", alfa_step: 0.01 * 0.8, alfa: 0, timer: 4 },
    { txt: "for the art", alfa_step: 0.01 * 0.8, alfa: 0, timer: 6 },
    { txt: "and", alfa_step: 0.01 * 0.8, alfa: 0, timer: 8 },
    { txt: "for my happy youth.", alfa_step: 0.01 * 0.8, alfa: 0, timer: 10 },
  ],
  in_string: {
    txt: "Press left mouse key",
    alfa_step: 0.05,
    alfa: 0,
    alfa_vector: 0,
    alfa_start: 0,
  },
};
do_global_start.imageToDraw.src = "wc/title_images/first.png";
do_global_start.imageToDraw_2.src = "wc/images/unit_menu_little_liters_4.png";

const title = new Title(1);
