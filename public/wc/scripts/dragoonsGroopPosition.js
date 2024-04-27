/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const getDragonsGroopPosition = function () {
  const mass = player.selectDragons;

  let vertikal = Math.floor((obj.y - removeY) / 50);
  let horizont = Math.floor((obj.x - removeX) / 50);

  let target = false;

  if (gameFielg[vertikal][horizont].vossalObj) {
    target = gameFielg[vertikal][horizont].vossalObj;
  }

  if (gameFielg[vertikal][horizont].unit) {
    target = gameFielg[vertikal][horizont].unit;
  }

  if (
    gameFielg[vertikal][horizont].dragoon
    // &&gameFielg[vertikal][horizont].dragoon.fatherFraction.union!==player.union
  ) {
    target = gameFielg[vertikal][horizont].dragoon;
  }

  // console.log(target);

  if (
    !target
    || target.neitral
    || target.fatherFraction.union === player.union
  ) {
    const position = [];

    if (mass.length === 1) {
      if (vertikal < mass[0].vertikal && gameFielg[vertikal + 1]) {
        vertikal += 1;
      }
      if (horizont > mass[0].horizont && gameFielg[vertikal][horizont - 1]) {
        horizont -= 1;
      }

      position.push(gameFielg[vertikal][horizont]);
      // mass[0].finish=gameFielg[vertikal][horizont];

      // getWay(mass[0],1000,1500);

      // console.log(mass[i])

      if (player.activeUnits.indexOf(mass[0]) === -1) {
        player.activeUnits.push(mass[0]);

        // console.log(mass[i]);
      }
    } else {
      let minV = null;
      let maxV = null;

      let minH = null;
      let maxH = null;

      for (let i = 0; i < mass.length; i++) {
        if (minV === null || mass[i].vertikal < minV) {
          minV = mass[i].vertikal;
        }
        if (maxV === null || mass[i].vertikal > maxV) {
          maxV = mass[i].vertikal;
        }

        if (minH === null || mass[i].horizont < minH) {
          minH = mass[i].horizont;
        }
        if (maxH === null || mass[i].horizont > maxH) {
          maxH = mass[i].horizont;
        }
      }

      const difV = maxV - minV;
      const difH = maxH - minH;

      let positionType;

      if (difH > difV) {
        positionType = 'hor';
      } else {
        positionType = 'ver';
      }

      // console.log(positionType);
      // console.log("difH : "+difH)
      // console.log(horizont);

      // positionType="ver";
      // if(vertikal===0){vertikal=1;};

      if (positionType === 'hor') {
        if (vertikal === 0) {
          vertikal = 1;
        }
        if (horizont > gameFielg[0].length - 1 - mass.length + 1) {
          horizont = gameFielg[0].length - 1 - mass.length + 1;
        }
        if (horizont < mass.length) {
          horizont = mass.length;
        }

        for (let i = mass.length; i > 0; i--) {
          position.push(gameFielg[vertikal][horizont - i + position.length]);
        }
      } else if (positionType === 'ver') {
        if (vertikal > gameFielg.length - 1 - mass.length) {
          vertikal = gameFielg.length - 1 - mass.length;
        }
        if (vertikal < mass.length - 1) {
          vertikal = mass.length - 1;
        }

        if (horizont > gameFielg[0][0].length - 1 - 1) {
          horizont = gameFielg[0][0].length - 1 - 1;
        }
        // if(horizont<mass.length){horizont=mass.length;};

        for (let i = mass.length - 1; i >= 0; i--) {
          position.push(
            gameFielg[vertikal - i + position.length + 1][horizont],
          );
        }
      }
    }

    let sound;

    for (let i = 0; i < mass.length; i++) {
      if (!mass[i].voice && !sound) {
        sound = true;

        mass[i].voice = true;

        select_sound(mass[i], 'go_sound');
      }

      mass[i].clickSave = new ClickSave(0, position[i]); //! !!!!!!!!!!!!!!!!!!
      mass[i].way = [];

      if (player.activeUnits.indexOf(mass[i]) === -1) {
        player.activeUnits.push(mass[i]);

        // console.log(mass[i]);
      }
    }
  } else {
    let sound;

    for (let i = 0; i < mass.length; i++) {
      mass[i].clickSave = new ClickSave(target, 0); //! !!!!!!!!!!!!!!!!!!
      mass[i].way = [];

      if (!mass[i].voice && !sound) {
        sound = true;

        mass[i].voice = true;

        select_sound(mass[i], 'go_sound');
      }

      if (player.activeUnits.indexOf(mass[i]) === -1) {
        player.activeUnits.push(mass[i]);

        // console.log(mass[i]);
      }
    }
  }
};
