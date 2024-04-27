/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const water_initialization = function () {
  let contur = [];

  for (let ver = 0; ver < gameFielg.length; ver++) {
    for (let hor = 0; hor < gameFielg[ver].length; hor++) {
      if (gameFielg[ver][hor].type === "water") {
        gameFielg[ver][hor].sloy = 3;

        let ran = Math.floor(Math.random() * 5);

        gameFielg[ver][hor].free = false;
        gameFielg[ver][hor].water = true;

        gameFielg[ver][hor].imageToDraw = ocean;

        gameFielg[ver][hor].animX = Math.floor(Math.random() * 8) * 100;
        gameFielg[ver][hor].animY = 0; // Math.floor(Math.random()*2)*100;;

        gameFielg[ver][hor].animX_2 = Math.floor(Math.random() * 8) * 100;
        gameFielg[ver][hor].animY_2 = 0; // Math.floor(Math.random()*2)*100;;

        gameFielg[ver][hor].freeWater = true;
        // gameFielg[ver][hor].gabX=80+ran;
        // gameFielg[ver][hor].gabY=80+ran;

        gameFielg[ver][hor].gabarit = 80 + ran;

        gameFielg[ver][hor].vector = Math.floor(Math.random() * 2);

        for (let i = ver - 1; i <= ver + 1; i++) {
          for (let k = hor - 1; k <= hor + 1; k++) {
            if (
              gameFielg[i]
              && gameFielg[i][k]
              && gameFielg[i][k].type !== "water"
            ) {
              gameFielg[i][k].water_line = true;

              gameFielg[i][k].sloy = 1;
              gameFielg[i][k].imageToDraw = pesok;

              gameFielg[i][k].stopBuild = true;
              contur.push(gameFielg[i][k]);

              gameFielg[ver][hor].priboy_line = true;

              gameFielg[ver][hor].sloy = 2;
              // console.log("water_line");
              gameFielg[ver][hor].imageToDraw = ocean;
            }
          }
        }
      }
    }
  }

  return contur;
};
