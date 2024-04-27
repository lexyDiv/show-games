/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
Fraction.prototype.unit_dop_menu_create = function () {
  if (groop_mem_unit === true) {
    groop_mem_unit = false;

    let ok = true;

    let all_free = true;
    let all_hold = true;

    for (let i = 0; i < all_units.length; i++) {
      const obj = all_units[i];

      if (obj.hold_position) {
        all_free = false;
      } else {
        all_hold = false;
      }

      if (!obj.canHold) {
        ok = false;
      }
    }

    if (ok) {
      ind = 1;

      unit_dop_menu[ind].can = true;

      if (this.nation === 'h') {
        unit_dop_menu[ind].face_animY = 10000;
        unit_dop_menu[ind].menu_name = 'Free';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      } else {
        unit_dop_menu[ind].face_animY = 10100;
        unit_dop_menu[ind].menu_name = 'Free';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      }

      unit_dop_menu[ind].name = 'hold_stop groop';

      unit_dop_menu[ind].resurs = !all_free;

      // console.log(unit_dop_menu[0].resurs)check_resurs

      // unit_dop_menu[ind].gold=1500;
      // unit_dop_menu[ind].wood=500;
      // unit_dop_menu[ind].oil=0;

      /// /////////////////////////////////////

      ind = 0;

      unit_dop_menu[ind].can = true;

      if (this.nation === 'h') {
        unit_dop_menu[ind].face_animY = 9800;
        unit_dop_menu[ind].menu_name = 'Hold position';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      } else {
        unit_dop_menu[ind].face_animY = 9900;
        unit_dop_menu[ind].menu_name = 'Hold position';
        unit_dop_menu[ind].menu_name_2 = 'groop';
      }

      unit_dop_menu[ind].name = 'hold groop';

      unit_dop_menu[ind].resurs = !all_hold;

      // console.log(unit_dop_menu[0].resurs)check_resurs

      // unit_dop_menu[ind].gold=1500;
      // unit_dop_menu[ind].wood=500;
      // unit_dop_menu[ind].oil=0;

      /// /////////////////////////////////////
    }
  } else {
    all_units = false;

    if (menu_unit_for_update && menu_unit_for_update.cell) {
      /// *
      unit_dop_menu[0].can = false;
      unit_dop_menu[1].can = false;
      unit_dop_menu[2].can = false;
      unit_dop_menu[3].can = false;
      unit_dop_menu[4].can = false;
      unit_dop_menu[5].can = false;
      unit_dop_menu[6].can = false;
      unit_dop_menu[7].can = false;
      unit_dop_menu[8].can = false;
      unit_dop_menu[9].can = false;
      unit_dop_menu[10].can = false;
      unit_dop_menu[11].can = false;
      unit_dop_menu[12].can = false;
      unit_dop_menu[13].can = false;
      unit_dop_menu[14].can = false;
      unit_dop_menu[15].can = false;
      unit_dop_menu[16].can = false;
      unit_dop_menu[17].can = false;
      unit_dop_menu[18].can = false;
      unit_dop_menu[19].can = false;
      unit_dop_menu[20].can = false;
      unit_dop_menu[21].can = false;
      unit_dop_menu[22].can = false;
      unit_dop_menu[23].can = false;
      // unit_dop_menu[24].can=false;
      //* /

      if (menu_unit_for_update.type === 'transport') {
        // console.log("here");

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 12300;
          unit_dop_menu[ind].menu_name = 'Passagers out';
          // unit_dop_menu[ind].name="nar";
        } else {
          unit_dop_menu[ind].face_animY = 12400;
          unit_dop_menu[ind].menu_name = 'Passagers out';
          // unit_dop_menu[ind].name="z";
        }

        unit_dop_menu[ind].name = 'passagers out';

        unit_dop_menu[ind].resurs = menu_unit_for_update.landing && menu_unit_for_update.passagers.length;
      } else if (menu_unit_for_update.type === 'mag') {
        // menu_unit_for_update.mana=100;

        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 11;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10800;
          unit_dop_menu[ind].menu_name = 'Freeze';
          unit_dop_menu[ind].name = 'nar';
        } else {
          unit_dop_menu[ind].face_animY = 10900;
          unit_dop_menu[ind].menu_name = 'Dead';
          unit_dop_menu[ind].name = 'z';
        }

        // unit_dop_menu[ind].name="z";

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;
        unit_dop_menu[ind].mana = 100;
        ind = 10;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10700;
          unit_dop_menu[ind].menu_name = 'Tornado';
        } else {
          unit_dop_menu[ind].face_animY = 10700;
          unit_dop_menu[ind].menu_name = 'Tornado';
        }

        unit_dop_menu[ind].name = 'tor';

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;

        unit_dop_menu[ind].mana = 100;

        if (
          menu_unit_for_update.magick
            && !menu_unit_for_update.anim_magick_timer
        ) {
          unit_dop_menu[24].can = true;
          unit_dop_menu[24].face_animY = 900;
          unit_dop_menu[24].resurs = true;
          unit_dop_menu[24].name = 'out';
          unit_dop_menu[24].menu_name = 'Stop magick';
        } else {
          unit_dop_menu[24].can = false;
          // unit_dop_menu[24].face_animY=900;
          // unit_dop_menu[24].resurs=true;
          // unit_dop_menu[24].name="out";
          // unit_dop_menu[24].menu_name="stop magick";
        }
      }

      if (menu_unit_for_update.type === 'rizar' && this.canMagick) {
        // console.log("here");

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 10;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10600;
          unit_dop_menu[ind].menu_name = 'Cure';
          unit_dop_menu[ind].name = 'cure';
        } else {
          unit_dop_menu[ind].face_animY = 11000;
          unit_dop_menu[ind].menu_name = 'Rage';
          unit_dop_menu[ind].name = 'rage';
        }

        unit_dop_menu[ind].resurs = menu_unit_for_update.mana === 100;

        unit_dop_menu[ind].mana = 100;

        if (menu_unit_for_update.magick && !menu_unit_for_update.magickTarget) {
          unit_dop_menu[24].can = true;
          unit_dop_menu[24].face_animY = 900;
          unit_dop_menu[24].resurs = true;
          unit_dop_menu[24].name = 'out';
          unit_dop_menu[24].menu_name = 'Stop magick';
        } else {
          unit_dop_menu[24].can = false;
          // unit_dop_menu[24].face_animY=900;
          // unit_dop_menu[24].resurs=true;
          // unit_dop_menu[24].name="out";
          // unit_dop_menu[24].menu_name="stop magick";
        }
      }

      if (menu_unit_for_update.type === 'oil_tanker') {
        let ind;

        // console.log(this.canGuardTower);

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 11300;
          unit_dop_menu[ind].menu_name = 'Oil platform';
        } else {
          unit_dop_menu[ind].face_animY = 11400;
          unit_dop_menu[ind].menu_name = 'Oil platform';
        }

        unit_dop_menu[ind].name = 'oil_platform';

        unit_dop_menu[ind].resurs = this.gold >= 1000 && this.wood >= 300;
        // &&
        // menu_unit_for_update.fatherFraction.maxUnits>menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        // unit_dop_menu[ind].doo=["oil_platform",myJoube_time("towerOnUpgrade")];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        let ok;

        for (let i = 0; i < this.oil_platforms.length; i++) {
          if (this.oil_platforms[i].hp > 0 && this.oil_platforms[i].iComplite) {
            ok = true;
            break;
          }
        }

        ind = 20;

        unit_dop_menu[ind].can = this.canFoundry && ok;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 11900;
          unit_dop_menu[ind].menu_name = 'Get oil';
        } else {
          unit_dop_menu[ind].face_animY = 12000;
          unit_dop_menu[ind].menu_name = 'Get oil';
        }

        unit_dop_menu[ind].name = 'get oil';

        unit_dop_menu[ind].resurs = true;
      } else if (menu_unit_for_update.canHold) {
        let ind;
        ind = 1;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10000;
          unit_dop_menu[ind].menu_name = 'Free';
        } else {
          unit_dop_menu[ind].face_animY = 10100;
          unit_dop_menu[ind].menu_name = 'Free';
        }

        unit_dop_menu[ind].name = 'hold_stop';

        unit_dop_menu[ind].resurs = menu_unit_for_update.hold_position;
        ind = 0;

        unit_dop_menu[ind].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9800;
          unit_dop_menu[ind].menu_name = 'Hold position';
        } else {
          unit_dop_menu[ind].face_animY = 9900;
          unit_dop_menu[ind].menu_name = 'Hold position';
        }

        unit_dop_menu[ind].name = 'hold';

        unit_dop_menu[ind].resurs = !menu_unit_for_update.hold_position; // this.check_resurs_pro(unit_dop_menu[ind].name)===unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        // unit_dop_menu[ind].gold=1500;
        // unit_dop_menu[ind].wood=500;
        // unit_dop_menu[ind].oil=0;

        /// /////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'tower') {
        let ind;

        // console.log(this.canGuardTower);

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canGuardTower && !menu_unit_for_update.iBee;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10200;
          unit_dop_menu[ind].menu_name = 'Guard tower';
        } else {
          unit_dop_menu[ind].face_animY = 10400;
          unit_dop_menu[ind].menu_name = 'Guard tower';
        }

        unit_dop_menu[ind].name = 'guard';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;
        // &&
        // menu_unit_for_update.fatherFraction.maxUnits>menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 200;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        unit_dop_menu[ind].doo = ['guard', myJoube_time('towerOnUpgrade')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canGuardTower && !menu_unit_for_update.iBee;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 10300;
          unit_dop_menu[ind].menu_name = 'Cannon tower';
        } else {
          unit_dop_menu[ind].face_animY = 10500;
          unit_dop_menu[ind].menu_name = 'Cannon tower';
        }

        unit_dop_menu[ind].name = 'cannon';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 200;
        unit_dop_menu[ind].oil = 0;
        // unit_dop_menu[ind].foot=1;
        unit_dop_menu[ind].doo = ['cannon', myJoube_time('towerOnUpgrade')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'dragon_roost') {
        let ind = 0;
        unit_dop_menu[ind].can = this.canDragoon;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9500;
          unit_dop_menu[ind].menu_name = 'Gryphon rider';
        } else {
          unit_dop_menu[ind].face_animY = 9600;
          unit_dop_menu[ind].menu_name = 'Dragon';
        }

        unit_dop_menu[ind].name = 'dragoon';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 5000;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['dragoon', myJoube_time('dragoon')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'temple') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.temples.length;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9300;
          unit_dop_menu[ind].menu_name = 'Mag';
        } else {
          unit_dop_menu[ind].face_animY = 9400;
          unit_dop_menu[ind].menu_name = 'Death knight';
        }

        unit_dop_menu[ind].name = 'mag';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['mag', myJoube_time('mag')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'port') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canTransport;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8300;
          unit_dop_menu[ind].menu_name = 'Transport';
        } else {
          unit_dop_menu[ind].face_animY = 8400;
          unit_dop_menu[ind].menu_name = 'Transport';
        }

        unit_dop_menu[ind].name = 'transport';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['transport', myJoube_time('transport')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canOilTanker;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8500;
          unit_dop_menu[ind].menu_name = 'Oil tanker';
        } else {
          unit_dop_menu[ind].face_animY = 8600;
          unit_dop_menu[ind].menu_name = 'Oil tanker';
        }

        unit_dop_menu[ind].name = 'oil_tanker';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['oil_tanker', myJoube_time('oil_tanker')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 5;

        unit_dop_menu[ind].can = this.canDistroer;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8700;
          unit_dop_menu[ind].menu_name = 'Elven destroyer';
        } else {
          unit_dop_menu[ind].face_animY = 8800;
          unit_dop_menu[ind].menu_name = 'Troll destroyer';
        }

        unit_dop_menu[ind].name = 'distroer';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['distroer', myJoube_time('distroer')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 6;

        unit_dop_menu[ind].can = this.canLinkor;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 9100;
          unit_dop_menu[ind].menu_name = 'Gnomish submarine';
        } else {
          unit_dop_menu[ind].face_animY = 9200;
          unit_dop_menu[ind].menu_name = 'Giant turtle';
        }

        unit_dop_menu[ind].name = 'turtle';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1200;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['turtle', myJoube_time('turtle')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 7;

        unit_dop_menu[ind].can = this.canLinkor;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 8900;
          unit_dop_menu[ind].menu_name = 'Battleship';
        } else {
          unit_dop_menu[ind].face_animY = 9000;
          unit_dop_menu[ind].menu_name = 'Ogre juggernaught';
        }

        unit_dop_menu[ind].name = 'linkor';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 500;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['linkor', myJoube_time('linkor')];

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (
        menu_unit_for_update.unitName === 'foundry'
          && !this.myJoubeTimer_fou
      ) {
        let ind;

        /// //////////////////////////////////////////////////

        /*
    this.dopNoFlyAttack_level<5
    ||
    this.dopNoFlyPanzer_level<5
    ||
    this.dopBallista_level<3
    */

        ind = 0;

        unit_dop_menu[ind].can = this.canLinkor
        // &&
        //! this.myJoubeTimer_kuz

            && this.dopAttack_level < 5;

        // console.log(this.dopNoFlyAttack_level);

        if (this.dopAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 7700;
            } else if (this.dopAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 7800;
            } else if (this.dopAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 7900;
            }

            unit_dop_menu[ind].menu_name = `Ships fire up + ${String(20)}%`;
          } else {
            if (this.dopAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 8000;
            } else if (this.dopAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 8100;
            } else if (this.dopAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 8200;
            }

            unit_dop_menu[ind].menu_name = `Ships fire up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopAttack';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      } else if (
        menu_unit_for_update.unitName === 'kuznya'
          && !this.myJoubeTimer_kuz
      ) {
        let ind;

        /// //////////////////////////////////////////////////

        /*
    this.dopNoFlyAttack_level<5
    ||
    this.dopNoFlyPanzer_level<5
    ||
    this.dopBallista_level<3
    */

        ind = 0;

        unit_dop_menu[ind].can = this.canBallista
        // &&
        //! this.myJoubeTimer_kuz

            && this.dopNoFlyAttack_level < 5;
        // ||
        // this.dopFlySee_level<3

        // console.log(this.dopNoFlyAttack_level);

        if (this.dopNoFlyAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopNoFlyAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 6400;
            } else if (this.dopNoFlyAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 6500;
            } else if (this.dopNoFlyAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 6600;
            }

            unit_dop_menu[ind].menu_name = `Swords up + ${String(20)}%`;
          } else {
            if (this.dopNoFlyAttack_level < 2) {
              unit_dop_menu[ind].face_animY = 11600;
            } else if (this.dopNoFlyAttack_level < 4) {
              unit_dop_menu[ind].face_animY = 11700;
            } else if (this.dopNoFlyAttack_level === 4) {
              unit_dop_menu[ind].face_animY = 11800;
            }

            unit_dop_menu[ind].menu_name = `Axes up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopNoFlyAttack_level';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }

        if (this.dopNoFlyPanzer_level < 5) {
          ind = 1;

          unit_dop_menu[ind].can = this.canBallista;
          // &&
          //! this.myJoubeTimer_kuz;

          if (this.nation === 'h') {
            if (this.dopNoFlyPanzer_level < 2) {
              unit_dop_menu[ind].face_animY = 6700;
            } else if (this.dopNoFlyPanzer_level < 4) {
              unit_dop_menu[ind].face_animY = 6800;
            } else if (this.dopNoFlyPanzer_level === 4) {
              unit_dop_menu[ind].face_animY = 6900;
            }

            unit_dop_menu[ind].menu_name = `Shilds up + ${String(20)}%`;
          } else {
            if (this.dopNoFlyPanzer_level < 2) {
              unit_dop_menu[ind].face_animY = 7000;
            } else if (this.dopNoFlyPanzer_level < 4) {
              unit_dop_menu[ind].face_animY = 7100;
            } else if (this.dopNoFlyPanzer_level === 4) {
              unit_dop_menu[ind].face_animY = 7200;
            }

            unit_dop_menu[ind].menu_name = `Shilds up + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopNoFlyPanzer_level';
          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name;

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;
        }

        /// //////////////////////////////////////////////////////////////////////////////////////////

        if (this.dopBallista_level < 3) {
          ind = 2;

          unit_dop_menu[ind].can = this.canBallista;
          // &&
          //! this.myJoubeTimer_kuz;

          if (this.nation === 'h') {
            if (this.dopBallista_level < 2) {
              unit_dop_menu[ind].face_animY = 7300;
            } else {
              unit_dop_menu[ind].face_animY = 7400;
            }

            unit_dop_menu[ind].menu_name = 'Ballista bolt up';
            unit_dop_menu[ind].menu_name_2 = ` + ${String(20)}%`;
          } else {
            if (this.dopBallista_level < 2) {
              unit_dop_menu[ind].face_animY = 7500;
            } else {
              unit_dop_menu[ind].face_animY = 7600;
            }

            unit_dop_menu[ind].menu_name = 'Catapult carnel up';
            unit_dop_menu[ind].menu_name_2 = ` + ${String(20)}%`;
          }

          unit_dop_menu[ind].name = 'dopBallista';

          unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[ind].gold = 1000;
          unit_dop_menu[ind].wood = 500;
          unit_dop_menu[ind].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      } else if (menu_unit_for_update.unitName === 'barack') {
        let ind;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 3;

        unit_dop_menu[ind].can = this.canRizar;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 6200;
          unit_dop_menu[ind].menu_name = 'Knight';
        } else {
          unit_dop_menu[ind].face_animY = 6300;
          unit_dop_menu[ind].menu_name = 'Ogre';
        }

        unit_dop_menu[ind].name = 'rizar';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 100;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['rizar', myJoube_time('rizar')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 0;

        unit_dop_menu[ind].can = this.canMechnick;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5600;
          unit_dop_menu[ind].menu_name = 'Footman';
        } else {
          unit_dop_menu[ind].face_animY = 5700;
          unit_dop_menu[ind].menu_name = 'Grunt';
        }

        unit_dop_menu[ind].name = 'mechnick';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 600;
        unit_dop_menu[ind].wood = 0;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['mechnick', myJoube_time('mechnick')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 1;

        unit_dop_menu[ind].can = this.canLuchnick;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5800;
          unit_dop_menu[ind].menu_name = 'Elven archer';
        } else {
          unit_dop_menu[ind].face_animY = 5900;
          unit_dop_menu[ind].menu_name = 'Troll axethrower';
        }

        unit_dop_menu[ind].name = 'luchnik';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 500;
        unit_dop_menu[ind].wood = 50;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['luchnik', myJoube_time('luchnik')];

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 2;

        unit_dop_menu[ind].can = this.canBallista;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 6000;
          unit_dop_menu[ind].menu_name = 'Ballista';
        } else {
          unit_dop_menu[ind].face_animY = 6100;
          unit_dop_menu[ind].menu_name = 'Catapult';
        }

        unit_dop_menu[ind].name = 'ballista';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
              === unit_dop_menu[ind].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;
        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;
        unit_dop_menu[ind].foot = 1;
        unit_dop_menu[ind].doo = ['ballista', myJoube_time('ballista')];
      } else if (menu_unit_for_update.unitName === 'peon') {
        let ind;

        unit_dop_menu[20].can = !player_pro_building;

        if (this.nation === 'h') {
          unit_dop_menu[20].face_animY = 1100;
        } else {
          unit_dop_menu[20].face_animY = 1000;
        }

        unit_dop_menu[20].name = 'gold';

        unit_dop_menu[20].menu_name = 'Get gold';

        if (
          menu_unit_for_update.gold
            && menu_unit_for_update.fatherFraction.canFarm
        ) {
          unit_dop_menu[20].resurs = true;
        } else if (
          menu_unit_for_update.gold
            && !menu_unit_for_update.fatherFraction.canFarm
        ) {
          unit_dop_menu[20].resurs = false;
        } else if (
          !menu_unit_for_update.gold
            && !allContinents[menu_unit_for_update.cell.continent].shahts.length
        ) {
          unit_dop_menu[20].resurs = false;
        } else {
          unit_dop_menu[20].resurs = true;
        }

        unit_dop_menu[21].can = !player_pro_building;

        if (this.nation === 'h') {
          unit_dop_menu[21].face_animY = 1200;
        } else {
          unit_dop_menu[21].face_animY = 1200;
        }

        unit_dop_menu[21].name = 'wood';

        unit_dop_menu[21].menu_name = 'Get wood';

        if (
          menu_unit_for_update.wood
            && (menu_unit_for_update.fatherFraction.canFarm
              || menu_unit_for_update.fatherFraction.canLuchnick)
        ) {
          unit_dop_menu[21].resurs = true;
        } else if (
          menu_unit_for_update.wood
            && !menu_unit_for_update.fatherFraction.canFarm
            && !menu_unit_for_update.fatherFraction.canLuchnick
        ) {
          unit_dop_menu[21].resurs = false;
        } else if (
          !menu_unit_for_update.wood
            && !allContinents[menu_unit_for_update.cell.continent].woods.length
        ) {
          unit_dop_menu[21].resurs = false;
        } else {
          unit_dop_menu[21].resurs = true;
        }

        /// /////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 9;

        unit_dop_menu[ind].can = this.canTower;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5400;
          unit_dop_menu[ind].menu_name = 'Scout tower';
        } else {
          unit_dop_menu[ind].face_animY = 5500;
          unit_dop_menu[ind].menu_name = 'Watch tower';
        }

        unit_dop_menu[ind].name = 'tower';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1500;
        unit_dop_menu[ind].wood = 500;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[0].face_animY = 400;
          unit_dop_menu[0].menu_name = 'Town hall';
        } else {
          unit_dop_menu[0].face_animY = 500;
          unit_dop_menu[0].menu_name = 'Great hall';
        }

        unit_dop_menu[0].name = 'townHoll';

        unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
            === unit_dop_menu[0].name;

        // console.log(unit_dop_menu[0].resurs) check_resurs

        unit_dop_menu[0].gold = 1000;
        unit_dop_menu[0].wood = 1000;
        unit_dop_menu[0].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[1].can = this.canFarm;

        if (this.nation === 'h') {
          unit_dop_menu[1].face_animY = 700;
          unit_dop_menu[1].menu_name = 'Farm';
        } else {
          unit_dop_menu[1].face_animY = 800;
          unit_dop_menu[1].menu_name = 'Pig farm';
        }

        unit_dop_menu[1].name = 'farm';

        unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
            === unit_dop_menu[1].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[1].gold = 500;
        unit_dop_menu[1].wood = 300;
        unit_dop_menu[1].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[2].can = this.canLesopilka;

        if (this.nation === 'h') {
          unit_dop_menu[2].face_animY = 2400;
          unit_dop_menu[2].menu_name = 'Elven lumber mill';
        } else {
          unit_dop_menu[2].face_animY = 2500;
          unit_dop_menu[2].menu_name = 'Troll lumber mill';
        }

        unit_dop_menu[2].name = 'lesopilka';

        unit_dop_menu[2].resurs = this.check_resurs_pro(unit_dop_menu[2].name)
            === unit_dop_menu[2].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[2].gold = 700;
        unit_dop_menu[2].wood = 500;
        unit_dop_menu[2].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        // Great hall

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[3].can = this.canBarack;

        if (this.nation === 'h') {
          unit_dop_menu[3].face_animY = 2600;
          unit_dop_menu[3].menu_name = 'Barracks';
        } else {
          unit_dop_menu[3].face_animY = 2700;
          unit_dop_menu[3].menu_name = 'Barracks';
        }

        unit_dop_menu[3].name = 'barack';

        unit_dop_menu[3].resurs = this.check_resurs_pro(unit_dop_menu[3].name)
            === unit_dop_menu[3].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[3].gold = 700;
        unit_dop_menu[3].wood = 500;
        unit_dop_menu[3].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[4].can = this.canKuznya;

        if (this.nation === 'h') {
          unit_dop_menu[4].face_animY = 3800;
        } else {
          unit_dop_menu[4].face_animY = 3900;
        }

        unit_dop_menu[4].name = 'kuznya';
        unit_dop_menu[4].menu_name = 'Blacksmith';

        unit_dop_menu[4].resurs = this.check_resurs_pro(unit_dop_menu[4].name)
            === unit_dop_menu[4].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[4].gold = 700;
        unit_dop_menu[4].wood = 500;
        unit_dop_menu[4].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 17;

        unit_dop_menu[ind].can = this.canPort;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4000;
        } else {
          unit_dop_menu[ind].face_animY = 4100;
        }

        unit_dop_menu[ind].name = 'port';
        unit_dop_menu[ind].menu_name = 'Shipyard';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 18;

        unit_dop_menu[ind].can = this.canOilRef;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4200;
        } else {
          unit_dop_menu[ind].face_animY = 4300;
        }

        unit_dop_menu[ind].name = 'oil_Ref';
        unit_dop_menu[ind].menu_name = 'Refinary';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 19;

        // console.log(this.canFoundry);

        unit_dop_menu[ind].can = this.canFoundry;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4400;
        } else {
          unit_dop_menu[ind].face_animY = 4500;
        }

        unit_dop_menu[ind].name = 'foundry';
        unit_dop_menu[ind].menu_name = 'Foundry';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 1000;
        unit_dop_menu[ind].wood = 300;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 5;

        unit_dop_menu[ind].can = this.canOgreBase;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4600;
          unit_dop_menu[ind].menu_name = 'Stables';
        } else {
          unit_dop_menu[ind].face_animY = 4700;
          unit_dop_menu[ind].menu_name = 'Ogre mound';
        }

        unit_dop_menu[ind].name = 'ogreBase';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 10;

        unit_dop_menu[ind].can = this.canAltar;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 4800;
          unit_dop_menu[ind].menu_name = 'Church';
        } else {
          unit_dop_menu[ind].face_animY = 4900;
          unit_dop_menu[ind].menu_name = 'Altar of storms';
        }

        unit_dop_menu[ind].name = 'altar';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 11;

        unit_dop_menu[ind].can = this.canTemple;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5000;
          unit_dop_menu[ind].menu_name = 'Mage tower';
        } else {
          unit_dop_menu[ind].face_animY = 5100;
          unit_dop_menu[ind].menu_name = 'Temple of the damned';
        }

        unit_dop_menu[ind].name = 'temple';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////

        /// ////////////////////////////////////////////////////////////////////////////

        ind = 12;

        unit_dop_menu[ind].can = this.canDragon_roost;

        if (this.nation === 'h') {
          unit_dop_menu[ind].face_animY = 5200;
          unit_dop_menu[ind].menu_name = 'Gryphon aviary';
        } else {
          unit_dop_menu[ind].face_animY = 5300;
          unit_dop_menu[ind].menu_name = 'Dragon roost';
        }

        unit_dop_menu[ind].name = 'dragon_roost';

        unit_dop_menu[ind].resurs = this.check_resurs_pro(unit_dop_menu[ind].name)
            === unit_dop_menu[ind].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[ind].gold = 2000;
        unit_dop_menu[ind].wood = 1000;
        unit_dop_menu[ind].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'townHoll') {
        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = true;

        if (this.nation === 'h') {
          unit_dop_menu[0].face_animY = 0;
          unit_dop_menu[0].menu_name = 'Batrak';
        } else {
          unit_dop_menu[0].face_animY = 600;
          unit_dop_menu[0].menu_name = 'Peon';
        }

        unit_dop_menu[0].name = 'batrak';

        unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
              === unit_dop_menu[0].name
            && menu_unit_for_update.fatherFraction.maxUnits
              > menu_unit_for_update.fatherFraction.peoples.length;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[0].gold = 400;
        unit_dop_menu[0].wood = 0;
        unit_dop_menu[0].oil = 0;
        unit_dop_menu[0].foot = 1;

        /// ////////////////////////////////////////////////////////////////////////////

        unit_dop_menu[1].can = (menu_unit_for_update.level === 1
              && this.canLuchnick
              && this.canBallista
              && this.canMechnick)
            || (menu_unit_for_update.level === 2
              && this.canLuchnick
              && this.canBallista
              && this.canMechnick
              && this.canRizar);
        // this.iCanTownHollLevelUp===this.fractionLevel;

        if (this.nation === 'h') {
          if (menu_unit_for_update.level === 1) {
            unit_dop_menu[1].face_animY = 2200;
          } else {
            unit_dop_menu[1].face_animY = 2300;
          }
        } else if (menu_unit_for_update.level === 1) {
          unit_dop_menu[1].face_animY = 2000;
        } else {
          unit_dop_menu[1].face_animY = 2100;
        }

        unit_dop_menu[1].name = 'levelUpgrade';
        unit_dop_menu[1].menu_name = `Level up ${String(menu_unit_for_update.level)}`;

        unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
            === unit_dop_menu[1].name;

        // console.log(unit_dop_menu[0].resurs)check_resurs

        unit_dop_menu[1].gold = 2000;
        unit_dop_menu[1].wood = 1000;
        unit_dop_menu[1].oil = 0;

        /// ////////////////////////////////////////////////////////////////////////////
      } else if (menu_unit_for_update.unitName === 'lesopilka') {
        // console.log("here");

        /*
    this.dopFlyAttack_level<5
    ||
    this.dopFlySee_level<3
    */

        /// //////////////////////////////////////////////////

        unit_dop_menu[0].can = this.canLuchnick
            && !this.myJoubeTimer_leso
            && this.dopFlyAttack_level < 5;
        // ||
        // this.dopFlySee_level<3

        // 24

        // console.log(this.dopFlyAttack_level);

        if (this.dopFlyAttack_level < 5) {
          if (this.nation === 'h') {
            if (this.dopFlyAttack_level < 2) {
              unit_dop_menu[0].face_animY = 2800;
            } else if (this.dopFlyAttack_level < 4) {
              unit_dop_menu[0].face_animY = 3000;
            } else if (this.dopFlyAttack_level === 4) {
              unit_dop_menu[0].face_animY = 3200;
            }

            unit_dop_menu[0].menu_name = 'Elven archers';
            unit_dop_menu[0].menu_name_2 = `attack + ${String(20)}%`;
          } else {
            if (this.dopFlyAttack_level < 2) {
              unit_dop_menu[0].face_animY = 2900;
            } else if (this.dopFlyAttack_level < 4) {
              unit_dop_menu[0].face_animY = 3100;
            } else if (this.dopFlyAttack_level === 4) {
              unit_dop_menu[0].face_animY = 3300;
            }

            unit_dop_menu[0].menu_name = 'Troll axethrower';
            unit_dop_menu[0].menu_name_2 = `attack + ${String(20)}%`;
          }

          unit_dop_menu[0].name = 'dopFlyAttack_level';

          unit_dop_menu[0].resurs = this.check_resurs_pro(unit_dop_menu[0].name)
              === unit_dop_menu[0].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[0].gold = 1000;
          unit_dop_menu[0].wood = 500;
          unit_dop_menu[0].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }

        if (this.dopFlySee_level < 3) {
          unit_dop_menu[1].can = this.canLuchnick
              && !this.myJoubeTimer_leso
              // this.dopFlyAttack_level<5
              // ||
              && this.dopFlySee_level < 3;

          if (this.nation === 'h') {
            unit_dop_menu[1].face_animY = 3500;

            unit_dop_menu[1].menu_name = 'Elven archers';
            unit_dop_menu[1].menu_name_2 = `sight+${String(50)}`;
          } else {
            unit_dop_menu[1].face_animY = 3600;

            unit_dop_menu[1].menu_name = 'Troll axethrower';
            unit_dop_menu[1].menu_name_2 = `sight+${String(50)}`;
          }

          unit_dop_menu[1].name = 'dopFlySee_level';

          unit_dop_menu[1].resurs = this.check_resurs_pro(unit_dop_menu[1].name)
              === unit_dop_menu[1].name;

          // console.log(unit_dop_menu[0].resurs)check_resurs

          unit_dop_menu[1].gold = 1000;
          unit_dop_menu[1].wood = 500;
          unit_dop_menu[1].oil = 0;

          /// ////////////////////////////////////////////////////////////////////////////
        }
      }
    }
  }
};
