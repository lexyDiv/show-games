/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

const getMyGroupPosition = function () {
  /// *

  // hold_position drawQuatro
  // console.log(obj.cellObj.vertikal)
  let sound = false;

  if (
  // player.selectUnits.length>1&&
    !obj.cell.unit
      && !obj.cell.vossalObj
      && !obj.cell.dragoon
  ) {
    groupe = false;
    // console.log(groupe);

    let vertMin;
    let vertMax;

    let horMin;
    let horMax;

    for (let i = 0; i < player.selectUnits.length; i++) {
      if (!i) {
        vertMin = player.selectUnits[i].vertikal;
        vertMax = player.selectUnits[i].vertikal;

        horMin = player.selectUnits[i].horizont;
        horMax = player.selectUnits[i].horizont;
      } else {
        if (player.selectUnits[i].vertikal < vertMin) {
          vertMin = player.selectUnits[i].vertikal;
        }
        if (player.selectUnits[i].vertikal > vertMax) {
          vertMax = player.selectUnits[i].vertikal;
        }

        if (player.selectUnits[i].horizont < horMin) {
          horMin = player.selectUnits[i].horizont;
        }
        if (player.selectUnits[i].horizont > horMax) {
          horMax = player.selectUnits[i].horizont;
        }
      }
    }

    let midVert = Math.floor(vertMin + (vertMax - vertMin) / 2);
    let midHor = Math.floor(horMin + (horMax - horMin) / 2);

    if (midVert === 0) {
      midVert++;
    }
    if (midHor === 0) {
      midHor++;
    }

    let basickVektorPosition;

    if (vertMax - vertMin > horMax - horMin) {
      basickVektorPosition = 'vertikal';
    } else if (vertMax - vertMin === horMax - horMin) {
      basickVektorPosition = 'qatro';
    } else {
      basickVektorPosition = 'horizont';
    }

    // console.log(midVert+" vert "+midHor+" hor");
    // console.log(basickVektorPosition);
    let groupPosition;

    if (gameFielg[midVert + 1] && gameFielg[midVert + 1][midHor - 1]) {
      groupPosition = [
        [
          gameFielg[midVert - 1][midHor - 1],
          gameFielg[midVert - 1][midHor],
          gameFielg[midVert - 1][midHor + 1],
        ],
        [
          gameFielg[midVert][midHor - 1],
          gameFielg[midVert][midHor],
          gameFielg[midVert][midHor + 1],
        ],
        [
          gameFielg[midVert + 1][midHor - 1],
          gameFielg[midVert + 1][midHor],
          gameFielg[midVert + 1][midHor + 1],
        ],
      ];
    } else {
      groupPosition = [
        [
          gameFielg[midVert - 1][midHor - 1],
          gameFielg[midVert - 1][midHor],
          gameFielg[midVert - 1][midHor + 1],
        ],
        [
          gameFielg[midVert][midHor - 1],
          gameFielg[midVert][midHor],
          gameFielg[midVert][midHor + 1],
        ],
        [
          gameFielg[midVert][midHor],
          gameFielg[midVert][midHor],
          gameFielg[midVert][midHor],
        ],
      ];
    }

    if (!groupe) {
      // console.log("ok");

      shablon = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      for (let i = 0; i < player.selectUnits.length; i++) {
        let min = [];

        for (let k = 0; k < groupPosition.length; k++) {
          for (let j = 0; j < groupPosition[k].length; j++) {
            if (groupPosition[k] && groupPosition[k][j]) {
              const a = groupPosition[k][j].vertikal - player.selectUnits[i].vertikal;
              const b = groupPosition[k][j].horizont - player.selectUnits[i].horizont;

              const c = Math.sqrt(a * a + b * b);

              if (!min.length && !shablon[k][j]) {
                min = [k, j, c];
              } else if (c < min[2] && !shablon[k][j]) {
                min = [k, j, c];
              }

              if (
                k === groupPosition.length - 1
                  && j === groupPosition[k].length - 1
              ) {
                shablon[min[0]][min[1]] = player.selectUnits[i];
              }
            } else if (player.selectUnits.length && player.selectUnits[i]) {
              shablon[min[0]][min[1]] = player.selectUnits[i];
            }
            //
          }
        }
      }
    }

    const groupCentrCell = obj.cell;

    let groupPositionOrg = [];

    if (
      groupCentrCell.vertikal !== 0
        && groupCentrCell.horizont !== 0
        && groupCentrCell.vertikal !== gameFielg.length - 1
        && groupCentrCell.horizont !== gameFielg[0].length - 1
    ) {
      groupPositionOrg = [
        [
          gameFielg[groupCentrCell.vertikal - 1][groupCentrCell.horizont - 1],
          gameFielg[groupCentrCell.vertikal - 1][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal - 1][groupCentrCell.horizont + 1],
        ],
        [
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont - 1],
          groupCentrCell,
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont + 1],
        ],
        [
          gameFielg[groupCentrCell.vertikal + 1][groupCentrCell.horizont - 1],
          gameFielg[groupCentrCell.vertikal + 1][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal + 1][groupCentrCell.horizont + 1],
        ],
      ];
    } else {
      groupPositionOrg = [
        [
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
        ],
        [
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
          groupCentrCell,
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
        ],
        [
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
          gameFielg[groupCentrCell.vertikal][groupCentrCell.horizont],
        ],
      ];
    }

    for (let i = 0; i < shablon.length; i++) {
      for (let k = 0; k < shablon[i].length; k++) {
        if (shablon[i][k]) {
          // shablon[i][k].clickFinish=groupPositionOrg[i][k];
          /// ///////////////////////////////

          if (
            shablon[i][k].iFight
              || shablon[i][k].target
              || shablon[i][k].handTarget
              || shablon[i][k].iDoTakt !== 0
          ) {
            if (
              shablon[i][k].type !== 1
                || (shablon[i][k].type === 1
                  && shablon[i][k].cell
                  && shablon[i][k].waitTime === 30)
            ) {
              shablon[i][k].clickSave = new ClickSave(0, obj.cell); //! !!!!!!!!!!!!!!!!!!
              shablon[i][k].way = [];
              // shablon[i][k].hold_position=false;
              // console.log("here 1")
              // menu_unit_for_update.clickSave=new ClickSave(obj,0);

              // console.log("here 1");// esly zanyat otrvat clik bez handTarget
              /// /////////////////////////////////////////////////// SOUND

              if (
                !sound
                  && shablon[i][k]
                  && shablon[i][k].cell
                  && shablon[i][k].hp > 0
              ) {
                if (
                  !shablon[i][k].voice
                    && !obj.cell.water
                    && obj.cell.continent === shablon[i][k].cell.continent
                ) {
                  shablon[i][k].voice = true;

                  select_sound(shablon[i][k], 'go_sound');

                  sound = true;
                }
              }

              /// ///////////////////////////////////////////////////////
            }
          } else if (
            shablon[i][k].cell
                && shablon[i][k].cell.continent === obj.cell.continent
          ) {
            // console.log("ok");

            shablon[i][k].way = [];

            if (player.selectUnits.length === 1) {
              if (
                shablon[i][k].type !== 1
                    || (shablon[i][k].type === 1
                      && shablon[i][k].cell
                      && shablon[i][k].waitTime === 30)
              ) {
                shablon[i][k].finish = obj.cell;
                shablon[i][k].handCell = obj.cell;
                shablon[i][k].clickSave = false;
                // shablon[i][k].hold_position=false;
                shablon[i][k].stopGetTarget = 50;

                // console.log("here 2")

                if (
                  shablon[i][k].fatherFraction.activeUnits.indexOf(
                    shablon[i][k],
                  ) === -1
                ) {
                  shablon[i][k].fatherFraction.activeUnits.push(
                    shablon[i][k],
                  );
                }

                // console.log("here 2");//esly odin bez handTarget
                /*
  ////////////////////////////////////////////////////// SOUND
  if(!sound&&shablon[i][k]&&shablon[i][k].cell&&shablon[i][k].hp>0){

  if(!shablon[i][k].voice){

      shablon[i][k].voice=true;

  select_sound(shablon[i][k],"go_sound");

      sound=true;

  };

  };
  //////////////////////////////////////////////////////////
  */
              }
            }

            //*
            // console.log("here 3");
            /// /////////////////////////////////////////////////// SOUND
            // if(shablon[i][k].type===1){

            /// *
            if (!sound && shablon[i][k]) {
              if (!shablon[i][k].voice) {
                shablon[i][k].voice = true;

                select_sound(shablon[i][k], 'go_sound');
                sound = true;
              }
            }
            //* /

            // };
            /// ///////////////////////////////////////////////////////

            shablon[i][k].finish = groupPositionOrg[i][k];

            shablon[i][k].way = [];

            // shablon[i][k].stopGetTarget=50;
            /// *
            shablon[i][k].groupCentrCell = obj.cell;

            shablon[i][k].active = false;

            // shablon[i][k].iFight=false;
            // shablon[i][k].iDoTakt=0;
            // shablon[i][k].target=0;
            // shablon[i][k].handTarget=0;

            shablon[i][k].goGroop = 150;
            //* /
            shablon[i][k].stopGetTarget = 50;
          }

          shablon[i][k].myReset = 0; /// /

          // shablon[i][k].handCell=true;
          // console.log("ok");
          // if(shablon[i][k].fatherFraction.activeUnits.indexOf(shablon[i][k])===-1){
          // shablon[i][k].fatherFraction.activeUnits.push(shablon[i][k]);
          // };
          // console.log(groupPosition[i][k]);
          shablon[i][k].way = [];
        }
      }
    }
  } else {
    // console.log("ok");

    for (let i = 0; i < player.selectUnits.length; i++) {
      if (obj.cell.dragoon) {
        if (player.selectUnits[i].iCanGetFly) {
          /// ////////////////////////////////////////////////////// SOUND

          if (!sound) {
            if (
              obj.cell.dragoon.union
                  !== player.selectUnits[i].fatherFraction.union
                && checkAliens(player.selectUnits[i], obj.cell.dragoon)
                && !player.selectUnits[i].voice
            ) {
              player.selectUnits[i].voice = true;

              select_sound(player.selectUnits[i], 'target');

              sound = true;
            }
          }

          /// /////////////////////////////////////////////////////////

          player.selectUnits[i].hold_position = false;

          player.selectUnits[i].clickSave = new ClickSave(
            obj.cell.dragoon,
            0,
            undefined,
            10,
          );

          if (!player.selectUnits[i].active) {
            player.selectUnits[i].fatherFraction.activeUnits.push(
              player.selectUnits[i],
            );
            player.selectUnits[i].active = true;
          }
        }
      }

      if (
        (obj.cell.unit || obj.cell.vossalObj)

          && obj.cell.unit.persolalNumber !== player.selectUnits[i].persolalNumber
      ) {
        let target;

        if (obj.cell.unit) {
          target = obj.cell.unit;
        } else {
          target = obj.cell.vossalObj;
        }

        /// /////////////////////////////////////////////////// SOUND

        if (
          !sound
            && player.selectUnits[i].cell
            && player.selectUnits[i].hp > 0
        ) {
          const unit = player.selectUnits[i];

          if (
            unit.cell
              // &&
              //! player.selectUnits[i].voice
              && target.cell
              && ((unit.seeing === 1
                && ((target.cell.continent
                  && target.cell.continent === unit.cell.continent)
                  || (target.landing
                    && target.fatherFraction.persolalNumber
                      === unit.fatherFraction.persolalNumber)))
                || (unit.seeing > 1
                  && ((target.cell.continent
                    && target.cell.continent === unit.cell.continent)
                    || (target.landing
                      && target.fatherFraction.persolalNumber
                        === unit.fatherFraction.persolalNumber)
                    || (target.fatherFraction.union !== unit.fatherFraction.union
                      && checkAliens(unit, target)))))
          ) {
            let snd;

            if (
              (!unit.warrior
                  && (target.neitral
                    || target.fatherFraction.union
                      === player.selectUnits[i].fatherFraction.union))
                || target.neitral
                || target.fatherFraction.union === unit.fatherFraction.union
            ) {
              snd = 'go_sound';
            } else if (unit.warrior) {
              snd = 'target';
            }

            if (snd && !unit.voice) {
              // console.log(snd);
              unit.voice = true;

              select_sound(unit, snd);

              sound = true;
            }
          }
        }

        /// ///////////////////////////////////////////////////////

        if (
          player.selectUnits[i].warrior
            || target.neitral
            || target.fatherFraction.union
              === player.selectUnits[i].fatherFraction.union
        ) {
          player.selectUnits[i].clickSave = new ClickSave(
            target,
            0,
            undefined,
            10,
          ); //! !!!!!!!!!!!!!!!!!!
          player.selectUnits[i].hold_position = false;

          // console.log("here 3")
          // console.log("ok");
        }

        if (!player.selectUnits[i].active) {
          player.selectUnits[i].fatherFraction.activeUnits.push(
            player.selectUnits[i],
          );
          player.selectUnits[i].active = true;
        }

        // player.selectUnits[i].way=[];

        // console.log("ok");
      }

      player.selectUnits[i].way = [];
    }
  }
};
