/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-lonely-if */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-undef */

Unit.prototype.personalProgTanker = function (arg, rage) {
  if (this.hp <= 0) {
    this.hp = 0;
    this.target = 'dead';
  }
  // this.target="dead"; tanker_iCanGet
  // iStand
  if (this.target === 'dead') {
    this.readyToOut = true;

    this.iDoTaktTimer = -1;
    this.iDoTakt = 0;
    // this.myJoube=0;

    this.way = [];
    this.speed = 0;
    this.updateSpeed();
    this.target = 0;
    this.handTarget = 0;
    this.animys = [];
    this.landing = false;
    this.rage = 0;

    this.distroyTimer--;

    if (!this.dopAnim) {
      this.dopAnim = 0;
    }

    if (this.distroyTimer % 10 === 0) {
      this.animY += 100;
    }

    if (this.distroyTimer === 0) {
      // if(this.fatherFraction.peoples.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.peoples.splice(this.fatherFraction.peoples.indexOf(this.cell.dragoon),1);};
      // if(this.fatherFraction.dragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.dragons.splice(this.fatherFraction.dragons.indexOf(this.cell.dragoon),1)};
      if (this.fatherFraction.selectIsSweem.indexOf(this.cell.unit) !== -1) {
        this.fatherFraction.selectIsSweem.splice(
          this.fatherFraction.selectIsSweem.indexOf(this.cell.unit),
          1,
        );
      }
      // if(this.fatherFraction.control==="comp"&&this.fatherFraction.freeDragons.indexOf(this.cell.dragoon)!==-1){this.fatherFraction.freeDragons.splice(this.fatherFraction.freeDragons.indexOf(this.cell.dragoon),1)};

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = 0;
        }
      }
    }

    if (this.distroyTimer === 0) {
      this.cell = 0;
      this.target = 0;
      this.stepTakt = 0;
    }

    // console.log("pizdez");

    return;
  }

  if (this.handTarget && this.handTarget.hp <= 0) {
    this.handTarget = 0;
    this.way = [];
  }

  this.damagePointX = this.cell.x + 50;
  this.damagePointY = this.cell.y;

  // &&!isBlocked

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.go = false;

    let way_unit;
    let way_cell;

    if (this.way.length) {
      way_cell = this.way[this.way.length - 1];

      // let ran=Math.floor(Math.random()*11);

      for (let v = way_cell.vertikal - 1; v <= way_cell.vertikal; v++) {
        for (let h = way_cell.horizont; h <= way_cell.horizont + 1; h++) {
          if (
            gameFielg[v]
            && gameFielg[v][h]
            && gameFielg[v][h].unit
            && gameFielg[v][h].unit.persolalNumber !== this.persolalNumber
            && gameFielg[v][h].unit.active // (gameFielg[v][h].unit.way.length||gameFielg[v][h].unit.way==="go")
            && gameFielg[v][h].unit.hold_position
            && this.hold_position
            && this.hold_position === gameFielg[v][h].unit.hold_position
            // &&
            // this.checkAntyMoveVektors(gameFielg[v][h].unit)!=="anty"
            && this.terpenie < this.terpenie_ran
          ) {
            // if(this.persolalNumber===35){console.log(gameFielg[v][h].unit.persolalNumber);};	iGetLand

            this.terpenie++;

            this.x = this.cell.x;
            this.y = this.cell.y;

            // console.log("ok");

            return;
          }
        }
      }
    }

    if (this.terpenie === this.terpenie_ran) {
      // this.hold_position=false;
      // this.goGroop_sweeme=false;

      // console.log("!!!!!!!!!!!!!");
      this.go = true;
      this.terpenie_ran = 50 + Math.floor(Math.random() * 20);
    }

    this.terpenie = 0;

    // if(this.terpenie>=150){this.terpenie=0;};

    // console.log(this.clickSave);
    // pausa=1

    // if(this.jobe){this.myJoube=this.jobe;};

    if (this.clickSave) {
      // console.log(this.clickSave);
      // this.jobe=false;

      if (this.clickSave.handCell) {
        // console.log("ok");
        if (
          this.clickSave.handCell.sea
          && this.clickSave.handCell.sea === this.cell.sea
        ) {
          this.handTarget = 0;
          this.target = 0;
          this.handCell = this.clickSave.handCell;
          this.way = 'go';
          // this.myJoube=false;
          this.active_status = false;
        } else if (this.clickSave.handCell.continent) {
          this.clickSave = false;
          // this.myJoube=false;
          this.active_status = false;
        }
      } else if (this.clickSave.handTarget) {
        if (
          this.clickSave.handTarget.type === 'oil_platform'
          && this.clickSave.handTarget.fatherFraction.fraction
            === this.fatherFraction.fraction
          && this.clickSave.handTarget.buildready
            === this.clickSave.handTarget.hpfull
          && ((this.clickSave.handTarget.hp > 0
            && this.clickSave.handTarget.cell.oil.oil)
            || this.oil)
        ) {
          // this.myJoube="get oil";
          this.active_status = 'get oil';
        } else if (
          this.clickSave.handTarget.type === 'oil_Ref'
          && this.clickSave.handTarget.fatherFraction.fraction
            === this.fatherFraction.fraction
          && this.clickSave.handTarget.buildready
            === this.clickSave.handTarget.hpfull
          && this.clickSave.handTarget.hp > 0
        ) {
          // this.myJoube="get oil";
          this.active_status = 'get oil';
        } else {
          this.handCell = 0;
          this.way = 'go';
          this.handTarget = this.clickSave.handTarget;
          // this.myJoube=false;
          this.active_status = false;
        }

        // console.log(this.myJoube);
      }
    }

    // myJoube

    if (this.active_status === 'get oil') {
      if (
        !this.oil
        // &&
        // !this.handTarget
        && this.clickSave.handTarget
        && this.clickSave.handTarget.type !== 'oil_platform'
      ) {
        let min = [];

        for (let i = 0; i < this.fatherFraction.oil_platforms.length; i++) {
          if (
            this.fatherFraction.oil_platforms[i].buildready
              === this.fatherFraction.oil_platforms[i].hpfull
            && this.fatherFraction.oil_platforms[i].hp > 0
            && this.fatherFraction.oil_platforms[i].cell.oil.oil
          ) {
            const dis = get_distanse_on_lineyka(
              this.cell,
              100,
              this.fatherFraction.oil_platforms[i].cell,
              100,
            );

            if (!min.length || min[0] > dis) {
              min = [dis, this.fatherFraction.oil_platforms[i]];
            }
          }
        }

        if (min.length) {
          this.handCell = 0;
          this.way = 'go';
          this.handTarget = min[1];
        } else {
          this.handCell = 0;
          this.way = 'go';
          this.handTarget = this.clickSave.handTarget;
        }
      } else if (
        !this.oil
        // &&
        //! this.handTarget
        && this.clickSave.handTarget
        && this.clickSave.handTarget.type === 'oil_platform'
      ) {
        this.handCell = 0;
        this.way = 'go';
        this.handTarget = this.clickSave.handTarget;
      } else if (
        this.oil
        && !this.handTarget
        && this.clickSave.handTarget
        && this.clickSave.handTarget.type !== 'oil_Ref'
      ) {
        // console.log("here");

        let min = [];

        for (let i = 0; i < this.fatherFraction.oil_Refs.length; i++) {
          if (
            this.fatherFraction.oil_Refs[i].buildready
              === this.fatherFraction.oil_Refs[i].hpfull
            && this.fatherFraction.oil_Refs[i].hp > 0
          ) {
            const dis = get_distanse_on_lineyka(
              this.cell,
              100,
              this.fatherFraction.oil_Refs[i].cell,
              150,
            );

            if (!min.length || min[0] > dis) {
              min = [dis, this.fatherFraction.oil_Refs[i]];
            }
          }
        }

        if (min.length) {
          this.handCell = 0;
          this.way = 'go';
          this.handTarget = min[1];
        } else {
          this.handCell = 0;
          this.way = 'go';
          this.handTarget = this.clickSave.handTarget;
        }
      } else if (
        this.oil
        // &&
        //! this.handTarget
        && this.clickSave.handTarget
        && this.clickSave.handTarget.type === 'oil_Ref'
      ) {
        this.handCell = 0;
        this.way = 'go';
        this.handTarget = this.clickSave.handTarget;
      }
    }

    this.clickSave = false;

    if (this.handTarget) {
      /*
  if(
  this.check_way
  &&
  !this.tanker_iCanGet

  ){
  this.handTarget=0;
  this.active_status=false;
  this.way=[];
  }

      else
      */
      if (
        this.active_status === 'get oil'
        //! this.oil
        // &&
        // this.handTarget.type==="oil_platform"
        // &&
        && (this.handTarget.hp <= 0
          || (this.handTarget.type === 'oil_platform'
            && !this.handTarget.cell.oil.oil))
      ) {
        this.handTarget = 0;
        // this.myJoube=false;
        this.active_status = false;
        this.iGetTarget = false;
        this.way = [];

        // console.log("okokoko");
      } else if (
        ((this.handTarget.gabarit === 150
          && get_distanse_on_lineyka(
            this.cell,
            100,
            this.handTarget.cell,
            this.handTarget.gabarit,
          ) <= 177)
          || (this.handTarget.gabarit === 100
            && get_distanse_on_lineyka(
              this.cell,
              100,
              this.handTarget.cell,
              this.handTarget.gabarit,
            ) <= 141.5))
        && this.iGetMyCell
      ) {
        this.iGetTarget = true;

        if (this.active_status !== 'get oil') {
          this.handTarget = 0;
          this.iGetTarget = false;
          this.handCell = 0;
          this.way = [];
          // console.log("fin");
        }
      }

      if (!this.iGetTarget && this.handTarget) {
        if (!this.way.length && this.iGetMyCell) {
          this.way = 'go';
        }
      } else {
        // console.log(this.handTarget.cell.oil.oil); myJoube

        if (this.active_status === 'get oil') {
          if (
            this.oil
            && this.handTarget.type === 'oil_Ref'
            && this.handTarget.fatherFraction.fraction
              === this.fatherFraction.fraction
            && this.handTarget.buildready === this.handTarget.hpfull
            && this.handTarget.hp > 0
          ) {
            // console.log("?????????????");//pausa=1;

            this.handTarget.fatherFraction.oil += 100;
            this.oil = false;

            this.handTarget.tankers.push(this.cell.unit);
            this.handTarget.timers.push({ time: 200 });

            if (
              this.handTarget.fatherFraction.activeBuildings.indexOf(
                this.handTarget,
              ) === -1
            ) {
              this.handTarget.fatherFraction.activeBuildings.push(
                this.handTarget,
              );
            }

            for (let i = this.cell.vertikal - 1; i <= this.cell.vertikal; i++) {
              for (
                let k = this.cell.horizont;
                k <= this.cell.horizont + 1;
                k++
              ) {
                gameFielg[i][k].unit = 0;
              }
            }

            this.cell = 0;

            // console.log("okay");
            this.iGetTarget = false;
            this.handTarget = 0;
          } else if (
            !this.oil
            && this.handTarget.type === 'oil_platform'
            && this.handTarget.fatherFraction.fraction
              === this.fatherFraction.fraction
            && this.handTarget.buildready === this.handTarget.hpfull
            && this.handTarget.hp > 0
            && this.handTarget.cell.oil.oil
          ) {
            this.handTarget.cell.oil.oil -= 100;

            this.handTarget.tankers.push(this.cell.unit);
            this.handTarget.timers.push({ time: 200 });

            for (let i = this.cell.vertikal - 1; i <= this.cell.vertikal; i++) {
              for (
                let k = this.cell.horizont;
                k <= this.cell.horizont + 1;
                k++
              ) {
                gameFielg[i][k].unit = 0;
              }
            }

            this.cell = 0;

            // console.log("okay");
            this.iGetTarget = false;
            this.handTarget = 0;
          } else if (this.oil && this.handTarget.type === 'oil_platform') {
            this.iGetTarget = false;
            this.handTarget = 0;
          } else if (!this.oil && this.handTarget.type === 'oil_Ref') {
            this.iGetTarget = false;
            this.handTarget = 0;
          }
          //* /
        } // get oil
      }
    }
  } //   stepTakt

  this.tanker_iCanGet = false;
  this.check_way = false;

  this.goWaySweeme(this.cell.unit);

  // console.log(this.way);

  if (this.handCell) {
    this.goGroop_sweeme = false;
  }
};
