/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const fractionsCrate = function () {
  if (!title.style && kick_start.type === 'castom') {
    gameFielgMap = kick_start.map;
    level = kick_start.map_name;

    map_initialization();

    check_seas();
    check_continents();

    for (let i = 0; i < kick_start.fractions.length; i++) {
      const f = kick_start.fractions[i];

      const fr = new Fraction(
        f.name,
        f.control,
        [
          new Unit(1, f.x, f.y, 2, f.name, f.nation),
          // new Unit( "rizar",f.x,f.y+1,5,f.name,f.nation),
          // new Unit(3 ,f.x,f.y+2,2,f.name,f.nation),
        ],
        f.union,
        i,
        f.nation,
      );

      fr.master_shablon = f.master_shablon;
      fr.createShablon = {}; //= f.createShablon;

      fr.createShablon = JSON.parse(JSON.stringify(f.createShablon));

      fr.gold = 1500000;
      fr.wood = 1500000;
      fr.oil = 1000;

      fractions.push(fr);
    }
  } else {
    create_level();
  }

  /*
  fractions.push(new Fraction("redOrcs","player",[

  new Unit(1 ,15,20,2,"redOrcs","orc"),

  ],1,1,"orc"));
  */

  /*
  fractions[0].peoples.push(new Unit("oil_tanker",10,61,4,"redOrcs","orc"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[61][10];
  gameFielg[60][10].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61][10].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[60][11].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61][11].unit=fractions[0].peoples[fractions[0].peoples.length-1];

  fractions[0].peoples.push(new Unit("transport",10,61+2,4,"redOrcs","orc"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[61+2][10];
  gameFielg[60+2][10].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61+2][10].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[60+2][11].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61+2][11].unit=fractions[0].peoples[fractions[0].peoples.length-1];

  fractions[0].peoples.push(new Unit("dragoon",10+4,61+4,4,"redOrcs","orc"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[61+4][10+4];
  gameFielg[60+4][10+4].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61+4][10+4].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[60+4][11+4].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61+4][11+4].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];

  // */

  /* distroer
  fractions[0].peoples.push(new Unit("distroer",20,36,2,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[36][20];
  gameFielg[36][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[36][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  // */

  /* transport
  fractions[0].peoples.push(new Unit("transport",20,36,2,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[36][20];
  gameFielg[36][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[36][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  // */

  for (let i = 100; i < 130; i += 2) {
    /* transport
  fractions[0].peoples.push(new Unit("transport",20+i,36,0.5,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[36][20+i];
  gameFielg[36][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[36][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  // */
    /* distroer
  fractions[0].peoples.push(new Unit("linkor",20+i,71,0.5,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[71][20+i];
  gameFielg[71][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[70][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[70][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[71][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];

  //fractions[0].peoples[fractions[0].peoples.length-1].sea=1;
  // */
  }

  /*
  for(let i=0;i<18;i+=2){ // tanker

  fractions[0].peoples.push(new Unit("oil_tanker",20+i,36,0.5,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[36][20+i];
  gameFielg[36][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][20+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[36][21+i].unit=fractions[0].peoples[fractions[0].peoples.length-1];

  };
  */

  /*
  let unit=new Unit("rizar",50,45,4,"h_blue","h");

      unit.cell=gameFielg[45][50];
              //fractions[0].peoples[fractions[0].peoples.length-1].hold_position=true;
          gameFielg[45][50].unit=unit;
          gameFielg[45][50].free=false;

  fractions[0].peoples.push(unit);

   unit=new Unit(2,51,45,4,"h_blue","h");

      unit.cell=gameFielg[45][51];
              //fractions[0].peoples[fractions[0].peoples.length-1].hold_position=true;
          gameFielg[45][51].unit=unit;
          gameFielg[45][51].free=false;

  fractions[0].peoples.push(unit);
  // */

  /* tolpa
  for(let i=80;i<95;i++){

      for(let k=0;k<gameFielg.length;k++){

          //fractions[0].peoples.push(new Unit("ballista",k,i,1,"redOrcs"));

  let ran=Math.floor(Math.random()*3);

  ran=1;

  if(!ran){
          fractions[0].peoples.push(new Unit(3,k,i,2.5,"redOrcs"));
  }
  else if(ran===1){

          fractions[0].peoples.push(new Unit("rizar",k,i,5,"redOrcs"));
  }
  else {
      fractions[0].peoples.push(new Unit(2,k,i,3,"redOrcs"));
  };

          fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[i][k];
              //fractions[0].peoples[fractions[0].peoples.length-1].hold_position=true;
          gameFielg[i][k].unit=fractions[0].peoples[fractions[0].peoples.length-1];
          gameFielg[i][k].free=false;

      };

  };

  //console.log(fractions[0].peoples.length)

  /*
  fractions[0].peoples.push(new Unit("dragoon",10,61,4,"h_blue"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[61][10];
  gameFielg[60][10].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61][10].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[60][11].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[61][11].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];

  fractions[1].peoples.push(new Unit("dragoon",10+5,11+5,4,"blackOrcs"));
  fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[11+5][10+5];
  gameFielg[10+5][10+5].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[11+5][10+5].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[10+5][11+5].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[11+5][11+5].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  */

  //* /

  /*
  //dracon
  fractions[0].peoples.push(new Unit("dragoon",10+5,11+5,4,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[11+5][10+5];
  gameFielg[10+5][10+5].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[11+5][10+5].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[10+5][11+5].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[11+5][11+5].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  / */
  //* /

  /* drcony
  for(let i=5;i<30;i+=2){

  fractions[0].peoples.push(new Unit("dragoon",i,21,4,"redOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[21][i];
  gameFielg[20][i].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[21][i].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[20][i+1].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[21][i+1].dragoon=fractions[0].peoples[fractions[0].peoples.length-1];

  };

  // */

  // shahts

  /* transport
  fractions[0].peoples.push(new Unit("transport",20,36+20,2,"blackOrcs"));
  fractions[0].peoples[fractions[0].peoples.length-1].cell=gameFielg[36+20][20];
  gameFielg[36+20][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35+20][20].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[35+20][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  gameFielg[36+20][21].unit=fractions[0].peoples[fractions[0].peoples.length-1];
  // */

  /* transport
  fractions[1].peoples.push(new Unit("transport",20-3-7,36+4,2,"blackOrcs"));
  fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[36+4][20-3-7];
  gameFielg[36+4][20-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35+4][20-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35+4][21-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[36+4][21-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  // */

  /* transport
  fractions[1].peoples.push(new Unit("transport",20-3-7,36+2,2,"blackOrcs"));
  fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[36+2][20-3-7];
  gameFielg[36+2][20-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35+2][20-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[35+2][21-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[36+2][21-3-7].unit=fractions[1].peoples[fractions[1].peoples.length-1];
  // */

  /* dragoon
  fractions[1].peoples.push(new Unit("dragoon",10,11+10,4,"blackOrcs"));
  fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[11+10][10];
  gameFielg[10+10][10].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[11+10][10].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[10+10][11].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  gameFielg[11+10][11].dragoon=fractions[1].peoples[fractions[1].peoples.length-1];
  // */
  /// ////////////////////////////////////////////////////////////////////////////////////////
  freeLandObjects
    .push();

  for (let i = 0; i < freeLandObjects.length; i++) {
    // if(freeLandObjects[i].type!=="oil"){
    freeLandObjects[i].vossal_contacts_moveVectorsInitialization(
      freeLandObjects[i],
    );
    // };
  }

  /// *

  /*
   for(let i=10;i<55;i++){

      for(let k=30;k<80;k++){

          //fractions[0].peoples.push(new Unit("ballista",k,i,1,"redOrcs"));
          //fractions[0].peoples.push(new Unit(3,k,i,2.5,"redOrcs"));
          //fractions[0].peoples.push(new Unit(2,k,i,3,"redOrcs"));

      if(gameFielg[i][k].free){

          let u=new Unit("rizar",k,i,5,"blackOrcs");

          fractions[1].peoples.push(u);
          fractions[1].freeRizzars.push(u);

          fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[i][k];

          gameFielg[i][k].unit=fractions[1].peoples[fractions[1].peoples.length-1];
          gameFielg[i][k].free=false;
      };

      };

  };

  console.log(fractions[1].freeRizzars.length)
  // */

  //* /

  /*
  for(let i=120;i<140;i++){

      for(let k=0;k<140;k++){

          fractions[1].peoples.push(new Unit(1,k,i,2,"blackOrcs"));
          //fractions[1].freeBatraks.push(fractions[1].peoples[fractions[1].peoples.length-1]);
          fractions[1].batraks.push(fractions[1].peoples[fractions[1].peoples.length-1]);
          fractions[1].peoples[fractions[1].peoples.length-1].cell=gameFielg[i][k];
          gameFielg[i][k].unit=fractions[1].peoples[fractions[1].peoples.length-1];
          gameFielg[i][k].free=false;
      };

  };
  // */

  /// ///////////////////////////////////////////////////////////////////////////////////
  // for(let i=0;i<fractions[fractions.length-1].peoples.length;i++){

  // fractions[fractions.length-1].peoples[i].fatherFraction=fractions[fractions.length-1];

  // };

  for (let i = 0; i < fractions.length; i++) {
    fractions[i].timer = Math.floor(i * (10 / fractions.length));

    // console.log(fractions[i].timer);

    if (fractions[i].bld) {
      for (let j = 0; j < fractions[i].bld.length; j++) {
        const bld = fractions[i].bld[j];

        // type,horizont,vertikal,gold,fatherFraction,nation

        const b = new LandObj(
          bld.type,
          bld.h,
          bld.v,
          undefined,
          fractions[i],
          fractions[i].nation,
        );

        b.vossal_contacts_moveVectorsInitialization(b);
        b.buildready = b.hpfull;
        b.iComplite = true;

        fractions[i].buildings.push(b);

        if (b.type === 2) {
          fractions[i].townHolls.push(b);
        } else if (b.type === 'temple') {
          fractions[i].temples.push(b);
        } else if (b.type === 'dragon_roost') {
          fractions[i].dragon_roosts.push(b);
        } else if (b.type === 'foundry') {
          fractions[i].foundrys.push(b);
        } else if (b.type === 'oil_platform') {
          fractions[i].oil_platforms.push(b);
        } else if (b.type === 'port') {
          fractions[i].ports.push(b);
        } else if (b.type === 'oil_Ref') {
          fractions[i].oil_Refs.push(b);
        } else if (b.type === 'lesopilka') {
          fractions[i].lesopilkas.push(b);
        } else if (b.type === 5) {
          fractions[i].baracks.push(b);
        } else if (b.type === 'altar') {
          fractions[i].altars.push(b);
        } else if (b.type === 'ogreBase') {
          fractions[i].ogreBases.push(b);
        } else if (b.type === 'kuznya') {
          fractions[i].kuznyas.push(b);
        } else if (b.type === 4) {
          fractions[i].lesopilkas.push(b);
        } else if (b.type === 'tower') {
          fractions[i].towers.push(b);
          b.upgrade = bld.upgrade;
        } else if (b.type === 3) {
          fractions[i].farms.push(b);
          b.upgrade = bld.upgrade;
          fractions[i].maxUnits += 15;
        }
      }
    }

    for (let k = 0; k < fractions[i].peoples.length; k++) {
      // fractions[i].peoples[k].fatherFraction=fractions[i];
      const unit = fractions[i].peoples[k];

      // fractions[i].peoples[k].initialization=true;

      if (unit.gabarit === 50 && !unit.fly) {
        unit.cell = gameFielg[unit.vertikal][unit.horizont];

        // console.log(unit.cell)
        // unit.horizont=unit.cell.horizont;
        // unit.vertikal=unit.cell.vertikal;
        unit.x = unit.cell.x;
        unit.y = unit.cell.y;
        unit.cell.unit = unit;
        unit.cell.free = false;
        unit.born_cell = unit.cell;
        unit.hotCell = unit.cell;

        // this.animY=0;
        // unit.iStand=true;
        // unit.moveVektor=outCell.moveVektorOut;
        // unit.target=0;
        unit.fatherFraction = fractions[i];

        // console.log(unit.fatherFraction.union)

        unit.initialization = true;

        // unit.cellUpdate();

        unit.damagePointX = unit.cell.x + 25;
        unit.damagePointY = unit.cell.y + 25;
      } else if (unit.fly) {
        if (unit.type === 'dragoon') {
          // console.log(unit.cell)

          //*
          unit.fatherFraction = fractions[i];
          unit.cell = gameFielg[unit.vertikal][unit.horizont];

          gameFielg[unit.vertikal][unit.horizont].dragoon = unit;
          gameFielg[unit.vertikal][unit.horizont + 1].dragoon = unit;
          gameFielg[unit.vertikal - 1][unit.horizont].dragoon = unit;
          gameFielg[unit.vertikal - 1][unit.horizont + 1].dragoon = unit;

          unit.initialization = true;

          unit.damagePointX = unit.cell.x + 50;
          unit.damagePointY = unit.cell.y;

          // console.log(unit.cell.unit)
          //* /
        }
      } else if (unit.sweeme) {
        unit.fatherFraction = fractions[i];
        unit.cell = gameFielg[unit.vertikal][unit.horizont];

        gameFielg[unit.vertikal][unit.horizont].unit = unit;
        gameFielg[unit.vertikal - 1][unit.horizont].unit = unit;
        gameFielg[unit.vertikal - 1][unit.horizont + 1].unit = unit;
        gameFielg[unit.vertikal][unit.horizont + 1].unit = unit;

        unit.initialization = true;
      }

      allUnits++;
      fractions[i].peoples[k].persolalNumber = allUnits;

      // console.log(fractions[i].peoples[k].fatherFraction);
      // fractions[i].peoples[k].cellUpdate();

      if (fractions[i].control === 'comp') {
        if (fractions[i].peoples[k].type === 1) {
          fractions[i].freeBatraks.push(fractions[i].peoples[k]);
        } else if (fractions[i].peoples[k].type === 'dragoon') {
          fractions[i].freeDragons.push(fractions[i].peoples[k]);
        }
      }
    }
  }

  /// ////////////////////////////////////////// player

  for (let i = 0; i < fractions.length; i++) {
    for (let k = 0; k < fractions[i].peoples.length; k++) {
      fractions[i].peoples[k].cellUpdate();
    }
  }

  if (!test && fractions.length) {
    // console.log("first");
    // player=fractions[0];

    // test=1;

    for (let i = 0; i < fractions.length; i++) {
      if (fractions[i].control === 'player') {
        player = fractions[i];

        // let ver=Math.floor((cenY-removeY)/50);
        // let hor=Math.floor((cenX-removeX)/50);

        if (fractions[i].peoples.length) {
          removeX = -player.peoples[0].x + 325;
          removeY = -player.peoples[0].y + 325;
        }

        break;
      }
    }

    for (let i = 0; i < gameFielg.length; i++) {
      for (let k = 0; k < gameFielg[i].length; k++) {
        if (
          gameFielg[i][k].unit
          && gameFielg[i][k].unit.unitStatus === 'life'
        ) {
          gameFielg[i][k].unit.cellUpdate();
        }
      }
    }
  }

  // console.log(fractions[1].freeBatraks.length);
};
