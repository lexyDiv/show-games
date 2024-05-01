const unit_dop_menu_control = function () {
  //oil stop

  if (pausa) {
    return;
  }

  dop_ok = false;

  let active_cell;

  //console.log("here")// 24 myJoubeTimer	stop

  if ((player.menu_unit && player.menu_unit.list === 2) || groop_mem_unit) {
    for (let i = 0; i < unit_dop_menu.length; i++) {
      let cell = unit_dop_menu[i];

      if (
        cell.can &&
        (obj.x < cell.x - cell.gabarit / 2 ||
          obj.x > cell.x + cell.gabarit / 2 ||
          obj.y < cell.y - cell.gabarit / 2 ||
          obj.y > cell.y + cell.gabarit / 2)
      ) {
        cell.active = false;
      } else if (!active_cell && cell.can) {
        cell.active = true;
        active_cell = cell;
      }
    }
  }

  for (let i = 0; i < unit_dop_menu.length; i++) {
    let cell = unit_dop_menu[i];

    if (!cell.can) {
      cell.active = false;
    }

    if (!cell.active) {
      if (cell.gabarit > 25) {
        cell.gabarit -= 1;
      }
    } else {
      if (cell.gold || cell.mana) {
        dop_ok = cell;
      }

      if (cell.gabarit < 35 && cell.resurs) {
        cell.gabarit += 1;
      }

      player.menu_unit.cell_name = cell.menu_name;
      player.menu_unit.cell_name_2 = cell.menu_name_2;

      if (menu_click && cell.resurs) {
        //CLICK

        select_sound_fly(undefined, "click", 1);

        if (!groop_mem_unit) {
          //console.log(cell.name);
          //console.log(cell.gold);
          //myJoube_face_animY=cell.face_animY;

          menu_unit_for_update.myJoube_face_animY = cell.face_animY;
        }
        //////////////////////////

        //menu_unit_for_update - zdanie iz kotorogo ishodit upgrade;
        if (player.selectBuildings.length) {
          dop_ok = false;
        }

        //////////////////////////

        /*	
      towerOnUpgrade.upgradeTimer=500;	
  towerOnUpgrade.upgrade=towerOnUpgrade.iBee;	
  
  this.unterTowers.splice(this.unterTowers.indexOf(towerOnUpgrade),1);
      
  if(this.activeBuildings.indexOf(towerOnUpgrade)===-1){this.activeBuildings.push(towerOnUpgrade);};	
      
  this.gold-=500;
  this.wood-=200;
  */

        if (cell.doo && menu_unit_for_update.unitStatus !== "life") {
          if (cell.name !== "guard" && cell.name !== "cannon") {
            menu_unit_for_update.myJoube = cell.doo[0];
            menu_unit_for_update.myJoubeTimer = cell.doo[1];

            if (
              menu_unit_for_update.fatherFraction.activeBuildings.indexOf(
                menu_unit_for_update
              ) === -1
            ) {
              menu_unit_for_update.fatherFraction.activeBuildings.push(
                menu_unit_for_update
              );
            }

            menu_unit_for_update.fatherFraction.gold -= cell.gold;
            menu_unit_for_update.fatherFraction.wood -= cell.wood;
            menu_unit_for_update.fatherFraction.oil -= cell.oil;
          } else {
            // TOWER

            menu_unit_for_update.upgrade = cell.doo[0];
            menu_unit_for_update.myJoube = "towerOnUpgrade";
            menu_unit_for_update.upgradeTimer = cell.doo[1];
            //menu_unit_for_update.myJoubeTimer=cell.doo[1];
            menu_unit_for_update.iBee = cell.doo[0];

            if (
              menu_unit_for_update.fatherFraction.activeBuildings.indexOf(
                menu_unit_for_update
              ) === -1
            ) {
              menu_unit_for_update.fatherFraction.activeBuildings.push(
                menu_unit_for_update
              );
            }

            menu_unit_for_update.fatherFraction.gold -= cell.gold;
            menu_unit_for_update.fatherFraction.wood -= cell.wood;
            menu_unit_for_update.fatherFraction.oil -= cell.oil;
          }
        }

        if (cell.name === "hold_stop groop") {
          let voice;

          for (let i = 0; i < all_units.length; i++) {
            all_units[i].hold_position = false;

            if (!all_units[i].voice && !voice) {
              voice = true;
              all_units[i].voice = true;

              select_sound(all_units[i], "go_sound");
            }
          }
        } else if (cell.name === "hold groop") {
          let voice;

          for (let i = 0; i < all_units.length; i++) {
            all_units[i].hold_position = 1;
            all_units[i].handTarget = 0;

            if (!all_units[i].voice && !voice) {
              voice = true;
              all_units[i].voice = true;

              select_sound(all_units[i], "go_sound");
            }
          }
        } else if (cell.name === "passagers out") {
          menu_unit_for_update.passagers_out = true;

          if (!menu_unit_for_update.active) {
            menu_unit_for_update.fatherFraction.activeUnits.push(
              menu_unit_for_update
            );
            menu_unit_for_update.active = true;
          }
        } else if (cell.name === "get oil") {
          menu_unit_for_update.clickSave = new ClickSave(
            menu_unit_for_update.fatherFraction.oil_Refs[0],
            0
          );

          if (!menu_unit_for_update.active) {
            menu_unit_for_update.fatherFraction.activeUnits.push(
              menu_unit_for_update
            );
            menu_unit_for_update.active = true;
          }
        } else if (
          cell.name === "tor" ||
          cell.name === "z" ||
          cell.name === "nar" ||
          cell.name === "cure" ||
          cell.name === "rage"
        ) {
          //	menu_unit_for_update.goGroop=150;
          //*/
          //shablon[i][k].stopGetTarget=50;

          menu_unit_for_update.magick = cell.name;

          y_n_magick = menu_unit_for_update;
        } else if (cell.name === "hold_stop") {
          //	menu_unit_for_update.goGroop=150;
          //*/
          //shablon[i][k].stopGetTarget=50;

          menu_unit_for_update.hold_position = false; //globalTimer;

          if (!menu_unit_for_update.voice) {
            menu_unit_for_update.voice = true;

            select_sound(menu_unit_for_update, "go_sound");
          }
        } else if (cell.name === "hold") {
          //	menu_unit_for_update.goGroop=150;
          //*/
          //shablon[i][k].stopGetTarget=50;

          menu_unit_for_update.hold_position = 1; //globalTimer;
          menu_unit_for_update.handTarget = 0;

          if (!menu_unit_for_update.voice) {
            menu_unit_for_update.voice = true;

            select_sound(menu_unit_for_update, "go_sound");
          }
        } else if (cell.name === "dopAttack") {
          menu_unit_for_update.fatherFraction.myJoube_fou = cell.name;
          menu_unit_for_update.fatherFraction.myJoubeTimer_fou = myJoube_time(
            menu_unit_for_update.fatherFraction.myJoube_fou
          );

          menu_unit_for_update.myJoubeTimer =
            menu_unit_for_update.fatherFraction.myJoubeTimer_fou;
          menu_unit_for_update.fatherFraction.myJoube_face_animY_fou =
            cell.face_animY; ///  !!!!!!!!!!!!!

          menu_unit_for_update.fatherFraction.gold -= cell.gold;
          menu_unit_for_update.fatherFraction.wood -= cell.wood;
          menu_unit_for_update.fatherFraction.oil -= cell.oil;
        } else if (
          cell.name === "dopNoFlyAttack_level" ||
          cell.name === "dopNoFlyPanzer_level" ||
          cell.name === "dopBallista"
        ) {
          menu_unit_for_update.fatherFraction.myJoube_kuz = cell.name;
          menu_unit_for_update.fatherFraction.myJoubeTimer_kuz = myJoube_time(
            menu_unit_for_update.fatherFraction.myJoube_kuz
          );

          menu_unit_for_update.myJoubeTimer =
            menu_unit_for_update.fatherFraction.myJoubeTimer_kuz;
          menu_unit_for_update.fatherFraction.myJoube_face_animY_kuz =
            cell.face_animY; ///  !!!!!!!!!!!!!

          menu_unit_for_update.fatherFraction.gold -= cell.gold;
          menu_unit_for_update.fatherFraction.wood -= cell.wood;
          menu_unit_for_update.fatherFraction.oil -= cell.oil;
        } else if (cell.name === "levelUpgrade") {
          menu_unit_for_update.myJoube = "levelUpgrade";
          menu_unit_for_update.myJoubeTimer = myJoube_time("levelUpgrade");

          if (
            menu_unit_for_update.fatherFraction.activeBuildings.indexOf(
              menu_unit_for_update
            ) === -1
          ) {
            menu_unit_for_update.fatherFraction.activeBuildings.push(
              menu_unit_for_update
            );
          }

          //menu_unit_for_update.fatherFraction.gold-=400;

          menu_unit_for_update.fatherFraction.gold -= cell.gold;
          menu_unit_for_update.fatherFraction.wood -= cell.wood;
          menu_unit_for_update.fatherFraction.oil -= cell.oil;
        } else if (cell.name === "dopFlySee_level") {
          menu_unit_for_update.fatherFraction.myJoube_leso = "dopFlySee_level";
          menu_unit_for_update.fatherFraction.myJoubeTimer_leso = myJoube_time(
            menu_unit_for_update.fatherFraction.myJoube_leso
          );

          menu_unit_for_update.myJoubeTimer =
            menu_unit_for_update.fatherFraction.myJoubeTimer_leso;
          menu_unit_for_update.fatherFraction.myJoube_face_animY_leso =
            cell.face_animY; ///  !!!!!!!!!!!!!

          menu_unit_for_update.fatherFraction.gold -= cell.gold;
          menu_unit_for_update.fatherFraction.wood -= cell.wood;
          menu_unit_for_update.fatherFraction.oil -= cell.oil;
        } else if (cell.name === "dopFlyAttack_level") {
          menu_unit_for_update.fatherFraction.myJoube_leso =
            "dopFlyAttack_level";
          menu_unit_for_update.fatherFraction.myJoubeTimer_leso = myJoube_time(
            menu_unit_for_update.fatherFraction.myJoube_leso
          );

          menu_unit_for_update.myJoubeTimer =
            menu_unit_for_update.fatherFraction.myJoubeTimer_leso;
          menu_unit_for_update.fatherFraction.myJoube_face_animY_leso =
            cell.face_animY; ///  !!!!!!!!!!!!!

          menu_unit_for_update.fatherFraction.gold -= cell.gold;
          menu_unit_for_update.fatherFraction.wood -= cell.wood;
          menu_unit_for_update.fatherFraction.oil -= cell.oil;
        } else if (cell.name === "batrak") {
          menu_unit_for_update.myJoube = "batrak";
          menu_unit_for_update.myJoubeTimer = myJoube_time("batrak");

          if (
            menu_unit_for_update.fatherFraction.activeBuildings.indexOf(
              menu_unit_for_update
            ) === -1
          ) {
            menu_unit_for_update.fatherFraction.activeBuildings.push(
              menu_unit_for_update
            );
          }

          menu_unit_for_update.fatherFraction.gold -= 400;
        } else if (cell.name === "wood") {
          if (!menu_unit_for_update.voice) {
            menu_unit_for_update.voice = true;

            select_sound(menu_unit_for_update, "go_sound");
          }

          let target = allContinents[menu_unit_for_update.cell.continent].woods;

          if (!target) {
            target = menu_unit_for_update.fatherFraction.townHolls;
          }

          if (!target) {
            target = menu_unit_for_update.fatherFraction.lesopilkas;
          }

          let obj = getMinDistanse(menu_unit_for_update, target);

          //console.log(obj);

          menu_unit_for_update.clickSave = new ClickSave(obj, 0);

          if (!menu_unit_for_update.active) {
            menu_unit_for_update.fatherFraction.activeUnits.push(
              menu_unit_for_update
            );
            menu_unit_for_update.active = true;
          }

          //return;
        } else if (cell.name === "gold") {
          if (!menu_unit_for_update.voice) {
            menu_unit_for_update.voice = true;

            select_sound(menu_unit_for_update, "go_sound");
          }

          let target =
            allContinents[menu_unit_for_update.cell.continent].shahts;

          if (!target) {
            target = menu_unit_for_update.fatherFraction.townHolls;
          }

          let obj = getMinDistanse(menu_unit_for_update, target);

          //console.log(obj);

          menu_unit_for_update.clickSave = new ClickSave(obj, 0);

          if (!menu_unit_for_update.active) {
            menu_unit_for_update.fatherFraction.activeUnits.push(
              menu_unit_for_update
            );
            menu_unit_for_update.active = true;
          }

          //return;
        } else if (cell.name === "out") {
          if (
            menu_unit_for_update.type === 1 ||
            menu_unit_for_update.type === "oil_tanker"
          ) {
            player_pro_building = false;

            unit_dop_menu[24].can = false;
            //unit_dop_menu[24].face_animY=900;
            unit_dop_menu[24].resurs = false;
            unit_dop_menu[24].name = false;
          } else if (
            menu_unit_for_update.type === "mag" ||
            menu_unit_for_update.type === "rizar"
          ) {
            menu_unit_for_update.magick = false;
            y_n_magick = false;
          }

          //return;
        } else {
          unit_dop_menu[24].can = true;
          unit_dop_menu[24].face_animY = 900;
          unit_dop_menu[24].resurs = true;
          unit_dop_menu[24].name = "out";
          unit_dop_menu[24].menu_name = "Stop build";

          let vertikal = Math.floor(obj.y / 50);
          let horizont = Math.floor(obj.x / 50);

          let type = cell.name;

          if (cell.name === "townHoll") {
            type = 2;
          } else if (cell.name === "farm") {
            type = 3;
          } else if (cell.name === "lesopilka") {
            type = 4;
          } else if (cell.name === "barack") {
            type = 5;
          }

          player_pro_building = new LandObj(
            type,
            horizont,
            vertikal,
            0,
            menu_unit_for_update.fatherFraction
          );

          console.log(player_pro_building.unitName);
        }
      }
    }
  }

  return active_cell;
};
