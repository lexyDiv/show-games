/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const global_obnul = function () {
  // timer_do_start title

  win_or_loose = false;
  // pausa=0;

  mem_active = false;
  mem_hz = false;

  mem = [[], [], [], [], [], [], [], [], []];

  click_to_iden = false;

  player_pro_building = false;
  key = false;

  // x=false;
  // y=false; gameFielg

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

  // timer_do_start=0;
  wrm = [];
  test = 0;
  temp = 30;
  y_n_magick = false;
  sounds = [];
  sounds_fight = [];
  sounds_fly = [];

  // global_start;

  in_pausa_menu_obj_in = [];

  /// ///////////////////////////////////////// zast menu v urvne
  zst_obj = {
    x: 350, y: 350, gabarit: 500, alfa: 0, imageToDraw: zst,
  };
  /// ////////////////////////////////////////

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

  if (level === 'castome_map_1') {
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
