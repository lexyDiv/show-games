/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const getSweemeGroopPosition = function () {
  const mass = [];

  for (let i = 0; i < player.selectIsSweem.length; i++) {
    player.selectIsSweem.terpenie = 0;

    mass.push(player.selectIsSweem[i]);

    // player.selectIsSweem[i].drawQuatro=true;
  }

  const vertikal = Math.floor((obj.y - removeY) / 50);
  const horizont = Math.floor((obj.x - removeX) / 50);

  /*
  oil_tanker
  for(let i=0;i<mass.length;i++){

  mass[i].clickSave=new ClickSave(0,gameFielg[vertikal][horizont]);

  if(!mass[i].active){
  mass[i].fatherFraction.activeUnits.push(mass[i]); mass[i].active=true;

  //mass[i].spe=good_2[i];
  //mass[i].hold_sweeme=1;
  mass[i].way=[];
  mass[i].hold_position="g";
  mass[i].goGroop_sweeme=true;

  };
  };

  return;

  */

  let sound;

  const good = get_good_sweeme_cell(vertikal, horizont, mass);

  for (let i = 0; i < mass.length; i++) {
    if (
      mass[i].type === 'distroer'
        || mass[i].type === 'linkor'
        || mass[i].type === 'turtle'
    ) {
      let unit;

      if (
        mass[i].iCanGetFly
          && gameFielg[vertikal][horizont].dragoon
          && gameFielg[vertikal][horizont].dragoon.fatherFraction.union
            !== mass[i].fatherFraction.union
          && gameFielg[vertikal][horizont].dragoon.hp > 0
      ) {
        unit = gameFielg[vertikal][horizont].dragoon;
      } else if (
        gameFielg[vertikal][horizont].unit
          && !gameFielg[vertikal][horizont].unit.neitral
          && gameFielg[vertikal][horizont].unit.fatherFraction.union
            !== mass[i].fatherFraction.union
          && gameFielg[vertikal][horizont].unit.hp > 0
      ) {
        unit = gameFielg[vertikal][horizont].unit;
      } else if (
        gameFielg[vertikal][horizont].vossalObj
          && !gameFielg[vertikal][horizont].vossalObj.neitral
          && gameFielg[vertikal][horizont].vossalObj.fatherFraction.union
            !== mass[i].fatherFraction.union
          && gameFielg[vertikal][horizont].vossalObj.hp > 0
      ) {
        unit = gameFielg[vertikal][horizont].vossalObj;
      }

      /// /////////////////////////////////////////////////// SOUND
      // if(shablon[i][k].type===1){

      /// *
      if (!sound) {
        if (!mass[i].voice) {
          mass[i].voice = true;

          select_sound(mass[i], 'go_sound');
          sound = true;
        }
      }
      //* /

      // };
      /// ///////////////////////////////////////////////////////

      if (unit) {
        mass[i].clickSave = new ClickSave(unit, 0);

        if (player.activeUnits.indexOf(mass[i]) === -1) {
          player.activeUnits.push(mass[i]);
        }

        // console.log("/////////////////////");
        mass.splice(i, 1);
        i--;
      }
    }
  }

  if (good.length) {
    const good_2 = [];

    for (let i = good[0].vertikal - 10; i <= good[0].vertikal + 10; i++) {
      for (let k = good[0].horizont - 10; k <= good[0].horizont + 10; k++) {
        if (gameFielg[i] && gameFielg[i][k] && gameFielg[i][k].good) {
          good_2.push(gameFielg[i][k]);
          gameFielg[i][k].good = false;
        }
      }
    }

    // console.log(good_2);
    // console.log("!!!!!!!!!!!!");

    for (let i = 0; i < good_2.length; i++) {
      if (mass[i]) {
        if (
          mass[i].type !== 'transport'
            && mass[i].type !== 'distroer'
            && mass[i].type !== 'linkor'
            && mass[i].type !== 'turtle'
            && gameFielg[vertikal][horizont].vossalObj
        ) {
          /// /////////////////////////////////////////////////// SOUND
          // if(shablon[i][k].type===1){

          /// *
          if (!sound) {
            if (!mass[i].voice) {
              mass[i].voice = true;

              select_sound(mass[i], 'go_sound');
              sound = true;
            }
          }
          //* /

          // };
          /// ///////////////////////////////////////////////////////

          mass[i].clickSave = new ClickSave(
            gameFielg[vertikal][horizont].vossalObj,
            0,
          );

          if (player.activeUnits.indexOf(mass[i]) === -1) {
            player.activeUnits.push(mass[i]);
          }

          // console.log("go");
        } else if (
          mass[i].type !== 'transport'
            && mass[i].type !== 'distroer'
            && mass[i].type !== 'linkor'
            && mass[i].type !== 'turtle'
            && gameFielg[vertikal][horizont].unit
            && gameFielg[vertikal][horizont].unit.persolalNumber
              !== mass[i].persolalNumber
        ) {
          mass[i].clickSave = new ClickSave(
            gameFielg[vertikal][horizont].unit,
            0,
          );

          if (player.activeUnits.indexOf(mass[i]) === -1) {
            player.activeUnits.push(mass[i]);
          }

          // console.log("go");
        } else if (
          !(
            mass[i].landing
              && gameFielg[vertikal][horizont].unit
              && gameFielg[vertikal][horizont].unit.persolalNumber
                === mass[i].persolalNumber
          )
        ) {
          /// /////////////////////////////////////////////////// SOUND
          // if(shablon[i][k].type===1){

          /// *
          if (!sound) {
            if (!mass[i].voice) {
              mass[i].voice = true;

              select_sound(mass[i], 'go_sound');
              sound = true;
            }
          }
          //* /

          // };
          /// ///////////////////////////////////////////////////////

          mass[i].clickSave = new ClickSave(0, good_2[i]);
          mass[i].spe = good_2[i];
          // mass[i].hold_sweeme=1;
          mass[i].way = [];
          mass[i].hold_position = globalTimer;
          mass[i].goGroop_sweeme = true;
          // console.log(mass[i].persolalNumber);

          /// *
          if (player.activeUnits.indexOf(mass[i]) === -1) {
            player.activeUnits.push(mass[i]);
          }
          //* /
          // console.log(mass.length);
        }
      }
    }
  } else if (!gameFielg[vertikal][horizont].water) {
    for (let i = 0; i < mass.length; i++) {
      // if(
      //! mass[i].landing
      // &&gameFielg[vertikal][horizont].unit
      // &&gameFielg[vertikal][horizont].unit.persolalNumber===mass[i].persolalNumber

      // ){

      /// /////////////////////////////////////////////////// SOUND
      // if(shablon[i][k].type===1){

      /// *
      if (!sound) {
        if (!mass[i].voice) {
          mass[i].voice = true;

          select_sound(mass[i], 'go_sound');
          sound = true;
        }
      }
      //* /

      // };
      /// ///////////////////////////////////////////////////////

      // console.log("ok")

      mass[i].clickSave = new ClickSave(0, gameFielg[vertikal][horizont]);

      if (player.activeUnits.indexOf(mass[i]) === -1) {
        player.activeUnits.push(mass[i]);
      }

      // };
    }
  }

  if (mass[0].type === 'oil_tanker' && !mass[0].voice) {
    /// /////////////////////////////////////////////////// SOUND
    // if(shablon[i][k].type===1){

    /// *

    mass[0].voice = true;

    select_sound(mass[0], 'go_sound');

    //* /

    // };
    /// ///////////////////////////////////////////////////////
  }
};
