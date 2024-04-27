const player_groop_draw = function (units) {
    //menu_litera
  
    if (unit_dop_menu.length) {
      let active_cell = unit_dop_menu_control();
  
      ///*
  
      let ok;
  
      for (let i = 0; i < unit_dop_menu.length; i++) {
        let obj = unit_dop_menu[i];
  
        if (obj.can) {
          ok = true;
          break;
        }
      }
  
      if (ok) {
        ctx3.globalAlpha = 0.5;
  
        ctx3.fillStyle = "black";
        ctx3.fillRect(725, 485, 150, 150);
  
        ctx3.globalAlpha = 1;
  
        //*/
  
        for (let i = 0; i < unit_dop_menu.length; i++) {
          let obj = unit_dop_menu[i];
  
          if (!obj.active && obj.can) {
            ctx3.drawImage(
              unit_m,
              0,
              obj.face_animY,
              100,
              100,
              obj.x - obj.gabarit / 2,
              obj.y - obj.gabarit / 2,
              obj.gabarit,
              obj.gabarit
            );
  
            if (!obj.resurs) {
              ctx3.globalAlpha = 0.5;
              ctx3.fillStyle = "blue";
              ctx3.fillRect(
                obj.x - obj.gabarit / 2,
                obj.y - obj.gabarit / 2,
                obj.gabarit,
                obj.gabarit
              );
              ctx3.globalAlpha = 1;
            }
          }
        }
      }
  
      if (active_cell) {
        ctx3.drawImage(
          unit_m,
          0,
          active_cell.face_animY,
          100,
          100,
          active_cell.x - active_cell.gabarit / 2,
          active_cell.y - active_cell.gabarit / 2,
          active_cell.gabarit,
          active_cell.gabarit
        );
  
        if (!active_cell.resurs) {
          ctx3.globalAlpha = 0.5;
          ctx3.fillStyle = "blue";
          ctx3.fillRect(
            active_cell.x - active_cell.gabarit / 2,
            active_cell.y - active_cell.gabarit / 2,
            active_cell.gabarit,
            active_cell.gabarit
          );
          ctx3.globalAlpha = 1;
        } else {
          ctx3.strokeStyle = "red";
          ctx3.strokeRect(
            active_cell.x - active_cell.gabarit / 2,
            active_cell.y - active_cell.gabarit / 2,
            active_cell.gabarit,
            active_cell.gabarit
          );
        }
  
        //console.log(active_cell);// return
  
        let i_0 = active_cell.menu_name;
  
        if (i_0 && i_0.length) {
          ///////  ?????????????????????
  
          for (let i = 0; i < i_0.length; i++) {
            let obj = i_0[i];
  
            let imageToDraw = unit_menu_little_liters;
  
            //imageToDraw=unit_menu_hi_liters;
  
            let x = 800 - (i_0.length * 10) / 2;
  
            ctx3.drawImage(
              imageToDraw,
              menu_litera(obj),
              0,
              12,
              12,
              x + i * 10,
              440,
              15,
              15
            );
          }
  
          i_0 = active_cell.menu_name_2;
  
          for (let i = 0; i < i_0.length; i++) {
            let obj = i_0[i];
  
            let imageToDraw = unit_menu_little_liters;
  
            //imageToDraw=unit_menu_hi_liters;
  
            let x = 800 - (i_0.length * 10) / 2;
  
            ctx3.drawImage(
              imageToDraw,
              menu_litera(obj),
              0,
              12,
              12,
              x + i * 10,
              460,
              15,
              15
            );
          }
        } ////////////// ?????????????????????????
      }
    }
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    //hp_graf
  
    for (let i = 0; i < units.length; i++) {
      let obj = units[i];
  
      ctx3.drawImage(
        unit_m,
        0,
        obj.face_animY,
        100,
        100,
        obj.groop_menu_animX,
        obj.groop_menu_animY,
        40,
        40
      );
  
      let inst = hp_graf(40, obj.hp, obj.hpfull);
  
      ctx3.fillStyle = inst.color;
      ctx3.fillRect(
        obj.groop_menu_animX,
        obj.groop_menu_animY + 41,
        inst.gabarit,
        4
      );
  
      ctx3.strokeStyle = "green";
      ctx3.strokeRect(obj.groop_menu_animX, obj.groop_menu_animY + 41, 40, 4);
  
      if (obj.mana) {
        let inst = hp_graf(40, obj.mana, 100);
  
        ctx3.fillStyle = "blue";
        ctx3.fillRect(
          obj.groop_menu_animX,
          obj.groop_menu_animY - 6,
          inst.gabarit,
          4
        );
  
        ctx3.strokeStyle = "blue";
        ctx3.strokeRect(obj.groop_menu_animX, obj.groop_menu_animY - 6, 40, 4);
      }
  
      if (obj.groop_menu_active) {
        ctx3.strokeStyle = "red";
        ctx3.strokeRect(obj.groop_menu_animX, obj.groop_menu_animY, 40, 40);
      }
  
      obj.groop_menu_active = false;
    }
  };