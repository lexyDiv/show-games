/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.getVektors = function (arg, target, unit, luchnik) {
  if (!unit.target && !unit.handTarget && unit.finish.unit) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber
        === unit.finish.unit.persolalNumber
      ) {
        // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 1')

        father.finish = this; // gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        // console.log("ura");
        // unit.iCanGet=true;

        return;
      }
    }
  }

  // };

  if (unit.ii_index && this.ii_fractions_way) {
    // console.log("ura");
    const { index } = this.ii_fractions_way[unit.fatherFraction.persolalNumber];

    // console.log(this.ii_index); pausa=1;

    if (index && index <= unit.ii_index) {
      father.finish = this; // gameFielg[this.vertikal][this.horizont];
      // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 2')
      father.finish.myWay(father.finish);

      // unit.iCanGet=true;

      return;
    }
  }

  if (
    unit.warrior
    && (unit.target
      || (unit.handTarget && unit.fatherFraction.control === 'comp'))
    && !unit.fly
  ) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.warrior
        && this.iContaktWith[d].father.hp > 0
        && this.iContaktWith[d].father.fatherFraction.union
          !== unit.fatherFraction.union
      ) {
        father.finish = this; // gameFielg[this.vertikal][this.horizont];
        // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 3')
        father.finish.myWay(father.finish);

        // console.log("ura");
        // unit.iCanGet=true;

        return;
      }
    }
  }
  // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 4')
  if (
    unit.fatherFraction.control === 'comp'
    && unit.handCell
    && !unit.handCell.free
    && !unit.ii_attack
  ) {
    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        50,
        unit.handCell,
        50,
      ) <= 250
    ) {
      father.finish = this; // gameFielg[this.vertikal][this.horizont];
      // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 5')
      father.finish.myWay(father.finish);
      // unit.ii_saveCell=false;
      // console.log("ura");

      return;
    }
  }

  if (target && luchnik && luchnik === 1) {
    // pausa=1;
    /*
    let a=target.damagePointX-(this.x+25);
    let b=target.damagePointY-(this.y+25);

    let c=Math.sqrt(a*a+b*b);

    console.log("c : "+c);

    */

    let x;
    let y;

    const cell = this; // gameFielg[this.vertikal][this.horizont];
    // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 6')
    if (unit.gabarit === 50) {
      x = cell.x + 25;
      y = cell.y + 25;
    } else if (unit.gabarit === 100) {
      x = cell.x + 50;
      y = cell.y;
    }

    const a = x - target.damagePointX;
    const b = y - target.damagePointY;

    const c = Math.sqrt(a * a + b * b);

    if (c <= unit.seeing) {
      father.finish = cell;

      father.finish.myWay(father.finish);

      // console.log("okokokok");
      unit.iCanGet = true;

      return;
    }
  } else if (target && luchnik && luchnik === 2) {
    // console.log("ok");

    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = this; // gameFielg[this.vertikal][this.horizont];
        // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 7')
        father.finish.myWay(father.finish);

        // console.log("ura");
        unit.iCanGet = true;

        return;
      }
    }
  } else if (target && luchnik && luchnik === 3) {
    let x = this.x + 25;
    let y = this.y + 25;

    if (unit.type === 'dragoon') {
      x = this.x + 50;
      y = this.y;
    }

    const a = target.damagePointX - x;
    const b = target.damagePointY - y;

    const c = Math.sqrt(a * a + b * b);

    if (c <= unit.seeing) {
      father.finish = this; // gameFielg[this.vertikal][this.horizont];
      // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 8')
      father.finish.myWay(father.finish);

      // console.log(c+" way");
      unit.iCanGet = true;

      return;
    }
  }

  if (target && !luchnik) {
    for (let d = 0; d < this.iContaktWith.length; d++) {
      if (
        this.iContaktWith[d].father.persolalNumber === target.persolalNumber
      ) {
        father.finish = this; // gameFielg[this.vertikal][this.horizont];
        // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 9')
        father.finish.myWay(father.finish);

        // console.log("ura");
        unit.iCanGet = true;

        return;
      }

      /// *

      if (father.unit.type === 1) {
        if (unit.type === 1 && unit.fatherFraction.control === 'comp') {
          if (
            !unit.iGoBuild
            && !unit.iGetTarget
            && this.iContaktWith[d].father.unitStatus === 'building'
            && !this.iContaktWith[d].father.neitral
            && this.iContaktWith[d].father.fatherFraction.persolalNumber
              === unit.fatherFraction.persolalNumber
            && (this.iContaktWith[d].father.hp
              < this.iContaktWith[d].father.hpfull
              || this.iContaktWith[d].father.buildready
                < this.iContaktWith[d].father.hpfull)
            && this.iContaktWith[d].father.hp > 0
          ) {
            father.finish = this; // gameFielg[this.vertikal][this.horizont];
            // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 10')
            father.finish.myWay(father.finish);

            // console.log(c+" way");
            unit.iCanGet = true;

            unit.target = this.iContaktWith[d].father;

            return;
          }
        }

        if (!father.unit.potentialTarget) {
          // console.log("ok");

          if (
            (this.iContaktWith[d].father.unitName === target.unitName
              && (this.iContaktWith[d].father.neitral
                || this.iContaktWith[d].father.fatherFraction.fraction
                  === unit.fatherFraction.fraction))
            || (father.unit.wood && this.iContaktWith[d].father.unitWoodOut)
          ) {
            if (
              father.unit.wood
              && this.iContaktWith[d].father.unitWoodOut
              && !father.unit.iGoBuild
              && this.iContaktWith[d].father.fatherFraction.fraction
                === father.unit.fatherFraction.fraction
              && this.iContaktWith[d].father.hp > 0
              && this.free
              && (target.unitName === 'townHoll'
                || target.unitName === 'lesopilka')
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = this; // gameFielg[this.vertikal][this.horizont];
              // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 11')
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === 'player') {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              target.unitName === 'wood'
              && !this.iContaktWith[d].father.lesorub
              && this.iContaktWith[d].father.hp > 0
              && this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = this; // gameFielg[this.vertikal][this.horizont];
              // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 12')
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === 'player') {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              target.unitName === 'shahta'
              && this.iContaktWith[d].father.gold > 0
              && this.iContaktWith[d].father.hp > 0
              && this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = this; // gameFielg[this.vertikal][this.horizont];
              // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 13')
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === 'player') {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            } else if (
              !father.unit.iGoBuild
              && target.unitName === 'townHoll'
              && target.fatherFraction.fraction
                === father.unit.fatherFraction.fraction
              && this.iContaktWith[d].father.hp > 0
              && this.free
            ) {
              father.unit.potentialTarget = this.iContaktWith[d].father;

              father.finish = this; // gameFielg[this.vertikal][this.horizont];
              // gameFielg[this.vertikal][this.horizont] !== this && console.log('bug - 14')
              father.finish.myWay(father.finish);

              father.unit.potentialWay = father.way;

              if (father.unit.fatherFraction.control === 'player') {
                father.finish = target.cell;
                father.way = [];
              } else {
                return;
              }
            }
          }
        }

        //* /
      }
    }
  }

  // left_Up left_

  let koof = 0;

  for (let k = 0; k < this.aroundCells.length; k++) {
    // if(isNaN(this.f)){console.log(this.father.f);};

    /*

    if(gameFielg[i]&&gameFielg[i][k]&&gameFielg[i][k].startFinish.length&&
    (gameFielg[i][k].startFinish[0].vertikal!==father.vertikal||
    gameFielg[i][k].startFinish[0].horizont!==father.horizont||
    gameFielg[i][k].startFinish[1].vertikal!==father.finish.vertikal||
    gameFielg[i][k].startFinish[1].horizont!==father.finish.horizont
    )){

    gameFielg[i][k].inUse=false;
    gameFielg[i][k].h=0;
    gameFielg[i][k].f=0;
    gameFielg[i][k].g=0;

    };

    */

    const cell = this.aroundCells[k];

    // if (gameFielg[i] && gameFielg[i][k]) {
    //   cell = gameFielg[i][k];
    //   cell !== this.aroundCells[index] && console.log('bug - 1')
    //   index ++
    // }

    if (
      cell.forCheck !== forCheck // ||
      // (gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].h))||
      // (gameFielg[i]&&gameFielg[i][k]&&isNaN(gameFielg[i][k].f))
    ) {
      cell.inUse = false;
      cell.h = 0;
      cell.f = 0;
      cell.g = 0;
    }
    /*
    let aa;
    let bb;
    let cc;

    if(arg&&gameFielg[i]&&gameFielg[i][k]){

      aa=(arg.x+50)-(gameFielg[i][k].x+50);
      bb=(arg.y+50)-(gameFielg[i][k].y+50);

      cc=Math.sqrt(aa*aa+bb*bb);

    };

    if(arg){

      console.log(cc);

    };

    */

    /*

    let dis=false;
    let okey=true;

    let okDrag=0;

    let a=unit.x-gameFielg[i][k].x;
    let b=unit.y-gameFielg[i][k].y;

    dis=Math.sqrt(a*a+b*b);

    if(dis<arg){okey=false;};

    };
    // */

    /// ////////////

    let okDrag = 0;

    if (unit.fly) {
      // console.log("fly");

      for (let v = cell.vertikal - 1; v <= cell.vertikal; v++) {
        for (let h = cell.horizont; h <= cell.horizont + 1; h++) {
          const dc = gameFielg[v] && gameFielg[v][h];

          // if (gameFielg[v] && gameFielg[v][h]) {
          //   dc = gameFielg[v][h];
          // }

          if (
            dc
            && (!dc.dragoon
              || (dc.dragoon && dc.dragoon.persolalNumber === unit.persolalNumber))
          ) {
            okDrag++;
          } else {
            break;
          }
        }
      }
    }

    /// *
    let ok2 = false;

    // console.log(unit.goGroop)
    // floorGlobalTimer

    if (
      unit.gabarit === 50
      && cell
      && cell.unit
      && cell.unit.gabarit === 50
      && cell.unit.unitStatus === 'life'
      && (cell.unit.way.length
        || cell.unit.fatherFraction.union !== unit.fatherFraction.union
        || (unit.hold_position
          && cell.unit.hold_position
          && unit.hold_position === cell.unit.hold_position
          && !unit.iNeedFreeWay))
    ) {
      const a = cell.unit.cell.x - unit.cell.x;
      const b = cell.unit.cell.y - unit.cell.y;

      const c = Math.sqrt(a * a + b * b);

      if (
        (c >= 80
          || (unit.hold_position
            && cell.unit.hold_position
            && unit.hold_position === cell.unit.hold_position
            && unit.persolalNumber !== cell.unit.persolalNumber)
          || (unit.goGroop && cell.unit.goGroop && unit.isBlockedMem)
          || (unit.goGroop
            && cell.unit.goGroop
            && unit.speed <= cell.unit.speed))
        && !unit.iNeedFreeWay
      ) {
        ok2 = true; // console.log("pizdez");
      }
    }

    // console.log()
    //* /

    const hart = (cell
        && !unit.fly
        && (cell.free
          || ok2))
      || (unit.fly && okDrag === 4);

    /// ////////////////////
    // if(!arg){okey=false;};
    // console.log(arg);
    if (
      hart
      && !cell.inUse
      && !cell.f
      // &&
      //! (gameFielg[i][k].vertikal==this.vertikal&&gameFielg[i][k].horizont==this.horizont)
    ) {
      const a = Math.abs(father.finish.horizont - cell.horizont);
      const b = Math.abs(father.finish.vertikal - cell.vertikal);

      const c = a + b;

      if (koof === 0) {
        cell.g = this.g + 14;
      }
      if (koof === 1) {
        cell.g = this.g + 10;
      }
      if (koof === 2) {
        cell.g = this.g + 14;
      }

      if (koof === 3) {
        cell.g = this.g + 10;
      }
      if (koof === 5) {
        cell.g = this.g + 10;
      }

      if (koof === 6) {
        cell.g = this.g + 14;
      }
      if (koof === 7) {
        cell.g = this.g + 10;
      }
      if (koof === 8) {
        cell.g = this.g + 14;
      }

      // koof++;
      // console.log(c2);

      cell.father = this; // gameFielg[this.vertikal][this.horizont];

      // this.vektors.push(gameFielg[i][k]);

      vektors.push(cell);

      allVektors.push(cell);

      cell.h = c * 10; // +c2//+v+h;

      cell.f = cell.g + cell.h;

      // gameFielg[i][k].startFinish=[father,father.finish];

      cell.forCheck = forCheck;

      if (
        cell.vertikal === father.finish.vertikal
        && cell.horizont === father.finish.horizont
      ) {
        // console.log("sucssess!!!!!!!!!!!!!!!");

        father.finish.myWay(father.finish);
        // arg.way=father.way;

        // vektors=[];
        // allVektors=[];
        // father=0;

        // if(unit.type==="dragoon"){console.log(father);pausa=1;};
      }
    } else if (
      hart
      && !cell.inUse
      && cell.f
      && !(cell.vertikal == this.vertikal && cell.horizont == this.horizont)
    ) {
      // gameFielg[i][k].startFinish=[father,father.finish];
      cell.forCheck = forCheck;

      let g;

      if (koof === 0) {
        g = this.g + 14;
      }
      if (koof === 1) {
        g = this.g + 10;
      }
      if (koof === 2) {
        g = this.g + 14;
      }

      if (koof === 3) {
        g = this.g + 10;
      }
      if (koof === 5) {
        g = this.g + 10;
      }

      if (koof === 6) {
        g = this.g + 14;
      }
      if (koof === 7) {
        g = this.g + 10;
      }
      if (koof === 8) {
        g = this.g + 14;
      }

      if (g < cell.g) {
        cell.g = g;

        const a = Math.abs(father.finish.horizont - cell.horizont);
        const b = Math.abs(father.finish.vertikal - cell.vertikal);

        const c = a + b;

        cell.father = this; // gameFielg[this.vertikal][this.horizont];

        cell.h = c * 10; // +c2//+v+h;

        cell.f = cell.g + cell.h;

        // console.log(gameFielg[i][k].f);
      }

      // koof++;
    }
    koof++;
  }

  // console.log(testArrey)
};
