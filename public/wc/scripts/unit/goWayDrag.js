/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.goWayDrag = function (arg) {
  if (this.stepTakt < 1 && this.stepTakt >= 0) {
    this.iGetMyCell = true;

    // this.hotCell=this.cell;

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

    const nextCell_ok = this.checkNextDragCell();

    if (
      (this.way.length
        && (!nextCell_ok || nextCell_ok < 4)
        && !this.target
        && !this.handTarget)
      // &&this.handCell
      || this.way === 'go'
    ) {
      // console.log("sdjfgidhf");

      // let a=Math.floor(Math.random()*2);

      // if(a){a=Math.floor(Math.random()*1000);};

      const noFree = 1000; // +a;

      this.finish = this.way[0];
      this.sosFin = this.way[0];

      if (this.way === 'go') {
        this.finish = this.handCell;
        this.sosFin = this.handCell;
      }

      this.way = [];
      /// /*
      // console.log("hren");
      // getWay=function(arg,noFree,deep,target)
      // getVektors=function(arg,target,unit)

      getWay(this.cell.dragoon, noFree, 500);

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

      this.getGsp_Vsp();

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].dragoon = false;
        }
      }

      this.cell = this.way[this.way.length - 1];

      this.horizont = this.way[this.way.length - 1].horizont;
      this.vertikal = this.way[this.way.length - 1].vertikal;

      for (let v = this.vertikal - 1; v <= this.vertikal; v++) {
        for (let h = this.horizont; h <= this.horizont + 1; h++) {
          gameFielg[v][h].dragoon = arg;
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

      this.damagePointX = this.cell.x + 50;
      this.damagePointY = this.cell.y;

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
