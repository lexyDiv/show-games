const getActiveZone = function () {
  //drawQuatro oil

  ///*
  if (crateZoonMouse.active && !iLoockTo && !player_pro_building) {
    if (obj.x <= 700) {
      crateZoonMouse.distanseX = obj.x - removeX - crateZoonMouse.x;
    } else {
      crateZoonMouse.distanseX = 700 - removeX - crateZoonMouse.x;
    }

    crateZoonMouse.distanseY = obj.y - removeY - crateZoonMouse.y;

    //if(crateZoonMouse.distanseX||crateZoonMouse.distanseY){
    player.selectUnits = [];
    player.selectDragons = [];
    player.selectBuildings = [];
    player.selectIsSweem = [];
    //};

    if (crateZoonMouse.distanseX >= 0) {
      crateZoonMouse.conorX = crateZoonMouse.x;
    } else {
      crateZoonMouse.conorX = crateZoonMouse.x + crateZoonMouse.distanseX;
    }

    if (crateZoonMouse.distanseY >= 0) {
      crateZoonMouse.conorY = crateZoonMouse.y;
    } else {
      crateZoonMouse.conorY = crateZoonMouse.y + crateZoonMouse.distanseY;
    }

    //console.log(crateZoonMouse.conorY);

    //let x=crateZoonMouse.conorX+removeX;
    //let y=crateZoonMouse.conorY+removeY;

    let disX = Math.abs(crateZoonMouse.distanseX);
    let disY = Math.abs(crateZoonMouse.distanseY);

    let vertikal = Math.floor(crateZoonMouse.conorY / 50);
    let horizont = Math.floor(crateZoonMouse.conorX / 50);

    let koofX = Math.floor(disX / 50) + 2;
    let koofY = Math.floor(disY / 50) + 2;

    ////////////////////////////////////////////////////////////////////////////////

    if (disX + disY === 0) {
      if (pausa_click) {
        //console.log("click");
        let ver = vertikal;
        let hor = horizont;

        let unit;

        if (gameFielg[ver][hor].dragoon) {
          unit = gameFielg[ver][hor].dragoon;
        } else if (
          gameFielg[ver][hor].unit &&
          gameFielg[ver][hor].unit.unitStatus === "life"
        ) {
          unit = gameFielg[ver][hor].unit;
        }

        if (
          unit &&
          unit.fatherFraction.control === "player" &&
          !click_to_iden
        ) {
          click_to_iden = { unit: unit, timer: 8 };
        } else if (
          unit &&
          click_to_iden &&
          click_to_iden.unit.persolalNumber === unit.persolalNumber
        ) {
          click_to_iden.active = true;
        }
        //else{click_to_iden=false;};
      }

      if (click_to_iden) {
        return;
      }
    } else {
      click_to_iden = false;
    }

    ///////////////////////////////////////////////////////////////////////////////////

    let vossal = false;

    for (let i = vertikal; i < vertikal + koofY; i++) {
      for (let k = horizont; k < horizont + koofX; k++) {
        if (
          gameFielg[i] &&
          gameFielg[i][k] &&
          !(
            gameFielg[i][k].x > crateZoonMouse.conorX + disX ||
            gameFielg[i][k].x + 50 < crateZoonMouse.conorX ||
            gameFielg[i][k].y > crateZoonMouse.conorY + disY ||
            gameFielg[i][k].y + 50 < crateZoonMouse.conorY
          )
        ) {
          if (
            gameFielg[i][k].vossalObj &&
            !player.selectUnits.length &&
            !vossal &&
            (gameFielg[i][k].vossalObj.neitral ||
              gameFielg[i][k].vossalObj.fatherFraction.persolalNumber ===
                player.persolalNumber)
          ) {
            //console.log("vossalObj");

            vossal = true;

            if (!player.selectBuildings.length) {
              player.selectBuildings.push(gameFielg[i][k].vossalObj);
            }

            //console.log(player.selectUnits);
          }

          if (
            !player.selectBuildings.length &&
            gameFielg[i][k].oil &&
            gameFielg[i][k].unit &&
            gameFielg[i][k].unit.type === "oil_platform" &&
            !player.selectUnits.length &&
            gameFielg[i][k].unit.fatherFraction.control === "player"
          ) {
            player.selectBuildings.push(gameFielg[i][k].unit);
          }

          if (
            !player.selectBuildings.length &&
            gameFielg[i][k].oil &&
            !player.selectUnits.length
          ) {
            player.selectBuildings.push(gameFielg[i][k].oil);
          }

          if (
            gameFielg[i][k].dragoon &&
            gameFielg[i][k].dragoon.fatherFraction.control === "player" &&
            player.selectDragons.indexOf(gameFielg[i][k].dragoon) === -1 &&
            player.selectUnits.length + player.selectDragons.length < 9
          ) {
            player.selectDragons.push(gameFielg[i][k].dragoon);
          }

          if (gameFielg[i][k].unit && gameFielg[i][k].unit.fly) {
            console.log(gameFielg[i][k].unit);
          }

          if (
            gameFielg[i][k].unit &&
            !gameFielg[i][k].unit.fly &&
            gameFielg[i][k].unit.fatherFraction &&
            gameFielg[i][k].unit.fatherFraction.control === "player" &&
            gameFielg[i][k].unit.unitStatus === "life"
          ) {
            if (player.selectUnits.length) {
              player.selectBuildings = [];
            }

            if (
              player.selectUnits.length +
                player.selectDragons.length +
                player.selectIsSweem.length <
              9
            ) {
              if (
                player.selectUnits.indexOf(gameFielg[i][k].unit) === -1 &&
                !gameFielg[i][k].unit.sweeme
              ) {
                player.selectUnits.push(gameFielg[i][k].unit);
              } else if (
                player.selectIsSweem.indexOf(gameFielg[i][k].unit) === -1 &&
                gameFielg[i][k].unit.sweeme
              ) {
                player.selectIsSweem.push(gameFielg[i][k].unit);
              }
            } else {
              break;
            }
          }
        } ////////////////////////////////////////////////
      }
    }

    //console.log(player.selectUnits.length);
  } else {
    crateZoonMouse = {
      x: undefined,
      y: undefined,

      conorX: undefined,
      conorY: undefined,

      distanseX: undefined,
      distanseY: undefined,

      active: false,
    };
  }

  if (
    player.selectUnits.length ||
    player.selectDragons.length ||
    player.selectIsSweem.length
  ) {
    player.selectBuildings = [];
  }

  //console.log(player.selectBuildings.length);
  //console.log(player.selectIsSweem.length) drawQuatro
  //*/
};
