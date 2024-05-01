/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.goWaySweeme = function (arg) {
  // speed

  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.iGetMyCell = true;

    this.hotCell = this.cell;

    this.x = this.cell.x;
    this.y = this.cell.y;

    if (!this.way.length) {
      this.iStand = true;
    }

    if (this.iGetTarget) {
      this.way = [];
      this.stepTakt = 0;
      this.iStand = true;
      return;
    }

    // if(!this.handCell&&!this.target&&!this.handTarget){this.way=[];this.stepTakt=0;};

    // if(this.way!=="go"&&!this.way.length&&!this.target&&!this.handTarget){this.stopGetTarget=0;};

    let nextCell_ok;

    if (this.way !== 'go') {
      nextCell_ok = this.checkNextSweemeCell();
    }

    /// ///////////////////////////////

    if (this.fatherFraction.control === 'comp') {
      if (
        this.type !== 'transport'
        && this.way !== 'go'
        && this.way.length
        && this.handCell
        && nextCell_ok < 4
        && get_distanse_on_lineyka(this.cell, 100, this.handCell, 100) <= 1000
      ) {
        this.way = [];
        this.handCell = 0;

        // console.log("here");

        return;
      }
    }

    /// ///////////////////////////////////////////

    let deep = glob_deep;

    if (
      this.way === 'go'
      || (this.way.length
        && (!nextCell_ok || nextCell_ok < 4)
        && (!this.target
          || this.type === 'distroer'
          || this.type === 'linkor'
          || this.type === 'turtle')
        && (!this.handTarget
          || this.type === 'oil_tanker'
          || this.type === 'distroer'
          || this.type === 'linkor'
          || this.type === 'turtle'))
      // &&this.handCell
    ) {
      // console.log("sdjfgidhf");

      // let a=Math.floor(Math.random()*2);

      // if(a){a=Math.floor(Math.random()*1000);};

      const noFree = 300; // +a;

      this.finish = this.spe; // this.way[0];
      this.sosFin = this.spe; // this.way[0];

      let res;

      if (this.way === 'go') {
        if (this.target) {
          this.finish = this.target.cell;
          this.sosFin = this.target.cell;
          this.spe = this.target.cell;
          res = true;
        } else if (this.handCell) {
          this.finish = this.handCell;
          this.sosFin = this.handCell;
          this.spe = this.handCell;
          res = true;
        } else if (this.handTarget) {
          this.finish = this.handTarget.cell;
          this.sosFin = this.handTarget.cell;
          this.spe = this.handTarget.cell;
          res = true;
        }
      }

      this.way = [];
      /// /*
      // console.log("hren");
      // getWay=function(arg,noFree,deep,target)
      // getVektors=function(arg,target,unit)

      // if(nextCell_ok<4){deep=1000;};

      if (
        this.spe
        && get_distanse_on_lineyka(this.cell, 100, this.spe, 50) <= 500
      ) {
        deep = 200;
        // console.log(this.type);
      }

      let dis;

      if (this.handCell) {
        dis = get_distanse_on_lineyka(this.cell, 100, this.spe, 50);

        deep = Math.floor(dis) * 2;
      }

      /// //////////////////////////////////////// trans

      if (this.fatherFraction.control === 'comp') {
        if (this.type === 'transport') {
          this.trans_can_get = false;
        }
        // console.log(this.trans_can_get);
      }

      /// ////////////////////////

      if (this.finish && this.cell.unit) {
        getWay(this.cell.unit, noFree, deep);
      }

      /// ///////////////////////////////////	trans
      if (this.fatherFraction.control === 'comp') {
        if (this.type === 'transport') {
          if (!this.trans_can_get) {
            this.cleared_way();
          }
        } else if (this.type === 'oil_tanker') {
          if (!this.tanker_iCanGet) {
            this.cleared_way();
            // console.log("ok");
          }
        }
        // console.log(this.trans_can_get);
      }
      /// ///////////////////////////////////

      // console.log("here");

      if (
        this.way.length
        && this.way[this.way.length - 1].persolalNumber
          === this.cell.persolalNumber
      ) {
        this.way = [];
      }
      if (this.type === 'transport' && this.landing && !this.iCanGet) {
        this.landing = false;
      }

      this.iCanGet = false;

      if (res) {
        return;
      }

      // console.log(noFree.length);
    }

    if (
      this.way.length
      && nextCell_ok === 4
      // &&this.checkValideFreeCell()
    ) {
      // speed=this.speed-(this.speed*this.stepTakt);
      const speedKoof = 1 - this.stepTakt;

      // if(this.checkValideFreeCell()){

      this.iGetMyCell = false;

      this.iStand = false;

      // this.getGsp_Vsp();

      this.updateSpeed();
      this.getGsp_Vsp();

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = false;
        }
      }

      this.cell = this.way[this.way.length - 1];
      // this.hotCell=this.cell;

      this.horizont = this.way[this.way.length - 1].horizont;
      this.vertikal = this.way[this.way.length - 1].vertikal;

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].unit = arg;
        }
      }

      this.way.pop();

      /*
      this.cell.unit=0;
      this.cell.free=true;
      this.cell=this.way[this.way.length-1];
      this.horizont=this.way[this.way.length-1].horizont;
      this.vertikal=this.way[this.way.length-1].vertikal;
      this.cell.unit=arg;
      this.cell.free=false;
      this.way.pop();
  */

      // this.damagePointX=this.cell.x+50;
      // this.damagePointY=this.cell.y;

      // if(this.cell){
      this.cellUpdate(); /// ///////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // };
      ///

      ///

      this.x += this.gSp * speedKoof;
      this.y += this.vSp * speedKoof;

      const a = this.cell.x - this.x;
      const b = this.cell.y - this.y;

      const c = Math.sqrt(a * a + b * b);

      this.stepTakt = c / this.speed;

      // }
    } else if (!this.way.length) {
      this.stepTakt = 0;
      // this.way=[];
      this.finish = 0;

      this.iStand = true;
    }
  } else {
    // if(!this.target){
    // this.holdToGo=10;
    // }
    // else{this.holdToGo=0;this.iStand=true;};

    // console.log((Math.floor(this.stepTakt)*10))
    // if(this.type!=="turtle"||(this.draw_visible))
    if (Math.floor(this.stepTakt) % 5 === 0) {
      water_sled_create(arg);
    }

    this.x += this.gSp;
    this.y += this.vSp;

    this.iStand = false;
    this.iGetMyCell = false;

    this.stepTakt--;

    // if(!this.way.length&&this.stepTakt<=0){this.stepTakt=0;this.finish=0;};

    // console.log("ok");
  }

  // if(!this.way.length&&this.stepTakt<=0){this.finish=0;console.log("ok");};

  // console.log(this.way);
  // if(fractions[0].activeUnits[0]){
  // console.log(this.way.length);
  // };
};
