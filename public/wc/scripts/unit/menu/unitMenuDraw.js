/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const unit_menu_draw = function () {
  // stop peon menu_litera stop

  ctx.lineWidth = 1;
  ctx2.lineWidth = 1;
  ctx3.lineWidth = 1;

  all_units = player.selectBuildings.concat(player.selectUnits);

  all_units = all_units.concat(player.selectDragons);

  all_units = all_units.concat(player.selectIsSweem);

  let unit;

  if (all_units.length === 1) {
    unit = all_units[0];
  } else {
    if (!all_units_start) {
      for (let i = 0; i < all_units.length; i++) {
        if (!all_units[i].voice) {
          all_units[i].voice = true;

          select_sound(all_units[i], 'select_sound');

          break;
        }
      }
    }

    // for(let i=0;i<all_units.length;i++){

    // let unit=all_units[i];

    player_groop_prog(all_units);
    // console.log("here")
    // };

    all_units_start = true;

    return;
  }

  // if(unit.myJoubeTimer){dop_ok=false;}; compile

  /*
  let unit=player.selectUnits[0];

  if(player.selectBuildings.length){
      unit=player.selectBuildings[0];
  };
  */

  if (unit) {
    if (!player.menu_unit) {
      const click = { unit, timer: 100 };

      click_click.push(click);

      if (click_click.length >= 3) {
        let ok = 0;

        for (let i = 0; i < click_click.length; i++) {
          const c = click_click[i];

          if (c.unit.persolalNumber === unit.persolalNumber) {
            ok++;
          } else {
            break;
          }
        }

        if (ok === click_click.length) {
          if (!unit.voice) {
            select_sound(unit, 'click_click');
            unit.voice = true;
          }
        }
      }

      if (!unit.voice) {
        unit.voice = true;

        select_sound(unit, 'select_sound');
      }

      if (unit.unitStatus === 'life') {
        // console.log("ok");

        player.menu_unit = unit;
        player.menu_unit.list = 1;
        // console.log("start_menu_peon");
      } else {
        player.menu_unit = unit;
        player.menu_unit.list = 2;

        // console.log(unit.list)
      }
    }

    // console.log(unit.list);

    // player.menu_unit=unit;

    if (unit.dop_menu && unit.iComplite && !unit.myJoubeTimer) {
      menu_unit_for_update = unit;

      const active_cell = unit_dop_menu_control();

      in_unit_menu = unit;

      /// *

      let ok;

      for (let i = 0; i < unit_dop_menu.length; i++) {
        const obj = unit_dop_menu[i];

        if (obj.can) {
          ok = true;
          break;
        }
      }

      if (ok && unit.list === 2) {
        ctx3.globalAlpha = 0.5;

        ctx3.fillStyle = 'black';
        ctx3.fillRect(725, 485, 150, 150);

        ctx3.globalAlpha = 1;

        //* /

        for (let i = 0; i < unit_dop_menu.length; i++) {
          const obj = unit_dop_menu[i];

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
              obj.gabarit,
            );

            if (!obj.resurs) {
              ctx3.globalAlpha = 0.5;
              ctx3.fillStyle = 'blue';
              ctx3.fillRect(
                obj.x - obj.gabarit / 2,
                obj.y - obj.gabarit / 2,
                obj.gabarit,
                obj.gabarit,
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
          active_cell.gabarit,
        );

        if (!active_cell.resurs) {
          ctx3.globalAlpha = 0.5;
          ctx3.fillStyle = 'blue';
          ctx3.fillRect(
            active_cell.x - active_cell.gabarit / 2,
            active_cell.y - active_cell.gabarit / 2,
            active_cell.gabarit,
            active_cell.gabarit,
          );
          ctx3.globalAlpha = 1;
        } else {
          ctx3.strokeStyle = 'red';
          ctx3.strokeRect(
            active_cell.x - active_cell.gabarit / 2,
            active_cell.y - active_cell.gabarit / 2,
            active_cell.gabarit,
            active_cell.gabarit,
          );
        }
      }
    }

    const { face_animY } = unit;

    ctx3.drawImage(unit_m, 0, face_animY, 100, 100, 750, 250, 100, 100);

    for (let i = 0; i < unit.menu_name.length; i++) {
      const imageToDraw = unit_menu_little_liters;

      const kor = 0;

      // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

      const x = 800 - (unit.menu_name.length * 10) / 2;

      ctx.drawImage(
        imageToDraw,
        menu_litera(unit.menu_name[i]),
        0,
        12,
        12,
        x + i * 10,
        222 + kor,
        13,
        25,
      );
    }

    let i_1;
    let i_2;
    let i_3;
    let i_4;
    let i_5;
    let i_6;
    let i_7;
    let i_8;

    let center = false;

    if (unit.unitStatus === 'building') {
      if (!unit.iComplite) {
        // ctx.lineWidth=2;

        if (mig_vector2) {
          mig2 += 0.02;
        } else {
          mig2 -= 0.02;
        }

        if (mig2 >= 0.9) {
          mig_vector2 = 0;
        }
        if (mig2 <= 0.4) {
          mig_vector2 = 1;
        }

        ctx3.globalAlpha = mig2;
        ctx3.drawImage(unit_m, 0, 1900, 100, 100, 785, 405, 30, 30);
        ctx3.globalAlpha = 1;

        center = true;

        i_1 = `Complite:${
          Math.floor(String(unit.buildready))
        }/${
          String(unit.hpfull)}`;

        const l = (unit.buildready * 100) / unit.hpfull;

        const ll = (180 * l) / 100;

        ctx.fillStyle = 'green';
        ctx.fillRect(710, 385, ll, 10);

        ctx.strokeStyle = 'red';
        ctx.strokeRect(710, 385, 180, 10);
      } else {
        center = true;

        i_1 = `Hp:${Math.floor(String(unit.hp))}/${String(unit.hpfull)}`;

        if (!unit.neitral) {
          i_4 = `Level:${String(unit.level)}`;

          let l = (unit.hp * 100) / unit.hpfull;

          let ll = (180 * l) / 100;

          ctx.fillStyle = 'green';
          ctx.fillRect(710, 385, ll, 10);

          ctx.strokeStyle = 'red';
          ctx.strokeRect(710, 385, 180, 10);

          let myJoube_face_animY;

          /// //////////////////////////////////////

          myJoube_face_animY = player.menu_unit.myJoube_face_animY;

          if (unit.unitName === 'lesopilka') {
            unit.myJoubeTimer = unit.fatherFraction.myJoubeTimer_leso;
            unit.myJoube = unit.fatherFraction.myJoube_leso;

            myJoube_face_animY = player.myJoube_face_animY_leso;
          } else if (unit.unitName === 'kuznya') {
            unit.myJoubeTimer = unit.fatherFraction.myJoubeTimer_kuz;
            unit.myJoube = unit.fatherFraction.myJoube_kuz;

            myJoube_face_animY = player.myJoube_face_animY_kuz;
          } else if (unit.unitName === 'foundry') {
            unit.myJoubeTimer = unit.fatherFraction.myJoubeTimer_fou;
            unit.myJoube = unit.fatherFraction.myJoube_fou;

            myJoube_face_animY = player.myJoube_face_animY_fou;
          }

          /// /////////////////////////////////////////////

          if (unit.myJoubeTimer) {
            // 150

            // console.log(unit.myJoube)

            const time = myJoube_time(unit.myJoube);

            const pr = time - unit.myJoubeTimer;

            // console.log(unit.fatherFraction.myJoubeTimer_leso);

            // let l=(unit.myJoubeTimer*100)/myJoube_time(unit.myJoube);
            l = (pr * 100) / time;

            ll = (150 * l) / 100;

            // myJoube_face_animY

            i_8 = 'Complite';

            ctx3.drawImage(
              unit_m,
              0,
              myJoube_face_animY,
              100,
              100,
              708,
              458,
              30,
              30,
            );

            // pausa=1

            center = true;

            ctx.fillStyle = 'blue';
            ctx.fillRect(740, 462, ll, 20);

            ctx.strokeStyle = 'red';
            ctx.strokeRect(740, 462, 150, 20);
          }
        }
      }

      if (unit.unitName === 'tower' && unit.iBee && !unit.upgradeTimer) {
        i_4 = `Damage:${String(unit.attack)}`;
        i_5 = `Range:${String(unit.seeing)}`;
        center = true;
      }

      if (unit.unitName === 'oil') {
        i_1 = `Oil:${String(unit.oil)}`;
      }

      if (unit.unitName === 'oil_platform') {
        i_6 = `Oil:${String(unit.cell.oil.oil)}`;
      }

      if (unit.unitName === 'shahta') {
        i_1 = `Gold:${String(unit.gold)}`;
      }
      // console.log("gold : "+String(unit.gold))
    } else {
      // list_1_y

      i_1 = `Level:${String(unit.level)}`;
      i_2 = `Hp:${Math.floor(String(unit.hp))}/${String(unit.hpfull)}`; // "level:"+String(unit.level);

      // if(!unit.basePanzer||!unit.panzer||!unit.fatherFraction.dopNoFlyPanzer){
      i_3 = `Armor:${Math.floor(String(unit.panzer))}`;

      i_4 = `Damage:${String(unit.baseAttack)}`;
      // }
      // else{
      //	i_3="armor:"+String(unit.basePanzer)+"+"+String(unit.panzer-unit.basePanzer);
      // };

      // dopFlySee

      i_5 = `Range:${String(unit.seeing)}`;
      i_6 = `Sight:${String(unit.dash)}`;
      i_7 = `Speed:${String(unit.speed)}`;
      i_8 = `Spell:${Math.floor(String(unit.mana))}`;

      if (
        unit.type === 'turtle'
        || unit.type === 'linkor'
        || unit.type === 'distroer'
      ) {
        if (unit.fatherFraction.dopAttack > 1) {
          i_4 = `Damage:${
            String(unit.baseAttack)
          }+${
            Math.round(
              String(
                unit.baseAttack * unit.fatherFraction.dopAttack
                  - unit.baseAttack,
              ),
            )}`;
        }
      } else if (unit.type === 3) {
        if (unit.fatherFraction.dopFlyAttack > 1) {
          i_4 = `Damage:${
            String(unit.baseAttack)
          }+${
            Math.round(
              String(
                unit.baseAttack * unit.fatherFraction.dopFlyAttack
                  - unit.baseAttack,
              ),
            )}`;
        }

        if (unit.fatherFraction.dopFlySee > 0) {
          i_5 = `Range:${
            String(unit.baseSeeing)
          }+${
            String(unit.fatherFraction.dopFlySee)}`;
        }
      } else if (unit.type === 2 || unit.type === 'rizar') {
        if (unit.fatherFraction.dopNoFlyPanzer > 1) {
          i_3 = `Armor:${
            String(unit.basePanzer)
          }+${
            Math.round(
              String(
                unit.basePanzer * unit.fatherFraction.dopNoFlyPanzer
                  - unit.basePanzer,
              ),
            )}`;
        }

        if (unit.fatherFraction.dopNoFlyAttack > 1) {
          i_4 = `Damage:${
            String(unit.baseAttack)
          }+${
            Math.round(
              String(
                unit.baseAttack * unit.fatherFraction.dopNoFlyAttack
                  - unit.baseAttack,
              ),
            )}`;
        }
      } else if (unit.type === 'ballista') {
        if (unit.fatherFraction.dopBallista > 1) {
          i_4 = `Damage:${
            String(unit.baseAttack)
          }+${
            Math.round(
              String(
                unit.baseAttack * unit.fatherFraction.dopBallista
                  - unit.baseAttack,
              ),
            )}`;
        }
      } else if (!unit.warrior) {
        i_4 = `Damage:${String(0)}`;
      }

      //	unit.attack=unit.baseAttack*this.dopNoFlyAttack;
      // unit.panzer=unit.basePanzer*this.dopNoFlyPanzer;
    }

    // console.log(player.menu_unit.cell_name);

    if (player.menu_unit.cell_name) {
      const i_0 = player.menu_unit.cell_name;

      for (let i = 0; i < i_0.length; i++) {
        const obj = i_0[i];

        const imageToDraw = unit_menu_little_liters;

        // imageToDraw=unit_menu_hi_liters;

        const x = 800 - (i_0.length * 10) / 2;

        ctx3.drawImage(
          imageToDraw,
          menu_litera(obj),
          0,
          12,
          12,
          x + i * 10,
          440,
          13,
          13,
        );
      }

      if (player.menu_unit.cell_name_2) {
        const i_0 = player.menu_unit.cell_name_2;

        for (let i = 0; i < i_0.length; i++) {
          const obj = i_0[i];

          const imageToDraw = unit_menu_little_liters;

          // imageToDraw=unit_menu_hi_liters;

          const x = 800 - (i_0.length * 10) / 2;

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            460,
            13,
            13,
          );
        }
      }
    }

    player.menu_unit.cell_name = false;

    if (unit.list === 2 && unit.unitStatus === 'life') {
      center = true;

      /// ///////////////////////////////////////////////////////////////

      if (unit.passagers && unit.passagers.length) {
        const k_1 = 'Passagers : ';

        for (let i = 0; i < k_1.length; i++) {
          const obj = k_1[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          const x = 800 - (k_1.length * 10) / 2;

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            640,
            13,
            13,
          );
        }

        for (let i = 0; i < unit.passagers.length; i++) {
          const obj = unit.passagers[i];

          const x = 800 - (unit.passagers.length * 20) / 2;

          ctx3.drawImage(
            unit_m,
            0,
            obj.face_animY,
            100,
            100,
            x + i * 20,
            663,
            20,
            25,
          );
        }
      }
    }

    if (i_1) {
      for (let i = 0; i < i_1.length; i++) {
        const obj = i_1[i];

        const imageToDraw = unit_menu_little_liters;

        const kor = 0;

        // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

        let x = 740; // 800-((i_1.length*10))/2;

        if (center) {
          x = 800 - (i_1.length * 10) / 2;
        }

        ctx3.drawImage(
          imageToDraw,
          menu_litera(obj),
          0,
          12,
          12,
          x + i * 10,
          360 + kor,
          13,
          13,
        );
      }
    }

    if (i_2) {
      ctx3.globalAlpha = 0.5;
      ctx3.strokeStyle = 'yellow';
      ctx3.strokeRect(720, 379, 159, 5);

      const l = hp_graf(159, player.menu_unit.hp, player.menu_unit.hpfull);

      ctx3.fillStyle = l.color;
      ctx3.fillRect(720, 379, l.gabarit, 5);
      ctx3.globalAlpha = 1;

      for (let i = 0; i < i_2.length; i++) {
        const obj = i_2[i];

        const imageToDraw = unit_menu_little_liters;

        const kor = 0;

        // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

        let x = 770; // 800-((i_2.length*10))/2;

        if (center) {
          x = 800 - (i_2.length * 10) / 2;
        }

        ctx3.drawImage(
          imageToDraw,
          menu_litera(obj),
          0,
          12,
          12,
          x + i * 10,
          375 + kor,
          13,
          13,
        );
      }
    }

    if (
      (unit.list === 1 && unit.unitStatus === 'life')
      || (unit.list === 2 && unit.unitStatus !== 'life')
    ) {
      if (i_3) {
        for (let i = 0; i < i_3.length; i++) {
          const obj = i_3[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 740; // 800-((i_3.length*10))/2;

          if (center) {
            x = 800 - (i_3.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            390 + kor,
            13,
            13,
          );
        }
      }

      if (i_4) {
        for (let i = 0; i < i_4.length; i++) {
          const obj = i_4[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 730; // 800-((i_4.length*10))/2;

          // console.log(center)

          if (center) {
            x = 800 - (i_4.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            405 + kor,
            13,
            13,
          );
        }
      }

      if (i_5) {
        for (let i = 0; i < i_5.length; i++) {
          const obj = i_5[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 740; // 800-((i_5.length*10))/2

          if (center) {
            x = 800 - (i_5.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            420 + kor,
            13,
            13,
          );
        }
      }

      if (i_6) {
        for (let i = 0; i < i_6.length; i++) {
          const obj = i_6[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 740; // 800-((i_6.length*10))/2;

          if (center) {
            x = 800 - (i_6.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            435 + kor,
            13,
            13,
          );
        }
      }

      if (i_7) {
        for (let i = 0; i < i_7.length; i++) {
          const obj = i_7[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 740; // 800-((i_7.length*10))/2;

          if (center) {
            x = 800 - (i_7.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            450 + kor,
            13,
            13,
          );
        }
      }

      if (i_8) {
        if (player.menu_unit.mana) {
          ctx3.globalAlpha = 0.5;
          ctx3.strokeStyle = 'blue';
          ctx3.strokeRect(720, 468, 159, 5);

          const l = hp_graf(159, player.menu_unit.mana, 100);

          ctx3.fillStyle = 'blue';
          ctx3.fillRect(720, 468, l.gabarit, 5);
          ctx3.globalAlpha = 1;
        }

        for (let i = 0; i < i_8.length; i++) {
          const obj = i_8[i];

          const imageToDraw = unit_menu_little_liters;

          const kor = 0;

          // if(!i){imageToDraw=unit_menu_hi_liters; kor=-2;};

          let x = 740; // 800-((i_8.length*10))/2;

          if (center) {
            x = 800 - (i_8.length * 10) / 2;
          }

          ctx3.drawImage(
            imageToDraw,
            menu_litera(obj),
            0,
            12,
            12,
            x + i * 10,
            465 + kor,
            13,
            13,
          );
        }
      }
    }

    if (unit.list === 1 && unit.unitStatus === 'life' && unit.list_1_y) {
      const x = 770;
      const y = 550;
      const gabarit = 60;

      ctx3.drawImage(
        unit_m,
        0,
        unit.list_1_y,
        100,
        100,
        x,
        y,
        gabarit,
        gabarit,
      );

      if (obj.x > 700 && !pausa) {
        if (
          obj.x <= x + gabarit
          && obj.x >= x
          && obj.y <= y + gabarit
          && obj.y >= y
        ) {
          ctx3.strokeStyle = 'red';
          ctx3.strokeRect(x, y, gabarit, gabarit);

          if (menu_click) {
            menu_click = false;
            unit.list = 2;
          }
        }
      }

      // list_1_stop_y

      if (
        unit.list === 1
        && unit.unitName === 'peon'
        && unit.way.length
        && !unit.iGetTarget
      ) {
        const x = 770;
        const y = 615;
        const gabarit = 60;

        ctx3.drawImage(
          unit_m,
          0,
          unit.list_1_stop_y,
          100,
          100,
          x,
          y,
          gabarit,
          gabarit,
        );

        if (obj.x > 700) {
          if (
            !pausa
            && obj.x <= x + gabarit
            && obj.x >= x
            && obj.y <= y + gabarit
            && obj.y >= y
          ) {
            ctx3.strokeStyle = 'red';
            ctx3.strokeRect(x, y, gabarit, gabarit);

            if (menu_click) {
              menu_click = false;

              unit.way = [];
              unit.clickSave = false;
              unit.target = 0;
            }
          }
        }
      }
    }

    if (dop_ok && !unit.myJoubeTimer) {
      // console.log("ok");

      if (unit.type === 'mag' || unit.type === 'rizar') {
        /// /////////////////////////////////////////////////////////////////	mana
        // ctx3.drawImage(unit_m,0,1300,100,100,760,640,20,10);

        const lit = `Spell:${Math.floor(String(unit.mana))}/${String(100)}`;

        for (let i = 0; i < lit.length; i++) {
          ctx3.drawImage(
            unit_menu_little_liters,
            menu_litera(lit[i]),
            0,
            12,
            12,
            750 + i * 10,
            640,
            13,
            13,
          );
        }

        if (unit.mana < 100) {
          ctx3.drawImage(unit_m, 0, 1800, 100, 100, 730, 640, 20, 10);
        } else {
          ctx3.drawImage(unit_m, 0, 1700, 100, 100, 730, 640, 20, 10);
        }

        /// ////////////////////////////////////////////////////////////////////

        return;
      }

      /// /////////////////////////////////////////////////////////////////	golg
      ctx3.drawImage(unit_m, 0, 1300, 100, 100, 760, 640, 20, 10);

      lit = `: ${String(dop_ok.gold)}`;

      for (let i = 0; i < lit.length; i++) {
        ctx3.drawImage(
          unit_menu_little_liters,
          menu_litera(lit[i]),
          0,
          12,
          12,
          790 + i * 10,
          640,
          13,
          13,
        );
      }

      if (unit.fatherFraction.gold < dop_ok.gold) {
        ctx3.drawImage(unit_m, 0, 1800, 100, 100, 730, 640, 20, 10);
      } else {
        ctx3.drawImage(unit_m, 0, 1700, 100, 100, 730, 640, 20, 10);
      }

      /// ////////////////////////////////////////////////////////////////////

      /// ///////////////////////////////////// wood

      ctx3.drawImage(unit_m, 0, 1400, 100, 100, 760, 653, 20, 10);

      lit = `: ${String(dop_ok.wood)}`;

      for (let i = 0; i < lit.length; i++) {
        ctx3.drawImage(
          unit_menu_little_liters,
          menu_litera(lit[i]),
          0,
          12,
          12,
          790 + i * 10,
          653,
          13,
          13,
        );
      }

      if (unit.fatherFraction.wood < dop_ok.wood) {
        ctx3.drawImage(unit_m, 0, 1800, 100, 100, 730, 653, 20, 10);
      } else {
        ctx3.drawImage(unit_m, 0, 1700, 100, 100, 730, 653, 20, 10);
      }

      /// /////////////////////////////////////////////////////////

      /// /////////////////////////////////////////////////////////  oil

      ctx3.drawImage(unit_m, 0, 1500, 100, 100, 760, 666, 20, 10);

      lit = `: ${String(dop_ok.oil)}`;

      for (let i = 0; i < lit.length; i++) {
        ctx3.drawImage(
          unit_menu_little_liters,
          menu_litera(lit[i]),
          0,
          12,
          12,
          790 + i * 10,
          666,
          13,
          13,
        );
      }

      if (unit.fatherFraction.oil < dop_ok.oil) {
        ctx3.drawImage(unit_m, 0, 1800, 100, 100, 730, 666, 20, 10);
      } else {
        ctx3.drawImage(unit_m, 0, 1700, 100, 100, 730, 666, 20, 10);
      }

      /// ///////////////////////////////////////////////////////////

      /// /////////////////////////////////////////////////////////  food

      if (dop_ok.foot) {
        ctx3.drawImage(unit_m, 0, 1600, 100, 100, 760, 679, 20, 10);

        lit = `: ${String(dop_ok.foot)}`;

        for (let i = 0; i < lit.length; i++) {
          ctx3.drawImage(
            unit_menu_little_liters,
            menu_litera(lit[i]),
            0,
            12,
            12,
            790 + i * 10,
            679,
            13,
            13,
          );
        }

        if (
          unit.fatherFraction.maxUnits <= unit.fatherFraction.peoples.length
        ) {
          ctx3.drawImage(unit_m, 0, 1800, 100, 100, 730, 679, 20, 10);
        } else {
          ctx3.drawImage(unit_m, 0, 1700, 100, 100, 730, 679, 20, 10);
        }
      }

      /// ///////////////////////////////////////////////////////////

      if (dop_ok.farm) {
        ctx3.drawImage(unit_m, 0, 1300, 100, 100, 760, 679, 20, 10);
      }
    }
  }
};
