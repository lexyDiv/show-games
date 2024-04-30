/* eslint-disable no-tabs */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Obj.prototype.getVektorsSweeme = function (arg, target, unit, luchnik) {
  if (
    unit.type === 'distroer'
    || unit.type === 'linkor'
    || unit.type === 'turtle'
  ) {
    // console.log("scan");

    // console.log(unit.go);

    let target;

    if (unit.target) {
      target = unit.target;
    } else if (unit.handTarget) {
      target = unit.handTarget;
    }

    if (target) {
      const dis = get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        target.cell,
        target.gabarit,
      );

      if ((dis <= unit.seeing && target.visible) || dis <= 141.5) {
        father.finish = gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        // console.log("ura");
        // unit.tanker_iCanGet=true;

        return;
      }
    }
  }

  if (
    unit.type === 'oil_tanker'
    && unit.handTarget
    && unit.handTarget.gabarit === 100
  ) {
    unit.check_way = true;

    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        unit.handTarget.cell,
        unit.handTarget.gabarit,
      ) <= 141.5
    ) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      // console.log("ura");
      unit.tanker_iCanGet = true;

      return;
    }
  } else if (
    unit.type === 'oil_tanker'
    && unit.handTarget
    && unit.handTarget.gabarit === 150
  ) {
    unit.check_way = true;

    if (
      get_distanse_on_lineyka(
        gameFielg[this.vertikal][this.horizont],
        100,
        unit.handTarget.cell,
        unit.handTarget.gabarit,
      ) <= 176
    ) {
      father.finish = gameFielg[this.vertikal][this.horizont];

      father.finish.myWay(father.finish);

      unit.tanker_iCanGet = true;

      return;
    }
  }

  let koof = 0;

  for (let i = this.vertikal - 1; i < this.vertikal - 1 + 3; i++) {
    for (let k = this.horizont - 1; k < this.horizont - 1 + 3; k++) {
      if (
        gameFielg[i]
        && gameFielg[i][k]
        && gameFielg[i][k].forCheck !== forCheck
      ) {
        gameFielg[i][k].inUse = false;
        gameFielg[i][k].h = 0;
        gameFielg[i][k].f = 0;
        gameFielg[i][k].g = 0;
      }

      const dis = false;
      const okey = true;

      let okSweeme = 0;

      const fin = false;

      for (let v = i - 1; v <= i; v++) {
        for (let h = k; h <= k + 1; h++) {
          if (gameFielg[v] && gameFielg[v][h]) {
            const dis = get_distanse_on_lineyka(
              gameFielg[v][h],
              100,
              unit.cell,
              100,
            );

            if (
              // gameFielg[v]&&gameFielg[v][h]
              // &&
              gameFielg[v][h].water
              && !gameFielg[v][h].vossalObj
              && (!gameFielg[v][h].unit
                || gameFielg[v][h].unit.persolalNumber === unit.persolalNumber
                || (gameFielg[v][h].unit.unitStatus === 'life'
                  && gameFielg[v][h].unit.way.length
                  && dis > 141.5)
                /// *
                || (unit.hold_position
                  && gameFielg[v][h].unit.hold_position
                  && gameFielg[v][h].unit.active
                  && gameFielg[v][h].unit.fatherFraction.fraction
                    === unit.fatherFraction.fraction
                  && gameFielg[v][h].unit.hold_position === unit.hold_position
                  && unit.goGroop_sweeme
                  && unit.persolalNumber !== gameFielg[v][h].unit.persolalNumber
                  && !unit.go)
                || (gameFielg[v][h].unit.fatherFraction !== unit.fatherFraction
                  && unit.type !== 'transport'
                  && dis >= 600))

            //* /

            // ||
            // gameFielg[v][h].persolalNumber===unit.spe.persolalNumber
            ) {
              okSweeme++;

              //	pausa=1
            } else {
              break;
            }
          }
        }
      }

      /*

    if(okSweeme<4//&&fin
    &&
    (
    this.persolalNumber===unit.spe.persolalNumber
    ||
    this.persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont].persolalNumber
    ||
    this.persolalNumber===gameFielg[unit.spe.vertikal][unit.spe.horizont+1].persolalNumber
    ||
    this.persolalNumber===gameFielg[unit.spe.vertikal-1][unit.spe.horizont+1].persolalNumber
    )
    ){

              father.finish=gameFielg[this.vertikal][this.horizont];

        father.finish.myWay(father.finish);

        //console.log(unit.persolalNumber);

        return;

    };

    */

      /// /////////////////////////
      //*

      if (
        unit.type !== 'transport'
        && unit.fatherFraction.control === 'comp'
        && okSweeme < 4
      ) {
        if (
          unit.handCell
          && get_distanse_on_lineyka(
            unit.handCell,
            100,
            gameFielg[this.vertikal][this.horizont],
            100,
          ) <= 350
        ) {
          father.finish = gameFielg[this.vertikal][this.horizont];

          father.finish.myWay(father.finish);

          // console.log(unit.type);
          // unit.tanker_iCanGet=true;

          return;
        }
      }

      //* /

      /// ///////////////////////////////////////

      if (
        okSweeme >= 4
        // ||
        // finish_ok
        /*
    (
    !unit.fly
    &&
    (
    gameFielg[i][k].free||
    (!gameFielg[i][k].free&&gameFielg[i][k].unit&&gameFielg[i][k].unit.unitStatus==="life"&&okey)
    )
    )

    ||

    (
    unit.fly&&okDrag===4
    )

    // */

        && !gameFielg[i][k].inUse
        && !gameFielg[i][k].f
        // &&
        //! (gameFielg[i][k].vertikal==this.vertikal&&gameFielg[i][k].horizont==this.horizont)
      ) {
        const a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
        const b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

        const c = a + b;
        if (koof === 0) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 1) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 2) {
          gameFielg[i][k].g = this.g + 14;
        }

        if (koof === 3) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 5) {
          gameFielg[i][k].g = this.g + 10;
        }

        if (koof === 6) {
          gameFielg[i][k].g = this.g + 14;
        }
        if (koof === 7) {
          gameFielg[i][k].g = this.g + 10;
        }
        if (koof === 8) {
          gameFielg[i][k].g = this.g + 14;
        }

        // koof++;
        // console.log(c2);

        gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

        // this.vektors.push(gameFielg[i][k]);

        vektors.push(gameFielg[i][k]);

        allVektors.push(gameFielg[i][k]);

        gameFielg[i][k].h = c * 10; // +c2//+v+h;

        gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

        // gameFielg[i][k].startFinish=[father,father.finish];

        gameFielg[i][k].forCheck = forCheck;
        if (
          gameFielg[i][k].vertikal === father.finish.vertikal
          && gameFielg[i][k].horizont === father.finish.horizont
        ) {
          // console.log("sucssess!!!!!!!!!!!!!!!");

          father.finish.myWay(father.finish);

          unit.iCanGet = true;

          // arg.way=father.way;

          // vektors=[];
          // allVektors=[];
          // father=0;

          // if(unit.type==="dragoon"){console.log(father);pausa=1;};
          if (
            unit.fatherFraction.control === 'comp'
            && unit.type === 'transport'
          ) {
            unit.trans_can_get = true;
          }
        }
      } else if (
        // gameFielg[i]&&gameFielg[i][k]&&
        /// /////////////
        okSweeme === 4 /// ///////////////////
        && !gameFielg[i][k].inUse
        && gameFielg[i][k].f
        && !(
          gameFielg[i][k].vertikal == this.vertikal
          && gameFielg[i][k].horizont == this.horizont
        )
      ) {
        // gameFielg[i][k].startFinish=[father,father.finish];
        gameFielg[i][k].forCheck = forCheck;

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

        if (g < gameFielg[i][k].g) {
          gameFielg[i][k].g = g;

          const a = Math.abs(father.finish.horizont - gameFielg[i][k].horizont);
          const b = Math.abs(father.finish.vertikal - gameFielg[i][k].vertikal);

          const c = a + b;

          gameFielg[i][k].father = gameFielg[this.vertikal][this.horizont];

          gameFielg[i][k].h = c * 10; // +c2//+v+h;

          gameFielg[i][k].f = gameFielg[i][k].g + gameFielg[i][k].h;

          // console.log(gameFielg[i][k].f);
        }

        // koof++;
      }
      koof++;
    }
  }
};
