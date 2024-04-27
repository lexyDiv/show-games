/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const fractionsControl = function () {
  for (let i = 0; i < turtles_mass.length; i++) {
    const obj = turtles_mass[i];

    let light;

    for (let k = 0; k < obj.animys.length; k++) {
      const unit = obj.animys[k];

      if (unit && unit.hp > 0 && unit.light) {
        // console.log("here");

        if (
          unit
          && unit.warrior
          && unit.iCanGetSweem
          && (unit.unitStatus === 'building' || unit.fl || unit.gabarit > 50)
        ) {
          const a = unit.damagePointX - obj.damagePointX;
          const b = unit.damagePointY - obj.damagePointY;

          const c = Math.sqrt(a * a + b * b);

          // console.log("here");

          if (
            c <= unit.seeing
            && (unit.unitStatus === 'building' || unit.fly || c <= 141.5)
          ) {
            if (!obj.visible) {
              obj.cellUpdate();
            }

            obj.visible = true;
            obj.draw_visible = true;

            light = true;

            break;
          }

          // obj.visible=true; obj.draw_visible=true;
        }
      }
    }

    if (!light) {
      obj.visible = false;
      obj.draw_visible = false;
    }
  }

  turtles_mass = [];

  for (let i = 0; i < fractions.length; i++) {
    // getDragonsGroopPosition
    fractions[i].persolalNumber = i;

    fractions[i].unitsUpdate();

    fractions[i].globalUpdate();

    if (fractions[i].control === 'comp') {
      fractions[i].ii(i);
    }

    const save = [];

    for (let k = 0; k < fractions[i].selectUnits.length; k++) {
      let saveMyWey;

      if (
        fractions[i].selectUnits[k]
        && fractions[i].selectUnits[k].unitStatus === 'life'
        && fractions[i].selectUnits[k].goGroop
        && fractions[i].selectUnits[k].finish // &&
        // fractions[i].selectUnits[k].cell
        && fractions[i].selectUnits[k].finish.persolalNumber
          !== fractions[i].selectUnits[k].cell.persolalNumber
        && !fractions[i].selectUnits[k].target
        && !fractions[i].selectUnits[k].handTarget
        && fractions[i].selectUnits[k].stepTakt < 1
        && fractions[i].selectUnits[k].stepTakt >= 0
      ) {
        // if(fractions[i].selectUnits[k].handCell===0){
        fractions[i].selectUnits[k].handCell = fractions[i].selectUnits[k].finish;
        // };
        if (fractions[i].selectUnits[k].hold_position) {
          fractions[i].selectUnits[k].goGroop = 0;
        }

        // console.log("eto");

        // fractions[i].selectUnits[k].myReset=0;

        // if(fractions[i].selectUnits[k].type===2){console.log("ok");};

        /*
  if(fractions[i].selectUnits[k].goGroop){
  fractions[i].selectUnits[k].goGroop--;
  };
  */

        // let a=fractions[i].selectUnits[k].damagePointX-fractions[i].selectUnits[k].handCell.x+25;
        // let b=fractions[i].selectUnits[k].damagePointY-fractions[i].selectUnits[k].handCell.y+25;

        // let c=Math.sqrt(a*a+b*b);

        // if(c<=150){fractions[i].selectUnits[k].goGroop=0;};

        // fractions[i].selectUnits[k].sosFin=fractions[i].selectUnits[k].finish;

        fractions[i].selectUnits[k].way = [];

        // fractions[i].selectUnits[k].saveFinish=fractions[i].selectUnits[k].sosFin;
        // console.log(fractions[i].selectUnits[k].handCell);

        /// /*
        // console.log("hren");

        fractions[i].selectUnits[k].isBlockedMem = fractions[i].selectUnits[k].isBlocked();

        getWay(fractions[i].selectUnits[k], 0, 1000);

        saveMyWey = fractions[i].selectUnits[k].way; //
        fractions[i].selectUnits[k].way = [];
        fractions[i].selectUnits[k].finish = fractions[i].selectUnits[k].groupCentrCell;
        getWay(fractions[i].selectUnits[k], 0, 2000);
        fractions[i].selectUnits[k].wayLength = fractions[i].selectUnits[k].way.length;
        fractions[i].selectUnits[k].way = saveMyWey;
        // fractions[i].selectUnits[k].getWayLength();
        fractions[i].selectUnits[k].saveFinish = fractions[i].selectUnits[k].finish;
        fractions[i].selectUnits[k].finish = 0; /// ////////////////////////////
        fractions[i].selectUnits[k].isBlockedMem = false;
        //* /
        // console.log(fractions[i].selectUnits[k].way.length)

        if (
          fractions[i].selectUnits[k].way.length
          && !fractions[i].selectUnits[k].active
        ) {
          if (
            fractions[i].activeUnits.indexOf(fractions[i].selectUnits[k]) !== -1
          ) {
            fractions[i].activeUnits.splice(
              fractions[i].activeUnits.indexOf(fractions[i].selectUnits[k]),
              1,
            );

            // console.log("uh-ty");
          }
          // console.log(fractions[i].activeUnits.indexOf(fractions[i].selectUnits[k]));
          // fractions[i].activeUnits.push(fractions[i].selectUnits[k]);
          // fractions[i].selectUnits[k].active=true;

          if (!save.length) {
            save.push(fractions[i].selectUnits[k]);
          } else {
            // console.log(save[0].way[save[0].way.length-1].g);

            for (let h = 0; h < save.length; h++) {
              // fractions[i].selectUnits[k].way=saveMyWey;

              if (fractions[i].selectUnits[k].wayLength <= save[h].wayLength) {
                save.splice(h, 0, fractions[i].selectUnits[k]);

                break;
              }

              if (h === save.length - 1) {
                save.push(fractions[i].selectUnits[k]);

                break;
              }
            }
            // console.log(save[0].wayLength);
          }

          // console.log(save);
        }

        // console.log(fractions[i].selectUnits[k].way.length)
      }
    }

    if (save.length) {
      // const array3 = array1.concat(array2);

      fractions[i].activeUnits = fractions[i].activeUnits.concat(save);

      // console.log(fractions[i].activeUnits[0])
    }

    // console.log(fractions[i].activeUnits);
    for (let j = 0; j < fractions[i].activeUnits.length; j++) {
      const obj_obj = fractions[i].activeUnits[j];
      // console.log(fractions[i].activeUnits[j].way);

      /*
      if(fractions[i].activeUnits[j].way.length===0&&fractions[i].activeUnits[j].stepTakt<=0
  &&fractions[i].activeUnits[j].iInUse===false//&&!fractions[i].activeUnits[j].target
  ){
      fractions[i].activeUnits[j].moveVektor=0;

  };
  */
      // console.log(fractions[i].activeUnits[j][0]);

      if (obj_obj && !obj_obj.way) {
        obj_obj.way = [];
      }

      if (
        !obj_obj
        || (obj_obj.stepTakt <= 0
          && obj_obj.way.length === 0
          && obj_obj.iInUse === false
          && !obj_obj.target
          && (obj_obj.hp > 0 || obj_obj.distroyTimer === 0)
          && (!obj_obj.animys || !obj_obj.animys.length)
          && !obj_obj.handTarget
          && !obj_obj.clickSave
          && !obj_obj.ii_saveCell
          && !obj_obj.magickTarget
          && !obj_obj.rage
          && !obj_obj.doMagick
          && !obj_obj.landing
          && !obj_obj.transport
          && !obj_obj.stopTroll
          && !obj_obj.nar
          && !obj_obj.iFight
          && !obj_obj.iDoTakt)
        || obj_obj.katastrofa
      ) {
        if (obj_obj) {
          obj_obj.ii_back = 0;
          obj_obj.stopGetTarget = 0;
          obj_obj.revers = false;

          obj_obj.tyuk = false;
          obj_obj.tyuk_rage = false;

          obj_obj.active = false;
          obj_obj.goGroop = false;
          obj_obj.iin = false;
          obj_obj.ii_saveCell_reset = 0;

          obj_obj.x = obj_obj.cell.x;
          obj_obj.y = obj_obj.cell.y;
          // fractions[i].activeUnits[j].moveVektor=0;
          if (fractions[i].activeUnits[j].type === 1) {
            // console.log(fractions[i].activeUnits[j]);
            fractions[i].activeUnits[j].target = 0;
            fractions[i].activeUnits[j].iGetTarget = false;
            fractions[i].activeUnits[j].workTimeSahta = 100;
            fractions[i].activeUnits[j].waitTime = 30;
            fractions[i].activeUnits[j].myJoube = 0;
            fractions[i].activeUnits[j].x = fractions[i].activeUnits[j].cell.x;
            fractions[i].activeUnits[j].y = fractions[i].activeUnits[j].cell.y;
            fractions[i].activeUnits[j].myTargetClosed = 0;
            fractions[i].activeUnits[j].stepTakt = 0;
            fractions[i].activeUnits[j].finish = 0;
            fractions[i].activeUnits[j].saveFinish = 0;
            fractions[i].activeUnits[j].sosFin = 0;
            fractions[i].activeUnits[j].way = [];
            fractions[i].activeUnits[j].handCell = 0;
            fractions[i].activeUnits[j].myReset = 0;
            fractions[i].activeUnits[j].handCellNewWay = true;
            // fractions[i].activeUnits[j].handCell=0;
            fractions[i].activeUnits[j].handTarget = 0;
            fractions[i].activeUnits[j].iDoTakt = 0;
            // fractions[i].activeUnits[j].iGoBuild=false;
          } else if (
            fractions[i].activeUnits[j].type === 2
            || fractions[i].activeUnits[j].type === 'ballista'
            || fractions[i].activeUnits[j].type === 'dragoon'
            || fractions[i].activeUnits[j].type === 'transport'
          ) {
            fractions[i].activeUnits[j].iGetTarget = false;
            // fractions[i].activeUnits[j].workTimeSahta=100;
            // fractions[i].activeUnits[j].waitTime=30;
            fractions[i].activeUnits[j].myJoube = 0;
            fractions[i].activeUnits[j].x = fractions[i].activeUnits[j].cell.x;
            fractions[i].activeUnits[j].y = fractions[i].activeUnits[j].cell.y;
            fractions[i].activeUnits[j].myTargetClosed = 0;
            fractions[i].activeUnits[j].stepTakt = 0;
            fractions[i].activeUnits[j].finish = 0;
            fractions[i].activeUnits[j].saveFinish = 0;
            fractions[i].activeUnits[j].sosFin = 0;
            fractions[i].activeUnits[j].way = [];
            fractions[i].activeUnits[j].handCell = 0;
            fractions[i].activeUnits[j].myReset = 0;
            fractions[i].activeUnits[j].handCellNewWay = true;
            fractions[i].activeUnits[j].handTarget = 0;
            fractions[i].activeUnits[j].iDoTakt = 0;
            fractions[i].activeUnits[j].stopGetTarget = 0;
            fractions[i].activeUnits[j].iGoBack = false;
            fractions[i].activeUnits[j].iFight = false;
            // fractions[i].activeUnits[j].handCell=0;
            fractions[i].activeUnits[j].blackBoock = [];
          } else if (
            fractions[i].activeUnits[j].type === 3
            || fractions[i].activeUnits[j].type === 'rizar'
          ) {
            fractions[i].activeUnits[j].iGetTarget = false;
            // fractions[i].activeUnits[j].workTimeSahta=100;
            // fractions[i].activeUnits[j].waitTime=30;
            fractions[i].activeUnits[j].myJoube = 0;
            fractions[i].activeUnits[j].x = fractions[i].activeUnits[j].cell.x;
            fractions[i].activeUnits[j].y = fractions[i].activeUnits[j].cell.y;
            fractions[i].activeUnits[j].myTargetClosed = 0;
            fractions[i].activeUnits[j].stepTakt = 0;
            fractions[i].activeUnits[j].finish = 0;
            fractions[i].activeUnits[j].saveFinish = 0;
            fractions[i].activeUnits[j].sosFin = 0;
            fractions[i].activeUnits[j].way = [];
            fractions[i].activeUnits[j].handCell = 0;
            fractions[i].activeUnits[j].myReset = 0;
            fractions[i].activeUnits[j].handCellNewWay = true;
            fractions[i].activeUnits[j].handTarget = 0;
            fractions[i].activeUnits[j].iDoTakt = 0;
            fractions[i].activeUnits[j].stopGetTarget = 0;
            fractions[i].activeUnits[j].stopTroll = 0;
            fractions[i].activeUnits[j].iGoBack = false;
            fractions[i].activeUnits[j].iFight = false;
            // fractions[i].activeUnits[j].handCell=0;
          }

          fractions[i].activeUnits[j].active = false;
        }

        fractions[i].activeUnits.splice(j, 1);

        j--;
      } else {
        fractions[i].activeUnits[j].prog(fractions[i].activeUnits[j]);
        fractions[i].activeUnits[j].active = true;
      }
    }

    for (let k = 0; k < fractions[i].activeBuildings.length; k++) {
      if (fractions[i].activeBuildings[k]) {
        fractions[i].activeBuildings[k].prog();
      }

      if (

        fractions[i].activeBuildings[k].readyToOut
        || !fractions[i].activeBuildings[k]
      ) {
        // console.log(fractions[i].activeBuildings[k].readyToOut);
        if (fractions[i].activeBuildings[k]) {
          fractions[i].activeBuildings[k].readyToOut = false;
        }

        fractions[i].activeBuildings.splice(k, 1);
        k--;
      }

      // this.target.buildready>=this.target.hpfull
    }
  }
  // };
};
