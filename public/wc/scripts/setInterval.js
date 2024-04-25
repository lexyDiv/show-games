
setInterval(function () {
    //console.log(start_game) groop_mem
    music_prog();
  
    if (exit_timer) {
      exit();
    }
  
    //console.log(title.active);
  
    ////////////////////////////////////////////////
    //onDrawTrups
    //console.log(axesFly.length);
    //getDragonsGroopPosition axesFly getActiveZone
    /////////////////////////////////
    if (timer_do_start) {
      timer_do_start--;
    }
  
    ///*
  
    ctx3.clearRect(0, 0, width, height);
  
    if (global_start) {
      if (title.active) {
        title.prog_draw();
      }
  
      if (!start_game) {
        //ctx3.clearRect(0,0,width,height);
        //ctx3.fillStyle="blue";
        //ctx3.fillRect(0,0,width,height);
      } else if (start_game) {
        //if(timer_do_start===99){console.log(allContinents);};
  
        game_music_control();
  
        //if(timer_do_start===100){
  
        if (!pausa) {
          mem_prog_load();
          click_to_iden_prog();
  
          in_pausa_menu_obj_in = [];
  
          //ctx3.clearRect(0,0,width,height);
  
          in_unit_menu = false;
  
          //ctx.fillStyle="blue";
          //ctx.fillRect(0,0,gameFielg.length*50,gameFielg.length*50);
  
          //console.log(father.finish);unit_menu_draw
  
          globalTimer++;
  
          if (globalTimer === 250) {
            globalTimer = 0;
          }
  
          //console.log(floorGlobalTimer);
  
          removeControl();
  
          if (player) {
            if (!globalTimer) {
              player.check_and();
            }
  
            getActiveZone();
  
            //console.log(player.selectIsSweem.length)
  
            for (let i = 0; i < player.selectBuildings.length; i++) {
              let obj = player.selectBuildings[i];
  
              if (!obj || !obj.cell || obj.hp <= 0) {
                player.selectBuildings.splice(i, 1);
              }
            }
  
            for (let i = 0; i < player.selectUnits.length; i++) {
              let obj = player.selectUnits[i];
  
              if (!obj || !obj.cell || obj.hp <= 0) {
                player.selectUnits.splice(i, 1);
              }
            }
  
            for (let i = 0; i < player.selectDragons.length; i++) {
              let obj = player.selectDragons[i];
  
              if (!obj || !obj.cell || obj.hp <= 0) {
                player.selectDragons.splice(i, 1);
              }
            }
  
            for (let i = 0; i < player.selectIsSweem.length; i++) {
              let obj = player.selectIsSweem[i];
  
              if (!obj || !obj.cell || obj.hp <= 0) {
                player.selectIsSweem.splice(i, 1);
              }
            }
  
            player.checkAlarms_player();
          }
  
          fly = [];
  
          fractionsControl();
  
          for (let i = 0; i < dragoonDamages.length; i++) {
            dragoonDamages[i].prog(dragoonDamages[i]);
  
            if (dragoonDamages[i].readyToOut) {
              dragoonDamages.splice(dragoonDamages.indexOf(dragoonDamages[i]), 1);
              i--;
            }
          }
  
          //console.log(dragoonDamages.length) onDrawTrups
  
          /*
  for(let i=0;i<axesFly.length;i++){
      
  axesFly[i].prog();	
      
  };
  */
  
          if (activeFreeLandObjects.length) {
            activeFreeLandObjectsToProg();
          }
  
          onDraw = [];
  
          onDrawSpecial.length = 0;
          onDrawTrups.length = 0;
  
          centerDrawPoint.progCenterDrawPoint();
  
          for (let i = 0; i < od_grunt.length; i++) {
            for (let k = 0; k < od_grunt[i].length; k++) {
              od_grunt[i][k].draw2();
            }
          }
  
          /////////////////////////////////////////////////////// water_sleds !!!!!!!!!!!!!!!
  
          //console.log(water_sleds.length)
  
          for (let i = 0; i < water_sleds.length; i++) {
            if (water_sleds[i].readyToOut) {
              water_sleds.splice(i, 1);
              i--;
            } else {
              water_sleds[i].prog(water_sleds[i]);
            }
          }
  
          for (let i = 0; i < water_sleds_onDraw.length; i++) {
            water_sleds_onDraw[i].draw();
          }
  
          water_sleds_onDraw = [];
          //////////////////////////////////////////////////////////
  
          //console.log(waters.length)
  
          for (let i = 0; i < onDrawSpecial.length; i++) {
            onDrawSpecial[i].drawSpecial();
          }
  
          for (let i = 0; i < onDrawTrups.length; i++) {
            if (onDrawTrups[i].unitStatus === "building") {
              onDrawTrups[i].drawTrups();
            } else {
              onDrawTrups[i].drawUnit();
  
              //console.log("ok");
            }
          }
  
          for (let i = 0; i < od.length; i++) {
            for (let k = 0; k < od[i].length; k++) {
              if (od[i][k].drawUnit) {
                od[i][k].drawUnit();
              } else if (od[i][k].draw) {
                od[i][k].draw();
              } else if (od[i][k].drawDragDam) {
                od[i][k].drawDragDam();
              }
            }
          }
  
          //key=0;
  
          for (let i = 0; i < axesFly.length; i++) {
            axesFly[i].prog(axesFly[i]);
  
            //if(axesFly[i].type!=="tor"){
            axesFly[i].draw(axesFly[i]);
            //};
  
            if (axesFly[i].takt === 0 || axesFly[i].readyToOut) {
              axesFly.splice(i, 1);
              i--;
            }
          }
  
          //console.log(fly)
  
          for (let i = 0; i < fly.length; i++) {
            fly[i].drawFly();
  
            //if(axesFly[i].takt===0||axesFly[i].readyToOut){axesFly.splice(axesFly.indexOf(axesFly[i]),1);i--;};
          }
  
          if (player_pro_building) {
            player_pro_building.player_pro_draw();
          }
  
          cells_player_building_pro = [];
  
          infoGamePanel();
  
          drawMouseZone();
  
          ////////////////////////////////////// in pausa menu
  
          in_pausa_menu();
  
          ////////////////////////////////////////////
  
          obj.draw();
  
          player_select_control();
  
          if (player_pro_building) {
            player_pro_building.player_pro_building_position();
          }
  
          player_pro_building_click = false;
          ////////////////////// menu
  
          //console.log(unit_dop_menu.length);
  
          if (!in_unit_menu) {
            unit_dop_menu = [];
            player_pro_building = false;
          } else if (in_unit_menu && !unit_dop_menu.length) {
            create_unit_dop_menu(in_unit_menu);
            //console.log("ok");
            //sound.play();
          }
  
          menu_click = false;
  
          if (in_unit_menu) {
            if (in_unit_menu.type === 1) {
              if (obj.x < 700) {
                let vertikal = Math.floor((obj.y - removeY) / 50);
                let horizont = Math.floor((obj.x - removeX) / 50);
  
                if (
                  gameFielg[vertikal][horizont].vossalObj &&
                  !gameFielg[vertikal][horizont].vossalObj.neitral &&
                  gameFielg[vertikal][horizont].vossalObj.fatherFraction
                    .fraction === in_unit_menu.fatherFraction.fraction &&
                  (gameFielg[vertikal][horizont].vossalObj.buildready <
                    gameFielg[vertikal][horizont].vossalObj.hpfull ||
                    gameFielg[vertikal][horizont].vossalObj.hp <
                      gameFielg[vertikal][horizont].vossalObj.hpfull)
                ) {
                  ctx3.drawImage(
                    unit_m,
                    0,
                    1900,
                    100,
                    100,
                    obj.x,
                    obj.y - 50,
                    30,
                    30
                  );
                }
              }
            }
  
            if (in_unit_menu.magick) {
              y_n_magick = in_unit_menu;
            }
          }
  
          if (
            y_n_magick &&
            (!player.selectUnits.length ||
              player.selectUnits[0].mana < 100 ||
              player.selectUnits[0].persolalNumber !== y_n_magick.persolalNumber)
          ) {
            //y_n_magick.magick=false;
            y_n_magick = false;
          }
  
          if (y_n_magick) {
            let ok;
  
            let vertikal = Math.floor((obj.y - removeY) / 50);
            let horizont = Math.floor((obj.x - removeX) / 50);
  
            let unit;
  
            for (let i = vertikal - 1; i <= vertikal + 1; i++) {
              for (let k = horizont - 1; k <= horizont + 1; k++) {
                let u;
  
                if (gameFielg[i] && gameFielg[i][k]) {
                  if (gameFielg[i][k].unit) {
                    u = gameFielg[i][k].unit;
                  } else if (gameFielg[i][k].vossalObj) {
                    u = gameFielg[i][k].vossalObj;
                  } else if (gameFielg[i][k].dragoon) {
                    u = gameFielg[i][k].dragoon;
                  }
  
                  if (u && player.selectUnits[0].magick_ok(u)) {
                    if (gameFielg[i][k].unit) {
                      unit = gameFielg[i][k].unit;
                    }
                    if (gameFielg[i][k].vossalObj) {
                      unit = gameFielg[i][k].vossalObj;
                    }
                    if (gameFielg[i][k].dragoon) {
                      unit = gameFielg[i][k].dragoon;
                    }
  
                    break;
                  }
                }
              }
              if (unit) {
                break;
              }
            }
  
            let y;
  
            if (player.selectUnits[0].magick === "tor") {
              y = 10700;
            } else if (player.selectUnits[0].magick === "z") {
              y = 10900;
            } else if (player.selectUnits[0].magick === "nar") {
              y = 10800;
            } else if (player.selectUnits[0].magick === "rage") {
              y = 11000;
            } else if (player.selectUnits[0].magick === "cure") {
              y = 10600;
            }
  
            if (obj.x < 700) {
              ctx3.drawImage(unit_m, 0, y, 100, 100, obj.x, obj.y - 50, 30, 30);
  
              if (
                !unit
  
                //||
  
                //!ok//!player.selectUnits[0].magick_ok(unit)
              ) {
                ctx3.drawImage(
                  unit_m,
                  0,
                  1800,
                  100,
                  100,
                  obj.x,
                  obj.y - 50,
                  30,
                  30
                );
              } else if (obj.x < 700) {
                ctx3.drawImage(
                  unit_m,
                  0,
                  1700,
                  100,
                  100,
                  obj.x,
                  obj.y - 50,
                  30,
                  30
                );
              }
            }
  
            if (pausa_click && unit) {
              //console.log(unit)
  
              player.selectUnits[0].clickSave = new ClickSave(unit, false);
            }
          }
  
          if (groop_mem) {
            //console.log(groop_mem.timer);
  
            groop_mem.timer--;
  
            if (!groop_mem.unit && !groop_mem.timer) {
              if (groop_mem.units[0].fly) {
                for (let i = 0; i < groop_mem.units.length; i++) {
                  if (
                    groop_mem.units[i] &&
                    groop_mem.units[i].cell &&
                    groop_mem.units[i].hp > 0
                  )
                    player.selectDragons.push(groop_mem.units[i]);
                }
              } else if (groop_mem.units[0].sweeme) {
                for (let i = 0; i < groop_mem.units.length; i++) {
                  if (
                    groop_mem.units[i] &&
                    groop_mem.units[i].cell &&
                    groop_mem.units[i].hp > 0
                  )
                    player.selectIsSweem.push(groop_mem.units[i]);
                }
              } else {
                for (let i = 0; i < groop_mem.units.length; i++) {
                  if (
                    groop_mem.units[i] &&
                    groop_mem.units[i].cell &&
                    groop_mem.units[i].hp > 0
                  )
                    player.selectUnits.push(groop_mem.units[i]);
                }
              }
  
              groop_mem = false;
            } else {
              if (groop_mem.timer === 1) {
                player.selectUnits = [];
                player.selectDragons = [];
                player.selectIsSweem = [];
                all_units = [];
              }
  
              if (!groop_mem.timer) {
                let m = groop_mem.unit;
  
                if (m.sweeme) {
                  player.selectIsSweem.push(m);
                } else if (m.fly) {
                  player.selectDragons.push(m);
                } else {
                  player.selectUnits.push(m);
                }
  
                groop_mem = false;
              }
            }
          }
  
          ///////////////////////////////// SOUND
  
          for (let i = 0; i < click_click.length; i++) {
            let click = click_click[i];
  
            if (click.timer) {
              click.timer--;
            } else {
              click_click.splice(i, 1);
              i--;
            }
          }
  
          for (let i = 0; i < sounds.length; i++) {
            let sound = sounds[i];
  
            sound.prog();
  
            if (sound.readyToOut) {
              sounds.splice(i, 1);
              i--;
            }
          }
  
          //console.log(sounds_fight.length);
  
          //if(sounds_fight.length>=20){console.log(sounds_fight); pausa=1;};
  
          for (let i = 0; i < sounds_fight.length; i++) {
            let sound = sounds_fight[i];
  
            sound.prog_fight();
  
            if (sound.readyToOut) {
              sounds_fight.splice(i, 1);
              i--;
            }
          }
  
          for (let i = 0; i < sounds_fly.length; i++) {
            let sound = sounds_fly[i];
  
            sound.prog_fight();
  
            if (sound.readyToOut) {
              sounds_fly.splice(i, 1);
              i--;
            }
          }
  
          draw_alarms();
  
          for (let i = 0; i < oils.length; i++) {
            let o = oils[i];
  
            if (!o.oil) {
              for (let k = 0; k < o.cells.length; k++) {
                o.cells[k].oil = false;
              }
  
              oils.splice(i, 1);
              i--;
            }
          }
        } else {
          //pausa
  
          //ctx3.clearRect(0,0,width,height);
  
          infoGamePanel();
  
          in_pausa_menu();
  
          menu_click = false;
  
          ////////////////////////////
          pausa_menu();
          //////////////////////////////////
  
          obj.draw();
  
          ////////////////////////////////////////////  SOUND
  
          for (let i = 0; i < sounds.length; i++) {
            let sound = sounds[i];
  
            sound.prog();
  
            if (sound.readyToOut) {
              sounds.splice(i, 1);
              i--;
            }
          }
  
          //console.log(sounds_fight.length);
  
          //if(sounds_fight.length>=20){console.log(sounds_fight); pausa=1;};
  
          //////////////////////////////////////////////////
        }
  
        //};
  
        ///////////////////////////////////////////////////////////////////////// dlya createShablona
        /*
  for(let i=0;i<ddd.length;i++){
  
  let obj=ddd[i];
  ctx.globalAlpha=0.3;	
  ctx.fillStyle="red";
  ctx.fillRect(obj.x+removeX,obj.y+removeY,50,50)	
  ctx.globalAlpha=1;	
  };
  
  if(fractions.length){
  for(let i=0;i<cccc.length;i++){
  
  let obj=cccc[i];
      
  ctx.fillStyle="green";
  ctx.fillRect(obj.x+removeX,obj.y+removeY,50,50)
  };	
  };
  
  cccc=[];
  //*/
        ////////////////////////////////////////////////////////////////
      }
    } // GLOBAL START
    else {
      //ctx3.clearRect(0,0,width,height);
      //console.log(height)
  
      do_start_draw();
  
      if (title.active) {
        title.prog_draw();
      }
  
      //1920,1800
      //ctx3.fillStyle="blue";
      //ctx3.fillRect(0,0,width,height);
    }
  
    menu_kursor_draw();
  
    if (global_zanaves.active) {
      global_zanaves_prog_draw();
    }
  
    ///////////////////////////////sound menu
  
    click_key_prog();
  
    for (let i = 0; i < sounds_fight.length; i++) {
      let sound = sounds_fight[i];
  
      sound.prog_fight();
  
      if (sound.readyToOut) {
        sounds_fight.splice(i, 1);
        i--;
      }
    }
  
    for (let i = 0; i < sounds_fly.length; i++) {
      let sound = sounds_fly[i];
  
      sound.prog_fight();
  
      if (sound.readyToOut) {
        sounds_fly.splice(i, 1);
        i--;
      }
    }
  
    for (let i = 0; i < sounds_menu.length; i++) {
      let sound = sounds_menu[i];
  
      sound.prog_sounds_menu();
  
      if (sound.readyToOut) {
        sounds_menu.splice(i, 1);
        i--;
      }
    }
  
    restart_map_prog();
  
    pausa_click = false;
    click_up = false;
  }, temp);